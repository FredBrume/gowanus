(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,a,t){e.exports=t.p+"static/media/img4.5968f7b9.JPG"},17:function(e,a,t){e.exports=t.p+"static/media/img5.b89a737f.JPG"},19:function(e,a,t){},25:function(e,a,t){e.exports=t.p+"static/media/img1.601da4f7.JPG"},26:function(e,a,t){e.exports=t.p+"static/media/img2.b3ee9f4c.jpg"},27:function(e,a,t){e.exports=t.p+"static/media/img3.eac524e2.jpg"},28:function(e,a,t){e.exports=t(58)},33:function(e,a,t){},58:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(13),r=t.n(c),i=(t(33),t(5)),o=t(6),s=t(9),m=t(7),d=t(8),u=t(10),E=(t(19),t(62)),p=function(e){var a=function(e){};return l.a.createElement("header",{role:"banner",id:"header"},l.a.createElement(E.a,{to:"/"},l.a.createElement("img",{className:"header-logo",alt:"logo"})),l.a.createElement("nav",{id:"nav"},l.a.createElement("ul",{className:"nav-menu"},l.a.createElement("li",{className:"nav-item",onClick:a,"data-id":"menu"},l.a.createElement(E.a,{to:"/home"},"Home")),l.a.createElement("li",{className:"nav-item",onClick:a,"data-id":"parties"},l.a.createElement(E.a,{to:"/about"},"About us")),l.a.createElement("li",{className:"nav-item",onClick:a,"data-id":"gallery"},l.a.createElement(E.a,{to:"#"},"Services")),l.a.createElement("li",{className:"nav-item",onClick:a,"data-id":"contact"},l.a.createElement(E.a,{to:"/donate"},"Donate")),l.a.createElement("li",{className:"nav-item",onClick:a,"data-id":"contact"},l.a.createElement(E.a,{to:"/donate"},"Event")),l.a.createElement("li",{className:"nav-item",onClick:a,"data-id":"contact"},l.a.createElement(E.a,{to:"/donate"},"Contact")))),l.a.createElement("div",{id:"toggle",onClick:function(a){document.querySelector("#toggle").classList.toggle("on"),document.querySelector("#header").classList.toggle("static"),e.onNavClick(a)}},l.a.createElement("div",{className:"span",id:"bar1"}),l.a.createElement("div",{className:"span",id:"bar2"}),l.a.createElement("div",{className:"span",id:"bar3"})))},h=t(1),v=t.n(h),g=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).state={menuOpen:!1},t.handleMenuItemClick=function(e){console.log(e),document.querySelector(".resizable-menu-container").style.opacity="0",document.querySelector("#toggle").classList.toggle("on"),t.props.onMenuItem(e.currentTarget.dataset.id)},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"componentWillReceiveProps",value:function(e){this.setState({menuOpen:e.menu})}},{key:"render",value:function(){return this.state.menuOpen?l.a.createElement("div",{className:"resizable-menu-container"},l.a.createElement("ul",{className:"resizable-menu"},l.a.createElement("li",{className:"nav-item",onClick:this.handleMenuItemClick,"data-id":"menu"},l.a.createElement(E.a,{to:"/home"},"Home")),l.a.createElement("li",{className:"nav-item",onClick:this.handleMenuItemClick,"data-id":"parties"},l.a.createElement(E.a,{to:"/about"},"About us")),l.a.createElement("li",{className:"nav-item",onClick:this.handleMenuItemClick,"data-id":"gallery"},l.a.createElement(E.a,{to:"#"},"Services")),l.a.createElement("li",{className:"nav-item",onClick:this.handleMenuItemClick,"data-id":"contact"},l.a.createElement(E.a,{to:"/donate"},"Donate")),l.a.createElement("li",{className:"nav-item",onClick:this.handleMenuItemClick,"data-id":"contact"},l.a.createElement(E.a,{to:"/donate"},"Event")),l.a.createElement("li",{className:"nav-item",onClick:this.handleMenuItemClick,"data-id":"contact"},l.a.createElement(E.a,{to:"/donate"},"Contact")))):l.a.createElement("div",null)}}]),a}(n.Component);g.propsTypes={menuOpen:v.a.bool.isRequired};var f=g,y=t(24),N=t.n(y),b=(t(54),t(56),t(25)),k=t.n(b),C=t(26),w=t.n(C),O=t(27),I=t.n(O),M=t(15),j=t.n(M),S=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).imageSlides=function(){return t.state.images.map(function(e,a){return l.a.createElement("div",{className:"mySlides",key:a},l.a.createElement("img",{src:e,alt:"slide",style:{width:"100%"}}),l.a.createElement("div",{className:"after"}))})},t.state={images:[]},t.settings={dots:!1,infinite:!0,speed:100,fade:!0,easing:"linear",arrow:!1,lazyload:!0,slidesToShow:1,slidesToScroll:1,autoplay:!0,adaptiveHeight:!0},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){this.setState({images:[k.a,w.a,I.a,j.a]})}},{key:"render",value:function(){return l.a.createElement("div",{className:"banner-container",style:{backgroundColor:"#fff"}},l.a.createElement(N.a,this.settings,this.imageSlides()),l.a.createElement("div",{className:"heading-container"},l.a.createElement("p",null,"Gowanus Wifii commmunity "),l.a.createElement("p",null,"a project of Gowanus Initiative, is a community-led effort to close the digital divide"),l.a.createElement("div",null,"Read more >>")))}}]),a}(n.Component),x=t(17),B=t.n(x),T=function(e){return l.a.createElement("div",{className:"home-main-content"},l.a.createElement("div",{className:"content-row-1"},l.a.createElement("div",{className:"content"},l.a.createElement("div",{className:"content-row-1-underlay"},l.a.createElement("p",{className:"top-heading"},"NEXT EVENTS"),l.a.createElement("div",{className:"row-1",id:"summary"},l.a.createElement("div",{className:"col-1"},l.a.createElement("p",{className:"heading"},"25 / FEB"),l.a.createElement("p",{className:"scope"}," title: this is a statement "),l.a.createElement("p",null,"Wednesday, February 25 at 15:00"),l.a.createElement("p",{style:{color:"#83730B"}},"More info >>")),l.a.createElement("div",{className:"content-rule"}),l.a.createElement("div",{className:"col-1"},l.a.createElement("p",{className:"heading"},"29 / FEB"),l.a.createElement("p",{className:"scope"},"this is a statement"),l.a.createElement("p",null,"Sunday, February 29 at 19:00"),l.a.createElement("p",{style:{color:"#83730B"}},"More info >>")),l.a.createElement("div",{className:"content-rule"}),l.a.createElement("div",{className:"col-1"},l.a.createElement("p",null,'"I\'m a paragraph. Click here to add your own text and edit me. It\u2019s easy. Just click \u201cEdit Text\u201d or double click me to add your own content and make changes to the font. I\u2019m a great place for you to tell a story and let your users know a little more about you."'),l.a.createElement("p",null,"Isaiah 41:10")))),l.a.createElement("div",{className:"content-row-2"},l.a.createElement("div",{className:"row-1"},l.a.createElement("p",null," WELCOMING YOU HOME "),l.a.createElement("p",null,"I'm a paragraph. Click here to add your own text and edit me. It\u2019s easy. Just click \u201cEdit Text\u201d or double click me to add your own content and make changes to the font. I\u2019m a great place for you to tell a story and let your users know a little more about you.")),l.a.createElement("div",{className:"row-2"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"image-container"},l.a.createElement("img",{src:B.a,alt:"card image"}),l.a.createElement("p",null,"ABOUT OUR PROGRAM"),l.a.createElement("div",{style:{width:"70px",height:"1px",margin:"0 auto",backgroundColor:"#83730B"}},"\xa0"),l.a.createElement("p",null,"I'm a paragraph. Click here to add your own text and edit me. It\u2019s easy. Just click \u201cEdit Text\u201d or double click me to add your own content and make changes to the font."),l.a.createElement("p",{style:{color:"#83730B"}},"More info >>"))),l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"image-container"},l.a.createElement("img",{src:B.a,alt:"card image"}),l.a.createElement("p",null,"ABOUT OUR PROGRAM"),l.a.createElement("div",{style:{width:"70px",height:"1px",margin:"0 auto",backgroundColor:"#83730B"}},"\xa0"),l.a.createElement("p",null,"I'm a paragraph. Click here to add your own text and edit me. It\u2019s easy. Just click \u201cEdit Text\u201d or double click me to add your own content and make changes to the font."),l.a.createElement("p",{style:{color:"#83730B"}},"More info >>"))),l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"image-container"},l.a.createElement("img",{src:B.a,alt:"card image"}),l.a.createElement("p",null,"OUR SERVICES"),l.a.createElement("div",{style:{width:"70px",height:"1px",margin:"0 auto",backgroundColor:"#83730B"}},"\xa0"),l.a.createElement("p",null,"I'm a paragraph. Click here to add your own text and edit me. It\u2019s easy. Just click \u201cEdit Text\u201d or double click me to add your own content and make changes to the font."),l.a.createElement("p",{style:{color:"#83730B"}},"More info >>"))))))),l.a.createElement("div",{className:"content-row-3"},l.a.createElement("div",{className:"heading-container",id:"below-heading"},l.a.createElement("p",null,"AN INCLUSIVE COMMUNITY FOR ALL WHO "),l.a.createElement("p",null,"This is a new section and paragraph"),l.a.createElement("div",null,"Read more >>"))))},R=function(){return l.a.createElement("div",{className:"content"},l.a.createElement(S,null),l.a.createElement(T,null))},A=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"footer-field"},l.a.createElement("input",{type:"text",className:"text"}),l.a.createElement("div",{className:"submit"},l.a.createElement("p",{id:"subscribe"},"Subscribe for emails")))}}]),a}(n.Component),U=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"footer"},l.a.createElement("div",{className:"content"},l.a.createElement("div",{className:"row-1"},l.a.createElement("div",{className:"col-1"},l.a.createElement("p",null,"ABOUT US"),l.a.createElement("p",null,"I'm a paragraph. Click here to add your own text and edit me. I\u2019m a great place for you to tell a story and let your users know a little more about you.")),l.a.createElement("div",{className:"footer-rule"}),l.a.createElement("div",{className:"col-2"},l.a.createElement("p",null,"ADDRESS"),l.a.createElement("p",null,"123-456-7890"),l.a.createElement("p",null,"500 Terry Francois Street San Francisco, CA 94158"),l.a.createElement("p",null,"info@mysite.com")),l.a.createElement("div",{className:"footer-rule"}),l.a.createElement("div",{className:"col-3"},l.a.createElement("p",null,"SUBSCRIBE FOR EMAILS"),l.a.createElement(A,null),l.a.createElement("div",{className:"social-container"},l.a.createElement("ul",{className:"social-list"},l.a.createElement("li",null,l.a.createElement("a",{href:"/"},l.a.createElement("i",{className:"fab fa-facebook-square",style:{fontSize:"25px",color:"#9E9E9C"}}))),l.a.createElement("li",null,l.a.createElement("a",{href:"/"},l.a.createElement("i",{className:"fab fa-twitter",style:{fontSize:"25px",color:"#9E9E9C"}}))),l.a.createElement("li",null,l.a.createElement("a",{href:"/"},l.a.createElement("i",{className:"fab fa-instagram",style:{fontSize:"25px",color:"#9E9E9C"}}))))))),l.a.createElement("div",{className:"row-2"},l.a.createElement("div",{className:"col-1"},l.a.createElement("p",null,"Privacy Policy | User Agreement. \xa92018 Gowanus. ")))))}}]),a}(n.Component),J=t(60),G=t(61),F=t(59),L=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).state={navMenu:{status:!1,activeItem:"home"}},t.handleNavClick=t.handleNavClick.bind(Object(u.a)(Object(u.a)(t))),t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){this.setState({navMenu:Object.assign({},this.state.navMenu,{status:!1})})}},{key:"handleNavClick",value:function(e){this.setState({navMenu:Object.assign({},this.state.navMenu,{status:!this.state.navMenu.status})})}},{key:"render",value:function(){return l.a.createElement(J.a,{basename:"/gowanus"},l.a.createElement("div",{className:"main-container",style:{backgroundImage:"linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(".concat(j.a,")")}},l.a.createElement(p,{onNavClick:this.handleNavClick,onMenuItem:this.handleMenuClick}),l.a.createElement(f,{menu:this.state.navMenu.status,onMenuItem:this.handleMenuClick}),l.a.createElement(G.a,null,l.a.createElement(F.a,{exact:!0,path:"/",render:function(){return l.a.createElement(R,null)}})),l.a.createElement(U,null)))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[28,2,1]]]);
//# sourceMappingURL=main.dbea7c5a.chunk.js.map