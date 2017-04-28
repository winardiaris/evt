!function(e,t,n){"use strict";!function o(e,t,n){function a(s,l){if(!t[s]){if(!e[s]){var i="function"==typeof require&&require;if(!l&&i)return i(s,!0);if(r)return r(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var c=t[s]={exports:{}};e[s][0].call(c.exports,function(t){var n=e[s][1][t];return a(n?n:t)},c,c.exports,o,e,t,n)}return t[s].exports}for(var r="function"==typeof require&&require,s=0;s<n.length;s++)a(n[s]);return a}({1:[function(o,a,r){var s=function(e){return e&&e.__esModule?e:{"default":e}};Object.defineProperty(r,"__esModule",{value:!0});var l,i,u,c,d=o("./modules/handle-dom"),f=o("./modules/utils"),p=o("./modules/handle-swal-dom"),m=o("./modules/handle-click"),v=o("./modules/handle-key"),y=s(v),h=o("./modules/default-params"),b=s(h),g=o("./modules/set-params"),w=s(g);r["default"]=u=c=function(){function o(e){var t=a;return t[e]===n?b["default"][e]:t[e]}var a=arguments[0];if(d.addClass(t.body,"stop-scrolling"),p.resetInput(),a===n)return f.logStr("SweetAlert expects at least 1 attribute!"),!1;var r=f.extend({},b["default"]);switch(typeof a){case"string":r.title=a,r.text=arguments[1]||"",r.type=arguments[2]||"";break;case"object":if(a.title===n)return f.logStr('Missing "title" argument!'),!1;r.title=a.title;for(var s in b["default"])r[s]=o(s);r.confirmButtonText=r.showCancelButton?"Confirm":b["default"].confirmButtonText,r.confirmButtonText=o("confirmButtonText"),r.doneFunction=arguments[1]||null;break;default:return f.logStr('Unexpected type of argument! Expected "string" or "object", got '+typeof a),!1}w["default"](r),p.fixVerticalPosition(),p.openModal(arguments[1]);for(var u=p.getModal(),v=u.querySelectorAll("button"),h=["onclick","onmouseover","onmouseout","onmousedown","onmouseup","onfocus"],g=function(e){return m.handleButton(e,r,u)},C=0;C<v.length;C++)for(var S=0;S<h.length;S++){var x=h[S];v[C][x]=g}p.getOverlay().onclick=g,l=e.onkeydown;var k=function(e){return y["default"](e,r,u)};e.onkeydown=k,e.onfocus=function(){setTimeout(function(){i!==n&&(i.focus(),i=n)},0)},c.enableButtons()},u.setDefaults=c.setDefaults=function(e){if(!e)throw new Error("userParams is required");if("object"!=typeof e)throw new Error("userParams has to be a object");f.extend(b["default"],e)},u.close=c.close=function(){var o=p.getModal();d.fadeOut(p.getOverlay(),5),d.fadeOut(o,5),d.removeClass(o,"showSweetAlert"),d.addClass(o,"hideSweetAlert"),d.removeClass(o,"visible");var a=o.querySelector(".sa-icon.sa-success");d.removeClass(a,"animate"),d.removeClass(a.querySelector(".sa-tip"),"animateSuccessTip"),d.removeClass(a.querySelector(".sa-long"),"animateSuccessLong");var r=o.querySelector(".sa-icon.sa-error");d.removeClass(r,"animateErrorIcon"),d.removeClass(r.querySelector(".sa-x-mark"),"animateXMark");var s=o.querySelector(".sa-icon.sa-warning");return d.removeClass(s,"pulseWarning"),d.removeClass(s.querySelector(".sa-body"),"pulseWarningIns"),d.removeClass(s.querySelector(".sa-dot"),"pulseWarningIns"),setTimeout(function(){var e=o.getAttribute("data-custom-class");d.removeClass(o,e)},300),d.removeClass(t.body,"stop-scrolling"),e.onkeydown=l,e.previousActiveElement&&e.previousActiveElement.focus(),i=n,clearTimeout(o.timeout),!0},u.showInputError=c.showInputError=function(e){var t=p.getModal(),n=t.querySelector(".sa-input-error");d.addClass(n,"show");var o=t.querySelector(".sa-error-container");d.addClass(o,"show"),o.querySelector("p").innerHTML=e,setTimeout(function(){u.enableButtons()},1),t.querySelector("input").focus()},u.resetInputError=c.resetInputError=function(e){if(e&&13===e.keyCode)return!1;var t=p.getModal(),n=t.querySelector(".sa-input-error");d.removeClass(n,"show");var o=t.querySelector(".sa-error-container");d.removeClass(o,"show")},u.disableButtons=c.disableButtons=function(){var e=p.getModal(),t=e.querySelector("button.confirm"),n=e.querySelector("button.cancel");t.disabled=!0,n.disabled=!0},u.enableButtons=c.enableButtons=function(){var e=p.getModal(),t=e.querySelector("button.confirm"),n=e.querySelector("button.cancel");t.disabled=!1,n.disabled=!1},"undefined"!=typeof e?e.sweetAlert=e.swal=u:f.logStr("SweetAlert is a frontend module!"),a.exports=r["default"]},{"./modules/default-params":2,"./modules/handle-click":3,"./modules/handle-dom":4,"./modules/handle-key":5,"./modules/handle-swal-dom":6,"./modules/set-params":8,"./modules/utils":9}],2:[function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0});var o={title:"",text:"",type:null,allowOutsideClick:!1,showConfirmButton:!0,showCancelButton:!1,closeOnConfirm:!0,closeOnCancel:!0,confirmButtonText:"OK",confirmButtonColor:"#8CD4F5",cancelButtonText:"Cancel",imageUrl:null,imageSize:null,timer:null,customClass:"",html:!1,animation:!0,allowEscapeKey:!0,inputType:"text",inputPlaceholder:"",inputValue:"",showLoaderOnConfirm:!1};n["default"]=o,t.exports=n["default"]},{}],3:[function(t,n,o){Object.defineProperty(o,"__esModule",{value:!0});var a=t("./utils"),r=(t("./handle-swal-dom"),t("./handle-dom")),s=function(t,n,o){function s(e){m&&n.confirmButtonColor&&(p.style.backgroundColor=e)}var u,c,d,f=t||e.event,p=f.target||f.srcElement,m=-1!==p.className.indexOf("confirm"),v=-1!==p.className.indexOf("sweet-overlay"),y=r.hasClass(o,"visible"),h=n.doneFunction&&"true"===o.getAttribute("data-has-done-function");switch(m&&n.confirmButtonColor&&(u=n.confirmButtonColor,c=a.colorLuminance(u,-.04),d=a.colorLuminance(u,-.14)),f.type){case"mouseover":s(c);break;case"mouseout":s(u);break;case"mousedown":s(d);break;case"mouseup":s(c);break;case"focus":var b=o.querySelector("button.confirm"),g=o.querySelector("button.cancel");m?g.style.boxShadow="none":b.style.boxShadow="none";break;case"click":var w=o===p,C=r.isDescendant(o,p);if(!w&&!C&&y&&!n.allowOutsideClick)break;m&&h&&y?l(o,n):h&&y||v?i(o,n):r.isDescendant(o,p)&&"BUTTON"===p.tagName&&sweetAlert.close()}},l=function(e,t){var n=!0;r.hasClass(e,"show-input")&&(n=e.querySelector("input").value,n||(n="")),t.doneFunction(n),t.closeOnConfirm&&sweetAlert.close(),t.showLoaderOnConfirm&&sweetAlert.disableButtons()},i=function(e,t){var n=String(t.doneFunction).replace(/\s/g,""),o="function("===n.substring(0,9)&&")"!==n.substring(9,10);o&&t.doneFunction(!1),t.closeOnCancel&&sweetAlert.close()};o["default"]={handleButton:s,handleConfirm:l,handleCancel:i},n.exports=o["default"]},{"./handle-dom":4,"./handle-swal-dom":6,"./utils":9}],4:[function(n,o,a){Object.defineProperty(a,"__esModule",{value:!0});var r=function(e,t){return new RegExp(" "+t+" ").test(" "+e.className+" ")},s=function(e,t){r(e,t)||(e.className+=" "+t)},l=function(e,t){var n=" "+e.className.replace(/[\t\r\n]/g," ")+" ";if(r(e,t)){for(;n.indexOf(" "+t+" ")>=0;)n=n.replace(" "+t+" "," ");e.className=n.replace(/^\s+|\s+$/g,"")}},i=function(e){var n=t.createElement("div");return n.appendChild(t.createTextNode(e)),n.innerHTML},u=function(e){e.style.opacity="",e.style.display="block"},c=function(e){if(e&&!e.length)return u(e);for(var t=0;t<e.length;++t)u(e[t])},d=function(e){e.style.opacity="",e.style.display="none"},f=function(e){if(e&&!e.length)return d(e);for(var t=0;t<e.length;++t)d(e[t])},p=function(e,t){for(var n=t.parentNode;null!==n;){if(n===e)return!0;n=n.parentNode}return!1},m=function(e){e.style.left="-9999px",e.style.display="block";var t,n=e.clientHeight;return t="undefined"!=typeof getComputedStyle?parseInt(getComputedStyle(e).getPropertyValue("padding-top"),10):parseInt(e.currentStyle.padding),e.style.left="",e.style.display="none","-"+parseInt((n+t)/2)+"px"},v=function(e,t){if(+e.style.opacity<1){t=t||16,e.style.opacity=0,e.style.display="block";var n=+new Date,o=function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){e.style.opacity=+e.style.opacity+(new Date-n)/100,n=+new Date,+e.style.opacity<1&&setTimeout(o,t)});o()}e.style.display="block"},y=function(e,t){t=t||16,e.style.opacity=1;var n=+new Date,o=function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){e.style.opacity=+e.style.opacity-(new Date-n)/100,n=+new Date,+e.style.opacity>0?setTimeout(o,t):e.style.display="none"});o()},h=function(n){if("function"==typeof MouseEvent){var o=new MouseEvent("click",{view:e,bubbles:!1,cancelable:!0});n.dispatchEvent(o)}else if(t.createEvent){var a=t.createEvent("MouseEvents");a.initEvent("click",!1,!1),n.dispatchEvent(a)}else t.createEventObject?n.fireEvent("onclick"):"function"==typeof n.onclick&&n.onclick()},b=function(t){"function"==typeof t.stopPropagation?(t.stopPropagation(),t.preventDefault()):e.event&&e.event.hasOwnProperty("cancelBubble")&&(e.event.cancelBubble=!0)};a.hasClass=r,a.addClass=s,a.removeClass=l,a.escapeHtml=i,a._show=u,a.show=c,a._hide=d,a.hide=f,a.isDescendant=p,a.getTopMargin=m,a.fadeIn=v,a.fadeOut=y,a.fireClick=h,a.stopEventPropagation=b},{}],5:[function(t,o,a){Object.defineProperty(a,"__esModule",{value:!0});var r=t("./handle-dom"),s=t("./handle-swal-dom"),l=function(t,o,a){var l=t||e.event,i=l.keyCode||l.which,u=a.querySelector("button.confirm"),c=a.querySelector("button.cancel"),d=a.querySelectorAll("button[tabindex]");if(-1!==[9,13,32,27].indexOf(i)){for(var f=l.target||l.srcElement,p=-1,m=0;m<d.length;m++)if(f===d[m]){p=m;break}9===i?(f=-1===p?u:p===d.length-1?d[0]:d[p+1],r.stopEventPropagation(l),f.focus(),o.confirmButtonColor&&s.setFocusStyle(f,o.confirmButtonColor)):13===i?("INPUT"===f.tagName&&(f=u,u.focus()),f=-1===p?u:n):27===i&&o.allowEscapeKey===!0?(f=c,r.fireClick(f,l)):f=n}};a["default"]=l,o.exports=a["default"]},{"./handle-dom":4,"./handle-swal-dom":6}],6:[function(n,o,a){var r=function(e){return e&&e.__esModule?e:{"default":e}};Object.defineProperty(a,"__esModule",{value:!0});var s=n("./utils"),l=n("./handle-dom"),i=n("./default-params"),u=r(i),c=n("./injected-html"),d=r(c),f=".sweet-alert",p=".sweet-overlay",m=function(){var e=t.createElement("div");for(e.innerHTML=d["default"];e.firstChild;)t.body.appendChild(e.firstChild)},v=function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){var e=t.querySelector(f);return e||(m(),e=v()),e}),y=function(){var e=v();return e?e.querySelector("input"):void 0},h=function(){return t.querySelector(p)},b=function(e,t){var n=s.hexToRgb(t);e.style.boxShadow="0 0 2px rgba("+n+", 0.8), inset 0 0 0 1px rgba(0, 0, 0, 0.05)"},g=function(n){var o=v();l.fadeIn(h(),10),l.show(o),l.addClass(o,"showSweetAlert"),l.removeClass(o,"hideSweetAlert"),e.previousActiveElement=t.activeElement;var a=o.querySelector("button.confirm");a.focus(),setTimeout(function(){l.addClass(o,"visible")},500);var r=o.getAttribute("data-timer");if("null"!==r&&""!==r){var s=n;o.timeout=setTimeout(function(){var e=(s||null)&&"true"===o.getAttribute("data-has-done-function");e?s(null):sweetAlert.close()},r)}},w=function(){var e=v(),t=y();l.removeClass(e,"show-input"),t.value=u["default"].inputValue,t.setAttribute("type",u["default"].inputType),t.setAttribute("placeholder",u["default"].inputPlaceholder),C()},C=function(e){if(e&&13===e.keyCode)return!1;var t=v(),n=t.querySelector(".sa-input-error");l.removeClass(n,"show");var o=t.querySelector(".sa-error-container");l.removeClass(o,"show")},S=function(){var e=v();e.style.marginTop=l.getTopMargin(v())};a.sweetAlertInitialize=m,a.getModal=v,a.getOverlay=h,a.getInput=y,a.setFocusStyle=b,a.openModal=g,a.resetInput=w,a.resetInputError=C,a.fixVerticalPosition=S},{"./default-params":2,"./handle-dom":4,"./injected-html":7,"./utils":9}],7:[function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0});var o='<div class="sweet-overlay" tabIndex="-1"></div><div class="sweet-alert"><div class="sa-icon sa-error">\n      <span class="sa-x-mark">\n        <span class="sa-line sa-left"></span>\n        <span class="sa-line sa-right"></span>\n      </span>\n    </div><div class="sa-icon sa-warning">\n      <span class="sa-body"></span>\n      <span class="sa-dot"></span>\n    </div><div class="sa-icon sa-info"></div><div class="sa-icon sa-success">\n      <span class="sa-line sa-tip"></span>\n      <span class="sa-line sa-long"></span>\n\n      <div class="sa-placeholder"></div>\n      <div class="sa-fix"></div>\n    </div><div class="sa-icon sa-custom"></div><h2>Title</h2>\n    <p>Text</p>\n    <fieldset>\n      <input type="text" tabIndex="3" />\n      <div class="sa-input-error"></div>\n    </fieldset><div class="sa-error-container">\n      <div class="icon">!</div>\n      <p>Not valid!</p>\n    </div><div class="sa-button-container">\n      <button class="cancel" tabIndex="2">Cancel</button>\n      <div class="sa-confirm-button-container">\n        <button class="confirm" tabIndex="1">OK</button><div class="la-ball-fall">\n          <div></div>\n          <div></div>\n          <div></div>\n        </div>\n      </div>\n    </div></div>';n["default"]=o,t.exports=n["default"]},{}],8:[function(e,t,o){Object.defineProperty(o,"__esModule",{value:!0});var a=e("./utils"),r=e("./handle-swal-dom"),s=e("./handle-dom"),l=["error","warning","info","success","input","prompt"],i=function(e){var t=r.getModal(),o=t.querySelector("h2"),i=t.querySelector("p"),u=t.querySelector("button.cancel"),c=t.querySelector("button.confirm");if(o.innerHTML=e.html?e.title:s.escapeHtml(e.title).split("\n").join("<br>"),i.innerHTML=e.html?e.text:s.escapeHtml(e.text||"").split("\n").join("<br>"),e.text&&s.show(i),e.customClass)s.addClass(t,e.customClass),t.setAttribute("data-custom-class",e.customClass);else{var d=t.getAttribute("data-custom-class");s.removeClass(t,d),t.setAttribute("data-custom-class","")}if(s.hide(t.querySelectorAll(".sa-icon")),e.type&&!a.isIE8()){var f=function(){for(var o=!1,a=0;a<l.length;a++)if(e.type===l[a]){o=!0;break}if(!o)return logStr("Unknown alert type: "+e.type),{v:!1};var i=["success","error","warning","info"],u=n;-1!==i.indexOf(e.type)&&(u=t.querySelector(".sa-icon.sa-"+e.type),s.show(u));var c=r.getInput();switch(e.type){case"success":s.addClass(u,"animate"),s.addClass(u.querySelector(".sa-tip"),"animateSuccessTip"),s.addClass(u.querySelector(".sa-long"),"animateSuccessLong");break;case"error":s.addClass(u,"animateErrorIcon"),s.addClass(u.querySelector(".sa-x-mark"),"animateXMark");break;case"warning":s.addClass(u,"pulseWarning"),s.addClass(u.querySelector(".sa-body"),"pulseWarningIns"),s.addClass(u.querySelector(".sa-dot"),"pulseWarningIns");break;case"input":case"prompt":c.setAttribute("type",e.inputType),c.value=e.inputValue,c.setAttribute("placeholder",e.inputPlaceholder),s.addClass(t,"show-input"),setTimeout(function(){c.focus(),c.addEventListener("keyup",swal.resetInputError)},400)}}();if("object"==typeof f)return f.v}if(e.imageUrl){var p=t.querySelector(".sa-icon.sa-custom");p.style.backgroundImage="url("+e.imageUrl+")",s.show(p);var m=80,v=80;if(e.imageSize){var y=e.imageSize.toString().split("x"),h=y[0],b=y[1];h&&b?(m=h,v=b):logStr("Parameter imageSize expects value with format WIDTHxHEIGHT, got "+e.imageSize)}p.setAttribute("style",p.getAttribute("style")+"width:"+m+"px; height:"+v+"px")}t.setAttribute("data-has-cancel-button",e.showCancelButton),e.showCancelButton?u.style.display="inline-block":s.hide(u),t.setAttribute("data-has-confirm-button",e.showConfirmButton),e.showConfirmButton?c.style.display="inline-block":s.hide(c),e.cancelButtonText&&(u.innerHTML=s.escapeHtml(e.cancelButtonText)),e.confirmButtonText&&(c.innerHTML=s.escapeHtml(e.confirmButtonText)),e.confirmButtonColor&&(c.style.backgroundColor=e.confirmButtonColor,c.style.borderLeftColor=e.confirmLoadingButtonColor,c.style.borderRightColor=e.confirmLoadingButtonColor,r.setFocusStyle(c,e.confirmButtonColor)),t.setAttribute("data-allow-outside-click",e.allowOutsideClick);var g=e.doneFunction?!0:!1;t.setAttribute("data-has-done-function",g),e.animation?"string"==typeof e.animation?t.setAttribute("data-animation",e.animation):t.setAttribute("data-animation","pop"):t.setAttribute("data-animation","none"),t.setAttribute("data-timer",e.timer)};o["default"]=i,t.exports=o["default"]},{"./handle-dom":4,"./handle-swal-dom":6,"./utils":9}],9:[function(t,n,o){Object.defineProperty(o,"__esModule",{value:!0});var a=function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e},r=function(e){var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?parseInt(t[1],16)+", "+parseInt(t[2],16)+", "+parseInt(t[3],16):null},s=function(){return e.attachEvent&&!e.addEventListener},l=function(t){e.console&&e.console.log("SweetAlert: "+t)},i=function(e,t){e=String(e).replace(/[^0-9a-f]/gi,""),e.length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),t=t||0;var n,o,a="#";for(o=0;3>o;o++)n=parseInt(e.substr(2*o,2),16),n=Math.round(Math.min(Math.max(0,n+n*t),255)).toString(16),a+=("00"+n).substr(n.length);return a};o.extend=a,o.hexToRgb=r,o.isIE8=s,o.logStr=l,o.colorLuminance=i},{}]},{},[1]),"function"==typeof define&&define.amd?define(function(){return sweetAlert}):"undefined"!=typeof module&&module.exports&&(module.exports=sweetAlert)}(window,document);
/* Zepto v1.0-1-ga3cab6c - polyfill zepto detect event ajax form fx - zeptojs.com/license */
(function(a){String.prototype.trim===a&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")}),Array.prototype.reduce===a&&(Array.prototype.reduce=function(b){if(this===void 0||this===null)throw new TypeError;var c=Object(this),d=c.length>>>0,e=0,f;if(typeof b!="function")throw new TypeError;if(d==0&&arguments.length==1)throw new TypeError;if(arguments.length>=2)f=arguments[1];else do{if(e in c){f=c[e++];break}if(++e>=d)throw new TypeError}while(!0);while(e<d)e in c&&(f=b.call(a,f,c[e],e,c)),e++;return f})})();var Zepto=function(){function E(a){return a==null?String(a):y[z.call(a)]||"object"}function F(a){return E(a)=="function"}function G(a){return a!=null&&a==a.window}function H(a){return a!=null&&a.nodeType==a.DOCUMENT_NODE}function I(a){return E(a)=="object"}function J(a){return I(a)&&!G(a)&&a.__proto__==Object.prototype}function K(a){return a instanceof Array}function L(a){return typeof a.length=="number"}function M(a){return g.call(a,function(a){return a!=null})}function N(a){return a.length>0?c.fn.concat.apply([],a):a}function O(a){return a.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function P(a){return a in j?j[a]:j[a]=new RegExp("(^|\\s)"+a+"(\\s|$)")}function Q(a,b){return typeof b=="number"&&!l[O(a)]?b+"px":b}function R(a){var b,c;return i[a]||(b=h.createElement(a),h.body.appendChild(b),c=k(b,"").getPropertyValue("display"),b.parentNode.removeChild(b),c=="none"&&(c="block"),i[a]=c),i[a]}function S(a){return"children"in a?f.call(a.children):c.map(a.childNodes,function(a){if(a.nodeType==1)return a})}function T(c,d,e){for(b in d)e&&(J(d[b])||K(d[b]))?(J(d[b])&&!J(c[b])&&(c[b]={}),K(d[b])&&!K(c[b])&&(c[b]=[]),T(c[b],d[b],e)):d[b]!==a&&(c[b]=d[b])}function U(b,d){return d===a?c(b):c(b).filter(d)}function V(a,b,c,d){return F(b)?b.call(a,c,d):b}function W(a,b,c){c==null?a.removeAttribute(b):a.setAttribute(b,c)}function X(b,c){var d=b.className,e=d&&d.baseVal!==a;if(c===a)return e?d.baseVal:d;e?d.baseVal=c:b.className=c}function Y(a){var b;try{return a?a=="true"||(a=="false"?!1:a=="null"?null:isNaN(b=Number(a))?/^[\[\{]/.test(a)?c.parseJSON(a):a:b):a}catch(d){return a}}function Z(a,b){b(a);for(var c in a.childNodes)Z(a.childNodes[c],b)}var a,b,c,d,e=[],f=e.slice,g=e.filter,h=window.document,i={},j={},k=h.defaultView.getComputedStyle,l={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},m=/^\s*<(\w+|!)[^>]*>/,n=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,o=/^(?:body|html)$/i,p=["val","css","html","text","data","width","height","offset"],q=["after","prepend","before","append"],r=h.createElement("table"),s=h.createElement("tr"),t={tr:h.createElement("tbody"),tbody:r,thead:r,tfoot:r,td:s,th:s,"*":h.createElement("div")},u=/complete|loaded|interactive/,v=/^\.([\w-]+)$/,w=/^#([\w-]*)$/,x=/^[\w-]+$/,y={},z=y.toString,A={},B,C,D=h.createElement("div");return A.matches=function(a,b){if(!a||a.nodeType!==1)return!1;var c=a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.matchesSelector;if(c)return c.call(a,b);var d,e=a.parentNode,f=!e;return f&&(e=D).appendChild(a),d=~A.qsa(e,b).indexOf(a),f&&D.removeChild(a),d},B=function(a){return a.replace(/-+(.)?/g,function(a,b){return b?b.toUpperCase():""})},C=function(a){return g.call(a,function(b,c){return a.indexOf(b)==c})},A.fragment=function(b,d,e){b.replace&&(b=b.replace(n,"<$1></$2>")),d===a&&(d=m.test(b)&&RegExp.$1),d in t||(d="*");var g,h,i=t[d];return i.innerHTML=""+b,h=c.each(f.call(i.childNodes),function(){i.removeChild(this)}),J(e)&&(g=c(h),c.each(e,function(a,b){p.indexOf(a)>-1?g[a](b):g.attr(a,b)})),h},A.Z=function(a,b){return a=a||[],a.__proto__=c.fn,a.selector=b||"",a},A.isZ=function(a){return a instanceof A.Z},A.init=function(b,d){if(!b)return A.Z();if(F(b))return c(h).ready(b);if(A.isZ(b))return b;var e;if(K(b))e=M(b);else if(I(b))e=[J(b)?c.extend({},b):b],b=null;else if(m.test(b))e=A.fragment(b.trim(),RegExp.$1,d),b=null;else{if(d!==a)return c(d).find(b);e=A.qsa(h,b)}return A.Z(e,b)},c=function(a,b){return A.init(a,b)},c.extend=function(a){var b,c=f.call(arguments,1);return typeof a=="boolean"&&(b=a,a=c.shift()),c.forEach(function(c){T(a,c,b)}),a},A.qsa=function(a,b){var c;return H(a)&&w.test(b)?(c=a.getElementById(RegExp.$1))?[c]:[]:a.nodeType!==1&&a.nodeType!==9?[]:f.call(v.test(b)?a.getElementsByClassName(RegExp.$1):x.test(b)?a.getElementsByTagName(b):a.querySelectorAll(b))},c.contains=function(a,b){return a!==b&&a.contains(b)},c.type=E,c.isFunction=F,c.isWindow=G,c.isArray=K,c.isPlainObject=J,c.isEmptyObject=function(a){var b;for(b in a)return!1;return!0},c.inArray=function(a,b,c){return e.indexOf.call(b,a,c)},c.camelCase=B,c.trim=function(a){return a.trim()},c.uuid=0,c.support={},c.expr={},c.map=function(a,b){var c,d=[],e,f;if(L(a))for(e=0;e<a.length;e++)c=b(a[e],e),c!=null&&d.push(c);else for(f in a)c=b(a[f],f),c!=null&&d.push(c);return N(d)},c.each=function(a,b){var c,d;if(L(a)){for(c=0;c<a.length;c++)if(b.call(a[c],c,a[c])===!1)return a}else for(d in a)if(b.call(a[d],d,a[d])===!1)return a;return a},c.grep=function(a,b){return g.call(a,b)},window.JSON&&(c.parseJSON=JSON.parse),c.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){y["[object "+b+"]"]=b.toLowerCase()}),c.fn={forEach:e.forEach,reduce:e.reduce,push:e.push,sort:e.sort,indexOf:e.indexOf,concat:e.concat,map:function(a){return c(c.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return c(f.apply(this,arguments))},ready:function(a){return u.test(h.readyState)?a(c):h.addEventListener("DOMContentLoaded",function(){a(c)},!1),this},get:function(b){return b===a?f.call(this):this[b>=0?b:b+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){this.parentNode!=null&&this.parentNode.removeChild(this)})},each:function(a){return e.every.call(this,function(b,c){return a.call(b,c,b)!==!1}),this},filter:function(a){return F(a)?this.not(this.not(a)):c(g.call(this,function(b){return A.matches(b,a)}))},add:function(a,b){return c(C(this.concat(c(a,b))))},is:function(a){return this.length>0&&A.matches(this[0],a)},not:function(b){var d=[];if(F(b)&&b.call!==a)this.each(function(a){b.call(this,a)||d.push(this)});else{var e=typeof b=="string"?this.filter(b):L(b)&&F(b.item)?f.call(b):c(b);this.forEach(function(a){e.indexOf(a)<0&&d.push(a)})}return c(d)},has:function(a){return this.filter(function(){return I(a)?c.contains(this,a):c(this).find(a).size()})},eq:function(a){return a===-1?this.slice(a):this.slice(a,+a+1)},first:function(){var a=this[0];return a&&!I(a)?a:c(a)},last:function(){var a=this[this.length-1];return a&&!I(a)?a:c(a)},find:function(a){var b,d=this;return typeof a=="object"?b=c(a).filter(function(){var a=this;return e.some.call(d,function(b){return c.contains(b,a)})}):this.length==1?b=c(A.qsa(this[0],a)):b=this.map(function(){return A.qsa(this,a)}),b},closest:function(a,b){var d=this[0],e=!1;typeof a=="object"&&(e=c(a));while(d&&!(e?e.indexOf(d)>=0:A.matches(d,a)))d=d!==b&&!H(d)&&d.parentNode;return c(d)},parents:function(a){var b=[],d=this;while(d.length>0)d=c.map(d,function(a){if((a=a.parentNode)&&!H(a)&&b.indexOf(a)<0)return b.push(a),a});return U(b,a)},parent:function(a){return U(C(this.pluck("parentNode")),a)},children:function(a){return U(this.map(function(){return S(this)}),a)},contents:function(){return this.map(function(){return f.call(this.childNodes)})},siblings:function(a){return U(this.map(function(a,b){return g.call(S(b.parentNode),function(a){return a!==b})}),a)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(a){return c.map(this,function(b){return b[a]})},show:function(){return this.each(function(){this.style.display=="none"&&(this.style.display=null),k(this,"").getPropertyValue("display")=="none"&&(this.style.display=R(this.nodeName))})},replaceWith:function(a){return this.before(a).remove()},wrap:function(a){var b=F(a);if(this[0]&&!b)var d=c(a).get(0),e=d.parentNode||this.length>1;return this.each(function(f){c(this).wrapAll(b?a.call(this,f):e?d.cloneNode(!0):d)})},wrapAll:function(a){if(this[0]){c(this[0]).before(a=c(a));var b;while((b=a.children()).length)a=b.first();c(a).append(this)}return this},wrapInner:function(a){var b=F(a);return this.each(function(d){var e=c(this),f=e.contents(),g=b?a.call(this,d):a;f.length?f.wrapAll(g):e.append(g)})},unwrap:function(){return this.parent().each(function(){c(this).replaceWith(c(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(b){return this.each(function(){var d=c(this);(b===a?d.css("display")=="none":b)?d.show():d.hide()})},prev:function(a){return c(this.pluck("previousElementSibling")).filter(a||"*")},next:function(a){return c(this.pluck("nextElementSibling")).filter(a||"*")},html:function(b){return b===a?this.length>0?this[0].innerHTML:null:this.each(function(a){var d=this.innerHTML;c(this).empty().append(V(this,b,a,d))})},text:function(b){return b===a?this.length>0?this[0].textContent:null:this.each(function(){this.textContent=b})},attr:function(c,d){var e;return typeof c=="string"&&d===a?this.length==0||this[0].nodeType!==1?a:c=="value"&&this[0].nodeName=="INPUT"?this.val():!(e=this[0].getAttribute(c))&&c in this[0]?this[0][c]:e:this.each(function(a){if(this.nodeType!==1)return;if(I(c))for(b in c)W(this,b,c[b]);else W(this,c,V(this,d,a,this.getAttribute(c)))})},removeAttr:function(a){return this.each(function(){this.nodeType===1&&W(this,a)})},prop:function(b,c){return c===a?this[0]&&this[0][b]:this.each(function(a){this[b]=V(this,c,a,this[b])})},data:function(b,c){var d=this.attr("data-"+O(b),c);return d!==null?Y(d):a},val:function(b){return b===a?this[0]&&(this[0].multiple?c(this[0]).find("option").filter(function(a){return this.selected}).pluck("value"):this[0].value):this.each(function(a){this.value=V(this,b,a,this.value)})},offset:function(a){if(a)return this.each(function(b){var d=c(this),e=V(this,a,b,d.offset()),f=d.offsetParent().offset(),g={top:e.top-f.top,left:e.left-f.left};d.css("position")=="static"&&(g.position="relative"),d.css(g)});if(this.length==0)return null;var b=this[0].getBoundingClientRect();return{left:b.left+window.pageXOffset,top:b.top+window.pageYOffset,width:Math.round(b.width),height:Math.round(b.height)}},css:function(a,c){if(arguments.length<2&&typeof a=="string")return this[0]&&(this[0].style[B(a)]||k(this[0],"").getPropertyValue(a));var d="";if(E(a)=="string")!c&&c!==0?this.each(function(){this.style.removeProperty(O(a))}):d=O(a)+":"+Q(a,c);else for(b in a)!a[b]&&a[b]!==0?this.each(function(){this.style.removeProperty(O(b))}):d+=O(b)+":"+Q(b,a[b])+";";return this.each(function(){this.style.cssText+=";"+d})},index:function(a){return a?this.indexOf(c(a)[0]):this.parent().children().indexOf(this[0])},hasClass:function(a){return e.some.call(this,function(a){return this.test(X(a))},P(a))},addClass:function(a){return this.each(function(b){d=[];var e=X(this),f=V(this,a,b,e);f.split(/\s+/g).forEach(function(a){c(this).hasClass(a)||d.push(a)},this),d.length&&X(this,e+(e?" ":"")+d.join(" "))})},removeClass:function(b){return this.each(function(c){if(b===a)return X(this,"");d=X(this),V(this,b,c,d).split(/\s+/g).forEach(function(a){d=d.replace(P(a)," ")}),X(this,d.trim())})},toggleClass:function(b,d){return this.each(function(e){var f=c(this),g=V(this,b,e,X(this));g.split(/\s+/g).forEach(function(b){(d===a?!f.hasClass(b):d)?f.addClass(b):f.removeClass(b)})})},scrollTop:function(){if(!this.length)return;return"scrollTop"in this[0]?this[0].scrollTop:this[0].scrollY},position:function(){if(!this.length)return;var a=this[0],b=this.offsetParent(),d=this.offset(),e=o.test(b[0].nodeName)?{top:0,left:0}:b.offset();return d.top-=parseFloat(c(a).css("margin-top"))||0,d.left-=parseFloat(c(a).css("margin-left"))||0,e.top+=parseFloat(c(b[0]).css("border-top-width"))||0,e.left+=parseFloat(c(b[0]).css("border-left-width"))||0,{top:d.top-e.top,left:d.left-e.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||h.body;while(a&&!o.test(a.nodeName)&&c(a).css("position")=="static")a=a.offsetParent;return a})}},c.fn.detach=c.fn.remove,["width","height"].forEach(function(b){c.fn[b]=function(d){var e,f=this[0],g=b.replace(/./,function(a){return a[0].toUpperCase()});return d===a?G(f)?f["inner"+g]:H(f)?f.documentElement["offset"+g]:(e=this.offset())&&e[b]:this.each(function(a){f=c(this),f.css(b,V(this,d,a,f[b]()))})}}),q.forEach(function(a,b){var d=b%2;c.fn[a]=function(){var a,e=c.map(arguments,function(b){return a=E(b),a=="object"||a=="array"||b==null?b:A.fragment(b)}),f,g=this.length>1;return e.length<1?this:this.each(function(a,h){f=d?h:h.parentNode,h=b==0?h.nextSibling:b==1?h.firstChild:b==2?h:null,e.forEach(function(a){if(g)a=a.cloneNode(!0);else if(!f)return c(a).remove();Z(f.insertBefore(a,h),function(a){a.nodeName!=null&&a.nodeName.toUpperCase()==="SCRIPT"&&(!a.type||a.type==="text/javascript")&&!a.src&&window.eval.call(window,a.innerHTML)})})})},c.fn[d?a+"To":"insert"+(b?"Before":"After")]=function(b){return c(b)[a](this),this}}),A.Z.prototype=c.fn,A.uniq=C,A.deserializeValue=Y,c.zepto=A,c}();window.Zepto=Zepto,"$"in window||(window.$=Zepto),function(a){function b(a){var b=this.os={},c=this.browser={},d=a.match(/WebKit\/([\d.]+)/),e=a.match(/(Android)\s+([\d.]+)/),f=a.match(/(iPad).*OS\s([\d_]+)/),g=!f&&a.match(/(iPhone\sOS)\s([\d_]+)/),h=a.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),i=h&&a.match(/TouchPad/),j=a.match(/Kindle\/([\d.]+)/),k=a.match(/Silk\/([\d._]+)/),l=a.match(/(BlackBerry).*Version\/([\d.]+)/),m=a.match(/(BB10).*Version\/([\d.]+)/),n=a.match(/(RIM\sTablet\sOS)\s([\d.]+)/),o=a.match(/PlayBook/),p=a.match(/Chrome\/([\d.]+)/)||a.match(/CriOS\/([\d.]+)/),q=a.match(/Firefox\/([\d.]+)/);if(c.webkit=!!d)c.version=d[1];e&&(b.android=!0,b.version=e[2]),g&&(b.ios=b.iphone=!0,b.version=g[2].replace(/_/g,".")),f&&(b.ios=b.ipad=!0,b.version=f[2].replace(/_/g,".")),h&&(b.webos=!0,b.version=h[2]),i&&(b.touchpad=!0),l&&(b.blackberry=!0,b.version=l[2]),m&&(b.bb10=!0,b.version=m[2]),n&&(b.rimtabletos=!0,b.version=n[2]),o&&(c.playbook=!0),j&&(b.kindle=!0,b.version=j[1]),k&&(c.silk=!0,c.version=k[1]),!k&&b.android&&a.match(/Kindle Fire/)&&(c.silk=!0),p&&(c.chrome=!0,c.version=p[1]),q&&(c.firefox=!0,c.version=q[1]),b.tablet=!!(f||o||e&&!a.match(/Mobile/)||q&&a.match(/Tablet/)),b.phone=!b.tablet&&!!(e||g||h||l||m||p&&a.match(/Android/)||p&&a.match(/CriOS\/([\d.]+)/)||q&&a.match(/Mobile/))}b.call(a,navigator.userAgent),a.__detect=b}(Zepto),function(a){function g(a){return a._zid||(a._zid=d++)}function h(a,b,d,e){b=i(b);if(b.ns)var f=j(b.ns);return(c[g(a)]||[]).filter(function(a){return a&&(!b.e||a.e==b.e)&&(!b.ns||f.test(a.ns))&&(!d||g(a.fn)===g(d))&&(!e||a.sel==e)})}function i(a){var b=(""+a).split(".");return{e:b[0],ns:b.slice(1).sort().join(" ")}}function j(a){return new RegExp("(?:^| )"+a.replace(" "," .* ?")+"(?: |$)")}function k(b,c,d){a.type(b)!="string"?a.each(b,d):b.split(/\s/).forEach(function(a){d(a,c)})}function l(a,b){return a.del&&(a.e=="focus"||a.e=="blur")||!!b}function m(a){return f[a]||a}function n(b,d,e,h,j,n){var o=g(b),p=c[o]||(c[o]=[]);k(d,e,function(c,d){var e=i(c);e.fn=d,e.sel=h,e.e in f&&(d=function(b){var c=b.relatedTarget;if(!c||c!==this&&!a.contains(this,c))return e.fn.apply(this,arguments)}),e.del=j&&j(d,c);var g=e.del||d;e.proxy=function(a){var c=g.apply(b,[a].concat(a.data));return c===!1&&(a.preventDefault(),a.stopPropagation()),c},e.i=p.length,p.push(e),b.addEventListener(m(e.e),e.proxy,l(e,n))})}function o(a,b,d,e,f){var i=g(a);k(b||"",d,function(b,d){h(a,b,d,e).forEach(function(b){delete c[i][b.i],a.removeEventListener(m(b.e),b.proxy,l(b,f))})})}function t(b){var c,d={originalEvent:b};for(c in b)!r.test(c)&&b[c]!==undefined&&(d[c]=b[c]);return a.each(s,function(a,c){d[a]=function(){return this[c]=p,b[a].apply(b,arguments)},d[c]=q}),d}function u(a){if(!("defaultPrevented"in a)){a.defaultPrevented=!1;var b=a.preventDefault;a.preventDefault=function(){this.defaultPrevented=!0,b.call(this)}}}var b=a.zepto.qsa,c={},d=1,e={},f={mouseenter:"mouseover",mouseleave:"mouseout"};e.click=e.mousedown=e.mouseup=e.mousemove="MouseEvents",a.event={add:n,remove:o},a.proxy=function(b,c){if(a.isFunction(b)){var d=function(){return b.apply(c,arguments)};return d._zid=g(b),d}if(typeof c=="string")return a.proxy(b[c],b);throw new TypeError("expected function")},a.fn.bind=function(a,b){return this.each(function(){n(this,a,b)})},a.fn.unbind=function(a,b){return this.each(function(){o(this,a,b)})},a.fn.one=function(a,b){return this.each(function(c,d){n(this,a,b,null,function(a,b){return function(){var c=a.apply(d,arguments);return o(d,b,a),c}})})};var p=function(){return!0},q=function(){return!1},r=/^([A-Z]|layer[XY]$)/,s={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};a.fn.delegate=function(b,c,d){return this.each(function(e,f){n(f,c,d,b,function(c){return function(d){var e,g=a(d.target).closest(b,f).get(0);if(g)return e=a.extend(t(d),{currentTarget:g,liveFired:f}),c.apply(g,[e].concat([].slice.call(arguments,1)))}})})},a.fn.undelegate=function(a,b,c){return this.each(function(){o(this,b,c,a)})},a.fn.live=function(b,c){return a(document.body).delegate(this.selector,b,c),this},a.fn.die=function(b,c){return a(document.body).undelegate(this.selector,b,c),this},a.fn.on=function(b,c,d){return!c||a.isFunction(c)?this.bind(b,c||d):this.delegate(c,b,d)},a.fn.off=function(b,c,d){return!c||a.isFunction(c)?this.unbind(b,c||d):this.undelegate(c,b,d)},a.fn.trigger=function(b,c){if(typeof b=="string"||a.isPlainObject(b))b=a.Event(b);return u(b),b.data=c,this.each(function(){"dispatchEvent"in this&&this.dispatchEvent(b)})},a.fn.triggerHandler=function(b,c){var d,e;return this.each(function(f,g){d=t(typeof b=="string"?a.Event(b):b),d.data=c,d.target=g,a.each(h(g,b.type||b),function(a,b){e=b.proxy(d);if(d.isImmediatePropagationStopped())return!1})}),e},"focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(b){a.fn[b]=function(a){return a?this.bind(b,a):this.trigger(b)}}),["focus","blur"].forEach(function(b){a.fn[b]=function(a){return a?this.bind(b,a):this.each(function(){try{this[b]()}catch(a){}}),this}}),a.Event=function(a,b){typeof a!="string"&&(b=a,a=b.type);var c=document.createEvent(e[a]||"Events"),d=!0;if(b)for(var f in b)f=="bubbles"?d=!!b[f]:c[f]=b[f];return c.initEvent(a,d,!0,null,null,null,null,null,null,null,null,null,null,null,null),c.isDefaultPrevented=function(){return this.defaultPrevented},c}}(Zepto),function($){function triggerAndReturn(a,b,c){var d=$.Event(b);return $(a).trigger(d,c),!d.defaultPrevented}function triggerGlobal(a,b,c,d){if(a.global)return triggerAndReturn(b||document,c,d)}function ajaxStart(a){a.global&&$.active++===0&&triggerGlobal(a,null,"ajaxStart")}function ajaxStop(a){a.global&&!--$.active&&triggerGlobal(a,null,"ajaxStop")}function ajaxBeforeSend(a,b){var c=b.context;if(b.beforeSend.call(c,a,b)===!1||triggerGlobal(b,c,"ajaxBeforeSend",[a,b])===!1)return!1;triggerGlobal(b,c,"ajaxSend",[a,b])}function ajaxSuccess(a,b,c){var d=c.context,e="success";c.success.call(d,a,e,b),triggerGlobal(c,d,"ajaxSuccess",[b,c,a]),ajaxComplete(e,b,c)}function ajaxError(a,b,c,d){var e=d.context;d.error.call(e,c,b,a),triggerGlobal(d,e,"ajaxError",[c,d,a]),ajaxComplete(b,c,d)}function ajaxComplete(a,b,c){var d=c.context;c.complete.call(d,b,a),triggerGlobal(c,d,"ajaxComplete",[b,c]),ajaxStop(c)}function empty(){}function mimeToDataType(a){return a&&(a=a.split(";",2)[0]),a&&(a==htmlType?"html":a==jsonType?"json":scriptTypeRE.test(a)?"script":xmlTypeRE.test(a)&&"xml")||"text"}function appendQuery(a,b){return(a+"&"+b).replace(/[&?]{1,2}/,"?")}function serializeData(a){a.processData&&a.data&&$.type(a.data)!="string"&&(a.data=$.param(a.data,a.traditional)),a.data&&(!a.type||a.type.toUpperCase()=="GET")&&(a.url=appendQuery(a.url,a.data))}function parseArguments(a,b,c,d){var e=!$.isFunction(b);return{url:a,data:e?b:undefined,success:e?$.isFunction(c)?c:undefined:b,dataType:e?d||c:c}}function serialize(a,b,c,d){var e,f=$.isArray(b);$.each(b,function(b,g){e=$.type(g),d&&(b=c?d:d+"["+(f?"":b)+"]"),!d&&f?a.add(g.name,g.value):e=="array"||!c&&e=="object"?serialize(a,g,c,b):a.add(b,g)})}var jsonpID=0,document=window.document,key,name,rscript=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,scriptTypeRE=/^(?:text|application)\/javascript/i,xmlTypeRE=/^(?:text|application)\/xml/i,jsonType="application/json",htmlType="text/html",blankRE=/^\s*$/;$.active=0,$.ajaxJSONP=function(a){if("type"in a){var b="jsonp"+ ++jsonpID,c=document.createElement("script"),d=function(){clearTimeout(g),$(c).remove(),delete window[b]},e=function(c){d();if(!c||c=="timeout")window[b]=empty;ajaxError(null,c||"abort",f,a)},f={abort:e},g;return ajaxBeforeSend(f,a)===!1?(e("abort"),!1):(window[b]=function(b){d(),ajaxSuccess(b,f,a)},c.onerror=function(){e("error")},c.src=a.url.replace(/=\?/,"="+b),$("head").append(c),a.timeout>0&&(g=setTimeout(function(){e("timeout")},a.timeout)),f)}return $.ajax(a)},$.ajaxSettings={type:"GET",beforeSend:empty,success:empty,error:empty,complete:empty,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript",json:jsonType,xml:"application/xml, text/xml",html:htmlType,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},$.ajax=function(options){var settings=$.extend({},options||{});for(key in $.ajaxSettings)settings[key]===undefined&&(settings[key]=$.ajaxSettings[key]);ajaxStart(settings),settings.crossDomain||(settings.crossDomain=/^([\w-]+:)?\/\/([^\/]+)/.test(settings.url)&&RegExp.$2!=window.location.host),settings.url||(settings.url=window.location.toString()),serializeData(settings),settings.cache===!1&&(settings.url=appendQuery(settings.url,"_="+Date.now()));var dataType=settings.dataType,hasPlaceholder=/=\?/.test(settings.url);if(dataType=="jsonp"||hasPlaceholder)return hasPlaceholder||(settings.url=appendQuery(settings.url,"callback=?")),$.ajaxJSONP(settings);var mime=settings.accepts[dataType],baseHeaders={},protocol=/^([\w-]+:)\/\//.test(settings.url)?RegExp.$1:window.location.protocol,xhr=settings.xhr(),abortTimeout;settings.crossDomain||(baseHeaders["X-Requested-With"]="XMLHttpRequest"),mime&&(baseHeaders.Accept=mime,mime.indexOf(",")>-1&&(mime=mime.split(",",2)[0]),xhr.overrideMimeType&&xhr.overrideMimeType(mime));if(settings.contentType||settings.contentType!==!1&&settings.data&&settings.type.toUpperCase()!="GET")baseHeaders["Content-Type"]=settings.contentType||"application/x-www-form-urlencoded";settings.headers=$.extend(baseHeaders,settings.headers||{}),xhr.onreadystatechange=function(){if(xhr.readyState==4){xhr.onreadystatechange=empty,clearTimeout(abortTimeout);var result,error=!1;if(xhr.status>=200&&xhr.status<300||xhr.status==304||xhr.status==0&&protocol=="file:"){dataType=dataType||mimeToDataType(xhr.getResponseHeader("content-type")),result=xhr.responseText;try{dataType=="script"?(1,eval)(result):dataType=="xml"?result=xhr.responseXML:dataType=="json"&&(result=blankRE.test(result)?null:$.parseJSON(result))}catch(e){error=e}error?ajaxError(error,"parsererror",xhr,settings):ajaxSuccess(result,xhr,settings)}else ajaxError(null,xhr.status?"error":"abort",xhr,settings)}};var async="async"in settings?settings.async:!0;xhr.open(settings.type,settings.url,async);for(name in settings.headers)xhr.setRequestHeader(name,settings.headers[name]);return ajaxBeforeSend(xhr,settings)===!1?(xhr.abort(),!1):(settings.timeout>0&&(abortTimeout=setTimeout(function(){xhr.onreadystatechange=empty,xhr.abort(),ajaxError(null,"timeout",xhr,settings)},settings.timeout)),xhr.send(settings.data?settings.data:null),xhr)},$.get=function(a,b,c,d){return $.ajax(parseArguments.apply(null,arguments))},$.post=function(a,b,c,d){var e=parseArguments.apply(null,arguments);return e.type="POST",$.ajax(e)},$.getJSON=function(a,b,c){var d=parseArguments.apply(null,arguments);return d.dataType="json",$.ajax(d)},$.fn.load=function(a,b,c){if(!this.length)return this;var d=this,e=a.split(/\s/),f,g=parseArguments(a,b,c),h=g.success;return e.length>1&&(g.url=e[0],f=e[1]),g.success=function(a){d.html(f?$("<div>").html(a.replace(rscript,"")).find(f):a),h&&h.apply(d,arguments)},$.ajax(g),this};var escape=encodeURIComponent;$.param=function(a,b){var c=[];return c.add=function(a,b){this.push(escape(a)+"="+escape(b))},serialize(c,a,b),c.join("&").replace(/%20/g,"+")}}(Zepto),function(a){a.fn.serializeArray=function(){var b=[],c;return a(Array.prototype.slice.call(this.get(0).elements)).each(function(){c=a(this);var d=c.attr("type");this.nodeName.toLowerCase()!="fieldset"&&!this.disabled&&d!="submit"&&d!="reset"&&d!="button"&&(d!="radio"&&d!="checkbox"||this.checked)&&b.push({name:c.attr("name"),value:c.val()})}),b},a.fn.serialize=function(){var a=[];return this.serializeArray().forEach(function(b){a.push(encodeURIComponent(b.name)+"="+encodeURIComponent(b.value))}),a.join("&")},a.fn.submit=function(b){if(b)this.bind("submit",b);else if(this.length){var c=a.Event("submit");this.eq(0).trigger(c),c.defaultPrevented||this.get(0).submit()}return this}}(Zepto),function(a,b){function s(a){return t(a.replace(/([a-z])([A-Z])/,"$1-$2"))}function t(a){return a.toLowerCase()}function u(a){return d?d+a:t(a)}var c="",d,e,f,g={Webkit:"webkit",Moz:"",O:"o",ms:"MS"},h=window.document,i=h.createElement("div"),j=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,k,l,m,n,o,p,q,r={};a.each(g,function(a,e){if(i.style[a+"TransitionProperty"]!==b)return c="-"+t(a)+"-",d=e,!1}),k=c+"transform",r[l=c+"transition-property"]=r[m=c+"transition-duration"]=r[n=c+"transition-timing-function"]=r[o=c+"animation-name"]=r[p=c+"animation-duration"]=r[q=c+"animation-timing-function"]="",a.fx={off:d===b&&i.style.transitionProperty===b,speeds:{_default:400,fast:200,slow:600},cssPrefix:c,transitionEnd:u("TransitionEnd"),animationEnd:u("AnimationEnd")},a.fn.animate=function(b,c,d,e){return a.isPlainObject(c)&&(d=c.easing,e=c.complete,c=c.duration),c&&(c=(typeof c=="number"?c:a.fx.speeds[c]||a.fx.speeds._default)/1e3),this.anim(b,c,d,e)},a.fn.anim=function(c,d,e,f){var g,h={},i,t="",u=this,v,w=a.fx.transitionEnd;d===b&&(d=.4),a.fx.off&&(d=0);if(typeof c=="string")h[o]=c,h[p]=d+"s",h[q]=e||"linear",w=a.fx.animationEnd;else{i=[];for(g in c)j.test(g)?t+=g+"("+c[g]+") ":(h[g]=c[g],i.push(s(g)));t&&(h[k]=t,i.push(k)),d>0&&typeof c=="object"&&(h[l]=i.join(", "),h[m]=d+"s",h[n]=e||"linear")}return v=function(b){if(typeof b!="undefined"){if(b.target!==b.currentTarget)return;a(b.target).unbind(w,v)}a(this).css(r),f&&f.call(this)},d>0&&this.bind(w,v),this.size()&&this.get(0).clientLeft,this.css(h),d<=0&&setTimeout(function(){u.each(function(){v.call(this)})},0),this},i=null}(Zepto)
﻿/* Simple min-height-masonry layout plugin.
Like masonry column shift, but works. */
;(function($) {

	'use strict';

    // get css prefix for current browser
	var cssPrefix = detectCSSPrefix();



    /**
     * @desc Plugin prototype definition.
     * - just run function ._create
     * @param {jQuery} el - jquery dom object
     * @param {Object} opts - options used in plugin
     * @constructor
     */
	var Waterfall = function(el, opts) {

        // get dom refs
		this.$el = $(el);
		this.el = el[0];

        // run internal function to create plugin
		this._create(opts);
	};



    // set default class for plugin
	Waterfall.defaultClass = 'waterfall';



    /**
     * @desc extend definition of plugin prototype.
     * - add default options
     * - add all internal methods used by plugin.
     */
	$.extend(Waterfall.prototype, {
		options: {
			colMinWidth: 300, //width of column, used to calculate number of columns possible to display
			defaultContainerWidth: window.clientWidth,
			autoresize: true,
			maxCols: 16, //used to restrict max number of columns
			updateDelay: 45, //how often to reflow layout on window resize
			useCalc: undefined, //set width through -prefix-calc value. Values: true, false, undefined. Autodetection.
			useTranslate3d: undefined, //place items through translate3d instead of top/left. Values: true, false, undefined. Autodetection
			animateShow: false, //whether to animate appending items (causes browser extra-reflows, slows down rendering)

			//callbacks
			reflow: null
		},



        /**
         * @desc make plugin works.
         * - hide container,
         * - check if plugin should use calc or css translate3d
         * - get dom childrens of container, save it in items attr and remove text node
         * - update styles of each children on list
         * - add window resize listener if needed
         * - add MutationObserver to remove/add new items on list if browser will handle this
         * @param {Object} opts - passed in plugin init
         * @private
         */
		_create: function(opts) {

            // local vard
			var self = this,
				o = self.options = $.extend({}, self.options, opts);

            // init basic vars
			this.items = [];
			self.lastHeights = [];
			self.lastItems = [];
			self.colPriority = []; //most left = most minimal column
			self.baseOrder = [];

            // get styles of container
			var cStyle = getComputedStyle(self.el);

            // hide element
			self.el.hidden = true;

            // prevent scrollbar width changing
			self.el.style.minHeight = cStyle.height;

            // set position relative if contianer have static position
			if (self.$el.css('position') === 'static') self.el.style.position = 'relative';

			//detect placing mode needed
            // check if useCalc option is setted by used
			if (o.useCalc === undefined) {

                /**
                 * @desc check if calc function can be used by browser
                 */
				this.prefixedCalc = (function() {

                    // get test dom element
					var dummy = document.createElement('div'),

                        // set list of properties to test
						props = ['calc', '-webkit-calc', '-moz-calc', '-o-calc'];

                    // check each property from list
					for (var i = 0; i < props.length; ++i) {

						var prop = props[i],
                            propStr =  prop + '(1px)';

                        // create css style needed to test
						dummy.style.cssText = cssPrefix + 'transform: translate3d(' + [propStr, propStr, propStr].join(',') +');';

						//console.log(dummy.style[cssPrefix + 'transform'])

                        // check if dom have needed styles apply
						if (dummy.style.length && dummy.style[cssPrefix + 'transform'].length > 14) {
							return prop;
						}
					}
				})();

                // change options useCalc and verify is calc function is used by browser
				o.useCalc = !!this.prefixedCalc;
			}

			//console.log(this.prefixedCalc);
            // check if useCalc option is setted by used
			if (o.useTranslate3d === undefined) {

                /**
                 * @desc check if browser can use css translate3d propery
                 */
				this.prefixedTranslate3d = (function() {

                    // get test dom element
					var dummy = document.createElement('div');

                    // set list of properties to test
					var props = ['translate3d', '-webkit-translate3d', '-moz-translate3d', '-o-translate3d'];

					for (var i = 0; i < props.length; ++i) {

						var prop = props[i];

                        // create css style needed to test
                        dummy.style.cssText = cssPrefix + 'transform:' + prop + '(1px, 0, 0);';

                        // check if dom have needed styles apply
						if (dummy.style.length){
                            return prop;
                        }
					}
				})();

                // check if browser have use css translate3d property
				o.useTranslate3d = !!this.prefixedTranslate3d;
			}
			//console.log(this.prefixedTranslate3d)

			//populate items
			var items;

            // get list of dom childerns
			{
				items = self.$el.children();
			}

			// remove text nodes
			for (var i = 0; i < self.el.childNodes.length;) {

                // check dom node type
				if (self.el.childNodes[i].nodeType !== 1 && self.el.childNodes[i].nodeType !== 8){
					self.el.removeChild(self.el.childNodes[i]);
				} else {
                    i++;
                }
			}

            // for each children add item to list and init styles
			items.each(function(i, e) {
				//self.items[i].data('id', i);

                // add item to internal items list
				self._addItem(e);

                // apply needed styles to item
				self._initItem(e);
			});

            // get dom refs to last children
			self.lastItem = self.items[self.items.length - 1];

            // show container
			self.el.removeAttribute("hidden");

            // set proper styles for each item in items array
			self._update();

            // verify is autoresise is on
			if (o.autoresize) {

                // trigger reflow function when window resize event occure
				$(window)
					.resize(self.reflow.bind(self));
			}

            // use MutationObserver functionality to add/remove items on list if browser can handle this
			this._observeMutations();
		},



        /**
         * @desc add item to internal list od items
         * @param {jQuery dom node} item
         * @private
         */
		_addItem: function(item){

            // check if item shouldnt be added to list
			if (item.getAttribute("data-exclude")) return;

            // add item to array
			this.items.push(item);
		},



        /**
         * @desc Make Node changing observer - the fastest way to add items
         * - on dom change sync internal array of items
         * @private
         */
		_observeMutations: function() {

            // check if browser support observers
			if (window.MutationObserver) {

				//FF, chrome
                // create new observer for children nodes
				this.observer = new MutationObserver(function(mutations) {

                    // get size of changes
                    var mNum = mutations.length;

                    // for each change take action
					for (var i = 0; i < mNum; i++) {

						//console.log(mutations[i])

                        // check if items were removed
						if (mutations[i].removedNodes.length) {

                            // remove items from internal array of items
							this._removedItems(Array.prototype.slice.apply(mutations[i].removedNodes));
						}

                        // check if items were added
						if (mutations[i].addedNodes.length) {

                            // add items to internal array of items
							var nodes = Array.prototype.slice.apply(mutations[i].addedNodes);

                            // add nodes to dom
							if (mutations[i].nextSibling) {
								this._insertedItems(nodes);
							} else {
								this._appendedItems(nodes);
							}
						}
					}
				}.bind(this));

                // set observe all childrens of container
				this.observer.observe(this.el, {
					attributes: false,
					childList: true,
					characterData: false
				});
			} else {

				//opera, ie
				this.$el

                    // handle action when new dom was inserted
                    .on('DOMNodeInserted', function(e) {
                        var evt = (e.originalEvent || e),
                            target = evt.target;

                        // check is new node is text
                        if (target.nodeType !== 1 && target.nodeType !== 8) return;

                        //if insertee is below container
                        if (target.parentNode !== this.el) return;

                        //console.log("--------" + target.className + " next:" + target.nextSibling + " prev:" + target.previousSibling)

                        // check if new item have special case
                        if (target.previousSibling && target.previousSibling.span && (!target.nextSibling || !target.nextSibling.span)) {
                            //append specific case, times faster than _insertedItems
                            this._appendedItems([target]);
                        } else {
                            this._insertedItems([target]);
                        }
                    }.bind(this))

                    // handle action when dom was removed
                    .on('DOMNodeRemoved', function(e) {

                        // get target
                        var el = (e.originalEvent || e).target;

                        // check is removed node was text
                        if (el.nodeType !== 1 && el.nodeType !== 8) return;

                        //if insertee is below container
                        if (el.parentNode !== this.el) return;

                        // remove item from list
                        this._removedItems([el]);
                    }.bind(this));
			}
		},



        /**
         * @desc API :: Ensures column number correct, reallocates items
         * @returns {Waterfall}
         */
		reflow: function() {
            // get local vars
			var self = this,
				o = self.options;

            // clear timeout from last timeout
			window.clearTimeout(self._updateInterval);

            // trigger _update function after timeout have done
			self._updateInterval = window.setTimeout(self._update.bind(self), o.updateDelay);

            // return Waterfall instance
			return self;
		},



        /**
         * @desc sync passed array of items with internal list of item and update position of each item
         * - called by mutation observer
         * @param {Array} items - list of container childrens, jquery dom objects
         * @private
         */
		_appendedItems: function(items) {

            // local vars
			var l = items.length,
				i = 0;

			//console.log("append: " + this.items.length)
            // touch each item on list
			for (; i < l; i++) {

                // get item
				var el = items[i];

                // check item type. Dont touch text node
				if (el.nodeType !== 1) continue;

                // append item to array of items
				this._addItem(el);

                // set styles for dom item
                //TODO: optimize
				this._initItem(el);

                // set width based on calculated valued
				this._setItemWidth(el);
			}

            // update position of each item in array
			for (i = 0; i < l; i++) {

                // dont touch text nodes
			    if (items[i].nodeType !== 1) continue;

                // udpdate position
				this._placeItem(items[i]);
			}

            // update refs to last item
			this.lastItem = this.items[this.items.length - 1];

            // set proper height of container
			this._maximizeHeight();
		},



        /**
         * @desc sync passed array of items with internal list of item and update position of each item
         *  - if new items inserted somewhere inside the list
         * @param {Array} items - list of container childrens, jquery dom objects
         * @private
         */
		_insertedItems: function(items) {
			//console.log("insert: " + this.items.length)
			//clear old items
			this.items.length = 0;

			//init new items
			var l = items.length;

			for (var i = 0; i < l; i++) {

                // get item
				var el = items[i];

                // check item type. Dont touch text node
				if (el.nodeType !== 1 && el.nodeType !== 8) continue;

                // init styles for dom item
                //TODO: optimize
				this._initItem(el);

                // set width based on calculated values
				this._setItemWidth(el);
			}

			// reinit all items
			var children = this.el.childNodes,
				itemsL = children.length;

			for (var i = 0; i < itemsL; i++){

                // check item type. Dont touch text node
				if (children[i].nodeType !== 1 && el.nodeType !== 8) continue;
				if (!children[i].span) continue;

                // add item to internal list of items
				this._addItem(children[i]);
			}

            // update refs to last item
			this.lastItem = this.items[this.items.length - 1];

            // trigger update styles of items
			this.reflow();
		},



        /**
         * @desc sync passed array of items with internal list of item and update position of each item
         *  - called by mutation observer
         * @param {Array} items - list of container childrens, jquery dom objects
         * @private
         */
		_removedItems: function(items) {

            // get local vars
			var childItems = this.el.childNodes,
				cl = childItems.length;

			//console.log("before removed: " + this.items.length)

			// reinit items
			for (var i = 0; i < items.length; i++){

                // add/remove items to list
				this.items.splice(this.items.indexOf(items[i]), 1);
			}

			//console.log("after remove:" + this.items.length)

            // refresh last item refs
			this.lastItem = this.items[this.items.length - 1];

            // trigger update styles of items
			this.reflow();
		},



        /**
         * @desc simple trigger routine
         * @param cbName
         * @param arg
         * @private
         */
		_trigger: function(cbName, arg) {
			try {

                // call event on container
				if (this.options[cbName]){
                    this.options[cbName].call(this.$el, arg);
                }

                // trigger event
				this.$el.trigger(cbName, [arg]);
			} catch (err) {

                // throw err if occur
				throw (err);
			}
		},



        /**
         * @desc init item properties once item appended
         * @param {jquery dom object} el - children of container
         * @private
         */
		_initItem: function(el) {

            // get variables
			var o = this.options,
				span = el.getAttribute('data-span') || 1,
				floatVal = el.getAttribute('data-float') || el.getAttribute('data-column');

			// set span
			span = (span === 'all' ? o.maxCols : Math.max(0, Math.min(~~(span), o.maxCols)));

            //quite bad, but no choice: dataset is sloow
			el.span = span;

			// save heavy style-attrs
			var style = getComputedStyle(el);

			el.mr = ~~(style.marginRight.slice(0, -2));
			el.ml = ~~(style.marginLeft.slice(0, -2));
			el.bt = ~~(style.borderTopWidth.slice(0, -2));
			el.bb = ~~(style.borderBottomWidth.slice(0, -2));
			el.mt = ~~(style.marginTop.slice(0, -2)); //ignored because of offsetTop instead of style.top
			el.mb = ~~(style.marginBottom.slice(0, -2));

			// set style
			el.style.position = 'absolute';
			//this._setItemWidth(el); //make it external action to not to init frominside create

			// parset float
			switch (floatVal) {
				case null: //no float
					el.floatCol = null;
					break;
				case 'right':
				case 'last':
					el.floatCol = -span;
					break;
				case 'left':
				case 'first':
					el.floatCol = 0;
					break;
				default: //int column
					el.floatCol = ~~(floatVal) - 1;
					break;
			}

            // check options
			if (o.animateShow) {

                // check if should be used css
				if (o.useTranslate3d) {
					//TODO: this below crashes chrome
					//el.style[cssPrefix+'translate'] = 'translate3d(0, ' + this.lastHeights[this.colPriority[0]] + 'px ,0)'
				} else {

                    // set style for each item. Default value
					el.style.top = this.lastHeights[this.colPriority[this.colPriority.length - 1]] + 'px';
					el.style.left = this.colWidth * this.colPriority[this.colPriority.length - 1] + 'px';
				}

                // show item
				el.removeAttribute('hidden');
			}
		},



        /**
         * @desc
         * @todo make docs
         * @returns {Number}
         * @private
         */
		_initLayoutParams: function() {

            // set local vars
			var self = this,
				o = self.options,
				cStyle = window.getComputedStyle(self.el),
				i = 0,
				prevCols = self.lastItems.length;

			self.pl = ~~(cStyle.paddingLeft.slice(0, -2));
			self.pt = ~~(cStyle.paddingTop.slice(0, -2));
			self.pr = ~~(cStyle.paddingRight.slice(0, -2));
			self.pb = ~~(cStyle.paddingBottom.slice(0, -2));

			self.lastHeights.length = 0;
			self.colPriority.length = 0; //most left = most minimal column
			self.baseOrder.length = 0;

			self.colWidth = self.el.offsetWidth - self.pl - self.pr;

			self.lastItems.length = ~~(self.colWidth / o.colMinWidth) || 1; //needed length
			// console.log(o.colMinWidth)

			var top = o.useTranslate3d ? 0 : self.pt;

			for (i = 0; i < self.lastItems.length; i++) {
				self.lastHeights.push(top);
				self.baseOrder.push(i);
				self.colPriority.push(i);
			}

			self.colWidth /= self.lastItems.length;

			//console.log(prevCols + '->' + self.lastItems.length);
			if (!o.useCalc || prevCols !== self.lastItems.length) {

				//set item widths carefully - if columns changed or px widths used
				for (i = self.items.length; i--;) {
					this._setItemWidth(self.items[i]);
				}
			}

			return self.lastItems.length;
		},



		// full update of layout
		_updateInterval: 0,



        /**
         * @desc trigger update position of each item, container and run reflow
         * @param {Integer} from - number between items should be updated
         * @param {Integer} to - number between items should be updated
         * @private
         */
		_update: function(from, to) {
			//window.start = Date.now()

            // set local vars
			var self = this,
				i = 0,
				start = from || 0,
				end = to || self.items.length,
				colsNeeded = self._initLayoutParams();

			//console.log('beforePlace:' + this.lastItems.length)

            // update styles of each item in array of childrens
			for (i = start; i < end; i++) {
				self._placeItem(self.items[i]);
			}

			//console.log('afterPlace:' + this.lastItems.length)

            // set proper height of container
			self._maximizeHeight();

            // trigger reflow of each item
			self._trigger('reflow');

			//console.log('time elapsed: ' + (Date.now() - window.start) + 'ms')
		},



        /**
         * @desc set item width based on span/colWidth
         * @param {jquery dom object} el - element which should be changed
         * @private
         */
		_setItemWidth: function(el) {

            // get amount of items
			var span = el.span > this.lastItems.length ? this.lastItems.length : el.span,

                // get amount of columns
				cols = this.lastItems.length,

                // one column width in percentage
				colWeight = span / cols;

            // check if use css calc function
			if (this.options.useCalc) {

                // get 100% of width
				el.w = (100 * colWeight);

                // set item width based of columns amount, margins and paddings
				el.style.width = this.prefixedCalc + '(' + (100 * colWeight) + '% - ' + (el.mr + el.ml + (this.pl + this.pr) * colWeight) + 'px)';
			} else {

                // set new width based on columns amount and margins
				el.w = ~~(this.colWidth * span - (el.ml + el.mr));

                // se new width
				el.style.width = el.w + 'px';
			}
		},



        /**
         * @desc set position of item in array of items.
         * @todo add docs
         * @param {jquery dom object} e - element which should be changed
         * @private
         */
		_placeItem: function(e) {

            // set local vars
			var self = this,
				o = self.options;

			var lastHeights = self.lastHeights,
				lastItems = self.lastItems,
				colPriority = self.colPriority,
				minCol = 0,
				minH = 0,
				h = 0,
				c = 0,
				t = 0,
				end = 0,
				start = 0,
				span = e.span > lastItems.length ? lastItems.length : e.span,
				newH = 0,
				spanCols = [], //numbers of spanned columns
				spanHeights = [], //heights of spanned columns
				style,
				floatCol = e.floatCol;

			//console.log('------ item:' + e.innerHTML)
			//console.log('span:'+span)			

			//Find pro→per column to place item
			//console.log(colPriority)
			if (floatCol) {
				floatCol = floatCol > 0 ? Math.min(floatCol, lastItems.length - span) : (lastItems.length + floatCol);
			}

            // check amount of columns
			if (span === 1) {

				// single-span element
				if (floatCol === null) {

					//no align
					minCol = colPriority.shift();
				} else {

					//predefined column to align
					minCol = floatCol;


					for (c = 0; c < colPriority.length; c++) {

						if (colPriority[c] == minCol) {

							colPriority.splice(c, 1);
							break;
						}
					}
				}
				spanCols.push(minCol);
				minH = lastHeights[minCol];
			} else if (span >= lastItems.length) { //Full-span element
				minCol = 0;
				minH = lastHeights[colPriority[colPriority.length - 1]];
				spanCols = self.baseOrder.slice();
				spanCols.length = lastHeights.length;
				colPriority.length = 0;
			} else { //Some-span element
				if (floatCol !== null) {
					minCol = floatCol;
					minH = Math.max.apply(Math, lastHeights.slice(minCol, minCol + span));
					//console.log(lastHeights.slice(minCol, span))
					//console.log('fCol:' + floatCol + ' minH: ' + minH)
				} else {
					//Make span heights alternatives
					spanHeights.length = 0;
					minH = Infinity;
					minCol = 0;
					for (c = 0; c <= lastItems.length - span; c++) {
						spanHeights[c] = Math.max.apply(Math, lastHeights.slice(c, c + span));
						if (spanHeights[c] < minH) {
							minCol = c;
							minH = spanHeights[c];
						}
					}
				}
				//Replace priorities
				for (c = 0; c < colPriority.length;) {
					if (colPriority[c] >= minCol && colPriority[c] < minCol + span) {
						spanCols.push(colPriority.splice(c, 1)[0]);
					} else c++;
				}
			}

			//console.log(spanCols)
			//console.log(lastHeights)
			//console.log('↑ spanCols to ↓')

			//TODO: correct to work ok with options
			e.top = ~~minH; //stupid save value for translate3d
			if (o.useTranslate3d) {
				var offset = (100 * minCol / span) + '% + ' + ~~((e.ml + e.mr) * minCol / span) + 'px';
				if (o.useCalc) {
					e.style[cssPrefix + 'transform'] = this.prefixedTranslate3d + '( ' + this.prefixedCalc + '(' + offset + '), ' + e.top + 'px, 0)';
				} else {
					//Safari won't set -webkit-calc in element.style
					e.style[cssPrefix + 'transform'] = this.prefixedTranslate3d + '(' + ~~(self.colWidth * minCol) + 'px, ' + e.top + 'px, 0)';
				}
			} else {
				e.style.top = e.top + 'px';
				e.style.left = self.colWidth * minCol + self.pl + 'px';
			}
			//console.log(e.style[cssPrefix + 'transform'])

			//if element was added first time and is out of flow - show it
			//e.style.opacity = 1;
			e.removeAttribute('hidden');

			newH = self._getBottom(e); //this is the most difficult operation (e.clientHeight)
			for (t = 0; t < spanCols.length; t++) {
				lastItems[spanCols[t]] = e;
				self.lastHeights[spanCols[t]] = newH;
			}

			//console.log(lastItems)
			//console.log('↑ self.lastHeights to ↓')
			//console.log(self.lastHeights)
			//console.log('minCol:'+minCol+' minH:'+minH+' newH:'+newH)
			//console.log(colPriority)
			//console.log('↑ colPriorities to ↓')

			//Update colPriority
			for (c = colPriority.length; c--;) {
				h = self.lastHeights[colPriority[c]];
				if (newH >= h) {
					Array.prototype.splice.apply(colPriority, [c + 1, 0].concat(spanCols));
					break;
				}
			}
			if (colPriority.length < lastHeights.length) {
				Array.prototype.unshift.apply(colPriority, spanCols);
				//self.colPriority = spanCols.concat(colPriority)
			}
		},



        /**
         * @desc get bottom edge position of item(in pixels)
         * @param {jquery dom object} e - item
         * @returns {*}
         * @private
         */
		_getBottom: function(e) {

            // check if param is seteted
			if (!e) return 0; //this.pt;

			//TODO: memrize height, look for height change to avoid reflow
			return e.top + e.offsetHeight + e.bt + e.bb + e.mb + e.mt;
		},



        /**
         * @desc update style(minHeight) of container
         * @private
         */
		_maximizeHeight: function() {

            // get top position
			var top = this.options.useTranslate3d ? this.pt : 0;

            // set new height based on padding, height and position of last item in height
			this.el.style.minHeight = this.lastHeights[this.colPriority[this.colPriority.length - 1]] + this.pb + top + 'px';
		}
	});



    /**
     * @desc register plugin as jq library.
     * - Init plugin for each item in selector if arg is string
     * - Verify plugin dom refs and init plugin with arg2 as options. Moreover check min width of column.
     * @param arg - selector || jq dom item
     * @param arg2 - options
     * @returns {*}
     */
    $.fn.waterfall = function(arg, arg2) {

        //Call API method
        if (typeof arg == 'string') {

            // init plugin for each jQ object from selector
            return $(this).each(function(i, el) { $(el).data('waterfall')[arg](arg2); });
        } else {

            // check amount of dom refs
            if (!this.length) {
                throw new Error("No element passed to waterfall");
                return false;
            }

            // get basic values
            var $this = $(this),

            // set default options
                opts = $.extend({}, {

                    // try to get minimal column width from html attr
                    "colMinWidth": ~~$this[0].getAttribute("data-col-min-width") || ~~$this[0].getAttribute("data-width")
                }, arg);

            // set minimal column width of container if is not setted
            if (opts.width && !opts.colMinWidth) {
                opts.colMinWidth = opts.width;
            }

            // run plugin
            var wf = new Waterfall($this, opts);

            // set plugin instance reference
            if (!$this.data('waterfall')) $this.data('waterfall', wf);

            // return plugin instance
            return wf;
        }
    };



    /**
     * @desc Get name of css prefix based on document.defaultView styles
     * @param {String} property
     * @returns {*}
     */
    function detectCSSPrefix(property) {

        // check default values
        if (!property) property = 'transform';

        // get values of all css properties that document.body can have
        var style = document.defaultView.getComputedStyle(document.body, '');

        // check if style property is in object
        if (style[property]) return '';
        if (style['-webkit-' + property]) return '-webkit-';
        if (style['-moz-' + property]) return '-moz-';
        if (style['-o-' + property]) return '-o-';
        if (style['-khtml-' + property]) return '-khtml-';

        // false if non of options is proper attr
        return false;
    }



    // run plugin after document ready
    //
    $(function() {

        // get name of class for plugin
        var defClass = window.waterfall && window.waterfall.defaultClass || Waterfall.defaultClass;

        // find dom refs and init plugin
        $('.' + defClass)
            .each(function(i, e) {

                // get jQ dom ref and run plugin.
                var $e = $(e),
                    opts = window.waterfall || {};

                // init plugin
                $e.waterfall(opts);
            });
    });

})(window.jQuery || window.Zepto);

$(document).ready(function(){
  $("div.isme .click-me").click(function(){
    $(".inputAvatar").click();
  });

  $("div.isme .inputAvatar").change(function(){
    $('.avatarSubmit').click();
  });
  $(".waterfall").waterfall();
  $("select").select2();

  // $('input[name=username2]').keypress(function(){
  //   console.log($(this).val());
  //   $('input[name=username]').val($(this).val());
  // });
});