(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{294:function(t,e,r){"use strict";r(12),r(8),r(7),r(6),r(9);var o=r(2),n=(r(303),r(295)),c=r(296),l=r(30),d=r(5);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}e.a=Object(d.a)(l.a).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean},computed:{classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(source,!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(source).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-breadcrumbs--large":this.large},this.themeClasses)}},methods:{genDivider:function(){return this.$createElement(n.a,this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var t=[],e=!!this.$scopedSlots.item,r=[],i=0;i<this.items.length;i++){var o=this.items[i];r.push(o.text),e?t.push(this.$scopedSlots.item({item:o})):t.push(this.$createElement(c.a,{key:r.join("."),props:o},[o.text])),i<this.items.length-1&&t.push(this.genDivider())}return t}},render:function(t){var e=this.$slots.default||this.genItems();return t("ul",{staticClass:"v-breadcrumbs",class:this.classes},e)}})},295:function(t,e,r){"use strict";r.d(e,"a",(function(){return l}));var o=r(294),n=r(296),c=r(0),l=Object(c.e)("v-breadcrumbs__divider","li");o.a,n.a},296:function(t,e,r){"use strict";r(12),r(8),r(7),r(6),r(9);var o=r(2),n=r(48),c=r(5);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(source,!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(source).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(c.a)(n.a).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes:function(){return Object(o.a)({"v-breadcrumbs__item":!0},this.activeClass,this.disabled)}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return t("li",[t(r,d({},data,{attrs:d({},data.attrs,{"aria-current":this.isActive&&this.isLink?"page":void 0})}),this.$slots.default)])}})},303:function(t,e,r){var content=r(304);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("b1bed018",content,!0,{sourceMap:!1})},304:function(t,e,r){(t.exports=r(10)(!1)).push([t.i,".theme--light.v-breadcrumbs .v-breadcrumbs__divider,.theme--light.v-breadcrumbs .v-breadcrumbs__item--disabled{color:rgba(0,0,0,.38)}.theme--dark.v-breadcrumbs .v-breadcrumbs__divider,.theme--dark.v-breadcrumbs .v-breadcrumbs__item--disabled{color:hsla(0,0%,100%,.5)}.v-breadcrumbs{align-items:center;display:flex;flex-wrap:wrap;flex:0 1 auto;list-style-type:none;margin:0;padding:18px 12px}.v-breadcrumbs li{align-items:center;display:inline-flex;font-size:14px}.v-breadcrumbs li .v-icon{font-size:16px}.v-breadcrumbs li:nth-child(2n){padding:0 12px}.v-breadcrumbs__item{align-items:center;display:inline-flex;text-decoration:none;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-breadcrumbs__item--disabled{pointer-events:none}.v-breadcrumbs--large li,.v-breadcrumbs--large li .v-icon{font-size:16px}",""])},310:function(t,e,r){t.exports=r.p+"img/507db7a.png"},313:function(t,e,r){var content=r(362);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("60daa2ae",content,!0,{sourceMap:!1})},354:function(t,e,r){t.exports=r.p+"img/f490d49.png"},355:function(t,e,r){t.exports=r.p+"img/b49aaf1.png"},356:function(t,e,r){t.exports=r.p+"img/f372e5a.png"},357:function(t,e,r){t.exports=r.p+"img/710b6cd.png"},358:function(t,e,r){t.exports=r.p+"img/92b3957.png"},359:function(t,e,r){t.exports=r.p+"img/a57ba33.png"},360:function(t,e,r){t.exports=r.p+"img/0379795.png"},361:function(t,e,r){"use strict";var o=r(313);r.n(o).a},362:function(t,e,r){(t.exports=r(10)(!1)).push([t.i,".temaBoton{color:#00c78f!important}.textoGris{color:#2f495e}.textoGris2{color:#718096}.textoVerde{color:#00c58e}",""])},379:function(t,e,r){"use strict";r.r(e);var o=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row text-center"},[e("div",{staticClass:"col-md-6 mb-3 pt-4"},[e("h1",{staticClass:"font-weight-bold textoGris text-left"},[this._v(" Horarios CNCA ")]),this._v(" "),e("p",{staticClass:"title font-weight-medium textoGris2 text-left"},[this._v("\n              Horarios CNCA es una aplicación web, desarrollada y diseñada para instructores, aprendices y funcionarios del SENA.\n              Permite la creacion, edición y visualización de los horarios que la funcionaria encargada genere.\n          ")])]),this._v(" "),e("div",{staticClass:"col-md-6 mb-8"},[e("img",{staticClass:"img-fluid rounded",attrs:{src:r(354)}})])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container mt-8 mb-8"},[o("div",{staticClass:"row text-center"},[o("div",{staticClass:"col-md-6 mb-8"},[o("img",{staticClass:"img-fluid rounded",attrs:{src:r(355)}})]),t._v(" "),o("div",{staticClass:"col-md-6 mb-3 "},[o("h1",{staticClass:"title font-weight-bold textoGris text-left"},[t._v(" ¿Cómo funciona? ")]),t._v(" "),o("p",{staticClass:"body-2 font-weight-medium textoGris2 text-left"},[t._v("Existen 4 roles en el Software, administrador, aprendiz, funcionario e instructor. Cada uno con diferentes permisos:")]),t._v(" "),o("h4",{staticClass:"subtitle-2 font-weight-bold textoGris text-left"},[t._v(" Administrador ")]),t._v(" "),o("p",{staticClass:"body-2 font-weight-medium textoGris2 text-left"},[t._v("El administrador tiene acceso a todas las funciones del Software y da permisos a los diferentes roles.")]),t._v(" "),o("h4",{staticClass:"subtitle-2 font-weight-bold textoGris text-left"},[t._v(" Instructor ")]),t._v(" "),o("p",{staticClass:"body-2 font-weight-medium textoGris2 text-left"},[t._v("El instructor puede ver un informe que muestra el horario, el ambiente de clases y las fichas asignadas a su clase.")]),t._v(" "),o("h4",{staticClass:"subtitle-2 font-weight-bold textoGris text-left"},[t._v(" Aprendiz ")]),t._v(" "),o("p",{staticClass:"body-2 font-weight-medium textoGris2 text-left"},[t._v("El aprendiz puede ver un informe que muestra, horario de clase, ficha y su ambiente de clase.")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-md-6 mb-8"},[e("img",{staticClass:"img-fluid rounded",attrs:{src:r(356)}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container mt-8 mb-8"},[e("div",{staticClass:"row text-center"},[e("div",{staticClass:"col-md-6 mb-8"},[e("img",{staticClass:"img-fluid rounded img-thumbnail",attrs:{src:r(357)}})]),this._v(" "),e("div",{staticClass:"col-md-6 mb-8"},[e("img",{staticClass:"img-fluid rounded img-thumbnail",attrs:{src:r(358)}})]),this._v(" "),e("div",{staticClass:"col-md-6 mb-8"},[e("img",{staticClass:"img-fluid rounded img-thumbnail",attrs:{src:r(359)}})]),this._v(" "),e("div",{staticClass:"col-md-6 mb-8"},[e("img",{staticClass:"img-fluid rounded img-thumbnail",attrs:{src:r(360)}})])])])}],n={head:{titleTemplate:"Angel Archbold ~ HORARIO CNCA"},data:function(){return{experienciaLaboral:[{titulo:"SENA - INVESTIGADOR Y PROGRAMADOR EN SENNOVA",texto:"Desarrolle aplicativo de contabilidad y pagina publicitaria del CONGRESO 2019 SENNOVA",color:"primary",year:"Julio 2019 - Enero 2020"},{titulo:"SENA - MONITORIAS COMO PROGRAMADOR EN SENNOVA",texto:"Desarrolle aplicativo de horarios, para gestionar el horario de las fichas e instructores y mejorar el proceso de creacion para los funcionarios SENA.",color:"primary",year:"Abril 2019 - Julio 2019"}],backEnd:[{icono:"mdi mdi-language-php",colorIcono:"#787CB4",valor:"90",valor2:"90%",colorValor:"#787CB4"},{icono:"mdi mdi-vuejs",colorIcono:"#3FB37F",valor:"90",valor2:"90%",colorValor:"#3FB37F"},{icono:"mdi mdi-language-html5",colorIcono:"#FE4C1E",valor:"99",valor2:"99%",colorValor:"#FE4C1E"},{icono:"mdi mdi-language-css3",colorIcono:"#379AD6",valor:"40",valor2:"40%",colorValor:"#379AD6"},{icono:"mdi mdi-language-javascript",colorIcono:"#F7E018",valor:"90",valor2:"90%",colorValor:"#F7E018"},{icono:"mdi mdi-jquery",colorIcono:"#32ABEA",valor:"90",valor2:"90%",colorValor:"#32ABEA"},{icono:"mdi mdi-bootstrap",colorIcono:"#543B79",valor:"99",valor2:"99%",colorValor:"#543B79"},{icono:"mdi mdi-vuetify",colorIcono:"#1697F6",valor:"80",valor2:"80%",colorValor:"#1697F6"},{icono:"mdi mdi-material-design",colorIcono:"#BEBCBF",valor:"80",valor2:"80%",colorValor:"#BEBCBF"}],options:[{text:"Portafolio",disabled:!1,to:"../portafolio"},{text:"Horario CNCA",disabled:!0}]}},mounted:function(){var t=this;this.$nextTick((function(){t.$nuxt.$loading.start(),setTimeout((function(){return t.$nuxt.$loading.finish()}),1e3)}))}},c=(r(361),r(55)),l=r(79),d=r.n(l),m=r(126),v=r(294),f=r(298),h=r(329),x=r(128),C=r(293),_=r(29),y=r(340),O=r(380),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"transition"},[o("div",{staticClass:"container mt-8 mb-8"},[o("div",[o("v-breadcrumbs",{attrs:{items:t.options,divider:">",large:""}})],1),t._v(" "),t._m(0)]),t._v(" "),o("section",{staticStyle:{"background-color":"white"}},[t._m(1),t._v(" "),o("div",{staticClass:"container mt-8 mb-8"},[o("div",{staticClass:"row text-center"},[t._m(2),t._v(" "),o("div",{staticClass:"col-md-6 mb-3 "},[o("h1",{staticClass:"display-1 font-weight-bold textoGris text-left"},[t._v(" Inicio de sesión ")]),t._v(" "),o("v-divider",{attrs:{color:"#00c58e",width:"150"}}),t._v(" "),o("p",{staticClass:"title font-weight-medium textoGris2 text-left"},[t._v("\n                Formulario de login, para los intructores, funcionarios y administrador. Con validación de contraseña, usuario. Con mensajes de error y de exito\n            ")])],1)])]),t._v(" "),t._m(3)]),t._v(" "),o("div",{staticClass:"container mt-8"},[o("div",{staticClass:"row text-center"},[o("div",{staticClass:"col-md-6 mb-3 pt-12 mt-12"},[o("h1",{staticClass:"font-weight-bold textoGris text-left"},[t._v(" Estado del proyecto ")]),t._v(" "),o("v-divider",{attrs:{width:"200",color:"#00C78F"}})],1),t._v(" "),o("div",{staticClass:"col-md-12"},[o("h2",{staticClass:"font-weight-bold text-left error--text"},[t._v("Terminado")]),t._v(" "),o("v-progress-linear",{attrs:{value:"100",height:"10",striped:"",color:"error"}})],1)])]),t._v(" "),o("div",{staticClass:"container mb-8"},[o("div",{staticClass:"row text-center"},[o("div",{staticClass:"col-md-6 mb-3 "},[o("h1",{staticClass:"font-weight-bold textoGris text-left"},[t._v(" Tecnologías usada ")]),t._v(" "),o("v-divider",{attrs:{width:"200",color:"#00C78F"}})],1),t._v(" "),o("div",{staticClass:"col-md-12"},[o("v-sheet",{staticClass:"mx-auto",attrs:{elevation:"8","max-width":"1200","max-height":"800"}},[o("v-slide-group",{staticClass:"pa-4",attrs:{"show-arrows":""}},[t._l(t.backEnd,(function(e,i){return o("v-slide-item",{key:i},[o("v-card",{staticClass:"ma-4 text-center",attrs:{height:"100",width:"100",hover:""}},[o("v-avatar",{attrs:{size:"90"}},[o("v-icon",{attrs:{size:"60",color:e.colorIcono}},[t._v(" "+t._s(e.icono)+" ")])],1)],1)],1)})),t._v(" "),o("v-card",{staticClass:"ma-4 text-center",attrs:{height:"100",width:"100",hover:""}},[o("v-avatar",{attrs:{size:"95",tile:""}},[o("img",{staticClass:"img-fluid",attrs:{src:r(310)}})])],1)],2)],1)],1)])])])}),o,!1,null,null,null);e.default=component.exports;d()(component,{VAvatar:m.a,VBreadcrumbs:v.a,VCard:f.a,VDivider:h.a,VIcon:x.a,VProgressLinear:C.a,VSheet:_.a,VSlideGroup:y.b,VSlideItem:O.a})}}]);