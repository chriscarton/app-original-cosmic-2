import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.scss';

//Import du composant pour les Tests divers
import Tests from './components/Tests/Tests.js';

//Import des pages (c'est quand même le plus important)
import Landing from './pages/Landing/Landing.js';
import Contact from './pages/Contact/Contact.js';
//Pour les mentions légales
import Mentions from './pages/Mentions/Mentions.js';

import Projects from './components/Projects/Projects.js';
import SingleProject from './components/SingleProject/SingleProject.js';

//Et mon not found
import NotFound from './components/NotFound/NotFound';

//On va faire nos jolies petites routes.
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//On met du font awesome
import './assets/font-awesome-4.7.0/css/font-awesome.min.css';

//Et react-pose pour les transitions entre les routes
import posed, { PoseGroup } from 'react-pose';

const RouteContainer = posed.div({
  enter: { opacity: 1, delay: 300, beforeChildren: true },
  exit: { opacity: 0 }
});

export class App extends Component {

  //final version 12
  //hello :)
  render(){
    
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Route
            render={({ location }) => (
            <main id="mainContent">
                <PoseGroup>
                  <RouteContainer key={location.pathname}>
                  
                    <Switch location={location}>
                      <Route 
                        path="/"
                        exact 
                        component={Landing}
                      />
                      <Route path="/contact" exact component={Contact} />
                      <Route path="/projets" exact component={Projects} />
                      <Route path="/projet/:slug" exact component={SingleProject} />
                      <Route path="/mentions" exact component={Mentions} />

                      <Route path="/tests" exact component={Tests} />
                      <Route component={NotFound} />

                    </Switch>
                  </RouteContainer>
                </PoseGroup>
              
            </main>
            )}>
          </Route>
        </div>
      </Router>
    );
  }

}

export default App;
