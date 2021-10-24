import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import About from './pages/About';
import SingleProduct from './pages/SingleProduct';
import Error from './pages/Error';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Router>
      <Navbar/>
      <Sidebar/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        {/* <Route exact path="/home">
          <Home/>
        </Route> */}
        <Route exact path="/cart">
          <Cart/>
        </Route>
        {/* <Route exact path="/about">
          <About/>
        </Route> */}
        <Route exact path="/product/:id">
          <SingleProduct/>
        </Route>
        <Route exact path="*">
          <Error/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App