import homepage from './homepage.js';
import './styles.css';
import contact from './contact.js';
import menu from './menu.js';

homepage();

const content = document.getElementById('content');
const homeTab = document.querySelector('.home');
const menuTab = document.querySelector('.menu');
const contactTab = document.querySelector('.contact');


homeTab.addEventListener('click', () => {
    content.replaceChildren();
    homepage();
});

menuTab.addEventListener('click', () => {
    content.replaceChildren();
    menu();
});

contactTab.addEventListener('click', () => {
    content.replaceChildren();
    contact();
});
