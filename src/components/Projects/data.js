let data = [
    {
        id:1,
        name:"Voici mon premier projet",
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
        name: "Voici mon second projet",
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
        content: "Affiche française pour « 𝗟𝗲 𝗗𝗲́𝘀𝗲𝗿𝘁𝗲𝘂𝗿 » de Maxime Giroux. Avec Martin Dubreuil, Romain Duris, Reda Kateb et SoKo. Production : Metafilms.<hr/>𝗖𝗹𝗶𝗲𝗻𝘁: Ligne 7<br>𝗠𝗶𝘀𝘀𝗶𝗼𝗻 : Print / Multimédia © 2019 𝘖𝘳𝘪𝘨𝘪𝘯𝘢𝘭 𝘊𝘰𝘴𝘮𝘪𝘤",
        slug:"le-deserteur",
        medias:[
            {
                type:'image',
                src:"DSRTRFONNW.jpg",
                versions:['320','600','960','1280']
            },
            {
                type:'image',
                src:"DSRTRmock1a-480x480.jpg",
                versions: ['320']
            },
            {
                type:'image',
                src:"DSRTRmock2a-480x480.jpg",
                versions: ['320']
            },
            {
                type:'image',
                src:"DSRTRmock3a-480x480.jpg",
                versions: ['320']
            },
            {   
                type:'image',
                src:"DSRTRmock4a-480x480.jpg",
                versions: ['320']
            },
            {
                type:'image',
                src:"DSRTRmock5a-480x480.jpg",
                versions: ['320']
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
                src: "AFGLAMA0PTA-960x960.jpg",
                versions: ['320','600']
            },
            {
                type:"image",
                src:"AFRIKAGLAMPOSTCARD-1440x960.jpg",
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
                src:"themicevinyl-1440x960.jpg",
                versions: ['320', '600', '960']
            },
            {
                type:"image",
                src:"micecover2-960x960.jpg",
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
                src:"fb8b0920194783.562e73d182e89-1336x890.jpg",
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
                src:"akinavinyl-1440x960.jpg",
                versions: ['320', '600', '960']
            },
            {
                type: "image",
                src: "akinados-960x960.jpg",
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
        content:"Eldorado Afro: Une journée sur l’héritage africain du Mexique<hr><br>𝗖𝗹𝗶𝗲𝗻𝘁: Wawa L’asso<br>𝗠𝗶𝘀𝘀𝗶𝗼𝗻: Design graphique / DA<br>Direction artistique: F.E Original Cosmic<br>Photo: Elliot Duk<br>Style: Jeannine Fischer<br>Modèle: Coralie Djondo<br>Make up: Sophia<br>Assistante: Estelle Periou<hr>© 2019 𝘖𝘳𝘪𝘨𝘪𝘯𝘢𝘭 𝘊𝘰𝘴𝘮𝘪𝘤",
        slug:"eldorado-afro",
        medias:[
            {
                type:"image",
                src:"EldoradoAfroAff-960x1440.jpg",
                versions: ['320', '600']
            }
            //there is none...
        ]
    },


    //Voilà on a tout
    //Maintenant il faut mettre les images
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
                src:"WAKAMOCKPOSTOC-1440x1440.jpg",
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
                src:"9e290317527117.56647b81cf2d0-960x960.jpg",
                versions: ['320', '600']
            },
            {
                type: "image",
                src: "f0238c17527117.5664a1a5ad5a0-1-433x866.jpg",
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
                src:"13925472_1153557848000435_706687528803582981_o-960x960.png",
                versions: ['320', '600']
            },
            {
                type: "image",
                src: "13909005_574832796029717_191003813203858820_o-480x480.jpg",
                versions: ['320']
            },
            {
                type: "image",
                src: "11021112_878714695484753_6208556186257630867_n-480x480.jpg",
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
                src: "ronaninter3-1920x960.jpg",
                versions: ['320','600','960', '1280']
            },
            {
                type:"image",
                src:"rmdosvinl-960x960.jpg",
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
                src: "ronanrayonsvin-1440x960.jpg",
                versions: ['320', '600', '960']
            },
            {
                type: "iframe",
                src: '<iframe width="560" height="315" src="https://www.youtube.com/embed/sES64_1VmVU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            },
            {
                type: "image",
                src: "1907526_913693705320185_9131023012842273479_n-480x480.png",
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