import './App.css';
import React, { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { Register } from './components/register/Register';


function App() {
  //estructura por el momento
  return (


    <div className="app">
      <Router>
        {/* momentaneo */}
        <Switch>
          <Router exact path="/" >
            <h1>CUERPO DE INTRODUCCION</h1>
          </Router>

          <Route exact path="/register">
            <Register />
          </Route>


        </Switch>
      </Router>

    </div>

  );
}

export default App;
