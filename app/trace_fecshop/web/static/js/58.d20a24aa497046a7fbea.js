webpackJsonp([58],{OHZw:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"\n.editonfb thead tr th, .editonfb tbody tr td span {\n  font-size: 11px;\n}\n.chart-container {\n  position: relative;\n  padding: 20px;\n  width: 100%;\n  height: 85vh;\n}\n",""])},rlsN:function(t,e,a){var r=a("OHZw");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a("rjj0")("51b9a10e",r,!0)},"v3/F":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("woOf"),i=a.n(r),l=a("vLgD");var s=a("cAgV"),n=a("EOrk"),o=a("y7P9"),c=a("/dGt"),d={name:"marketGroupComplexTable",components:{Linechart:n.a,Lineratechart:o.a,Piechart:c.a},directives:{waves:s.a},data:function(){return{chartWidth:"1000px",chartHeight:"450px",chart_devide:{legenddata:[],seriesdata:[]},chart_operate:{legenddata:[],seriesdata:[]},chart_fec_app:{legenddata:[],seriesdata:[]},chart_couontry_code:{legenddata:[],seriesdata:[]},chart_browser_name:{legenddata:[],seriesdata:[]},chart_resolution:{legenddata:[],seriesdata:[]},chart_color_depth:{legenddata:[],seriesdata:[]},chart_language:{legenddata:[],seriesdata:[]},tableKey:0,list:null,imgApiUrl:{},multipleSelection:[],total:null,activeTabName:"first",activeTabName2:"chart_22",listLoading:!0,listQuery:{page:1,limit:20,category:void 0,website_id:void 0,service_date_str_begin:void 0,service_date_str_end:void 0,sort:"service_date_str",sort_dir:"descending"},siteIdOptions:{},createdCustomerOptions:{},sortOptions:[{label:"ID Ascending",key:"+id"},{label:"ID Descending",key:"-id"},{label:"CreatedAt Ascending",key:"+created_at"},{label:"CreatedAt Descending",key:"-created_at"}],temp:{id:void 0,name:"",trend:"",trendLang:"",created_customer_id:""},dialogFormVisible:!1,dialogFormVisible2:!1,dialogStatus:"",textMap:{update:"Edit",create:"Create"},initComplete:!1,rules:{}}},filters:{fixFloat2:function(t){return parseFloat(t).toFixed(2)},rateFloat2:function(t){return(100*t).toFixed(2)+"%"}},created:function(){this.getList()},methods:{handleClick:function(t,e){console.log(t,e)},handleClick2:function(t,e){console.log(t,e)},sortChange:function(t,e,a){!0===this.initComplete&&(this.listQuery.sort=t.prop,this.listQuery.sort_dir=t.order,this.getList())},changeFun:function(t){this.multipleSelection=t},isNumber:function(t){return!(!/^\d+(\.\d+)?$/.test(t)&&!/^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/.test(t))},getList:function(){var t,e=this;this.listLoading=!0,console.log(this.listQuery),(t=this.listQuery,Object(l.a)({url:"/v1/whole/category/list",method:"get",params:t})).then(function(t){e.list=t.data.items,e.total=t.data.total,e.siteIdOptions=t.data.siteIdOptions,e.listQuery.website_id=t.data.chosen_website_id,e.initComplete=!0,e.listLoading=!1,e.imgApiUrl=t.data.siteImgUrls}).catch(function(){e.listLoading=!1,e.$message({message:"获取列表失败",type:"error"})})},handleFilter:function(){this.listQuery.page=1,this.getList()},handleSizeChange:function(t){this.listQuery.limit=t,this.getList()},handleCurrentChange:function(t){this.listQuery.page=t,this.getList()},resetTemp:function(){this.temp={id:void 0,name:"",url_key:"",request_method:"",group_id:""}},handleUpdate:function(t){this.temp=i()({},t),this.dialogStatus="update",this.dialogFormVisible=!0;var e=this.peiFormat(this.temp.devide);this.chart_devide.legenddata=e[0],this.chart_devide.seriesdata=e[1];var a=this.peiFormat(this.temp.operate);this.chart_operate.legenddata=a[0],this.chart_operate.seriesdata=a[1];var r=this.peiFormat(this.temp.country_code);this.chart_couontry_code.legenddata=r[0],this.chart_couontry_code.seriesdata=r[1];var l=this.peiFormat(this.temp.fec_app);this.chart_fec_app.legenddata=l[0],this.chart_fec_app.seriesdata=l[1];var s=this.peiFormat(this.temp.browser_name);this.chart_browser_name.legenddata=s[0],this.chart_browser_name.seriesdata=s[1];var n=this.peiFormat(this.temp.resolution);this.chart_resolution.legenddata=n[0],this.chart_resolution.seriesdata=n[1];var o=this.peiFormat(this.temp.color_depth);this.chart_color_depth.legenddata=o[0],this.chart_color_depth.seriesdata=o[1];var c=this.peiFormat(this.temp.language);this.chart_language.legenddata=c[0],this.chart_language.seriesdata=c[1]},handleUpdate2:function(t){var e=this;this.temp=i()({},t);var a,r=this,s={},n={},o={category:t.category,service_date_str:t.service_date_str,website_id:t.website_id};(a=o,Object(l.a)({url:"/v1/whole/category/fetchtrendinfo",method:"get",async:!1,params:a})).then(function(t){for(var a in t.data.trend){var i=r.$t("table."+a);n[i]=t.data.trend[a]}s=t.data.trend,e.dialogStatus="update",e.dialogFormVisible2=!0,e.temp.trend=s,e.temp.trendLang=n}).catch(function(){e.listLoading=!1,e.$message({message:"获取追踪信息失败",type:"error"})})},peiFormat:function(t){var e=[],a=[];for(var r in t){var i=t[r];e.push(r),a.push({name:r,value:i})}return[e,a]}}},_={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container calendar-list-container"},[a("div",{staticClass:"filter-container"},[a("el-input",{staticClass:"filter-item",staticStyle:{width:"100px"},attrs:{clearable:"",placeholder:t.$t("table.category")},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.handleFilter(e)}},model:{value:t.listQuery.category,callback:function(e){t.$set(t.listQuery,"category",e)},expression:"listQuery.category"}}),t._v(" "),a("el-select",{staticClass:"filter-item",staticStyle:{width:"180px"},attrs:{clearable:"",placeholder:t.$t("table.website_id")},model:{value:t.listQuery.website_id,callback:function(e){t.$set(t.listQuery,"website_id",e)},expression:"listQuery.website_id"}},t._l(t.siteIdOptions,function(t){return a("el-option",{key:t.key,attrs:{label:t.display_name,value:t.key}})})),t._v(" "),a("el-date-picker",{staticClass:"filter-item",staticStyle:{width:"150px"},attrs:{clearable:"",type:"date",format:"yyyy-MM-dd",placeholder:t.$t("table.service_date_str_begin")},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.handleFilter(e)}},model:{value:t.listQuery.service_date_str_begin,callback:function(e){t.$set(t.listQuery,"service_date_str_begin",e)},expression:"listQuery.service_date_str_begin"}}),t._v(" "),a("el-date-picker",{staticClass:"filter-item",staticStyle:{width:"150px"},attrs:{clearable:"",type:"date",format:"yyyy-MM-dd",placeholder:t.$t("table.service_date_str_end")},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.handleFilter(e)}},model:{value:t.listQuery.service_date_str_end,callback:function(e){t.$set(t.listQuery,"service_date_str_end",e)},expression:"listQuery.service_date_str_end"}}),t._v(" "),a("el-input",{staticClass:"filter-item",staticStyle:{width:"100px"},attrs:{clearable:"",placeholder:t.$t("table.uv_begin")},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.handleFilter(e)}},model:{value:t.listQuery.uv_begin,callback:function(e){t.$set(t.listQuery,"uv_begin",e)},expression:"listQuery.uv_begin"}}),t._v(" "),a("el-input",{staticClass:"filter-item",staticStyle:{width:"100px"},attrs:{clearable:"",placeholder:t.$t("table.uv_end")},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.handleFilter(e)}},model:{value:t.listQuery.uv_end,callback:function(e){t.$set(t.listQuery,"uv_end",e)},expression:"listQuery.uv_end"}}),t._v(" "),a("br"),t._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.handleFilter}},[t._v(t._s(t.$t("table.search")))])],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],key:t.tableKey,staticClass:"editonfb",staticStyle:{width:"100%"},attrs:{height:"650","default-sort":{prop:t.listQuery.sort,order:t.listQuery.sort_dir},stripe:"",data:t.list,"element-loading-text":"给我一点时间",border:"",fit:"","highlight-current-row":""},on:{"sort-change":t.sortChange,"selection-change":t.changeFun}},[a("el-table-column",{attrs:{sortable:"custom",prop:"category",fixed:"","show-overflow-tooltip":"",width:"400px",align:"left",label:t.$t("table.category")},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticClass:"link-type"},[t._v(t._s(e.row.category))])]}}])}),t._v(" "),a("el-table-column",{attrs:{sortable:"custom",prop:"service_date_str","show-overflow-tooltip":"","min-width":"100px",align:"left",label:t.$t("table.service_date_str")},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticClass:"link-type"},[t._v(t._s(e.row.service_date_str))])]}}])}),t._v(" "),a("el-table-column",{attrs:{sortable:"custom",prop:"pv","show-overflow-tooltip":"","min-width":"80px",align:"left",label:t.$t("table.pv")},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticClass:"link-type"},[t._v(t._s(e.row.pv))])]}}])}),t._v(" "),a("el-table-column",{attrs:{sortable:"custom",prop:"uv","show-overflow-tooltip":"","min-width":"80px",align:"left",label:t.$t("table.uv")},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticClass:"link-type"},[t._v(t._s(e.row.uv))])]}}])}),t._v(" "),a("el-table-column",{attrs:{sortable:"custom",prop:"stay_seconds_rate","show-overflow-tooltip":"","min-width":"110px",align:"left",label:t.$t("table.stay_seconds_rate")},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticClass:"link-type"},[t._v(t._s(t._f("fixFloat2")(e.row.stay_seconds_rate)))])]}}])}),t._v(" "),a("el-table-column",{attrs:{sortable:"custom",prop:"is_return_rate","show-overflow-tooltip":"","min-width":"90px",align:"right",label:t.$t("table.is_return_rate")},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticClass:"link-type"},[t._v(t._s(t._f("rateFloat2")(e.row.is_return_rate)))])]}}])}),t._v(" "),a("el-table-column",{attrs:{sortable:"custom",prop:"jump_out_rate","show-overflow-tooltip":"","min-width":"90px",align:"right",label:t.$t("table.jump_out_rate")},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticClass:"link-type"},[t._v(t._s(t._f("rateFloat2")(e.row.jump_out_rate)))])]}}])}),t._v(" "),a("el-table-column",{attrs:{sortable:"custom",prop:"drop_out_rate","show-overflow-tooltip":"","min-width":"90px",align:"right",label:t.$t("table.drop_out_rate")},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticClass:"link-type"},[t._v(t._s(t._f("rateFloat2")(e.row.drop_out_rate)))])]}}])}),t._v(" "),a("el-table-column",{attrs:{fixed:"right",align:"center",label:t.$t("table.actions"),width:"80","class-name":"small-padding fixed-width"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){t.handleUpdate2(e.row)}}},[t._v(t._s(t.$t("table.trend")))]),t._v(" "),a("br"),t._v(" "),a("el-button",{staticStyle:{margin:"10px 0 0 -2px"},attrs:{type:"primary",size:"mini"},on:{click:function(a){t.handleUpdate(e.row)}}},[t._v(t._s(t.$t("table.editinfo")))])]}}])})],1),t._v(" "),a("div",{staticClass:"pagination-container"},[a("el-pagination",{attrs:{background:"","current-page":t.listQuery.page,"page-sizes":[10,20,30,50],"page-size":t.listQuery.limit,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1),t._v(" "),a("el-dialog",{attrs:{top:"1vh",title:t.$t("table.view_info"),visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-tabs",{on:{"tab-click":t.handleClick},model:{value:t.activeTabName,callback:function(e){t.activeTabName=e},expression:"activeTabName"}},[a("el-tab-pane",{attrs:{label:t.$t("table.base_info"),name:"first"}},[a("el-form",{ref:"dataForm1",staticStyle:{width:"800px","margin-left":"50px","margin-top":"10px"},attrs:{model:t.temp,"label-position":"left","label-width":"150px"}},[a("el-form-item",{attrs:{label:t.$t("table.category")}},[a("el-input",{model:{value:t.temp.category,callback:function(e){t.$set(t.temp,"category",e)},expression:"temp.category"}})],1),t._v(" "),a("el-form-item",{attrs:{label:t.$t("table.service_date_str")}},[a("el-input",{model:{value:t.temp.service_date_str,callback:function(e){t.$set(t.temp,"service_date_str",e)},expression:"temp.service_date_str"}})],1),t._v(" "),a("el-form-item",{attrs:{label:t.$t("table.stay_seconds")}},[a("el-input",{model:{value:t.temp.stay_seconds,callback:function(e){t.$set(t.temp,"stay_seconds",e)},expression:"temp.stay_seconds"}})],1),t._v(" "),a("el-form-item",{attrs:{label:t.$t("table.stay_seconds_rate")}},[a("el-input",{attrs:{value:t._f("fixFloat2")(t.temp.stay_seconds_rate)}})],1),t._v(" "),a("el-form-item",{attrs:{label:t.$t("table.pv")}},[a("el-input",{model:{value:t.temp.pv,callback:function(e){t.$set(t.temp,"pv",e)},expression:"temp.pv"}})],1),t._v(" "),a("el-form-item",{attrs:{label:t.$t("table.uv")}},[a("el-input",{model:{value:t.temp.uv,callback:function(e){t.$set(t.temp,"uv",e)},expression:"temp.uv"}})],1),t._v(" "),a("el-form-item",{attrs:{label:t.$t("table.pv_rate")}},[a("el-input",{attrs:{value:t._f("fixFloat2")(t.temp.pv_rate)}})],1),t._v(" "),a("el-form-item",{attrs:{label:t.$t("table.ip_count")}},[a("el-input",{model:{value:t.temp.ip_count,callback:function(e){t.$set(t.temp,"ip_count",e)},expression:"temp.ip_count"}})],1),t._v(" "),a("el-form-item",{attrs:{label:t.$t("table.jump_out_count")}},[a("el-input",{model:{value:t.temp.jump_out_count,callback:function(e){t.$set(t.temp,"jump_out_count",e)},expression:"temp.jump_out_count"}})],1),t._v(" "),a("el-form-item",{attrs:{label:t.$t("table.drop_out_count")}},[a("el-input",{model:{value:t.temp.drop_out_count,callback:function(e){t.$set(t.temp,"drop_out_count",e)},expression:"temp.drop_out_count"}})],1),t._v(" "),a("el-form-item",{attrs:{label:t.$t("table.jump_out_rate")}},[a("el-input",{attrs:{value:t._f("rateFloat2")(t.temp.jump_out_rate)}})],1),t._v(" "),a("el-form-item",{attrs:{label:t.$t("table.drop_out_rate")}},[a("el-input",{attrs:{value:t._f("rateFloat2")(t.temp.drop_out_rate)}})],1),t._v(" "),a("el-form-item",{attrs:{label:t.$t("table.is_return")}},[a("el-input",{model:{value:t.temp.is_return,callback:function(e){t.$set(t.temp,"is_return",e)},expression:"temp.is_return"}})],1),t._v(" "),a("el-form-item",{attrs:{label:t.$t("table.is_return_rate")}},[a("el-input",{attrs:{value:t._f("rateFloat2")(t.temp.is_return_rate)}})],1),t._v(" "),a("el-form-item",{attrs:{label:t.$t("table.first_page")}},[a("el-input",{model:{value:t.temp.first_page,callback:function(e){t.$set(t.temp,"first_page",e)},expression:"temp.first_page"}})],1)],1)],1),t._v(" "),a("el-tab-pane",{attrs:{label:t.$t("table.devide"),name:"chart_12"}},[a("div",{staticClass:"chart-container"},[a("piechart",{attrs:{className:"chart_12",id:"chart_12",width:t.chartWidth,height:t.chartHeight,legenddata:t.chart_devide.legenddata,seriesdata:t.chart_devide.seriesdata}})],1)]),t._v(" "),a("el-tab-pane",{attrs:{label:t.$t("table.operate"),name:"chart_13"}},[a("div",{staticClass:"chart-container"},[a("piechart",{attrs:{className:"chart_13",id:"chart_13",width:t.chartWidth,height:t.chartHeight,legenddata:t.chart_operate.legenddata,seriesdata:t.chart_operate.seriesdata}})],1)]),t._v(" "),a("el-tab-pane",{attrs:{label:t.$t("table.couontry_code"),name:"chart_14"}},[a("div",{staticClass:"chart-container"},[a("piechart",{attrs:{className:"chart_14",id:"chart_14",width:t.chartWidth,height:t.chartHeight,legenddata:t.chart_couontry_code.legenddata,seriesdata:t.chart_couontry_code.seriesdata}})],1)]),t._v(" "),a("el-tab-pane",{attrs:{label:t.$t("table.browser_name"),name:"chart_14_1"}},[a("div",{staticClass:"chart-container"},[a("piechart",{attrs:{className:"chart_14_1",id:"chart_14_1",width:t.chartWidth,height:t.chartHeight,legenddata:t.chart_browser_name.legenddata,seriesdata:t.chart_browser_name.seriesdata}})],1)]),t._v(" "),a("el-tab-pane",{attrs:{label:t.$t("table.fec_app"),name:"chart_15"}},[a("div",{staticClass:"chart-container"},[a("piechart",{attrs:{className:"chart_15",id:"chart_15",width:t.chartWidth,height:t.chartHeight,legenddata:t.chart_fec_app.legenddata,seriesdata:t.chart_fec_app.seriesdata}})],1)]),t._v(" "),a("el-tab-pane",{attrs:{label:t.$t("table.resolution"),name:"chart_16"}},[a("div",{staticClass:"chart-container"},[a("piechart",{attrs:{className:"chart_16",id:"chart_16",width:t.chartWidth,height:t.chartHeight,legenddata:t.chart_resolution.legenddata,seriesdata:t.chart_resolution.seriesdata}})],1)]),t._v(" "),a("el-tab-pane",{attrs:{label:t.$t("table.color_depth"),name:"chart_17"}},[a("div",{staticClass:"chart-container"},[a("piechart",{attrs:{className:"chart_17",id:"chart_17",width:t.chartWidth,height:t.chartHeight,legenddata:t.chart_color_depth.legenddata,seriesdata:t.chart_color_depth.seriesdata}})],1)]),t._v(" "),a("el-tab-pane",{attrs:{label:t.$t("table.language"),name:"chart_18"}},[a("div",{staticClass:"chart-container"},[a("piechart",{attrs:{className:"chart_18",id:"chart_18",width:t.chartWidth,height:t.chartHeight,legenddata:t.chart_language.legenddata,seriesdata:t.chart_language.seriesdata}})],1)])],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v(t._s(t.$t("table.cancel")))]),t._v(" "),"create"==t.dialogStatus?a("el-button",{attrs:{type:"primary"},on:{click:t.createData}},[t._v(t._s(t.$t("table.confirm")))]):t._e()],1)],1),t._v(" "),a("el-dialog",{attrs:{top:"1vh",title:t.$t("table.trend_info"),visible:t.dialogFormVisible2},on:{"update:visible":function(e){t.dialogFormVisible2=e}}},[a("el-tabs",{on:{"tab-click":t.handleClick2},model:{value:t.activeTabName2,callback:function(e){t.activeTabName2=e},expression:"activeTabName2"}},[a("el-tab-pane",{attrs:{label:t.$t("table.all_trend"),name:"first2"}},[a("div",{staticClass:"chart-container"},[a("linechart",{attrs:{className:"chart_21",id:"chart_21",width:t.chartWidth,height:t.chartHeight,lineData:t.temp.trendLang}})],1)]),t._v(" "),a("el-tab-pane",{attrs:{label:t.$t("table.pv"),name:"chart_22"}},[a("div",{staticClass:"chart-container"},[a("linechart",{attrs:{className:"chart_22",id:"chart_22",width:t.chartWidth,height:t.chartHeight,lineData:t.temp.trend&&t.temp.trend.hasOwnProperty("pv")?{pv:t.temp.trend.pv}:null}})],1)]),t._v(" "),a("el-tab-pane",{attrs:{label:t.$t("table.uv"),name:"chart_23"}},[a("div",{staticClass:"chart-container"},[a("linechart",{attrs:{className:"chart_23",id:"chart_23",width:t.chartWidth,height:t.chartHeight,lineData:t.temp.trend&&t.temp.trend.hasOwnProperty("uv")?{uv:t.temp.trend.uv}:null}})],1)]),t._v(" "),a("el-tab-pane",{attrs:{label:t.$t("table.pv_rate"),name:"chart_23_1"}},[a("div",{staticClass:"chart-container"},[a("linechart",{attrs:{className:"chart_23_1",id:"chart_23_1",width:t.chartWidth,height:t.chartHeight,lineData:t.temp.trend&&t.temp.trend.hasOwnProperty("pv_rate")?{pv_rate:t.temp.trend.pv_rate}:null}})],1)]),t._v(" "),a("el-tab-pane",{attrs:{label:t.$t("table.ip_count"),name:"chart_23_2"}},[a("div",{staticClass:"chart-container"},[a("linechart",{attrs:{className:"chart_23_2",id:"chart_23_2",width:t.chartWidth,height:t.chartHeight,lineData:t.temp.trend&&t.temp.trend.hasOwnProperty("ip_count")?{ip_count:t.temp.trend.ip_count}:null}})],1)]),t._v(" "),a("el-tab-pane",{attrs:{label:t.$t("table.stay_seconds"),name:"chart_24"}},[a("div",{staticClass:"chart-container"},[a("linechart",{attrs:{className:"chart_24",id:"chart_24",width:t.chartWidth,height:t.chartHeight,lineData:t.temp.trend&&t.temp.trend.hasOwnProperty("stay_seconds")?{stay_seconds:t.temp.trend.stay_seconds}:null}})],1)]),t._v(" "),a("el-tab-pane",{attrs:{label:t.$t("table.stay_seconds_rate"),name:"chart_25"}},[a("div",{staticClass:"chart-container"},[a("linechart",{attrs:{className:"chart_25",id:"chart_25",width:t.chartWidth,height:t.chartHeight,lineData:t.temp.trend&&t.temp.trend.hasOwnProperty("stay_seconds_rate")?{stay_seconds_rate:t.temp.trend.stay_seconds_rate}:null}})],1)]),t._v(" "),a("el-tab-pane",{attrs:{label:t.$t("table.is_return"),name:"chart_26_1"}},[a("div",{staticClass:"chart-container"},[a("linechart",{attrs:{className:"chart_26_1",id:"chart_26_1",width:t.chartWidth,height:t.chartHeight,lineData:t.temp.trend&&t.temp.trend.hasOwnProperty("is_return")?{is_return:t.temp.trend.is_return}:null}})],1)]),t._v(" "),a("el-tab-pane",{attrs:{label:t.$t("table.is_return_rate"),name:"chart_26"}},[a("div",{staticClass:"chart-container"},[a("lineratechart",{attrs:{className:"chart_26",id:"chart_26",width:t.chartWidth,height:t.chartHeight,lineData:t.temp.trend&&t.temp.trend.hasOwnProperty("is_return_rate")?{is_return_rate:t.temp.trend.is_return_rate}:null}})],1)]),t._v(" "),a("el-tab-pane",{attrs:{label:t.$t("table.jump_out_count"),name:"chart_28"}},[a("div",{staticClass:"chart-container"},[a("linechart",{attrs:{className:"chart_28",id:"chart_28",width:t.chartWidth,height:t.chartHeight,lineData:t.temp.trend&&t.temp.trend.hasOwnProperty("jump_out_count")?{jump_out_count:t.temp.trend.jump_out_count}:null}})],1)]),t._v(" "),a("el-tab-pane",{attrs:{label:t.$t("table.drop_out_count"),name:"chart_29"}},[a("div",{staticClass:"chart-container"},[a("linechart",{attrs:{className:"chart_29",id:"chart_29",width:t.chartWidth,height:t.chartHeight,lineData:t.temp.trend&&t.temp.trend.hasOwnProperty("drop_out_count")?{drop_out_count:t.temp.trend.drop_out_count}:null}})],1)]),t._v(" "),a("el-tab-pane",{attrs:{label:t.$t("table.jump_out_rate"),name:"chart_210"}},[a("div",{staticClass:"chart-container"},[a("lineratechart",{attrs:{className:"chart_210",id:"chart_210",width:t.chartWidth,height:t.chartHeight,lineData:t.temp.trend&&t.temp.trend.hasOwnProperty("jump_out_rate")?{jump_out_rate:t.temp.trend.jump_out_rate}:null}})],1)]),t._v(" "),a("el-tab-pane",{attrs:{label:t.$t("table.drop_out_rate"),name:"chart_211"}},[a("div",{staticClass:"chart-container"},[a("lineratechart",{attrs:{className:"chart_211",id:"chart_211",width:t.chartWidth,height:t.chartHeight,lineData:t.temp.trend&&t.temp.trend.hasOwnProperty("drop_out_rate")?{drop_out_rate:t.temp.trend.drop_out_rate}:null}})],1)])],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible2=!1}}},[t._v(t._s(t.$t("table.cancel")))]),t._v(" "),"create"==t.dialogStatus?a("el-button",{attrs:{type:"primary"},on:{click:t.createData}},[t._v(t._s(t.$t("table.confirm")))]):t._e()],1)],1)],1)},staticRenderFns:[]};var h=a("VU/8")(d,_,!1,function(t){a("rlsN")},null,null);e.default=h.exports}});