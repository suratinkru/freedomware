<template>
  <div id="login">
	<div class="container container-login animated fadeIn">
			<h3 class="text-center">Proliance</h3>
			<div class="login-form">
				<div class="form-group form-floating-label">
					<input id="username" name="username" type="text" class="form-control input-border-bottom" v-model="username" required>
					<label for="username" class="placeholder">Username</label>
				</div>
				<div class="form-group form-floating-label">
					<input id="password" name="password" :type="passwordFieldType" v-model="password"  class="form-control input-border-bottom"   required>
					<label for="password" class="placeholder">Password</label>
					<div class="show-password">
						 <span class="input-group-text"  @click="switchVisibility">
            <i  :class="showPassword" ></i>
      </span>
					</div>
				</div>
				<div class="row form-sub m-0">
				
					
				</div>
				<div class="form-action mb-3">
					<button @click.prevent="login" type="submit" class="btn btn-primary btn-rounded btn-login">Sign In</button>
				</div>
		
			</div>
		</div>

	
  </div>
</template>

<script>
import authService from "./../service/auth";
 export default {
  data() {
    return {
      username: "",
      password: "",
      role: "",
	  passwordFieldType:"password",
	  showPassword:"fa fa-eye-slash",

    };
  },
  methods: {
    async login() {
      try {
        const loginForm = {
          username: this.username,
          password: this.password,
        };
    

        const resp = await authService.login(loginForm);
        localStorage.setItem("access_token", resp.access_token);
        sessionStorage.setItem("role", resp.role);
		console.log("resp:",resp);
        this.$router.push('/dashboard');

        location.reload();
 
        
      } catch (error) {
      
		swal(`${error.response.data.error.message}`, {
						icon : "error",
						buttons: {        			
							confirm: {
								className : 'btn btn-danger'
							}
						},
					});

	
	
					
				
   
      }


    },


	  switchVisibility() {
      this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password'
	  this.showPassword = this.showPassword === 'fa fa-eye' ? 'fa fa-eye-slash' : 'fa fa-eye'
	
    }
  },
};
</script>