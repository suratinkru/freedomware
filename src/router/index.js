import Vue from "vue";
import VueRouter from "vue-router";



import appLayout from '@/components/layouts/app-layout.vue'
import adminLayout from '@/components/layouts/admin-layout.vue'

import Login from '@/components/pages/login.vue'
import Datatable from '../components/pages/testdatatable'
import admindashboard from '@/components/pages/dashboards/admin-dashboard.vue'
import Factoranalysis from '../components/pages/analyzes/factor-analysis.vue'
import AddFactoranalysis from '../components/pages/analyzes/manages/add-factor-analysis.vue'


import Carregistration from '../components/pages/car-registration/vehicle-registration-information'
import AddCarregistration from '../components/pages/car-registration/manages/add-vehicle-registration-information.vue'


import Quarterlyregistration from '../components/pages/car-registration/quarterly-vehicle-registration-information'
import AddQuarterlyregistration from '../components/pages/car-registration/manages/add-quarterly-vehicle-registration-information.vue'


import Districtfactor from '../components/pages/factors/district-factor.vue'
import IndustryRegisterValue from '../components/pages/factors/industry-registration-value.vue'
import CompanyRegisterValue from '../components/pages/factors/company-registration-value.vue'
import CartReport from '../components/pages/report/chart-report.vue'

import CalendarEvent from '../components/pages/calendars/calendar.vue' //calendar-events

import Employee from '../components/pages/employees/employee.vue' //Employee
import AddEmployee from '../components/pages/employees/manages/add-employee.vue' //Employee
import Privilege from '../components/pages/employees/privileges.vue' //Employee

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

function guardMyroute2(to, from, next)
{
 var isAuthenticated= false;

if(localStorage.getItem('access_token'))
  isAuthenticated = false;
 else
  isAuthenticated= true;
 if(isAuthenticated) 
 {
  next(); // allow to enter route
 } 
 else
 {
  next('/dashboard'); // go to '/login';
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
        name: 'login',beforeEnter : guardMyroute2,
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
        name: 'Dashboard', beforeEnter : guardMyroute,
        component: admindashboard
      },
      {
        path: '/datatable',
        name: 'Datatable', beforeEnter : guardMyroute,
        component: Datatable
      },

      {
        path: '/factor-analysis',
        name: 'factor-analysis', beforeEnter : guardMyroute,
        component: Factoranalysis
      },

      {
        path: '/add-factor-analysis',
        name: 'add-factor-analysis', beforeEnter : guardMyroute,
        component: AddFactoranalysis
      },
  

      {
        path: '/vehicle-registration-information',
        name: 'vehicle-registration-information', beforeEnter : guardMyroute,
        component: Carregistration
      },

      {
        path: '/add-vehicle-registration-information',
        name: 'add-vehicle-registration-information', beforeEnter : guardMyroute,
        component: AddCarregistration
      },
      

      {
        path: '/quarterly-vehicle-registration-information',
        name: 'quarterly-vehicle-registration-information', beforeEnter : guardMyroute,
        component: Quarterlyregistration
      },

      
      {
        path: '/add-quarterly-vehicle-registration-information',
        name: 'add-quarterly-vehicle-registration-information', beforeEnter : guardMyroute,
        component: AddQuarterlyregistration
      },

      

      {
        path: '/district-factor',
        name: 'district-factor', beforeEnter : guardMyroute,
        component: Districtfactor
      },

      {
        path: '/industry-registration',
        name: 'industry-registration', beforeEnter : guardMyroute,
        component: IndustryRegisterValue
      },

      {
        path: '/company-registration-value',
        name: 'company-registration-value', beforeEnter : guardMyroute,
        component: CompanyRegisterValue
      },


      {
        path: '/chart-report',
        name: 'chart-report', beforeEnter : guardMyroute,
        component: CartReport
      },

      {
        path: '/calendar-events',
        name: 'calendar-events', beforeEnter : guardMyroute,
        component: CalendarEvent
      },

      //employees
      {
        path: '/employee',
        name: 'employee', beforeEnter : guardMyroute,
        component: Employee
      },
      {
        path: '/add-employee',
        name: 'add-employee', beforeEnter : guardMyroute,
        component: AddEmployee
      },
      
      //Privilege
      {
        path: '/privileges',
        name: 'privileges', beforeEnter : guardMyroute,
        component: Privilege
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
