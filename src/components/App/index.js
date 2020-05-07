// == Import npm
import React from 'react';


// == Import
import reactLogo from './react-logo.svg';
import './styles.css';

// == Composant
const Header = ({ children }) => (
  <div className="app">
    <div className="header">
      <h1>Parce que React c'est cool</h1>
      <img src={reactLogo} alt="logo-react" />
    </div>
    {children}
  </div>
);

const Main = ({ children }) => (
  <div className="main">
    <h2 className="title-main">Lundi 11 mai 2020</h2>
    <h3 className="sub-title-main">Post confinement</h3>
    {children}
  </div>
);

const List = () => (
  <div>
    <ul className="list">
      <li className="list-li">Restaurant</li>
      <li className="list-li">Bar</li>
      <li className="list-li">Repeat</li>
    </ul>
  </div>
);

const Footer = () => (
  <div className="footer">
    <h4 className="title-footer">Bientot la 2eme vague</h4>
    <p className="sub-title-footer">La loi du plus fort</p>
  </div>
);


// == Export
export {
  Header,
  Main,
  List,
  Footer,
};
