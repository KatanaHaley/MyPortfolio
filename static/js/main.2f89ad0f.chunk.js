(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{189:function(e,t,A){},195:function(e,t,A){},196:function(e,t,A){},204:function(e,t,A){},206:function(e,t,A){},223:function(e,t){},225:function(e,t){},23:function(e,t,A){e.exports={row:"Counter_row__entTV",value:"Counter_value__1pjWh",button:"Counter_button__2nIo0",textbox:"Counter_textbox__3f7eG",asyncButton:"Counter_asyncButton__2mEiW Counter_button__2nIo0"}},242:function(e,t){},244:function(e,t){},277:function(e,t){},278:function(e,t){},283:function(e,t){},285:function(e,t){},292:function(e,t){},311:function(e,t){},399:function(e,t,A){"use strict";A.r(t);var a=A(0),n=A.n(a),c=A(21),i=A.n(c),s=(A(189),A(37)),o=A.p+"static/media/woman.0b8a4e38.svg",r=A.p+"static/media/notes.95986e32.svg",l=(A(175),A(50)),d=A(91),j=A.n(d),h=A(169),b=A(51);function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return new Promise((function(t){return setTimeout((function(){return t({data:e})}),500)}))}var m=Object(b.b)("counter/fetchCount",function(){var e=Object(h.a)(j.a.mark((function e(t){var A;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(t);case 2:return A=e.sent,e.abrupt("return",A.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),g=Object(b.c)({name:"counter",initialState:{value:0,status:"idle"},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,t){e.value+=t.payload}},extraReducers:function(e){e.addCase(m.pending,(function(e){e.status="loading"})).addCase(m.fulfilled,(function(e,t){e.status="idle",e.value+=t.payload}))}}),u=g.actions,x=(u.increment,u.decrement,u.incrementByAmount,g.reducer),v=(A(23),A(1));A(195);var O=A(417),f=A(420),w=A(424),P=A(421),y=A(425),N=A(419),E=A(426),B=A(422),Q=A(423),C=A.p+"static/media/netflixmay.ac0a2648.png",D=A.p+"static/media/spacecadetmay.ee208fd6.png",I=A.p+"static/media/cryptotrackermay.f7e33aec.png",M=A.p+"static/media/decoderringmay.a3ecca11.png",z=(A.p,A.p+"static/media/tiktokmay.362827fd.png"),Y=A.p+"static/media/clickergame.5f99d2c2.png",T=Object(O.a)((function(e){return{root:{flexGrow:1,padding:e.spacing(3),maxWidth:345},paper:{height:140,width:100}}}));function X(){var e=T();return Object(v.jsxs)("div",{className:"Projects",id:"projects",children:[Object(v.jsx)("div",{children:Object(v.jsx)("h2",{children:"Projects"})}),Object(v.jsx)(N.a,{container:!0,spacing:1,direction:"row",justify:"flex-start",alignItems:"flex-start",children:Object(v.jsxs)(N.a,{container:!0,justify:"center",spacing:"0",children:[Object(v.jsx)(N.a,{children:Object(v.jsxs)(E.a,{className:e.root,children:[Object(v.jsxs)(f.a,{children:[Object(v.jsx)(P.a,{component:"img",alt:"Netflix Movie Player",height:"140",image:C,title:"Netflix Movie Player"}),Object(v.jsxs)(B.a,{children:[Object(v.jsx)(Q.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"Netflix Movie Player"}),Object(v.jsx)(Q.a,{variant:"body2",color:"textSecondary",component:"p",children:"I developed a Netflix clone that allows users to review films in the Netflix database including; Netflix originals, trending, and top-rated films. The app was built using Node, React JS, Redux, styled with CSS, and deployed with Firebase."})]})]}),Object(v.jsxs)(w.a,{children:[Object(v.jsx)(y.a,{size:"small",color:"primary",href:"https://github.com/KatanaHaley/Netflix-Build",target:"_blank",children:"View Code"}),Object(v.jsx)(y.a,{size:"small",color:"primary",href:"https://netflix-clone-c660b.web.app/",target:"_blank",children:"Explore App"})]})]})}),Object(v.jsx)(N.a,{children:Object(v.jsxs)(E.a,{className:e.root,children:[Object(v.jsxs)(f.a,{children:[Object(v.jsx)(P.a,{component:"img",alt:"Astronomy App with NASA API",height:"140",image:D,title:"Contemplative Reptile"}),Object(v.jsxs)(B.a,{children:[Object(v.jsx)(Q.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"Orvonton: Astronomy App with NASA API"}),Object(v.jsx)(Q.a,{variant:"body2",color:"textSecondary",component:"p",children:"This app details our superuniverse Orvonton. It was built with React JS, CSS, and Windows PowerShell. It utilizes NASA's API providing daily automatic updates about the galaxy."})]})]}),Object(v.jsxs)(w.a,{children:[Object(v.jsx)(y.a,{size:"small",color:"primary",href:"https://github.com/KatanaHaley/Orvonton",target:"_blank",children:"View Code"}),Object(v.jsx)(y.a,{size:"small",color:"primary",href:"https://astronomy-app-e6dee.web.app/",target:"_blank",children:"Explore App"})]})]})}),Object(v.jsx)(N.a,{children:Object(v.jsxs)(E.a,{className:e.root,children:[Object(v.jsxs)(f.a,{children:[Object(v.jsx)(P.a,{component:"img",alt:"TikTok-like Social Video App",height:"140",image:z,title:"Contemplative Reptile"}),Object(v.jsxs)(B.a,{children:[Object(v.jsx)(Q.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"TikTok-like Social Video App"}),Object(v.jsx)(Q.a,{variant:"body2",color:"textSecondary",component:"p",children:"Created a social media application utilizing React JS and Node. It contains CSS, HTML, and Javascript languages. It utilizes Create, Read, Update, and Delete functionality and is connected to Firebase\u2019s Cloud Firestore database in real-time. Users can follow and unfollow other users. Antarctica"})]})]}),Object(v.jsxs)(w.a,{children:[Object(v.jsx)(y.a,{size:"small",color:"primary",href:"https://github.com/KatanaHaley/VideoChew",target:"_blank",children:"View Code"}),Object(v.jsx)(y.a,{size:"small",color:"primary",href:"https://videochew-b30cf.web.app/",target:"_blank",children:"Explore App"})]})]})}),Object(v.jsx)(N.a,{children:Object(v.jsxs)(E.a,{className:e.root,children:[Object(v.jsxs)(f.a,{children:[Object(v.jsx)(P.a,{component:"img",alt:"Decoder Ring Project",height:"140",image:M,title:"Contemplative Reptile"}),Object(v.jsxs)(B.a,{children:[Object(v.jsx)(Q.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"Decoder Ring Project"}),Object(v.jsx)(Q.a,{variant:"body2",color:"textSecondary",component:"p",children:"The Decoder Ring Project consists of three operating decoder ciphers; Caesar, Polybius, and Substitution. The three ciphers use unique algorithms to encode and decode messages. The project was developed with JavaScript, HTML, and CSS. The message encoder allows you to write and decipher coded messages or enhance an escape room challenge."})]})]}),Object(v.jsxs)(w.a,{children:[Object(v.jsx)(y.a,{size:"small",color:"primary",href:"https://github.com/KatanaHaley/DecoderOfTheRings",target:"_blank",children:"View Code"}),Object(v.jsx)(y.a,{size:"small",color:"primary",href:"https://katanahaley.github.io/DecoderOfTheRings/",target:"_blank",children:"Explore App"})]})]})}),Object(v.jsx)(N.a,{children:Object(v.jsxs)(E.a,{className:e.root,children:[Object(v.jsxs)(f.a,{children:[Object(v.jsx)(P.a,{component:"img",alt:"Crypto Price Tracker",height:"140",image:I,title:"Contemplative Reptile"}),Object(v.jsxs)(B.a,{children:[Object(v.jsx)(Q.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"Crypto Price Tracker"}),Object(v.jsx)(Q.a,{variant:"body2",color:"textSecondary",component:"p",children:"For this project, I developed a production-level application with the CoinGecko API and search functionality. This price-tracking app updates in real-time. It was deployed with Netlify and subsequently attached to a custom domain."})]})]}),Object(v.jsxs)(w.a,{children:[Object(v.jsx)(y.a,{size:"small",color:"primary",href:"https://github.com/KatanaHaley/CryptoPrice",target:"_blank",children:"View Code"}),Object(v.jsx)(y.a,{size:"small",color:"primary",href:"https://trackcrypto.netlify.app/",target:"_blank",children:"Explore App"})]})]})}),Object(v.jsx)(N.a,{children:Object(v.jsxs)(E.a,{className:e.root,children:[Object(v.jsxs)(f.a,{children:[Object(v.jsx)(P.a,{component:"img",alt:"Necromancer Game",height:"140",image:Y,title:"Contemplative Reptile"}),Object(v.jsxs)(B.a,{children:[Object(v.jsx)(Q.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"Necromancer Game"}),Object(v.jsx)(Q.a,{variant:"body2",color:"textSecondary",component:"p",children:"The Necromancer game is a clickerstyle battle game built with the HTML5 Phaser game framework, Canvas, and WebGL."})]})]}),Object(v.jsxs)(w.a,{children:[Object(v.jsx)(y.a,{size:"small",color:"primary",href:"https://github.com/KatanaHaley/Necromancer",target:"_blank",children:"View Code"}),Object(v.jsx)(y.a,{size:"small",color:"primary",href:"https://necromancer.netlify.app/",target:"_blank",children:"Explore App"})]})]})})]})})]})}var G=A(174),Z=A(176),k=Object(O.a)({root:{background:function(e){return"red"===e.color?"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)":"linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)"},border:0,borderRadius:3,boxShadow:function(e){return"red"===e.color?"0 3px 5px 2px rgba(255, 105, 135, .3)":"0 3px 5px 2px rgba(33, 203, 243, .3)"},color:"white",height:48,padding:"0 30px",margin:8}});function V(e){e.color;var t=Object(Z.a)(e,["color"]),A=k(e);return onclick="window.location.href='mailto:your@email.address'",Object(v.jsx)(y.a,Object(G.a)({href:"mailto:katanahaley444@gmail.com",className:A.root},t))}function U(){return Object(v.jsx)(n.a.Fragment,{children:Object(v.jsx)(V,{color:"red",children:"CONTACT ME"})})}A(196);var H=function(){return Object(v.jsx)("div",{className:"purple",id:"about",children:Object(v.jsxs)(N.a,{children:[Object(v.jsx)("h2",{children:"About Me"}),Object(v.jsxs)(N.a,{container:!0,justify:"center",spacing:"0",id:"section1",children:[Object(v.jsx)("p",{children:"I have a passion for developing both the back and front end of a project."}),Object(v.jsx)("p",{children:"As a software engineer and developer, I've created a vast number of bespoke websites and applications. Contact me for my resume. I love building projects from the ground up! I've developed websites since 2008, continuously developing my skills."}),Object(v.jsx)("p",{children:"I'm thrilled about expanding my knowledge by learning new programming languages and technologies. I enjoy collaborating on a team, developing projects with everyone's best and brightest thoughts and skills. My services include; full-stack web development, application prototypes & builds, copywriting deliverables such as white papers, articles, and email campaigns."})]})]})})},F=A(52);A(204);var q=function(){return Object(v.jsx)(s.a,{children:Object(v.jsx)("div",{id:"nav",children:Object(v.jsx)("header",{children:Object(v.jsx)("nav",{children:Object(v.jsxs)("ul",{children:[Object(v.jsx)("li",{class:"pointer",children:Object(v.jsx)(F.Link,{activeClass:"active",spy:!0,to:"home",smooth:!0,offset:0,direction:100,children:"Home"})}),Object(v.jsx)("li",{class:"pointer",children:Object(v.jsx)(F.Link,{activeClass:"active",spy:!0,to:"about",smooth:!0,offset:0,direction:100,children:"About"})}),Object(v.jsx)("li",{class:"pointer",children:Object(v.jsx)(F.Link,{activeClass:"active",spy:!0,to:"projects",smooth:!0,offset:0,direction:100,children:"Projects"})}),Object(v.jsx)("li",{class:"pointer",children:Object(v.jsx)(F.Link,{activeClass:"active",spy:!0,to:"contact",smooth:!0,offset:0,direction:30,children:"Contact"})})]})})})})})},K=A(49),S=(A(206),A.p+"static/media/medium.56fad91c.jpg");var R=function(){var e;return Object(v.jsxs)("div",{className:"container",id:"contact",style:{width:800},children:[Object(v.jsx)("form",{action:"https://formspree.io/f/mwkwqkjg",method:"POST",class:"form",children:Object(v.jsxs)("fieldset",{children:[Object(v.jsx)("h3",{children:"Contact me"}),Object(v.jsx)("p",{textAlign:"left",children:"I'm interested in freelance opportunities, ambitious projects. If you have any questions, feel free to contact me using the form."}),Object(v.jsxs)("div",{class:"",children:[Object(v.jsx)("label",{children:Object(v.jsx)("input",{name:"name",placeholder:"Name:"})}),Object(v.jsx)("label",{children:Object(v.jsx)("input",(e={name:"email",input:!0,type:"text"},Object(K.a)(e,"name","_replyto"),Object(K.a)(e,"placeholder","Email:"),e))})]}),Object(v.jsx)("div",{class:"container",children:Object(v.jsx)("label",{children:Object(v.jsx)("input",{name:"subject",input:!0,type:"text",placeholder:"Subject:"})})}),Object(v.jsx)("div",{class:"",children:Object(v.jsx)("label",{children:Object(v.jsx)("textarea",{name:"message",placeholder:"Message:"})})}),Object(v.jsx)("div",{children:Object(v.jsx)("button",{type:"submit",children:"Submit"})})]})}),Object(v.jsx)("br",{}),Object(v.jsxs)("div",{children:[Object(v.jsx)("a",{href:"https://github.com/katanahaley",a:!0,target:"_blank",children:Object(v.jsx)("img",{src:"data:image/png;base64,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",alt:"GitHub logo",width:"50",height:"50"})}),Object(v.jsx)("a",{href:"https://www.linkedin.com/in/katana-haley/",a:!0,target:"_blank",children:Object(v.jsx)("img",{src:"data:image/png;base64,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",alt:"LinkedIn logo",width:"50",height:"50"})}),Object(v.jsx)("a",{href:"https://medium.com/@haleykatana",a:!0,target:"_blank",children:Object(v.jsx)("img",{src:S,alt:"Medium logo",width:"50",height:"50"})})]})]})};A(207),A(208),A(216),A(217);var W=function(){return Object(v.jsx)(s.a,{children:Object(v.jsx)("div",{className:"App",children:Object(v.jsxs)("header",{className:"App-header",id:"section1",children:[Object(v.jsx)(q,{}),Object(v.jsx)("h2",{children:"Hi,"}),Object(v.jsx)("h2",{children:"I'm Katana,"}),Object(v.jsx)("h2",{children:"full stack software engineer."}),Object(v.jsx)("p",{children:"Front and backend development"}),Object(v.jsx)(U,{onClick:"mailto:katanahaley444@gmail.com"}),Object(v.jsx)("br",{}),Object(v.jsx)("img",{src:o,className:"App-logo",alt:"logo"}),Object(v.jsx)("div",{style:{width:800},children:Object(v.jsx)("p",{children:"I specialize in creating websites, applications, custom software, and technology products that meet your goals and move your business forward. View my work below."})}),Object(v.jsx)(H,{}),Object(v.jsx)(X,{}),Object(v.jsx)("script",{src:"https://js.stripe.com/v3/"}),Object(v.jsxs)("div",{children:[Object(v.jsx)("h2",{children:"Got a great idea? Let's build it!\ud83c\udf89"}),Object(v.jsx)("img",{src:r,className:"App-logo",alt:"logo"}),Object(v.jsx)("div",{style:{width:800},children:Object(v.jsx)(R,{})})]})]})})})},J=Object(b.a)({reducer:{counter:x}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(v.jsx)(s.a,{children:Object(v.jsx)(n.a.StrictMode,{children:Object(v.jsx)(l.a,{store:J,children:Object(v.jsx)(W,{})})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[399,1,2]]]);
//# sourceMappingURL=main.2f89ad0f.chunk.js.map