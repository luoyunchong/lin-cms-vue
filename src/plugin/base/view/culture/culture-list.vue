<template>
  <div>
    <el-card shadow="never">
      <el-form ref="form" :model="query" :inline="true">
        <el-form-item>
          <el-button
            type="primary"
            icon="Edit"
            v-permission="'新增本地化'"
            @click="
              () => {
                this.$router.push(`/base/culture/form`)
              }
            "
            >新增本地化</el-button
          >
          <el-button type="default" @click="refresh" icon="Search"> 查询 </el-button>
        </el-form-item>
      </el-form>
      <lin-table
        :tableColumn="tableColumn"
        :tableData="tableData"
        :operate="operate"
        @handleEdit="handleEdit"
        @handleDelete="handleDelete"
        v-loading="loading"
      ></lin-table>
    </el-card>
  </div>
</template>

<script>
import cultureApi from '../../model/culture'
import LinTable from '@/component/base/table/lin-table'
export default {
  components: { LinTable },
  data() {
    return {
      refreshPagination: true,
      editIndex: null,
      tableData: [],
      tableColumn: [],
      operate: [],
      loading: false,
    }
  },
  methods: {
    async getCultures() {
      this.loading = true
      this.tableData = await cultureApi.getCultures().finally(r => {
        this.loading = false
      })
    },
    async handleEdit(val) {
      this.$router.push(`/base/culture/form/${val.row.id}`)
    },
    handleDelete(val) {
      this.$confirm('此操作将永久删除, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(async () => {
        this.loading = true
        await cultureApi.deleteCulture(val.row.id).finally(() => {
          this.loading = false
        })
        this.loading = false
        await this.getCultures()
        this.$message({
          type: 'success',
          message: `删除成功`,
        })
      })
    },
    async refresh() {
      await this.getCultures()
    },
  },
  async created() {
    this.tableColumn = [
      { prop: 'name', label: '编码' },
      { prop: 'display_name', label: '名称' },
    ]
    this.operate = [
      { name: '编辑', func: 'handleEdit', type: 'primary', permission: '更新本地化' },
      { name: '删除', func: 'handleDelete', type: 'danger', permission: '删除本地化' },
    ]

    await this.getCultures()
  },
  beforeDestroy() {},
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/list.scss';
</style>
