const baseRouter = {
  route: null,
  name: null,
  title: "基础资料",
  type: "folder", // 类型: folder, tab, view
  icon: "iconfont icon-tushuguanli",
  order: null,
  inNav: true,
  children: [
    {
      name: null,
      title: "字典管理",
      type: "view",
      name: "ItemList",
      route: "/base/item",
      icon: 'iconfont icon-tuichu',
      filePath: "plugin/base/view/item/item-list.vue",
      inNav: true
    },
    {
      name: null,
      title: "字典类别管理",
      type: "view",
      name: "TypeList",
      icon: 'iconfont icon-top',
      route: "/base/type",
      filePath: "plugin/base/view/type/type-list.vue",
      inNav: true
    }
  ]
};

export default baseRouter;
