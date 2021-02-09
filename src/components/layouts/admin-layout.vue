<template>
  <div id="backend">
   		<!-- 	<div id="global-loader">
			<img src="@/assets/img/loader.svg" class="loader-img" alt="Loader">
		</div> -->
  
      <Sidebar />
      		<!-- main-content -->
		<div class="main-content app-content">
           <Header />
    
      
          <router-view></router-view>
     
        </div>
        <SidebarRight/>
        <Footer />

  </div>
</template>

<script>
import Header from "./../shared/header";
import Sidebar from "./../shared/sidebar";
import SidebarRight from "./../shared/sidebar-right";
import Footer from "./../shared/footer";
export default {
  name: "backend",
  components: {
    Header,
    Sidebar,
    Footer,
    SidebarRight
  },
};
</script>

<style></style>