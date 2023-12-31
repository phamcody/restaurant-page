export default function menu() {


    let content = document.getElementById('content');


    let mainContainer = document.createElement('div');
    mainContainer.classList.add('main');
    content.appendChild(mainContainer);


    let mainSubContainer = document.createElement('div');
    mainSubContainer.classList.add('menu-container')
    mainContainer.appendChild(mainSubContainer);

    let itemContainer1 = document.createElement('div');
    itemContainer1.classList.add('itemContainers');
    let titleContainer1 = document.createElement('div');
    titleContainer1.classList.add('titleContainers');
    let itemImg1 = document.createElement('img');
    itemImg1.src = 'images/gourmet-pork-lunch-fresh-vegetable-soup-bowl-generated-by-ai.jpg';
    itemImg1.classList.add('itemImg');
    let itemTitle1 = document.createElement('div');
    let titlePriceContainer1 = document.createElement('div');
    titlePriceContainer1.classList.add('titlePriceContainer');
    itemTitle1.textContent = 'Rahmee Special';
    let itemPrice1 = document.createElement('div');
    itemPrice1.textContent = '$14.99';
    itemPrice1.classList.add('price');
    let itemDesc1 = document.createElement('div');
    itemDesc1.classList.add('itemDesc');
    itemDesc1.textContent = 'Our signature dish, made with love';
    

    mainSubContainer.appendChild(itemContainer1);
    itemContainer1.appendChild(itemImg1);
    itemContainer1.appendChild(titleContainer1);

    titleContainer1.appendChild(titlePriceContainer1);
    titleContainer1.appendChild(itemDesc1);

    titlePriceContainer1.appendChild(itemTitle1);
    titlePriceContainer1.appendChild(itemPrice1);




    let itemContainer2 = document.createElement('div');
    itemContainer2.classList.add('itemContainers');
    let titleContainer2 = document.createElement('div');
    titleContainer2.classList.add('titleContainers');
    let itemImg2 = document.createElement('img');
    itemImg2.src = 'images/korean-instant-noodle-tteokbokki-korean-spicy-sauce-ancient-food.jpg';
    itemImg2.classList.add('itemImg');
    let itemTitle2 = document.createElement('div');
    let titlePriceContainer2 = document.createElement('div');
    titlePriceContainer2.classList.add('titlePriceContainer');
    itemTitle2.textContent = 'Spicy Ice';
    let itemPrice2 = document.createElement('div');
    itemPrice2.textContent = '$21.99';
    itemPrice2.classList.add('price');
    let itemDesc2 = document.createElement('div');
    itemDesc2.classList.add('itemDesc');
    itemDesc2.textContent = 'Our spiciest dish yet, served with an ice cold bev';
    

    mainSubContainer.appendChild(itemContainer2);
    itemContainer2.appendChild(itemImg2);
    itemContainer2.appendChild(titleContainer2);

    titleContainer2.appendChild(titlePriceContainer2);
    titleContainer2.appendChild(itemDesc2);

    titlePriceContainer2.appendChild(itemTitle2);
    titlePriceContainer2.appendChild(itemPrice2);

    let itemContainer3 = document.createElement('div');
    itemContainer3.classList.add('itemContainers');
    let titleContainer3 = document.createElement('div');
    titleContainer3.classList.add('titleContainers');
    let itemImg3 = document.createElement('img');
    itemImg3.src = 'images/flat-lay-noodles-meal-arrangement.jpg';
    itemImg3.classList.add('itemImg');
    let itemTitle3 = document.createElement('div');
    let titlePriceContainer3 = document.createElement('div');
    titlePriceContainer3.classList.add('titlePriceContainer');
    itemTitle3.textContent = 'Veggieta';
    let itemPrice3 = document.createElement('div');
    itemPrice3.textContent = '$12.99';
    itemPrice3.classList.add('price');
    let itemDesc3 = document.createElement('div');
    itemDesc3.classList.add('itemDesc');
    itemDesc3.textContent = 'Eat like an animal, just without the animal';
    

    mainSubContainer.appendChild(itemContainer3);
    itemContainer3.appendChild(itemImg3);
    itemContainer3.appendChild(titleContainer3);

    titleContainer3.appendChild(titlePriceContainer3);
    titleContainer3.appendChild(itemDesc3);

    titlePriceContainer3.appendChild(itemTitle3);
    titlePriceContainer3.appendChild(itemPrice3);

    itemTitle1.classList.add('itemTitle');
    itemTitle2.classList.add('itemTitle');
    itemTitle3.classList.add('itemTitle');

    


    let footer = document.createElement('div');
    footer.classList.add('menuFooter');
    footer.classList.add('footer');
    content.appendChild(footer);

    let credit1 = document.createElement('a');
    credit1.textContent = 'Image By vecstock';
    credit1.classList.add('menuFooter');
    credit1.setAttribute('href', 'https://www.freepik.com/free-ai-image/gourmet-pork-lunch-fresh-vegetable-soup-bowl-generated-by-ai_41570236.htm#query=ramen&position=4&from_view=search&track=sph');

    let credit2 = document.createElement('a');
    credit2.textContent = 'Image By jcomp on Freepik';
    credit2.setAttribute('href', 'https://www.freepik.com/free-photo/korean-instant-noodle-tteokbokki-korean-spicy-sauce-ancient-food_13902893.htm#query=spicy%20ramen&position=4&from_view=keyword&track=ais');

    let credit3 = document.createElement('a');
    credit3.textContent = 'Image By Freepik';
    credit3.setAttribute('href', 'https://www.freepik.com/free-photo/flat-lay-noodles-meal-arrangement_11740902.htm#query=ramen%20veggie&position=2&from_view=search&track=ais');


    footer.appendChild(credit1);
    footer.appendChild(credit2);
    footer.appendChild(credit3);
    credit2.classList.add('menuFooter');
    credit3.classList.add('menuFooter');

    credit1.setAttribute('target', '_blank');
    credit1.setAttribute('rel', 'noopener noreferrer');
    credit2.setAttribute('target', '_blank');
    credit2.setAttribute('rel', 'noopener noreferrer');
    credit3.setAttribute('target', '_blank');
    credit3.setAttribute('rel', 'noopener noreferrer');

}

