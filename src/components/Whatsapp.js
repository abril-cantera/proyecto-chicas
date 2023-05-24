import React from "react";
import '../styles/whatsapp.css'
import { SiWhatsapp } from 'react-icons/si'


const Whatsapp = () => {
  return (
    <a
      target="_blank"
      href="https://wa.me/5492615791178?text=Hola! Vengo desde tu web.." className="containerIcon"
    >
      <SiWhatsapp className="icon" />
    </a>
  );
}

export default Whatsapp;