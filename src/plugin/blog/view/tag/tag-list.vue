<template>
  <div>
    <el-card shadow="never">
      <el-form ref="form" :model="pagination" :inline="true">
        <el-form-item label="标签名" prop="typeCode">
          <el-input
            size="medium"
            style="margin-right: 30px"
            v-model="pagination.tag_name"
            placeholder="标签名"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="default" icon="Search" @click="refresh">查询</el-button>
          <el-button
            type="primary"
            icon="Edit"
            v-permission="'新增标签'"
            @click="
              () => {
                this.$refs.tagFormDialog.show(0)
              }
            "
            >新增标签</el-button
          >
        </el-form-item>
      </el-form>
      <lin-table
        :tableColumn="tableColumn"
        :tableData="tableData"
        :operate="operate"
        :operateWidth="230"
        @handleEdit="handleEdit"
        @handleDelete="handleDelete"
        @handleCorrect="handleCorrect"
        v-loading="loading"
        :pagination="pagination"
        @currentChange="handleCurrentChange"
      >
        <template v-slot:status="scope">
          <el-switch v-model="scope.row.status" disabled active-color="#13ce66"></el-switch>
        </template>
        <template v-slot:thumbnail_display="scope">
          <div class="thumb" :style="'background-image: url(' + scope.row.thumbnail_display + ');'"></div>
        </template>
      </lin-table>
    </el-card>
    <tag-form-dialog ref="tagFormDialog" @success="editClose"></tag-form-dialog>
  </div>
</template>

<script>
import { getCurrentInstance } from 'vue'
import LinTable from '@/component/base/table/lin-table'
import tagApi from '../../model/tag'
import TagFormDialog from './tag-form-dialog'

export default {
  name: 'TagList',
  components: { LinTable, TagFormDialog },
  data() {
    return {
      tableData: [],
      tableColumn: [],
      operate: [],
      loading: false,
      pagination: {
        pageSize: 10,
        pageTotal: 0,
        currentPage: 1,
      },
    }
  },
  methods: {
    async getTags() {
      const currentPage = this.pagination.currentPage - 1
      this.loading = true
      const res = await tagApi
        .getTags({
          count: this.pagination.pageSize,
          page: currentPage,
          tag_name: this.pagination.tag_name,
        })
        .finally(() => {
          this.loading = false
        })
      this.tableData = [...res.items]
      this.pagination.pageTotal = res.count
    },
    async handleEdit(val) {
      this.$refs.tagFormDialog.show(val.row.id)
    },
    async handleCurrentChange(val) {
      this.pagination.currentPage = val
      this.loading = true
      await this.getTags().finally(() => {
        this.loading = false
      })
    },
    handleDelete(val) {
      let res
      this.$confirm('此操作将永久删除该标签项, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(async () => {
        this.loading = true
        res = await tagApi.deleteTag(val.row.id).finally(() => {
          this.loading = false
        })
        if (res.code === 0) {
          await this.getTags()
          this.$message({
            type: 'success',
            message: `${res.message}`,
          })
        }
      })
    },
    async refresh() {
      await this.getTags()
    },

    async handleChange() {
      this.currentPage = 1
      this.loading = true
      await this.getTags()
      this.loading = false
    },
    async editClose() {
      await this.getTags()
    },
    async handleCorrect(val) {
      await tagApi.correctTagCount(val.row.id)
      await this.getTags()
    },
  },
  async created() {
    this.tableColumn = [
      { prop: 'tag_name', label: '标签名' },
      { prop: 'alias', label: '别名' },
      { prop: 'article_count', label: '文章数量', width: '100' },
      {
        prop: 'status',
        label: '状态',
        scopedSlots: { customRender: 'status' },
      },
      {
        prop: 'thumbnail_display',
        label: '封面',
        scopedSlots: { customRender: 'thumbnail_display' },
      },
      {
        prop: 'create_time',
        label: '创建时间',
        scope: 'create_time',
        customRender(row, column) {
          const { appContext } = getCurrentInstance()
          return appContext.config.globalProperties.$filters.filterTimeYmdHms(column)
        },
      },
    ]
    this.operate = [
      { name: '编辑', func: 'handleEdit', type: 'primary', permission: '编辑标签' },
      { name: '删除', func: 'handleDelete', type: 'danger', permission: '删除标签' },
      { name: '校正数量', func: 'handleCorrect', type: 'default', permission: '校正文章数量' },
    ]

    await this.getTags()
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/list.scss';
</style>
