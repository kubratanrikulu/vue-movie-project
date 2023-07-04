import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import HomePage from '@/views/HomePage.vue'
import FavoriteFilms from '@/views/FavoriteFilms.vue'
import FilmDetailsPage from '@/views/FilmDetailsPage.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/favorites',
    name: 'Favorite',
    component: FavoriteFilms
  },
  {
    path: '/film/:id',
    name: 'FilmDetails',
    component: FilmDetailsPage
  }
]

const router = new VueRouter({
  routes
})

export default router