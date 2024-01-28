import { BrowserRouter as Router, Route } from 'react-router-dom';
import React from 'react';
import Apropos from './pages/Apropos';
import Recherche from './pages/Recherche';
import Inscription from './pages/Inscription';




function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Inscription} />
        <Route path="/apropos" component={Apropos} />
        <Route path="/recherche" component={Recherche} />
        <Route path="/inscription" component={Inscription}/>
      </Switch>
    </Router>
  )
}


export default App