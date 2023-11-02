import { createRouter, createWebHistory } from 'vue-router'
import ProfileList from '../views/ProfileList.vue'
import CreateProfileList from '../views/CreateProfileList.vue'
import UpdateProfileList from '../views/UpdateProfileList.vue'


const routes = [
  {
    path: '/',
    name: 'ProfileList',
    component: ProfileList
  },
  {
    path: '/add',
    name: 'CreateProfileList',
    component: CreateProfileList
  },
  {
    path: '/update/:id',
    name: 'UpdateProfileList',
    component: UpdateProfileList
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
