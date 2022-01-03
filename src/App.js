import React from 'react';
import './App.css';
import Header from './componenets/Header/Header';
import Shop from './componenets/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Inventory from './componenets/Inventory/Inventory';
import NotFound from './componenets/NotFound/NotFound';
import ProductDetail from './componenets/ProductDetail/ProductDetail';
//import {Switch} from 'react-router'

function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Switch>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route path="/inventory">
            <Inventory></Inventory>
          </Route>
          <Route path='/product/:productKey'>
            <ProductDetail></ProductDetail>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
