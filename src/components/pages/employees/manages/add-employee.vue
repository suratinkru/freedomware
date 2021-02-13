<template>
  <div class="container">
    <div class="page-inner">
      <div class="page-header">
        <h4 class="page-title">พนักงาน</h4>
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
            <a href="#"> พนักงาน </a>
          </li>
          <li class="separator">
            <i class="flaticon-right-arrow"></i>
          </li>
          <li class="nav-item">
            <a href="#">
           เพิ่มข้อมูลพนักงาน</a
            >
          </li>
        </ul>
      </div>

      <!-- search -->
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header">
              <router-link
                to="/employee"
                class="btn btn-info btn-sm mr-2"
              >
                <i class="fas fa-th-list"></i> แสดงรายการ
              </router-link>
              <button class="btn btn-success btn-sm">
                <i class="fas fa-plus-circle"></i> เพิ่มข้อมูลใหม่
              </button>
            </div>
            <div class="card-body">
              <form
                id="data_form2"
                class="form-horizontal"
                method="post"
                autocomplete="off"
                action="?option=employee&view=1&page=1&op=add&action=add"
                enctype="multipart/form-data"
              >
                <input type="hidden" id="user-id" name="id" value="" />

                <div class="row">
                  <div class="col-sm-5 text-center">
                
                    
                     
                      <div class="form-group form-show-validation row">
											<label class="col-lg-3 col-md-3 col-sm-4 mt-sm-2 text-right">Upload Image <span class="required-label">*</span></label>
											<div class="col-lg-4 col-md-9 col-sm-8">
												<div class="input-file input-file-image">
													<img class="img-upload-preview img-circle" width="100" height="100" src="http://placehold.it/100x100" alt="preview">
													<input type="file" class="form-control form-control-file" id="uploadImg" name="uploadImg" accept="image/*" required >
													<label for="uploadImg" class="btn btn-primary btn-round btn-lg"><i class="fa fa-file-image"></i> Upload a Image</label>
												</div>
											</div>
                      </div>
                       
                   
                  </div>
                  <div class="col-sm-7">
                    <div class="row">
                      <div class="col-sm-8" style="padding:0px;">
                        <div
                          class="form-group"
                          style=" margin-bottom:3px;padding:0px;"
                        >
                          <div
                            class="col-lg mg-t-10 mg-lg-t-0"
                            style="padding:0px;"
                          >
                            <div class="input-group">
                              <div
                                class="col-sm-3"
                                style=""
                              >
                                <div class="text-align">รหัส</div>
                              </div>

                              <input
                                type="text"
                                style="margin-left:6px;"
                                class="form-control"
                                id="data1"
                                name="data1"
                                placeholder="รหัส"
                                value="i001"
                              />
                            </div>
                            <div class="input-group">
                              <div class="col-sm-3"></div>
                              <div class="col-sm-9">
                                <div
                                  id="text_data1"
                                  style="color:#F10C0F; font-size:16px;"
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-8" style="padding:0px;">
                        <div
                          class="form-group"
                          style=" margin-bottom:3px;padding:0px;"
                        >
                          <div
                            class="col-lg mg-t-10 mg-lg-t-0"
                            style="padding:0px;"
                          >
                            <div class="input-group">
                              <div
                                class="col-sm-3"
                                style=""
                              >
                                <div class="text-align">ชื่อ-สกุล</div>
                              </div>
                              <input
                                type="text"
                                style="margin-left:6px;"
                                class="form-control"
                                id="data2"
                                name="data2"
                                placeholder="ชื่อ-สกุล"
                                value=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-8" style="padding:0px;">
                        <div
                          class="form-group"
                          style=" margin-bottom:3px;padding:0px;"
                        >
                          <div
                            class="col-lg mg-t-10 mg-lg-t-0"
                            style="padding:0px;"
                          >
                            <div class="input-group">
                              <div
                                class="col-sm-3"
                                style=""
                              >
                                <div class="text-align">username</div>
                              </div>
                              <input
                                type="text"
                                style="margin-left:6px;"
                                class="form-control"
                                id="data3"
                                name="data3"
                                placeholder="username"
                                value=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-8" style="padding:0px;">
                        <div
                          class="form-group"
                          style=" margin-bottom:3px;padding:0px;"
                        >
                          <div
                            class="col-lg mg-t-10 mg-lg-t-0"
                            style="padding:0px;"
                          >
                            <div class="input-group">
                              <div
                                class="col-sm-3"
                                style=""
                              >
                                <div class="text-align">password</div>
                              </div>
                              <input
                                type="text"
                                style="margin-left:6px;"
                                class="form-control"
                                id="data4"
                                name="data4"
                                placeholder="password"
                                value=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-8" style="padding:0px;">
                        <div
                          class="form-group"
                          style=" margin-bottom:3px;padding:0px;"
                        >
                          <div
                            class="col-lg mg-t-10 mg-lg-t-0"
                            style="padding:0px;"
                          >
                            <div class="input-group">
                              <div
                                class="col-sm-3"
                                style=""
                              >
                                <div class="text-align">ตำแหน่งงาน</div>
                              </div>
                              <div style="margin-left:6px;">
                                <select
                                  class="form-control select2"
                                  name="data5"
                                  id="select11"
                                  style="width:200px;"
                                >
                                  <option value="" selected> โปรด ระบุ </option
                                  ><option value="1">วิเคราะห์ข้อมูล</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-8" style="padding:0px;">
                        <div
                          class="form-group"
                          style=" margin-bottom:3px;padding:0px;"
                        >
                          <div
                            class="col-lg mg-t-10 mg-lg-t-0"
                            style="padding:0px;"
                          >
                            <div class="input-group">
                              <div
                                class="col-sm-3"
                                style=""
                              >
                                <div class="text-align">สิทธิ์ผู้ใช้งาน</div>
                              </div>
                              <div style="margin-left:6px;">
                                <select
                                  class="form-control select2"
                                  name="data6"
                                  id="select12"
                                  style="width:200px;"
                                >
                                  <option value="" selected> โปรด ระบุ </option
                                  ><option value="1">วิเคราะห์ข้อมูล</option
                                  ><option value="2">ผู้ดูแลระบบ</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-sm-8" style="padding:0px;">
                        <div
                          class="form-group"
                          style=" margin-bottom:3px;padding:0px;"
                        >
                          <div
                            class="col-lg mg-t-10 mg-lg-t-0"
                            style="padding:0px;"
                          >
                            <div class="input-group">
                              <div
                                class="col-sm-3"
                                style=""
                              >
                                <div class="text-align">เบอร์โทร</div>
                              </div>
                              <input
                                type="text"
                                style="margin-left:6px;"
                                class="form-control"
                                id="data7"
                                name="data7"
                                placeholder="เบอร์โทร"
                                value=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-8" style="padding:0px;">
                        <div
                          class="form-group"
                          style=" margin-bottom:3px;padding:0px;"
                        >
                          <div
                            class="col-lg mg-t-10 mg-lg-t-0"
                            style="padding:0px;"
                          >
                            <div class="input-group">
                              <div
                                class="col-sm-3"
                                style=""
                              >
                                <div class="text-align">ที่อยู่</div>
                              </div>
                              <textarea
                                style="margin-left:6px;"
                                id="data10"
                                name="data10"
                                class="form-control"
                              ></textarea>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-8" style="padding:0px;">
                        <div
                          class="form-group"
                          style=" margin-bottom:3px;padding:0px;"
                        >
                          <div
                            class="col-lg mg-t-10 mg-lg-t-0"
                            style="padding:0px;"
                          >
                            <div class="input-group">
                              <div
                                class="col-sm-3"
                                style=""
                              >
                                <div class="text-align">วันที่บันทึก</div>
                              </div>
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
                    </div>
                  </div>
                </div>
              </form>

              <div class="row">
                <div class="col-sm-10" style="padding-right:20px;">
                  <br />
                  <div
                    class="form-group"
                    style=" margin-bottom:3px;padding:0px;"
                  >
                    <div class="col-lg mg-t-10 mg-lg-t-0" style="padding:0px;">
                      <div class="input-group">
                        <div class="col-sm-9"></div>
                        <div class="col-sm-3">
                          <button
                            type="reset"
                            class="btn ripple btn-danger  btn-sm"
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
                            <i class="far fa-save"></i> บันทึกข้อมูล
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
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
  mounted() {
    $("#datetime").datetimepicker({
      format: "MM/DD/YYYY H:mm",
    });
    $("#datepicker").datetimepicker({
      format: "MM/DD/YYYY",
    });
    $("#timepicker").datetimepicker({
      format: "h:mm A",
    });

    $("#basic").select2({
      theme: "bootstrap",
    });

    $("#multiple").select2({
      theme: "bootstrap",
    });

    $("#multiple-states").select2({
      theme: "bootstrap",
    });

    $("#tagsinput").tagsinput({
      tagClass: "badge-info",
    });

    $(function() {
      $("#slider").slider({
        range: "min",
        max: 100,
        value: 40,
      });
      $("#slider-range").slider({
        range: true,
        min: 0,
        max: 500,
        values: [75, 300],
      });
    });
  },
};

	$('#birth').datetimepicker({
			format: 'MM/DD/YYYY'
		});

		$('#state').select2({
			theme: "bootstrap"
		});

		/* validate */

		// validation when select change
		$("#state").change(function(){
			$(this).valid();
		})

		// validation when inputfile change
		$("#uploadImg").on("change", function(){
			$(this).parent('form').validate();
		})

		$("#exampleValidation").validate({
			validClass: "success",
			rules: {
				gender: {required: true},
				confirmpassword: {
					equalTo: "#password"
				},
				birth: {
					date: true
				},
				uploadImg: {
					required: true, 
				},
			},
			highlight: function(element) {
				$(element).closest('.form-group').removeClass('has-success').addClass('has-error');
			},
			success: function(element) {
				$(element).closest('.form-group').removeClass('has-error').addClass('has-success');
			},
		});
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
