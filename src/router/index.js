import Vue from 'vue'
import VueRouter from 'vue-router'

import index from '../components/index'
import login from '../components/login'
import user from '../components/user'
import home from '../components/home'
import task from '../components/task'
import submit from '../components/submit'
import alsubmit from '../components/already-submit'
import answer from '../components/answer'
import workcontent from '../components/workcontent'
import workscore from '../components/workscore'
import manage from '../components/manage'
import principal from '../components/principal'
import mission from '../components/mission'
import publishwork from '../components/publishwork'
import nocheck from '../components/nocheck'
import yescheck from '../components/yescheck'
import scans from '../components/scanswer'
import sumscore from '../components/sumscore'
import publish from '../components/publish'
import pbanswer from  '../components/pbanswer'
import nocheckwork from '../components/nocheckwork'
import yeschecklook from '../components/yeschecklook'
Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'index'
  },
  {
    path:'/index',
    component:index
  },
  {
    path:'/login',
    component:login
  },
  {
    path:'/user',
    component:user,
    children:[
      {
        path:'',
        redirect:'home',
      },
      {
        path:'home',
        component:home
      },
      {
        path:'task',
        component:task,
        children:[
          {
            path:'',
            redirect:'submit'
          },
          {
            path:'submit',
            component:submit
          },
          {
            path:'already-submit',
            component:alsubmit
          },
          {
            path:'answer',
            component:answer
          },
          {
            path:'workcontent',
            component:workcontent
          },
          {
            path:'workscore',
            component:workscore
          },
          
        ]
      }
    ]
  },
  {
    path:'/manage',
    component:manage,
    children:[
      {
        path:'',
        redirect:'principal'
      },
      {
        path:'principal',
        component:principal
      },
      {
        path:'mission',
        component:mission,
        children:[
          {
            path:'',
            redirect:'publishwork',
          },
          {
            path:'publishwork',
            component:publishwork
          },
          {
            path:'nocheck',
            component:nocheck
          },
          {
            path:'yescheck',
            component:yescheck
          },
          {
            path:'scans',
            component:scans
          },
          {
            path:'rank',
            component:sumscore
          },
          {
            path:'publish',
            component:publish
          },
          {
            path:'publishanswer',
            component:pbanswer
          },
          {
            path:'nocheckwork',
            component:nocheckwork
          },
          {
            path:'yeschecklook',
            component:yeschecklook
          }
        ]
      }
    ]
  }
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
