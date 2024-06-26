<template>
  <div>
    <sticky-top>
      <div class="title">
        <span>{{ id == 0 ? '新建本地化' : '编辑本地化' }}</span>
        <span class="back" @click="back"> <i class="iconfont icon-fanhui"></i> 返回 </span>
      </div>
    </sticky-top>
    <el-card shadow="never">
      <el-row>
        <el-col :lg="16" :md="20" :sm="24" :xs="24">
          <el-form
            status-icon
            :rules="rules"
            ref="form"
            :model="form"
            label-position="right"
            label-width="100px"
            v-loading="formLoading"
            @submit.native.prevent
          >
            <el-form-item label="本地化名称" prop="name">
              <el-input size="medium" clearable v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="显示名称" prop="display_name">
              <el-input size="medium" clearable v-model="form.display_name"></el-input>
            </el-form-item>
            <el-form-item class="submit" label>
              <el-button type="primary" @click="submitForm('form')">保 存</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <div v-if="this.id != 0">
            <div class="header">
              <div class="header-left">
                <div class="title">
                  <el-button
                    type="primary"
                    plain
                    @click="
                      () => {
                        this.$refs['dialogForm'].show({ culture_id: this.form.id })
                      }
                    "
                    >添加本地化资源</el-button
                  >
                </div>
              </div>
              <div class="header-right">
                <el-input
                  size="medium"
                  style="margin-right: 10px"
                  v-model="pagination.key"
                  placeholder="编码"
                ></el-input>
                <el-button type="default" @click="getResources" icon="Search">查询</el-button>
              </div>
            </div>
            <lin-table
              :tableColumn="tableColumn"
              :tableData="tableData"
              :operate="operate"
              v-loading="loading"
              :pagination="pagination"
              @handleEdit="handleEdit"
              @handleDelete="handleDelete"
              @currentChange="handleCurrentChange"
            ></lin-table>
          </div>
        </el-col> </el-row
    ></el-card>
    <resource-dialog ref="dialogForm" @ok="getResources"></resource-dialog>
  </div>
</template>

<script>
import cultureApi from '../../model/culture'
import resourceApi from '../../model/resource'
import ResourceDialog from './resource-dialog'
import LinTable from '@/component/base/table/lin-table'
export default {
  components: { LinTable, ResourceDialog },
  data() {
    return {
      id: 0,
      form: {
        id: 0,
        name: '',
        display_name: '',
      },
      rules: {
        name: [{ trigger: ['blur'], required: true, message: '请输入名称' }],
        display_name: [{ trigger: ['blur'], required: true, message: '请输入显示名称' }],
      },
      showEdit: false,
      editIndex: null,
      tableData: [],
      tableColumn: [],
      operate: [],
      formLoading: false,
      loading: false,
      pagination: {
        pageSize: 10,
        pageTotal: 0,
        currentPage: 1,
        culture_id: 0,
        key: '',
      },
    }
  },
  async created() {
    this.id = this.$route.params.id == '' ? 0 : this.$route.params.id
    await this.getCulture()
    this.tableColumn = [
      { prop: 'key', label: '编码' },
      { prop: 'value', label: '名称' },
    ]
    this.operate = [
      { name: '编辑', func: 'handleEdit', type: 'primary', permission: '更新本地化资源' },
      { name: '删除', func: 'handleDelete', type: 'danger', permission: '删除本地化资源' },
    ]
    await this.getResources()
  },
  methods: {
    async getCulture() {
      if (this.id != 0) {
        this.pagination.culture_id = this.id
        this.form = await cultureApi.getCulture(this.id)
      }
    },
    async submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          let res
          this.formLoading = true
          if (this.id == 0) {
            res = await cultureApi.addCulture(this.form).finally(() => {
              this.formLoading = false
            })
          } else {
            res = await cultureApi.editCulture(this.form).finally(() => {
              this.formLoading = false
            })
          }
          this.pagination.culture_id = res.id
          this.form.id = res.id
          this.$router.replace(`/base/culture/form/${res.id}`)
        } else {
          this.$message.error('请将信息填写完整')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    async getResources() {
      if (this.pagination.culture_id != '') {
        this.loading = true
        const currentPage = this.pagination.currentPage - 1
        const res = await resourceApi
          .getResources({
            count: this.pagination.pageSize,
            page: currentPage,
            culture_id: this.pagination.culture_id,
            key: this.pagination.key,
          })
          .finally(r => {
            this.loading = false
          })
        this.tableData = [...res.items]
        this.pagination.pageTotal = res.count
      }
    },
    async handleEdit(val) {
      this.$refs['dialogForm'].show(val.row)
    },
    async handleCurrentChange(val) {
      this.pagination.currentPage = val
      await this.getResources()
    },
    handleDelete(val) {
      this.$confirm('此操作将永久删除, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(async () => {
        this.loading = true
        await resourceApi.deleteResource(val.row.id)
        await this.getResources()
        this.loading = false
      })
    },
    back() {
      this.$router.push('/base/culture/list')
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/form.scss';
@import '@/assets/style/list.scss';
</style>
