import './App.css';

import React, { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Register } from './components/register/Register';
import { Login } from './components/login/Login';
import { Home } from './components/home/Home';
import {Mainpage} from './components/mainpage/Mainpage';
import { HeaderProductos } from './components/headerProductos/HeaderProductos';
import { Footer } from './components/footer/Footer';
import {DetailProduct} from './components/DetailProduct/DetailProduct';
import  CheckBasket from './components/CheckBasket/CheckBasket';
function App() {
  //estructura por el momento
  return (


    <div className="app">
      <Router>
        <Switch>
        <Route exact path="/home" component ={Home} /> 
        <Route exact path="/login" component ={Login} />
        <Route exact path="/register" component ={Register} />

          <>
          <HeaderProductos />  
        <Route exact path="/mainpage" component={Mainpage} />
        <Route exact path="/mainpage/product" component={DetailProduct} />
        <Route exact path="/mainpage/basket" component={CheckBasket} />
          <Footer />
          </>


        </Switch>
      </Router>


    </div>

  );
}

export default App;
