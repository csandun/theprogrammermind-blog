(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{183:function(n,e,t){"use strict";t.r(e),t.d(e,"pageQuery",function(){return d});var i=t(0),a=t.n(i),o=t(208),r=t(337),p=t(206),l=t(265);e.default=function(n){var e=n.pageContext,t=n.data,i=e.tag,d=t.allMarkdownRemark,s=d.edges,c=d.totalCount;return a.a.createElement(o.a,null,a.a.createElement(p.a,{title:i,description:"A collection of "+c+" post"}),a.a.createElement(l.o,null,a.a.createElement(l.n,null,a.a.createElement(l.m,null,i),"A collection of "+c+" post"),s.map(function(n){var e=n.node;return n.index,a.a.createElement(r.a,{key:e.fields.slug,title:e.frontmatter.title,url:e.fields.slug,description:e.frontmatter.description||e.excerpt,date:e.frontmatter.date,tags:e.frontmatter.tags})})))};var d="700262481"},197:function(n,e,t){var i=t(228);n.exports=function(n){return null==n?"":i(n)}},199:function(n,e,t){"use strict";t(27),t(28),t(13),t(45),t(23);var i=t(0),a=t.n(i),o=t(191),r=t(192),p=Object(o.c)("button").withConfig({displayName:"Buttonstyle__ButtonStyle",componentId:"yelxe3-0"})(["\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: ",";\n  background-color: ",";\n  height: ","px;\n  width: ",";\n  font-family: ",";\n  font-size: ","px;\n  font-weight: ",";\n  text-decoration: none;\n  padding-top: 0;\n  padding-bottom: 0;\n  padding-left: 27px;\n  padding-right: 27px;\n  border: 0;\n  transition: all 0.3s ease;\n  span.btn-text {\n    padding-left: 4px;\n    padding-right: 4px;\n  }\n  span.btn-icon {\n    display: flex;\n    > div {\n      display: flex !important;\n    }\n  }\n\n  &:focus {\n    outline: none;\n  }\n\n  &.disabled {\n    color: ",";\n    background-color: ",";\n    border-color: ",";\n\n    &:hover {\n      color: ",";\n      background-color: ",";\n      border-color: ",";\n    }\n  }\n\n  &.is-loading {\n    .btn-text {\n      padding-left: 8px;\n      padding-right: 8px;\n    }\n  }\n"],Object(r.a)("colors.white","#fff"),Object(r.a)("colors.black","#292929"),Object(r.a)("heights.2","44"),function(n){return n.fullwidth?"100%":"auto"},Object(r.a)("fontFamily.0","'Fira Sans', sans-serif"),Object(r.a)("fontSizes.3","15"),Object(r.a)("fontWeights.4","500"),Object(r.a)("inactiveColor","#767676"),Object(r.a)("inactiveBG","#e6e6e6"),Object(r.a)("inactiveBG","#e6e6e6"),Object(r.a)("inactiveColor","#767676"),Object(r.a)("inactiveBG","#e6e6e6"),Object(r.a)("inactiveBG","#e6e6e6"));p.displayName="ButtonStyle";var l=p;var d=function(n){var e=n.type,t=n.title,i=n.icon,o=n.disabled,r=n.iconPosition,p=n.onClick,d=n.loader,s=n.isLoading,c=n.className,m=n.fullwidth,x=n.style,f=function(n,e){if(null==n)return{};var t,i,a={},o=Object.keys(n);for(i=0;i<o.length;i++)t=o[i],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,["type","title","icon","disabled","iconPosition","onClick","loader","isLoading","className","fullwidth","style"]),u=["button"];o&&u.push("disabled"),s&&u.push("is-loading"),c&&u.push(c);var g=1==s?a.a.createElement(a.a.Fragment,null,d||"loading...."):i&&a.a.createElement("span",{className:"btn-icon"},i),h=r||"right";return a.a.createElement(l,Object.assign({type:e,className:u.join(" "),disabled:o,"icon-position":h,onClick:p,fullwidth:m,style:x},f),"left"===h&&g,t&&!s&&a.a.createElement("span",{className:"btn-text"},t),"right"===h&&g,s&&a.a.createElement(function(){return a.a.createElement("svg",{width:"20",height:"20",viewBox:"0 0 100 100",className:"loading-icon",style:{marginLeft:5}},a.a.createElement("circle",{cx:"50",cy:"50",fill:"none","ng-attr-stroke":"{{config.color}}","ng-attr-stroke-width":"{{config.width}}","ng-attr-r":"{{config.radius}}","ng-attr-stroke-dasharray":"{{config.dasharray}}",stroke:"#ffffff",strokeWidth:"10",r:"35",strokeDasharray:"164.93361431346415 56.97787143782138",transform:"rotate(196.993 50 50)"},a.a.createElement("animateTransform",{attributeName:"transform",type:"rotate",calcMode:"linear",values:"0 50 50;360 50 50",keyTimes:"0;1",dur:"1s",begin:"0s",repeatCount:"indefinite"})))},null))};d.defaultProps={disabled:!1,isLoading:!1,type:"button"};e.a=d},201:function(n,e,t){"use strict";t(27),t(28),t(13),t(45),t(23),t(14),t(33);var i=t(0),a=t.n(i),o=t(191),r=t(192),p=o.c.div.withConfig({displayName:"Inputstyle__InputWrapper",componentId:"taz2th-0"})(["\n  position: relative;\n  > div {\n    display: flex;\n    width: 100%;\n    align-items: center;\n    justify-content: space-between;\n\n    > label {\n      color: ",";\n      font-size: ","px;\n      line-height: ",";\n      font-weight: ",";\n    }\n  }\n\n  .notification {\n    display: block;\n    color: #d8000c;\n    font-size: 14px;\n    padding-top: 0.5em;\n  }\n\n  .inner-wrap {\n    width: 100%;\n    margin-top: ","px;\n    box-sizing: border-box;\n    position: relative;\n\n    &:only-child {\n      margin: 0;\n    }\n\n    input,\n    textarea,\n    input[type='text'],\n    input[type='email'],\n    input[type='number'],\n    input[type='password'] {\n      appearance: none;\n      width: 100%;\n      height: ","px;\n      border: 1px solid ",";\n      color: ",";\n      font-size: ","px;\n      line-height: ",";\n      font-weight: ",";\n      padding: 0 ","px;\n      box-sizing: border-box;\n      border-radius: 0;\n      transition: border-color 0.25s ease;\n\n      &:hover,\n      &:focus {\n        outline: 0;\n      }\n\n      &:focus {\n        border-color: ",";\n      }\n\n      &::placeholder {\n        color: ",";\n      }\n    }\n\n    input[type='number'] {\n      &::-webkit-inner-spin-button,\n      &::-webkit-outer-spin-button {\n        -webkit-appearance: none;\n        margin: 0;\n      }\n    }\n\n    textarea {\n      height: auto;\n      min-height: ","px;\n      padding-top: ","px;\n      resize: none;\n    }\n  }\n\n  &.disabled {\n    .inner-wrap {\n      cursor: not-allowed;\n      opacity: 0.6;\n    }\n  }\n\n  &.with-search-icon {\n    .inner-wrap {\n      position: relative;\n\n      .search-icon {\n        width: ","px;\n        height: 100%;\n        font-size: ","px;\n        color: ",";\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        position: absolute;\n        top: 0;\n        left: 0;\n\n        &.right {\n          right: 0;\n          left: auto;\n        }\n      }\n\n      .icon-left {\n        padding-left: ","px;\n      }\n\n      .icon-right {\n        padding-right: ","px;\n      }\n    }\n  }\n\n  &.is-material {\n    label {\n      position: absolute;\n      left: 15px;\n      color: ",";\n      font-weight: 400;\n      top: 3px;\n      transition: all 0.2s ease;\n    }\n\n    input,\n    textarea,\n    input[type='text'],\n    input[type='email'],\n    input[type='number'],\n    input[type='password'] {\n      border-radius: 0;\n      border-top: 0;\n      border-left: 0;\n      border-right: 0;\n      padding-left: 15px;\n      padding-right: 15px;\n      height: auto;\n      background: transparent;\n      border-color: ",";\n    }\n\n    textarea {\n      min-height: 40px;\n      padding-bottom: 0;\n    }\n\n    .highlight {\n      position: absolute;\n      height: 1px;\n      top: auto;\n      left: 50%;\n      bottom: 0;\n      width: 0;\n      pointer-events: none;\n      transition: all 0.2s ease;\n    }\n\n    /* If input has icon then these styel */\n    &.icon-left,\n    &.icon-right {\n      .field-wrapper {\n        flex-direction: row-reverse;\n        > .input-icon {\n          width: auto;\n        }\n        > input {\n          flex: 1;\n        }\n      }\n    }\n\n    /* When icon position in left */\n    &.icon-left {\n      .field-wrapper {\n        > input {\n          padding-left: 20px;\n        }\n      }\n      label {\n        top: -15px;\n        font-size: 12px;\n      }\n    }\n\n    /* When icon position in right */\n    &.icon-right {\n      .field-wrapper {\n        > input {\n          padding-right: 20px;\n        }\n      }\n    }\n\n    /* Material input focus style */\n    &.is-focus {\n      input {\n        border-color: ",";\n      }\n\n      label {\n        top: -10px;\n        font-size: 12px;\n        color: ",";\n      }\n\n      .highlight {\n        width: 100%;\n        height: 2px;\n        left: 0;\n      }\n    }\n  }\n"],Object(r.a)("colors.textColor","#292929"),Object(r.a)("fontSizes.3","15"),Object(r.a)("lineHeights.normal","1"),Object(r.a)("fontWeights.4","500"),Object(r.a)("space.4","15"),Object(r.a)("heights.2","44"),Object(r.a)("colors.borderColor","#DBDBDB"),Object(r.a)("colors.textColor","#292929"),Object(r.a)("fontSizes.3","15"),Object(r.a)("lineHeights.normalText","1.5"),Object(r.a)("fontWeights.3","400"),Object(r.a)("space.4","15"),Object(r.a)("colors.textColor","#292929"),Object(r.a)("colors.textColor","#292929"),Object(r.a)("heights.9","230"),Object(r.a)("space.4","15"),Object(r.a)("widths.2","45"),Object(r.a)("fontSizes.3","15"),Object(r.a)("colors.textColor","#292929"),Object(r.a)("space.9","50"),Object(r.a)("space.9","50"),Object(r.a)("colors.inactiveColor","#767676"),Object(r.a)("colors.textColor","#292929"),Object(r.a)("colors.inactiveIcon","#ebebeb"),Object(r.a)("colors.textColor","#484848"));e.a=function(n){var e,t,i=n.type,o=n.label,r=n.style,l=n.disabled,d=n.className,s=n.secondaryComponent,c=n.containerStyle,m=n.name,x=n.placeholder,f=n.value,u=n.onChange,g=n.onBlur,h=n.onFocus,b=n.notification,w=n.required,y=n.ariaLabel,v=function(n,e){if(null==n)return{};var t,i,a={},o=Object.keys(n);for(i=0;i<o.length;i++)t=o[i],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,["type","label","style","disabled","className","secondaryComponent","containerStyle","name","placeholder","value","onChange","onBlur","onFocus","notification","required","ariaLabel"]),C=["field-wrapper"];d&&C.push(d),l&&C.push("disabled"),o&&(e=o.replace(/\s+/g,"_").toLowerCase());var _=o&&a.a.createElement("label",{htmlFor:e},o),j=b&&a.a.createElement("div",{className:"notification"},b);switch(i){case"textarea":t=a.a.createElement("div",{className:"inner-wrap"},a.a.createElement("textarea",Object.assign({id:e,name:m,disabled:l,style:r,value:f,onChange:u,onBlur:g,onFocus:h,placeholder:x,required:w,"aria-label":m||y},v)));break;default:t=a.a.createElement("div",{className:"inner-wrap"},a.a.createElement("input",Object.assign({type:i,id:e,disabled:l,style:r,name:m,value:f,onChange:u,onBlur:g,onFocus:h,placeholder:x,required:w,"aria-label":m||y},v)))}return a.a.createElement(p,{className:""+C.join(" "),style:c},_||s?a.a.createElement("div",null,_," ",s):"",t,j)}},204:function(n,e,t){n.exports=t.p+"static/newsletter-bg-eb8e31aa0ee1bd350a800ed85ef9a546.png"},208:function(n,e,t){"use strict";var i=t(0),a=t.n(i),o=t(243),r=t.n(o),p=t(191),l=t(245),d=t.n(l),s=t(207),c=(t(23),t(251)),m=t.n(c),x=t(201),f=t(199),u=t(192),g=t(204),h=t.n(g),b=p.c.div.withConfig({displayName:"newsletterstyle__NewsletterWrapper",componentId:"sc-1gmrbp-0"})(["\n  margin: 0 auto;\n  padding: 30px;\n  background-color: #f3f3f3;\n  background-image: url(",");\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  border-radius: 3px;\n  margin-top: 120px;\n\n  @media (max-width: 990px) {\n    margin-top: 90px;\n    padding: 25px;\n  }\n  @media (max-width: 575px) {\n    margin-top: 60px;\n    padding: 15px;\n  }\n"],h.a),w=p.c.div.withConfig({displayName:"newsletterstyle__NewsletterInnerWrapper",componentId:"sc-1gmrbp-1"})(["\n  padding: 115px;\n  height: 100%;\n  border-radius: 3px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  @media (max-width: 1200px) {\n    padding: 70px 50px;\n  }\n  @media (max-width: 990px) {\n    padding: 50px 40px;\n  }\n  @media (max-width: 575px) {\n    padding: 30px;\n  }\n"]),y=p.c.h1.withConfig({displayName:"newsletterstyle__NewsletterTitle",componentId:"sc-1gmrbp-2"})(["\n  font-size: 30px;\n  color: ",";\n  font-weight: ",";\n  margin-bottom: 20px;\n  font-family: ",";\n  @media (max-width: 1200px) {\n    font-size: 26px;\n  }\n  @media (max-width: 990px) {\n    font-size: 21px;\n    margin-bottom: 10px;\n  }\n  @media (max-width: 575px) {\n    font-size: 18px;\n  }\n"],Object(u.a)("colors.textColor","#292929"),Object(u.a)("fontWeights.6","700"),Object(u.a)("fontFamily.0","'Fira Sans',sans-serif")),v=p.c.p.withConfig({displayName:"newsletterstyle__NewsletterDescription",componentId:"sc-1gmrbp-3"})(["\n  font-size: ","px;\n  line-height: ",";\n  font-weight: ",";\n  color: ",";\n  margin: 0;\n  @media (max-width: 1200px) {\n    font-size: 14px;\n  }\n  @media (max-width: 575px) {\n    font-size: 13px;\n  }\n"],Object(u.a)("fontSizes.3","15"),Object(u.a)("lineHeights.text","2"),Object(u.a)("fontWeights.3","400"),Object(u.a)("colors.textColor","#292929")),C=p.c.form.withConfig({displayName:"newsletterstyle__NewsletterInputWrapper",componentId:"sc-1gmrbp-4"})(["\n  display: flex;\n  align-items: flex-end;\n  width: 570px;\n  max-width: 100%;\n  margin-top: 90px;\n  min-height: 44px;\n  @media (max-width: 1200px) {\n    margin-top: 90px;\n  }\n  @media (max-width: 990px) {\n    margin-top: 70px;\n  }\n  @media (max-width: 575px) {\n    margin-top: 60px;\n    display: block;\n  }\n\n  .field-wrapper {\n    flex-grow: 1;\n    margin-right: 15px;\n    @media (max-width: 575px) {\n      margin-right: 0;\n      margin-bottom: 15px;\n    }\n    .inner-wrap {\n      input {\n        border-width: 0 0 1px 0;\n        border-color: ",";\n        background: transparent;\n      }\n    }\n  }\n  .button {\n    @media (max-width: 575px) {\n      width: 100%;\n      height: 42px;\n    }\n  }\n"],Object(u.a)("colors.textColor","#292929")),_=p.c.div.withConfig({displayName:"newsletterstyle__ErrorMessage",componentId:"sc-1gmrbp-5"})(["\n  width: 570px;\n  max-width: 100%;\n  margin-top: 10px;\n  text-align: justify;\n  font-size: 13px;\n\n  > span {\n    color: #d8000c;\n  }\n  a {\n    color: #d10068;\n  }\n"]),j=p.c.div.withConfig({displayName:"newsletterstyle__SuccessMessage",componentId:"sc-1gmrbp-6"})(["\n  font-size: 22px;\n  line-height: 1.7;\n  text-align: center;\n  width: 100%;\n\n  @media (max-width: 990px) {\n    font-size: 18px;\n  }\n  @media (max-width: 575px) {\n    font-size: 16px;\n  }\n"]),O=function(n){var e=Object.assign({},n),t=Object(i.useState)(""),o=t[0],r=t[1],p=Object(i.useState)(),l=p[0],d=p[1],s=Object(i.useState)(),c=s[0],u=s[1];return a.a.createElement(b,e,a.a.createElement(w,null,a.a.createElement(y,null,"Get The Best Of All Hands Delivered To Your Inbox"),a.a.createElement(v,null,"Subscribe to our newsletter and stay updated."),a.a.createElement(C,{onSubmit:function(n){n.preventDefault(),m()(o).then(function(n){var e=n.msg;if("success"!==n.result)throw e;d(e),u(""),r("")}).catch(function(n){u(n),d(""),r("")})}},l?a.a.createElement(j,null,l," 🙂"):a.a.createElement(a.a.Fragment,null,a.a.createElement(x.a,{type:"email",name:"email",placeholder:"Write your email here",onChange:function(n){r(n.target.value)},value:o,required:!0}),a.a.createElement(f.a,{title:"Subscribe",type:"submit"}))),c&&a.a.createElement(_,{dangerouslySetInnerHTML:{__html:"<span>*</span>"+c}})))},E=t(209),k=t(196),z=p.c.div.withConfig({displayName:"scrollUpButtonstyle__ScrollUpButtonWrapper",componentId:"qp9um-0"})(["\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  background-color: #f73b98;\n  color: #fff;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25);\n  transition: 0.15s ease-in-out;\n  @media (max-width: 767px) {\n    display: none;\n  }\n  &:hover {\n    background-color: ",";\n  }\n"],Object(u.a)("colors.primary","#D10068")),N=function(n){return a.a.createElement(z,n,a.a.createElement(k.l,null))},I=t(205),S={transparent:"transparent",black:"#292929",white:"#ffffff",textColor:"#292929",lightTextColor:"#757575",inactiveField:"#F7F7F7",inactiveColor:"#767676",inactiveBG:"#e6e6e6",borderColor:"#DBDBDB",lightBorderColor:"#ededed",primary:"#D10068",primaryHover:"#D10068",yellow:"#E5AD12"},D={breakpoints:[576,768,991,1220],space:[0,5,8,10,15,20,25,30,40,50,60,70,75,80,90,100,120],fontSizes:[10,12,14,15,16,18,24,30,36,48,80,96],fontWeights:[100,200,300,400,500,600,700,800,900],fontFamily:["'Fira Sans',sans-serif","'Poppins', sans-serif"],lineHeights:{normal:1,normalText:1.5,title:2,text:2},letterSpacings:{normal:"normal",tracked:"0.1em",tight:"-0.05em",mega:"0.25em"},borders:[0,"1px solid","2px solid","3px solid","4px solid","5px solid","6px solid"],radius:[3,4,5,10,20,30,60,120,"50%"],widths:[36,40,45,48,54,70,81,128,256],heights:[36,40,44,48,50,55,70,80,120,230],maxWidths:[16,32,64,128,256,512,768,1024,1536],colors:S,colorStyles:{primary:{color:S.primary,backgroundColor:S.primary,borderColor:S.primary,"&:hover":{backgroundColor:S.primaryHover,borderColor:S.primaryHover}}}};e.a=function(n){var e=n.children;return a.a.createElement(p.a,{theme:D},a.a.createElement(a.a.Fragment,null,a.a.createElement(I.a,null),a.a.createElement(r.a,{top:0,innerZ:9999,activeClass:"nav-sticky"},a.a.createElement(s.a,null)),e,a.a.createElement(O,null),a.a.createElement(E.a,null,"Copyright © ",(new Date).getFullYear(),a.a.createElement("a",{href:"https://redq.io/"}," RedQ, Inc.")),a.a.createElement(d.a,{showUnder:300,duration:700,easing:"easeInOutCubic",style:{bottom:30,right:20}},a.a.createElement(N,null))))}},213:function(n,e,t){var i=t(221)(function(n,e,t){return n+(t?"-":"")+e.toLowerCase()});n.exports=i},214:function(n,e){n.exports=function(n,e){for(var t=-1,i=null==n?0:n.length,a=Array(i);++t<i;)a[t]=e(n[t],t,n);return a}},221:function(n,e,t){t(14),t(194);var i=t(224),a=t(225),o=t(230),r=RegExp("['’]","g");n.exports=function(n){return function(e){return i(o(a(e).replace(r,"")),n,"")}}},224:function(n,e){n.exports=function(n,e,t,i){var a=-1,o=null==n?0:n.length;for(i&&o&&(t=n[++a]);++a<o;)t=e(t,n[a],a,n);return t}},225:function(n,e,t){t(14),t(194);var i=t(226),a=t(197),o=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,r=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");n.exports=function(n){return(n=a(n))&&n.replace(o,i).replace(r,"")}},226:function(n,e,t){var i=t(227)({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n",ſ:"s"});n.exports=i},227:function(n,e){n.exports=function(n){return function(e){return null==n?void 0:n[e]}}},228:function(n,e,t){t(59),t(13);var i=t(210),a=t(214),o=t(195),r=t(215),p=1/0,l=i?i.prototype:void 0,d=l?l.toString:void 0;n.exports=function n(e){if("string"==typeof e)return e;if(o(e))return a(e,n)+"";if(r(e))return d?d.call(e):"";var t=e+"";return"0"==t&&1/e==-p?"-0":t}},230:function(n,e,t){t(122);var i=t(231),a=t(232),o=t(197),r=t(233);n.exports=function(n,e,t){return n=o(n),void 0===(e=t?void 0:e)?a(n)?r(n):i(n):n.match(e)||[]}},231:function(n,e,t){t(122);var i=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;n.exports=function(n){return n.match(i)||[]}},232:function(n,e){var t=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;n.exports=function(n){return t.test(n)}},233:function(n,e,t){t(122),t(194);var i="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",a="["+i+"]",o="\\d+",r="[\\u2700-\\u27bf]",p="[a-z\\xdf-\\xf6\\xf8-\\xff]",l="[^\\ud800-\\udfff"+i+o+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",d="(?:\\ud83c[\\udde6-\\uddff]){2}",s="[\\ud800-\\udbff][\\udc00-\\udfff]",c="[A-Z\\xc0-\\xd6\\xd8-\\xde]",m="(?:"+p+"|"+l+")",x="(?:"+c+"|"+l+")",f="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",u="[\\ufe0e\\ufe0f]?"+f+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",d,s].join("|")+")[\\ufe0e\\ufe0f]?"+f+")*"),g="(?:"+[r,d,s].join("|")+")"+u,h=RegExp([c+"?"+p+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[a,c,"$"].join("|")+")",x+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[a,c+m,"$"].join("|")+")",c+"?"+m+"+(?:['’](?:d|ll|m|re|s|t|ve))?",c+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",o,g].join("|"),"g");n.exports=function(n){return n.match(h)||[]}},265:function(n,e,t){"use strict";t.d(e,"d",function(){return o}),t.d(e,"l",function(){return r}),t.d(e,"k",function(){return p}),t.d(e,"j",function(){return l}),t.d(e,"i",function(){return d}),t.d(e,"o",function(){return s}),t.d(e,"n",function(){return c}),t.d(e,"m",function(){return m}),t.d(e,"c",function(){return x}),t.d(e,"a",function(){return f}),t.d(e,"g",function(){return u}),t.d(e,"b",function(){return g}),t.d(e,"h",function(){return h}),t.d(e,"f",function(){return b}),t.d(e,"e",function(){return w});var i=t(191),a=t(192),o=i.c.div.withConfig({displayName:"templatesstyle__BlogPostsWrapper",componentId:"sc-13fskhe-0"})(["\n  margin: 0 auto;\n  padding: 120px 75px 0 75px;\n  position: relative;\n\n  @media (max-width: 1400px) {\n    padding: 120px 35px 0 35px;\n  }\n  @media (max-width: 990px) {\n    padding: 80px 25px 0 25px;\n  }\n  @media (max-width: 575px) {\n    padding: 60px 25px 0 25px;\n  }\n"]),r=i.c.div.withConfig({displayName:"templatesstyle__RelatedPostWrapper",componentId:"sc-13fskhe-1"})(["\n  margin: 0 auto;\n  padding-left: 75px;\n  padding-right: 75px;\n  @media (min-width: 1550px) {\n    width: 1500px;\n    padding-left: 0;\n    padding-right: 0;\n  }\n  @media (max-width: 990px) {\n    padding: 0 45px 0 45px;\n  }\n  @media (max-width: 575px) {\n    padding: 0 25px 0 25px;\n  }\n  .pagination {\n    margin-top: 80px;\n    @media (max-width: 1024px) {\n      margin-top: 60px;\n    }\n    @media (max-width: 575px) {\n      margin-top: 30px;\n    }\n  }\n"]),p=i.c.h2.withConfig({displayName:"templatesstyle__RelatedPostTitle",componentId:"sc-13fskhe-2"})(["\n  color: ",";\n  font-size: 16px;\n  font-weight: 500;\n  font-family: ",';\n  letter-spacing: 0.17em;\n  position: relative;\n  margin-bottom: 30px;\n\n  &:after {\n    content: "";\n    width: 68px;\n    height: 1px;\n    background: #292929;\n    display: block;\n    margin-top: 8px;\n  }\n'],Object(a.a)("colors.textColor","#292929"),Object(a.a)("fontFamily.0","'Fira Sans',sans-serif")),l=i.c.div.withConfig({displayName:"templatesstyle__RelatedPostItems",componentId:"sc-13fskhe-3"})(["\n  display: flex;\n  flex-wrap: wrap;\n  margin: 0 -15px;\n"]),d=i.c.div.withConfig({displayName:"templatesstyle__RelatedPostItem",componentId:"sc-13fskhe-4"})(["\n  flex: 0 0 33.333333333%;\n  max-width: 33.333333333%;\n  padding: 0 15px;\n  @media (max-width: 575px) {\n    flex: 0 0 100%;\n    max-width: 100%;\n    &:nth-child(n + 2) {\n      margin-top: 50px;\n    }\n  }\n  .post_card {\n    &:hover {\n      .post_preview {\n        a {\n          transform: scale(1.05);\n        }\n      }\n    }\n\n    .post_preview {\n      margin-bottom: 16px;\n      overflow: hidden;\n      a {\n        display: block;\n        transition: 0.25s ease-in-out;\n      }\n      &:before {\n        filter: blur(10px);\n      }\n    }\n    .post_title {\n      font-size: 21px;\n      a {\n        display: block;\n        white-space: nowrap;\n        width: 100%;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n\n      @media (max-width: 1400px) {\n        font-size: 19px;\n      }\n      @media (max-width: 1200px) {\n        font-size: 17px;\n      }\n      @media (max-width: 990px) {\n        font-size: 15px;\n      }\n    }\n    .post_content {\n      max-width: 100%;\n    }\n\n    .post_tags {\n      margin-top: 20px;\n      a {\n        @media (max-width: 990px) {\n          font-size: 12px;\n          margin-right: 15px;\n        }\n      }\n    }\n  }\n"]),s=i.c.div.withConfig({displayName:"templatesstyle__TagPostsWrapper",componentId:"sc-13fskhe-5"})(["\n  margin: 0 auto;\n  padding-top: 120px;\n  position: relative;\n  @media (min-width: 990px) {\n    width: 900px;\n  }\n  @media (min-width: 1200px) {\n    width: 1050px;\n  }\n  @media (min-width: 1400px) {\n    width: 1170px;\n  }\n  @media (max-width: 990px) {\n    padding: 80px 45px 30px 45px;\n  }\n  @media (max-width: 575px) {\n    padding: 60px 25px 0 25px;\n  }\n\n  .post_card {\n    margin-bottom: 120px;\n    &:last-child {\n      margin-bottom: 0;\n    }\n    @media (max-width: 990px) {\n      margin-bottom: 80px;\n    }\n    @media (max-width: 575px) {\n      margin-bottom: 60px;\n    }\n  }\n"]),c=i.c.div.withConfig({displayName:"templatesstyle__TagPageHeading",componentId:"sc-13fskhe-6"})(['\n  padding-left: 210px;\n  font-size: 15px;\n  font-weight: 400;\n  margin-bottom: 120px;\n  position: relative;\n  @media (max-width: 1200px) {\n    padding-left: 160px;\n  }\n  @media (max-width: 990px) {\n    padding-left: 0;\n    font-size: 13px;\n    margin-bottom: 80px;\n  }\n  @media (max-width: 575px) {\n    margin-bottom: 60px;\n  }\n\n  &:after {\n    content: "";\n    display: block;\n    width: 90px;\n    height: 1px;\n    background: #292929;\n    margin-top: 15px;\n  }\n']),m=i.c.h1.withConfig({displayName:"templatesstyle__TagName",componentId:"sc-13fskhe-7"})(["\n  font-size: 30px;\n  font-weight: 700;\n  color: ",";\n  margin-bottom: 8px;\n  @media (max-width: 990px) {\n    font-size: 26px;\n  }\n  @media (max-width: 575px) {\n    font-size: 22px;\n  }\n"],Object(a.a)("colors.primary","#D10068")),x=i.c.div.withConfig({displayName:"templatesstyle__BlogPostFooter",componentId:"sc-13fskhe-8"})(["\n  margin: 0 0 0 auto;\n  width: 58%;\n  max-width: 100%;\n  padding-top: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  @media (max-width: 990px) {\n    padding-top: 40px;\n    width: 100%;\n  }\n  &.center {\n    margin: 0 auto;\n  }\n"]),f=i.c.div.withConfig({displayName:"templatesstyle__BlogPostComment",componentId:"sc-13fskhe-9"})(["\n  margin: 0 0 0 auto;\n  width: 58%;\n  max-width: 100%;\n  padding-top: 80px;\n  @media (max-width: 990px) {\n    padding-top: 60px;\n    width: 100%;\n  }\n  &.center {\n    margin: 0 auto;\n  }\n"]),u=i.c.div.withConfig({displayName:"templatesstyle__PostShare",componentId:"sc-13fskhe-10"})(["\n  display: flex;\n  align-items: center;\n  > span {\n    flex-shrink: 0;\n  }\n  > div,\n  .SocialMediaShareButton {\n    cursor: pointer;\n    margin-left: 25px;\n    font-size: 22px;\n    outline: 0;\n    color: ",";\n    transition: 0.15s ease-in-out;\n    @media (max-width: 767px) {\n      font-size: 18px;\n      margin-left: 20px;\n    }\n    &:hover {\n      color: ",";\n    }\n    svg {\n      display: block;\n    }\n  }\n"],Object(a.a)("colors.textColor","#292929"),Object(a.a)("colors.primary","#D10068")),g=i.c.div.withConfig({displayName:"templatesstyle__BlogPostDetailsWrapper",componentId:"sc-13fskhe-11"})(["\n  margin: 0 auto;\n  padding: 90px 0 120px 0;\n  padding-left: 75px;\n  padding-right: 75px;\n  @media (min-width: 1550px) {\n    width: 1500px;\n    padding-left: 0;\n    padding-right: 0;\n  }\n  @media (max-width: 1199px) {\n    padding: 80px 35px 80px 35px;\n  }\n  @media (max-width: 575px) {\n    padding: 60px 25px 60px 25px;\n  }\n"]),h=i.c.div.withConfig({displayName:"templatesstyle__PostTags",componentId:"sc-13fskhe-12"})(["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  @media (max-width: 575px) {\n    display: none;\n  }\n\n  a {\n    display: block;\n    margin-right: 30px;\n    font-size: 14px;\n    font-weight: 400;\n    color: ",";\n    @media (max-width: 990px) {\n      font-size: 13px;\n      margin-right: 25px;\n    }\n  }\n"],Object(a.a)("primary","#D10068")),b=i.c.div.withConfig({displayName:"templatesstyle__PostRow",componentId:"sc-13fskhe-13"})(["\n  margin: 0 -15px;\n  @media (max-width: 990px) {\n    margin: 0 -10px;\n  }\n"]),w=i.c.div.withConfig({displayName:"templatesstyle__PostCol",componentId:"sc-13fskhe-14"})(["\n  margin-bottom: 50px;\n  width: 33.33333%;\n  float: left;\n  padding: 0 15px;\n  @media (max-width: 990px) {\n    padding: 0 10px;\n  }\n  @media (max-width: 767px) {\n    width: 50%;\n  }\n  @media (max-width: 575px) {\n    width: 100%;\n    margin-bottom: 40px;\n  }\n"])},337:function(n,e,t){"use strict";t(27),t(28),t(13),t(45),t(23);var i=t(213),a=t.n(i),o=t(0),r=t(193),p=t(200),l=t.n(p),d=t(191),s=t(192),c=d.c.div.withConfig({displayName:"postCardstyle__PostCardWrapper",componentId:"ptwm1o-0"})(["\n  position: relative;\n"]),m=d.c.div.withConfig({displayName:"postCardstyle__PostPreview",componentId:"ptwm1o-1"})(["\n  margin-bottom: 45px;\n  position: relative;\n  img {\n    border-radius: 3px;\n  }\n\n  &:before {\n    content: '';\n    position: absolute;\n    width: 80%;\n    height: 80%;\n    background-color: #757575;\n    bottom: 0;\n    left: 10%;\n    filter: blur(15px);\n  }\n"]),x=d.c.div.withConfig({displayName:"postCardstyle__PostDetails",componentId:"ptwm1o-2"})(["\n  display: flex;\n"]),f=d.c.div.withConfig({displayName:"postCardstyle__PostDate",componentId:"ptwm1o-3"})(["\n  font-size: 90px;\n  font-weight: 700;\n  text-align: center;\n  padding: 30px 35px 15px 35px;\n  margin-right: 20px;\n  line-height: 1;\n  color: ",";\n  @media (max-width: 1200px) {\n    font-size: 70px;\n    padding: 25px 25px 15px 25px;\n    margin-right: 35px;\n  }\n  @media (max-width: 990px) {\n    font-size: 56px;\n    padding: 20px 20px 15px 20px;\n    margin-right: 25px;\n  }\n  @media (max-width: 575px) {\n    display: none;\n  }\n\n  > span {\n    font-size: 13px;\n    font-weight: 400;\n    display: block;\n    margin-top: 12px;\n    text-transform: uppercase;\n  }\n"],Object(s.a)("colors.textColor","#292929")),u=d.c.div.withConfig({displayName:"postCardstyle__PostContent",componentId:"ptwm1o-4"})(["\n  align-self: center;\n"]),g=d.c.h2.withConfig({displayName:"postCardstyle__PostTitle",componentId:"ptwm1o-5"})(["\n  font-size: 30px;\n  font-weight: 700;\n  color: ",";\n  line-height: 1.53;\n  margin-bottom: 10px;\n  a {\n    color: ",";\n  }\n  @media (max-width: 1200px) {\n    font-size: 26px;\n  }\n  @media (max-width: 990px) {\n    font-size: 21px;\n    margin-bottom: 12px;\n  }\n  @media (max-width: 575px) {\n    font-size: 20px;\n    margin-bottom: 10px;\n  }\n"],Object(s.a)("colors.textColor","#292929"),Object(s.a)("colors.textColor","#292929")),h=d.c.p.withConfig({displayName:"postCardstyle__Excerpt",componentId:"ptwm1o-6"})(["\n  font-size: ","px;\n  color: ",";\n  font-weight: 400;\n  line-height: 2;\n  margin-bottom: 0;\n  @media (max-width: 990px) {\n    font-size: 14px;\n  }\n"],Object(s.a)("fontSizes.3","15"),Object(s.a)("textColor","#292929")),b=d.c.div.withConfig({displayName:"postCardstyle__PostTags",componentId:"ptwm1o-7"})(["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  margin-top: 15px;\n\n  a {\n    display: block;\n    margin-right: 30px;\n    font-size: 14px;\n    font-weight: 400;\n    color: ",";\n    @media (max-width: 990px) {\n      font-size: 13px;\n      margin-right: 25px;\n    }\n  }\n"],Object(s.a)("primary","#D10068"));var w=function(n){var e=n.image,t=n.title,i=n.description,p=n.url,d=n.date,s=n.tags,w=n.className,y=n.imageType,v=function(n,e){if(null==n)return{};var t,i,a={},o=Object.keys(n);for(i=0;i<o.length;i++)t=o[i],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,["image","title","description","url","date","tags","className","imageType"]),C=["post_card"];return w&&C.push(w),o.createElement(c,Object.assign({className:C.join(" ")},v),null==e?null:o.createElement(m,{className:"post_preview"},o.createElement(r.a,{to:p},"fluid"===y?o.createElement(l.a,{fluid:e,alt:"post preview"}):o.createElement(l.a,{fixed:e,alt:"post preview"}))),o.createElement(x,{className:"post_details"},d&&o.createElement(f,{dangerouslySetInnerHTML:{__html:d},className:"post_date"}),o.createElement(u,{className:"post_content"},o.createElement(g,{className:"post_title"},o.createElement(r.a,{to:p},t)),i&&o.createElement(h,{dangerouslySetInnerHTML:{__html:i},className:"excerpt"}),null==s?null:o.createElement(b,{className:"post_tags"},s.map(function(n,e){return o.createElement(r.a,{key:e,to:"/tags/"+a()(n)+"/"},"#"+n)})))))};w.defaultProps={imageType:"fluid"};e.a=w}}]);
//# sourceMappingURL=component---src-templates-tags-tsx-52aa6778d61e7a6c7d45.js.map