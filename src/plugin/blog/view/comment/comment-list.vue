<template>
  <div>
    <el-card>
      <el-form ref="form" :model="pagination" :inline="true">
        <el-form-item label="评论内容" prop="channel_name">
          <el-input
            clearable
            size="medium"
            style="margin-right: 10px"
            v-model="pagination.text"
            @clear="getComments"
            placeholder="评论内容"
          >
          </el-input>
        </el-form-item>
        <el-form-item label="状态" prop="channel_name">
          <el-select
            clearable
            v-model="pagination.is_audit"
            placeholder="请选择状态"
            style="width: 120px"
            @change="getComments"
          >
            <el-option v-for="item in statusItems" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="default" icon="Search" @click="getComments">查询</el-button>
        </el-form-item>
      </el-form>
      <lin-table
        :tableColumn="tableColumn"
        :tableData="tableData"
        :operate="operate"
        @handleDetail="handleDetail"
        @handlePass="handlePass"
        @handleDelete="handleDelete"
        v-loading="loading"
        :pagination="pagination"
        @currentChange="handleCurrentChange"
      >
        <template v-slot:is_audit="scope">
          <el-tag size="medium" v-if="scope.row.is_audit == true" type="success">审核通过</el-tag>
          <el-tag size="medium" v-else type="danger">拉黑</el-tag>
        </template>
        <template v-slot:userinfo="scope">
          <span class="item username clickable" v-if="scope.row.user_info">
            <a :href="'/blog/detail/' + scope.row.user_info.id">{{ scope.row.user_info.nickname }}</a>
          </span>
        </template>
      </lin-table>
    </el-card>
    <comment-dialog ref="dialogForm" @ok="getComments"></comment-dialog>
  </div>
</template>

<script>
import { getCurrentInstance } from 'vue'
import LinTable from '@/component/base/table/lin-table'
import CommentDialog from './comment-dialog'
import commentApi from '../../model/comment'

export default {
  name: 'CommentList',
  components: { LinTable, CommentDialog },
  data() {
    return {
      id: 0,
      refreshPagination: true,
      editIndex: null,
      tableData: [],
      tableColumn: [],
      operate: [],
      activeTab: '修改信息',
      loading: false,
      statusItems: [
        {
          label: '请选择',
          value: null,
        },
        {
          label: '审核通过',
          value: true,
        },
        {
          label: '拉黑',
          value: false,
        },
      ],
      pagination: {
        pageSize: 10,
        pageTotal: 0,
        currentPage: 1,
        text: '',
        is_audit: null,
      },
    }
  },
  methods: {
    async getComments() {
      const currentPage = this.pagination.currentPage - 1
      this.loading = true
      const res = await commentApi
        .getComments({
          count: this.pagination.pageSize,
          page: currentPage,
          text: this.pagination.text,
          is_audit: this.pagination.is_audit,
        })
        .finally(r => {
          this.loading = false
        })
      this.tableData = [...res.items]
      this.pagination.pageTotal = res.count
    },
    buttonMethods(func, index, row) {
      console.log(func, index, row)
    },
    handleDetail(val) {
      this.$refs['dialogForm'].show(val.row)
    },

    async handleCurrentChange(val) {
      this.pagination.currentPage = val
      this.loading = true
      await this.getComments().finally(() => {
        this.loading = false
      })
    },
    handleDelete(val) {
      let res
      this.$confirm('此操作将永久删除该评论, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(async () => {
        this.loading = true
        res = await commentApi.delectComment(val.row.id).finally(() => {
          this.loading = false
        })
        if (res.code === 0) {
          this.loading = false
          if (this.pagination.pageTotal % this.pagination.pageSize === 1 && this.pagination.currentPage !== 1) {
            this.pagination.currentPage--
          }
          await this.getComments()
          this.$message({
            type: 'success',
            message: `${res.message}`,
          })
        } else {
          this.loading = false
          this.$message.error(`${res.message}`)
        }
      })
    },
    async handlePass(val) {
      await commentApi.editComment(val.row.id, true)
      this.$message.success('审核成功')
      await this.getComments()
    },
  },
  async created() {
    await this.getComments()
    this.tableColumn = [
      {
        prop: 'userinfo',
        label: '用户',
        scopedSlots: { customRender: 'userinfo' },
      },
      { prop: 'text', label: '评论内容', width: 700 },
      {
        prop: 'is_audit',
        label: '状态',
        scopedSlots: { customRender: 'is_audit' },
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
      { name: '通过', func: 'handlePass', type: 'default', permission: '审核评论' },
      { name: '审核', func: 'handleDetail', type: 'primary', permission: '审核评论' },
      { name: '删除', func: 'handleDelete', type: 'danger', permission: '删除评论' },
    ]
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/list.scss';
</style>
