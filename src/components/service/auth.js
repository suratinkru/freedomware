import axios from 'axios';
import { baseURL } from './api';
export default {
  loginAdmin(credentials) {
   
    return axios
      .post(baseURL + '/admin/login', credentials)
      .then(response => response.data);
  },
  loginAgent(credentials) {
 
    return axios
      .post(baseURL + '/users/login', credentials)
      .then(response => response.data);
  },
  getToken(){
    return localStorage.getItem('token')
  },

  getAgent() {

    return axios
      .get(baseURL + '/admin/agent', {
        headers: {
         'Content-Type': 'application/json',
         'Authorization': 'Bearer ' + localStorage.getItem('access_token')
       }
     })
      .then(response => response.data);
  },
  searchAgent(searchform) {

    return axios
      .get(baseURL + `/admin/searchagent/?first_name=${searchform.first_name}&last_name=${searchform.last_name}` , {
         headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('access_token')
        }
      })
      .then(response => response.data);
  },


};