import{j as f}from"./jsx-runtime-94f6e698.js";import{_ as b}from"./extends-98964cd2.js";import{r as a}from"./index-8db94870.js";import{$ as I,a as $,b as M}from"./index.module-334a8208.js";import{$ as N}from"./index.module-e8b7515f.js";import{c as V}from"./index-45dcd4fb.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-8ce4a492.js";import"./index.module-a2311ee0.js";const R="Avatar",[j,se]=I(R),[F,z]=j(R),P=a.forwardRef((r,n)=>{const{__scopeAvatar:s,...e}=r,[t,o]=a.useState("idle");return a.createElement(F,{scope:s,imageLoadingStatus:t,onImageLoadingStatusChange:o},a.createElement($.span,b({},e,{ref:n})))}),G="AvatarImage",T=a.forwardRef((r,n)=>{const{__scopeAvatar:s,src:e,onLoadingStatusChange:t=()=>{},...o}=r,c=z(G,s),d=O(e),l=N(v=>{t(v),c.onImageLoadingStatusChange(v)});return M(()=>{d!=="idle"&&l(d)},[d,l]),d==="loaded"?a.createElement($.img,b({},o,{ref:n,src:e})):null}),B="AvatarFallback",K=a.forwardRef((r,n)=>{const{__scopeAvatar:s,delayMs:e,...t}=r,o=z(B,s),[c,d]=a.useState(e===void 0);return a.useEffect(()=>{if(e!==void 0){const l=window.setTimeout(()=>d(!0),e);return()=>window.clearTimeout(l)}},[e]),c&&o.imageLoadingStatus!=="loaded"?a.createElement($.span,b({},t,{ref:n})):null});function O(r){const[n,s]=a.useState("idle");return a.useEffect(()=>{if(!r){s("error");return}let e=!0;const t=new window.Image,o=c=>()=>{e&&s(c)};return s("loading"),t.onload=o("loaded"),t.onerror=o("error"),t.src=r,()=>{e=!1}},[r]),n}const D=P,H=T,J=K,Q=V(["rounded-lg block overflow-hidden"],{variants:{square:{true:["rounded-sm"]}},defaultVariants:{square:!1}}),g=a.forwardRef(({src:r,alt:n,square:s,fallback:e,size:t,...o},c)=>f.jsxs(D,{className:Q({square:s}),style:{width:t,height:t},...o,children:[f.jsx(H,{src:r,alt:n,ref:c,className:"w-full h-full object-cover block"}),f.jsx(J,{delayMs:1e3,className:"flex justify-center items-center h-full bg-fgSubtle",children:e})]}));try{g.displayName="Avatar",g.__docgenInfo={description:"",displayName:"Avatar",props:{square:{defaultValue:null,description:"",name:"square",required:!1,type:{name:"boolean | null"}},alt:{defaultValue:null,description:"",name:"alt",required:!0,type:{name:"string"}},src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"string"}},fallback:{defaultValue:null,description:"",name:"fallback",required:!0,type:{name:"string"}},fallbackColor:{defaultValue:null,description:"",name:"fallbackColor",required:!0,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}}}}}catch{}const oe={title:"Components/Avatar/Features",tags:["autodocs"],component:g},i={args:{square:!1,src:"https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",size:128}},m={args:{square:!0,src:"https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",size:128}},u={args:{size:64,src:"https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"}},p={args:{size:128,fallback:"RG",src:"https://example.com"}};var h,x,_;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    square: false,
    src: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
    size: 128
  }
}`,...(_=(x=i.parameters)==null?void 0:x.docs)==null?void 0:_.source}}};var S,A,q;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    square: true,
    src: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
    size: 128
  }
}`,...(q=(A=m.parameters)==null?void 0:A.docs)==null?void 0:q.source}}};var y,w,L;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    size: 64,
    src: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
  }
}`,...(L=(w=u.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};var E,k,C;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    size: 128,
    fallback: "RG",
    src: "https://example.com"
  }
}`,...(C=(k=p.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};const ne=["Rounded","Square","Size","Fallback"];export{p as Fallback,i as Rounded,u as Size,m as Square,ne as __namedExportsOrder,oe as default};
//# sourceMappingURL=avatar.features.stories-45056380.js.map
