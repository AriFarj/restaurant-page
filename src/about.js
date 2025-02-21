export function loadAbout() {
    // Clear the page
    const content = document.getElementById('content');
    content.innerHTML = ''

    const aboutSection = document.createElement('div');
    content.appendChild(aboutSection)

    const aboutHeader = document.createElement('h1');
    aboutHeader.innerText = "Contact us for a reservation";

    const contactDetails = document.createElement('div');
    const contactHeader = document.createElement('h2');
    contactHeader.innerText = 'NYC Branch';

    const phoneNum = document.createElement('p')
    phoneNum.innerText = 'Call us at 06741 30 78 72';

    const restaurantAddress = document.createElement('p');
    restaurantAddress.innerText = 'Find us at 3 Square de la Couronne'

    aboutSection.appendChild(aboutHeader);
    aboutSection.appendChild(contactDetails);
    contactDetails.appendChild(contactHeader);
    contactDetails.appendChild(phoneNum);
    contactDetails.appendChild(restaurantAddress);
}