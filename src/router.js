/**
 * Created by Hsiang on 16/12/12.
 *
 * @name router
 * @description
 *
 * 生成路由实例的工厂函数
 *
 */
'use strict';
import VueRouter from 'vue-router';

/**
 * 路由配置表
 * */
const routes = [
  // index
  {
    path: '/',
    name: 'index',
    meta: {
      root: true,
    },
    component: require('./views/index.vue'),
  },

  {
    path: '/components',
    name: 'components',
    component: require('./views/components.vue'),
  },

  {
    path: '/introduce',
    name: 'introduce',
    component: require('./views/introduce.vue'),
  },
  {
    path: '/app',
    name: 'app',
    // meta: {
    //   inMenu: true, // 当前点击是否对
    // },
    component: require('./views/app.vue'),
  },
  {
    path: '/action-sheet',
    name: 'actionSheet',
    meta: {
      inMenu: true,
    },
    component: require('./views/action-sheet.vue'),
  },
  {
    path: '/backdrop',
    name: 'backdrop',
    component: require('./views/backdrop.vue'),
  },
  {
    path: '/button',
    name: 'button',
    component: require('./views/button.vue'),
  },
  {
    path: '/icon',
    name: 'icon',
    component: require('./views/icon.vue'),
  },
  {
    path: '/alert',
    name: 'alert',
    component: require('./views/alert.vue'),
  },
  {
    path: '/toast',
    name: 'toast',
    component: require('./views/toast.vue'),
  },
  {
    path: '/spinner',
    name: 'spinner',
    component: require('./views/spinner.vue'),
  },
  {
    path: '/loading',
    name: 'loading',
    component: require('./views/loading.vue'),
  },
  {
    path: '/modal',
    name: 'modal',
    component: require('./views/modal.vue'),
  },

  {
    path: '/toolbar',
    name: 'toolbar',
    component: require('./views/toolbar.vue'),
  },
  {
    path: '/segment',
    name: 'segment',
    component: require('./views/segment.vue'),
  },
  {
    path: '/input',
    name: 'input',
    component: require('./views/input.vue'),
  },
  {
    path: '/grid',
    name: 'grid',
    component: require('./views/grid.vue'),
  },

  // cards
  {
    path: '/cards',
    name: 'cards',
    component: require('./views/cards.vue'),
  },
  {
    path: '/basicCards',
    name: 'cards.basicCards',
    component: require('./views/cards/basicCards.vue'),
  },
  {
    path: '/listsInCards',
    name: 'cards.listsInCards',
    component: require('./views/cards/listsInCards.vue'),
  },
  {
    path: '/advancedCards',
    name: 'cards.advancedCards',
    component: require('./views/cards/advancedCards.vue'),
  },

  {
    path: '/searchbar',
    name: 'searchbar',
    component: require('./views/searchbar.vue'),
  },
  //list组件系列
  {
    path: '/list',
    name: 'list',
    component: require('./views/list.vue'),
  },
  {
    path: '/listForAll',
    name: 'list.listForAll',
    component: require('./views/list/listForAll.vue'),
  },
  {
    path: '/basicList',
    name: 'list.basicList',
    component: require('./views/list/basicList.vue'),
  },
  {
    path: '/noLine',
    name: 'list.noLine',
    component: require('./views/list/noLine.vue'),
  },
  {
    path: '/insetList',
    name: 'list.insetList',
    component: require('./views/list/insetList.vue'),
  },
  {
    path: '/listDividers',
    name: 'list.listDividers',
    component: require('./views/list/listDividers.vue'),
  },
  {
    path: '/listHeaders',
    name: 'list.listHeaders',
    component: require('./views/list/listHeaders.vue'),
  },
  {
    path: '/iconList',
    name: 'list.iconList',
    component: require('./views/list/iconList.vue'),
  },
  {
    path: '/avatarList',
    name: 'list.avatarList',
    component: require('./views/list/avatarList.vue'),
  },
  {
    path: '/multi-lineList',
    name: 'list.multi-lineList',
    component: require('./views/list/multi-lineList.vue'),
  },
  {
    path: '/slidingList',
    name: 'list.slidingList',
    component: require('./views/list/slidingList.vue'),
  },
  {
    path: '/thumbnailList',
    name: 'list.thumbnailList',
    component: require('./views/list/ThumbnailList.vue'),
  },
  // Tabs
  {
    path: '/tabs',
    name: 'tabs',
    component: require('./views/tabs.vue'),
    redirect: {name: 'tabs.tab2'},
    children: [
      {
        path: 'tab1',
        name: 'tabs.tab1',
        component: require('./views/tabs/tab1.vue'),
      },
      {
        path: 'tab2',
        name: 'tabs.tab2',
        component: require('./views/tabs/tab2.vue'),
      },
      {
        path: 'tab3',
        name: 'tabs.tab3',
        component: require('./views/tabs/tab3.vue'),
      }
    ]
  },

  {
    path: '/fab',
    name: 'fab',
    component: require('./views/fab.vue'),
  },


  {
    path: '/content',
    name: 'content',
    component: require('./views/content.vue'),
  },
  {
    path: '/demo',
    name: 'demo',
    component: require('./views/demo.vue'),
  },
];

/**
 * 初始化实例
 * */
const router = new VueRouter({
  mode: 'hash', //  hash 模式  history 模式
  base: '/', // 默认值: "/",应用的基路径。例如，如果整个单页应用服务在 /app/ 下，然后 base 就应该设为 "/app/"。
  routes: routes // （缩写）相当于 routes: routes
});

/**
 * 路由安装及钩子配置
 * */
function routerFactory (Vue) {
  Vue.use(VueRouter);

  router.beforeEach((to, from, next) => {
    !!Vue.prototype.$eventBus && Vue.prototype.$eventBus.$emit('onPageEnter', {to, from});
    next();
  });

  router.afterEach((to, from) => {
    !!Vue.prototype.$eventBus && Vue.prototype.$eventBus.$emit('onPageLeave', {to, from});
  });





  return router
}
module.exports = routerFactory;


