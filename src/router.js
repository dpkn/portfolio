import Vue from 'vue';
import Router from 'vue-router';

// Import views
import Home from './views/Home.vue';
import Contact from './views/Contact.vue';
import PortfolioItem from './views/PortfolioItem.vue';

import SubPage from './views/SubPage.vue';
import SubPageContent from './views/SubPageContent.vue';

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
      path: '/hku',
      name: 'Hku',
      component: SubPage,
      children: [
        {
          path: ':id',
          component: SubPageContent,
        },
      ],
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
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  linkActiveClass: 'active',
});
