<template>

	<!-- Sidebar -->
		<div class="sidebar sidebar-style-2">			
			<div class="sidebar-wrapper scrollbar scrollbar-inner">
				<div class="sidebar-content">
				   <div class="user">
						<div class="avatar-sm float-left mr-2">
							<img src="https://via.placeholder.com/50" alt="..." class="avatar-img rounded-circle">
						</div>
						<div class="info">
							<a data-toggle="collapse" href="#collapseExample" aria-expanded="true">
								<span>
									Hizrian
									<span class="user-level">Administrator</span>
									<span class="caret"></span>
								</span>
							</a>
							<div class="clearfix"></div>

							<div class="collapse in" id="collapseExample">
								<ul class="nav">
									<li>
										<a href="#profile">
											<span class="link-collapse">My Profile</span>
										</a>
									</li>
									<li>
										<a href="#edit">
											<span class="link-collapse">Edit Profile</span>
										</a>
									</li>
									<li>
										<a href="#settings">
											<span class="link-collapse">Settings</span>
										</a>
									</li>
								</ul>
							</div>
						</div>
				   </div>
					<ul class="nav nav-primary">
						<li class="nav-item active">
							  <router-link to="/dashboard"  class="nav-item">
								<i class="fas fa-home"></i>
								<p>Dashboard </p>
							
						 </router-link>
					
						</li>
						<li class="nav-section">
							<span class="sidebar-mini-icon">
								<i class="fa fa-ellipsis-h"></i>
							</span>
							<h4 class="text-section">หน้าเมนูหลัก</h4>
						</li>
						<li class="nav-item">
							<a data-toggle="collapse" href="#base">
								<i class="fas fa-layer-group"></i>
								<p>วิเคราะห์</p>
								<span class="caret"></span>
							</a>
							<div class="collapse" id="base">
								<ul class="nav nav-collapse">
									<li>
									  <router-link to="/factor-analysis"  class="nav-item">
										
											<span class="sub-item">วิเคราะห์ปัจจัย</span>
										
											 </router-link>
									</li>
							
								</ul>
							</div>
						</li>
						<li class="nav-item">
							<a data-toggle="collapse" href="#sidebarLayouts">
							<i class="fas fa-car-crash"></i>
								<p>ทะเบียนรถยนต์</p>
								<span class="caret"></span>
							</a>
							<div class="collapse" id="sidebarLayouts">
								<ul class="nav nav-collapse">
									<li>
									 <router-link to="/vehicle-registration-information"  class="nav-item">
								
											<span class="sub-item">ข้อมูลจดทะเบียนรถ</span>
										 </router-link>
									</li>
									<li>
									 <router-link to="/quarterly-vehicle-registration-information"  class="nav-item">
										
											<span class="sub-item">ข้อมูลจดทะเบียนรถ ประจำไตรมาส</span>
										 </router-link>
									</li>
							
								</ul>
							</div>
						</li>
						<li class="nav-item">
							<a data-toggle="collapse" href="#forms">
								<i class="fas fa-pen-square"></i>
								<p>ข้อมูลปัจจัย</p>
								<span class="caret"></span>
							</a>
							<div class="collapse" id="forms">
								<ul class="nav nav-collapse">
									<li>
										 <router-link to="/district-factor"  class="nav-item">
											<span class="sub-item">ปัจจัยตามตำบล</span>
										 </router-link>
									</li>
									<li>
									 <router-link to="/industry-registration"  class="nav-item">
											<span class="sub-item">มูลค่าจดทะเบียนอุตสาหกรรม</span>
									 </router-link>
									</li>
									<li>
									   	 <router-link to="/company-registration-value"  class="nav-item">
											<span class="sub-item">มูลค่าจดทะเบียนบริษัท</span>
											 </router-link>
									</li>
									<li>
										<a href="#">
											<span class="sub-item">ศูนย์บริการรถยนต์</span>
										</a>
									</li>
									<li>
										<a href="#">
											<span class="sub-item">จำนวนครัวเรือน</span>
										</a>
									</li>
									<li>
										<a href="#">
											<span class="sub-item">ลักษณะของแต่ละพื้นที่</span>
										</a>
									</li>
									<li>
										<a href="#">
											<span class="sub-item">นโยบายของรัฐบาล</span>
										</a>
									</li>
									<li>
										<a href="#">
											<span class="sub-item">โปรโมชั่นการซื้อรถยนต์</span>
										</a>
									</li>
									<li>
										<a href="#">
											<span class="sub-item">คุณค่าตราสินค้า</span>
										</a>
									</li>
									<li>
										<a href="#">
											<span class="sub-item">การรับประกันรถยนต์</span>
										</a>
									</li>
								</ul>
							</div>
						</li>
						<li class="nav-item">
							<a data-toggle="collapse" href="#tables">
							<i class="fas fa-wrench"></i>
								<p>ตั้งค่ารถยนต์</p>
								<span class="caret"></span>
							</a>
							<div class="collapse" id="tables">
								<ul class="nav nav-collapse">
									<li>
										<a href="#">
											<span class="sub-item">รายการรถ</span>
										</a>
									</li>
									<li>
										<a href="#">
											<span class="sub-item">ประเภทรถยนต์</span>
										</a>
									</li>

									<li>
										<a href="#">
											<span class="sub-item"> ประเภทรถยนต์ในประเทศ </span>
										</a>
									</li><li>
										<a href="#">
											<span class="sub-item"> TYPE</span>
										</a>
									</li><li>
										<a href="#">
											<span class="sub-item"> MAKE MODEL</span>
										</a>
									</li><li>
										<a href="#">
											<span class="sub-item"> BODYSTYLE</span>
										</a>
									</li><li>
										<a href="#">
											<span class="sub-item"> SEGMENT</span>
										</a>
									</li><li>
										<a href="#">
											<span class="sub-item"> VEHICLE TYPE</span>
										</a>
									</li><li>
										<a href="#">
											<span class="sub-item"> PRICE CLASS</span>
										</a>
									</li>
								</ul>
							</div>
						</li>
						<li class="nav-item">
							<a data-toggle="collapse" href="#settingdata">
							<i class="fas fa-sliders-h"></i>
								<p> ตั้งค่าปัจจัยวิเคราะห์</p>
								<span class="caret"></span>
							</a>
							<div class="collapse" id="settingdata">
								<ul class="nav nav-collapse">
									<li>
										<a href="#">
											<span class="sub-item"> อำนาจในการซื้อ</span>
										</a>
									</li>
									<li>
										<a href="#">
											<span class="sub-item"> ความหนาแน่นของประชากร</span>
										</a>
									</li>
									<li>
										<a href="#">
											<span class="sub-item"> ศูนย์บริการรถยนต์</span>
										</a>
									</li>
									<li>
										<a href="#">
											<span class="sub-item">  จำนวนครัวเรือน</span>
										</a>
									</li>
									<li>
										<a href="#">
											<span class="sub-item">  ลักษณะของแต่ละพื้นที่</span>
										</a>
									</li>
									<li>
										<a href="#">
											<span class="sub-item">  นโยบายรัฐบาล</span>
										</a>
									</li>
									<li>
										<a href="#">
											<span class="sub-item">  โปรโมชั่นการซื้อรถยนต์</span>
										</a>
									</li>
									<li>
										<a href="#">
											<span class="sub-item">  คุณค่าตราสินค้า</span>
										</a>
									</li>
									<li>
										<a href="#">
											<span class="sub-item">  การรับประกันรถยนต์</span>
										</a>
									</li>
									
								</ul>
							</div>
						</li>
						<li class="nav-item">
							<a data-toggle="collapse" href="#charts">
						<i class="fas fa-users"></i>
								<p> จัดการพนักงาน</p>
								<span class="caret"></span>
							</a>
							<div class="collapse" id="charts">
								<ul class="nav nav-collapse">
									<li>
											 <router-link to="/employee"  class="nav-item">
											<span class="sub-item"> พนักงาน</span>
											 </router-link>
									</li>
									<li>
										 <router-link to="/privileges"  class="nav-item">
											<span class="sub-item"> สิทธิ์ผู้ใช้งาน</span>
										 </router-link>
									</li>
									<li>
										<a href="#">
											<span class="sub-item">  ตำแหน่งงาน</span>
										</a>
									</li>
								</ul>
							</div>
						</li>

                        

						<li class="nav-item">
							 <router-link to="/calendar-events"  class="nav-item">
								<i class="fas fa-map-marker-alt"></i>
								<p>ปฏิทินกิจกรรม</p>
							
							 </router-link>
							<!-- <div class="collapse" id="maps">
								<ul class="nav nav-collapse">
									<li>
										<a href="maps/googlemaps.html">
											<span class="sub-item"> ========== </span>
										</a>
									</li>
									
									
								</ul>
							</div> -->
						</li>

							<li class="nav-item">
							<a data-toggle="collapse" href="#maps">
								<i class="fas fa-map-marker-alt"></i>
								<p>แผนที่</p>
							
							</a>
							<!-- <div class="collapse" id="maps">
								<ul class="nav nav-collapse">
									<li>
										<a href="maps/googlemaps.html">
											<span class="sub-item"> ========== </span>
										</a>
									</li>
									
									
								</ul>
							</div> -->
						</li>

						<li class="nav-item">
							 <router-link to="/chart-report"  class="nav-item">
							<i class="far fa-chart-bar"></i>
								<p>รายงาน</p>
								
							 </router-link>
							<!-- <div class="collapse" id="report">
								<ul class="nav nav-collapse">
									<li>
										<a href="maps/googlemaps.html">
											<span class="sub-item"> ========== </span>
										</a>
									</li>
									
									
								</ul>
							</div> -->
						</li>

						<li class="nav-item">
							<a data-toggle="collapse" href="#accounting">
								<i class="far fa-user-circle"></i>
								<p>บัญชีเบื้องต้น</p>
								
							</a>
							<!-- <div class="collapse" id="accounting">
								<ul class="nav nav-collapse">
									<li>
										<a href="maps/googlemaps.html">
											<span class="sub-item"> ========== </span>
										</a>
									</li>
									
									
								</ul>
							</div> -->
						</li>

						<li class="nav-item">
							<a data-toggle="collapse" href="#web">
							<i class="fab fa-weebly"></i>
								<p>เว็บไซต์บริษัท</p>
							
							</a>
							<!-- <div class="collapse" id="web">
								<ul class="nav nav-collapse">
									<li>
										<a href="maps/googlemaps.html">
											<span class="sub-item"> ========== </span>
										</a>
									</li>
									
									
								</ul>
							</div> -->
						</li>

								<li class="nav-item">
							<a data-toggle="collapse" href="#setting">
								<i class="fas fa-cogs"></i>
								<p>ตั้งค่าระบบ</p>
							
							</a>
							<!-- <div class="collapse" id="setting">
								<ul class="nav nav-collapse">
									<li>
										<a href="maps/googlemaps.html">
											<span class="sub-item"> ========== </span>
										</a>
									</li>
									
									
								</ul>
							</div> -->
						</li>
				
					</ul>
				</div>
			</div>
		</div>
		<!-- End Sidebar -->


  
</template>


<script>

export default {

  data() {
    return {
      isActive: true,
      data:''
    };
  },
  mounted() {
//    console.log(localStorage.getItem("access_token"));
//      axios({
//       method: "get",
//       url: "http://localhost:4000/api/admin/profile",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: "Bearer " + localStorage.getItem("access_token"),
//       },
//     })
//       .then((response) => {
//         this.data = response.data.data
//         console.log(this.data.uuid);
//       })
//       .catch((error) => {
 
//         console.log(error.response.data);
//         if(error.response.data == 'Unauthorized'){
//           localStorage.removeItem("access_token");
//         }
        
//       });
  },
  methods: {
    
 
 
  },
  computed: {},
};
</script>
<style >
 .sidebar, .sidebar[data-background-color="white"] {
 
	background-image: url(//www.gstatic.com/mobilesdk/190424_mobilesdk/nav_nachos@2x.png);
    background-color: #232323;

}
.sidebar.sidebar-style-2 .nav.nav-primary > .nav-item.active > a {
    background: #005884  !important;
    box-shadow: 4px 4px 10px 0 rgb(0 0 0 / 10%), 4px 4px 15px -5px rgb(21 114 232 / 40%);
}

.sidebar .nav .nav-section .text-section, .sidebar[data-background-color="white"] .nav .nav-section .text-section {
    padding: 2px 30px;
    font-size: 12px;
    color: #d8d8d8;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 12px;
    margin-top: 20px;
}

.sidebar .nav > .nav-item a p, .sidebar[data-background-color="white"] .nav > .nav-item a p {
    font-size: 14px;
    margin-bottom: 0px;
    margin-right: 5px;
    white-space: nowrap;
    color: #c3c3c3;
}
.sidebar.sidebar-style-2 .nav .nav-item a:hover p, .sidebar.sidebar-style-2 .nav .nav-item a:hover i, .sidebar.sidebar-style-2 .nav .nav-item a:focus p, .sidebar.sidebar-style-2 .nav .nav-item a:focus i, .sidebar.sidebar-style-2 .nav .nav-item a[data-toggle=collapse][aria-expanded=true] p, .sidebar.sidebar-style-2 .nav .nav-item a[data-toggle=collapse][aria-expanded=true] i {
    color: #e6e6e6 !important;
}
.sidebar .nav > .nav-item a, .sidebar[data-background-color="white"] .nav > .nav-item a {
    display: flex;
    align-items: center;
    color: #ebefff;
    padding: 6px 25px;
    width: 100%;
    font-size: 14px;
    font-weight: 400;
    position: relative;
    margin-bottom: 3px;
}
</style>