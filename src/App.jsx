import React from "react";
import "./App.css";
import {
  About,
  Footer,
  Home,
  Navbar,
  // Judges,
  Theme,
  Prize,
  Scheduled,
  Faq,
  Venue,
  Gallery,
  Partners,
  Sponsor
} from "./components";

import { TopButton } from "./components/TopButton";
//import Partners from "./components/Partners/sponsored";

const App = () => {
  return (
    <div className="App">
      <Navbar />
       <Home />
      <About />
      <Theme />
      <Venue />
      <Scheduled />
      <Partners />
      <Prize />
      {/* <Judges/>*/} 
      <Sponsor/>
      <Gallery />
      <Faq />
      <Footer />
      <TopButton /> 
    </div>
  );
};

export default App;
