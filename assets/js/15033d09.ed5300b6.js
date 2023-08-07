"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6896],{5162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),r=a(6010);const s={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,o),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(7462),r=a(7294),s=a(6010),o=a(2466),l=a(6550),i=a(1980),u=a(7392),d=a(12);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function c(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.k6)(),s=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(n.location.search);t.set(s,e),n.replace({...n.location,search:t.toString()})}),[s,n])]}function k(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,s=m(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[i,u]=h({queryString:a,groupId:n}),[p,k]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,s]=(0,d.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:n}),g=(()=>{const e=i??p;return c({value:e,tabValues:s})?e:null})();(0,r.useLayoutEffect)((()=>{g&&l(g)}),[g]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!c({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),k(e)}),[u,k,s]),tabValues:s}}var g=a(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:a,selectedValue:l,selectValue:i,tabValues:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),m=e=>{const t=e.currentTarget,a=d.indexOf(t),n=u[a].value;n!==l&&(p(t),i(n))},c=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=d.indexOf(e.currentTarget)+1;t=d[a]??d[0];break}case"ArrowLeft":{const a=d.indexOf(e.currentTarget)-1;t=d[a]??d[d.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>d.push(e),onKeyDown:c,onClick:m},o,{className:(0,s.Z)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":l===t})}),a??t)})))}function f(e){let{lazy:t,children:a,selectedValue:n}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function N(e){const t=k(e);return r.createElement("div",{className:(0,s.Z)("tabs-container",b.tabList)},r.createElement(y,(0,n.Z)({},e,t)),r.createElement(f,(0,n.Z)({},e,t)))}function v(e){const t=(0,g.Z)();return r.createElement(N,(0,n.Z)({key:String(t)},e))}},7235:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(7294);function r(){return n.createElement("div",{style:{height:"1px"}})}},8751:(e,t,a)=>{a.d(t,{Z:()=>s,a:()=>r});var n=a(7294);function r(e){return e?.children[0]?.children[0]}function s(e){let{children:t,minHeight:a,innerDisplay:r}=e;return n.createElement("div",{className:"documentation-example-container",style:{minHeight:`${a||400}px`}},n.createElement("div",{style:{display:r||"block"}},t))}},2896:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>m,default:()=>y,frontMatter:()=>p,metadata:()=>c,toc:()=>k});var n=a(7462),r=(a(7294),a(3905)),s=a(8751),o=a(4602),l=a(7235),i=a(1262),u=a(5162),d=a(4866);const p={sidebar_position:2},m="Connect",c={unversionedId:"docs/connect",id:"docs/connect",title:"Connect",description:"How to connect to an API",source:"@site/docs/docs/connect.mdx",sourceDirName:"docs",slug:"/docs/connect",permalink:"/docs/connect",draft:!1,editUrl:"https://github.com/OvidijusParsiunas/deep-chat/tree/main/website/docs/docs/connect.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docs",previous:{title:"Installation",permalink:"/docs/installation"},next:{title:"Direct Connection",permalink:"/docs/directConnection/"}},h={},k=[{value:"<code>request</code>",id:"request",level:3},{value:"<code>stream</code>",id:"stream",level:3},{value:"<code>requestBodyLimits</code>",id:"requestBodyLimits",level:3},{value:"Types",id:"types",level:2},{value:"<code>Request</code>",id:"Request",level:3},{value:"<code>Result</code>",id:"Result",level:3}],g={toc:k},b="wrapper";function y(e){let{components:t,...p}=e;return(0,r.kt)(b,(0,n.Z)({},g,p,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"connect"},"Connect"),(0,r.kt)("h2",null,"How to connect to an API"),(0,r.kt)("p",null,"You can connect to any API by defining their details inside the ",(0,r.kt)("a",{parentName:"p",href:"#request"},(0,r.kt)("inlineCode",{parentName:"a"},"request"))," property. The target endpoint will need to be able to accept\nand respond using the formats described below."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you don't want / can't change the target server to handle the required object types, you can use the ",(0,r.kt)("a",{parentName:"p",href:"interceptors/#requestInterceptor"},(0,r.kt)("inlineCode",{parentName:"a"},"requestInterceptor")),"\nand ",(0,r.kt)("a",{parentName:"p",href:"interceptors/#responseInterceptor"},(0,r.kt)("inlineCode",{parentName:"a"},"responseInterceptor"))," properties to augment the incoming/outgoing message details.")),(0,r.kt)("h3",null,"Request message"),(0,r.kt)("p",null,"The outgoing Deep Chat request body is encapsulated in one of the following formats:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When sending ",(0,r.kt)("strong",{parentName:"p"},"text")," based messages only, the request body will have the following JSON type: ",(0,r.kt)("br",null),"\n{",(0,r.kt)("a",{parentName:"p",href:"./messages/#MessageContent"},(0,r.kt)("inlineCode",{parentName:"a"},"messages: MessageContent[]")),"} ",(0,r.kt)("br",null))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When sending messages that contain ",(0,r.kt)("strong",{parentName:"p"},"files"),", the request body is going to be serialized inside a ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/FormData"},"FormData")," type\nwhere files are set inside an array property called ",(0,r.kt)("em",{parentName:"p"},'"files"')," and each text message is stored inside a ",(0,r.kt)("em",{parentName:"p"},'"message{index}"')," property with a corresponding index: ",(0,r.kt)("br",null),"\n{",(0,r.kt)("inlineCode",{parentName:"p"},"files: File[]"),", ",(0,r.kt)("a",{parentName:"p",href:"./messages/#MessageContent"},(0,r.kt)("inlineCode",{parentName:"a"},"message1: MessageContent")),", ",(0,r.kt)("a",{parentName:"p",href:"./messages/#MessageContent"},(0,r.kt)("inlineCode",{parentName:"a"},"message2: MessageContent")),"... } ",(0,r.kt)("br",null)))),(0,r.kt)("h3",null,"Response message"),(0,r.kt)("p",null,"Response from the target server needs to use the ",(0,r.kt)("a",{parentName:"p",href:"#Result"},(0,r.kt)("inlineCode",{parentName:"a"},"Result"))," JSON type."),(0,r.kt)("h3",null,"Examples"),(0,r.kt)("p",null,"We do not expect you to figure things out by yourself! Please see information along with full examples on how to setup your own server ",(0,r.kt)("a",{parentName:"p",href:"https://deepchat.dev/examples/servers"},(0,r.kt)("inlineCode",{parentName:"a"},"HERE")),"."),(0,r.kt)("h2",null,"Component properties"),(0,r.kt)(i.Z,{mdxType:"BrowserOnly"},(()=>a(1853).readdAutoNavShadowToggle())),(0,r.kt)("h3",{id:"request"},(0,r.kt)("inlineCode",{parentName:"h3"},"request")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("a",{parentName:"li",href:"#Request"},(0,r.kt)("inlineCode",{parentName:"a"},"Request")))),(0,r.kt)("p",null,"Configuration for the outgoing message HTTP requests."),(0,r.kt)(s.Z,{mdxType:"ComponentContainer"},(0,r.kt)(o.Z,{containerStyle:{borderRadius:"8px"},request:{url:"https://customapi.com/message",method:"POST",headers:{customName:"customHeaderValue"},additionalBodyProps:{field:"value"}},mdxType:"DeepChatBrowser"})),(0,r.kt)(d.Z,{mdxType:"Tabs"},(0,r.kt)(u.Z,{value:"js",label:"Sample code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<deep-chat\n  request=\'{\n    "url": "https://customapi.com/message",\n    "method": "POST",\n    "headers": {"customName": "customHeaderValue"},\n    "additionalBodyProps": {"field": "value"}\n  }\'\n></deep-chat>\n'))),(0,r.kt)(u.Z,{value:"py",label:"Full code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- This example is for Vanilla JS and should be tailored to your framework (see Examples) --\x3e\n\n<deep-chat\n  request=\'{\n    "url": "https://customapi.com/message",\n    "method": "POST",\n    "headers": {"customName": "customHeaderValue"},\n    "additionalBodyProps": {"field": "value"}\n  }\'\n  containerStyle=\'{"borderRadius": "8px"}\'\n></deep-chat>\n')))),(0,r.kt)(l.Z,{mdxType:"LineBreak"}),(0,r.kt)("h3",{id:"stream"},(0,r.kt)("inlineCode",{parentName:"h3"},"stream")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"))),(0,r.kt)("p",null,"If the target service supports ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events"},(0,r.kt)("inlineCode",{parentName:"a"},"server-sent events"))," via the ",(0,r.kt)("inlineCode",{parentName:"p"},"text/event-stream")," MIME type, you\ncan stream the response messages into the chat. This is only supported for text messages.\nPlease see ",(0,r.kt)("a",{parentName:"p",href:"https://deepchat.dev/examples/servers"},(0,r.kt)("inlineCode",{parentName:"a"},"examples"))," on how to set this up for your own server."),(0,r.kt)(s.Z,{mdxType:"ComponentContainer"},(0,r.kt)(o.Z,{containerStyle:{borderRadius:"8px"},stream:!0,directConnection:{demo:!0},introMessage:"The response message bubble will be populated gradually with text events.",mdxType:"DeepChatBrowser"})),(0,r.kt)(d.Z,{mdxType:"Tabs"},(0,r.kt)(u.Z,{value:"js",label:"Sample code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<deep-chat stream="true"></deep-chat>\n'))),(0,r.kt)(u.Z,{value:"py",label:"Full code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- This example is for Vanilla JS and should be tailored to your framework (see Examples) --\x3e\n\n<deep-chat\n  stream="true"\n  directConnection=\'{"demo": true}\'\n  containerStyle=\'{"borderRadius": "8px"}\'\n  introMessage="The response message bubble will be populated gradually with text events."\n></deep-chat>\n')))),(0,r.kt)(l.Z,{mdxType:"LineBreak"}),(0,r.kt)("h3",{id:"requestBodyLimits"},(0,r.kt)("inlineCode",{parentName:"h3"},"requestBodyLimits")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Type: {",(0,r.kt)("inlineCode",{parentName:"li"},"maxMessages?: number"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"totalMessagesMaxCharLength?: number"),"}")),(0,r.kt)("p",null,"Used to limit the content that is going to be included in the outgoing requests. ",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"maxMessages")," is the maximum number of messages counting from the most recent one. If this is set to a number higher than ",(0,r.kt)("em",{parentName:"p"},"0")," such as ",(0,r.kt)("em",{parentName:"p"},"1")," - the outgoing request will only include the new user message,\nif it is ",(0,r.kt)("em",{parentName:"p"},"2")," - it will also include the message before the latest one (from AI or the user) and so on... If the number is ",(0,r.kt)("em",{parentName:"p"},"0")," or below - the request will include all messages in the chat. If\nit is ",(0,r.kt)("em",{parentName:"p"},"undefined"),", the request will only include the input text/files. ",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"totalMessagesMaxCharLength")," is the total maximum number of text characters sent in the request counting from the most recent message. ",(0,r.kt)("br",null),"\nThese limits do not include the ",(0,r.kt)("a",{parentName:"p",href:"./messages#introMessage"},(0,r.kt)("inlineCode",{parentName:"a"},"introMessage")),"."),(0,r.kt)(s.Z,{mdxType:"ComponentContainer"},(0,r.kt)(o.Z,{containerStyle:{borderRadius:"8px"},introMessage:"Observe the data that is going to be sent below.",requestBodyLimits:{totalMessagesMaxCharLength:20,maxMessages:2},directConnection:{demo:!0},mdxType:"DeepChatBrowser"})),(0,r.kt)(d.Z,{mdxType:"Tabs"},(0,r.kt)(u.Z,{value:"js",label:"Sample code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<deep-chat\n  requestBodyLimits=\'{\n    "totalMessagesMaxCharLength": 20,\n    "maxMessages": 2\n  }\'\n></deep-chat>\n'))),(0,r.kt)(u.Z,{value:"py",label:"Full code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- This example is for Vanilla JS and should be tailored to your framework (see Examples) --\x3e\n\n<deep-chat\n  requestBodyLimits=\'{\n    "totalMessagesMaxCharLength": 20,\n    "maxMessages": 2\n  }\'\n  containerStyle=\'{"borderRadius": "8px"}\'\n  directConnection=\'{"demo": true}\'\n  introMessage="Observe the data that is going to be sent below."\n></deep-chat>\n')))),(0,r.kt)(l.Z,{mdxType:"LineBreak"}),(0,r.kt)("h2",{id:"types"},"Types"),(0,r.kt)("p",null,"Types shared with other component properties:"),(0,r.kt)("h3",{id:"Request"},(0,r.kt)("inlineCode",{parentName:"h3"},"Request")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Type: {",(0,r.kt)("br",null),"\n","\xa0","\xa0","\xa0","\xa0"," ",(0,r.kt)("inlineCode",{parentName:"p"},"url: string"),", ",(0,r.kt)("br",null),"\n","\xa0","\xa0","\xa0","\xa0"," ",(0,r.kt)("inlineCode",{parentName:"p"},"method?: string"),", ",(0,r.kt)("br",null),"\n","\xa0","\xa0","\xa0","\xa0"," ",(0,r.kt)("inlineCode",{parentName:"p"},"headers?: {[string]: string}"),", ",(0,r.kt)("br",null),"\n","\xa0","\xa0","\xa0","\xa0"," ",(0,r.kt)("inlineCode",{parentName:"p"},"additionalBodyProps?: {[string]: any}")," ",(0,r.kt)("br",null),"\n}")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Default: ",(0,r.kt)("em",{parentName:"p"},'{ method: "POST" }')))),(0,r.kt)("p",null,"Object used to configure the outgoing messages' HTTP request settings. ",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"additionalBodyProps")," is used to add additional key value properties to the outgoing message body."),(0,r.kt)(s.Z,{mdxType:"ComponentContainer"},(0,r.kt)(o.Z,{containerStyle:{borderRadius:"8px"},request:{url:"https://customapi.com/message",method:"POST",headers:{customName:"customHeaderValue"},additionalBodyProps:{customBodyField:"customBodyValue"}},mdxType:"DeepChatBrowser"})),(0,r.kt)(d.Z,{mdxType:"Tabs"},(0,r.kt)(u.Z,{value:"js",label:"Sample code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<deep-chat\n  request=\'{\n    "url": "https://customapi.com/message",\n    "method": "POST",\n    "headers": {"customName": "customHeaderValue"},\n    "additionalBodyProps": {"customBodyField": "customBodyValue"}\n  }\'\n></deep-chat>\n'))),(0,r.kt)(u.Z,{value:"py",label:"Full code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- This example is for Vanilla JS and should be tailored to your framework (see Examples) --\x3e\n\n<deep-chat\n  request=\'{\n    "url": "https://customapi.com/message",\n    "method": "POST",\n    "headers": {"customName": "customHeaderValue"},\n    "additionalBodyProps": {"customBodyField": "customBodyValue"}\n  }\'\n  containerStyle=\'{"borderRadius": "8px"}\'\n></deep-chat>\n')))),(0,r.kt)(l.Z,{mdxType:"LineBreak"}),(0,r.kt)("h3",{id:"Result"},(0,r.kt)("inlineCode",{parentName:"h3"},"Result")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Type: {",(0,r.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,r.kt)("inlineCode",{parentName:"li"},"result?:")," {",(0,r.kt)("inlineCode",{parentName:"li"},"text?: string"),", ",(0,r.kt)("a",{parentName:"li",href:"./messages#MessageFile"},(0,r.kt)("inlineCode",{parentName:"a"},"files?: MessageFile[]")),"}, ",(0,r.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,r.kt)("inlineCode",{parentName:"li"},"error?: string")," ",(0,r.kt)("br",null),"\n}")),(0,r.kt)("p",null,"Object containing response information from the target service: ",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"text")," is the content for a text message. ",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"files")," is an array that encapsulates details on the response files. ",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"error")," describes information about a server error. If the ",(0,r.kt)("em",{parentName:"p"},"displayServiceErrorMessages")," property in ",(0,r.kt)("a",{parentName:"p",href:"./messages#errorMessages"},(0,r.kt)("inlineCode",{parentName:"a"},"errorMessages")),"\nis set to ",(0,r.kt)("em",{parentName:"p"},"true"),", this message will be displayed in the chat inside the error bubble. ",(0,r.kt)("br",null)),(0,r.kt)(l.Z,{mdxType:"LineBreak"}))}y.isMDXComponent=!0}}]);