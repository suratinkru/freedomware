<template>
  <div class="container">
    <div class="page-inner">
      <div class="page-header">
        <h4 class="page-title">ข้อมูลปัจจัย</h4>
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
            <a href="#"> มูลค่าจดทะเบียนอุตสาหกรรม</a>
          </li>
          <li class="separator">
            <i class="flaticon-right-arrow"></i>
          </li>
        </ul>
      </div>

      <!-- search -->
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header">
              <button class="btn btn-info btn-sm mr-2">
                <i class="fas fa-th-list"></i> แสดงรายการ
              </button>
              <button class="btn btn-success btn-sm">
                <i class="fas fa-plus-circle"></i> เพิ่มข้อมูลใหม่
              </button>
            </div>
            <div class="card-body">
              <div id="show_data"></div>
              <form
                id="data_form1"
                class="form-horizontal"
                method="post"
                autocomplete="off"
                action="?"
                enctype="multipart/form-data"
              >
                <div class="row" style="margin-bottom:5px;">
                  <div class="col-sm-1">วันที่บันทึก</div>
                  <div class="col-sm-2">
                    <input
                      type="text"
                      class="form-control"
                      name="data1"
                      id="datepicker-th1"
                      value="12/2/2564"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-1">เลือกภูมิภาค</div>
                  <div class="col-sm-2">
                    <select
                      class="form-control select2"
                      name="select11"
                      id="select11"
                      style="width:100%; padding-right:5px;"
                      onChange="search_category(this,'provinces','show_provinces','','12');search_category('','amphures','show_amphures','','13')"
                    >
                      <option value="8" selected>ทั่วประเทศ</option
                      ><option value="1">ภาคเหนือ</option
                      ><option value="2">ภาคกลาง</option
                      ><option value="3">ภาคตะวันออกเฉียงเหนือ</option
                      ><option value="4">ภาคตะวันตก</option
                      ><option value="5">ภาคตะวันออก</option
                      ><option value="6">ภาคใต้</option>
                    </select>
                  </div>
                  <div class="col-sm-1">เลือกจังหวัด</div>
                  <div class="col-sm-2">
                    <div id="show_provinces">
                      <select
                        class="form-control select2"
                        name="select12"
                        id="select12"
                        style="width:100%; padding-right:5px;"
                        onChange="search_category(this,'amphures','show_amphures','','13')"
                      >
                        <option value="" selected> ----- </option>
                      </select>
                    </div>
                  </div>
                  <div class="col-sm-1">เลือกอำเภอ</div>
                  <div class="col-sm-2">
                    <div id="show_amphures">
                      <select
                        class="form-control select2"
                        name="select13"
                        id="select13"
                        style="width:100%; padding-right:5px;"
                      >
                        <option value="" selected> ----- </option>
                      </select>
                    </div>
                  </div>
                  <div class="col-sm-2 text-left">
                    <button class="btn btn-secondary btn-sm">
                      <i class="la flaticon-repeat"></i> ค้นหา
                    </button>
                  </div>
                </div>
                <div class="row" style="margin-bottom:5px; margin-top:5px;">
                  <div class="col-sm-1"></div>
                  <div class="col-sm-8">
                    <textarea
                      class="form-control"
                      rows="7"
                      id="data3"
                      name="data3"
                    ></textarea>
                  </div>
                  <div class="col-sm-1">
                    <button class="btn btn-success btn-sm">
                      นำเข้าข้อมูล
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <!-- datatable -->

      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <!-- <div class="card-header">
              <h4 class="card-title">Multi Filter Select</h4>
            </div> -->
            <div class="card-body">
              <div class="table-responsive">
                <table
                  id="multi-filter-select"
                  class="display table table-striped table-hover"
                >
                  <thead>
                    <tr>
                      <th width="50">ที่</th>
                      <th>ภูมิภาค</th>
                      <th>จังหวัด</th>
                      <th>อำเภอ</th>
                      <th>ตำบล</th>
                      <th>เงินทุน</th>
                      <th>คนงาน</th>
                    </tr>
                  </thead>
                  <!-- <tfoot>
												<tr>
													<th>Name</th>
													<th>Position</th>
													<th>Office</th>
													<th>Age</th>
													<th>Start date</th>
													<th>Salary</th>
												</tr>
											</tfoot> -->
                  <tbody></tbody>
                </table>
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
    $(document).ready(function() {
      $("#basic-datatables").DataTable({});

      $("#multi-filter-select").DataTable({
        pageLength: 5,
        initComplete: function() {
          this.api()
            .columns()
            .every(function() {
              var column = this;
              var select = $(
                '<select class="form-control"><option value=""></option></select>'
              )
                .appendTo($(column.footer()).empty())
                .on("change", function() {
                  var val = $.fn.dataTable.util.escapeRegex($(this).val());

                  column.search(val ? "^" + val + "$" : "", true, false).draw();
                });

              column
                .data()
                .unique()
                .sort()
                .each(function(d, j) {
                  select.append('<option value="' + d + '">' + d + "</option>");
                });
            });
        },
      });

      // Add Row
      $("#add-row").DataTable({
        pageLength: 5,
      });

      var action =
        '<td> <div class="form-button-action"> <button type="button" data-toggle="tooltip" title="" class="btn btn-link btn-primary btn-lg" data-original-title="Edit Task"> <i class="fa fa-edit"></i> </button> <button type="button" data-toggle="tooltip" title="" class="btn btn-link btn-danger" data-original-title="Remove"> <i class="fa fa-times"></i> </button> </div> </td>';

      $("#addRowButton").click(function() {
        $("#add-row")
          .dataTable()
          .fnAddData([
            $("#addName").val(),
            $("#addPosition").val(),
            $("#addOffice").val(),
            action,
          ]);
        $("#addRowModal").modal("hide");
      });
    });
  },
  methods: {
    // location.reload();
  },
};
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

.table td,
.table th {
  font-size: 14px;
  border-top-width: 0px;
  border-bottom: 1px solid;
  border-color: #ebedf2 !important;
  padding: 0 25px !important;
  height: 20px;
  vertical-align: middle !important;
}
</style>
