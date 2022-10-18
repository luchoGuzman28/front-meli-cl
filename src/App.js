import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import Carrusel from "./components/carousel/carousel";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Carrusel />
      <Main />
      <Footer />
    </div>
  );
}
