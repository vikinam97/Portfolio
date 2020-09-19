import React from "react";
import './App.css';
import Header from "./Header/Header.js";
import Details from "./Details/Details";
import Footer from "./Footer/Footer.js";

function App() {
  return (
    <div className="app">
      <Header></Header>
      <Details></Details>
      <Footer></Footer>
    </div>
  );
}

export default App;
