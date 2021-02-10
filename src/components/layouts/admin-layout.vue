<template>
  <div >


		<!-- /Loader -->
     <Header />
     <Sticky />
  
		<!-- main-content opened -->
	
          <router-view></router-view>


   
        <Footer /> 

  </div>
</template>

<script>
import Header from "../shared/header";
// import Sidebar from "./../shared/sidebar";
// import SidebarRight from "./../shared/sidebar-right";
import Footer from "./../shared/footer";
import Sticky from "./../shared/sticky";
export default {
  name: "",
  components: {
    Header,
    Sticky,
    // Sidebar,
    Footer,
    // SidebarRight
  },
};
</script>

<style></style>