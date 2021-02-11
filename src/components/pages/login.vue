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
					<input id="password" name="password" type="password" class="form-control input-border-bottom"  v-model="password"  required>
					<label for="password" class="placeholder">Password</label>
					<div class="show-password">
						<i class="icon-eye"></i>
					</div>
				</div>
				<div class="row form-sub m-0">
					<div class="custom-control custom-checkbox">
						<input type="checkbox" class="custom-control-input" id="rememberme"  >
						<label class="custom-control-label" for="rememberme">Remember Me</label>
					</div>
					
					<a href="#" class="link float-right">Forget Password ?</a>
				</div>
				<div class="form-action mb-3">
					<button @click.prevent="login" class="btn btn-primary btn-rounded btn-login">Sign In</button>
				</div>
				<div class="login-account">
					<span class="msg">Don't have an account yet ?</span>
					<a href="#" id="show-signup" class="link">Sign Up</a>
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
    };
  },
  methods: {
    async login() {
      try {
        const loginForm = {
          username: this.username,
          password: this.password,
        };
    
	console.log(loginForm);
        const resp = await authService.login(loginForm);
        localStorage.setItem("access_token", resp.access_token);
        sessionStorage.setItem("role", resp.role);
		console.log("resp:",resp);
        this.$router.push('/dashboard');

        location.reload();
 
        
      } catch (error) {
        //  this.$swal(error.response.data.error.message)
		console.log(error);
   
      }
    },
  },
};
</script>