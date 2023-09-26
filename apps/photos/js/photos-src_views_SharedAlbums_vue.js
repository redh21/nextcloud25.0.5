/*! For license information please see photos-src_views_SharedAlbums_vue.js.LICENSE.txt */
"use strict";(self.webpackChunkphotos=self.webpackChunkphotos||[]).push([["src_views_SharedAlbums_vue"],{69363:(n,t,e)=>{e.d(t,{Z:()=>l});const l={name:"AbortControllerMixin",data:()=>({abortController:new AbortController}),beforeDestroy(){this.abortController.abort()},beforeRouteLeave(n,t,e){this.abortController.abort(),this.abortController=new AbortController,e()}}},49723:(n,t,e)=>{e.d(t,{Z:()=>r});var l=e(20629),o=e(45994),i=e(69363),a=e(99622);const r={name:"FetchSharedAlbumsMixin",data:()=>({errorFetchingAlbums:null,loadingAlbums:!1}),mixins:[i.Z],async beforeMount(){this.fetchAlbums()},computed:{...(0,l.Se)(["sharedAlbums"])},methods:{...(0,l.nv)(["addSharedAlbums"]),async fetchAlbums(){if(!this.loadingAlbums)try{var n;this.loadingAlbums=!0,this.errorFetchingAlbums=null;const t=await(0,a.CE)("/photos/".concat(null===(n=(0,o.ts)())||void 0===n?void 0:n.uid,"/sharedalbums"),this.abortController.signal);this.addSharedAlbums({albums:t})}catch(n){var t;404===(null===(t=n.response)||void 0===t?void 0:t.status)?this.errorFetchingAlbums=404:this.errorFetchingAlbums=n}finally{this.loadingAlbums=!1}}}}},5582:(n,t,e)=>{e.d(t,{Z:()=>r});var l=e(87537),o=e.n(l),i=e(23645),a=e.n(i)()(o());a.push([n.id,".collection-cover[data-v-4af48810]{display:flex;flex-direction:column;padding:16px;border-radius:var(--border-radius-large)}.collection-cover[data-v-4af48810]:hover,.collection-cover[data-v-4af48810]:focus{background:var(--color-background-dark)}.collection-cover__image[data-v-4af48810]{width:350px;height:350px;object-fit:none;border-radius:var(--border-radius-large)}@media only screen and (max-width: 1200px){.collection-cover__image[data-v-4af48810]{width:250px;height:250px}}.collection-cover__image--placeholder[data-v-4af48810]{background:var(--color-primary-light)}.collection-cover__image--placeholder[data-v-4af48810] :deep(.material-design-icon){width:100%;height:100%}.collection-cover__image--placeholder :deep(.material-design-icon) .material-design-icon__svg[data-v-4af48810]{fill:var(--color-primary)}.collection-cover__details[data-v-4af48810]{display:flex;flex-direction:column;margin-top:16px;width:350px}@media only screen and (max-width: 1200px){.collection-cover__details[data-v-4af48810]{width:250px}}.collection-cover__details__title[data-v-4af48810]{display:flex}.collection-cover__details__subtitle[data-v-4af48810]{display:flex;color:var(--color-text-lighter)}","",{version:3,sources:["webpack://./src/components/Collection/CollectionCover.vue"],names:[],mappings:"AAqFA,mCACC,YAAA,CACA,qBAAA,CACA,YAAA,CACA,wCAAA,CAEA,kFACC,uCAAA,CAGD,0CACC,WAAA,CACA,YAAA,CACA,eAAA,CACA,wCAAA,CAEA,2CAND,0CAOE,WAAA,CACA,YAAA,CAAA,CAGD,uDACC,qCAAA,CAEA,oFACC,UAAA,CACA,WAAA,CAEA,+GACC,yBAAA,CAMJ,4CACC,YAAA,CACA,qBAAA,CACA,eAAA,CACA,WAAA,CAEA,2CAND,4CAOE,WAAA,CAAA,CAGD,mDACC,YAAA,CAGD,sDACC,YAAA,CACA,+BAAA",sourcesContent:['$sizes: ("400": ("count": 3, "marginTop": 66, "marginW": 8), "700": ("count": 4, "marginTop": 66, "marginW": 8), "1024": ("count": 5, "marginTop": 66, "marginW": 44), "1280": ("count": 4, "marginTop": 66, "marginW": 44), "1440": ("count": 5, "marginTop": 88, "marginW": 66), "1600": ("count": 6, "marginTop": 88, "marginW": 66), "2048": ("count": 7, "marginTop": 88, "marginW": 66), "2560": ("count": 8, "marginTop": 88, "marginW": 88), "3440": ("count": 9, "marginTop": 88, "marginW": 88), "max": ("count": 10, "marginTop": 88, "marginW": 88));\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.collection-cover {\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding: 16px;\n\tborder-radius: var(--border-radius-large);\n\n\t&:hover, &:focus {\n\t\tbackground: var(--color-background-dark);\n\t}\n\n\t&__image {\n\t\twidth: 350px;\n\t\theight: 350px;\n\t\tobject-fit: none;\n\t\tborder-radius: var(--border-radius-large);\n\n\t\t@media only screen and (max-width: 1200px) {\n\t\t\twidth: 250px;\n\t\t\theight: 250px;\n\t\t}\n\n\t\t&--placeholder {\n\t\t\tbackground: var(--color-primary-light);\n\n\t\t\t:deep(.material-design-icon) {\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 100%;\n\n\t\t\t\t.material-design-icon__svg {\n\t\t\t\t\tfill: var(--color-primary);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\t&__details {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tmargin-top: 16px;\n\t\twidth: 350px;\n\n\t\t@media only screen and (max-width: 1200px) {\n\t\t\twidth: 250px;\n\t\t}\n\n\t\t&__title {\n\t\t\tdisplay: flex;\n\t\t}\n\n\t\t&__subtitle {\n\t\t\tdisplay: flex;\n\t\t\tcolor: var(--color-text-lighter);\n\t\t}\n\t}\n\n}\n'],sourceRoot:""}]);const r=a},69553:(n,t,e)=>{e.d(t,{Z:()=>r});var l=e(87537),o=e.n(l),i=e(23645),a=e.n(i)()(o());a.push([n.id,".collections[data-v-1cc87f6c]{display:flex;flex-direction:column;height:100%}.collections__list[data-v-1cc87f6c]{padding:32px 48px;flex-grow:1;display:flex;flex-wrap:wrap;gap:16px;align-items:flex-start;height:calc(100% - 60px);overflow-x:scroll}@media only screen and (max-width: 1200px){.collections__list[data-v-1cc87f6c]{padding:32px 12px;justify-content:center}}","",{version:3,sources:["webpack://./src/components/Collection/CollectionsList.vue"],names:[],mappings:"AAmFA,8BACC,YAAA,CACA,qBAAA,CACA,WAAA,CAEA,oCACC,iBAAA,CACA,WAAA,CACA,YAAA,CACA,cAAA,CACA,QAAA,CACA,sBAAA,CACA,wBAAA,CACA,iBAAA,CAEA,2CAVD,oCAWE,iBAAA,CACA,sBAAA,CAAA",sourcesContent:['$sizes: ("400": ("count": 3, "marginTop": 66, "marginW": 8), "700": ("count": 4, "marginTop": 66, "marginW": 8), "1024": ("count": 5, "marginTop": 66, "marginW": 44), "1280": ("count": 4, "marginTop": 66, "marginW": 44), "1440": ("count": 5, "marginTop": 88, "marginW": 66), "1600": ("count": 6, "marginTop": 88, "marginW": 66), "2048": ("count": 7, "marginTop": 88, "marginW": 66), "2560": ("count": 8, "marginTop": 88, "marginW": 88), "3440": ("count": 9, "marginTop": 88, "marginW": 88), "max": ("count": 10, "marginTop": 88, "marginW": 88));\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.collections {\n\tdisplay: flex;\n\tflex-direction: column;\n\theight: 100%;\n\n\t&__list {\n\t\tpadding: 32px 48px;\n\t\tflex-grow: 1;\n\t\tdisplay: flex;\n\t\tflex-wrap: wrap;\n\t\tgap: 16px;\n\t\talign-items: flex-start;\n\t\theight: calc(100% - 60px);\n\t\toverflow-x: scroll;\n\n\t\t@media only screen and (max-width: 1200px) {\n\t\t\tpadding: 32px 12px;\n\t\t\tjustify-content: center;\n\t\t}\n\t}\n}\n'],sourceRoot:""}]);const r=a},83137:(n,t,e)=>{e.d(t,{Z:()=>r});var l=e(87537),o=e.n(l),i=e(23645),a=e.n(i)()(o());a.push([n.id,".albums-list[data-v-10a1f9c9]{display:flex;flex-direction:column}.albums-list .album__name[data-v-10a1f9c9]{font-weight:normal;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}","",{version:3,sources:["webpack://./src/views/SharedAlbums.vue"],names:[],mappings:"AAiHA,8BACC,YAAA,CACA,qBAAA,CAEA,2CACC,kBAAA,CACA,eAAA,CACA,kBAAA,CACA,sBAAA",sourcesContent:['$sizes: ("400": ("count": 3, "marginTop": 66, "marginW": 8), "700": ("count": 4, "marginTop": 66, "marginW": 8), "1024": ("count": 5, "marginTop": 66, "marginW": 44), "1280": ("count": 4, "marginTop": 66, "marginW": 44), "1440": ("count": 5, "marginTop": 88, "marginW": 66), "1600": ("count": 6, "marginTop": 88, "marginW": 66), "2048": ("count": 7, "marginTop": 88, "marginW": 66), "2560": ("count": 8, "marginTop": 88, "marginW": 88), "3440": ("count": 9, "marginTop": 88, "marginW": 88), "max": ("count": 10, "marginTop": 88, "marginW": 88));\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.albums-list {\n\tdisplay: flex;\n\tflex-direction: column;\n\n\t.album__name {\n\t\tfont-weight: normal;\n\t\toverflow: hidden;\n\t\twhite-space: nowrap;\n\t\ttext-overflow: ellipsis;\n\t}\n}\n'],sourceRoot:""}]);const r=a},24777:(n,t,e)=>{e.d(t,{Z:()=>o});const l={name:"AlertCircleIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};const o=(0,e(51900).Z)(l,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("span",n._b({staticClass:"material-design-icon alert-circle-icon",attrs:{"aria-hidden":!n.title,"aria-label":n.title,role:"img"},on:{click:function(t){return n.$emit("click",t)}}},"span",n.$attrs,!1),[e("svg",{staticClass:"material-design-icon__svg",attrs:{fill:n.fillColor,width:n.size,height:n.size,viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"}},[n.title?e("title",[n._v(n._s(n.title))]):n._e()])])])}),[],!1,null,null,null).exports},65322:(n,t,e)=>{e.d(t,{Z:()=>o});const l={name:"FolderMultipleImageIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};const o=(0,e(51900).Z)(l,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("span",n._b({staticClass:"material-design-icon folder-multiple-image-icon",attrs:{"aria-hidden":!n.title,"aria-label":n.title,role:"img"},on:{click:function(t){return n.$emit("click",t)}}},"span",n.$attrs,!1),[e("svg",{staticClass:"material-design-icon__svg",attrs:{fill:n.fillColor,width:n.size,height:n.size,viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M7,15L11.5,9L15,13.5L17.5,10.5L21,15M22,4H14L12,2H6A2,2 0 0,0 4,4V16A2,2 0 0,0 6,18H22A2,2 0 0,0 24,16V6A2,2 0 0,0 22,4M2,6H0V11H0V20A2,2 0 0,0 2,22H20V20H2V6Z"}},[n.title?e("title",[n._v(n._s(n.title))]):n._e()])])])}),[],!1,null,null,null).exports},36288:(n,t,e)=>{e.d(t,{Z:()=>o});const l={name:"ImageMultipleIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};const o=(0,e(51900).Z)(l,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("span",n._b({staticClass:"material-design-icon image-multiple-icon",attrs:{"aria-hidden":!n.title,"aria-label":n.title,role:"img"},on:{click:function(t){return n.$emit("click",t)}}},"span",n.$attrs,!1),[e("svg",{staticClass:"material-design-icon__svg",attrs:{fill:n.fillColor,width:n.size,height:n.size,viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M22,16V4A2,2 0 0,0 20,2H8A2,2 0 0,0 6,4V16A2,2 0 0,0 8,18H20A2,2 0 0,0 22,16M11,12L13.03,14.71L16,11L20,16H8M2,6V20A2,2 0 0,0 4,22H18V20H4V6"}},[n.title?e("title",[n._v(n._s(n.title))]):n._e()])])])}),[],!1,null,null,null).exports},23113:(n,t,e)=>{e.d(t,{Z:()=>f});var l=e(20629);const o={name:"CollectionCover",components:{ImageMultiple:e(36288).Z},props:{coverUrl:{type:String,required:!0},altImg:{type:String,required:!0},link:{type:String,required:!0}},computed:{...(0,l.Se)(["files","albums"])}};var i=e(93379),a=e.n(i),r=e(7795),s=e.n(r),c=e(90569),A=e.n(c),d=e(3565),m=e.n(d),u=e(19216),p=e.n(u),g=e(44589),C=e.n(g),h=e(5582),v={};v.styleTagTransform=C(),v.setAttributes=m(),v.insert=A().bind(null,"head"),v.domAPI=s(),v.insertStyleElement=p();a()(h.Z,v);h.Z&&h.Z.locals&&h.Z.locals;const f=(0,e(51900).Z)(o,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("li",[e("router-link",{staticClass:"collection-cover",attrs:{to:n.link}},[""!==n.coverUrl?e("img",{staticClass:"collection-cover__image",attrs:{src:n.coverUrl,alt:n.altImg}}):e("div",{staticClass:"collection-cover__image collection-cover__image--placeholder"},[e("ImageMultiple",{attrs:{size:128}})],1),n._v(" "),e("div",{staticClass:"collection-cover__details"},[e("div",{staticClass:"collection-cover__details__title"},[n._t("default")],2),n._v(" "),e("div",{staticClass:"collection-cover__details__subtitle"},[n._t("subtitle")],2)])])],1)}),[],!1,null,"4af48810",null).exports},46764:(n,t,e)=>{e.d(t,{Z:()=>_});var l=e(24777),o=e(33476);const i={name:"CollectionsList",components:{AlertCircle:l.Z,NcEmptyContent:o.NcEmptyContent},props:{collections:{type:Object,required:!0},loading:{type:Boolean,default:!1},error:{type:Error,default:null}},computed:{noCollection(){return 0===Object.keys(this.collections).length}}};var a=e(93379),r=e.n(a),s=e(7795),c=e.n(s),A=e(90569),d=e.n(A),m=e(3565),u=e.n(m),p=e(19216),g=e.n(p),C=e(44589),h=e.n(C),v=e(69553),f={};f.styleTagTransform=h(),f.setAttributes=u(),f.insert=d().bind(null,"head"),f.domAPI=c(),f.insertStyleElement=g();r()(v.Z,f);v.Z&&v.Z.locals&&v.Z.locals;const _=(0,e(51900).Z)(i,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return n.error?e("NcEmptyContent",{attrs:{title:n.t("photos","An error occurred")}},[e("AlertCircle",{attrs:{slot:"icon"},slot:"icon"})],1):e("div",{staticClass:"collections"},[n._t("header"),n._v(" "),n.noCollection&&!n.loading?n._t("empty-collections-list"):n.noCollection?n._e():e("ul",{staticClass:"collections__list"},[n._l(n.collections,(function(t){return n._t("default",null,{collection:t})}))],2)],2)}),[],!1,null,"1cc87f6c",null).exports},46141:(n,t,e)=>{e.r(t),e.d(t,{default:()=>Z});var l=e(65322),o=e(79753),i=e(33476),a=e(49723),r=e(46764),s=e(23113),c=e(68391),A=e(9944);const d={name:"SharedAlbums",components:{FolderMultipleImage:l.Z,NcEmptyContent:i.NcEmptyContent,CollectionsList:r.Z,CollectionCover:s.Z,HeaderNavigation:c.Z,NcUserBubble:i.NcUserBubble},filters:{coverUrl:n=>-1===n?"":(0,o.generateUrl)("/apps/photos/api/v1/preview/".concat(n,"?x=",512,"&y=",512)),albumOriginalName:n=>n.basename.replace(new RegExp("\\(".concat(n.collaborators[0].id,"\\)$")),"")},mixins:[a.Z],methods:{t:A.translate,n:A.translatePlural}};var m=e(93379),u=e.n(m),p=e(7795),g=e.n(p),C=e(90569),h=e.n(C),v=e(3565),f=e.n(v),_=e(19216),b=e.n(_),x=e(44589),y=e.n(x),w=e(83137),W={};W.styleTagTransform=y(),W.setAttributes=f(),W.insert=h().bind(null,"head"),W.domAPI=g(),W.insertStyleElement=b();u()(w.Z,W);w.Z&&w.Z.locals&&w.Z.locals;const Z=(0,e(51900).Z)(d,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("CollectionsList",{staticClass:"albums-list",attrs:{collections:n.sharedAlbums,loading:n.loadingAlbums,error:n.errorFetchingAlbums},scopedSlots:n._u([{key:"default",fn:function(t){var l=t.collection;return e("CollectionCover",{key:l.basename,attrs:{link:"/sharedalbums/"+l.basename,"alt-img":n.t("photos","Cover photo for shared album {albumName}.",{albumName:l.basename}),"data-test":l.basename,"cover-url":n._f("coverUrl")(l.lastPhoto)}},[e("h2",{staticClass:"album__name"},[n._v("\n\t\t\t"+n._s(n._f("albumOriginalName")(l))+"\n\t\t")]),n._v(" "),e("div",{staticClass:"album__details",attrs:{slot:"subtitle"},slot:"subtitle"},[n._v("\n\t\t\t"+n._s(l.date)+" ⸱ "+n._s(n.n("photos","%n item","%n photos and videos",l.nbItems))+"\n\t\t\t"),e("br"),n._v("\n\t\t\t"+n._s(n.t("photos","Shared by"))+" "),e("NcUserBubble",{attrs:{"display-name":l.collaborators[0].label,user:l.collaborators[0].id}})],1)])}}])},[e("HeaderNavigation",{key:"navigation",attrs:{slot:"header",loading:n.loadingAlbums,title:n.t("photos","Shared albums"),"root-title":n.t("photos","Shared albums")},on:{refresh:n.fetchAlbums},slot:"header"}),n._v(" "),n._v(" "),e("NcEmptyContent",{attrs:{slot:"empty-collections-list",title:n.t("photos","There is no album yet!")},slot:"empty-collections-list"},[e("FolderMultipleImage",{attrs:{slot:"icon"},slot:"icon"})],1)],1)}),[],!1,null,"10a1f9c9",null).exports}}]);
//# sourceMappingURL=photos-src_views_SharedAlbums_vue.js.map?v=d0fa5057dbc632d9c60c