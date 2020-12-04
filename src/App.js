import './App.css';

import React, { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {routes} from './routes';




function App() {
  //estructura por el momento
  return (


    <div className="app">
      <Router>
        {/* momentaneo */}
        <Switch>
        {routes.map((route) => {
          return <Route {...route} />
        })}

        </Switch>
      </Router>


    </div>

  );
}

export default App;
