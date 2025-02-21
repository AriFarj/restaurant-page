import {setActiveTab} from "./setActiveTab.js"
export function loadAbout() {
    // Clear the page
    const content = document.getElementById('content');
    content.innerHTML = ''

    const aboutSection = document.createElement('div');
    content.appendChild(aboutSection)

    const aboutHeader = document.createElement('h1');
    aboutHeader.innerText = "Contact us for a reservation";
    aboutSection.appendChild(aboutHeader);

    const contactDetails = document.createElement('div');
    const contactHeader = document.createElement('h2');
    contactHeader.innerText = 'NYC Branch';
    aboutSection.appendChild(contactDetails);
    contactDetails.appendChild(contactHeader);

    const phoneNum = document.createElement('p')
    phoneNum.innerText = 'Call us at 06741 30 78 72';
    contactDetails.appendChild(phoneNum);

    const restaurantAddress = document.createElement('p');
    restaurantAddress.innerText = 'Find us at 3 Square de la Couronne'
    contactDetails.appendChild(restaurantAddress);
    setActiveTab("about");
}