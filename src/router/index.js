import Vue from 'vue'
import Router from 'vue-router'
import Results from '@/components/Results'
import Attendance from '@/components/Attendance'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Results',
      component: Results
    },
    {
      path: '/attendance',
      name: 'Attendance',
      component: Attendance
    }
  ]
})
