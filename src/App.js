

import React from 'react'; 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Register } from './components/register/Register';
import { Login } from './components/login/Login';
import { Home } from './components/home/Home';
import {Mainpage} from './components/mainpage/Mainpage';
import { HeaderProductos } from './components/headerProductos/HeaderProductos';
import { Footer } from './components/footer/Footer';
import {DetailProduct} from './components/DetailProduct/DetailProduct';
import  CheckBasket from './components/CheckBasket/CheckBasket';
import {PrivateRoute} from './components/PrivateRoute';
import {ProtectedLogin} from './components/ProtectedLogin';
import { SaleReport } from './components/saleReports/SaleReport';
import {Dashboard } from './components/Dashboard/Dashboard';
import {FormularioServicio} from "./components/formularioServicio/FormularioServicio";
function App() {

  

  return (
    

    <div className="app">
      <Router>
        <Switch>
        <Route exact path="/" component ={Home} /> 
      <ProtectedLogin exact path="/login">
        <Login />
      </ProtectedLogin>
        

        <Route exact path="/register" component ={Register} />
        
        <Route exact path="/dashboard" component={Dashboard} />
      
        <Route exact path="/service" component={FormularioServicio}/>
        <Route exact path="/mainpage/reports" component={SaleReport}/>
    
          <>
          <HeaderProductos />  

          <Route exact path="/mainpage" component={Mainpage} />
        <Route exact path="/mainpage/product/:id" component={DetailProduct} />
        <PrivateRoute exact path="/mainpage/basket" >
          <CheckBasket />
          </PrivateRoute>

          <Footer />

      
          </>
    
        </Switch>
      </Router>


    </div>

  );
}

export default App;
