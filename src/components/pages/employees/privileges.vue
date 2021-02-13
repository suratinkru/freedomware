<template>
  <div class="container">
    <div class="page-inner">
      <div class="page-header">
        <h4 class="page-title">จัดการพนักงาน</h4>
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
            <a href="#"> สิทธิ์ผู้ใช้งาน</a>
          </li>
        </ul>
      </div>

      <!-- search -->
      <div class="card">
        <div class="card-header">
          <router-link to="/employee" class="btn btn-info btn-sm mr-2">
            <i class="fas fa-th-list"></i> แสดงรายการ
          </router-link>
          <router-link to="/add-employee" class="btn btn-success btn-sm mr-5">
            <i class="fas fa-plus-circle"></i> เพิ่มข้อมูลใหม่
          </router-link>
          <span class="text-right">สิทธิ์ผู้ใช้งาน พนักงาน</span>
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
                  id="multi-filter-select-privilege"
                  class="display table table-striped table-hover"
                >
                  <thead>
                    <tr>
                      <th width="50">ที่</th>
                      <th width="200">สิทธิ์ผู้ใช้งาน</th>
                      <th width="100">คำย่อ</th>
                      <th>รายละเอียด</th>
                      <th width="140"></th>
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
                  <tbody>
                    <tr class="list-data2">
                      <td align="center">1</td>
                      <td>วิเคราะห์ข้อมูล</td>
                      <td></td>
                      <td></td>
                      <td>
                        <a
                          class="btn ripple btn-warning btn-sm mr-3"
                          href="?option=employee&view=1&page=1&op=edit&id=1"
                          ><i class="fas fa-edit"></i
                        ></a>
                        <button
                          data-user-id="1"
                          type="button"
                          class="btn btn-danger btn-delete btn-sm"
                          onClick="del_data ($(this).data('user-id'));"
                        >
                          <i class="fas fa-trash-alt"></i>
                        </button>
                      </td>
                    </tr>

                    <tr class="list-data2">
                      <td align="center">2</td>
                      <td>ผู้ดูแลระบบ</td>
                      <td></td>
                      <td></td>
                      <td>
                        <a
                          class="btn ripple btn-warning btn-sm mr-3"
                          href="?option=employee&view=1&page=1&op=edit&id=1"
                          ><i class="fas fa-edit"></i
                        ></a>
                        <button
                          data-user-id="1"
                          type="button"
                          class="btn btn-danger btn-delete btn-sm"
                          onClick="del_data ($(this).data('user-id'));"
                        >
                          <i class="fas fa-trash-alt"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
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

      $("#multi-filter-select-privilege").DataTable({
        pageLength: 8,
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
        pageLength: 8,
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
    refrest() {
      // location.reload();
    },
  },
};
</script>

<style scoped>
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
