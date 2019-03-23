import React, { Component } from 'react';
import ReactDOM from 'react-dom'; 
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import './App.css';
import arrow from './Grand Auto_files/arrow-down.svg';
import logoLight from './Grand Auto_files/logo-light.svg';
import logoDark from './Grand Auto_files/logo-dark.svg';

class App extends Component {
    constructor(props) {
    super(props);
    this.state = { imgSrc: logoLight };
    this.scrollFunction = this.scrollFunction.bind(this); 
    }  

componentDidMount() {
    window.addEventListener('scroll', this.scrollFunction);
}

componentWillUnmount() {
  window.removeEventListener("scroll", this.scrollFunction);
}

scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").className = 'u-header__section g-bg-black-opacity-0_7 g-transition-0_3 light-theme u-theme-shadow-v1 g-bg-white g-py-10--md js-header-change-moment';
    document.getElementById("logo-first").className = 'g-width-235 g-width-225--md d-none js-header-change-moment';
    document.getElementById("logo-second").className = 'g-width-235 g-width-225--md d-block js-header-change-moment';
    document.getElementsByClassName("sidebar")[0].style.background = 'white';  
    document.getElementsByClassName("cross")[0].style.color = 'black'; 
  } else {
    document.getElementById("header").className = 'u-header__section g-bg-black-opacity-0_7 g-transition-0_3 dark-theme g-bg-black-opacity-0_4';
    document.getElementById("logo-first").className = 'g-width-235 g-width-225--md d-block';
    document.getElementById("logo-second").className = 'g-width-235 g-width-225--md d-none'; 
    document.getElementsByClassName("sidebar")[0].style.background = 'black'; 
    document.getElementsByClassName("cross")[0].style.color = 'white'; 
  }
}
  render() {
    return (
<div className="App">
    <Header/>
    <Sidebar/>
    <Home/>
    <div id="section-second" className="tester"></div>
</div>
    );
  }
}

export default App;
