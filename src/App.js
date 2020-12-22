import './App.css';

import React, { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import {routes} from './routes';
import { Register } from './components/register/Register';
import { Login } from './components/login/Login';
import { Home } from './components/home/Home';
import {Mainpage} from './components/mainpage/Mainpage';
import { HeaderProductos } from './components/headerProductos/HeaderProductos';
import { Footer } from './components/footer/Footer';
import {DetailProduct} from './components/DetailProduct/DetailProduct';

function App() {
  //estructura por el momento
  return (


    <div className="app">
      <Router>
        {/* momentaneo */}
        <Switch>
        {/* {routes.map((route, id) => {
          return <Route key={id} {...route} />
        })} */}

        <Route exact path="/home" component ={Home} /> 
        <Route exact path="/login" component ={Login} />
        <Route exact path="/register" component ={Register} />

          <>
          <HeaderProductos />  
        <Route exact path="/mainpage" component={Mainpage} />
        <Route exact path="/mainpage/product" component={DetailProduct} />
          <Footer />
          </>


        </Switch>
      </Router>


    </div>

  );
}

export default App;
