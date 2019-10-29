let data = [
    {
        id:1,
        name:"Alexandre le fou",
        cover:{
            src:"alexandre-le-fou.jpg",
            type:"image",
            versions:['320','600','800','960']
        },
        content:null,
        slug:"alex-le-fou",
        medias:[]
    },
    {
        id: 2,
        name: "Amanda",
        cover:{
            src:"amanda-is.jpg",
            type: "image",
            versions:['320','600','800','960']
        },
        content:null,
        slug:"amanda-is",
        medias:[]
    },
    {
        id: 3,
        name: "Le déserteur",
        cover:{
            src:"le-deserteur.jpg",
            type: "image",
            versions:['320','600','800','960']
        },
        content: "Affiche française pour « <b>Le Déserteur</b> » de Maxime Giroux. Avec Martin Dubreuil, Romain Duris, Reda Kateb et SoKo. Production : Metafilms.<hr/><b>Client</b>:Ligne 7<br><b>Mission</b> : Print / Multimédia © 2019 𝘖𝘳𝘪𝘨𝘪𝘯𝘢𝘭 𝘊𝘰𝘴𝘮𝘪𝘤",
        slug:"le-deserteur",
        medias:[
            {
                type:'image',
                src:"le-deserteur-1.jpg",
                versions:['320','480','600','800','960']
            },
            {
                type:'image',
                src:"le-deserteur-2.jpg",
                versions: ['480']
            },
            {
                type:'image',
                src:"le-deserteur-3.jpg",
                versions: ['480']
            },
            {
                type:'image',
                src:"le-deserteur-4.jpg",
                versions: ['480']
            },
            {   
                type:'image',
                src:"le-deserteur-5.jpg",
                versions: ['480']
            },
            {
                type:'image',
                src:"le-deserteur-6.jpg",
                versions: ['480']
            }
        ]
    },
    {
        id: 4,
        name: "Afrika Glam",
        cover:{
            src:"afrika-glam.jpg",
            type: "image",
            versions:['320','600','800','960']
        },
        content: "AFRIKA GLAM Pour Afrika Box<hr>Direction artistique<br>Photographie<br>Design graphique<br>Print<br>2019",
        slug:"afrika-glam",
        medias:[
            {
                type: "image",
                src: "afrika-glam-1.jpg",
                versions: ['320','600']
            },
            {
                type:"image",
                src:"afrika-glam-2.jpg",
                versions: ['320', '600', '960']
            }
        ]
    },
    {
        id: 5,
        name: "Original Cosmic Playlist",
        cover:{
            src:"ocp1.mp4",
            type: "video"
        },
        content:"Original Cosmic Playlist. Chaque mois, une playlist, une composition visuelle originale.",
        slug:"original-cosmic-playlist",
        medias:[
            {
                type:"video",
                src:"ocp1.mp4"
            },
            {
                type:"playlist",
                src:"<iframe width='100%' height='500' scrolling='no' frameborder='no' allow='autoplay' src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/805416213&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'></iframe>"
            }
        ]
    },
    {
        id: 6,
        name: "Paleo",
        cover:{
            src:"paleo.mp4",
            type: "video"
        },
        content: "PALEO<hr>Animation 2D<br>clip promotionnel<br>Pour Bitteschoen TV<br>2017",
        slug:"paleo",
        medias:[
            {
                type:"iframe",
                src: '<iframe width="560" height="315" src="https://www.youtube.com/embed/WEjdhLse2Sg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            }
        ]
    },
    {
        id: 7,
        name: "The Mice",
        cover:{
            src:"the-mice.jpg",
            type: "image",
            versions:['320','600','800','960']
        },
        content: "THE MICE « Incantations »<hr><br>Pochette de disque<br>Photographie<br>Design graphique<br>Clip musical<br>2016",
        slug:"the-mice",
        medias:[
            {
                type:"image",
                src:"the-mice-1.jpg",
                versions: ['320', '600', '960']
            },
            {
                type:"image",
                src:"the-mice-2.jpg",
                versions: ['320', '600']
            },
            {
                type:"iframe",
                src:'<iframe width="560" height="315" src="https://www.youtube.com/embed/F0uWuyqAFoY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            }
        ]
    },
    {
        id: 8,
        name: "Yellow and blue",
        cover:{
            src:"yellow-and-blue.jpg",
            type: "image",
            versions:['320','600','800','960']
        },
        content: "MARK ROTHKO « Yellow and blue »<hr><br>Réinterprétation Photographique<br>Direction artistique<br>2016",
        slug:"yellow-and-blue",
        medias:[
            {
                type:"image",
                src:"yellow-and-blue-1.jpg",
                versions: ['320', '600', '960']
            }
        ]
    },
    {
        id: 9,
        name: "Akina Wise",
        cover:{
            src:"akina-wise.jpg",
            type: "image",
            versions: ['320', '600', '800','960']
        },
        content: "AKINA WISE « Galaxy Girl »<hr><br>Pochette de disque<br>Design graphique / Photographie<br>2017",
        slug:"akina-wise",
        medias:[
            {
                type:"image",
                src:"akina-wise-1.jpg",
                versions: ['320', '600', '960']
            },
            {
                type: "image",
                src: "akina-wise-2.jpg",
                versions: ['320', '600']
            }
        ]
    },
    {
        id: 10,
        name: "Eldorado Afro",
        cover:{
            src: "eldorado-afro.jpg",
            type: "image",
            versions: ['320', '600', '800']
        },
        content:"Eldorado Afro: Une journée sur l’héritage africain du Mexique<hr><br><b>Client</b>: Wawa L’asso<br><b>Mission</b>: Design graphique / DA<br>Direction artistique: F.E Original Cosmic<br>Photo: Elliot Duk<br>Style: Jeannine Fischer<br>Modèle: Coralie Djondo<br>Make up: Sophia<br>Assistante: Estelle Periou<hr>© 2019 𝘖𝘳𝘪𝘨𝘪𝘯𝘢𝘭 𝘊𝘰𝘴𝘮𝘪𝘤",
        slug:"eldorado-afro",
        medias:[
            {
                type:"image",
                src:"eldorado-afro-1.jpg",
                versions: ['320', '600']
            }
        ]
    },
    {
        id:11,
        name:"Ombres Colorées",
        cover:{
            src:"ombre-colorees.jpg",
            type: "image",
            versions: ['320', '600']
        },
        content:"Ombres Colorées <hr> Client: Wawa L’Asso<br>Mission: Print / Multimédia<br>Photo: Matt Doheny<br>Model: Will B.Bell",
        slug:"ombres-colorees",
        medias:[
            {
                type:"image",
                src:"ombre-colorees-1.jpg",
                versions: ['320', '600', '960']
            }
        ]
    },
    {
        id:12,
        name:'Maescroc',
        cover:{
            src:"maescroc.jpg",
            type: "image",
            versions: ['320', '600']
        },
        content:"MAESCROC « NordikZoo »<hr><br>Pochette de disque<br>Poster<br>Design graphique<br>2016",
        slug:'maescroc',
        medias:[
            {
                type:"image",
                src:"maescroc-1.jpg",
                versions: ['320', '600']
            },
            {
                type: "image",
                src: "maescroc-2.jpg",
                versions: ['320']
            }
        ]
    },
    {
        id:13,
        name:"OMG",
        cover:{
            src:"omg.mp4",
            type:"video"
        },
        content: "OMG<br>En développement<br>Film court d’animation",
        slug:'omg',
        medias: [
            {
                type:"iframe",
                src: '<iframe width="560" height="315" src="https://www.youtube.com/embed/i0NQXLxOXEo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            }
        ]
    },
    {
        id:14,
        name:"Doux divorce records",
        cover:{
            src:"doux-divorce-records.jpg",
            type: "image",
            versions: ['320', '600']
        },
        content:"DOUX DIVORCE RECORDS<br>Label de musique<hr>Identité visuelle<br>Design graphique<br>2017",
        slug:"doux-divorce-records",
        medias: [
            {
                type:"image",
                src:"doux-divorce-records-1.jpg",
                versions: ['320', '600']
            },
            {
                type: "image",
                src: "doux-divorce-records-2.jpg",
                versions: ['320']
            },
            {
                type: "image",
                src: "doux-divorce-records-3.jpg",
                versions: ['320']
            }
        ]
    },
    {
        id:15,
        name:"Ronan Martin",
        cover:{
            src:"ronan-martin.jpg",
            type: "image",
            versions: ['320', '600']
        },
        content:"RONAN MARTIN « À l’intérieur »<hr>Pochette de disque<br>Design graphique<br>2017<br>",
        slug:"ronan-martin",
        medias: [
            {
                type: "image",
                src: "ronan-martin-1.jpg",
                versions: ['320','600','960']
            },
            {
                type:"image",
                src:"ronan-martin-2.jpg",
                versions: ['320', '600']
            }
            
        ]
    },
    {
        id:16,
        name: "Ronan Martin « Les rayons »",
        cover:{
            src: "les-rayons.jpg",
            type: "image",
            versions: ['320', '600', '800']
        },
        content: "RONAN MARTIN « Les rayons »<hr>Pochette de disque<br>Clip musical<br>Direction artistique<br>Réalisation vidéo<br>Design graphique<br>2015",
        slug: "ronan-martin-les-rayons",
        medias: [
            {
                type: "image",
                src: "les-rayons-1.jpg",
                versions: ['320', '600', '960']
            },
            {
                type: "iframe",
                src: '<iframe width="560" height="315" src="https://www.youtube.com/embed/sES64_1VmVU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            },
            {
                type: "image",
                src: "les-rayons-2.jpg",
                versions: ['320']
            }
        ]
    },
    {
        id:17,
        name: "Salvak « Vendetta »",
        cover:{
            src: "cycle-01.mp4",
            type: "video"
        },
        content: "SALVAK « Vendetta »<hr>Clip musical<br>Animation 2d<br>2017",
        slug: "vendetta",
        medias: [
            {
                type: "iframe",
                src: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Mg_s40GsIbo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            }
        ]
    }


];
export default data;