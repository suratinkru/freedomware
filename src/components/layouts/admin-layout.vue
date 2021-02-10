<template>
  <div id="backend">
   		<!-- 	<div id="global-loader">
			<img src="@/assets/img/loader.svg" class="loader-img" alt="Loader">
		</div> -->
  
    	<div class="wrapper">
      		<!-- main-content -->

           <Header />
                 <Sidebar />
           	<div class="main-panel">
      
    
      
          <router-view></router-view>
    

               <Footer />
             </div>
     
      </div>
      

  </div>
</template>

<script>
import Header from "./../shared/header";
import Sidebar from "./../shared/sidebar";

import Footer from "./../shared/footer";

export default {
  name: "backend",
  components: {
    Header,
    Sidebar,
    Footer,

  },
};
</script>

<style></style>