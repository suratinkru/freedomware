<template>
  <div id="login">
 	<!-- Loader 
		<div id="global-loader">
			<img src="@/assets/img/loader.svg" class="loader-img" alt="Loader">
		</div>
		 /Loader -->

		<div class="container-fluid">
			<div class="row no-gutter">
				<!-- The image half -->
		
				<!-- The content half -->
				<div class="col-md-12 col-lg-12 col-xl-12">
					<div class="login d-flex align-items-center py-2">
						<!-- Demo content-->
						<div class="container p-0">
							<div class="row">
								<div class="col-md-8 col-lg-6 col-xl-5 mx-auto">
									<div class="card-sigin">
										<div class="mb-5  text-center"> <a href="index.html"><img src="../../assets/img/brand/logo.png" class="sign-favicon ht-40" alt="logo"></a></div>
										<div class="card-sigin">
											<div class="main-signup-header">
												<!-- <h2 class="text-center">Freedomware 1.0.1</h2>
												<h5 class="font-weight-semibold mb-4 text-center">supercar</h5> -->
												<form v-on:submit.prevent="login">
													<div class="form-group">
														<label>Email</label> <input  v-model="email" class="form-control" placeholder="Enter your email" type="text">
													</div>
													<div class="form-group">
														<label>Password</label> <input  v-model="password" class="form-control" placeholder="Enter your password" type="password">
													</div><button class="btn btn-main-primary btn-block">Sign In</button>
													<div class="row row-xs">
														<div class="col-sm-6">
															<button class="btn btn-block"><i class="fab fa-facebook-f"></i> Signup with Facebook</button>
														</div>
														<div class="col-sm-6 mg-t-10 mg-sm-t-0">
															<button class="btn btn-info btn-block"><i class="fab fa-twitter"></i> Signup with Twitter</button>
														</div>
													</div>
												</form>
												<div class="main-signin-footer mt-5">
													<p><a href="">Forgot password?</a></p>
													<p>Don't have an account? <a href="page-signup.html">Create an Account</a></p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div><!-- End -->
					</div>
				</div><!-- End -->
			</div>
		</div>
  </div>
</template>

<script>
// import authService from "./../service/auth";
export default {
  data() {
    return {
      email: "",
      password: "",
      role: "",
    };
  },
  methods: {
    async login() {
      try {
        const loginForm = {
          email: this.email,
          password: this.password,
        };

		console.log("loginForm:",loginForm);
    
        // const resp = await authService.loginAdmin(loginForm);
        // localStorage.setItem("access_token", resp.access_token);
        // sessionStorage.setItem("role", resp.role);
        this.$router.push('/dashboard');
        
      } catch (error) {
         this.$swal(error.response.data.error.message)
   
      }
    },
  },
};
</script>