<template>
  <div class="container">
    <div class="page-inner">
      <h4 class="page-title">Calendar</h4>
      <div class="row">
        <div class="col-md-12">
          <div id="calendar" class="fc fc-unthemed fc-ltr">
            <div class="fc-toolbar fc-header-toolbar">
              <div class="fc-left">
                <div class="fc-button-group">
                  <button
                    type="button"
                    class="fc-prev-button fc-button fc-state-default fc-corner-left"
                    aria-label="prev"
                  >
                    <span
                      class="fc-icon fc-icon-left-single-arrow"
                    ></span></button
                  ><button
                    type="button"
                    class="fc-next-button fc-button fc-state-default fc-corner-right"
                    aria-label="next"
                  >
                    <span class="fc-icon fc-icon-right-single-arrow"></span>
                  </button>
                </div>
                <button
                  type="button"
                  class="fc-today-button fc-button fc-state-default fc-corner-left fc-corner-right fc-state-disabled"
                  disabled=""
                >
                  today
                </button>
              </div>
              <div class="fc-right">
                <div class="fc-button-group">
                  <button
                    type="button"
                    class="fc-month-button fc-button fc-state-default fc-corner-left fc-state-active"
                  >
                    month</button
                  ><button
                    type="button"
                    class="fc-agendaWeek-button fc-button fc-state-default"
                  >
                    week</button
                  ><button
                    type="button"
                    class="fc-agendaDay-button fc-button fc-state-default"
                  >
                    day</button
                  ><button
                    type="button"
                    class="fc-listWeek-button fc-button fc-state-default fc-corner-right"
                  >
                    list
                  </button>
                </div>
              </div>
              <div class="fc-center"><h2>February 2021</h2></div>
              <div class="fc-clear"></div>
            </div>
            <div class="fc-view-container" style="">
              <div class="fc-view fc-month-view fc-basic-view" style="">
                <table class="">
                  <thead class="fc-head">
                    <tr>
                      <td class="fc-head-container fc-widget-header">
                        <div class="fc-row fc-widget-header">
                          <table class="">
                            <thead>
                              <tr>
                                <th
                                  class="fc-day-header fc-widget-header fc-sun"
                                >
                                  <span>Sun</span>
                                </th>
                                <th
                                  class="fc-day-header fc-widget-header fc-mon"
                                >
                                  <span>Mon</span>
                                </th>
                                <th
                                  class="fc-day-header fc-widget-header fc-tue"
                                >
                                  <span>Tue</span>
                                </th>
                                <th
                                  class="fc-day-header fc-widget-header fc-wed"
                                >
                                  <span>Wed</span>
                                </th>
                                <th
                                  class="fc-day-header fc-widget-header fc-thu"
                                >
                                  <span>Thu</span>
                                </th>
                                <th
                                  class="fc-day-header fc-widget-header fc-fri"
                                >
                                  <span>Fri</span>
                                </th>
                                <th
                                  class="fc-day-header fc-widget-header fc-sat"
                                >
                                  <span>Sat</span>
                                </th>
                              </tr>
                            </thead>
                          </table>
                        </div>
                      </td>
                    </tr>
                  </thead>
                  <tbody class="fc-body">
                    <tr>
                      <td class="fc-widget-content">
                        <div
                          class="fc-scroller fc-day-grid-container"
                          style="overflow: hidden; height: 1280.6px;"
                        >
                          <div class="fc-day-grid fc-unselectable">
                            <div
                              class="fc-row fc-week fc-widget-content"
                              style="height: 213px;"
                            >
                              <div class="fc-bg">
                                <table class="">
                                  <tbody>
                                    <tr>
                                      <td
                                        class="fc-day fc-widget-content fc-sun fc-other-month fc-past"
                                        data-date="2021-01-31"
                                      ></td>
                                      <td
                                        class="fc-day fc-widget-content fc-mon fc-past"
                                        data-date="2021-02-01"
                                      ></td>
                                      <td
                                        class="fc-day fc-widget-content fc-tue fc-past"
                                        data-date="2021-02-02"
                                      ></td>
                                      <td
                                        class="fc-day fc-widget-content fc-wed fc-past"
                                        data-date="2021-02-03"
                                      ></td>
                                      <td
                                        class="fc-day fc-widget-content fc-thu fc-past"
                                        data-date="2021-02-04"
                                      ></td>
                                      <td
                                        class="fc-day fc-widget-content fc-fri fc-past"
                                        data-date="2021-02-05"
                                      ></td>
                                      <td
                                        class="fc-day fc-widget-content fc-sat fc-past"
                                        data-date="2021-02-06"
                                      ></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <div class="fc-content-skeleton">
                                <table>
                                  <thead>
                                    <tr>
                                      <td
                                        class="fc-day-top fc-sun fc-other-month fc-past"
                                        data-date="2021-01-31"
                                      >
                                        <span class="fc-day-number">31</span>
                                      </td>
                                      <td
                                        class="fc-day-top fc-mon fc-past"
                                        data-date="2021-02-01"
                                      >
                                        <span class="fc-day-number">1</span>
                                      </td>
                                      <td
                                        class="fc-day-top fc-tue fc-past"
                                        data-date="2021-02-02"
                                      >
                                        <span class="fc-day-number">2</span>
                                      </td>
                                      <td
                                        class="fc-day-top fc-wed fc-past"
                                        data-date="2021-02-03"
                                      >
                                        <span class="fc-day-number">3</span>
                                      </td>
                                      <td
                                        class="fc-day-top fc-thu fc-past"
                                        data-date="2021-02-04"
                                      >
                                        <span class="fc-day-number">4</span>
                                      </td>
                                      <td
                                        class="fc-day-top fc-fri fc-past"
                                        data-date="2021-02-05"
                                      >
                                        <span class="fc-day-number">5</span>
                                      </td>
                                      <td
                                        class="fc-day-top fc-sat fc-past"
                                        data-date="2021-02-06"
                                      >
                                        <span class="fc-day-number">6</span>
                                      </td>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td></td>
                                      <td class="fc-event-container">
                                        <a
                                          class="fc-day-grid-event fc-h-event fc-event fc-start fc-end fc-black"
                                          ><div class="fc-content">
                                            <span class="fc-time">12a</span>
                                            <span class="fc-title"
                                              >All Day Event</span
                                            >
                                          </div></a
                                        >
                                      </td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                            <div
                              class="fc-row fc-week fc-widget-content"
                              style="height: 213px;"
                            >
                              <div class="fc-bg">
                                <table class="">
                                  <tbody>
                                    <tr>
                                      <td
                                        class="fc-day fc-widget-content fc-sun fc-past"
                                        data-date="2021-02-07"
                                      ></td>
                                      <td
                                        class="fc-day fc-widget-content fc-mon fc-past"
                                        data-date="2021-02-08"
                                      ></td>
                                      <td
                                        class="fc-day fc-widget-content fc-tue fc-past"
                                        data-date="2021-02-09"
                                      ></td>
                                      <td
                                        class="fc-day fc-widget-content fc-wed fc-past"
                                        data-date="2021-02-10"
                                      ></td>
                                      <td
                                        class="fc-day fc-widget-content fc-thu fc-past"
                                        data-date="2021-02-11"
                                      ></td>
                                      <td
                                        class="fc-day fc-widget-content fc-fri fc-today "
                                        data-date="2021-02-12"
                                      ></td>
                                      <td
                                        class="fc-day fc-widget-content fc-sat fc-future"
                                        data-date="2021-02-13"
                                      ></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <div class="fc-content-skeleton">
                                <table>
                                  <thead>
                                    <tr>
                                      <td
                                        class="fc-day-top fc-sun fc-past"
                                        data-date="2021-02-07"
                                      >
                                        <span class="fc-day-number">7</span>
                                      </td>
                                      <td
                                        class="fc-day-top fc-mon fc-past"
                                        data-date="2021-02-08"
                                      >
                  
				                        <span class="fc-day-number">8</span>
                                      </td>
                                      <td
                                        class="fc-day-top fc-tue fc-past"
                                        data-date="2021-02-09"
                                      >
                                        <span class="fc-day-number">9</span>
                                      </td>
                                      <td
                                        class="fc-day-top fc-wed fc-past"
                                        data-date="2021-02-10"
                                      >
                                        <span class="fc-day-number">10</span>
                                      </td>
                                      <td
                                        class="fc-day-top fc-thu fc-past"
                                        data-date="2021-02-11"
                                      >
                                        <span class="fc-day-number">11</span>
                                      </td>
                                      <td
                                        class="fc-day-top fc-fri fc-today "
                                        data-date="2021-02-12"
                                      >
                                        <span class="fc-day-number">12</span>
                                      </td>
                                      <td
                                        class="fc-day-top fc-sat fc-future"
                                        data-date="2021-02-13"
                                      >
                                        <span class="fc-day-number">13</span>
                                      </td>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td rowspan="2"></td>
                                      <td rowspan="2"></td>
                                      <td
                                        class="fc-event-container"
                                        rowspan="2"
                                      >
                                        <a
                                          class="fc-day-grid-event fc-h-event fc-event fc-start fc-end fc-warning"
                                          ><div class="fc-content">
                                            <span class="fc-time">4p</span>
                                            <span class="fc-title"
                                              >Repeating Event</span
                                            >
                                          </div></a
                                        >
                                      </td>
                                      <td rowspan="2"></td>
                                      <td rowspan="2"></td>
                                      <td class="fc-event-container">
                                        <a
                                          class="fc-day-grid-event fc-h-event fc-event fc-start fc-end fc-danger"
                                          ><div class="fc-content">
                                            <span class="fc-time">10:30a</span>
                                            <span class="fc-title"
                                              >Meeting</span
                                            >
                                          </div></a
                                        >
                                      </td>
                                      <td
                                        class="fc-event-container"
                                        rowspan="2"
                                      >
                                        <a
                                          class="fc-day-grid-event fc-h-event fc-event fc-start fc-end fc-success"
                                          ><div class="fc-content">
                                            <span class="fc-time">7p</span>
                                            <span class="fc-title"
                                              >Birthday Party</span
                                            >
                                          </div></a
                                        >
                                      </td>
                                    </tr>
                                    <tr>
                                      <td class="fc-event-container">
                                        <a
                                          class="fc-day-grid-event fc-h-event fc-event fc-start fc-end fc-primary"
                                          ><div class="fc-content">
                                            <span class="fc-time">12p</span>
                                            <span class="fc-title">Lunch</span>
                                          </div></a
                                        >
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                            <div
                              class="fc-row fc-week fc-widget-content"
                              style="height: 213px;"
                            >
                              <div class="fc-bg">
                                <table class="">
                                  <tbody>
                                    <tr>
                                      <td
                                        class="fc-day fc-widget-content fc-sun fc-future"
                                        data-date="2021-02-14"
                                      ></td>
                                      <td
                                        class="fc-day fc-widget-content fc-mon fc-future"
                                        data-date="2021-02-15"
                                      ></td>
                                      <td
                                        class="fc-day fc-widget-content fc-tue fc-future"
                                        data-date="2021-02-16"
                                      ></td>
                                      <td
                                        class="fc-day fc-widget-content fc-wed fc-future"
                                        data-date="2021-02-17"
                                      ></td>
                                      <td
                                        class="fc-day fc-widget-content fc-thu fc-future"
                                        data-date="2021-02-18"
                                      ></td>
                                      <td
                                        class="fc-day fc-widget-content fc-fri fc-future"
                                        data-date="2021-02-19"
                                      ></td>
                                      <td
                                        class="fc-day fc-widget-content fc-sat fc-future"
                                        data-date="2021-02-20"
                                      ></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <div class="fc-content-skeleton">
                                <table>
                                  <thead>
                                    <tr>
                                      <td
                                        class="fc-day-top fc-sun fc-future"
                                        data-date="2021-02-14"
                                      >
                                        <span class="fc-day-number">14</span>
                                      </td>
                                      <td
                                        class="fc-day-top fc-mon fc-future"
                                        data-date="2021-02-15"
                                      >
                                        <span class="fc-day-number">15</span>
                                      </td>
                                      <td
                                        class="fc-day-top fc-tue fc-future"
                                        data-date="2021-02-16"
                                      >
                                        <span class="fc-day-number">16</span>
                                      </td>
                                      <td
                                        class="fc-day-top fc-wed fc-future"
                                        data-date="2021-02-17"
                                      >
                                        <span class="fc-day-number">17</span>
                                      </td>
                                      <td
                                        class="fc-day-top fc-thu fc-future"
                                        data-date="2021-02-18"
                                      >
                                        <span class="fc-day-number">18</span>
                                      </td>
                                      <td
                                        class="fc-day-top fc-fri fc-future"
                                        data-date="2021-02-19"
                                      >
                                        <span class="fc-day-number">19</span>
                                      </td>
                                      <td
                                        class="fc-day-top fc-sat fc-future"
                                        data-date="2021-02-20"
                                      >
                                        <span class="fc-day-number">20</span>
                                      </td>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td></td>
                                      <td class="fc-event-container">
                                        <a
                                          class="fc-day-grid-event fc-h-event fc-event fc-start fc-end fc-primary-solid"
                                          ><div class="fc-content">
                                            <span class="fc-time">1:30p</span>
                                            <span class="fc-title"
                                              >Meeting</span
                                            >
                                          </div></a
                                        >
                                      </td>
                                      <td class="fc-event-container">
                                        <a
                                          class="fc-day-grid-event fc-h-event fc-event fc-start fc-end fc-info"
                                          ><div class="fc-content">
                                            <span class="fc-time">4p</span>
                                            <span class="fc-title"
                                              >Repeating Event</span
                                            >
                                          </div></a
                                        >
                                      </td>
                                      <td></td>
                                      <td class="fc-event-container">
                                        <a
                                          class="fc-day-grid-event fc-h-event fc-event fc-start fc-end fc-success-solid"
                                          ><div class="fc-content">
                                            <span class="fc-time">1:30p</span>
                                            <span class="fc-title">Lunch</span>
                                          </div></a
                                        >
                                      </td>
                                      <td></td>
                                      <td></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                            <div
                              class="fc-row fc-week fc-widget-content"
                              style="height: 213px;"
                            >
                              <div class="fc-bg">
                                <table class="">
                                  <tbody>
                                    <tr>
                                      <td
                                        class="fc-day fc-widget-content fc-sun fc-future"
                                        data-date="2021-02-21"
                                      ></td>
                                      <td
                                        class="fc-day fc-widget-content fc-mon fc-future"
                                        data-date="2021-02-22"
                                      ></td>
                                      <td
                                        class="fc-day fc-widget-content fc-tue fc-future"
                                        data-date="2021-02-23"
                                      ></td>
                                      <td
                                        class="fc-day fc-widget-content fc-wed fc-future"
                                        data-date="2021-02-24"
                                      ></td>
                                      <td
                                        class="fc-day fc-widget-content fc-thu fc-future"
                                        data-date="2021-02-25"
                                      ></td>
                                      <td
                                        class="fc-day fc-widget-content fc-fri fc-future"
                                        data-date="2021-02-26"
                                      ></td>
                                      <td
                                        class="fc-day fc-widget-content fc-sat fc-future"
                                        data-date="2021-02-27"
                                      ></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <div class="fc-content-skeleton">
                                <table>
                                  <thead>
                                    <tr>
                                      <td
                                        class="fc-day-top fc-sun fc-future"
                                        data-date="2021-02-21"
                                      >
                                        <span class="fc-day-number">21</span>
                                      </td>
                                      <td
                                        class="fc-day-top fc-mon fc-future"
                                        data-date="2021-02-22"
                                      >
                                        <span class="fc-day-number">22</span>
                                      </td>
                                      <td
                                        class="fc-day-top fc-tue fc-future"
                                        data-date="2021-02-23"
                                      >
                                        <span class="fc-day-number">23</span>
                                      </td>
                                      <td
                                        class="fc-day-top fc-wed fc-future"
                                        data-date="2021-02-24"
                                      >
                                        <span class="fc-day-number">24</span>
                                      </td>
                                      <td
                                        class="fc-day-top fc-thu fc-future"
                                        data-date="2021-02-25"
                                      >
                                        <span class="fc-day-number">25</span>
                                      </td>
                                      <td
                                        class="fc-day-top fc-fri fc-future"
                                        data-date="2021-02-26"
                                      >
                                        <span class="fc-day-number">26</span>
                                      </td>
                                      <td
                                        class="fc-day-top fc-sat fc-future"
                                        data-date="2021-02-27"
                                      >
                                        <span class="fc-day-number">27</span>
                                      </td>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                            <div
                              class="fc-row fc-week fc-widget-content"
                              style="height: 213px;"
                            >
                              <div class="fc-bg">
                                <table class="">
                                  <tbody>
                                    <tr>
                                      <td
                                        class="fc-day fc-widget-content fc-sun fc-future"
                                        data-date="2021-02-28"
                                      ></td>
                                      <td
                                        class="fc-day fc-widget-content fc-mon fc-other-month fc-future"
                                        data-date="2021-03-01"
                                      ></td>
                                      <td
                                        class="fc-day fc-widget-content fc-tue fc-other-month fc-future"
                                        data-date="2021-03-02"
                                      ></td>
                                      <td
                                        class="fc-day fc-widget-content fc-wed fc-other-month fc-future"
                                        data-date="2021-03-03"
                                      ></td>
                                      <td
                                        class="fc-day fc-widget-content fc-thu fc-other-month fc-future"
                                        data-date="2021-03-04"
                                      ></td>
                                      <td
                                        class="fc-day fc-widget-content fc-fri fc-other-month fc-future"
                                        data-date="2021-03-05"
                                      ></td>
                                      <td
                                        class="fc-day fc-widget-content fc-sat fc-other-month fc-future"
                                        data-date="2021-03-06"
                                      ></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <div class="fc-content-skeleton">
                                <table>
                                  <thead>
                                    <tr>
                                      <td
                                        class="fc-day-top fc-sun fc-future"
                                        data-date="2021-02-28"
                                      >
                                        <span class="fc-day-number">28</span>
                                      </td>
                                      <td
                                        class="fc-day-top fc-mon fc-other-month fc-future"
                                        data-date="2021-03-01"
                                      >
                                        <span class="fc-day-number">1</span>
                                      </td>
                                      <td
                                        class="fc-day-top fc-tue fc-other-month fc-future"
                                        data-date="2021-03-02"
                                      >
                                        <span class="fc-day-number">2</span>
                                      </td>
                                      <td
                                        class="fc-day-top fc-wed fc-other-month fc-future"
                                        data-date="2021-03-03"
                                      >
                                        <span class="fc-day-number">3</span>
                                      </td>
                                      <td
                                        class="fc-day-top fc-thu fc-other-month fc-future"
                                        data-date="2021-03-04"
                                      >
                                        <span class="fc-day-number">4</span>
                                      </td>
                                      <td
                                        class="fc-day-top fc-fri fc-other-month fc-future"
                                        data-date="2021-03-05"
                                      >
                                        <span class="fc-day-number">5</span>
                                      </td>
                                      <td
                                        class="fc-day-top fc-sat fc-other-month fc-future"
                                        data-date="2021-03-06"
                                      >
                                        <span class="fc-day-number">6</span>
                                      </td>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td class="fc-event-container">
                                        <a
                                          class="fc-day-grid-event fc-h-event fc-event fc-start fc-end fc-info-solid"
                                          href="http://google.com/"
                                          ><div class="fc-content">
                                            <span class="fc-time">12a</span>
                                            <span class="fc-title"
                                              >Click for Google</span
                                            >
                                          </div></a
                                        >
                                      </td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                            <div
                              class="fc-row fc-week fc-widget-content"
                              style="height: 215px;"
                            >
                              <div class="fc-bg">
                                <table class="">
                                  <tbody>
                                    <tr>
                                      <td
                                        class="fc-day fc-widget-content fc-sun fc-other-month fc-future"
                                        data-date="2021-03-07"
                                      ></td>
                                      <td
                                        class="fc-day fc-widget-content fc-mon fc-other-month fc-future"
                                        data-date="2021-03-08"
                                      ></td>
                                      <td
                                        class="fc-day fc-widget-content fc-tue fc-other-month fc-future"
                                        data-date="2021-03-09"
                                      ></td>
                                      <td
                                        class="fc-day fc-widget-content fc-wed fc-other-month fc-future"
                                        data-date="2021-03-10"
                                      ></td>
                                      <td
                                        class="fc-day fc-widget-content fc-thu fc-other-month fc-future"
                                        data-date="2021-03-11"
                                      ></td>
                                      <td
                                        class="fc-day fc-widget-content fc-fri fc-other-month fc-future"
                                        data-date="2021-03-12"
                                      ></td>
                                      <td
                                        class="fc-day fc-widget-content fc-sat fc-other-month fc-future"
                                        data-date="2021-03-13"
                                      ></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <div class="fc-content-skeleton">
                                <table>
                                  <thead>
                                    <tr>
                                      <td
                                        class="fc-day-top fc-sun fc-other-month fc-future"
                                        data-date="2021-03-07"
                                      >
                                        <span class="fc-day-number">7</span>
                                      </td>
                                      <td
                                        class="fc-day-top fc-mon fc-other-month fc-future"
                                        data-date="2021-03-08"
                                      >
                                        <span class="fc-day-number">8</span>
                                      </td>
                                      <td
                                        class="fc-day-top fc-tue fc-other-month fc-future"
                                        data-date="2021-03-09"
                                      >
                                        <span class="fc-day-number">9</span>
                                      </td>
                                      <td
                                        class="fc-day-top fc-wed fc-other-month fc-future"
                                        data-date="2021-03-10"
                                      >
                                        <span class="fc-day-number">10</span>
                                      </td>
                                      <td
                                        class="fc-day-top fc-thu fc-other-month fc-future"
                                        data-date="2021-03-11"
                                      >
                                        <span class="fc-day-number">11</span>
                                      </td>
                                      <td
                                        class="fc-day-top fc-fri fc-other-month fc-future"
                                        data-date="2021-03-12"
                                      >
                                        <span class="fc-day-number">12</span>
                                      </td>
                                      <td
                                        class="fc-day-top fc-sat fc-other-month fc-future"
                                        data-date="2021-03-13"
                                      >
                                        <span class="fc-day-number">13</span>
                                      </td>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
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
    /* initialize the calendar
		-----------------------------------------------------------------*/
    $(document).ready(function() {
      var date = new Date();
      var d = date.getDate();
      var m = date.getMonth();
      var y = date.getFullYear();
      var className = Array(
        "fc-primary",
        "fc-danger",
        "fc-black",
        "fc-success",
        "fc-info",
        "fc-warning",
        "fc-danger-solid",
        "fc-warning-solid",
        "fc-success-solid",
        "fc-black-solid",
        "fc-success-solid",
        "fc-primary-solid"
      );

      $calendar = $("#calendar");
      $calendar.fullCalendar({
        header: {
          left: "prev,next today",
          center: "title",
          right: "month,agendaWeek,agendaDay,listWeek",
        },
        selectable: true,
        selectHelper: true,
        select: function(start, end) {
          // on select we show the Sweet Alert modal with an input
          swal({
            title: "Create an Event",
            html:
              '<br><input class="form-control" placeholder="Event Title" id="input-field">',
            content: {
              element: "input",
              attributes: {
                placeholder: "Event Title",
                type: "text",
                id: "input-field",
                className: "form-control",
              },
            },
            buttons: {
              cancel: true,
              confirm: true,
            },
          }).then(function() {
            var eventData;
            var classRandom =
              className[Math.floor(Math.random() * className.length)];
            event_title = $("#input-field").val();

            if (event_title) {
              eventData = {
                title: event_title,
                start: start,
                className: classRandom,
                end: end,
              };
              $calendar.fullCalendar("renderEvent", eventData, true); // stick? = true
            }

            $calendar.fullCalendar("unselect");
          });
        },
        events: [
          {
            title: "All Day Event",
            start: new Date(y, m, 1),
            className: "fc-black",
          },
          {
            id: 999,
            title: "Repeating Event",
            start: new Date(y, m, d - 3, 16, 0),
            allDay: false,
            className: "fc-warning",
          },
          {
            id: 999,
            title: "Repeating Event",
            start: new Date(y, m, d + 4, 16, 0),
            allDay: false,
            className: "fc-info",
          },
          {
            title: "Meeting",
            start: new Date(y, m, d, 10, 30),
            allDay: false,
            className: "fc-danger",
          },
          {
            title: "Lunch",
            start: new Date(y, m, d, 12, 0),
            end: new Date(y, m, d, 14, 0),
            allDay: false,
            className: "fc-primary",
            description: "Eat Bro",
          },
          {
            title: "Meeting",
            start: new Date(y, m, d + 3, 13, 30),
            allDay: false,
            className: "fc-primary-solid",
            description: "Meeting",
          },
          {
            title: "Birthday Party",
            start: new Date(y, m, d + 1, 19, 0),
            end: new Date(y, m, d + 1, 22, 30),
            allDay: false,
            className: "fc-success",
            description: "Coba Googling dulu",
          },
          {
            title: "Lunch",
            start: new Date(y, m, d + 6, 13, 30),
            allDay: false,
            className: "fc-success-solid",
            description: "Lunch",
          },
          {
            title: "Click for Google",
            start: new Date(y, m, 28),
            end: new Date(y, m, 29),
            allDay: false,
            url: "http://google.com/",
            className: "fc-info-solid",
          },
        ],
      });
    });
  },
};
</script>
