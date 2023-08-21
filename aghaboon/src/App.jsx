import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MyInformation from './NavBar';
import Home from './Home';
import Education from './education'; 

function App() {
  return (
    <Router>
      <div className='App'>
          <MyInformation />
          <div>
            <Switch>
                <Route path='/education'>
                  <Education />
                </Route>
                
                <Route path='/'>
                  <Home />
                </Route> 
            </Switch>
        </div>
          
      </div>
    </Router>
  );
}

export default App;
