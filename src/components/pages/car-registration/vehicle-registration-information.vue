<template>
  <div class="container">
    <div class="page-inner">
      <div class="page-header">
        <h4 class="page-title">ทะเบียนรถยนต์</h4>
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
            <a href="#"> ทะเบียน</a>
          </li>
          <li class="separator">
            <i class="flaticon-right-arrow"></i>
          </li>
          <li class="nav-item ">
            <a href="#"> สถิติจำนวนรถใหม่ (ป้ายแดง) ที่จดทะเบียนโดยแยกยี่ห้อรถ</a>
          </li>
        </ul>
      </div>

      <!-- search -->
              <div class="card">
            <div class="card-header">
              <router-link to="/vehicle-registration-information" class="btn btn-info btn-sm mr-2" >
            
                <i class="fas fa-th-list"></i> แสดงรายการ
          
               </router-link>
               <router-link to="/add-vehicle-registration-information" class="btn btn-success btn-sm mr-5" >
         
                <i class="fas fa-plus-circle"></i> เพิ่มข้อมูลใหม่
               </router-link>
              <span class="text-right">สถิติจำนวนรถใหม่ (ป้ายแดง) ที่จดทะเบียนโดยแยกยี่ห้อรถ</span>
            </div>
            <div class="card-body">
      <div class="row" style="margin-bottom:5px;">
        <div class="col-sm-1">ประเภทรถยนต์</div>
        <div class="col-sm-3">
          <select
            class="form-control select2"
            name="select10"
            id="select10"
            style="width:100%; padding-right:5px;"
          >
            <option value="1">รถยนต์นั่งส่วนบุคคลไม่เกิน 7 คน (รย.1)</option>
          </select>
        </div>
        <div class="col-sm-1">ประจำเดือน</div>
        <div class="col-sm-3">
          <input
            type="date"
            class="form-control"
            id="datepicker-th1"
            value="11/2/2564"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-sm-1">เลือกภูมิภาค</div>
        <div class="col-sm-3">
          <select
            class="form-control select2"
            name="select11"
            id="select11"
            style="width:100%; padding-right:5px;"
            onChange="search_category(this,'provinces','show_provinces','','12')"
          >
            <option value="8">ทั่วประเทศ</option
            ><option value="1">ภาคเหนือ</option
            ><option value="2">ภาคกลาง</option
            ><option value="3">ภาคตะวันออกเฉียงเหนือ</option
            ><option value="4">ภาคตะวันตก</option
            ><option value="5">ภาคตะวันออก</option
            ><option value="6">ภาคใต้</option>
          </select>
        </div>
        <div class="col-sm-1">เลือกจังหวัด</div>
        <div class="col-sm-3">
          <div id="show_provinces">
            <select
              class="form-control select2"
              name="select12"
              id="select12"
              style="width:100%; padding-right:5px;"
              onChange="search_category(this,'amphures','show_amphures','','13')"
            >
              <option value="" selected> ----- </option
              ><option value="64">กระบี่</option
              ><option value="1">กรุงเทพมหานคร</option
              ><option value="56">กาญจนบุรี</option
              ><option value="34">กาฬสินธุ์</option
              ><option value="49">กำแพงเพชร</option
              ><option value="28">ขอนแก่น</option
              ><option value="13">จันทบุรี</option
              ><option value="15">ฉะเชิงเทรา</option
              ><option value="11">ชลบุรี</option
              ><option value="9">ชัยนาท</option
              ><option value="25">ชัยภูมิ</option
              ><option value="69">ชุมพร</option
              ><option value="72">ตรัง</option
              ><option value="14">ตราด</option
              ><option value="50">ตาก</option
              ><option value="17">นครนายก</option
              ><option value="58">นครปฐม</option
              ><option value="36">นครพนม</option
              ><option value="19">นครราชสีมา</option
              ><option value="63">นครศรีธรรมราช</option
              ><option value="47">นครสวรรค์</option
              ><option value="3">นนทบุรี</option
              ><option value="76">นราธิวาส</option
              ><option value="43">น่าน</option
              ><option value="77">บึงกาฬ</option
              ><option value="20">บุรีรัมย์</option
              ><option value="4">ปทุมธานี</option
              ><option value="62">ประจวบคีรีขันธ์</option
              ><option value="16">ปราจีนบุรี</option
              ><option value="74">ปัตตานี</option
              ><option value="5">พระนครศรีอยุธยา</option
              ><option value="44">พะเยา</option
              ><option value="65">พังงา</option
              ><option value="73">พัทลุง</option
              ><option value="53">พิจิตร</option
              ><option value="52">พิษณุโลก</option
              ><option value="66">ภูเก็ต</option
              ><option value="32">มหาสารคาม</option
              ><option value="37">มุกดาหาร</option
              ><option value="75">ยะลา</option
              ><option value="24">ยโสธร</option
              ><option value="33">ร้อยเอ็ด</option
              ><option value="68">ระนอง</option
              ><option value="12">ระยอง</option
              ><option value="55">ราชบุรี</option
              ><option value="7">ลพบุรี</option
              ><option value="40">ลำปาง</option
              ><option value="39">ลำพูน</option
              ><option value="22">ศรีสะเกษ</option
              ><option value="35">สกลนคร</option
              ><option value="70">สงขลา</option
              ><option value="71">สตูล</option
              ><option value="2">สมุทรปราการ</option
              ><option value="60">สมุทรสงคราม</option
              ><option value="59">สมุทรสาคร</option
              ><option value="10">สระบุรี</option
              ><option value="18">สระแก้ว</option
              ><option value="8">สิงห์บุรี</option
              ><option value="57">สุพรรณบุรี</option
              ><option value="67">สุราษฎร์ธานี</option
              ><option value="21">สุรินทร์</option
              ><option value="51">สุโขทัย</option
              ><option value="31">หนองคาย</option
              ><option value="27">หนองบัวลำภู</option
              ><option value="6">อ่างทอง</option
              ><option value="26">อำนาจเจริญ</option
              ><option value="29">อุดรธานี</option
              ><option value="41">อุตรดิตถ์</option
              ><option value="48">อุทัยธานี</option
              ><option value="23">อุบลราชธานี</option
              ><option value="45">เชียงราย</option
              ><option value="38">เชียงใหม่</option
              ><option value="61">เพชรบุรี</option
              ><option value="54">เพชรบูรณ์</option
              ><option value="30">เลย</option
              ><option value="42">แพร่</option
              ><option value="46">แม่ฮ่องสอน</option>
            </select>
          </div>
        </div>
        <div class="col-sm-2">
          <button class="btn btn-secondary btn-sm">
            <i class="la flaticon-repeat"></i> ค้นหา
          </button>
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
                      <th>ยี่ห้อรถ</th>

                      <th>ทั่วประเทศ</th>
                      <th>กรุงเทพมหานคร</th>
                      <th>ส่วนภูมิภาค</th>
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
                    <tr class="">
                      <td align="center">1</td>
                      <td>ไม่ระบุ</td>

                      <td align="center">
                        <input
                          type="text"
                          class="form-control"
                          value=""
                          style="width:55px;"
                          onChange="savedata_at('web_car2province','data6','ไม่ระบุ','ทั่วประเทศ',this.value);"
                        />
                      </td>
                      <td align="center">
                        <input
                          type="text"
                          class="form-control"
                          value=""
                          style="width:55px;"
                          onChange="savedata_at('web_car2province','data6','ไม่ระบุ','กรุงเทพมหานคร',this.value);"
                        />
                      </td>
                      <td align="center">
                        <input
                          type="text"
                          class="form-control"
                          value=""
                          style="width:55px;"
                          onChange="savedata_at('web_car2province','data6','ไม่ระบุ','ส่วนภูมิภาค',this.value);"
                        />
                      </td>
                    </tr>

                    <tr class="">
                      <td align="center">2</td>
                      <td>ALFA ROMEO</td>

                      <td align="center">
                        <input
                          type="text"
                          class="form-control"
                          value=""
                          style="width:55px;"
                          onChange="savedata_at('web_car2province','data6','ALFA ROMEO','ทั่วประเทศ',this.value);"
                        />
                      </td>
                      <td align="center">
                        <input
                          type="text"
                          class="form-control"
                          value=""
                          style="width:55px;"
                          onChange="savedata_at('web_car2province','data6','ALFA ROMEO','กรุงเทพมหานคร',this.value);"
                        />
                      </td>
                      <td align="center">
                        <input
                          type="text"
                          class="form-control"
                          value=""
                          style="width:55px;"
                          onChange="savedata_at('web_car2province','data6','ALFA ROMEO','ส่วนภูมิภาค',this.value);"
                        />
                      </td>
                    </tr>

                    <tr class="">
                      <td align="center">3</td>
                      <td>ASTON MARTIN</td>

                      <td align="center">
                        <input
                          type="text"
                          class="form-control"
                          value=""
                          style="width:55px;"
                          onChange="savedata_at('web_car2province','data6','ASTON MARTIN','ทั่วประเทศ',this.value);"
                        />
                      </td>
                      <td align="center">
                        <input
                          type="text"
                          class="form-control"
                          value=""
                          style="width:55px;"
                          onChange="savedata_at('web_car2province','data6','ASTON MARTIN','กรุงเทพมหานคร',this.value);"
                        />
                      </td>
                      <td align="center">
                        <input
                          type="text"
                          class="form-control"
                          value=""
                          style="width:55px;"
                          onChange="savedata_at('web_car2province','data6','ASTON MARTIN','ส่วนภูมิภาค',this.value);"
                        />
                      </td>
                    </tr>

                    <tr class="">
                      <td align="center">4</td>
                      <td>AUDI</td>

                      <td align="center">
                        <input
                          type="text"
                          class="form-control"
                          value=""
                          style="width:55px;"
                          onChange="savedata_at('web_car2province','data6','AUDI','ทั่วประเทศ',this.value);"
                        />
                      </td>
                      <td align="center">
                        <input
                          type="text"
                          class="form-control"
                          value=""
                          style="width:55px;"
                          onChange="savedata_at('web_car2province','data6','AUDI','กรุงเทพมหานคร',this.value);"
                        />
                      </td>
                      <td align="center">
                        <input
                          type="text"
                          class="form-control"
                          value=""
                          style="width:55px;"
                          onChange="savedata_at('web_car2province','data6','AUDI','ส่วนภูมิภาค',this.value);"
                        />
                      </td>
                    </tr>

                    <tr class="">
                      <td align="center">5</td>
                      <td>AUSTIN</td>

                      <td align="center">
                        <input
                          type="text"
                          class="form-control"
                          value=""
                          style="width:55px;"
                          onChange="savedata_at('web_car2province','data6','AUSTIN','ทั่วประเทศ',this.value);"
                        />
                      </td>
                      <td align="center">
                        <input
                          type="text"
                          class="form-control"
                          value=""
                          style="width:55px;"
                          onChange="savedata_at('web_car2province','data6','AUSTIN','กรุงเทพมหานคร',this.value);"
                        />
                      </td>
                      <td align="center">
                        <input
                          type="text"
                          class="form-control"
                          value=""
                          style="width:55px;"
                          onChange="savedata_at('web_car2province','data6','AUSTIN','ส่วนภูมิภาค',this.value);"
                        />
                      </td>
                    </tr>

                    <tr class="">
                      <td align="center">6</td>
                      <td>ALFA</td>

                      <td align="center">
                        <input
                          type="text"
                          class="form-control"
                          value=""
                          style="width:55px;"
                          onChange="savedata_at('web_car2province','data6','ALFA','ทั่วประเทศ',this.value);"
                        />
                      </td>
                      <td align="center">
                        <input
                          type="text"
                          class="form-control"
                          value=""
                          style="width:55px;"
                          onChange="savedata_at('web_car2province','data6','ALFA','กรุงเทพมหานคร',this.value);"
                        />
                      </td>
                      <td align="center">
                        <input
                          type="text"
                          class="form-control"
                          value=""
                          style="width:55px;"
                          onChange="savedata_at('web_car2province','data6','ALFA','ส่วนภูมิภาค',this.value);"
                        />
                      </td>
                    </tr>

                    <tr class="">
                      <td align="center">7</td>
                      <td>BENTLEY</td>

                      <td align="center">
                        <input
                          type="text"
                          class="form-control"
                          value=""
                          style="width:55px;"
                          onChange="savedata_at('web_car2province','data6','BENTLEY','ทั่วประเทศ',this.value);"
                        />
                      </td>
                      <td align="center">
                        <input
                          type="text"
                          class="form-control"
                          value=""
                          style="width:55px;"
                          onChange="savedata_at('web_car2province','data6','BENTLEY','กรุงเทพมหานคร',this.value);"
                        />
                      </td>
                      <td align="center">
                        <input
                          type="text"
                          class="form-control"
                          value=""
                          style="width:55px;"
                          onChange="savedata_at('web_car2province','data6','BENTLEY','ส่วนภูมิภาค',this.value);"
                        />
                      </td>
                    </tr>

                    <tr class="">
                      <td align="center">8</td>
                      <td>BENZ</td>

                      <td align="center">
                        <input
                          type="text"
                          class="form-control"
                          value=""
                          style="width:55px;"
                          onChange="savedata_at('web_car2province','data6','BENZ','ทั่วประเทศ',this.value);"
                        />
                      </td>
                      <td align="center">
                        <input
                          type="text"
                          class="form-control"
                          value=""
                          style="width:55px;"
                          onChange="savedata_at('web_car2province','data6','BENZ','กรุงเทพมหานคร',this.value);"
                        />
                      </td>
                      <td align="center">
                        <input
                          type="text"
                          class="form-control"
                          value=""
                          style="width:55px;"
                          onChange="savedata_at('web_car2province','data6','BENZ','ส่วนภูมิภาค',this.value);"
                        />
                      </td>
                    </tr>

                    <tr class="">
                      <td align="center">9</td>
                      <td>BMW</td>

                      <td align="center">
                        <input
                          type="text"
                          class="form-control"
                          value=""
                          style="width:55px;"
                          onChange="savedata_at('web_car2province','data6','BMW','ทั่วประเทศ',this.value);"
                        />
                      </td>
                      <td align="center">
                        <input
                          type="text"
                          class="form-control"
                          value=""
                          style="width:55px;"
                          onChange="savedata_at('web_car2province','data6','BMW','กรุงเทพมหานคร',this.value);"
                        />
                      </td>
                      <td align="center">
                        <input
                          type="text"
                          class="form-control"
                          value=""
                          style="width:55px;"
                          onChange="savedata_at('web_car2province','data6','BMW','ส่วนภูมิภาค',this.value);"
                        />
                      </td>
                    </tr>

                    <tr class="">
                      <td align="center">10</td>
                      <td>BUICK</td>

                      <td align="center">
                        <input
                          type="text"
                          class="form-control"
                          value=""
                          style="width:55px;"
                          onChange="savedata_at('web_car2province','data6','BUICK','ทั่วประเทศ',this.value);"
                        />
                      </td>
                      <td align="center">
                        <input
                          type="text"
                          class="form-control"
                          value=""
                          style="width:55px;"
                          onChange="savedata_at('web_car2province','data6','BUICK','กรุงเทพมหานคร',this.value);"
                        />
                      </td>
                      <td align="center">
                        <input
                          type="text"
                          class="form-control"
                          value=""
                          style="width:55px;"
                          onChange="savedata_at('web_car2province','data6','BUICK','ส่วนภูมิภาค',this.value);"
                        />
                      </td>
                    </tr>

                    <tr class="">
                      <td align="center">11</td>
                      <td>CHEVROLET</td>

                      <td align="center">
                        <input
                          type="text"
                          class="form-control"
                          value=""
                          style="width:55px;"
                          onChange="savedata_at('web_car2province','data6','CHEVROLET','ทั่วประเทศ',this.value);"
                        />
                      </td>
                      <td align="center">
                        <input
                          type="text"
                          class="form-control"
                          value=""
                          style="width:55px;"
                          onChange="savedata_at('web_car2province','data6','CHEVROLET','กรุงเทพมหานคร',this.value);"
                        />
                      </td>
                      <td align="center">
                        <input
                          type="text"
                          class="form-control"
                          value=""
                          style="width:55px;"
                          onChange="savedata_at('web_car2province','data6','CHEVROLET','ส่วนภูมิภาค',this.value);"
                        />
                      </td>
                    </tr>

                    <tr class="">
                      <td align="center">12</td>
                      <td>CHRYSLER</td>

                      <td align="center">
                        <input
                          type="text"
                          class="form-control"
                          value=""
                          style="width:55px;"
                          onChange="savedata_at('web_car2province','data6','CHRYSLER','ทั่วประเทศ',this.value);"
                        />
                      </td>
                      <td align="center">
                        <input
                          type="text"
                          class="form-control"
                          value=""
                          style="width:55px;"
                          onChange="savedata_at('web_car2province','data6','CHRYSLER','กรุงเทพมหานคร',this.value);"
                        />
                      </td>
                      <td align="center">
                        <input
                          type="text"
                          class="form-control"
                          value=""
                          style="width:55px;"
                          onChange="savedata_at('web_car2province','data6','CHRYSLER','ส่วนภูมิภาค',this.value);"
                        />
                      </td>
                    </tr>

                    <tr class="">
                      <td align="center">13</td>
                      <td>CITROEN</td>

                      <td align="center">
                        <input
                          type="text"
                          class="form-control"
                          value=""
                          style="width:55px;"
                          onChange="savedata_at('web_car2province','data6','CITROEN','ทั่วประเทศ',this.value);"
                        />
                      </td>
                      <td align="center">
                        <input
                          type="text"
                          class="form-control"
                          value=""
                          style="width:55px;"
                          onChange="savedata_at('web_car2province','data6','CITROEN','กรุงเทพมหานคร',this.value);"
                        />
                      </td>
                      <td align="center">
                        <input
                          type="text"
                          class="form-control"
                          value=""
                          style="width:55px;"
                          onChange="savedata_at('web_car2province','data6','CITROEN','ส่วนภูมิภาค',this.value);"
                        />
                      </td>
                    </tr>

                    <tr class="">
                      <td align="center">14</td>
                      <td>CHERY</td>

                      <td align="center">
                        <input
                          type="text"
                          class="form-control"
                          value=""
                          style="width:55px;"
                          onChange="savedata_at('web_car2province','data6','CHERY','ทั่วประเทศ',this.value);"
                        />
                      </td>
                      <td align="center">
                        <input
                          type="text"
                          class="form-control"
                          value=""
                          style="width:55px;"
                          onChange="savedata_at('web_car2province','data6','CHERY','กรุงเทพมหานคร',this.value);"
                        />
                      </td>
                      <td align="center">
                        <input
                          type="text"
                          class="form-control"
                          value=""
                          style="width:55px;"
                          onChange="savedata_at('web_car2province','data6','CHERY','ส่วนภูมิภาค',this.value);"
                        />
                      </td>
                    </tr>

                    <tr class="">
                      <td align="center">15</td>
                      <td>DAEWOO</td>

                      <td align="center">
                        <input
                          type="text"
                          class="form-control"
                          value=""
                          style="width:55px;"
                          onChange="savedata_at('web_car2province','data6','DAEWOO','ทั่วประเทศ',this.value);"
                        />
                      </td>
                      <td align="center">
                        <input
                          type="text"
                          class="form-control"
                          value=""
                          style="width:55px;"
                          onChange="savedata_at('web_car2province','data6','DAEWOO','กรุงเทพมหานคร',this.value);"
                        />
                      </td>
                      <td align="center">
                        <input
                          type="text"
                          class="form-control"
                          value=""
                          style="width:55px;"
                          onChange="savedata_at('web_car2province','data6','DAEWOO','ส่วนภูมิภาค',this.value);"
                        />
                      </td>
                    </tr>

                    <tr class="">
                      <td align="center">16</td>
                      <td>DAIHATSU</td>

                      <td align="center">
                        <input
                          type="text"
                          class="form-control"
                          value=""
                          style="width:55px;"
                          onChange="savedata_at('web_car2province','data6','DAIHATSU','ทั่วประเทศ',this.value);"
                        />
                      </td>
                      <td align="center">
                        <input
                          type="text"
                          class="form-control"
                          value=""
                          style="width:55px;"
                          onChange="savedata_at('web_car2province','data6','DAIHATSU','กรุงเทพมหานคร',this.value);"
                        />
                      </td>
                      <td align="center">
                        <input
                          type="text"
                          class="form-control"
                          value=""
                          style="width:55px;"
                          onChange="savedata_at('web_car2province','data6','DAIHATSU','ส่วนภูมิภาค',this.value);"
                        />
                      </td>
                    </tr>

                    <tr class="">
                      <td align="center">17</td>
                      <td>DAIMLER</td>

                      <td align="center">
                        <input
                          type="text"
                          class="form-control"
                          value=""
                          style="width:55px;"
                          onChange="savedata_at('web_car2province','data6','DAIMLER','ทั่วประเทศ',this.value);"
                        />
                      </td>
                      <td align="center">
                        <input
                          type="text"
                          class="form-control"
                          value=""
                          style="width:55px;"
                          onChange="savedata_at('web_car2province','data6','DAIMLER','กรุงเทพมหานคร',this.value);"
                        />
                      </td>
                      <td align="center">
                        <input
                          type="text"
                          class="form-control"
                          value=""
                          style="width:55px;"
                          onChange="savedata_at('web_car2province','data6','DAIMLER','ส่วนภูมิภาค',this.value);"
                        />
                      </td>
                    </tr>

                    <tr class="">
                      <td align="center">18</td>
                      <td>DATSUN</td>

                      <td align="center">
                        <input
                          type="text"
                          class="form-control"
                          value=""
                          style="width:55px;"
                          onChange="savedata_at('web_car2province','data6','DATSUN','ทั่วประเทศ',this.value);"
                        />
                      </td>
                      <td align="center">
                        <input
                          type="text"
                          class="form-control"
                          value=""
                          style="width:55px;"
                          onChange="savedata_at('web_car2province','data6','DATSUN','กรุงเทพมหานคร',this.value);"
                        />
                      </td>
                      <td align="center">
                        <input
                          type="text"
                          class="form-control"
                          value=""
                          style="width:55px;"
                          onChange="savedata_at('web_car2province','data6','DATSUN','ส่วนภูมิภาค',this.value);"
                        />
                      </td>
                    </tr>

                    <tr class="">
                      <td align="center">19</td>
                      <td>DODGE</td>

                      <td align="center">
                        <input
                          type="text"
                          class="form-control"
                          value=""
                          style="width:55px;"
                          onChange="savedata_at('web_car2province','data6','DODGE','ทั่วประเทศ',this.value);"
                        />
                      </td>
                      <td align="center">
                        <input
                          type="text"
                          class="form-control"
                          value=""
                          style="width:55px;"
                          onChange="savedata_at('web_car2province','data6','DODGE','กรุงเทพมหานคร',this.value);"
                        />
                      </td>
                      <td align="center">
                        <input
                          type="text"
                          class="form-control"
                          value=""
                          style="width:55px;"
                          onChange="savedata_at('web_car2province','data6','DODGE','ส่วนภูมิภาค',this.value);"
                        />
                      </td>
                    </tr>

                    <tr class="">
                      <td align="center">20</td>
                      <td>FERRARI</td>

                      <td align="center">
                        <input
                          type="text"
                          class="form-control"
                          value=""
                          style="width:55px;"
                          onChange="savedata_at('web_car2province','data6','FERRARI','ทั่วประเทศ',this.value);"
                        />
                      </td>
                      <td align="center">
                        <input
                          type="text"
                          class="form-control"
                          value=""
                          style="width:55px;"
                          onChange="savedata_at('web_car2province','data6','FERRARI','กรุงเทพมหานคร',this.value);"
                        />
                      </td>
                      <td align="center">
                        <input
                          type="text"
                          class="form-control"
                          value=""
                          style="width:55px;"
                          onChange="savedata_at('web_car2province','data6','FERRARI','ส่วนภูมิภาค',this.value);"
                        />
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
		$('#basic-datatables').DataTable({
		});

		$('#multi-filter-select').DataTable( {
			"pageLength": 8,
			initComplete: function () {
				this.api().columns().every( function () {
					var column = this;
					var select = $('<select class="form-control"><option value=""></option></select>')
					.appendTo( $(column.footer()).empty() )
					.on( 'change', function () {
						var val = $.fn.dataTable.util.escapeRegex(
							$(this).val()
							);

						column
						.search( val ? '^'+val+'$' : '', true, false )
						.draw();
					} );

					column.data().unique().sort().each( function ( d, j ) {
						select.append( '<option value="'+d+'">'+d+'</option>' )
					} );
				} );
			}
		});

		// Add Row
		$('#add-row').DataTable({
			"pageLength": 8,
		});

		var action = '<td> <div class="form-button-action"> <button type="button" data-toggle="tooltip" title="" class="btn btn-link btn-primary btn-lg" data-original-title="Edit Task"> <i class="fa fa-edit"></i> </button> <button type="button" data-toggle="tooltip" title="" class="btn btn-link btn-danger" data-original-title="Remove"> <i class="fa fa-times"></i> </button> </div> </td>';

		$('#addRowButton').click(function() {
			$('#add-row').dataTable().fnAddData([
				$("#addName").val(),
				$("#addPosition").val(),
				$("#addOffice").val(),
				action
				]);
			$('#addRowModal').modal('hide');

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
