import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.scss';

//Import des éléments (header, footer, etc...)
import Header from './elements/Header/Header.js';
import Footer from './elements/Footer/Footer.js';

//Import du composant pour les Tests divers
import Tests from './components/Tests/Tests.js';

//Import des pages (c'est quand même le plus important)
import Homepage from './pages/Homepage/Homepage.js';
import Studiocontact from './pages/Studiocontact/Studiocontact.js';
import Showreel from './pages/Showreel/Showreel.js';

//Import du composant allProjects (qui n'est pas vraiment une page...)
import AllProjects from './components/AllProjects/AllProjects.js';
import SingleProject from './components/SingleProject/SingleProject.js';

//Et mon not found
import NotFound from './components/NotFound/NotFound';

//On va faire nos jolies petites routes.
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//Link, HashRouter...

//On met du font awesome
import './assets/font-awesome-4.7.0/css/font-awesome.min.css';

//Et react-pose pour les transitions entre les routes
import posed, { PoseGroup } from 'react-pose';

const RouteContainer = posed.div({
  enter: { opacity: 1, delay: 300, beforeChildren: true },
  exit: { opacity: 0 }
});

export class App extends Component {


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
                      <Route 
                        path="/"
                        exact 
                        component={Homepage}
                      />
                      <Route path="/studio" exact component={Studiocontact} />
                      <Route path="/showreel" exact component={Showreel} />
                      <Route path="/projets" exact component={AllProjects} />
                      <Route path="/projet/:slug" exact component={SingleProject} />

                      <Route path="/tests" exact component={Tests} />
                      <Route component={NotFound} />

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

}

export default App;
