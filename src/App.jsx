import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

const siteProps = {
  name: "Cornelius Emase",
  title: "Software Engineer & Content Creator",
  email: "corneliuslochipi@gmail.com",
  gitHub: "https://github.com/Lochipi",
  instagram: "",
  linkedIn: "satyanhttps://www.linkedin.com/in/cornelius-emase/adella",
  medium: "https://medium.com/@corneliuslochipi",
  twitter: "https://twitter.com/EmaseLC",
  youTube: "Code",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
