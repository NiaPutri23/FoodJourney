import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import './components/footer';
import './components/place-option';
import App from './views/app';
import swRegister from './utils/sw-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
 
const START = 10;
const NUMBER_OF_IMAGES = 100;
// import WebSocketInitiator from './utils/websocket-initiator';
// import CONFIG from './globals/config';

const app = new App({
  button: document.querySelector('#hamburger-button'),
  drawer: document.querySelector('#navigation-drawer'),
  content: document.querySelector('#main-content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
