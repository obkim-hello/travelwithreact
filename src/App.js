import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navibar from './components/Navibar';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Router>
        <Navibar />
        <Switch>
          <Route path="/" exact component= {Home} />
          <Route path="/services" component= {Services} ></Route>    
          <Route path="/products" component= {Products} ></Route>
          <Route path="/sign-up" component= {SignUp} ></Route>
        </Switch>
        <Footer />
      </Router>
      
    </>
    
  );
}

export default App;
