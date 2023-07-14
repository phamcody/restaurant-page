export default function contact() {
    let content = document.getElementById('content');

    let mainContainer = document.createElement('div');
    mainContainer.classList.add('main');
    mainContainer.classList.add('contactMain');
    content.appendChild(mainContainer);

    let leftContainer = document.createElement('div');
    leftContainer.classList.add('left-container');
    mainContainer.appendChild(leftContainer);

    let leftHeader = document.createElement('div');
    leftHeader.classList.add('aboutHeader');
    leftHeader.textContent = 'about us'
    leftContainer.appendChild(leftHeader);

    let leftDesc = document.createElement('div');
    leftDesc.classList.add('leftDesc');
    leftDesc.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet sem non mi consectetur consectetur. Nunc a lacus ut orci cursus congue. Aliquam eget tincidunt magna, sed efficitur ipsum. Donec ut dictum augue. Nulla eu diam sit amet ex ullamcorper consequat sed ut leo. Morbi ut magna fermentum, blandit ex ac, tincidunt libero. Vestibulum auctor dolor vitae est egestas bibendum. Aliquam a eleifend arcu. Nullam magna sapien, volutpat ut venenatis et, euismod ut arcu. Maecenas nulla ante, consectetur id consequat eu, congue sed justo. Mauris luctus gravida lacinia. Nullam eget auctor dolor, quis dapibus nulla.'
    leftContainer.appendChild(leftDesc);

    let rightContainer = document.createElement('div');
    rightContainer.classList.add('right-Container');
    let rightContact = document.createElement('div');
    rightContact.classList.add('aboutHeader');
    rightContact.textContent = 'contact';
    rightContainer.appendChild(rightContact);
    let rightPhone = document.createElement('div');
    rightPhone.classList.add('rightDesc');
    rightPhone.textContent = '123-456-7890';
    let rightAddress = document.createElement('div');
    rightAddress.classList.add('rightDesc');
    rightAddress.textContent = '1234 Sesame Street, Bupkis LA, 28372';
    let rightHours = document.createElement('div');
    rightHours.classList.add('rightDesc')
    rightHours.setAttribute('style', 'white-space: pre');
    rightHours.textContent = 'Monday: 11:00am - 9:00pm \r\n';
    rightHours.textContent += 'Tuesday: 11:00am - 9:00pm \r\n';
    rightHours.textContent += 'Wednesday: 11:00am - 9:00pm \r\n';
    rightHours.textContent += 'Thursday: 11:00am - 9:00pm \r\n';
    rightHours.textContent += 'Friday: 11:00am - 9:00pm \r\n';
    rightHours.textContent += 'Saturday: 4:00pm - 2:00am \r\n';
    rightHours.textContent += 'Sunday: CLOSED \r\n';

    mainContainer.appendChild(rightContainer);
    rightContainer.appendChild(rightPhone);
    rightContainer.appendChild(rightAddress);
    rightContainer.appendChild(rightHours);

    let footer = document.createElement('div');
    footer.textContent = 'created by phamcody @ github.com';
    footer.classList.add('footer');

    content.appendChild(footer);

}