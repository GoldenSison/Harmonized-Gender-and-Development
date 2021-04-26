import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Guidelines from '../views/Guidelines.vue'
import Evaluation from '../views/Evaluation.vue'
import Result from '../views/Result_view.vue'
import Print from '../views/Print_view.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Guidelines',
    name: 'Guidelines',
    component: Guidelines
  },
  {
    path: '/Evaluation',
    name: 'Evaluation',
    component: Evaluation
  },
  {
    path: '/Result',
    name: 'Result',
    component: Result
  },
  {
    path: '/Print',
    name: 'Print',
    component: Print
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash,
        behavior: 'smooth',
        offset: { x: 0, y: 50 }
      }
    }
  }
})



export default router
