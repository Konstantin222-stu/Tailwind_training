import { useState } from "react";
import Hero from "./section/Hero";
import Statick from "./section/Statick";
import Price from "./section/Price";
import Services from "./section/Services";
import Projects from "./section/Projects";
import Form from "./section/Form";
import Map from "./section/Map";
import Questions from "./section/Questions";
import Footer from "./section/Footer";

function App() {
  return (
   <>
    <Hero/>
    <Statick/>
    <Price/>
    <Services/>
    <Projects/>
    <Form/>
    <Map/>
    <Questions/>
    <Footer/>
    
   </>
  );
}

export default App;
