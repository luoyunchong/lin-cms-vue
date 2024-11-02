const linCmsUiRouter = {
  route: null,
  name: null,
  title: 'UI',
  type: 'folder',
  icon: 'iconfont icon-jiemiansheji',
  filePath: 'view/lin-cms-ui/',
  order: null,
  inNav: true,
  children: [
    {
      title: 'Basic',
      type: 'folder',
      name: null,
      route: '/lin-cms-ui/basic/',
      filePath: 'plugin/lin-cms-ui/view/basic/',
      inNav: true,
      icon: 'iconfont icon-jiemiansheji',
      permission: null,
      children: [
        {
          title: 'Icon 图标',
          type: 'view',
          name: null,
          route: '/lin-cms-ui/basic/icon',
          filePath: 'plugin/lin-cms-ui/view/basic/icon/icon.vue',
          inNav: true,
          icon: 'iconfont icon-jiemiansheji',
          permission: null,
        },
      ],
    },
    {
      title: 'Data',
      type: 'folder',
      name: null,
      route: '/lin-cms-ui/data/',
      filePath: 'plugin/lin-cms-ui/view/data/',
      inNav: true,
      icon: 'iconfont icon-jiemiansheji',
      permission: null,
      children: [
        {
          title: 'Pagination 分页',
          type: 'view',
          name: null,
          route: '/lin-cms-ui/data/pagination',
          filePath: 'plugin/lin-cms-ui/view/data/pagination/pagination.vue',
          inNav: true,
          icon: 'iconfont icon-jiemiansheji',
          permission: null,
        },
        {
          title: 'Progress 进度条',
          type: 'view',
          name: null,
          route: '/lin-cms-ui/data/progress/',
          filePath: 'plugin/lin-cms-ui/view/data/progress/progress.vue',
          inNav: true,
          icon: 'iconfont icon-jiemiansheji',
          permission: null,
        },
        {
          title: 'Badge 标记',
          type: 'view',
          name: null,
          route: '/lin-cms-ui/data/badge',
          filePath: 'plugin/lin-cms-ui/view/data/badge/badge.vue',
          inNav: true,
          icon: 'iconfont icon-jiemiansheji',
          permission: null,
        },
        {
          title: 'Tag 标签',
          type: 'view',
          name: null,
          route: '/lin-cms-ui/data/tag',
          filePath: 'plugin/lin-cms-ui/view/data/tag/tag.vue',
          inNav: true,
          icon: 'iconfont icon-jiemiansheji',
          permission: null,
        },
      ],
    },
    {
      title: 'Navigation',
      type: 'folder',
      name: null,
      route: '/lin-cms-ui/navigation',
      filePath: 'plugin/lin-cms-ui/view/navigation/',
      inNav: true,
      icon: 'iconfont icon-jiemiansheji',
      permission: null,
      children: [
        {
          title: 'Tabs 标签页',
          type: 'view',
          name: null,
          route: '/lin-cms-ui/navigation/tab',
          filePath: 'plugin/lin-cms-ui/view/navigation/tab/tab.vue',
          inNav: true,
          icon: 'iconfont icon-jiemiansheji',
          permission: null,
        },
        {
          title: 'Breadcrumb 面包屑',
          type: 'view',
          name: null,
          route: '/lin-cms-ui/navigation/breadcrumb',
          filePath: 'plugin/lin-cms-ui/view/navigation/breadcrumb.vue',
          inNav: true,
          icon: 'iconfont icon-jiemiansheji',
          permission: null,
        },
        {
          title: 'Dropdown 下拉菜单',
          type: 'view',
          name: null,
          route: '/lin-cms-ui/navigation/dropdown',
          filePath: 'plugin/lin-cms-ui/view/navigation/dropdown.vue',
          inNav: true,
          icon: 'iconfont icon-jiemiansheji',
          permission: null,
        },
        {
          title: 'Steps 步骤条',
          type: 'view',
          name: null,
          route: '/lin-cms-ui/navigation/steps',
          filePath: 'plugin/lin-cms-ui/view/navigation/steps.vue',
          inNav: true,
          icon: 'iconfont icon-jiemiansheji',
          permission: null,
        },
      ],
    },
    {
      title: 'Table 表格',
      type: 'folder',
      name: null,
      route: '/lin-cms-ui/table',
      filePath: 'plugin/lin-cms-ui/view/table/',
      inNav: true,
      icon: 'iconfont icon-jiemiansheji',
      permission: null,
      children: [
        {
          title: '基础示例',
          type: 'view',
          name: null,
          route: '/lin-cms-ui/table/base',
          filePath: 'plugin/lin-cms-ui/view/table/table.vue',
          inNav: true,
          icon: 'iconfont icon-jiemiansheji',
        },
        {
          title: '组合示例',
          type: 'view',
          name: null,
          route: '/lin-cms-ui/table/combo',
          filePath: 'plugin/lin-cms-ui/view/table/table-combo.vue',
          inNav: true,
          icon: 'iconfont icon-jiemiansheji',
        },
      ],
    },
    {
      title: 'Form 表单 ',
      type: 'folder',
      name: null,
      route: '/lin-cms-ui/form/base',
      filePath: 'plugin/lin-cms-ui/view/form/',
      inNav: true,
      icon: 'iconfont icon-jiemiansheji',
      permission: null,
      children: [
        {
          title: 'Input',
          type: 'view',
          name: null,
          route: '/lin-cms-ui/form/input',
          filePath: 'plugin/lin-cms-ui/view/form/input.vue',
          inNav: true,
          icon: 'iconfont icon-jiemiansheji',
        },
        {
          title: 'MultipleInput',
          type: 'view',
          name: null,
          route: '/lin-cms-ui/form/multiple-input',
          filePath: 'plugin/lin-cms-ui/view/form/multiple-input.vue',
          inNav: true,
          icon: 'iconfont icon-jiemiansheji',
        },
        {
          title: 'Radio',
          type: 'view',
          name: null,
          route: '/lin-cms-ui/form/radio',
          filePath: 'plugin/lin-cms-ui/view/form/radio.vue',
          inNav: true,
          icon: 'iconfont icon-jiemiansheji',
        },
        {
          title: 'Checkbox',
          type: 'view',
          name: null,
          route: '/lin-cms-ui/form/checkbox',
          filePath: 'plugin/lin-cms-ui/view/form/checkbox.vue',
          inNav: true,
          icon: 'iconfont icon-jiemiansheji',
        },
        {
          title: 'Select',
          type: 'view',
          name: null,
          route: '/lin-cms-ui/form/select',
          filePath: 'plugin/lin-cms-ui/view/form/select.vue',
          inNav: true,
          icon: 'iconfont icon-jiemiansheji',
        },
        {
          title: 'Switch 开关',
          type: 'view',
          name: null,
          route: '/lin-cms-ui/form/switch',
          filePath: 'plugin/lin-cms-ui/view/form/switch/switch.vue',
          inNav: true,
          icon: 'iconfont icon-jiemiansheji',
          permission: null,
        },
        {
          title: 'Rate 评分',
          type: 'view',
          name: null,
          route: '/lin-cms-ui/form/rate',
          filePath: 'plugin/lin-cms-ui/view/form/rate/rate.vue',
          inNav: true,
          icon: 'iconfont icon-jiemiansheji',
          permission: null,
        },
        {
          title: 'TimePicker 时间选择器',
          type: 'view',
          name: null,
          route: '/lin-cms-ui/form/timePicker',
          filePath: 'plugin/lin-cms-ui/view/form/time-picker.vue',
          inNav: true,
          icon: 'iconfont icon-jiemiansheji',
          permission: null,
        },
        {
          title: 'DateTimePicker 日期时间选择器',
          type: 'view',
          name: null,
          route: '/lin-cms-ui/form/dateTimePicker',
          filePath: 'plugin/lin-cms-ui/view/form/date-time-picker.vue',
          inNav: true,
          icon: 'iconfont icon-jiemiansheji',
          permission: null,
        },
        {
          title: 'DatePicker 日期选择器',
          type: 'view',
          name: null,
          route: '/lin-cms-ui/form/datePicker',
          filePath: 'plugin/lin-cms-ui/view/form/date-picker.vue',
          inNav: true,
          icon: 'iconfont icon-jiemiansheji',
          permission: null,
        },
        {
          title: 'Cascader 级联选择器',
          type: 'view',
          name: null,
          route: '/lin-cms-ui/form/cascader',
          filePath: 'plugin/lin-cms-ui/view/form/cascader.vue',
          inNav: true,
          icon: 'iconfont icon-jiemiansheji',
          permission: null,
        },
        {
          title: 'Slider 滑块',
          type: 'view',
          name: null,
          route: '/lin-cms-ui/form/slider',
          filePath: 'plugin/lin-cms-ui/view/form/slider.vue',
          inNav: true,
          icon: 'iconfont icon-jiemiansheji',
          permission: null,
        },
      ],
    },
    {
      title: 'Notice 通知 ',
      type: 'folder',
      name: null,
      route: '/lin-cms-ui/notice/base',
      filePath: 'plugin/lin-cms-ui/view/notice/',
      inNav: true,
      icon: 'iconfont icon-jiemiansheji',
      permission: null,
      children: [
        {
          title: 'Alert 警告',
          type: 'view',
          name: null,
          route: '/lin-cms-ui/notice/alert',
          filePath: 'plugin/lin-cms-ui/view/notice/alert.vue',
          inNav: true,
          icon: 'iconfont icon-jiemiansheji',
        },
        {
          title: 'Message 消息提示',
          type: 'view',
          name: null,
          route: '/lin-cms-ui/notice/message',
          filePath: 'plugin/lin-cms-ui/view/notice/message.vue',
          inNav: true,
          icon: 'iconfont icon-jiemiansheji',
        },
        {
          title: 'Notification 通知',
          type: 'view',
          name: null,
          route: '/lin-cms-ui/notice/notification',
          filePath: 'plugin/lin-cms-ui/view/notice/notification.vue',
          inNav: true,
          icon: 'iconfont icon-jiemiansheji',
        },
        {
          title: 'Loading 加载',
          type: 'view',
          name: null,
          route: '/lin-cms-ui/notice/loading',
          filePath: 'plugin/lin-cms-ui/view/notice/loading.vue',
          inNav: true,
          icon: 'iconfont icon-jiemiansheji',
        },
      ],
    },
    {
      title: 'Others',
      type: 'folder',
      name: null,
      route: '/lin-cms-ui/others/base',
      filePath: 'plugin/lin-cms-ui/view/others/',
      inNav: true,
      icon: 'iconfont icon-jiemiansheji',
      permission: null,
      children: [
        {
          title: 'Dialog 对话框',
          type: 'view',
          name: null,
          route: '/lin-cms-ui/other/dialog',
          filePath: 'plugin/lin-cms-ui/view/other/dialog.vue',
          inNav: true,
          icon: 'iconfont icon-jiemiansheji',
          permission: null,
        },
        {
          title: 'Timeline 时间线',
          type: 'view',
          name: null,
          route: '/lin-cms-ui/other/timeline',
          filePath: 'plugin/lin-cms-ui/view/other/timeline.vue',
          inNav: true,
          icon: 'iconfont icon-jiemiansheji',
          permission: null,
        },
      ],
    },
  ],
}

export default linCmsUiRouter
