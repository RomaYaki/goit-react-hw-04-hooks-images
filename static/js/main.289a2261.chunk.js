(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{11:function(e,t,a){e.exports={ImageGalleryItem:"ImgItem_ImageGalleryItem__2KaB5","ImageGalleryItem-image":"ImgItem_ImageGalleryItem-image__24iIK"}},12:function(e,t,a){e.exports={Overlay:"Modal_Overlay__2AxMb",Modal:"Modal_Modal__2WBTT"}},15:function(e,t,a){e.exports={ImageGallery:"ImgGalary_ImageGallery__pH0GB"}},16:function(e,t,a){e.exports={App:"style_App__1PElp",ImageGallery:"style_ImageGallery__25uTC",ImageGalleryItem:"style_ImageGalleryItem__1_yQS","ImageGalleryItem-image":"style_ImageGalleryItem-image__1aDro",Overlay:"style_Overlay__csboF",Modal:"style_Modal__2Ot8F"}},17:function(e,t,a){e.exports={Button:"Btn_Button__1f8e3"}},21:function(e,t,a){e.exports={loader:"Loader_loader__1j2Bs"}},4:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__DjWH3",SearchForm:"Searchbar_SearchForm__1ac2l","SearchForm-button":"Searchbar_SearchForm-button__3u-rY","SearchForm-button-label":"Searchbar_SearchForm-button-label__2bzU3","SearchForm-input":"Searchbar_SearchForm-input__j6qzO"}},52:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),o=a.n(c),i=a(10),s=a.n(i),l=a(13),u=a(14),m=a(3),b=a(8),j=(a(29),a(4)),h=a.n(j),d=a(1);var g=function(e){var t=e.onSubmit,a=Object(n.useState)(""),r=Object(m.a)(a,2),c=r[0],o=r[1];return Object(d.jsx)("header",{className:h.a.Searchbar,children:Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==c.trim()?(t(c),o("")):b.b.error("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0438.")},className:h.a.SearchForm,children:[Object(d.jsx)("button",{type:"submit",className:h.a.SearchFormButton,children:Object(d.jsx)("span",{className:h.a.SearchFormButtonLabel,children:"Search"})}),Object(d.jsx)("input",{className:h.a.SearchFormInput,type:"text",placeholder:"Search images and photos",name:"imgName",value:c,onChange:function(e){o(e.currentTarget.value.toLowerCase())}})]})})},p=a(11),f=a.n(p),_=function(e){var t=e.id,a=e.src,n=e.largeImg;return Object(d.jsx)("li",{className:f.a.ImageGalleryItem,children:Object(d.jsx)("img",{src:a,alt:"",className:f.a.ImageGalleryItemImage,"data-img":n,height:"240",width:"320"})},t)},O=a(15),y=a.n(O),I=function(e){var t=e.images,a=e.onImgClick;return Object(d.jsx)("ul",{className:y.a.ImageGallery,onClick:a,children:t.map((function(e){var t=e.id,a=e.webformatURL,n=e.largeImageURL;return Object(d.jsx)(_,{src:a,largeImg:n},t)}))})},x=a(16),S=a.n(x),v=a(2),w=a.n(v);function G(e,t){return fetch("https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=").concat("22022516-c571923560df7aebf84694af6","&image_type=photo&orientation=horizontal&per_page=12")).then((function(t){return t.ok?t.json():Promise.reject(new Error("\u041d\u0435\u0442 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0438 \u0441 \u0438\u043c\u0435\u043d\u0435\u043c ".concat(e)))}))}G.propTypes={name:w.a.string.isRequired,page:w.a.string.isRequired};var k={fetchImg:G},F=a(17),B=a.n(F),N=function(e){var t=e.onBtnClick,a=e.text;return Object(d.jsx)("button",{className:B.a.btn,type:"button",onClick:t,children:a})},C=a(12),M=a.n(C);function E(e){var t=e.onCloseModal,a=e.children;Object(n.useEffect)((function(){return window.addEventListener("keydown",r),function(){window.removeEventListener("keydown",r)}}));var r=function(e){"Escape"===e.code&&t()};return Object(d.jsx)("div",{className:M.a.Overlay,onClick:t,children:Object(d.jsx)("div",{className:M.a.Modal,children:a})})}var L=a(18),T=a(19),q=a(23),A=a(22),D=(a(33),a(20)),H=a.n(D),R=a(21),z=a.n(R),U=function(e){Object(q.a)(a,e);var t=Object(A.a)(a);function a(){return Object(L.a)(this,a),t.apply(this,arguments)}return Object(T.a)(a,[{key:"render",value:function(){return Object(d.jsx)("div",{className:z.a.loader,children:Object(d.jsx)(H.a,{type:"TailSpin",color:"#00BFFF",height:80,width:80,timeout:3e3})})}}]),a}(r.a.Component);var W=function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(1),o=Object(m.a)(c,2),i=o[0],j=o[1],h=Object(n.useState)([]),p=Object(m.a)(h,2),f=p[0],_=p[1],O=Object(n.useState)(!1),y=Object(m.a)(O,2),x=y[0],v=y[1],w=Object(n.useState)(""),G=Object(m.a)(w,2),F=G[0],B=G[1],C=Object(n.useState)(!1),M=Object(m.a)(C,2),L=M[0],T=M[1];Object(n.useEffect)((function(){a&&function(){var e=Object(u.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return q(),e.abrupt("return",k.fetchImg(a,i).then((function(e){return _((function(t){return[].concat(Object(l.a)(t),Object(l.a)(e.hits))}))})).finally((function(){return q()})));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[a,i]);var q=function(){v((function(e){return!e}))},A=function(){T((function(e){return!e}))};return Object(d.jsxs)("div",{className:S.a.App,children:[Object(d.jsx)(g,{onSubmit:function(e){r(e),j(1),_([])}}),Object(d.jsx)(I,{images:f,onImgClick:function(e){"IMG"===e.target.nodeName&&(B(e.target.dataset.img),A())}}),x&&Object(d.jsx)(U,{}),f.length>0&&!x&&Object(d.jsx)(N,{onBtnClick:function(){j((function(e){return e+1})),a&&(q(),setTimeout((function(){window.scrollBy({top:document.documentElement.clientHeight-160,behavior:"smooth"})}),800),q())},text:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0435\u0449\u0435"}),Object(d.jsx)(b.a,{autoClose:3e3}),L&&Object(d.jsx)(E,{onCloseModal:A,children:Object(d.jsx)("img",{src:F,alt:"Dont Worry Be Happy"})})]})};o.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(W,{})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.289a2261.chunk.js.map