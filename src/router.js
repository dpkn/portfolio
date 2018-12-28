import Vue from 'vue';
import Router from 'vue-router';

// Import views
import Home from './views/Home.vue';
import PortfolioItem from './views/PortfolioItem.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/portfolio',
    },
    {
      path: '/portfolio',
      redirect: '/portfolio/all',
    },
    {
      path: '/portfolio/:filter?',
      name: 'portfolio',
      component: Home,
    },
    {
      path: '/project/:id',
      name: 'PortfolioItem',
      components: {
        default: '',
        modal: PortfolioItem,
      },
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // FIXME: Scrolling to top when moving back to home should be disabled
    if (savedPosition) {
      return savedPosition;
    }
    return { x: 0, y: 0 };
  },
  linkActiveClass: 'active',
});
