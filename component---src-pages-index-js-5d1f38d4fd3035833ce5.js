"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[678],{3204:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,n=/^[\p{Lu}](?![\p{Lu}])/gu,i=/([\p{Alpha}\p{N}_]|$)/u,r=/[_.\- ]+/,o=new RegExp("^"+r.source),l=new RegExp(r.source+i.source,"gu"),s=new RegExp("\\d+"+i.source,"gu"),c=(e,i)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(i={pascalCase:!1,preserveConsecutiveUppercase:!1,...i},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const r=!1===i.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(i.locale),c=!1===i.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(i.locale);if(1===e.length)return i.pascalCase?c(e):r(e);return e!==r(e)&&(e=((e,n,i)=>{let r=!1,o=!1,l=!1;for(let s=0;s<e.length;s++){const c=e[s];r&&t.test(c)?(e=e.slice(0,s)+"-"+e.slice(s),r=!1,l=o,o=!0,s++):o&&l&&a.test(c)?(e=e.slice(0,s-1)+"-"+e.slice(s-1),l=o,o=!1,r=!0):(r=n(c)===c&&i(c)!==c,l=o,o=i(c)===c&&n(c)!==c)}return e})(e,r,c)),e=e.replace(o,""),e=i.preserveConsecutiveUppercase?((e,t)=>(n.lastIndex=0,e.replace(n,(e=>t(e)))))(e,r):r(e),i.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(l.lastIndex=0,s.lastIndex=0,e.replace(l,((e,a)=>t(a))).replace(s,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},8032:function(e,t,a){a.d(t,{G:function(){return j},L:function(){return g},M:function(){return E},P:function(){return x},_:function(){return l},a:function(){return o},b:function(){return d},g:function(){return m},h:function(){return s}});var n=a(7294),i=(a(3204),a(5697)),r=a.n(i);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t.indexOf(a=r[n])>=0||(i[a]=e[a]);return i}const s=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a){const n={};let i="gatsby-image-wrapper";return"fixed"===a?(n.width=e,n.height=t):"constrained"===a&&(i="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:i,"data-gatsby-image-wrapper":"",style:n}}function d(e,t,a,n,i){return void 0===i&&(i={}),o({},a,{loading:n,shouldLoad:e,"data-main-image":"",style:o({},i,{opacity:t?1:0})})}function m(e,t,a,n,i,r,l,s){const c={};r&&(c.backgroundColor=r,"fixed"===a?(c.width=n,c.height=i,c.backgroundColor=r,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),l&&(c.objectFit=l),s&&(c.objectPosition=s);const d=o({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:o({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const p=["children"],u=function(e){let{layout:t,width:a,height:i}=e;return"fullWidth"===t?n.createElement("div",{"aria-hidden":!0,style:{paddingTop:i/a*100+"%"}}):"constrained"===t?n.createElement("div",{style:{maxWidth:a,display:"block"}},n.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+i+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){let{children:t}=e,a=l(e,p);return n.createElement(n.Fragment,null,n.createElement(u,o({},a)),t,null)},f=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],y=function(e){let{src:t,srcSet:a,loading:i,alt:r="",shouldLoad:s}=e,c=l(e,f);return n.createElement("img",o({},c,{decoding:"async",loading:i,src:s?t:void 0,"data-src":s?void 0:t,srcSet:s?a:void 0,"data-srcset":s?void 0:a,alt:r}))},w=function(e){let{fallback:t,sources:a=[],shouldLoad:i=!0}=e,r=l(e,h);const s=r.sizes||(null==t?void 0:t.sizes),c=n.createElement(y,o({},r,t,{sizes:s,shouldLoad:i}));return a.length?n.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:r}=e;return n.createElement("source",{key:t+"-"+r+"-"+a,type:r,media:t,srcSet:i?a:void 0,"data-srcset":i?void 0:a,sizes:s})})),c):c};var v;y.propTypes={src:i.string.isRequired,alt:i.string.isRequired,sizes:i.string,srcSet:i.string,shouldLoad:i.bool},w.displayName="Picture",w.propTypes={alt:i.string.isRequired,shouldLoad:i.bool,fallback:i.exact({src:i.string.isRequired,srcSet:i.string,sizes:i.string}),sources:i.arrayOf(i.oneOfType([i.exact({media:i.string.isRequired,type:i.string,sizes:i.string,srcSet:i.string.isRequired}),i.exact({media:i.string,type:i.string.isRequired,sizes:i.string,srcSet:i.string.isRequired})]))};const b=["fallback"],x=function(e){let{fallback:t}=e,a=l(e,b);return t?n.createElement(w,o({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):n.createElement("div",o({},a))};x.displayName="Placeholder",x.propTypes={fallback:i.string,sources:null==(v=w.propTypes)?void 0:v.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const E=function(e){return n.createElement(n.Fragment,null,n.createElement(w,o({},e)),n.createElement("noscript",null,n.createElement(w,o({},e,{shouldLoad:!0}))))};E.displayName="MainImage",E.propTypes=w.propTypes;const _=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],C=["style","className"],I=e=>e.replace(/\n/g,""),k=function(e,t,a){for(var n=arguments.length,i=new Array(n>3?n-3:0),o=3;o<n;o++)i[o-3]=arguments[o];return e.alt||""===e.alt?r().string.apply(r(),[e,t,a].concat(i)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},N={image:r().object.isRequired,alt:k},T=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],S=["style","className"],L=new Set;let z,O;const q=function(e){let{as:t="div",image:i,style:r,backgroundColor:d,className:m,class:p,onStartLoad:u,onLoad:g,onError:f}=e,h=l(e,T);const{width:y,height:w,layout:v}=i,b=c(y,w,v),{style:x,className:E}=b,_=l(b,S),C=(0,n.useRef)(),I=(0,n.useMemo)((()=>JSON.stringify(i.images)),[i.images]);p&&(m=p);const k=function(e,t,a){let n="";return"fullWidth"===e&&(n='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(n='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+a+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),n}(v,y,w);return(0,n.useEffect)((()=>{z||(z=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return O=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=C.current.querySelector("[data-gatsby-image-ssr]");if(e&&s())return e.complete?(null==u||u({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==u||u({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void L.add(I);if(O&&L.has(I))return;let t,n;return z.then((e=>{let{renderImageToString:a,swapPlaceholderImage:l}=e;C.current&&(C.current.innerHTML=a(o({isLoading:!0,isLoaded:L.has(I),image:i},h)),L.has(I)||(t=requestAnimationFrame((()=>{C.current&&(n=l(C.current,I,L,r,u,g,f))}))))})),()=>{t&&cancelAnimationFrame(t),n&&n()}}),[i]),(0,n.useLayoutEffect)((()=>{L.has(I)&&O&&(C.current.innerHTML=O(o({isLoading:L.has(I),isLoaded:L.has(I),image:i},h)),null==u||u({wasCached:!0}),null==g||g({wasCached:!0}))}),[i]),(0,n.createElement)(t,o({},_,{style:o({},x,r,{backgroundColor:d}),className:E+(m?" "+m:""),ref:C,dangerouslySetInnerHTML:{__html:k},suppressHydrationWarning:!0}))},j=(0,n.memo)((function(e){return e.image?(0,n.createElement)(q,e):null}));j.propTypes=N,j.displayName="GatsbyImage";const P=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function H(e){return function(t){let{src:a,__imageData:i,__error:r}=t,s=l(t,P);return r&&console.warn(r),i?n.createElement(e,o({image:i},s)):(console.warn("Image not loaded",a),null)}}const W=H((function(e){let{as:t="div",className:a,class:i,style:r,image:s,loading:p="lazy",imgClassName:u,imgStyle:f,backgroundColor:h,objectFit:y,objectPosition:w}=e,v=l(e,_);if(!s)return console.warn("[gatsby-plugin-image] Missing image prop"),null;i&&(a=i),f=o({objectFit:y,objectPosition:w,backgroundColor:h},f);const{width:b,height:k,layout:N,images:T,placeholder:S,backgroundColor:L}=s,z=c(b,k,N),{style:O,className:q}=z,j=l(z,C),P={fallback:void 0,sources:[]};return T.fallback&&(P.fallback=o({},T.fallback,{srcSet:T.fallback.srcSet?I(T.fallback.srcSet):void 0})),T.sources&&(P.sources=T.sources.map((e=>o({},e,{srcSet:I(e.srcSet)})))),n.createElement(t,o({},j,{style:o({},O,r,{backgroundColor:h}),className:q+(a?" "+a:"")}),n.createElement(g,{layout:N,width:b,height:k},n.createElement(x,o({},m(S,!1,N,b,k,L,y,w))),n.createElement(E,o({"data-gatsby-image-ssr":"",className:u},v,d("eager"===p,!1,P,p,f)))))})),F=function(e,t){for(var a=arguments.length,n=new Array(a>2?a-2:0),i=2;i<a;i++)n[i-2]=arguments[i];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?r().number.apply(r(),[e,t].concat(n)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},R=new Set(["fixed","fullWidth","constrained"]),A={src:r().string.isRequired,alt:k,width:F,height:F,sizes:r().string,layout:e=>{if(void 0!==e.layout&&!R.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};W.displayName="StaticImage",W.propTypes=A;const D=H(j);D.displayName="StaticImage",D.propTypes=A},7307:function(e,t,a){a.r(t),a.d(t,{Head:function(){return oe},default:function(){return le}});var n=a(7294),i=a(9357),r=a(868),o=a(2788),l=a(6434),s=a.p+"static/travel-bg-sun-3-eedd7c0e869936663a8c3982dcf25789.mp4";var c=()=>n.createElement(d,null,n.createElement(m,null,n.createElement(p,{src:s,type:"video/mp4",autoPlay:!0,loop:!0,muted:!0,playsInline:!0})),n.createElement(u,null,n.createElement(g,null,n.createElement(f,null,"Unreal Destinations"),n.createElement(h,null,"Out of this world"),n.createElement(l.z,{primary:"true",big:"true",round:"true",to:"/"},"Travel Now"))));const d=o.default.div.withConfig({displayName:"hero__HeroContainter",componentId:"sc-ahkmwi-0"})(['background:#0C0C0C;color:#fff;display:flex;justify-content:center;align-items:center;height:100vh;padding:0 1rem;position:relative;margin-top:-80px;:before{content:"";position:absolute;top:0;bottom:0;right:0;left:0;z-index:2;background:linear-gradient( 180deg,rgba(0,0,0,0.2) 0%,rgba(0,0,0,0.6) 100% ),linear-gradient(180deg,rgba(0,0,0,0.2) 0%,transparent 100%);}']),m=o.default.div.withConfig({displayName:"hero__HeroBg",componentId:"sc-ahkmwi-1"})(["position:absolute;top:0;bottom:0;right:0;left:0;width:100%;height:100%;overflow:hidden;"]),p=o.default.video.withConfig({displayName:"hero__VideoBg",componentId:"sc-ahkmwi-2"})(["width:100%;height:100%;-o-object-fit:cover;object-fit:cover;"]),u=o.default.div.withConfig({displayName:"hero__HeroContent",componentId:"sc-ahkmwi-3"})(["z-index:3;height:calc(100vh - 80px);max-height:100%;padding:0rem calc((100vw - 1300px) / 2)"]),g=o.default.div.withConfig({displayName:"hero__HeroItems",componentId:"sc-ahkmwi-4"})(["display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;height:100vh;max-height:100%;padding:0;color:#fff;line-height:1.1;font-weight:bold;"]),f=o.default.h1.withConfig({displayName:"hero__HeroH1",componentId:"sc-ahkmwi-5"})(["font-size:clamp(1.5rem,6vw,4rem);margin-bottom:1.5rem;letter-spacing:2px;padding:0 1rem;"]),h=o.default.p.withConfig({displayName:"hero__HeroP",componentId:"sc-ahkmwi-6"})(["font-size:clamp(1rem,3vw,3rem);margin-bottom:2rem;font-weight:400;"]);var y=a(1883),w=a(8032),v=a(5434);var b=e=>{let{heading:t,id:a}=e;const i=(0,y.useStaticQuery)("1501261991");return n.createElement(x,{id:a},n.createElement(E,null,t),n.createElement(_,null,function(e){const t=[];return e.allTripsJson.edges.forEach(((e,a)=>{t.push(n.createElement(C,{key:a},n.createElement(I,{image:e.node.imagesLink.childImageSharp.gatsbyImageData,alt:e.node.alt}),n.createElement(k,null,n.createElement(N,null,n.createElement(v.NK0,null),n.createElement(T,null,e.node.name)),n.createElement(S,{primary:"true",round:"true"},e.node.button))))})),t}(i)))};const x=o.default.div.withConfig({displayName:"Trips__ProductContainer",componentId:"sc-pmsm8x-0"})(["padding:5rem max(calc((100vw - 1500px) / 2),10px);background:#fff;coloc #fff;"]),E=o.default.div.withConfig({displayName:"Trips__ProductHeading",componentId:"sc-pmsm8x-1"})(["font-size:clamp(1.2rem,5vw,3rem);text-align:center;margin-bottom:5rem;color:#000;"]),_=o.default.div.withConfig({displayName:"Trips__ProductWrapper",componentId:"sc-pmsm8x-2"})(["display:grid;grid-template-columns:repeat(4,1fr);grid-gap:10px;row-gap:10px;justify-items:center;padding:0 2rem;@media screen and (max-width:1200px){grid-template-columns:1fr 1fr;}@media screen and (max-width:760px){grid-template-columns:1fr;}"]),C=o.default.div.withConfig({displayName:"Trips__ProductCard",componentId:"sc-pmsm8x-3"})(["line-eight:2;width:100%;height:500px;position:relative;border-radius:10px;transition:0.2s esse;"]),I=(0,o.default)(w.G).withConfig({displayName:"Trips__ProductImg",componentId:"sc-pmsm8x-4"})(["height:100%;max-width:100%;position:absolute;border-radius:10px;filter:brightness(75%);trasition:0.4s cubic-bezier(0.075,0.02,0.165,1);&:hover{filter:brightness(100%);}"]),k=o.default.div.withConfig({displayName:"Trips__ProductInfo",componentId:"sc-pmsm8x-5"})(["display:flex;flex-direction:column;align-items:flex-start;padding:0 2rem;@media screen and (max-width:280px){padding:0 1rem;}"]),N=o.default.div.withConfig({displayName:"Trips__TextWrap",componentId:"sc-pmsm8x-6"})(["display:flex;align-items:center;position:absolute;top:375px;color:#fff;"]),T=o.default.div.withConfig({displayName:"Trips__ProductTitle",componentId:"sc-pmsm8x-7"})(["font-weight:500;font-size:1.2rem;margin-left:0.5rem;"]);var S=(0,o.default)(l.z).withConfig({displayName:"Trips___StyledButton",componentId:"sc-pmsm8x-8"})(["position:absolute;top:420px;font-size:14px;"]),L=a(9583),z=a(1649);var O=()=>{const e=(0,y.useStaticQuery)("3393796131");return n.createElement(q,null,n.createElement(j,null,"Testimonials"),n.createElement(P,null,"What People are Saying"),n.createElement(H,null,n.createElement(W,null,n.createElement(F,null,n.createElement(D,null),n.createElement("h3",null,"Anna Parker"),n.createElement("p",null,"Ocean Holidays in Bali exceeded all my expectations! From the moment I arrived, I was impressed with the warm hospitality of the staff and the stunning ocean views. The accommodations were luxurious and comfortable, and the food was exceptional. The activities, such as surfing and yoga, were top-notch and tailored to my skill level. I would highly recommend Ocean Holidays to anyone looking for a rejuvenating and unforgettable vacation in Bali.")),n.createElement(F,null,n.createElement(M,null),n.createElement("h3",null,"Lisa Griffin"),n.createElement("p",null,"Traveling to the Nord Thailand was a thrilling and eye-opening experience for me. My trip was made even more special by the wonderful people I met along the way, including my guide, Kanya. She showed me hidden gems that I would have never discovered on my own, and her knowledge of the local culture and history was invaluable. This trip has truly broadened my horizons and enriched my life. Thank you, Kanya, for an unforgettable adventure!"))),n.createElement(R,null,e.allFile.edges.map(((e,t)=>n.createElement(A,{image:e.node.childImageSharp.gatsbyImageData,key:t}))))))};const q=o.default.div.withConfig({displayName:"Testimonials__TestimonialsContainter",componentId:"sc-12ktwpi-0"})(["width:100%;background:#eee;color #000;padding:5rem max(calc((100vw - 1500px) / 2),10px);height:100%;"]),j=o.default.p.withConfig({displayName:"Testimonials__TopLine",componentId:"sc-12ktwpi-1"})(["color:#077bf1;font-size:clamp(1rem,3.5vw,2.2rem);padding-left:2rem;margin-bottom:0.75rem;"]),P=o.default.p.withConfig({displayName:"Testimonials__Description",componentId:"sc-12ktwpi-2"})(["text-align:start;padding-left:2rem;margin-bottom:min(4rem,30px);font-size:clamp(1.5rem,5vw,2rem);font-weight:bold;"]),H=o.default.div.withConfig({displayName:"Testimonials__ContentWrapper",componentId:"sc-12ktwpi-3"})(["display:grid;grid-template-columns:1fr 1fr;padding:0 2rem;@media screen and (max-width:760px){grid-template-columns:1fr;}"]),W=o.default.div.withConfig({displayName:"Testimonials__ColumnOne",componentId:"sc-12ktwpi-4"})(["display:grid;grid-template-row:1fr 1fr;"]),F=o.default.div.withConfig({displayName:"Testimonials__Testimonial",componentId:"sc-12ktwpi-5"})(["padding-top:1rem;padding-right:2rem;h3{margin-bottom:1rem;font-size:1.5rem;font-style:italic;}p{color:#3b3b3b;line-height:1.2;letter-spacing:0.4px;}"]),R=o.default.div.withConfig({displayName:"Testimonials__ColumnTwo",componentId:"sc-12ktwpi-6"})(["display:grid;grid-template-columns:1fr 1fr;margin-top:2rem;grid-gap:10px;@media screen and (max-width:500px){grid-template-columns:1fr;}"]),A=(0,o.default)(w.G).withConfig({displayName:"Testimonials__TestimonialImages",componentId:"sc-12ktwpi-7"})(["border-radius:10px;height:100%;"]);var D=(0,o.default)(L.UZO).withConfig({displayName:"Testimonials___StyledFaRegLightbulb",componentId:"sc-12ktwpi-8"})(["color:#f1b19b;font-size:2rem;margin-bottom:1rem;"]),M=(0,o.default)(z.osu).withConfig({displayName:"Testimonials___StyledIoMdCheckmarkCircleOutline",componentId:"sc-12ktwpi-9"})(["color:#f1b19b;font-size:2rem;margin-bottom:1rem;"]),B=a(2585);const U=[{icon:n.createElement(B.hKA,null),color:"#047bf1",title:"Over 100 Destinations",desc:"Over 100 Destinations is a powerful selling point for a our company as we suggests a vast range of options for travelers. Our company has a wide network and expertise in catering to diverse travel preferences."},{icon:n.createElement(v.k_Z,null),color:"#f3a82e",title:"1 Millions Trip Made",desc:"1 million trips is an impressive statistic for our company, as it showcases our experience and credibility in the industry. Our company has a proven track record of providing successful and enjoyable trips to a large number of satisfied customers."},{icon:n.createElement(v.Vqd,null),color:"#f34f2e",title:"Fasters Support",desc:"Faster Support 24/7 is a great feature for customers as it ensures that they have access to assistance at any time of day or night, regardless of time zones. It shows our responsiveness and attentiveness, which can be reassuring in case of emergencies or unexpected issues."},{icon:n.createElement(L.l3t,null),color:"#3af576",title:"Best Deals",desc:"Best Price is a strong selling point for a our company as it suggests that we offer the most competitive pricing in the market. This a compelling factor for budget-conscious travelers who are looking for affordable options."}];var G=()=>n.createElement(V,null,n.createElement(K,null,"Why Choose Us?"),n.createElement(Z,null,U.map(((e,t)=>n.createElement($,{key:t},n.createElement(Q,{$_css:e.color},e.icon),n.createElement(X,null,e.title),n.createElement(Y,null,e.desc))))));const V=o.default.div.withConfig({displayName:"Stats__StatsContainer",componentId:"sc-q2oe7y-0"})(["width:100%;background:#fff;color:#000;display:flex;flex-direction:column;justify-content:center;padding:4rem max(calc((100vw - 1500px) / 2),10px);"]),K=o.default.div.withConfig({displayName:"Stats__Heading",componentId:"sc-q2oe7y-1"})(["text-align:start;font-size:clamp(1.5rem,5vw,2rem);margin-bottom:3rem;padding:0 2rem;"]),Z=o.default.div.withConfig({displayName:"Stats__Wrapper",componentId:"sc-q2oe7y-2"})(["display:grid;grid-template-columns:repeat(4,1fr);grid-gap:10px;@media screen and (max-width:760px){grid-template-columns:1fr;}@media screen and (max-width:500px){grid-template-columns:1fr;}"]),$=o.default.div.withConfig({displayName:"Stats__StatsBox",componentId:"sc-q2oe7y-3"})(["height:100%;width:100%;padding:1rem;"]),J=o.default.div.withConfig({displayName:"Stats__Icon",componentId:"sc-q2oe7y-4"})(["font-size:3rem;margin-bottom:1rem;"]);var Q=(0,o.default)(J).withConfig({displayName:"Stats___StyledIcon",componentId:"sc-q2oe7y-5"})(["color:",""],(e=>e.$_css));const X=o.default.div.withConfig({displayName:"Stats__Title",componentId:"sc-q2oe7y-6"})(["font-size:clamp(1rem,2.5vw,1.5rem);font-weight:600;margin-bottom:0.5rem;"]),Y=o.default.p.withConfig({displayName:"Stats__Description",componentId:"sc-q2oe7y-7"})([""]);var ee=a.p+"static/email-1-2bf57ff116a3477db2ba0d60d184f5c7.jpg";var te=e=>{let{id:t}=e;return n.createElement(ae,{id:t},n.createElement(ne,null,n.createElement("h1",null,"Get Access To Exclusive Offers"),n.createElement("p",null,"Sign Up for newsletters below to get $100 off your first trip"),n.createElement("form",{action:"#"},n.createElement(ie,null,n.createElement("label",{htmlFor:"email"},n.createElement("input",{type:"email",placeholder:"Enter your email",id:"email"})),n.createElement(re,{as:"button",type:"button",primary:"true",round:"true"},"Sign Up")))))};const ae=o.default.div.withConfig({displayName:"Email__EmailContainer",componentId:"sc-svnqyy-0"})(["background:linear-gradient( 180deg,rgba(0,0,0,0.5) 0%,rgba(0,0,0,0.5) 35%,rgba(0,0,0,0.5) 100% ),url(",") no-repeat center;background-size:cover;height:450px;width:100%;padding:5rem max(calc((100vw - 1500px) / 2),10px);color:#fff;display:flex;justify-content:center;align-items:center;"],ee),ne=o.default.div.withConfig({displayName:"Email__EmailContent",componentId:"sc-svnqyy-1"})(["display:flex;flex-direction:column;align-items:center;h1{text-align:center;margin-bottom:1rem;font-size:clamp(1rem,5vw,3rem) padding:0 1rem;}p{text-align:center;font-size:clamp(1rem,2.5vw,1,5rem);padding:0 1rem;margin-bottom:2rem;}form{z-idnex:10;}"]),ie=o.default.div.withConfig({displayName:"Email__FormWrap",componentId:"sc-svnqyy-2"})(["input{padding:1.5rem;outline:none;width:350px;height:48px;border-radius:50px;border:none;margin-right:1rem;}@media screen and (max-width:760px){display:flex;flex-direction:column;padding:0 1rem;input{margin-bottom:1rem;width:100%;margin-right:0;}}"]);var re=(0,o.default)(l.z).withConfig({displayName:"Email___StyledButton",componentId:"sc-svnqyy-3"})(["height:48px;@media screen and (max-width:760px){width:100%;min-width:350px;}@media screen and (max-width:400px){width:100%;min-width:250px;}"]);const oe=()=>n.createElement(i.Z,{title:"Home"});var le=()=>n.createElement(r.Z,null,n.createElement(c,null),n.createElement(b,{heading:"Our Favorite Destinations",id:"trips"}),n.createElement(O,null),n.createElement(G,null),n.createElement(te,{id:"contact"}))}}]);
//# sourceMappingURL=component---src-pages-index-js-5d1f38d4fd3035833ce5.js.map