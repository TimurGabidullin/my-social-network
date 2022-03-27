(this["webpackJsonpmy-network"]=this["webpackJsonpmy-network"]||[]).push([[4],{233:function(t,e,s){"use strict";s.d(e,"a",(function(){return a}));var c=s(4),i=s(239),n=(s(0),s(48)),o=s.n(n),r=s(1),a=function(t){var e=t.input,s=t.meta,n=Object(i.a)(t,["input","meta"]),a=s.touched&&s.error;return Object(r.jsxs)("div",{className:o.a.formControl+" "+(a?o.a.error:""),children:[Object(r.jsx)("div",{children:Object(r.jsx)("textarea",Object(c.a)(Object(c.a)(Object(c.a)({},e),s),n))}),a&&Object(r.jsx)("span",{children:s.error})]})}},234:function(t,e,s){"use strict";s.d(e,"b",(function(){return c})),s.d(e,"a",(function(){return i}));var c=function(t){if(!t)return"Field is required"},i=function(t){return function(e){if(e&&e.length>t)return"max length is ".concat(t," symbols")}}},252:function(t,e,s){t.exports={descriptionBlock:"ProfileInfo_descriptionBlock__aEa0n",mainPhoto:"ProfileInfo_mainPhoto__1f9Cz",contact:"ProfileInfo_contact__cEHKe"}},295:function(t,e,s){t.exports={postsBlock:"MyPosts_postsBlock__28sBn",posts:"MyPosts_posts__1IQ6n"}},296:function(t,e,s){t.exports={item:"Post_item__2ejwt"}},298:function(t,e,s){"use strict";s.r(e);var c=s(4),i=s(29),n=s(30),o=s(32),r=s(31),a=s(0),j=s.n(a),l=s(24),u=s(252),b=s.n(u),d=s(38),h=s(1),O=function(t){var e=Object(a.useState)(!1),s=Object(l.a)(e,2),c=s[0],i=s[1],n=Object(a.useState)(t.status),o=Object(l.a)(n,2),r=o[0],j=o[1];Object(a.useEffect)((function(){j(t.status)}),[t.status]);return Object(h.jsxs)("div",{children:[!c&&Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"Status:"})," ",Object(h.jsx)("span",{onDoubleClick:function(){i(!0)},children:t.status||"---"})]}),c&&Object(h.jsx)("div",{children:Object(h.jsx)("input",{autoFocus:!0,onChange:function(t){j(t.currentTarget.value)},value:r,onBlur:function(){i(!1),t.updateStatus(r)}})})]})},p=s(77),f=s(63),x=s(85),m=s(19),v=function(t){var e=t.profile,s=t.setEditMode,i=Object(m.c)(),n=Object(x.a)({defaultValues:{fullName:e?e.fullName:"",lookingForAJob:!!e&&e.lookingForAJob,lookingForAJobDescription:e?e.lookingForAJobDescription:"",aboutMe:e?e.aboutMe:"",contacts:{github:e?e.contacts.github:"",vk:e?e.contacts.vk:"",facebook:e?e.contacts.facebook:"",instagram:e?e.contacts.instagram:"",twitter:e?e.contacts.twitter:"",youtube:e?e.contacts.youtube:"",mainLink:e?e.contacts.mainLink:""}}}),o=n.register,r=n.setError,a=n.handleSubmit,j=n.formState.errors;return Object(h.jsxs)("form",{onSubmit:a((function(t){i(Object(f.f)(t,r,s))})),children:[Object(h.jsx)("div",{children:Object(h.jsx)("button",{children:"Save"})}),j.fullName&&Object(h.jsx)("span",{children:j.fullName.message}),Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"Full name:"}),Object(h.jsx)("div",{children:Object(h.jsx)("input",Object(c.a)({placeholder:"Full name"},o("fullName",{required:"This field is required"})))})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"Looking for a job:"}),Object(h.jsx)("div",{children:Object(h.jsx)("input",Object(c.a)({type:"checkbox"},o("lookingForAJob")))})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"My professional skills:"}),Object(h.jsxs)("div",{children:[Object(h.jsx)("textarea",Object(c.a)({placeholder:"My professional skills"},o("lookingForAJobDescription",{required:"This field is required"}))),j.lookingForAJobDescription&&Object(h.jsx)("span",{children:j.lookingForAJobDescription.message})]})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"About me:"}),Object(h.jsx)("div",{children:Object(h.jsx)("textarea",Object(c.a)({placeholder:"About me"},o("aboutMe",{required:"This field is required"})))}),j.aboutMe&&Object(h.jsx)("span",{children:j.aboutMe.message})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"Contacts:"}),Object.keys(e?e.contacts:"").map((function(t){return Object(h.jsxs)("div",{className:b.a.contact,children:[Object(h.jsxs)("b",{children:[t,":"]}),Object(h.jsx)("div",{children:Object(h.jsx)("input",Object(c.a)({placeholder:t},o("contacts.".concat(t))))})]},t)}))]})]})},g=function(t){var e=t.profile,s=t.isOwner,c=t.goToEditMode;return Object(h.jsxs)("div",{children:[s&&Object(h.jsx)("div",{children:Object(h.jsx)("button",{onClick:c,children:"Edit"})}),Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"Full name:"}),e?e.fullName:""]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"Looking for a job:"}),e?e.lookingForAJob?"yes":"no":""]}),e&&e.lookingForAJob&&Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"My professional skills:"}),e?e.lookingForAJobDescription:""]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"About me:"}),e?e.aboutMe:""]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"Contacts:"}),Object.keys(e?e.contacts:"").map((function(t){return Object(h.jsx)(k,{contactTitle:t,contactValue:e?e.contacts[t]:""},t)}))]})]})},k=function(t){return Object(h.jsxs)("div",{className:b.a.contact,children:[Object(h.jsxs)("b",{children:[t.contactTitle,":"]}),t.contactValue]})},P=function(t){var e=t.profile,s=t.status,c=t.updateStatus,i=t.isOwner,n=t.savePhoto,o=Object(a.useState)(!1),r=Object(l.a)(o,2),j=r[0],u=r[1];if(!e)return Object(h.jsx)(d.a,{});return Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:b.a.descriptionBlock,children:[Object(h.jsx)("img",{src:e.photos.large||p.a,className:b.a.mainPhoto}),i&&Object(h.jsx)("input",{type:"file",onChange:function(t){t.target.files&&n(t.target.files[0])}}),j?Object(h.jsx)(v,{profile:e,setEditMode:u}):Object(h.jsx)(g,{profile:e,isOwner:i,goToEditMode:function(){u(!0)}}),Object(h.jsx)(O,{status:s,updateStatus:c})]})})},y=s(295),A=s.n(y),S=s(296),N=s.n(S),_=function(t){var e=t.message,s=t.likesCount;return Object(h.jsx)("div",{className:N.a.posts,children:Object(h.jsxs)("div",{className:N.a.item,children:[Object(h.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-9wd1vdvmXNs9AobWt-l-fJi2o1CQpyJRqQ&usqp=CAU",alt:""}),e,Object(h.jsx)("div",{children:Object(h.jsxs)("span",{children:["like ",s]})})]})})},w=s(111),F=s(112),M=s(234),J=s(233),C=j.a.memo((function(t){var e=t.profilePage,s=t.addPost,c=e.posts.map((function(t){return Object(h.jsx)(_,{id:t.id,message:t.message,likesCount:t.likesCount},t.id)}));return Object(h.jsxs)("div",{className:A.a.postsBlock,children:[Object(h.jsx)("h3",{children:"My Post"}),Object(h.jsx)(q,{onSubmit:function(t){s(t.newPostText)}}),Object(h.jsx)("div",{className:A.a.posts,children:c})]})})),T=Object(M.a)(10),q=Object(F.a)({form:"profileAddNewPostForm"})((function(t){var e=t.handleSubmit;return Object(h.jsxs)("form",{onSubmit:e,children:[Object(h.jsx)("div",{children:Object(h.jsx)(w.a,{component:J.a,name:"newPostText",validate:[M.b,T],placeholder:"Post message"})}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{children:"Add post"})})]})})),I=C,D=Object(m.b)((function(t){return{profilePage:t.profilePage}}),(function(t){return{addPost:function(e){t(Object(f.a)(e))}}}))(I),E=function(t){var e=t.profile,s=t.status,c=t.updateStatus,i=t.isOwner,n=t.savePhoto;return Object(h.jsxs)("div",{children:[Object(h.jsx)(P,{profile:e,isOwner:i,status:s,updateStatus:c,savePhoto:n}),Object(h.jsx)(D,{})]})},B=s(9),U=s(21),L=function(t){Object(o.a)(s,t);var e=Object(r.a)(s);function s(){return Object(i.a)(this,s),e.apply(this,arguments)}return Object(n.a)(s,[{key:"refreshProfile",value:function(){var t=this.props.match.params.userId;t||(t=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(t),this.props.getStatus(t)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(t,e){this.props.match.params.userId!==t.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return Object(h.jsx)("div",{children:Object(h.jsx)(E,Object(c.a)(Object(c.a)({},this.props),{},{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto}))})}}]),s}(j.a.Component);e.default=Object(U.d)(Object(m.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.id,isAuth:t.auth.isAuth}}),{getUserProfile:f.d,getStatus:f.c,updateStatus:f.g,savePhoto:f.e}),B.f)(L)}}]);
//# sourceMappingURL=4.f6d51454.chunk.js.map