import compositionNoodle from 'images/composition-noodles-bowl.jpg';

export default function homepage() {
    let content = document.getElementById('content');

    let mainContainer = document.createElement('div');
    mainContainer.classList.add('main');
    content.appendChild(mainContainer);

    let mainSubContainer = document.createElement('div');
    mainSubContainer.classList.add('container');

    let cta = document.createElement('div');
    cta.textContent = 'order rahmee now';
    cta.classList.add('cta');

    let description = document.createElement('div');
    description.textContent = "Rahmee is your new goto ramen spot. Made with delicate rich ingredients for rich flavor. It's quite simply, ramen made different."
    description.classList.add('description');

    let btn = document.createElement('button');
    btn.classList.add('btn');
    btn.textContent = 'the menu';

    mainContainer.appendChild(mainSubContainer);
    mainSubContainer.appendChild(cta);
    mainSubContainer.appendChild(description);
    mainSubContainer.appendChild(btn);

    let ramenImage = document.createElement('img');
    ramenImage.src = compositionNoodle;
    ramenImage.setAttribute('alt', 'ramen');
    ramenImage.classList.add('img');

    mainContainer.appendChild(ramenImage);

    let footer = document.createElement('a');
    footer.textContent = 'Image By Freepik';
    footer.setAttribute('href', 'https://www.freepik.com/free-photo/composition-noodles-bowl_11741072.htm#query=ramen%20veggie&position=1&from_view=search&track=ais');
    footer.classList.add('footer');
    footer.classList.add('menuFooter');

    content.appendChild(footer);
    footer.setAttribute('target', '_blank');
    footer.setAttribute('rel', 'noopener noreferrer');
}
