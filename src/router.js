import Vue from 'vue';
import Router from 'vue-router';
import Meta from 'vue-meta';

// Import views
import Home from './views/Home.vue';
import PortfolioItem from './views/PortfolioItem.vue';

Vue.use(Router);

Vue.use(Meta, {
  tagIDKeyName: 'vmid', // the property name that vue-meta uses to determine whether to overwrite or append a tag
});

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/portfolio',
    },
    {
      path: '/portfolio',
      redirect: '/portfolio/noteworthy',
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
    {
      path: '*',
      redirect: 'portfolio/noteworthy',
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return savedPosition;
  },
  linkActiveClass: 'active',
});
