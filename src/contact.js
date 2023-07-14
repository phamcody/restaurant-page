export default function contact() {
    let content = document.getElementById('content');

    let headerContainer = document.createElement('div');
    headerContainer.classList.add('header');
    content.appendChild(headerContainer);

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

    

    let menu =  document.createElement('a');
    menu.classList.add('tab');
    menu.classList.add('menu');
    menu.textContent = 'menu';

    let contact = document.createElement('a');
    contact.classList.add('tab');
    contact.classList.add('contact');
    contact.textContent = 'contact';

    tabsContainer.appendChild(home);
    tabsContainer.appendChild(menu);
    tabsContainer.appendChild(contact);

    let mainContainer = document.createElement('div');
    mainContainer.classList.add('main');
    content.appendChild(mainContainer);

    let mainSubContainer = document.createElement('div');
    mainSubContainer.classList.add('aboutContainer');

    mainContainer.appendChild(mainSubContainer);


    let footer = document.createElement('div');
    footer.textContent = 'created by phamcody @ github.com';
    footer.classList.add('footer');

    content.appendChild(footer);

}