(window["webpackJsonpapp-original-cosmic"]=window["webpackJsonpapp-original-cosmic"]||[]).push([[0],{106:function(e,t,a){},107:function(e,t,a){},108:function(e,t,a){},109:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(31),o=a.n(i),c=(a(43),a(1)),s=a(2),l=a(4),m=a(3),u=a(5),p=(a(44),a(45),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{id:"Tests"})}}]),t}(r.Component)),d=a(6),g=(a(46),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"handleClick",value:function(e){var t=e.target.querySelector("a");t&&t.click()}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{id:"Screen"},n.a.createElement("video",{className:"video",autoPlay:!0,muted:!0,id:"landingVideo",poster:"/app-original-cosmic-2/img/poster.png",playsInline:!0},n.a.createElement("source",{src:"/app-original-cosmic-2/video/ocwall1c.mp4",type:"video/mp4"}),"Votre navigateur ne supporte pas la vid\xe9o."),n.a.createElement("div",{id:"Landing",onClick:function(t){return e.handleClick(t)}},n.a.createElement("div",null,n.a.createElement("h1",null,n.a.createElement(d.b,{to:"/projets"},"original cosmic")),n.a.createElement("p",null,n.a.createElement(d.b,{to:"/projets"},"studio de design graphique",n.a.createElement("br",null)," et d'animation.")))))}}]),t}(r.Component)),h=(a(52),a(34)),b=a(14),v=(a(53),a(35)),f=a.n(v),E=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={},a.handleInputChange=a.handleInputChange.bind(Object(b.a)(a)),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"handleInputChange",value:function(e){var t=e.target,a="checkbox"===t.type?t.checked:t.value,r=t.name;this.setState(Object(h.a)({},r,a))}},{key:"handleSubmit",value:function(e){e.preventDefault(),console.log("oh my god this form has been submited!");var t={prenom:this.state.prenom,nom:this.state.nom,sujet:this.state.sujet,message:this.state.message,email:this.state.email,phone:this.state.phone};f.a.post("https://originalcosmic.fr/submit",{contact:t}).then((function(e){console.log(e),console.log(e.data)}))}},{key:"render",value:function(){return n.a.createElement("form",{id:"FormContact",className:"contact-form",onSubmit:this.handleSubmit},n.a.createElement("div",{className:"col-2"},n.a.createElement("input",{type:"text",placeholder:"nom",name:"nom",onChange:this.handleInputChange}),n.a.createElement("input",{type:"text",placeholder:"pr\xe9nom",name:"prenom",onChange:this.handleInputChange})),n.a.createElement("input",{type:"text",placeholder:"sujet",name:"sujet",onChange:this.handleInputChange}),n.a.createElement("textarea",{placeholder:"message",name:"message",onChange:this.handleInputChange}),n.a.createElement("div",{className:"col-2"},n.a.createElement("input",{type:"email",placeholder:"email",name:"email",onChange:this.handleInputChange}),n.a.createElement("input",{type:"phone",placeholder:"t\xe9l\xe9phone",name:"phone",onChange:this.handleInputChange})),n.a.createElement("div",{className:"submit-container"},n.a.createElement("input",{type:"submit",value:"envoyer"})))}}]),t}(r.Component),y=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"presentation"},n.a.createElement("p",null,"Original Cosmic est un studio de design graphique et d\u2019animation bas\xe9 \xe0 Lille.",n.a.createElement("br",null),"C\u2019est la convergence d\u2019esprits libres, soucieux de fournir une production graphique travaill\xe9e, d\xe9pouill\xe9e, parfois sensible et complexe mais toujours singuli\xe8re."),n.a.createElement("p",null,n.a.createElement("b",null,"Nos champs d\u2019activit\xe9 :"),n.a.createElement("br",null),"\u2013 Identit\xe9 visuelle (Print et multim\xe9dia) : d\xe9finition de l\u2019image de marque, design de logos, signal\xe9tique, catalogues, pochettes de disque, d\xe9veloppement de site internet.",n.a.createElement("br",null),"\u2013 Vid\xe9o et animation : r\xe9alisation de clip, vid\xe9o promotionnelle, animation 3D, motion design.",n.a.createElement("br",null),"\u2013 Photographie : base visuelle de bon nombre de projets, nous produisons les supports photographiques n\xe9cessaires.",n.a.createElement("br",null),"Shooting, packshot produit,etc.",n.a.createElement("br",null),"\u2013 Illustration"),n.a.createElement("hr",null),n.a.createElement("p",null,n.a.createElement("b",null,"Directeur de cr\xe9ation :")," Frank Essam",n.a.createElement("br",null),n.a.createElement("b",null,"Directeur artistique / Designer graphique :")," Rapha\xebl Kucharski",n.a.createElement("br",null),n.a.createElement("b",null,"D\xe9veloppeurs / Int\xe9grateurs web :")," Chris Carton & Julien Leclercq",n.a.createElement("br",null),n.a.createElement("b",null,"Animateurs 2D-3D / Illustrateurs :")," Romain Marchetti, Denis Fleurion, Adrien Lannoy, Julien Adoum",n.a.createElement("br",null)),n.a.createElement("hr",null),n.a.createElement("p",null,n.a.createElement("a",{href:"mailto:contact@originalcosmic.fr",className:"mailto"},"contact@originalcosmic.fr"),n.a.createElement("br",null),"+33 (0) 6 18 78 43 78",n.a.createElement("br",null))),n.a.createElement(E,null))}}]),t}(r.Component),j=(a(71),a(72),a(36)),A=a.n(j),w=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){console.log("Hello. Have a nice day.")}},{key:"render",value:function(){return n.a.createElement("header",{id:"Header",className:"small-header"},n.a.createElement(d.b,{to:"/"},n.a.createElement("img",{src:A.a,alt:"Logo de notre super agence!"})),n.a.createElement("div",{className:"menu"},n.a.createElement(d.c,{to:"/projets",className:"menu-link",activeClassName:"active"},"Projets"),n.a.createElement(d.c,{to:"/studio",className:"menu-link",activeClassName:"active"},"Contact")))}}]),t}(r.Component),C=(a(73),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"scrollToForm",value:function(){var e=document.querySelector("#FormContact");void 0!=e&&e.length>0&&window.scrollTo({top:0,behavior:"smooth"})}},{key:"render",value:function(){return n.a.createElement("footer",{id:"Footer"},n.a.createElement("div",{className:"content"},n.a.createElement("nav",{id:"Socials"},n.a.createElement(d.b,{to:"/studio",onClick:this.scrollToForm},n.a.createElement("i",{className:"fa fa-envelope","aria-hidden":"true"})),n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.facebook.com/OriginalCosmic"},n.a.createElement("i",{className:"fa fa-facebook","aria-hidden":"true"})),n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.instagram.com/original_cosmic_studio/"},n.a.createElement("i",{className:"fa fa-instagram","aria-hidden":"true"}))),n.a.createElement("div",{className:"text"},"\xa9 2019 / Original Cosmic ",n.a.createElement("br",null),"Visual Arts Studio")))}}]),t}(r.Component)),O=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(w,null),n.a.createElement("div",{className:"page",id:"Studiocontact"},n.a.createElement("div",{className:"grid"},n.a.createElement("article",null,n.a.createElement(y,null)),n.a.createElement("div",{id:"Denis"},n.a.createElement("img",{alt:"",src:"/app-original-cosmic-2/img/team/DENIS.jpg"})),n.a.createElement("div",{id:"Adrien"},n.a.createElement("img",{alt:"",src:"/app-original-cosmic-2/img/team/ADRIEN.jpg"})),n.a.createElement("div",{id:"Romain"},n.a.createElement("img",{alt:"",src:"/app-original-cosmic-2/img/team/ROMAIN.jpg"})),n.a.createElement("div",{id:"Julien"},n.a.createElement("img",{alt:"",src:"/app-original-cosmic-2/img/team/JULIEN.jpg"})),n.a.createElement("div",{id:"Raph"},n.a.createElement("img",{alt:"",src:"/app-original-cosmic-2/img/team/RAPH.jpg"})),n.a.createElement("div",{id:"Frank"},n.a.createElement("img",{alt:"",src:"/app-original-cosmic-2/img/team/FRANK.jpg"})),n.a.createElement("div",{id:"Chris"},n.a.createElement("img",{alt:"",src:"/app-original-cosmic-2/img/team/CHRIS.jpg"})),n.a.createElement("div",{id:"Emma"},n.a.createElement("img",{alt:"",src:"/app-original-cosmic-2/img/team/EMMA.jpg"})))),n.a.createElement(C,null))}}]),t}(r.Component),k=(a(74),[{id:1,name:"Alexandre le fou",cover:{src:"alexandre-le-fou.jpg",type:"image",versions:["320","600","800","960"]},content:"Alexandre Le Fou de Pedro Pires.<br/>Affiche de film. <br/>Pour : Maison 4: 3. <br/>Mission : Design graphique/// Print.",slug:"alex-le-fou",medias:[{type:"image",src:"alexandre-le-fou.jpg"}]},{id:2,name:"Amanda",cover:{src:"amanda-is.jpg",type:"image",versions:["320","600","800","960"]},content:"Introspections S\xe9lectives : Couverture de livre. <br/> Pour : AWK STUDIO. <br/> Mission : Illustration, Design graphique/// Print.",slug:"amanda-is",medias:[{type:"image",src:"amanda-is.jpg"},{type:"image",src:"amanda-is-2.jpg"}]},{id:3,name:"Le d\xe9serteur",cover:{src:"le-deserteur-2.jpg",type:"image"},content:"Affiche fran\xe7aise pour \xab <b>Le D\xe9serteur</b> \xbb de Maxime Giroux. Avec Martin Dubreuil, Romain Duris, Reda Kateb et SoKo. Production : Metafilms.<hr/><b>Pour</b> : Ligne 7<br><b>Mission</b> : Print / Multim\xe9dia \xa9 2019 \ud835\ude16\ud835\ude33\ud835\ude2a\ud835\ude28\ud835\ude2a\ud835\ude2f\ud835\ude22\ud835\ude2d \ud835\ude0a\ud835\ude30\ud835\ude34\ud835\ude2e\ud835\ude2a\ud835\ude24",slug:"le-deserteur",medias:[{type:"image",src:"le-deserteur-1.jpg",versions:["320","480","600","800","960"]},{type:"image",src:"le-deserteur-2.jpg",versions:["480"]},{type:"image",src:"le-deserteur-3.jpg",versions:["480"]},{type:"image",src:"le-deserteur-4.jpg",versions:["480"]},{type:"image",src:"le-deserteur-5.jpg",versions:["480"]},{type:"image",src:"le-deserteur-6.jpg",versions:["480"]}]},{id:4,name:"Afrika Glam",cover:{src:"afrika-glam.jpg",type:"image",versions:["320","600","800","960"]},content:"AFRIKA GLAM<br>Pour : Afrika Box<hr>Direction artistique<br>Photographie<br>Design graphique<br>Print<br>2019",slug:"afrika-glam",medias:[{type:"image",src:"afrika-glam-1.jpg"},{type:"image",src:"afrika-glam-2.jpg"}]},{id:5,name:"Original Cosmic Playlist",cover:{src:"ocp1.mp4",type:"video"},content:"<b>Original Cosmic Playlist</b>. <br>Chaque mois, une playlist, une composition visuelle originale.",slug:"original-cosmic-playlist",medias:[{type:"video",src:"ocp1.mp4"},{type:"playlist",src:"<iframe width='100%' height='500' scrolling='no' frameborder='no' allow='autoplay' src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/805416213&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'></iframe>"}]},{id:6,name:"Paleo",cover:{src:"paleo.mp4",type:"video"},content:"PALEO<hr>Animation 2D<br>clip promotionnel<br>Pour : Bitteschoen TV<br>2017",slug:"paleo",medias:[{type:"iframe",src:'<iframe width="560" height="315" src="https://www.youtube.com/embed/WEjdhLse2Sg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'}]},{id:7,name:"The Mice",cover:{src:"the-mice.jpg",type:"image",versions:["320","600","800","960"]},content:"THE MICE \xab Incantations \xbb<hr><br>Pochette de disque<br>Photographie<br>Design graphique<br>Clip musical<br>2016",slug:"the-mice",medias:[{type:"image",src:"the-mice-1.jpg",versions:["320","600","960"]},{type:"image",src:"the-mice-2.jpg",versions:["320","600"]},{type:"iframe",src:'<iframe width="560" height="315" src="https://www.youtube.com/embed/F0uWuyqAFoY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'}]},{id:8,name:"Yellow and blue",cover:{src:"yellow-and-blue.jpg",type:"image",versions:["320","600","800","960"]},content:"MARK ROTHKO \xab Yellow and blue \xbb<hr><br>R\xe9interpr\xe9tation Photographique<br>Direction artistique<br>2016",slug:"yellow-and-blue",medias:[{type:"image",src:"yellow-and-blue-1.jpg",versions:["320","600","960"]}]},{id:9,name:"Akina Wise",cover:{src:"akina-wise.jpg",type:"image",versions:["320","600","800","960"]},content:"AKINA WISE \xab Galaxy Girl \xbb<hr><br>Pochette de disque<br>Design graphique / Photographie<br>2017",slug:"akina-wise",medias:[{type:"image",src:"akina-wise-1.jpg",versions:["320","600","960"]},{type:"image",src:"akina-wise-2.jpg",versions:["320","600"]}]},{id:10,name:"Eldorado Afro",cover:{src:"eldorado-afro.jpg",type:"image",versions:["320","600","800"]},content:"Eldorado Afro: Une journ\xe9e sur l\u2019h\xe9ritage africain du Mexique<hr><br><b>Pour </b> : Wawa L\u2019asso<br><b>Mission</b>: Design graphique / DA<br>Direction artistique: F.E Original Cosmic<br>Photo: Elliot Duk<br>Style: Jeannine Fischer<br>Mod\xe8le: Coralie Djondo<br>Make up: Sophia<br>Assistante: Estelle Periou<hr>\xa9 2019 \ud835\ude16\ud835\ude33\ud835\ude2a\ud835\ude28\ud835\ude2a\ud835\ude2f\ud835\ude22\ud835\ude2d \ud835\ude0a\ud835\ude30\ud835\ude34\ud835\ude2e\ud835\ude2a\ud835\ude24",slug:"eldorado-afro",medias:[{type:"image",src:"eldorado-afro-1.jpg",versions:["320","600"]},{type:"image",src:"eldorado-afro-2.jpg"}]},{id:11,name:"Ombres Color\xe9es",cover:{src:"ombre-colorees.jpg",type:"image",versions:["320","600"]},content:"Ombres Color\xe9es <hr> Pour : Wawa L\u2019Asso<br>Mission: Print / Multim\xe9dia<br>Photo: Matt Doheny<br>Model: Will B.Bell",slug:"ombres-colorees",medias:[{type:"image",src:"ombre-colorees-1.jpg"},{type:"image",src:"ombre-colorees-2.jpg"}]},{id:12,name:"Maescroc",cover:{src:"maescroc.jpg",type:"image",versions:["320","600"]},content:"MAESCROC \xab NordikZoo \xbb<hr><br>Pochette de disque<br>Poster<br>Design graphique<br>2016",slug:"maescroc",medias:[{type:"image",src:"maescroc-1.jpg",versions:["320","600"]},{type:"image",src:"maescroc-2.jpg",versions:["320"]}]},{id:13,name:"OMG",cover:{src:"omg.mp4",type:"video"},content:"OMG<br>En d\xe9veloppement<br>Film court d\u2019animation",slug:"omg",medias:[{type:"iframe",src:'<iframe width="560" height="315" src="https://www.youtube.com/embed/i0NQXLxOXEo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'}]},{id:14,name:"Doux divorce records",cover:{src:"doux-divorce-records.jpg",type:"image",versions:["320","600"]},content:"DOUX DIVORCE RECORDS<br>Label de musique<hr>Identit\xe9 visuelle<br>Design graphique<br>2017",slug:"doux-divorce-records",medias:[{type:"image",src:"doux-divorce-records-1.jpg",versions:["320","600"]},{type:"image",src:"doux-divorce-records-2.jpg"},{type:"image",src:"doux-divorce-records-3.jpg"}]},{id:15,name:"Ronan Martin",cover:{src:"ronan-martin.jpg",type:"image",versions:["320","600"]},content:"RONAN MARTIN \xab \xc0 l\u2019int\xe9rieur \xbb<hr>Pochette de disque<br>Design graphique<br>2017<br>",slug:"ronan-martin",medias:[{type:"image",src:"les-rayons-1.jpg",versions:["320","600","960"]},{type:"image",src:"les-rayons-2.jpg"},{type:"iframe",src:'<iframe width="560" height="315" src="https://www.youtube.com/embed/sES64_1VmVU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'}]},{id:16,name:"Ronan Martin \xab Les rayons \xbb",cover:{src:"les-rayons.jpg",type:"image",versions:["320","600","800"]},content:"RONAN MARTIN \xab Les rayons \xbb<hr>Pochette de disque<br>Clip musical<br>Direction artistique<br>R\xe9alisation vid\xe9o<br>Design graphique<br>2015",slug:"ronan-martin-les-rayons",medias:[{type:"image",src:"ronan-martin-1.jpg",versions:["320","600","960"]},{type:"image",src:"ronan-martin-2.jpg",versions:["320","600"]}]},{id:17,name:"Salvak \xab Vendetta \xbb",cover:{src:"cycle-01.mp4",type:"video"},content:"SALVAK \xab Vendetta \xbb<hr>Clip musical<br>Animation 2d<br>2017",slug:"vendetta",medias:[{type:"iframe",src:'<iframe width="560" height="315" src="https://www.youtube.com/embed/Mg_s40GsIbo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'}]}]),q=a(13),N=a.n(q),D=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.media,a={};!0===this.props.useMaxWidth&&t.versions&&(a={maxWidth:t.versions[t.versions.length-1]+"px"});var r=null;return void 0!=t.versions&&(r=t.versions.map((function(a){return"/app-original-cosmic-2/"+e.props.path+"/"+a+"/"+t.src+" "+a+"w"}))),n.a.createElement(n.a.Fragment,null,"image"===t.type&&n.a.createElement("img",{srcSet:r,src:"/app-original-cosmic-2/"+this.props.path+"/"+t.src,style:a,alt:""}),"video"===t.type&&n.a.createElement("video",{className:"video",autoPlay:!0,loop:!0,muted:!0,playsInline:!0},n.a.createElement("source",{src:"/app-original-cosmic-2/"+this.props.path+"/"+t.src,type:"video/mp4"}),"Votre navigateur ne supporte pas la vid\xe9o."),"playlist"===t.type&&n.a.createElement("div",{className:"playlist"},N()(t.src)),"iframe"===t.type&&n.a.createElement("div",{className:"iframe-container"},N()(t.src)))}}]),t}(r.Component),R=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={projects:k},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){return n.a.createElement("div",{id:"Projects"},n.a.createElement(w,null),n.a.createElement("div",{className:"items"},this.state.projects.map((function(e,t){return n.a.createElement("div",{className:"item ".concat(e.slug),key:e.id},n.a.createElement(d.b,{to:"projet/".concat(e.slug)},n.a.createElement(D,{key:t,index:t,media:e.cover,path:"img/projects"})))}))),n.a.createElement(C,null))}}]),t}(r.Component),M=(a(86),a(37)),I=a.n(M),B=(a(105),a(106),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("nav",{id:"ProjectNav"},n.a.createElement(d.b,{to:{pathname:this.props.link,state:"flushDeal"},className:"nav nav-".concat(this.props.direction),onClick:this.handleClick},"prev"===this.props.direction&&n.a.createElement(n.a.Fragment,null,n.a.createElement("i",{className:"fa fa-caret-".concat(this.props.arrow)}),"\xa0",this.props.text),"next"===this.props.direction&&n.a.createElement(n.a.Fragment,null,this.props.text,"\xa0",n.a.createElement("i",{className:"fa fa-caret-".concat(this.props.arrow)}))))}}]),t}(r.Component)),L=function(e){function t(){var e,a;Object(c.a)(this,t);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={galleryItems:a.props.item.medias.map((function(e,t){return n.a.createElement("div",{className:"item",key:t},n.a.createElement(D,{key:t,index:t,media:e,path:"img/medias",useMaxWidth:!0}))}))},a.thumbItem=function(e,t){return n.a.createElement("a",{className:"media-link",key:e,onClick:function(e){return a.handleThumbClick(t,e)}},t+1)},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"informations",value:function(){return n.a.createElement("div",{className:"informations"},n.a.createElement("div",{id:"mainNav"},n.a.createElement(d.b,{to:"/projets"},n.a.createElement("i",{className:"fa fa-chevron-left"}),"\xa0Retour"),n.a.createElement("div",{id:"projectNav"},this.props.item.prev&&n.a.createElement(B,{direction:"prev",arrow:"left",link:"/projet/".concat(this.props.item.prev.slug),text:"Pr\xe9c\xe9dent"}),this.props.item.next&&n.a.createElement(B,{direction:"next",arrow:"right",link:"/projet/".concat(this.props.item.next.slug),text:"Suivant"}))),this.props.item.medias.length>1&&n.a.createElement("nav",{id:"mediasPagination"},this.props.item.medias.map(this.thumbItem)),this.props.item.content&&n.a.createElement("div",{className:"content"},N()(this.props.item.content)),n.a.createElement("div",{className:"to-contact"},n.a.createElement(d.b,{to:"/studio",onClick:this.scrollToForm},n.a.createElement("i",{className:"fa fa-envelope","aria-hidden":"true"})," Contact")))}},{key:"handleThumbClick",value:function(e,t){this.Carousel.slideTo(e);var a=document.querySelector(".media-link-active");null!=a&&a.classList.remove("media-link-active"),t.target.classList.add("media-link-active")}},{key:"render",value:function(){var e=this;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"visual"},n.a.createElement(I.a,{dotsDisabled:!0,buttonsDisabled:!0,items:this.state.galleryItems,ref:function(t){return e.Carousel=t}})),this.informations())}}]),t}(n.a.Component),V=function(e){function t(e){var a;Object(c.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).Gallery=function(){a.state.match;return n.a.createElement("div",{className:"visual"})};var r=a.props.match.params.slug,i=k.filter((function(e,t){if(e.slug===r)return e.prev=k[t-1],e.next=k[t+1],e}))[0];return a.state={match:i},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentWillUpdate",value:function(){var e=document.querySelectorAll("#singleProject img");e&&e.forEach((function(e){e.removeAttribute("src")}))}},{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"componentDidUpdate",value:function(){window.scrollTo(0,0)}},{key:"componentWillReceiveProps",value:function(e){window.scrollTo(0,0);var t=e.match.params.slug,a=k.filter((function(e,a){return e.slug===t&&(e.prev=k[a-1],e.next=k[a+1]),e}))[0];this.setState({match:a})}},{key:"render",value:function(){var e=this.state.match;e.prev,e.next;return n.a.createElement("div",{id:"singleProject"},n.a.createElement(L,{item:e}))}}]),t}(r.Component),P=(a(107),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{id:"notFound"},n.a.createElement("div",{className:"inner"},n.a.createElement("h1",null,"Erreur ",n.a.createElement("span",{className:"numbers"},"404"),"."),n.a.createElement("p",null,"La page n'a pas \xe9t\xe9 trouv\xe9e."),n.a.createElement(d.b,{to:"/",className:"backlink"},n.a.createElement("i",{className:"fa fa-arrow-left"})," Retour")))}}]),t}(r.Component)),S=a(12),G=(a(108),a(18)),T=G.b.div({enter:{opacity:1,delay:300,beforeChildren:!0},exit:{opacity:0}}),F=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement(d.a,{basename:"/app-original-cosmic-2"},n.a.createElement("div",{className:"App"},n.a.createElement(S.a,{render:function(e){var t=e.location;return n.a.createElement("main",{id:"mainContent"},n.a.createElement(G.a,null,n.a.createElement(T,{key:t.pathname},n.a.createElement(S.c,{location:t},n.a.createElement(S.a,{path:"/",exact:!0,component:g}),n.a.createElement(S.a,{path:"/studio",exact:!0,component:O}),n.a.createElement(S.a,{path:"/projets",exact:!0,component:R}),n.a.createElement(S.a,{path:"/projet/:slug",exact:!0,component:V}),n.a.createElement(S.a,{path:"/tests",exact:!0,component:p}),n.a.createElement(S.a,{component:P})))))}})))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},36:function(e,t,a){e.exports=a.p+"static/media/logo.84bf977c.svg"},38:function(e,t,a){e.exports=a(109)},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},71:function(e,t,a){},72:function(e,t){e.exports="data:image/png;base64,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"},73:function(e,t,a){},74:function(e,t,a){},86:function(e,t,a){}},[[38,1,2]]]);
//# sourceMappingURL=main.3115d954.chunk.js.map