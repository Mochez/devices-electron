import Vue from 'vue'
import VueRouter from 'vue-router'
import detailView from '../views/detailView';
import listView from '../views/listView';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'list',
    component: listView
  },
  {
    path: '/:id',
    name: 'detail',
    component: detailView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
