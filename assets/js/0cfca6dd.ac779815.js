"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9546,6069,8734],{1262:(e,t,a)=>{a.d(t,{Z:()=>l});var o=a(7294),n=a(2389);function l(e){let{children:t,fallback:a}=e;return(0,n.Z)()?o.createElement(o.Fragment,null,t?.()):a??null}},4101:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});var o=a(7294);function n(e){let{setIsModalDisplayed:t,applyNewPlaygroundConfig:a}=e;const[n,l]=o.useState(!1),[r,d]=o.useState(!1),u=o.useRef(null);o.useEffect((()=>(l(!0),window.addEventListener("keydown",c),()=>{window.removeEventListener("keydown",c)})),[]);const c=e=>{"Escape"===e.key?m():"Enter"===e.key&&handleExport()},i=e=>{const t=new FileReader;t.onload=e=>{try{const t=JSON.parse(e.target.result);if(!s(t))throw"Validation error";p(t),a(t),m()}catch(t){console.error("Error parsing JSON file:",t),d(!0)}},t.readAsText(e)},s=e=>{if(!e.components)return!1;return!e.components.find((e=>!e.connect||!e.messages||"string"!=typeof e.description))},p=e=>{e.components.forEach((e=>{const{connect:t}=e,a=Object.keys(t)[0];""===t[a].key&&(t[a].key="----")}))},m=()=>{l(!1),setTimeout((()=>{t(!1)}),200)};return o.createElement("div",null,o.createElement("div",{className:"playground-service-modal-background "+(n?"playground-modal-fade-in-background":"playground-modal-fade-out-background"),onClick:m}),o.createElement("div",{className:"playground-modal "+(n?"playground-modal-fade-in":"playground-modal-fade-out")},o.createElement("b",{className:"playground-modal-title playground-header-modal-title"},"Upload Config"),o.createElement("div",{className:"playground-header-modal-description"},"Upload your playground configuration to create chats with your setup and continue where you left of."),r&&o.createElement("div",{id:"playground-upload-modal-error",className:"playground-header-modal-description"},"Error in the uploaded file"),o.createElement("div",{id:"playground-upload-modal-buttons",className:"playground-header-modal-buttons"},o.createElement("button",{className:"playground-modal-button playground-modal-close-button",onClick:m},"Close"),o.createElement("input",{ref:u,id:"playground-upload-modal-input",type:"file",accept:".json",onChange:e=>{const t=e.target,a=t.files?.[0];i(a),t.value=""}}),o.createElement("button",{className:"playground-modal-button playground-modal-submit-button",onClick:()=>u.current.click()},"Upload"))))}},581:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});var o=a(2510),n=a(4101),l=a(7294);function r(e){let{applyNewPlaygroundConfig:t}=e;const[a,r]=l.useState(!1);return l.createElement("div",null,a&&l.createElement(n.default,{setIsModalDisplayed:r,applyNewPlaygroundConfig:t}),l.createElement("div",{className:"playground-header-button",onClick:()=>r(!0)},l.createElement(o.default,{text:"Upload"},l.createElement("img",{src:"img/export.svg",className:"playground-button playground-file-button"}))))}},2510:(e,t,a)=>{a.r(t),a.d(t,{default:()=>l});var o=a(1262),n=a(7294);function l(e){let{children:t,text:a}=e;return n.createElement(o.Z,null,(()=>/^((?!chrome|android).)*safari/i.test(navigator.userAgent)?n.createElement("a",null,t):n.createElement("a",{"data-tooltip-id":"chat-wrapper-configuration-tooltip","data-tooltip-place":"bottom","data-tooltip-offset":"7","data-tooltip-content":a},t)))}}}]);