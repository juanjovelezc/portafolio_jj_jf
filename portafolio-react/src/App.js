import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import Contacto from "./Contacto";
import Proyectos from "./Proyectos";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>          
          <Route path="/proyectos">
            <Proyectos />
          </Route>

          <Route path="/contacto">
            <Contacto />
          </Route>
          
          <Route path="/">
            <Home />
          </Route>

        </Switch>
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;
