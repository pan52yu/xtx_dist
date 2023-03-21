import{a8 as L,j as f,au as ae,ak as ue,R as Q,x as U,ai as c,P as m,Z as le,Q as W,d as x,a9 as I,av as se,aw as N,ax as re,u as ie,ay as fe,V as de,as as R,Y as D,az as ce,ad as P,aA as me,A as he,K as pe,o as H,c as _,b as y,i as O}from"./index-c3035823.js";function ge(){const{$storage:t,$config:e}=L(),o=()=>{ae().multiTagsCache&&(!t.tags||t.tags.length===0)&&(t.tags=ue),t.locale||(t.locale={locale:(e==null?void 0:e.Locale)??"zh"},Q().locale.value=(e==null?void 0:e.Locale)??"zh"),t.layout||(t.layout={layout:(e==null?void 0:e.Layout)??"vertical",theme:(e==null?void 0:e.Theme)??"default",darkMode:(e==null?void 0:e.DarkMode)??!1,sidebarStatus:(e==null?void 0:e.SidebarStatus)??!0,epThemeColor:(e==null?void 0:e.EpThemeColor)??"#409EFF"}),t.configure||(t.configure={grey:(e==null?void 0:e.Grey)??!1,weak:(e==null?void 0:e.Weak)??!1,hideTabs:(e==null?void 0:e.HideTabs)??!1,showLogo:(e==null?void 0:e.ShowLogo)??!0,showModel:(e==null?void 0:e.ShowModel)??"smart",multiTagsCache:(e==null?void 0:e.MultiTagsCache)??!1})},n=f(()=>t==null?void 0:t.layout.layout),u=f(()=>t.layout);return{layout:n,layoutTheme:u,initStorage:o}}const ve=U({id:"pure-app",state:()=>{var t,e;return{sidebar:{opened:((t=c().getItem("responsive-layout"))==null?void 0:t.sidebarStatus)??m().SidebarStatus,withoutAnimation:!1,isClickCollapse:!1},layout:((e=c().getItem("responsive-layout"))==null?void 0:e.layout)??m().Layout,device:le()?"mobile":"desktop"}},getters:{getSidebarStatus(){return this.sidebar.opened},getDevice(){return this.device}},actions:{TOGGLE_SIDEBAR(t,e){const o=c().getItem("responsive-layout");t&&e?(this.sidebar.withoutAnimation=!0,this.sidebar.opened=!0,o.sidebarStatus=!0):!t&&e?(this.sidebar.withoutAnimation=!0,this.sidebar.opened=!1,o.sidebarStatus=!1):!t&&!e&&(this.sidebar.withoutAnimation=!1,this.sidebar.opened=!this.sidebar.opened,this.sidebar.isClickCollapse=!this.sidebar.opened,o.sidebarStatus=this.sidebar.opened),c().setItem("responsive-layout",o)},async toggleSideBar(t,e){await this.TOGGLE_SIDEBAR(t,e)},toggleDevice(t){this.device=t},setLayout(t){this.layout=t}}});function be(){return ve(W)}const Te=U({id:"pure-epTheme",state:()=>{var t,e;return{epThemeColor:((t=c().getItem("responsive-layout"))==null?void 0:t.epThemeColor)??m().EpThemeColor,epTheme:((e=c().getItem("responsive-layout"))==null?void 0:e.theme)??m().Theme}},getters:{getEpThemeColor(){return this.epThemeColor},fill(){return this.epTheme==="light"?"#409eff":this.epTheme==="yellow"?"#d25f00":"#fff"}},actions:{setEpThemeColor(t){const e=c().getItem("responsive-layout");this.epTheme=e==null?void 0:e.theme,this.epThemeColor=t,e&&(e.epThemeColor=t,c().setItem("responsive-layout",e))}}});function C(){return Te(W)}function je(t,e){const o=/^IF-/;if(o.test(t)){const n=t.split(o)[1],u=n.slice(0,n.indexOf(" ")==-1?n.length:n.indexOf(" ")),r=n.slice(n.indexOf(" ")+1,n.length);return x({name:"FontIcon",render(){return I(se,{icon:u,iconType:r,...e})}})}else return typeof t=="function"||typeof(t==null?void 0:t.render)=="function"?t:typeof t=="object"?x({name:"OfflineIcon",render(){return I(N,{icon:t,...e})}}):x({name:"Icon",render(){const n=t&&t.includes(":")?re:N;return I(n,{icon:t,...e})}})}const j="当前路由配置不正确，请检查配置";function ye(){var E;const t=be(),e=ie().options.routes,{wholeMenus:o}=fe(de()),n=((E=m())==null?void 0:E.TooltipEffect)??"light",u=f(()=>({width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",overflow:"hidden"})),r=f(()=>{var a;return(a=R())==null?void 0:a.username}),d=f(()=>(a,i)=>({background:a===i?C().epThemeColor:"",color:a===i?"#f4f4f5":"#000"})),g=f(()=>(a,i)=>a===i?"":"dark:hover:!text-primary"),h=f(()=>r.value?{marginRight:"10px"}:""),M=f(()=>!t.getSidebarStatus),$=f(()=>t.getDevice),{$storage:l,$config:s}=L(),p=f(()=>{var a;return(a=l==null?void 0:l.layout)==null?void 0:a.layout}),B=f(()=>s.Title);function w(a){const i=m().Title;i?document.title=`${D(a.title)} | ${i}`:document.title=D(a.title)}function Z(){R().logOut()}function q(){ce.push("/welcome")}function J(){P.emit("openPanel")}function X(){t.toggleSideBar()}function ee(a){a==null||a.handleResize()}function te(a){var T;if(!a.children)return console.error(j);const i=/^http(s?):\/\//,v=(T=a.children[0])==null?void 0:T.path;return i.test(v)?a.path+"/"+v:v}function ne(a,i){if(o.value.length===0||oe(a))return;let v="";const T=a.lastIndexOf("/");T>0&&(v=a.slice(0,T));function S(k,z){return z?z.map(b=>{b.path===k?b.redirect?S(b.redirect,b.children):P.emit("changLayoutRoute",{indexPath:k,parentPath:v}):b.children&&S(k,b.children)}):console.error(j)}S(a,i)}function oe(a){return me.includes(a)}return{title:B,device:$,layout:p,logout:Z,routers:e,$storage:l,backHome:q,onPanel:J,getDivStyle:u,changeTitle:w,toggleSideBar:X,menuSelect:ne,handleResize:ee,resolvePath:te,isCollapse:M,pureApp:t,username:r,avatarsStyle:h,tooltipEffect:n,getDropdownItemStyle:d,getDropdownItemClass:g}}function Fe(t){const{$storage:e,changeTitle:o,handleResize:n}=ye(),{locale:u,t:r}=Q(),d=he();function g(){e.locale={locale:"zh"},u.value="zh",t&&n(t.value)}function h(){e.locale={locale:"en"},u.value="en",t&&n(t.value)}return pe(()=>u.value,()=>{o(d.meta)}),{t:r,route:d,locale:u,translationCh:g,translationEn:h}}const $e={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em","aria-hidden":"true",class:"globalization",viewBox:"0 0 512 512"},Ce=y("path",{fill:"currentColor",d:"m478.33 433.6-90-218a22 22 0 0 0-40.67 0l-90 218a22 22 0 1 0 40.67 16.79L316.66 406h102.67l18.33 44.39A22 22 0 0 0 458 464a22 22 0 0 0 20.32-30.4zM334.83 362 368 281.65 401.17 362zm-66.99-19.08a22 22 0 0 0-4.89-30.7c-.2-.15-15-11.13-36.49-34.73 39.65-53.68 62.11-114.75 71.27-143.49H330a22 22 0 0 0 0-44H214V70a22 22 0 0 0-44 0v20H54a22 22 0 0 0 0 44h197.25c-9.52 26.95-27.05 69.5-53.79 108.36-31.41-41.68-43.08-68.65-43.17-68.87a22 22 0 0 0-40.58 17c.58 1.38 14.55 34.23 52.86 83.93.92 1.19 1.83 2.35 2.74 3.51-39.24 44.35-77.74 71.86-93.85 80.74a22 22 0 1 0 21.07 38.63c2.16-1.18 48.6-26.89 101.63-85.59 22.52 24.08 38 35.44 38.93 36.1a22 22 0 0 0 30.75-4.9z"},null,-1),Me=[Ce];function Be(t,e){return H(),_("svg",$e,Me)}const Ge={render:Be},Ve={width:1024,height:1024,body:'<path fill="currentColor" d="M406.656 706.944L195.84 496.256a32 32 0 1 0-45.248 45.248l256 256l512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z"/>'},A={outputDir:"",defaultScopeName:"",includeStyleWithColors:[],extract:!0,themeLinkTagId:"theme-link-tag",themeLinkTagInjectTo:"head",removeCssScopeName:!1,customThemeCssFileName:null,arbitraryMode:!1,defaultPrimaryColor:"",customThemeOutputPath:"/Users/huyu/chenghui/pure-admin-thin/node_modules/.pnpm/@pureadmin+theme@3.0.0/node_modules/@pureadmin/theme/setCustomTheme.js",styleTagId:"custom-theme-tagid",InjectDefaultStyleTagToHtml:!0,hueDiffControls:{low:0,high:0},multipleScopeVars:[{scopeName:"layout-theme-default",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #1F6BDF !default;
        $menuHover: #4091f7 !default;
        $subMenuBg: #0f0303 !default;
        $subMenuActiveBg: #4091f7 !default;
        $menuText: rgb(254 254 254 / 65%) !default;
        $sidebarLogo: #002140 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #4091f7 !default;
      `},{scopeName:"layout-theme-light",varsContent:`
        $subMenuActiveText: #409eff !default;
        $menuBg: #fff !default;
        $menuHover: #e0ebf6 !default;
        $subMenuBg: #fff !default;
        $subMenuActiveBg: #e0ebf6 !default;
        $menuText: #7a80b4 !default;
        $sidebarLogo: #fff !default;
        $menuTitleHover: #000 !default;
        $menuActiveBefore: #4091f7 !default;
      `},{scopeName:"layout-theme-dusk",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #2a0608 !default;
        $menuHover: #e13c39 !default;
        $subMenuBg: #000 !default;
        $subMenuActiveBg: #e13c39 !default;
        $menuText: rgb(254 254 254 / 65.1%) !default;
        $sidebarLogo: #42090c !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #e13c39 !default;
      `},{scopeName:"layout-theme-volcano",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #2b0e05 !default;
        $menuHover: #e85f33 !default;
        $subMenuBg: #0f0603 !default;
        $subMenuActiveBg: #e85f33 !default;
        $menuText: rgb(254 254 254 / 65%) !default;
        $sidebarLogo: #441708 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #e85f33 !default;
      `},{scopeName:"layout-theme-yellow",varsContent:`
        $subMenuActiveText: #d25f00 !default;
        $menuBg: #2b2503 !default;
        $menuHover: #f6da4d !default;
        $subMenuBg: #0f0603 !default;
        $subMenuActiveBg: #f6da4d !default;
        $menuText: rgb(254 254 254 / 65%) !default;
        $sidebarLogo: #443b05 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #f6da4d !default;
      `},{scopeName:"layout-theme-mingQing",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #032121 !default;
        $menuHover: #59bfc1 !default;
        $subMenuBg: #000 !default;
        $subMenuActiveBg: #59bfc1 !default;
        $menuText: #7a80b4 !default;
        $sidebarLogo: #053434 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #59bfc1 !default;
      `},{scopeName:"layout-theme-auroraGreen",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #0b1e15 !default;
        $menuHover: #60ac80 !default;
        $subMenuBg: #000 !default;
        $subMenuActiveBg: #60ac80 !default;
        $menuText: #7a80b4 !default;
        $sidebarLogo: #112f21 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #60ac80 !default;
      `},{scopeName:"layout-theme-pink",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #28081a !default;
        $menuHover: #d84493 !default;
        $subMenuBg: #000 !default;
        $subMenuActiveBg: #d84493 !default;
        $menuText: #7a80b4 !default;
        $sidebarLogo: #3f0d29 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #d84493 !default;
      `},{scopeName:"layout-theme-saucePurple",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #130824 !default;
        $menuHover: #693ac9 !default;
        $subMenuBg: #000 !default;
        $subMenuActiveBg: #693ac9 !default;
        $menuText: #7a80b4 !default;
        $sidebarLogo: #1f0c38 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #693ac9 !default;
      `}]},we="/",Se="assets";function K(t){let e=t.replace("#","").match(/../g);for(let o=0;o<3;o++)e[o]=parseInt(e[o],16);return e}function Y(t,e,o){let n=[t.toString(16),e.toString(16),o.toString(16)];for(let u=0;u<3;u++)n[u].length==1&&(n[u]=`0${n[u]}`);return`#${n.join("")}`}function ke(t,e){let o=K(t);for(let n=0;n<3;n++)o[n]=Math.floor(o[n]*(1-e));return Y(o[0],o[1],o[2])}function xe(t,e){let o=K(t);for(let n=0;n<3;n++)o[n]=Math.floor((255-o[n])*e+o[n]);return Y(o[0],o[1],o[2])}function F(t){return`(^${t}\\s+|\\s+${t}\\s+|\\s+${t}$|^${t}$)`}function G({scopeName:t,multipleScopeVars:e}){const o=Array.isArray(e)&&e.length?e:A.multipleScopeVars;let n=document.documentElement.className;new RegExp(F(t)).test(n)||(o.forEach(u=>{n=n.replace(new RegExp(F(u.scopeName),"g"),` ${t} `)}),document.documentElement.className=n.replace(/(^\s+|\s+$)/g,""))}function V({id:t,href:e}){const o=document.createElement("link");return o.rel="stylesheet",o.href=e,o.id=t,o}function Ie(t){const e={scopeName:"theme-default",customLinkHref:r=>r,...t},o=e.themeLinkTagId||A.themeLinkTagId;let n=document.getElementById(o);const u=e.customLinkHref(`${we.replace(/\/$/,"")}${`/${Se}/${e.scopeName}.css`.replace(/\/+(?=\/)/g,"")}`);if(n){n.id=`${o}_old`;const r=V({id:o,href:u});n.nextSibling?n.parentNode.insertBefore(r,n.nextSibling):n.parentNode.appendChild(r),r.onload=()=>{setTimeout(()=>{n.parentNode.removeChild(n),n=null},60),G(e)};return}n=V({id:o,href:u}),G(e),document[(e.themeLinkTagInjectTo||A.themeLinkTagInjectTo||"").replace("-prepend","")].appendChild(n)}function Qe(){var $;const{layoutTheme:t,layout:e}=ge(),o=O([{color:"#1b2a47",themeColor:"default"},{color:"#ffffff",themeColor:"light"},{color:"#f5222d",themeColor:"dusk"},{color:"#fa541c",themeColor:"volcano"},{color:"#fadb14",themeColor:"yellow"},{color:"#13c2c2",themeColor:"mingQing"},{color:"#52c41a",themeColor:"auroraGreen"},{color:"#eb2f96",themeColor:"pink"},{color:"#722ed1",themeColor:"saucePurple"}]),{$storage:n}=L(),u=O(($=n==null?void 0:n.layout)==null?void 0:$.darkMode),r=document.documentElement;function d(l=m().Theme??"default"){var s,p;if(t.value.theme=l,Ie({scopeName:`layout-theme-${l}`}),n.layout={layout:e.value,theme:l,darkMode:u.value,sidebarStatus:(s=n.layout)==null?void 0:s.sidebarStatus,epThemeColor:(p=n.layout)==null?void 0:p.epThemeColor},l==="default"||l==="light")h(m().EpThemeColor);else{const B=o.value.find(w=>w.themeColor===l);h(B.color)}}function g(l,s,p){document.documentElement.style.setProperty(`--el-color-primary-${l}-${s}`,u.value?ke(p,s/10):xe(p,s/10))}const h=l=>{C().setEpThemeColor(l),document.documentElement.style.setProperty("--el-color-primary",l);for(let s=1;s<=2;s++)g("dark",s,l);for(let s=1;s<=9;s++)g("light",s,l)};function M(){C().epTheme==="light"&&u.value?d("default"):d(C().epTheme),u.value?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")}return{body:r,dataTheme:u,layoutTheme:t,themeColors:o,dataThemeChange:M,setEpThemeColor:h,setLayoutThemeColor:d}}const Ae={xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24"},Le=y("path",{fill:"none",d:"M0 0h24v24H0z"},null,-1),He=y("path",{d:"M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85 1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z"},null,-1),_e=[Le,He];function Ee(t,e){return H(),_("svg",Ae,_e)}const Ue={render:Ee},ze={xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24"},Ne=y("path",{fill:"none",d:"M0 0h24v24H0z"},null,-1),Re=y("path",{d:"M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981z"},null,-1),De=[Ne,Re];function Pe(t,e){return H(),_("svg",ze,De)}const We={render:Pe};export{je as a,ye as b,Fe as c,Ve as d,Qe as e,be as f,Ge as g,Ue as h,We as i,ge as j,Ie as t,C as u};
