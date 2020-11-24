import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import home from "./pages/HomePage/Home";
import products from './pages/Products/Products';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={home}></Route>
        <Route path="/products" component={products}></Route>
      </Switch>
    </Router>
  );
}

export default App;
