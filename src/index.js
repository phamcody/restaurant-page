import homepage from './homepage.js';
import './styles.css';
import contact from './contact.js';
import menu from './menu.js';

let contentContainer = document.querySelector('#content');

let headerContainer = document.createElement('div');
headerContainer.classList.add('header');
contentContainer.appendChild(headerContainer);

let rName = document.createElement('div');
rName.classList.add('name');
rName.textContent = 'rahmee';
headerContainer.appendChild(rName);

let tabsContainer = document.createElement('div');
tabsContainer.classList.add('tabs');
headerContainer.appendChild(tabsContainer);

let home = document.createElement('a');
home.classList.add('tab');
home.classList.add('home');
home.textContent = 'home';


let menuT =  document.createElement('a');
menuT.classList.add('tab');
menuT.classList.add('menu');
menuT.textContent = 'menu';

let contactT = document.createElement('a');
contactT.classList.add('tab');
contactT.classList.add('contact');
contactT.textContent = 'contact';

tabsContainer.appendChild(home);
tabsContainer.appendChild(menuT);
tabsContainer.appendChild(contactT);

const content = document.getElementById('content');

homepage();

home.addEventListener('click', () => {
    let main = document.querySelector('.main');
    let footer = document.querySelector('.footer');
    contentContainer.removeChild(main);
    contentContainer.removeChild(footer);
    homepage();
});

menuT.addEventListener('click', () => {
    let main = document.querySelector('.main');
    let footer = document.querySelector('.footer');
    contentContainer.removeChild(main);
    contentContainer.removeChild(footer);
    menu();
});

contactT.addEventListener('click', () => {
    let main = document.querySelector('.main');
    let footer = document.querySelector('.footer');
    contentContainer.removeChild(main);
    contentContainer.removeChild(footer);
    contact();
});

let menuButton = document.querySelector('.btn');
menuButton.addEventListener('click', () => {
    let main = document.querySelector('.main');
    let footer = document.querySelector('.footer');
    contentContainer.removeChild(main);
    contentContainer.removeChild(footer);
    menu();
})
