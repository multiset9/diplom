!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=74)}([,function(e,t){!function(){e.exports=this.wc.wcSettings}()},function(e,t){!function(){e.exports=this.wp.i18n}()},function(e,t){!function(){e.exports=this.React}()},,function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},function(e,t,r){var n;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)&&n.length){var i=o.apply(null,n);i&&e.push(i)}else if("object"===a)for(var s in n)r.call(n,s)&&n[s]&&e.push(s)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},,function(e,t,r){e.exports=r(29)()},,function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},,function(e,t){function r(){return e.exports=r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},r.apply(this,arguments)}e.exports=r},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}},function(e,t,r){var n=r(20),o=r(10);e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?o(e):t}},function(e,t){function r(t){return e.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},r(t)}e.exports=r},function(e,t,r){var n=r(28);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}},,,function(e,t){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(t){return"function"==typeof Symbol&&"symbol"===r(Symbol.iterator)?e.exports=n=function(e){return r(e)}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":r(e)},n(t)}e.exports=n},function(e,t){!function(){e.exports=this.ReactDOM}()},function(e,t){!function(){e.exports=this.wp.isShallowEqual}()},function(e,t,r){"use strict";var n=r(12),o=r.n(n),a=r(5),i=r.n(a),s=r(21),c=r(13),l=r.n(c),u=r(14),p=r.n(u),d=r(15),f=r.n(d),v=r(16),b=r.n(v),w=r(10),m=r.n(w),g=r(17),h=r.n(g),y=r(3),O=(r(8),r(2)),R=r(38),_=function(e){var t=e.imageUrl,r=void 0===t?"".concat(R.e,"img/block-error.svg"):t,n=e.header,o=void 0===n?Object(O.__)("Oops!",'woocommerce'):n,a=e.text,i=void 0===a?Object(O.__)("There was an error with loading this content.",'woocommerce'):a,s=e.errorMessage;return React.createElement("div",{className:"wc-block-error"},r&&React.createElement("img",{className:"wc-block-error__image",src:r,alt:""}),React.createElement("div",{className:"wc-block-error__content"},o&&React.createElement("p",{className:"wc-block-error__header"},o),i&&React.createElement("p",{className:"wc-block-error__text"},i),s&&React.createElement("p",{className:"wc-block-error__message"},s)))},j=(r(31),function(e){function t(){var e,r;l()(this,t);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return r=f()(this,(e=b()(t)).call.apply(e,[this].concat(o))),i()(m()(r),"state",{hasError:!1}),r}return h()(t,e),p()(t,[{key:"render",value:function(){var e=this.props,t=e.header,r=e.imageUrl,n=e.showErrorMessage,o=e.text,a=this.state,i=a.errorMessage;return a.hasError?React.createElement(_,{errorMessage:n?i:null,header:t,imageUrl:r,text:o}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{errorMessage:e.message,hasError:!0}}}]),t}(y.Component));j.defaultProps={showErrorMessage:!1};var k=j;function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){i()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.a=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},n=document.querySelectorAll(e);n.length&&Array.prototype.forEach.call(n,(function(e,n){var a=r(e,n),i=x({},e.dataset,{},a.attributes);e.classList.remove("is-loading"),Object(s.render)(React.createElement(k,null,React.createElement(t,o()({},a,{attributes:i}))),e)}))}},,,function(e,t,r){"use strict";var n=r(5),o=r.n(n),a=(r(8),r(3)),i=r(6),s=r.n(i);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var l=function(e){var t,r=e.label,n=e.screenReaderLabel,i=e.wrapperElement,l=e.wrapperProps;return!r&&n?(t=i||"span",l=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},l,{className:s()(l.className,"screen-reader-text")}),React.createElement(t,l,n)):(t=i||a.Fragment,r&&n&&r!==n?React.createElement(t,l,React.createElement("span",{"aria-hidden":"true"},r),React.createElement("span",{className:"screen-reader-text"},n)):React.createElement(t,l,r))};l.defaultProps={wrapperProps:{}},t.a=l},,function(e,t){function r(t,n){return e.exports=r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},r(t,n)}e.exports=r},function(e,t,r){"use strict";var n=r(30);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,a,i){if(i!==n){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return r.PropTypes=r,r}},function(e,t,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t){},,,,,function(e,t,r){"use strict";var n=r(12),o=r.n(n),a=r(13),i=r.n(a),s=r(14),c=r.n(s),l=r(15),u=r.n(l),p=r(16),d=r.n(p),f=r(10),v=r.n(f),b=r(17),w=r.n(b),m=r(5),g=r.n(m),h=r(3);t.a=function(e){var t=0,r=function(r){function n(){var e,r;i()(this,n);for(var o=arguments.length,a=new Array(o),s=0;s<o;s++)a[s]=arguments[s];return r=u()(this,(e=d()(n)).call.apply(e,[this].concat(a))),g()(v()(r),"instanceId",t++),r}return w()(n,r),c()(n,[{key:"render",value:function(){return React.createElement(e,o()({},this.props,{componentId:this.instanceId}))}}]),n}(h.Component);return r.displayName="withComponentId",r}},,function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"d",(function(){return a})),r.d(t,"c",(function(){return i})),r.d(t,"a",(function(){return s})),r.d(t,"e",(function(){return c}));var n=r(1),o=Object(n.getSetting)("enableReviewRating",!0),a=Object(n.getSetting)("showAvatars",!0),i=(Object(n.getSetting)("max_columns",6),Object(n.getSetting)("min_columns",1),Object(n.getSetting)("default_columns",3),Object(n.getSetting)("max_rows",6),Object(n.getSetting)("min_rows",1),Object(n.getSetting)("default_rows",2),Object(n.getSetting)("min_height",500),Object(n.getSetting)("default_height",500),Object(n.getSetting)("placeholderImgSrc","")),s=(Object(n.getSetting)("thumbnail_size",300),Object(n.getSetting)("isLargeCatalog"),Object(n.getSetting)("limitTags"),Object(n.getSetting)("hasProducts",!0),Object(n.getSetting)("hasTags",!0),Object(n.getSetting)("homeUrl",""),Object(n.getSetting)("productCount",0),Object(n.getSetting)("attributes",[])),c=Object(n.getSetting)("wcBlocksAssetUrl","")},function(e,t){!function(){e.exports=this.regeneratorRuntime}()},,function(e,t,r){"use strict";r(8);var n=r(6),o=r.n(n),a=r(26),i=r(36);r(47);t.a=Object(i.a)((function(e){var t=e.className,r=e.componentId,n=e.defaultValue,i=e.label,s=e.onChange,c=e.options,l=e.screenReaderLabel,u=e.readOnly,p=e.value,d="wc-block-sort-select__select-".concat(r);return React.createElement("div",{className:o()("wc-block-sort-select",t)},React.createElement(a.a,{label:i,screenReaderLabel:l,wrapperElement:"label",wrapperProps:{className:"wc-block-sort-select__label",htmlFor:d}}),React.createElement("select",{id:d,className:"wc-block-sort-select__select",defaultValue:n,onChange:s,readOnly:u,value:p},c.map((function(e){return React.createElement("option",{key:e.key,value:e.key},e.label)}))))}))},,,,function(e,t){!function(){e.exports=this.wp.a11y}()},,function(e,t){},,,,,,,function(e,t){!function(){e.exports=this.wp.apiFetch}()},function(e,t,r){function n(e){for(var t,r,n=[],o=0;o<rowCut.length;o++)(t=rowCut.substring(o).match(/^&[a-z0-9#]+;/))?(r=t[0],n.push(r),o+=r.length-1):n.push(rowCut[o]);return n}e.exports&&(e.exports=function(e,t){for(var r,o,a,i,s,c=(t=t||{}).limit||100,l=void 0===t.preserveTags||t.preserveTags,u=void 0!==t.wordBreak&&t.wordBreak,p=t.suffix||"...",d=t.moreLink||"",f=t.moreText||"»",v=t.preserveWhiteSpace||!1,b=e.replace(/</g,"\n<").replace(/>/g,">\n").replace(/\n\n/g,"\n").replace(/^\n/g,"").replace(/\n$/g,"").split("\n"),w=0,m=[],g=!1,h=0;h<b.length;h++)if(r=b[h],rowCut=v?r:r.replace(/[ ]+/g," "),r.length){var y=n(rowCut);if("<"!==r[0])if(w>=c)r="";else if(w+y.length>=c){if(" "===y[(o=c-w)-1])for(;o&&" "===y[(o-=1)-1];);else a=y.slice(o).indexOf(" "),u||(-1!==a?o+=a:o=r.length);r=y.slice(0,o).join("")+p,d&&(r+='<a href="'+d+'" style="display:inline">'+f+"</a>"),w=c,g=!0}else w+=y.length;else if(l){if(w>=c)if(s=(i=r.match(/[a-zA-Z]+/))?i[0]:"")if("</"!==r.substring(0,2))m.push(s),r="";else{for(;m[m.length-1]!==s&&m.length;)m.pop();m.length&&(r=""),m.pop()}else r=""}else r="";b[h]=r}return{html:b.join("\n").replace(/\n/g,""),more:g}})},,,,function(e,t){},function(e,t){},function(e,t){},function(e,t){},,,,,,,,,,,,function(e,t,r){"use strict";r.r(t);var n=r(13),o=r.n(n),a=r(14),i=r.n(a),s=r(15),c=r.n(s),l=r(16),u=r.n(l),p=r(10),d=r.n(p),f=r(17),v=r.n(f),b=r(2),w=r(45),m=r(3),g=r.n(m),h=(r(8),r(54)),y=r.n(h),O=r(6),R=r.n(O),_=r(38),j=function(e){return y()({path:"/wc/blocks/products/reviews?"+Object.entries(e).map((function(e){return e.join("=")})).join("&"),parse:!1}).then((function(e){return e.json().then((function(t){return{reviews:t,totalReviews:parseInt(e.headers.get("x-wp-total"),10)}}))}))},k=r(26),E=(r(62),function(e){var t=e.onClick,r=e.label,n=e.screenReaderLabel;return React.createElement("div",{className:"wp-block-button wc-block-load-more"},React.createElement("button",{className:"wp-block-button__link",onClick:t},React.createElement(k.a,{label:r,screenReaderLabel:n})))});E.defaultProps={label:Object(b.__)("Load more",'woocommerce')};var x=E,S=r(41),P=(r(59),function(e){var t=e.defaultValue,r=e.onChange,n=e.readOnly,o=e.value;return React.createElement(S.a,{className:"wc-block-review-sort-select",defaultValue:t,label:Object(b.__)("Order by",'woocommerce'),onChange:r,options:[{key:"most-recent",label:Object(b.__)("Most recent",'woocommerce')},{key:"highest-rating",label:Object(b.__)("Highest rating",'woocommerce')},{key:"lowest-rating",label:Object(b.__)("Lowest rating",'woocommerce')}],readOnly:n,screenReaderLabel:Object(b.__)("Order reviews by",'woocommerce'),value:o})}),T=r(5),N=r.n(T),C=r(55),L=r.n(C),D=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"...",n=L()(e,{suffix:r,limit:t});return n.html},A=function(e,t,r,n){var o=I(e,t,r);return D(e,o-n.length,n)},I=function(e,t,r){for(var n={start:0,middle:0,end:e.length};n.start<=n.end;)n.middle=Math.floor((n.start+n.end)/2),t.innerHTML=D(e,n.middle),n=M(n,t.clientHeight,r);return n.middle},M=function(e,t,r){return t<=r?e.start=e.middle+1:e.end=e.middle-1,e},H=function(e){function t(e){var r;return o()(this,t),(r=c()(this,u()(t).apply(this,arguments))).state={isExpanded:!1,clampEnabled:null,content:e.children,summary:"."},r.reviewSummary=Object(m.createRef)(),r.reviewContent=Object(m.createRef)(),r.getButton=r.getButton.bind(d()(r)),r.onClick=r.onClick.bind(d()(r)),r}return v()(t,e),i()(t,[{key:"componentDidMount",value:function(){if(this.props.children){var e=this.props,t=e.maxLines,r=e.ellipsis,n=(this.reviewSummary.current.clientHeight+1)*t+1,o=this.reviewContent.current.clientHeight+1>n;this.setState({clampEnabled:o}),o&&this.setState({summary:A(this.reviewContent.current.innerHTML,this.reviewSummary.current,n,r)})}}},{key:"getButton",value:function(){var e=this.state.isExpanded,t=this.props,r=t.className,n=t.lessText,o=t.moreText,a=e?n:o;if(a)return g.a.createElement("a",{href:"#more",className:r+"__read_more",onClick:this.onClick,"aria-expanded":!e,role:"button"},a)}},{key:"onClick",value:function(e){e.preventDefault();var t=this.state.isExpanded;this.setState({isExpanded:!t})}},{key:"render",value:function(){var e=this.props.className,t=this.state,r=t.content,n=t.summary,o=t.clampEnabled,a=t.isExpanded;return r?!1===o?g.a.createElement("div",{className:e},g.a.createElement("div",{ref:this.reviewContent},r)):g.a.createElement("div",{className:e},(!a||null===o)&&g.a.createElement("div",{ref:this.reviewSummary,"aria-hidden":a,dangerouslySetInnerHTML:{__html:n}}),(a||null===o)&&g.a.createElement("div",{ref:this.reviewContent,"aria-hidden":!a},r),this.getButton()):null}}]),t}(m.Component);H.defaultProps={maxLines:3,ellipsis:"&hellip;",moreText:Object(b.__)("Read more",'woocommerce'),lessText:Object(b.__)("Read less",'woocommerce'),className:"read-more-content"};var F=H;r(61);var U=function(e){var t=e.attributes,r=e.review,n=void 0===r?{}:r,o=t.imageType,a=t.showReviewDate,i=t.showReviewerName,s=t.showReviewImage,c=t.showReviewRating,l=t.showReviewContent,u=t.showProductName,p=n.rating,d=!Object.keys(n).length>0,f=Number.isFinite(p)&&c;return React.createElement("li",{className:R()("wc-block-review-list-item__item",{"is-loading":d}),"aria-hidden":d},(u||a||i||s||f)&&React.createElement("div",{className:"wc-block-review-list-item__info"},s&&function(e,t,r){return r||!e?React.createElement("div",{className:"wc-block-review-list-item__image",width:"48",height:"48"}):React.createElement("div",{className:"wc-block-review-list-item__image"},"product"===t?React.createElement("img",{"aria-hidden":"true",alt:"",src:e.product_picture||"",className:"wc-block-review-list-item__image",width:"48",height:"48"}):React.createElement("img",{"aria-hidden":"true",alt:"",src:e.reviewer_avatar_urls[48]||"",srcSet:e.reviewer_avatar_urls[96]+" 2x",className:"wc-block-review-list-item__image",width:"48",height:"48"}),e.verified&&React.createElement("div",{className:"wc-block-review-list-item__verified",title:Object(b.__)("Verified buyer",'woocommerce')},Object(b.__)("Verified buyer",'woocommerce')))}(n,o,d),(u||i||f||a)&&React.createElement("div",{className:"wc-block-review-list-item__meta"},f&&function(e){var t=e.rating,r={width:t/5*100+"%"};return React.createElement("div",{className:"wc-block-review-list-item__rating"},React.createElement("div",{className:"wc-block-review-list-item__rating__stars",role:"img"},React.createElement("span",{style:r},Object(b.sprintf)(Object(b.__)("Rated %d out of 5",'woocommerce'),t))))}(n),u&&function(e){return React.createElement("div",{className:"wc-block-review-list-item__product"},React.createElement("a",{href:e.product_permalink,dangerouslySetInnerHTML:{__html:e.product_name}}))}(n),i&&function(e){var t=e.reviewer,r=void 0===t?"":t;return React.createElement("div",{className:"wc-block-review-list-item__author"},r)}(n),a&&function(e){var t=e.date_created,r=e.formatted_date_created;return React.createElement("time",{className:"wc-block-review-list-item__published-date",dateTime:t},r)}(n))),l&&function(e){return React.createElement(F,{maxLines:10,moreText:Object(b.__)("Read full review",'woocommerce'),lessText:Object(b.__)("Hide full review",'woocommerce'),className:"wc-block-review-list-item__text"},React.createElement("div",{dangerouslySetInnerHTML:{__html:e.review||""}}))}(n))};r(60);function B(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var V=function(e){var t=e.attributes,r=e.reviews,n=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?B(Object(r),!0).forEach((function(t){N()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):B(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},t,{showReviewImage:(_.d||"product"===t.imageType)&&t.showReviewImage,showReviewRating:_.b&&t.showReviewRating});return React.createElement("ul",{className:"wc-block-review-list"},0===r.length?React.createElement(U,{attributes:n}):r.map((function(e,t){return React.createElement(U,{key:e.id||t,attributes:n,review:e})})))},W=r(12),q=r.n(W),z=r(39),Y=r.n(z),Z=r(22),$=r.n(Z),G=function(e){var t;return Y.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:if("function"!=typeof e.json){r.next=11;break}return r.prev=1,r.next=4,Y.a.awrap(e.json());case 4:return t=r.sent,r.abrupt("return",{message:t.message,type:t.type||"api"});case 8:return r.prev=8,r.t0=r.catch(1),r.abrupt("return",{message:r.t0.message,type:"general"});case 11:return r.abrupt("return",{message:e.message,type:e.type||"general"});case 12:case"end":return r.stop()}}),null,null,[[1,8]])},J=function(e){var t=function(t){function r(){var e,t;o()(this,r);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return t=c()(this,(e=u()(r)).call.apply(e,[this].concat(a))),N()(d()(t),"isPreview",!!t.props.attributes.previewReviews),N()(d()(t),"delayedAppendReviews",t.props.delayFunction(t.appendReviews)),N()(d()(t),"state",{error:null,loading:!0,reviews:t.isPreview?t.props.attributes.previewReviews:[],totalReviews:t.isPreview?t.props.attributes.previewReviews.length:0}),N()(d()(t),"setError",(function(e){var r,n;return Y.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return r=t.props.onReviewsLoadError,o.next=3,Y.a.awrap(G(e));case 3:n=o.sent,t.setState({reviews:[],loading:!1,error:n}),r(n);case 6:case"end":return o.stop()}}))})),t}return v()(r,t),i()(r,[{key:"componentDidMount",value:function(){this.replaceReviews()}},{key:"componentDidUpdate",value:function(e){e.reviewsToDisplay<this.props.reviewsToDisplay?this.delayedAppendReviews():this.shouldReplaceReviews(e,this.props)&&this.replaceReviews()}},{key:"shouldReplaceReviews",value:function(e,t){return e.orderby!==t.orderby||e.order!==t.order||e.productId!==t.productId||!$()(e.categoryIds,t.categoryIds)}},{key:"componentWillUnMount",value:function(){this.delayedAppendReviews.cancel&&this.delayedAppendReviews.cancel()}},{key:"getArgs",value:function(e){var t=this.props,r=t.categoryIds,n=t.order,o=t.orderby,a=t.productId,i={order:n,orderby:o,per_page:t.reviewsToDisplay-e,offset:e};return r&&r.length&&(i.category_id=Array.isArray(r)?r.join(","):r),a&&(i.product_id=a),i}},{key:"replaceReviews",value:function(){if(!this.isPreview){var e=this.props.onReviewsReplaced;this.updateListOfReviews().then(e)}}},{key:"appendReviews",value:function(){if(!this.isPreview){var e=this.props,t=e.onReviewsAppended,r=e.reviewsToDisplay,n=this.state.reviews;r<=n.length||this.updateListOfReviews(n).then(t)}}},{key:"updateListOfReviews",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=this.props.reviewsToDisplay,n=this.state.totalReviews,o=Math.min(n,r)-t.length;return this.setState({loading:!0,reviews:t.concat(Array(o).fill({}))}),j(this.getArgs(t.length)).then((function(r){var n=r.reviews,o=r.totalReviews;return e.setState({reviews:t.filter((function(e){return Object.keys(e).length})).concat(n),totalReviews:o,loading:!1,error:null}),{newReviews:n}})).catch(this.setError)}},{key:"render",value:function(){var t=this.props.reviewsToDisplay,r=this.state,n=r.error,o=r.loading,a=r.reviews,i=r.totalReviews;return React.createElement(e,q()({},this.props,{error:n,isLoading:o,reviews:a.slice(0,t),totalReviews:i}))}}]),r}(m.Component);N()(t,"defaultProps",{delayFunction:function(e){return e},onReviewsAppended:function(){},onReviewsLoadError:function(){},onReviewsReplaced:function(){}});var r=e.displayName,n=void 0===r?e.name||"Component":r;return t.displayName="WithReviews( ".concat(n," )"),t}((function(e){var t=e.attributes,r=e.onAppendReviews,n=e.onChangeOrderby,o=e.reviews,a=e.totalReviews,i=t.orderby;return 0===o.length?null:React.createElement(m.Fragment,null,"false"!==t.showOrderby&&_.b&&React.createElement(P,{defaultValue:i,onChange:n}),React.createElement(V,{attributes:t,reviews:o}),"false"!==t.showLoadMore&&a>o.length&&React.createElement(x,{onClick:r,screenReaderLabel:Object(b.__)("Load more reviews",'woocommerce')}))})),K=function(e){function t(){var e;o()(this,t);var r=(e=c()(this,u()(t).apply(this,arguments))).props.attributes;return e.state={orderby:r.orderby,reviewsToDisplay:parseInt(r.reviewsOnPageLoad,10)},e.onAppendReviews=e.onAppendReviews.bind(d()(e)),e.onChangeOrderby=e.onChangeOrderby.bind(d()(e)),e}return v()(t,e),i()(t,[{key:"onAppendReviews",value:function(){var e=this.props.attributes,t=this.state.reviewsToDisplay;this.setState({reviewsToDisplay:t+parseInt(e.reviewsOnLoadMore,10)})}},{key:"onChangeOrderby",value:function(e){var t=this.props.attributes;this.setState({orderby:e.target.value,reviewsToDisplay:parseInt(t.reviewsOnPageLoad,10)})}},{key:"onReviewsAppended",value:function(e){var t=e.newReviews;Object(w.speak)(Object(b.sprintf)(Object(b._n)("%d review loaded.","%d reviews loaded.",t.length,'woocommerce'),t.length))}},{key:"onReviewsReplaced",value:function(){Object(w.speak)(Object(b.__)("Reviews list updated.",'woocommerce'))}},{key:"onReviewsLoadError",value:function(){Object(w.speak)(Object(b.__)("There was an error loading the reviews.",'woocommerce'))}},{key:"render",value:function(){var e=this.props.attributes,t=e.categoryIds,r=e.productId,n=this.state.reviewsToDisplay,o=function(e){if(_.b){if("lowest-rating"===e)return{order:"asc",orderby:"rating"};if("highest-rating"===e)return{order:"desc",orderby:"rating"}}return{order:"desc",orderby:"date_gmt"}}(this.state.orderby),a=o.order,i=o.orderby;return React.createElement(J,{attributes:e,categoryIds:t,onAppendReviews:this.onAppendReviews,onChangeOrderby:this.onChangeOrderby,onReviewsAppended:this.onReviewsAppended,onReviewsLoadError:this.onReviewsLoadError,onReviewsReplaced:this.onReviewsReplaced,order:a,orderby:i,productId:r,reviewsToDisplay:n})}}]),t}(m.Component),Q=r(23);Object(Q.a)("\n\t.wp-block-woocommerce-all-reviews,\n\t.wp-block-woocommerce-reviews-by-product,\n\t.wp-block-woocommerce-reviews-by-category\n",K,(function(e){return{attributes:{showReviewDate:e.classList.contains("has-date"),showReviewerName:e.classList.contains("has-name"),showReviewImage:e.classList.contains("has-image"),showReviewRating:e.classList.contains("has-rating"),showReviewContent:e.classList.contains("has-content"),showProductName:e.classList.contains("has-product-name")}}}))}]);