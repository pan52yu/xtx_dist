import m from"./TopBanner-54955d0d.js";import{_ as d}from"./ResultCard.vue_vue_type_script_setup_true_lang-7b1401e8.js";import{d as c,u,g as f,r as v,o as M,c as S,a as e,b as o,h as l,p as g,f as x,_ as k}from"./index-c3035823.js";import{M as w}from"./MyFavorites-cc886267.js";import"./SearchTabs-7fa69b88.js";import"./search-4b9e88d3.js";import"./searchTabs-130e7859.js";import"./CardItem-63128896.js";import"./CardSkeleton.vue_vue_type_script_setup_true_lang-e7770926.js";import"./arrow-right-bold-c5e3c927.js";import"./arrow-left-bold-167d761d.js";const p=a=>(g("data-v-836a814d"),a=a(),x(),a),y={class:"result_body"},I={class:"body_l"},$=p(()=>o("div",{class:"loading_top"},[o("span",{class:"loader",style:{margin:"0 14px 0 28px",width:"20px",height:"20px"}}),l("正在全网实时搜索视频并入库  "),o("span",null,"22/99")],-1)),b={class:"see_more"},B={class:"body_r"},C={class:"loading_top"},R=p(()=>o("span",null,"9999",-1)),F={class:"see_more"},L=c({name:"SearchResults"}),N=c({...L,setup(a){const n=[];for(let t=0;t<9;t++){const s={url:`https://picsum.photos/id/${Math.floor(Math.random()*100)}/200/200`,title:`Title ${t+1}`,loading:t%2===0,avatar:`https://picsum.photos/id/${Math.floor(Math.random()*100)}/50/50`,name:`User ${t+1}`,dianzan:Math.floor(Math.random()*100),pinglun:Math.floor(Math.random()*100),zhuanfa:Math.floor(Math.random()*100),time:"2023-03-09 10:42:34",favoriteStatus:t%2===0,id:Math.floor(Math.random()*100)};n.push(s)}const r=u(),i=t=>{t==="network"?r.push("/networkSearch/network"):t==="station"&&r.push("/networkSearch/station")};return f(()=>{}),(t,s)=>{const _=v("FontIcon");return M(),S("div",null,[e(w),e(m),o("div",y,[o("div",I,[$,o("div",null,[e(d,{cardList:n,haveSkeleton:!0})]),o("div",b,[o("button",{onClick:s[0]||(s[0]=h=>i("network"))},"查看全部")])]),o("div",B,[o("div",C,[e(_,{style:{color:"#d9d9d9",margin:"0 14px 0 28px"},icon:"icon-duigou"}),l(" 正在从已入库视频中检索到  "),R]),o("div",null,[e(d,{cardList:n})]),o("div",F,[o("button",{onClick:s[1]||(s[1]=h=>i("station"))},"查看全部")])])])])}}});const J=k(N,[["__scopeId","data-v-836a814d"]]);export{J as default};