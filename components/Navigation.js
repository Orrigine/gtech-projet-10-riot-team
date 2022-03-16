import React from 'react';
import Link from 'next/link';
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';


function MyNavbar() {
return (<>
  <nav className="navbar flex">
    <img className="logo" src="https://pngimg.com/uploads/doge_meme/doge_meme_PNG22.png" alt="logo" />
    <div className="searchBar flex"></div>
    <input id="menu-toggle" type="checkbox" />
    <label class='menu-button-container' for="menu-toggle">
      <div class='menu-button'></div>
    </label>
    <ul class="menu">
      <li>Panier</li>
      <li>Abonnement</li>
      <li>Se Connecter</li>
    </ul>
  </nav>
</>)}
export default MyNavbar;