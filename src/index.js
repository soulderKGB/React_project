import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header';
import logo from './images/logo.png';
import LoginSec from './LoginSec';
import CardSec from './CardSec';
import card1 from './images/card1.png';
import card2 from './images/card2.png';
import card3 from './images/card3.png';
import ModuleTwo from './ModuleTwo';
import poster1 from './images/poster1.jpg';
import Footer from './Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
    <Header imageName={logo} />

    <section id="outerbox">
    <LoginSec/>
     
      <section id="cardssection">
        <CardSec CardName="Debit Card" ImageName={card1} CardInfo="Annual fee Free" CardDetails="Minimum balance AED 3,000"/>
        <CardSec CardName="Smiles World Mastercard" ImageName={card2} CardInfo="Annual fee AED 525" CardDetails=" 80% Cash withdrawal limit"
            CardDetails2= " 2.49% Profit rate*"/>
        <CardSec CardName="Unlimited cash rewards" ImageName={card3} CardInfo=" AED 0* Annual fee" CardDetails="80% Cash withdrawal limit
           "  CardDetails2= "5,000 Minimum"/>

      </section>
      </section>

      <ModuleTwo poster1={poster1}/>

      <Footer/>
    </>
    
  </React.StrictMode>
);