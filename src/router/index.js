import Vue from "vue";
import VueRouter from "vue-router";



import appLayout from '@/components/layouts/app-layout.vue'
import adminLayout from '@/components/layouts/admin-layout.vue'

import Login from '@/components/pages/login.vue'
import admindashboard from '@/components/pages/dashboards/admin-dashboard.vue'

Vue.use(VueRouter);

function guardMyroute(to, from, next)
{
 var isAuthenticated= false;

if(localStorage.getItem('access_token'))
  isAuthenticated = true;
 else
  isAuthenticated= false;
 if(isAuthenticated) 
 {
  next(); // allow to enter route
 } 
 else
 {
  next('/'); // go to '/login';
 }
}

const routes = [
  {
    path: '/',
    redirect: 'login',
    component: appLayout,
   
  },
  {
    path: '/login',
    component: appLayout,
    children: [
      {
        path: '/login',
        name: 'Login',
        component: Login
      },
    ]
  },

  {
    path: '/dashboard',
    component: adminLayout,
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: admindashboard
      },
    ]
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
