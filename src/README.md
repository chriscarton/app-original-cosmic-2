# Problème de persistance des images 

Il se peut que l'attribut src persiste si l'on est renvoyé vers le même composant mais avec des données différentes. 

Voici comment régler ce problème : 

    componentWillUpdate(){
        
        let imgs = document.querySelectorAll('#singleProject img');

        if(imgs){
            imgs.forEach(function(img){
                img.removeAttribute('src')
            });
        }
    }

# Transition entre les routes avec react-pose 

    yarn add react-pose

Ajouter ceci

    import posed, { PoseGroup } from 'react-pose';

    const RouteContainer = posed.div({
    enter: { opacity: 1, delay: 300, beforeChildren: true },
    exit: { opacity: 0 }
    });

Modifier le render de App.js comme ceci : 
    
    render(){
        return (
            <Router basename={process.env.PUBLIC_URL}>
            <div className="App">
                <Header/>
                <Route
                render={({ location }) => (
                <main id="mainContent">
                    <PoseGroup>
                        <RouteContainer key={location.pathname}>
                        
                        <Switch location={location}>
                            <Route path="/" exact component={Homepage}/>
                            <Route path="/studio" exact component={Studiocontact} />
                            <Route path="/projets" exact component={AllProjects} />
                            <Route path="/projet/:slug" exact component={SingleProject} />

                            <Route path="/tests" exact component={Tests} />
                            {/* <Route component={NotFound} /> */}
                        </Switch>
                        </RouteContainer>
                    </PoseGroup>
                    
                </main>
                )}>
                </Route>

                <Footer/>
            </div>
            </Router>
        );
    }

**Attention** *RouteContainer* doit bien recevoir pathname (*key={location.pathname}*) et non pas *key* comme indiqué dans la documentation. 

Ce problème est documenté dans : 
https://github.com/Popmotion/popmotion/issues/535

# Ajouter une classe active sur la navigation 

Avec React on va utiliser **NavLink** pour ajouter une classe active lors de la navigation (comparaison avec l'url) plutôt que de faire un truc maison :  

    import { Link, NavLink } from 'react-router-dom';

    <div className="menu">
        <NavLink to="/projets" className="menu-link" activeClassName="active">Projets</NavLink>
        <NavLink to="/studio" className="menu-link" activeClassName="active">Studio / contact</NavLink>
    </div>

# Problèmes avec les fontes

## Fonte Cocogoose 

La Cocogoose ne contient pas de chiffres !

Donc pour de l'intégration, voici l'astuce. 

    h1,h2,h3,h4,h5,h6{
        font-family: 'COCOGOOSE';
        .numbers{
            font-family: 'Ubuntu Mono';
        }
    }

Cette fonte est payante et elle coûte 25 bucks. 

https://www.zetafonts.com/cocogoose

# Faire une vidéo à partir d'un .gif

Chose que l'on ne fera plus. 

Lancer la commande : 

    ffmpeg -i animated.gif -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" video.mp4

Sur *ocp1.gif* on passe donc d'un gif de 28mo à une vidéo mp4 de 3.6mo
Sur *ocp2.gif* c'est de 21mo a 1.3mo c'est du **délire** voilà

Ce lien explique tout : 

https://rigor.com/blog/optimizing-animated-gifs-with-html5-video

# Redimensionner des images avec mogrify 

Redimensionne toutes les images jpg **qui font plus de 320px de large** à 320px de large dans un dossier 320 :

    mogrify -path 320 -resize 320x "320x>" *.jpg

Pareil pour 600 : 

    mogrify -path 600 -resize 600x "600x>" *.jpg

mogrify -path 1280 -resize 1280x "1280x>" *.jpg

convert -path 1920 -resize 1920x1920\> *.jpg:

# Deployer 

    //Dans package.json
    "homepage": "https://chriscarton.github.io/app-original-cosmic/",

**Important** : 

    Nom du dossier en local = Nom du repository

Dans App.js

    <Router basename={process.env.PUBLIC_URL}>

Ajouter pour les images et autres videos faire précéder de : 

    process.env.PUBLIC_URL

Comme ceci : 

    <img
        srcSet={item.cover.versions.map((w) => (
            process.env.PUBLIC_URL+'/img/projects/' + w + '/' + item.cover.src + ' ' + w + 'w'
        ))}
        src={process.env.PUBLIC_URL+`/img/projects/${item.cover.src}`}
        alt=""
    />

Et c'est tout, ça fonctionnera aussi bien en local que sur github pages ou dans un sous-dossier.

# Déployer dans GITHUB PAGES

    yarn add gh-pages 

Dans *package.json* ajouter : 

    "homepage":"https://chriscarton.github.io/nom-du-dossier"

Dans *package.json* scripts, modifier *deploy*

    "deploy":"gh-pages -d build" 

Et enfin : 

    yarn run deploy

# Permettre de rafraîchir les pages en PRODUCTION

Tout est plus ou moins expliqué ici : 

https://raquelmsmith.com/blog/how-to-deploy-create-react-app-to-github-pages/

Créer **dans public** un fichier 404.html contenant ce code :

    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <title>Single Page Apps for GitHub Pages</title>
        <script type="text/javascript">
        // Single Page Apps for GitHub Pages
        // https://github.com/rafrex/spa-github-pages
        // Copyright (c) 2016 Rafael Pedicini, licensed under the MIT License
        // ----------------------------------------------------------------------
        // This script takes the current url and converts the path and query
        // string into just a query string, and then redirects the browser
        // to the new url with only a query string and hash fragment,
        // e.g. http://www.foo.tld/one/two?a=b&c=d#qwe, becomes
        // http://www.foo.tld/?p=/one/two&q=a=b~and~c=d#qwe
        // Note: this 404.html file must be at least 512 bytes for it to work
        // with Internet Explorer (it is currently > 512 bytes)
        // If you're creating a Project Pages site and NOT using a custom domain,
        // then set segmentCount to 1 (enterprise users may need to set it to > 1).
        // This way the code will only replace the route part of the path, and not
        // the real directory in which the app resides, for example:
        // https://username.github.io/repo-name/one/two?a=b&c=d#qwe becomes
        // https://username.github.io/repo-name/?p=/one/two&q=a=b~and~c=d#qwe
        // Otherwise, leave segmentCount as 0.
        var segmentCount = 1;
        var l = window.location;
        l.replace(
            l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
            l.pathname.split('/').slice(0, 1 + segmentCount).join('/') + '/?p=/' +
            l.pathname.slice(1).split('/').slice(segmentCount).join('/').replace(/&/g, '~and~') +
            (l.search ? '&q=' + l.search.slice(1).replace(/&/g, '~and~') : '') +
            l.hash
        );
        </script>
    </head>
    <body>
    </body>
    </html>

** ATTENTION ** : *segmentCount* doit être à 1 si on utilise pas de nom de domaine : 

    var segmentCount = 1;

Sinon 0. 

Insérer le script se trouvant ci-dessous dans le head de index.html

    <script type="text/javascript">
      // Single Page Apps for GitHub Pages
      // https://github.com/rafrex/spa-github-pages
      // Copyright (c) 2016 Rafael Pedicini, licensed under the MIT License
      // ----------------------------------------------------------------------
      // This script checks to see if a redirect is present in the query string
      // and converts it back into the correct url and adds it to the
      // browser's history using window.history.replaceState(...),
      // which won't cause the browser to attempt to load the new url.
      // When the single page app is loaded further down in this file,
      // the correct url will be waiting in the browser's history for
      // the single page app to route accordingly.
      (function(l) {
        if (l.search) {
          var q = {};
          l.search.slice(1).split('&').forEach(function(v) {
            var a = v.split('=');
            q[a[0]] = a.slice(1).join('=').replace(/~and~/g, '&');
          });
          if (q.p !== undefined) {
            window.history.replaceState(null, null,
              l.pathname.slice(0, -1) + (q.p || '') +
              (q.q ? ('?' + q.q) : '') +
              l.hash
            );
          }
        }
      }(window.location))
    </script>
    <!-- End Single Page Apps for GitHub Pages -->

# Créer un autodeploy pour Github Pages : 

En gros permet de faire un build et d'envoyer direct sur github pages. 

Dans *packpage.json*, ajouter : 

    "autodeploy": "yarn run build && gh-pages -d build && git add . && git commit -m 'autodeploy' && git push -u origin master"


# Politique Autoplay sur mobile (Chrome, Safari)

Même les videos qui disposent à la fois de l'attribut **autoPlay** et **muted** ne sont pas lues automatiquement sur mobiles tant que l'utilisateur n'a pas eu d'intéraction avec le domaine en cours. 

Donc les vidéos en autoPlay à l'accueil sur mobile même muted, on oublie. Pour toujours.

# Formulaire de contact avec Axios : 

    Voir components/FormContact.js

# Access Control (PHP)

Si on a un script distant, par exemple du PHP dans le cas d'un formulaire de contact, ajouter ces lignes avant toutes sortie : 

    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");

Voir https://stackoverflow.com/questions/25727306/request-header-field-access-control-allow-headers-is-not-allowed-by-access-contr

# COUPER UNE VIDÉO AVEC ffmepg 


    https://medium.com/abraia/basic-video-editing-for-social-media-with-ffmpeg-commands-1e873801659

    ffmpeg -i sequenceacouper.avi -ss 00:39:45.00 -t 00:00:30.00 -c:v copy -c:a copy  nouvellesequence.avi

    ffmpeg -i paleo_128.avi -ss 00:00 -t 00:00:12 -c:v copy -c:a copy  paleo_128-10s.avi

    couper le son : 

    ffmpeg -i paleo_cut.mp4 -c copy -an paleo_no_sound.mp4

    //celle-ci marche pas
    ffmpeg -i paleo_no_sound.mp4 -vf scale=400:-1 paleo_resized.mp4

    ffmpeg -i paleo_no_sound.mp4 -filter:v scale=720:-1 -c:a copy paleo_resized.mp4

    ffmpeg -i paleo_no_sound.mp4 -c:v libx264 -b:v 1.5M -c:a aac -b:a 128k paleo_128.mp4

    ffmpeg -i paleo_128-10s.mp4 -vf scale=400:-1 paleo_scale.mp4

    ffmpeg -i paleo_128-10s.mp4 -vf "scale=600:-2" paleo_scale.mp4

    //OMG
    ffmpeg -i omg.mp4 -ss 03.00 -t 05.00 -c:v copy -c:a copy  omg_cut.mp4
    ffmpeg -i omg_cut.mp4 -c:v libx264 -b:v 1.5M -c:a aac -b:a 128k omg_nosound.mp4
    ffmpeg -i omg_cut.mp4 -vf "scale=800:-2" omg_resized.mp4

    ffmpeg -i omg_resized.mp4 -ss 00.00 -t 05.00 -c:v copy -c:a copy  omg_resized-2.mp4