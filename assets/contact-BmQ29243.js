import{g as Ne,b as y,r as P,j as v,B as Q}from"./index-DJMG5lZ0.js";var ce={exports:{}},Fe="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",De=Fe,ke=De;function ue(){}function le(){}le.resetWarningCache=ue;var Le=function(){function t(n,o,a,c,u,i){if(i!==ke){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}t.isRequired=t;function e(){return t}var r={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:le,resetWarningCache:ue};return r.PropTypes=r,r};ce.exports=Le();var Me=ce.exports;const d=Ne(Me);function Z(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),r.push.apply(r,n)}return r}function X(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?Z(Object(r),!0).forEach(function(n){de(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Z(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}function I(t){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?I=function(e){return typeof e}:I=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},I(t)}function de(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function Ue(t,e){return $e(t)||Be(t,e)||We(t,e)||Ye()}function $e(t){if(Array.isArray(t))return t}function Be(t,e){var r=t&&(typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"]);if(r!=null){var n=[],o=!0,a=!1,c,u;try{for(r=r.call(t);!(o=(c=r.next()).done)&&(n.push(c.value),!(e&&n.length===e));o=!0);}catch(i){a=!0,u=i}finally{try{!o&&r.return!=null&&r.return()}finally{if(a)throw u}}return n}}function We(t,e){if(t){if(typeof t=="string")return H(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return H(t,e)}}function H(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function Ye(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var qe=function(e){var r=y.useRef(e);return y.useEffect(function(){r.current=e},[e]),r.current},k=function(e){return e!==null&&I(e)==="object"},ee="[object Object]",Ke=function t(e,r){if(!k(e)||!k(r))return e===r;var n=Array.isArray(e),o=Array.isArray(r);if(n!==o)return!1;var a=Object.prototype.toString.call(e)===ee,c=Object.prototype.toString.call(r)===ee;if(a!==c)return!1;if(!a&&!n)return e===r;var u=Object.keys(e),i=Object.keys(r);if(u.length!==i.length)return!1;for(var l={},f=0;f<u.length;f+=1)l[u[f]]=!0;for(var s=0;s<i.length;s+=1)l[i[s]]=!0;var h=Object.keys(l);if(h.length!==u.length)return!1;var C=e,x=r,S=function(R){return t(C[R],x[R])};return h.every(S)},ze=function(e,r,n){return k(e)?Object.keys(e).reduce(function(o,a){var c=!k(r)||!Ke(e[a],r[a]);return n.includes(a)?(c&&console.warn("Unsupported prop change: options.".concat(a," is not a mutable property.")),o):c?X(X({},o||{}),{},de({},a,e[a])):o},null):null},fe=y.createContext(null);fe.displayName="ElementsContext";var Je=function(e,r){if(!e)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(r," in an <Elements> provider."));return e},pe=y.createContext(null);pe.displayName="CartElementContext";var Ge=function(e,r){if(!e)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(r," in an <Elements> provider."));return e};d.any,d.object;var te=function(e){var r=y.useContext(fe);return Je(r,e)},re=function(e){var r=y.useContext(pe);return Ge(r,e)};d.func.isRequired;var b=function(e,r,n){var o=!!n,a=y.useRef(n);y.useEffect(function(){a.current=n},[n]),y.useEffect(function(){if(!o||!e)return function(){};var c=function(){a.current&&a.current.apply(a,arguments)};return e.on(r,c),function(){e.off(r,c)}},[o,r,e,a])},Ve=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},p=function(e,r){var n="".concat(Ve(e),"Element"),o=function(i){var l=i.id,f=i.className,s=i.options,h=s===void 0?{}:s,C=i.onBlur,x=i.onFocus,S=i.onReady,T=i.onChange,R=i.onEscape,Ee=i.onClick,be=i.onLoadError,Se=i.onLoaderStart,Ce=i.onNetworksChange,L=i.onCheckout,we=i.onLineItemClick,xe=i.onConfirm,Oe=i.onCancel,_e=i.onShippingAddressChange,Pe=i.onShippingRateChange,Te=te("mounts <".concat(n,">")),M=Te.elements,Re=y.useState(null),z=Ue(Re,2),g=z[0],je=z[1],O=y.useRef(null),U=y.useRef(null),J=re("mounts <".concat(n,">")),$=J.setCart,B=J.setCartState;b(g,"blur",C),b(g,"focus",x),b(g,"escape",R),b(g,"click",Ee),b(g,"loaderror",be),b(g,"loaderstart",Se),b(g,"networkschange",Ce),b(g,"lineitemclick",we),b(g,"confirm",xe),b(g,"cancel",Oe),b(g,"shippingaddresschange",_e),b(g,"shippingratechange",Pe);var j;e==="cart"?j=function(V){B(V),S&&S(V)}:S&&(e==="payButton"?j=S:j=function(){S(g)}),b(g,"ready",j);var Ae=e==="cart"?function(E){B(E),T&&T(E)}:T;b(g,"change",Ae);var Ie=e==="cart"?function(E){B(E),L&&L(E)}:L;b(g,"checkout",Ie),y.useLayoutEffect(function(){if(O.current===null&&M&&U.current!==null){var E=M.create(e,h);e==="cart"&&$&&$(E),O.current=E,je(E),E.mount(U.current)}},[M,h,$]);var G=qe(h);return y.useEffect(function(){if(O.current){var E=ze(h,G,["paymentRequest"]);E&&O.current.update(E)}},[h,G]),y.useLayoutEffect(function(){return function(){O.current&&(O.current.destroy(),O.current=null)}},[]),y.createElement("div",{id:l,className:f,ref:U})},a=function(i){te("mounts <".concat(n,">")),re("mounts <".concat(n,">"));var l=i.id,f=i.className;return y.createElement("div",{id:l,className:f})},c=r?a:o;return c.propTypes={id:d.string,className:d.string,onChange:d.func,onBlur:d.func,onFocus:d.func,onReady:d.func,onEscape:d.func,onClick:d.func,onLoadError:d.func,onLoaderStart:d.func,onNetworksChange:d.func,onCheckout:d.func,onLineItemClick:d.func,onConfirm:d.func,onCancel:d.func,onShippingAddressChange:d.func,onShippingRateChange:d.func,options:d.object},c.displayName=n,c.__elementType=e,c},m=typeof window>"u";p("auBankAccount",m);var Qe=p("card",m);p("cardNumber",m);p("cardExpiry",m);p("cardCvc",m);p("fpxBank",m);p("iban",m);p("idealBank",m);p("p24Bank",m);p("epsBank",m);p("payment",m);p("payButton",m);p("paymentRequestButton",m);p("linkAuthentication",m);p("address",m);p("shippingAddress",m);p("cart",m);p("paymentMethodMessaging",m);p("affirmMessage",m);p("afterpayClearpayMessage",m);var K=Object.defineProperty,Ze=Object.getOwnPropertyDescriptor,Xe=Object.getOwnPropertyNames,He=Object.prototype.hasOwnProperty,et=(t,e)=>{for(var r in e)K(t,r,{get:e[r],enumerable:!0})},tt=(t,e,r,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of Xe(e))!He.call(t,o)&&o!==r&&K(t,o,{get:()=>e[o],enumerable:!(n=Ze(e,o))||n.enumerable});return t},rt=t=>tt(K({},"__esModule",{value:!0}),t),ne=(t,e,r)=>new Promise((n,o)=>{var a=i=>{try{u(r.next(i))}catch(l){o(l)}},c=i=>{try{u(r.throw(i))}catch(l){o(l)}},u=i=>i.done?n(i.value):Promise.resolve(i.value).then(a,c);u((r=r.apply(t,e)).next())}),me={};et(me,{SubmissionError:()=>_,appendExtraData:()=>N,createClient:()=>ye,getDefaultClient:()=>wt,isSubmissionError:()=>ft});var Y=rt(me),w="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",nt=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;function ot(t){t=String(t);for(var e,r,n,o,a="",c=0,u=t.length%3;c<t.length;){if((r=t.charCodeAt(c++))>255||(n=t.charCodeAt(c++))>255||(o=t.charCodeAt(c++))>255)throw new TypeError("Failed to execute 'btoa' on 'Window': The string to be encoded contains characters outside of the Latin1 range.");e=r<<16|n<<8|o,a+=w.charAt(e>>18&63)+w.charAt(e>>12&63)+w.charAt(e>>6&63)+w.charAt(e&63)}return u?a.slice(0,u-3)+"===".substring(u):a}function at(t){if(t=String(t).replace(/[\t\n\f\r ]+/g,""),!nt.test(t))throw new TypeError("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");t+="==".slice(2-(t.length&3));for(var e,r="",n,o,a=0;a<t.length;)e=w.indexOf(t.charAt(a++))<<18|w.indexOf(t.charAt(a++))<<12|(n=w.indexOf(t.charAt(a++)))<<6|(o=w.indexOf(t.charAt(a++))),r+=n===64?String.fromCharCode(e>>16&255):o===64?String.fromCharCode(e>>16&255,e>>8&255):String.fromCharCode(e>>16&255,e>>8&255,e&255);return r}var it=()=>navigator.webdriver||!!document.documentElement.getAttribute(at("d2ViZHJpdmVy"))||!!window.callPhantom||!!window._phantom,st=class{constructor(){this.loadedAt=Date.now(),this.webdriver=it()}data(){return{loadedAt:this.loadedAt,webdriver:this.webdriver}}},ct=class{constructor(t){this.kind="success",this.next=t.next}};function ut(t){return"next"in t&&typeof t.next=="string"}var lt=class{constructor(t,e){this.paymentIntentClientSecret=t,this.resubmitKey=e,this.kind="stripePluginPending"}};function dt(t){if("stripe"in t&&"resubmitKey"in t&&typeof t.resubmitKey=="string"){let{stripe:e}=t;return typeof e=="object"&&e!=null&&"paymentIntentClientSecret"in e&&typeof e.paymentIntentClientSecret=="string"}return!1}function ft(t){return t.kind==="error"}var _=class{constructor(...t){this.kind="error",this.formErrors=[],this.fieldErrors=new Map;var e;for(let r of t){if(!r.field){this.formErrors.push({code:r.code&&pt(r.code)?r.code:"UNSPECIFIED",message:r.message});continue}let n=(e=this.fieldErrors.get(r.field))!=null?e:[];n.push({code:r.code&&yt(r.code)?r.code:"UNSPECIFIED",message:r.message}),this.fieldErrors.set(r.field,n)}}getFormErrors(){return[...this.formErrors]}getFieldErrors(t){var e;return(e=this.fieldErrors.get(t))!=null?e:[]}getAllFieldErrors(){return Array.from(this.fieldErrors)}};function pt(t){return t in mt}var mt={BLOCKED:"BLOCKED",EMPTY:"EMPTY",FILES_TOO_BIG:"FILES_TOO_BIG",FORM_NOT_FOUND:"FORM_NOT_FOUND",INACTIVE:"INACTIVE",NO_FILE_UPLOADS:"NO_FILE_UPLOADS",PROJECT_NOT_FOUND:"PROJECT_NOT_FOUND",TOO_MANY_FILES:"TOO_MANY_FILES"};function yt(t){return t in ht}var ht={REQUIRED_FIELD_EMPTY:"REQUIRED_FIELD_EMPTY",REQUIRED_FIELD_MISSING:"REQUIRED_FIELD_MISSING",STRIPE_CLIENT_ERROR:"STRIPE_CLIENT_ERROR",STRIPE_SCA_ERROR:"STRIPE_SCA_ERROR",TYPE_EMAIL:"TYPE_EMAIL",TYPE_NUMERIC:"TYPE_NUMERIC",TYPE_TEXT:"TYPE_TEXT"};function vt(t){return"errors"in t&&Array.isArray(t.errors)&&t.errors.every(e=>typeof e.message=="string")||"error"in t&&typeof t.error=="string"}var gt="3.0.1",Et=t=>ot(JSON.stringify(t)),bt=t=>{let e=`@formspree/core@${gt}`;return t?`${t} ${e}`:e};function N(t,e,r){t instanceof FormData?t.append(e,r):t[e]=r}function St(t){return t!==null&&typeof t=="object"}var Ct=class{constructor(t={}){this.project=t.project,this.stripe=t.stripe,typeof window<"u"&&(this.session=new st)}submitForm(t,e){return ne(this,arguments,function*(r,n,o={}){let a=o.endpoint||"https://formspree.io",c=this.project?`${a}/p/${this.project}/f/${r}`:`${a}/f/${r}`,u={Accept:"application/json","Formspree-Client":bt(o.clientName)};this.session&&(u["Formspree-Session-Data"]=Et(this.session.data())),n instanceof FormData||(u["Content-Type"]="application/json");function i(f){return ne(this,null,function*(){try{let s=yield(yield fetch(c,{method:"POST",mode:"cors",body:f instanceof FormData?f:JSON.stringify(f),headers:u})).json();if(St(s)){if(vt(s))return Array.isArray(s.errors)?new _(...s.errors):new _({message:s.error});if(dt(s))return new lt(s.stripe.paymentIntentClientSecret,s.resubmitKey);if(ut(s))return new ct({next:s.next})}return new _({message:"Unexpected response format"})}catch(s){let h=s instanceof Error?s.message:`Unknown error while posting to Formspree: ${JSON.stringify(s)}`;return new _({message:h})}})}if(this.stripe&&o.createPaymentMethod){let f=yield o.createPaymentMethod();if(f.error)return new _({code:"STRIPE_CLIENT_ERROR",field:"paymentMethod",message:"Error creating payment method"});N(n,"paymentMethod",f.paymentMethod.id);let s=yield i(n);if(s.kind==="error")return s;if(s.kind==="stripePluginPending"){let h=yield this.stripe.handleCardAction(s.paymentIntentClientSecret);if(h.error)return new _({code:"STRIPE_CLIENT_ERROR",field:"paymentMethod",message:"Stripe SCA error"});n instanceof FormData?n.delete("paymentMethod"):delete n.paymentMethod,N(n,"paymentIntent",h.paymentIntent.id),N(n,"resubmitKey",s.resubmitKey);let C=yield i(n);return oe(C),C}return s}let l=yield i(n);return oe(l),l})}};function oe(t){let{kind:e}=t;if(e!=="success"&&e!=="error")throw new Error(`Unexpected submission result (kind: ${e})`)}var ye=t=>new Ct(t),wt=()=>(W||(W=ye()),W),W,he={};Object.defineProperty(he,"__esModule",{value:!0});function F(t){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?F=function(e){return typeof e}:F=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},F(t)}var ve="https://js.stripe.com/v3",xt=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,ae="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",Ot=function(){for(var e=document.querySelectorAll('script[src^="'.concat(ve,'"]')),r=0;r<e.length;r++){var n=e[r];if(xt.test(n.src))return n}return null},_t=function(e){var r=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",n=document.createElement("script");n.src="".concat(ve).concat(r);var o=document.head||document.body;if(!o)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return o.appendChild(n),n},Pt=function(e,r){!e||!e._registerWrapper||e._registerWrapper({name:"stripe-js",version:"1.54.2",startTime:r})},A=null,Tt=function(e){return A!==null||(A=new Promise(function(r,n){if(typeof window>"u"||typeof document>"u"){r(null);return}if(window.Stripe&&e&&console.warn(ae),window.Stripe){r(window.Stripe);return}try{var o=Ot();o&&e?console.warn(ae):o||(o=_t(e)),o.addEventListener("load",function(){window.Stripe?r(window.Stripe):n(new Error("Stripe.js not available"))}),o.addEventListener("error",function(){n(new Error("Failed to load Stripe.js"))})}catch(a){n(a);return}})),A},Rt=function(e,r,n){if(e===null)return null;var o=e.apply(void 0,r);return Pt(o,n),o},ie=function(e){var r=`invalid load parameters; expected object of shape

    {advancedFraudSignals: boolean}

but received

    `.concat(JSON.stringify(e),`
`);if(e===null||F(e)!=="object")throw new Error(r);if(Object.keys(e).length===1&&typeof e.advancedFraudSignals=="boolean")return e;throw new Error(r)},D,q=!1,ge=function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];q=!0;var o=Date.now();return Tt(D).then(function(a){return Rt(a,r,o)})};ge.setLoadParameters=function(t){if(q&&D){var e=ie(t),r=Object.keys(e),n=r.reduce(function(o,a){var c;return o&&t[a]===((c=D)===null||c===void 0?void 0:c[a])},!0);if(n)return}if(q)throw new Error("You cannot change load parameters after calling loadStripe");D=ie(t)};he.loadStripe=ge;function se(t){let{prefix:e,field:r,errors:n,...o}=t;if(n==null)return null;let a=r?n.getFieldErrors(r):n.getFormErrors();return a.length===0?null:y.createElement("div",{...o},e?`${e} `:null,a.map(c=>c.message).join(", "))}var jt=y.createContext(null);function At(){return P.useContext(jt)??{client:Y.getDefaultClient()}}var It="2.5.1",Nt=`@formspree/react@${It}`;function Ft(t,e={}){let r=At(),{client:n=r.client,extraData:o,onError:a,onSuccess:c,origin:u}=e,{stripe:i}=n,l=P.useMemo(()=>i==null?void 0:i.elements().getElement(Qe),[i]);return async function(f){let s=Dt(f)?kt(f):f;if(typeof o=="object")for(let[C,x]of Object.entries(o)){let S;typeof x=="function"?S=await x():S=x,S!==void 0&&Y.appendExtraData(s,C,S)}let h=await n.submitForm(t,s,{endpoint:u,clientName:Nt,createPaymentMethod:i&&l?()=>i.createPaymentMethod({type:"card",card:l,billing_details:Lt(s)}):void 0});Y.isSubmissionError(h)?a==null||a(h):c==null||c(h)}}function Dt(t){return"preventDefault"in t&&typeof t.preventDefault=="function"}function kt(t){t.preventDefault();let e=t.currentTarget;if(e.tagName!="FORM")throw new Error("submit was triggered for a non-form element");return new FormData(e)}function Lt(t){let e={address:Mt(t)};for(let r of["name","email","phone"]){let n=t instanceof FormData?t.get(r):t[r];n&&typeof n=="string"&&(e[r]=n)}return e}function Mt(t){let e={};for(let[r,n]of[["address_line1","line1"],["address_line2","line2"],["address_city","city"],["address_country","country"],["address_state","state"],["address_postal_code","postal_code"]]){let o=t instanceof FormData?t.get(r):t[r];o&&typeof o=="string"&&(e[n]=o)}return e}function Ut(t,e={}){let[r,n]=P.useState(null),[o,a]=P.useState(null),[c,u]=P.useState(!1),[i,l]=P.useState(!1);if(!t)throw new Error('You must provide a form key or hashid (e.g. useForm("myForm") or useForm("123xyz")');let f=Ft(t,{client:e.client,extraData:e.data,onError(s){n(s),u(!1),l(!1)},onSuccess(s){n(null),a(s),u(!1),l(!0)},origin:e.endpoint});return[{errors:r,result:o,submitting:c,succeeded:i},async function(s){u(!0),await f(s)},function(){n(null),a(null),u(!1),l(!1)}]}function Bt(){const[t,e]=Ut("mgegpkzd");return v.jsx(v.Fragment,{children:t.succeeded?v.jsxs(v.Fragment,{children:[v.jsx("h3",{className:"text-lg",children:"Server Response"}),v.jsx("p",{className:"text-[#bbb] text-sm mb-2",children:"Email sent successfully!"}),v.jsx(Q,{children:"Close"})]}):v.jsxs(v.Fragment,{children:[v.jsx("h1",{className:"text-xl",children:"Contact"}),v.jsx("p",{className:"text-[#bbb] text-sm max-w-96 mb-2",children:"Please only send one message and do not spam or you are at risk of being blocked."}),v.jsxs("form",{onSubmit:e,className:"flex flex-col justify-center items-center gap-2",children:[v.jsx("input",{type:"email",name:"email",placeholder:"email@example.com",className:"rounded-md outline-none text-sm bg-[#0d2521] focus:ring focus:ring-emerald-900 py-2 px-4"}),v.jsx(se,{prefix:"Email",field:"email",errors:t.errors}),v.jsx("textarea",{id:"message",name:"message",placeholder:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque architecto quo sunt, doloribus dignissimos necessitatibus harum numquam sit asperiores laudantium, esse nulla consectetur quae cum reiciendis, sapiente tenetur nesciunt quasi.",className:"rounded-md outline-none text-sm bg-[#0d2521] focus:ring focus:ring-emerald-900 py-2 px-4"}),v.jsx(se,{prefix:"Message",field:"message",errors:t.errors}),v.jsx(Q,{type:"submit",disabled:t.submitting,children:"Send form"})]})]})})}export{Bt as default};
