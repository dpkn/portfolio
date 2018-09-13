import Vue from 'vue';
import Router from 'vue-router';

// Import views
import Home from './views/Home.vue';
import Contact from './views/Contact.vue';
import PortfolioItem from './views/PortfolioItem.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/portfolio/all',
    },
    {
      path: '/portfolio/:filter',
      name: 'portfolioFilter',
      component: Home,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
    {
      path: '/:id',
      name: 'PortfolioItem',
      component: PortfolioItem,
    },
  ],
  // scrollBehavior(to, from, savedPosition) {
  // //  return { x: 0, y: 0 };
  // },
  linkActiveClass: 'active',
});
