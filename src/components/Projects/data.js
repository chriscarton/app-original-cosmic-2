let data = [
    {
        id: 1,
        name: "Jeune Juliette",
        cover: {
            src: "jeune-juliette.jpg",
            type: "image",
            versions:['320','600'],
            originalWidth:1000
        },
        content: "Jeune Juliette, un film de Anne Émond.<br/>Affiche de film. <br/><hr/><b>Pour</b> : Ligne 7. <br/><b>Mission</b> : Design graphique.<br>2019",
        slug: "jeune-juliette",
        medias: [
            {
                type: 'image',
                src: "jeune-juliette-1.jpg",
                versions:['320','600','1280'],
                originalWidth: 1920
            },
            {
                type: 'image',
                src: "jeune-juliette-2.jpg",
                versions: ['320', '600', '1280'],
                originalWidth: 1920
            }
        ]
    },
    /*
    {
        id: 2,
        name: "Les Alchimistes",
        cover: {
            src: "les-alchimistes.mp4",
            type: "video"
        },
        content: "Conception identité et charte graphique. Conception bande sonore.<hr><b>Pour : </b>Les Alchimistes, société de production et de distribution de films<br><b>Mission : </b>Design graphique, animation 2D<br><i>Musique originale : Frank Essam</i><br>2019",
        slug: "les-alchimistes",
        medias: [
            {
                src:"ALALTER2.png",
                type:"image"
            },
            {
                src: "ALLOGANIM.mp4",
                type: "video"
            },
            // {
            //     src: "ALALTER2BLANC.png",
            //     type: "image"
            // },
            {
                src: "ALALTER2BLEU.png",
                type: "image"
            },
            {
                src: "ALALTER2CYAN.png",
                type: "image"
            },
            {
                src: "ALALTER2MAGENTA.png",
                type: "image"
            },
            {
                src: "ALALTER2MAGENTAJAUNE.png",
                type: "image"
            },
            {
                src: "ALALTER2NOIR.png",
                type: "image"
            },
            {
                src: "ALALTER2ROUGE.png",
                type: "image"
            },
            {
                src: "ALALTER2VERT.png",
                type: "image"
            },
        ]
    },
    */
    {
        id:3,
        name:"Alexandre le fou",
        cover:{
            src:"alexandre-le-fou.jpg",
            type:"image",
            versions: ['320','600'],
            originalWidth: 960
        },
        content: "Alexandre Le Fou de Pedro Pires.<br/>Affiche de film. <br/><hr/><b>Pour</b> : Maison 4: 3. <br/><b>Mission</b> : Design graphique.<br>2019",
        slug:"alex-le-fou",
        medias:[
            {
                type:'image',
                src:"alexandre-le-fou.jpg",
                versions: ['320', '600'],
                originalWidth: 960
            }
        ]
    },
    {
        id: 4,
        name: "Introspections sélectives",
        cover:{
            src:"amanda-is.jpg",
            type: "image",
            versions: ['320','600'],
            originalWidth: 960
        },
        content:"Couverture de livre.<hr/><b>Pour</b> : AWK STUDIO. <br/> <b>Mission</b> : Illustration, Design graphique.<br>2019",
        slug:"amanda-is",
        medias:[
            {
                type: 'image',
                src: "amanda-is.jpg",
                versions:['320','600'],
                originalWidth: 960
            },
            {
                type:'image',
                src:"amanda-is-2.jpg",
                versions: ['320', '600'],
                originalWidth: 874
            }
        ]
    },
    {
        id: 5,
        name: "Le déserteur",
        cover:{
            src:"le-deserteur.jpg",
            type: "image",
            versions: ['320','600'],
            originalWidth: 953
        },
        content: "Affiche française pour « <b>Le Déserteur</b> » de Maxime Giroux. Avec Martin Dubreuil, Romain Duris, Reda Kateb et SoKo. Production : Metafilms.<hr/><b>Pour</b> : Ligne 7<br><b>Mission</b> : Print / Multimédia <br>2019",
        slug:"le-deserteur",
        medias:[
            {
                type:'image',
                src:"le-deserteur-1.jpg",
                versions: ['320', '600'],
                originalWidth: 874
            },
            {
                type:'image',
                src:"le-deserteur-2.jpg",
                versions: ['320'],
                originalWidth: 480
            },
            {
                type:'image',
                src:"le-deserteur-3.jpg",
                versions: ['320'],
                originalWidth: 480
            },
            {
                type:'image',
                src:"le-deserteur-4.jpg",
                versions: ['320'],
                originalWidth: 480
            },
            {   
                type:'image',
                src:"le-deserteur-5.jpg",
                versions: ['320'],
                originalWidth: 480
            },
            {
                type:'image',
                src:"le-deserteur-6.jpg",
                versions: ['320'],
                originalWidth: 480
            }
        ]
    },
    {
        id: 6,
        name: "Afrika Glam",
        cover:{
            src:"afrika-glam.jpg",
            type: "image",
            versions: ['320','600'],
            originalWidth: 960
        },
        content: "<b>Pour</b> : Afrika Box<br/>Direction artistique<br>Photographie<br>Design graphique<br>Print<br>2019",
        slug:"afrika-glam",
        medias:[
            {
                type: "image",
                src: "afrika-glam-1.jpg",
                versions: ['320','600'],
                originalWidth: 856
            },
            {
                type:"image",
                src:"afrika-glam-2.jpg",
                versions: ['320','600'],
                originalWidth: 856
            }
        ]
    },
    {
        id: 7,
        name: "Original Cosmic Playlist",
        type: 'playlists',
        cover:{
            src:"ocp1.mp4",
            type: "video"
        },
        content:"<br>Chaque mois, une playlist, une composition visuelle originale.",
        slug:"original-cosmic-playlist",
        medias:[
            {
                type:"video",
                src:"ocp1.mp4"
            },
            {
                type:"playlist",
                src:"<iframe width='100%' height='500' scrolling='no' frameborder='no' allow='autoplay' src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/805416213&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'></iframe>"
            },
            {
                type:"playlist",
                src: "<iframe width='100%' height='500' scrolling='no' frameborder='no' allow='autoplay' src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/806095368&amp;color=%23fc485c&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true'></iframe>"
            },
            {
                type: "video",
                src: "ocp2.mp4"
            }
        ]
    },
    {
        id: 8,
        name: "Paleo",
        cover:{
            src:"paleo.mp4",
            type: "video"
        },
        content: "Clip promotionnel<hr/><b>Pour</b> : Bitteschoen TV<br/><b>Mission</b> : Animation 2D<br>2017",
        slug:"paleo",
        medias:[
            {
                type:"iframe",
                src: '<iframe width="560" height="315" src="https://www.youtube.com/embed/WEjdhLse2Sg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            }
        ]
    },
    {
        id: 9,
        name: "The Mice",
        cover:{
            src:"the-mice.jpg",
            type: "image",
            versions: ['320','600'],
            originalWidth: 1024
        },
        content: "THE MICE « Incantations »<hr>Pochette de disque<br>Photographie<br>Design graphique<br>Clip musical<br>2016",
        slug:"the-mice",
        medias:[
            {
                type:"image",
                src:"the-mice-1.jpg",
                versions: ['320', '600', '1280'],
                originalWidth: 1440
            },
            {
                type:"image",
                src:"the-mice-2.jpg",
                versions: ['320', '600'],
                originalWidth: 960
            },
            {
                type:"iframe",
                src:'<iframe width="560" height="315" src="https://www.youtube.com/embed/F0uWuyqAFoY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            }
        ]
    },
    {
        id: 10,
        name: "Yellow and blue",
        cover:{
            src:"yellow-and-blue.jpg",
            type: "image",
            versions: ['320','600'],
            originalWidth: 1024
        },
        content: "MARK ROTHKO « Yellow and blue »<hr>Réinterprétation Photographique<br>Direction artistique<br>2016",
        slug:"yellow-and-blue",
        medias:[
            {
                type:"image",
                src:"yellow-and-blue-1.jpg",
                versions: ['320', '600', '1280'],
                originalWidth: 1336
            }
        ]
    },
    {
        id: 11,
        name: "Akina Wise",
        cover:{
            src:"akina-wise.jpg",
            type: "image",
            versions: ['320','600'],
            originalWidth: 1000
        },
        content: "AKINA WISE « Galaxy Girl »<hr>Pochette de disque<br>Design graphique / Photographie<br>2017",
        slug:"akina-wise",
        medias:[
            {
                type:"image",
                src:"akina-wise-1.jpg",
                versions: ['320', '600', '1280'],
                originalWidth: 1440
            },
            {
                type: "image",
                src: "akina-wise-2.jpg",
                versions: ['320', '600'],
                originalWidth: 960
            }
        ]
    },
    {
        id: 12,
        name: "Eldorado Afro",
        cover:{
            src: "eldorado-afro.jpg",
            type: "image",
            versions: ['320','600'],
            originalWidth: 800
        },
        content:"Une journée sur l’héritage africain du Mexique<hr><b>Pour </b> : Wawa L’asso<br><b>Mission</b> : Design graphique / DA<br><b>Direction artistique</b> : F.E Original Cosmic<br><b>Photo</b> : Elliot Duk<br><b>Style</b> : Jeannine Fischer<br><b>Modèle</b> : Coralie Djondo<br><b>Make up</b> : Sophia<br><b>Assistante </b>: Estelle Periou<br/>2019",
        slug:"eldorado-afro",
        medias:[
            {
                type:"image",
                src:"eldorado-afro-1.jpg",
                versions: ['320', '600'],
                originalWidth: 960
            },
            {
                type:"image",
                src:"eldorado-afro-2.jpg",
                versions: ['320', '600'],
                originalWidth: 856
            }
        ]
    },
    {
        id:13,
        name:"Ombres Colorées",
        cover:{
            src:"ombre-colorees.jpg",
            type: "image",
            versions: ['320','600'],
            originalWidth: 768
        },
        content:"<b>Pour</b> : Wawa L’Asso<br><b>Mission</b> : Print / Multimédia<br><b>Photo</b> : Matt Doheny<br><b>Modèle</b> : Will B.Bell<br/>2019",
        slug:"ombres-colorees",
        medias:[
            {
                type:"image",
                src:"ombre-colorees-1.jpg",
                versions: ['320', '600'],
                originalWidth: 856
            },
            {
                type: "image",
                src: "ombre-colorees-2.jpg",
                versions: ['320', '600'],
                originalWidth: 856
            }
        ]
    },
    {
        id:14,
        name:'Maescroc',
        cover:{
            src:"maescroc.jpg",
            type: "image",
            versions: ['320','600'],
            originalWidth: 900
        },
        content:"MAESCROC « NordikZoo »<hr>Pochette de disque<br>Poster<br>Design graphique<br>2016",
        slug:'maescroc',
        medias:[
            {
                type:"image",
                src:"maescroc-1.jpg",
                versions: ['320', '600'],
                originalWidth: 960
            },
            {
                type: "image",
                src: "maescroc-2.jpg",
                versions: ['320'],
                originalWidth: 433
            }
        ]
    },
    {
        id:15,
        name:"OMG",
        cover:{
            src:"omg.mp4",
            type:"video"
        },
        content: "Film court d’animation<br/>En développement",
        slug:'omg',
        medias: [
            {
                type:"iframe",
                src: '<iframe width="560" height="315" src="https://www.youtube.com/embed/i0NQXLxOXEo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            }
        ]
    },
    {
        id:16,
        name:"Doux divorce records",
        cover:{
            src:"doux-divorce-records.jpg",
            type: "image",
            versions: ['320','600'],
            originalWidth: 768
        },
        content:"Label de musique<hr>Identité visuelle<br>Design graphique<br>2017",
        slug:"doux-divorce-records",
        medias: [
            {
                type:"image",
                src:"doux-divorce-records-1.jpg",
                versions: ['320', '600'],
                originalWidth: 960
            },
            {
                type: "image",
                src: "doux-divorce-records-2.jpg",
                versions: ['320', '600'],
                originalWidth: 845
            },
            {
                type: "image",
                src: "doux-divorce-records-3.jpg",
                versions: ['320', '600'],
                originalWidth: 1000
            }
        ]
    },
    {
        id:17,
        name:"Ronan Martin « Les rayons »",
        cover:{
            src:"ronan-martin.jpg",
            type: "image",
            versions: ['320','600','1280','1920'],
            originalWidth: 1920
        },
        content: "« Les rayons »<hr>Pochette de disque<br>Direction artistique<br>Réalisation vidéo<br>Design graphique<br>2015",
        slug:"les-rayons",
        medias: [
            {
                type: "image",
                src: "les-rayons-1.jpg",
                versions: ['320', '600', '1280'],
                originalWidth: 1440
            },
            {
                type: "image",
                src: "les-rayons-2.jpg",
                versions: ['320', '600'],
                originalWidth: 845
            },
            {
                type: "image",
                src: "ronanrayonaff.jpg",
                versions: ['320', '600'],
                originalWidth: 874
            },
            {
                type: "iframe",
                src: '<iframe width="560" height="315" src="https://www.youtube.com/embed/sES64_1VmVU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            }
        ]

        
    },
    {
        id:18,
        name: "Ronan Martin",
        cover:{
            src: "les-rayons.jpg",
            type: "image",
            versions: ['320','600'],
            originalWidth: 1000
        },
        content: "« À l’intérieur »<hr>Pochette de disque<br>Design graphique<br>2017<br>",
        slug: "a-linterieur",
        medias: [
            {
                type: "image",
                src: "ronan-martin-1.jpg",
                versions: ['320', '600', '1280','1920'],
                originalWidth: 1920
            },
            {
                type: "image",
                src: "ronan-martin-2.jpg",
                versions: ['320', '600'],
                originalWidth: 960
            }
        ]
    },
    {
        id:19,
        name: "Salvak",
        cover:{
            src: "cycle-01.mp4",
            type: "video"
        },
        content: "« Vendetta »<hr>Clip musical<br>Animation 2d<br>2017",
        slug: "vendetta",
        medias: [
            {
                type: "iframe",
                src: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Mg_s40GsIbo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            }
        ]
    }
    /*,
    {
        id: 20,
        name: "Les équilibristes",
        cover: {
            src: "les-equilibristes.jpg",
            type: "image",
            //versions: ['320', '600', '800', '960']
        },
        content: "Alexandre Le Fou de Pedro Pires.<br/>Affiche de film. <br/><hr/><b>Pour</b> : Maison 4: 3. <br/><b>Mission</b> : Design graphique.<br>2019",
        slug: "les-equilibristes",
        medias: [
            {
                type: 'image',
                //src: "alexandre-le-fou.jpg"
            }
        ]
    },
    */


];
export default data;