import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Mission from '@/components/Mission'
import Donate from '@/components/Donate'
import FindingHome from '@/components/projects/FindingHome'
import HondurasMinistries from '@/components/projects/HondurasMinistries'
import MustardSeed from '@/components/projects/MustardSeed'
import VelvetAshes from '@/components/projects/VelvetAshes'
import FlyingTreasure from '@/components/projects/FlyingTreasure'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/mission',
      name: 'Mission',
      component: Mission
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
    },
    {
      path: '/projects/mustard-seed',
      name: 'mustardSeed',
      component: MustardSeed
    },
    {
      path: '/projects/velvet-ashes',
      name: 'velvetAshes',
      component: VelvetAshes
    },
    {
      path: '/projects/flying-treasure',
      name: 'flyingTreasure',
      component: FlyingTreasure
    }
  ]
})
