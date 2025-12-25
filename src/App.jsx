import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import Services from "./components/Services";
import OurWork from "./components/OurWork";
import OurTeam from "./components/OurTeam";
import ContactUs from "./components/ContactUs";
import {Toaster} from "react-hot-toast"
import Footer from "./components/Footer";

const App = () => {
  // Initialize theme from localStorage or default to 'light'
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || 'light';
  });

 
  return (
    <div className="dark:bg-black relative">
      <Toaster />
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <TrustedBy />
      <Services />
      <OurWork />
      <OurTeam />
      <ContactUs />
      <Footer theme={theme}/>
    </div>
  );
};

export default App;