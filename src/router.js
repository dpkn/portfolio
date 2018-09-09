import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Test from './views/TestPage.vue';
import PortfolioItem from './views/PortfolioItem.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/PortfolioItem.vue'),
    },
    {
      path: '/test',
      name: 'test',
      component: Test,
    },
    {
      path: '/:id',
      name: 'PortfolioItem',
      component: PortfolioItem,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    /*
    if (savedPosition) {
      return savedPosition;
    } */
    return { x: 0, y: 0 };
  },
});
