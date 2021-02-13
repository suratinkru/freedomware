<template>
  <div class="container">
    <div class="page-inner">
      <div class="page-header">
        <h4 class="page-title">วิเคราะห์ปัจจัย</h4>
        <ul class="breadcrumbs">
          <li class="nav-home">
            <a href="#">
              <i class="flaticon-home"></i>
            </a>
          </li>
          <li class="separator">
            <i class="flaticon-right-arrow"></i>
          </li>
          <li class="nav-item">
            <a href="#"> วิเคราะห์</a>
          </li>
          <li class="separator">
            <i class="flaticon-right-arrow"></i>
          </li>
          <li class="nav-item">
            <a href="#"> เพิ่มข้อมูลวิเคราะห์ปัจจัย</a>
          </li>
        </ul>
      </div>

      <!-- search -->
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header">
              <router-link to="/factor-analysis" class="btn btn-info btn-sm mr-2">  
                <i class="fas fa-th-list"></i> แสดงรายการ
              </router-link>
               <button  class="btn btn-success btn-sm">  
         
                <i class="fas fa-plus-circle"></i> เพิ่มข้อมูลใหม่
                </button>
            </div>
            <div class="card-body">
              <div id="show_data"></div>

              <div class="row">
                <div
                  class="col-sm-12"
                  style="padding-right:10px; padding-left:30px;"
                >
                  <form
                    id="data_form2"
                    class="form-horizontal"
                    method="post"
                    autocomplete="off"
                    action="?option=process&view=1&page=1&op=add&action=add"
                    enctype="multipart/form-data"
                  >
                    <input type="hidden" id="user-id" name="id" value="" />
                    <div
                      class="form-group"
                      style=" margin-bottom:3px;padding:0px;"
                    >
                      <div
                        class="col-lg mg-t-10 mg-lg-t-0"
                        style="padding:0px;"
                      >
                        <div class="input-group">
                          <div class="col-sm-2">
                            <div class="text-align">ประจำเดือน</div>
                          </div>
                          <div class="col-sm-10">
                        <div class="input-group">
													<input type="text" class="form-control" id="datepicker" name="datepicker">
													<div class="input-group-append">
														<span class="input-group-text">
															<i class="fa fa-calendar-check"></i>
														</span>
													</div>
												</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="form-group"
                      style=" margin-bottom:3px;padding:0px;"
                    >
                      <div
                        class="col-lg mg-t-10 mg-lg-t-0"
                        style="padding:0px;"
                      >
                        <div class="input-group">
                          <div class="col-sm-2">
                            <div class="text-align">ประเภทรถยนต์</div>
                          </div>
                          <div class="col-sm-10">
                            <select
                              class="form-control select2"
                              name="data2"
                              id="select1"
                              style="width:100%; padding-right:5px;"
                            >
                              <option value="1"
                                >รถยนต์นั่งส่วนบุคคลไม่เกิน 7 คน (รย.1)</option
                              >
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="form-group"
                      style=" margin-bottom:3px;padding:0px;"
                    >
                      <div
                        class="col-lg mg-t-10 mg-lg-t-0"
                        style="padding:0px;"
                      >
                        <div class="input-group">
                          <div class="col-sm-2">
                            <div class="text-align">รายละเอียด</div>
                          </div>
                          <div class="col-sm-10">
                            <textarea
                              class="form-control"
                              rows="7"
                              id="data3"
                              name="data3"
                            ></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                    <br />
                    <div
                      class="form-group"
                      style=" margin-bottom:3px;padding:0px;"
                    >
                      <div
                        class="col-lg mg-t-10 mg-lg-t-0"
                        style="padding:0px;"
                      >
                        <div class="input-group">
                          <div class="col-sm-2"></div>
                          <div class="col-sm-10">
                     
                            <button
                              type="reset"
                              class="btn ripple btn-danger btn-edit btn-sm"
                              style="width:130px;"
                            >
                              <i class="fas fa-ban"></i> ยกเลิก
                            </button>

                            <button
                              type="button"
                              onClick="if(form_checkdata()){ edit_data($('#data_form2')); }"
                              class="btn btn-success btn-sm"
                              style="float:right;width:130px;"
                            >
                              <i class="fas fa-save"></i> บันทึกข้อมูล
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    mounted(){
        $('#datetime').datetimepicker({
			format: 'MM/DD/YYYY H:mm',
		});
		$('#datepicker').datetimepicker({
			format: 'MM/DD/YYYY',
		});
		$('#timepicker').datetimepicker({
			format: 'h:mm A', 
		});

		$('#basic').select2({
			theme: "bootstrap"
		});

		$('#multiple').select2({
			theme: "bootstrap"
		});

		$('#multiple-states').select2({
			theme: "bootstrap"
		});

		$('#tagsinput').tagsinput({
			tagClass: 'badge-info'
		});

		$( function() {
			$( "#slider" ).slider({
				range: "min",
				max: 100,
				value: 40,
			});
			$( "#slider-range" ).slider({
				range: true,
				min: 0,
				max: 500,
				values: [ 75, 300 ]
			});
		} );
    }
}
</script>


<style scoped>
.card .card-header,
.card-light .card-header {
  padding: 1rem 1.25rem;
  background-color: #e9ecef;
  border-bottom: 1px solid #ffffff !important;
}
.card-body {
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  padding: 1.25rem;
  background-color: #ffffff;
}
</style>