import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'
import Projects from '@/components/Projects'
import Team from '@/components/Team'
import Contact from '@/components/Contact'
import Donate from '@/components/Donate'
import FindingHome from '@/components/projects/FindingHome'
import HondurasMinistries from '@/components/projects/HondurasMinistries'

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
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/donate',
      name: 'Donate',
      component: Donate
    },
    {
      path: '/projects/finding-home',
      name: 'findingHome',
      component: FindingHome
    },
    {
      path: '/projects/honduras-ministries',
      name: 'hondurasMinistries',
      component: HondurasMinistries
    }
  ]
})
