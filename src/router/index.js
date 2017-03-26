import Vue from 'vue'
import Router from 'vue-router'
import Profile from '@/components/Profile'
import Education from '@/components/Education'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/Education',
      name: 'Education',
      component: Education
    },
    {
      path: '/Skills',
      name: 'Skills',
      component: Skills
    },
    {
      path: '/Experience',
      name: 'Experience',
      component: Experience
    },
    {
      path: '/Contact Me',
      name: 'Contact',
      component: Contact
    }
  ],
  mode: 'history'
})
