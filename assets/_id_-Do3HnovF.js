import{r as i,c as x,d as m,j as e,B as h,L as j,e as f}from"./index-guUD3b2W.js";import u from"./_...all_-G4T1LRVt.js";function p(){const[s,d]=i.useState(null),r=i.useRef(null),[o,a]=i.useState(!1),{id:n}=x();return i.useEffect(()=>{const t=m.find(l=>l.id===n);t&&(a(!1),d(t))},[n]),i.useEffect(()=>{const t=document.createElement("script");t.innerHTML="(adsbygoogle = window.adsbygoogle || []).push({});",document.body.appendChild(t)},[]),e.jsx(e.Fragment,{children:s?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex justify-center",children:e.jsx("div",{className:"text-left flex p-[25px] items-center justify-center rounded-md w-[62.5vw]",children:e.jsxs("div",{children:[e.jsxs("div",{className:"w-[62.5vw] h-[35vw] relative",ref:r,children:[o?e.jsx("iframe",{src:s.embed,className:"border-none absolute left-0 top-0 w-full h-[calc(100%-40px)] "}):e.jsx("div",{className:"absolute left-0 top-0 w-full h-[calc(100%-40px)] bg-[#061819] flex justify-center items-center text-center",children:e.jsxs("section",{children:[e.jsxs("div",{className:"hidden xl:block",children:[e.jsx("img",{src:s.image,className:"aspect-[5/3] rounded-xl h-40 mb-2 object-cover"}),e.jsxs("h2",{className:"text-xl flex items-center justify-center gap-2 mb-2",children:[e.jsx("img",{src:"/img/logo.png",className:"h-5 w-5"}),s.title]})]}),e.jsxs(h,{onClick:()=>{a(!0);const t=localStorage.getItem("play-history");let l=[];t&&(l=t.split(","));const c=l.indexOf(s.id);c>-1&&l.splice(c,1),l=[s.id,...l],localStorage.setItem("play-history",l.join(","))},children:[e.jsx("svg",{height:20,width:20,viewBox:"0 0 24 24",fill:"#fff",className:"mr-px",children:e.jsx("path",{d:"M8 5v14l11-7z"})}),"Play"]})]})}),e.jsxs("div",{className:"absolute bottom-0 w-full bg-[#091011] h-[40px] overflow-hidden left-0 inline-flex items-center text-sm",children:[e.jsxs("div",{className:"flex justify-between gap-[10px] items-center ml-[10px]",children:[e.jsx("img",{src:"/img/logo.png",height:25,width:25}),e.jsx("b",{children:s.title})]}),e.jsx("div",{className:"absolute right-0",children:e.jsx("button",{className:"bg-[rgba(0,0,0,0.5)] border-none text-white cursor-pointer transition-all duration-300 rounded-none w-[40px] h-[40px] hover:bg-[rgba(0,0,0,0.8)]",onClick:()=>{var t;document.fullscreenElement?document.exitFullscreen():(t=r.current)==null||t.requestFullscreen()},children:e.jsx("svg",{viewBox:"0 0 24 24",height:20,width:20,fill:"#fff",children:e.jsx("path",{d:"M7 14H5v5h5v-2H7zm-2-4h2V7h3V5H5zm12 7h-3v2h5v-5h-2zM14 5v2h3v3h2V5z"})})})})]})]}),e.jsxs("div",{className:"flex justify-between items-start p-[25px] bg-[#1e1f30]",children:[e.jsxs("div",{className:"w-1/2",children:[e.jsx("h2",{className:"font-bold text-2xl my-5",children:s.title}),e.jsx("br",{}),e.jsx(j,{to:`/?ref=${s.id}&type=gid`,children:e.jsx(f,{className:"text-xs",sx:{textTransform:"none",marginBottom:"25px",background:"linear-gradient(90deg, rgba(0,195,255,1) 0%, rgba(255,255,28,1) 100%)",borderRadius:"20px",color:"#0b1516",padding:"8px 14px !important",minWidth:"unset"},children:"Browse More"})}),e.jsx("br",{}),e.jsxs("div",{className:"mb-4",children:[e.jsx("b",{children:"Rating"}),": 10 ",e.jsx("br",{}),e.jsx("b",{children:"Developers"}),": ",s.developers," ",e.jsx("br",{}),e.jsx("b",{children:"Released"}),": ",s.released," ",e.jsx("br",{}),e.jsx("b",{children:"Technology"}),": ",s.technology," ",e.jsx("br",{})]}),e.jsx("hr",{className:"bg-[#0c0d14] rounded-[25px] h-[5px]"}),e.jsx("h3",{className:"text-lg my-4",children:"Description"}),e.jsx("p",{className:"text-[#bbb] text-sm",children:s.description})]}),e.jsx("div",{className:"w-1/2 flex justify-center items-center",children:e.jsx("ins",{className:"adsbygoogle block max-w-3/4 bg-[#0c0d14] rounded-md border-none shadow-xl","date-ad-client":"ca-pub-9319396643474304","data-ad-slot":"6536714452","data-ad-format":"auto","data-full-width-responsive":"true"})})]})]})})}),e.jsx("h2",{className:"text-xl mb-4",id:"browse-more",children:"Suggested games"}),e.jsx("p",{className:"text-[#bbb] text-sm",children:"This feature is currently under maintenance."})]}):e.jsx(e.Fragment,{children:e.jsx(u,{})})})}export{p as default};
