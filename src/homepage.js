

export default function homepage() {
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
    home.textContent = 'home';


    let menu =  document.createElement('a');
    menu.classList.add('tab');
    menu.textContent = 'menu';

    let contact = document.createElement('a');
    contact.classList.add('tab');
    contact.textContent = 'contact';

    tabsContainer.appendChild(home);
    tabsContainer.appendChild(menu);
    tabsContainer.appendChild(contact);

    let mainContainer = document.createElement('div');
    mainContainer.classList.add('main');
    content.appendChild(mainContainer);

    let mainSubContainer = document.createElement('div');
    mainSubContainer.classList.add('container');

    let cta = document.createElement('div');
    cta.textContent = 'order rahmee now';
    cta.classList.add('cta');

    let description = document.createElement('div');
    description.textContent = 'ramen made different. rahmee is your new goto ramen spot. made with delicate rich ingredients for rich flavor'
    description.classList.add('description');

    let btn = document.createElement('button');
    btn.classList.add('btn');
    btn.textContent = 'the menu';

    mainSubContainer.appendChild(cta);
    mainSubContainer.appendChild(description);
    mainSubContainer.appendChild(btn);

    let ramenImage = document.createElement('img');
    ramenImage.src = '../src/images/composition-noodles-bowl.jpg';
    ramenImage.setAttribute('alt', 'ramen');
    ramenImage.classList.add('img');

    mainContainer.appendChild(ramenImage);

    let footer = document.createElement('div');
    footer.textContent = 'created by phamcody @ github.com';
    footer.classList.add('footer');

    content.appendChild(footer);
}