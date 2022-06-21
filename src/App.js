import React from 'react';

import { Navbar, Header, Features, WhatFylo, Testimonial, Subscription, Footer } from './components';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="intro__bg">
        <Navbar/>
        <Header/>
      </div>
      <Features />
      <WhatFylo />
      <Testimonial />
      <Subscription />
      <Footer/>
  </div>
  )
}

export default App;