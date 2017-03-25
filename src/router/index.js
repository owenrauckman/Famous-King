import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'
import Projects from '@/components/Projects'
import Team from '@/components/Team'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/team',
      name: 'Team',
      component: Team
    }
  ]
})
