(this["webpackJsonpmy-network"]=this["webpackJsonpmy-network"]||[]).push([[5],{232:function(e,t,s){e.exports={dialogs:"Dialogs_dialogs__3Q5QI",dialogsItems:"Dialogs_dialogsItems__3Rfrg",active:"Dialogs_active__10kMZ",messages:"Dialogs_messages__3nfqK",message:"Dialogs_message__1gaPl"}},233:function(e,t,s){"use strict";s.d(t,"a",(function(){return o}));var n=s(4),a=s(239),i=(s(0),s(48)),c=s.n(i),r=s(1),o=function(e){var t=e.input,s=e.meta,i=Object(a.a)(e,["input","meta"]),o=s.touched&&s.error;return Object(r.jsxs)("div",{className:c.a.formControl+" "+(o?c.a.error:""),children:[Object(r.jsx)("div",{children:Object(r.jsx)("textarea",Object(n.a)(Object(n.a)(Object(n.a)({},t),s),i))}),o&&Object(r.jsx)("span",{children:s.error})]})}},234:function(e,t,s){"use strict";s.d(t,"b",(function(){return n})),s.d(t,"a",(function(){return a}));var n=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t&&t.length>e)return"max length is ".concat(e," symbols")}}},299:function(e,t,s){"use strict";s.r(t);var n=s(78),a=(s(0),s(232)),i=s.n(a),c=s(11),r=s(1),o=function(e){return Object(r.jsx)("div",{className:i.a.dialog+" "+i.a.active,children:Object(r.jsx)(c.b,{to:"/dialogs/".concat(e.id),children:e.name})})},d=function(e){return Object(r.jsx)("div",{className:i.a.message,children:e.message})},u=s(111),j=s(112),l=s(233),b=s(234),g=Object(b.a)(50),m=Object(j.a)({form:"dialogAddMessageForm"})((function(e){var t=e.handleSubmit;return Object(r.jsxs)("form",{onSubmit:t,children:[Object(r.jsx)("div",{children:Object(r.jsx)(u.a,{component:l.a,name:"newMessageBody",placeholder:"Enter your message",validate:[b.b,g]})}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{children:"Send"})})]})})),O=function(e){var t=e.dialogsPage,s=e.sendMessage,n=t.dialogs.map((function(e){return Object(r.jsx)(o,{id:e.id,name:e.name},e.id)})),a=t.messages.map((function(e){return Object(r.jsx)(d,{id:e.id,message:e.message},e.id)}));return Object(r.jsxs)("div",{className:i.a.dialogs,children:[Object(r.jsx)("div",{className:i.a.dialogsItems,children:n}),Object(r.jsxs)("div",{className:i.a.messages,children:[Object(r.jsx)("div",{children:a}),Object(r.jsx)(m,{onSubmit:function(e){s(e.newMessageBody)}})]})]})},f=s(19),h=s(21),x=s(4),v=s(239),_=s(9);t.default=Object(h.d)(Object(f.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(t){e(Object(n.b)(t))}}})),(function(e){return Object(f.b)((function(e){return{isAuth:e.auth.isAuth}}))((function(t){var s=t.isAuth,n=Object(v.a)(t,["isAuth"]);return s?Object(r.jsx)(e,Object(x.a)({},n)):Object(r.jsx)(_.a,{to:"/login"})}))}))(O)}}]);
//# sourceMappingURL=5.333da64f.chunk.js.map