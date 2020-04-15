(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{Ytjv:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return m}));a("E5k/"),a("rzGZ"),a("Dq+y"),a("8npG"),a("Ggvi"),a("bNpn"),a("q1tI");var n=a("7ljp"),b=a("hhGP");a("qKvR");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/pages/extended/protocol.mdx"}});var l={_frontmatter:i},c=b.a;function m(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,b={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,["components"]);return Object(n.b)(c,r({},l,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"protocol"},"Protocol"),Object(n.b)("h2",{id:"message-types"},"Message Types"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-cpp"}),"enum MessageType\n{\n    MessageInvalid = 0,\n    MessageAuthenticate,\n    MessageAuthenticateResponse,\n    MessageChat,\n    MessageEvent,\n    MessageTypeCount,\n}\n")),Object(n.b)("h2",{id:"authenticate-response-types"},"Authenticate Response Types"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-cpp"}),"enum AuthenticateResponse\n{\n    AuthenticateInvalid = 0,\n    AuthenticateSuccess,\n    AuthenticateDenied,\n    AuthenticateResponseCount,\n}\n")),Object(n.b)("h2",{id:"identification-types"},"Identification Types"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-cpp"}),"enum IdentificationType\n{\n    IdentificationInvalid = 0,\n    IdentificationSteam,\n    IdentificationDiscord,\n    IdentificationTypeCount,\n}\n")),Object(n.b)("h2",{id:"chat-message-format"},"Chat Message Format"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",r({parentName:"tr"},{align:"left"}),"Data"),Object(n.b)("th",r({parentName:"tr"},{align:"left"}),"Type"),Object(n.b)("th",r({parentName:"tr"},{align:"left"}),"Comment"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"Header"),Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"byte"),Object(n.b)("td",r({parentName:"tr"},{align:"left"}),Object(n.b)("inlineCode",{parentName:"td"},"MessageChat")," value of ",Object(n.b)("inlineCode",{parentName:"td"},"MessageType")," enum")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"EntityName"),Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"stringSz"),Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"Entity name of the host sending the message")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"IDType"),Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"byte"),Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"Item from ",Object(n.b)("inlineCode",{parentName:"td"},"IdentificationType")," enum")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"ID"),Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"stringSz"),Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"Unique identification of the user")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"Username"),Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"stringSz"),Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"Name of the user sending the message")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"Message"),Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"stringSz"),Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"Message content")))),Object(n.b)("h2",{id:"event-message-format"},"Event Message Format"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",r({parentName:"tr"},{align:"left"}),"Data"),Object(n.b)("th",r({parentName:"tr"},{align:"left"}),"Type"),Object(n.b)("th",r({parentName:"tr"},{align:"left"}),"Comment"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"Header"),Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"byte"),Object(n.b)("td",r({parentName:"tr"},{align:"left"}),Object(n.b)("inlineCode",{parentName:"td"},"MessageEvent")," value of ",Object(n.b)("inlineCode",{parentName:"td"},"MessageType")," enum")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"EntityName"),Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"stringSz"),Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"Entity name of the host sending the message")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"Event"),Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"stringSz"),Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"Name of the event")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"Data"),Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"stringSz"),Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"Data of the event")))),Object(n.b)("h2",{id:"authenticate-message-format"},"Authenticate Message Format"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",r({parentName:"tr"},{align:"left"}),"Data"),Object(n.b)("th",r({parentName:"tr"},{align:"left"}),"Type"),Object(n.b)("th",r({parentName:"tr"},{align:"left"}),"Comment"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"Header"),Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"byte"),Object(n.b)("td",r({parentName:"tr"},{align:"left"}),Object(n.b)("inlineCode",{parentName:"td"},"MessageAuthenticate")," value of ",Object(n.b)("inlineCode",{parentName:"td"},"MessageType")," enum")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"EntityName"),Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"stringSz"),Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"Entity name of the host sending the message")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"Token"),Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"stringSz"),Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"Authentication token")))),Object(n.b)("h2",{id:"authenticate-response-message-format"},"Authenticate Response Message Format"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",r({parentName:"tr"},{align:"left"}),"Data"),Object(n.b)("th",r({parentName:"tr"},{align:"left"}),"Type"),Object(n.b)("th",r({parentName:"tr"},{align:"left"}),"Comment"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"Header"),Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"byte"),Object(n.b)("td",r({parentName:"tr"},{align:"left"}),Object(n.b)("inlineCode",{parentName:"td"},"MessageAuthenticate")," value of ",Object(n.b)("inlineCode",{parentName:"td"},"MessageType")," enum")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"EntityName"),Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"stringSz"),Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"Entity name of the host sending the message")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"Response"),Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"byte"),Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"Item from ",Object(n.b)("inlineCode",{parentName:"td"},"AuthenticateResponse")," enum")))))}void 0!==m&&m&&m===Object(m)&&Object.isExtensible(m)&&!m.hasOwnProperty("__filemeta")&&Object.defineProperty(m,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/pages/extended/protocol.mdx"}}),m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-extended-protocol-mdx-b041b45178ec2d0080e6.js.map