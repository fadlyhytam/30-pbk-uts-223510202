import { createRouter, createWebHistory } from 'vue-router'
import TodosComponent from '../components/TodosComponent.vue'
import PostComponent from '../components/PostComponent.vue'
import AlbumComponent from '../components/AlbumComponent.vue'
import PhotoComponent from '../components/PhotoComponent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/posts'
    },
    {
      path: '/posts',
      name: 'posts',
      component: PostComponent
    },
    {
      path: '/todos',
      name: 'todos',
      component: TodosComponent
    },
    {
      path: '/albums',
      name: 'albums',
      component: AlbumComponent
    },
    {
      path: '/albums/:id',
      name: 'album-photos',
      component: PhotoComponent
    }
  ]
})

export default router
