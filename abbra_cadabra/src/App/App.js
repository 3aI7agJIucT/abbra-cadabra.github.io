import React from 'react';

import '../reset.css';
import '../style.css'

import '../App/Slider/slide'

import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'
import ReactSlickDemo from './Slider/Slider';

function App() {
  return (
    <div className="App">

      <Header/>

      <ReactSlickDemo/>
      
      <Main/>

      <Footer/>

    </div>
  );
}

export default App;
