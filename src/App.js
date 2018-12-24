import React, { Component } from 'react';
import './App.css';
import NavMenu from '../src/component/NavMenu';
import Home from '../src/component/Home';
import Footer from '../src/component/Footer';
import img4 from './images/img4.JPG';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
     
    <BrowserRouter basename = {process.env.PUBLIC_URL}>
      <div className ='main-container'  style= {{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${img4})`} }>
        <NavMenu/>
        {/* <Home/> */}
          <Switch>
            <Route exact path ='/' render = {()=> <Home/>} />
          </Switch>
        <Footer/>
      </div>
    </BrowserRouter>

    );
  }
}
export default App;
