import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
   base: '/content-vertex/',
   routes: [
       {
           path: '/',
           component: require('../pages/Dashboard.vue'),
           name: 'dashboard'
       },
       {
           path: '/sites',
           component: require('../pages/sites/Index.vue'),
           name: 'site:index'
       },
       {
           path: '/sites/:siteId',
           component: require('../pages/sites/Edit.vue'),
           name: 'site:edit'
       },
       {
           path: '/sites/:siteId/menus/:menuId',
           component: require('../pages/sites/menus/Edit.vue'),
           name: 'site:menu:edit'
       },
       {
           path: '/pages',
           component: require('../pages/pages/Index.vue'),
           name: 'page:index'
       },
       {
           path: '/pages/:pageId',
           component: require('../pages/pages/Edit.vue'),
           name: 'page:edit'
       },
       {
           path: '/blocks',
           component: require('../pages/blocks/Index.vue'),
           name: 'block:index'
       },
       {
           path: '/blocks/:blockId',
           component: require('../pages/blocks/Edit.vue'),
           name: 'block:edit'
       },
       {
           path: '/media',
           component: require('../pages/media/Index.vue'),
           name: 'media:index'
       }
   ],
});