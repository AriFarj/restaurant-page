import {setActiveTab} from "./setActiveTab.js"
export function loadHome() {

    let openingArray = ['Sunday: 12:00 - 23:00',
        'Monday: 12:00 - 23:00',
        'Tueday: 12:00 - 23:00',
        'Wednesday: 12:00 - 23:00',
        'Thursday: 12:00 - 23:00',
        'Friday: 12:00 - 18:00',
        'Saturday: CLOSED']
    // Clear the page
    const content = document.getElementById('content');
    content.innerHTML = ''

    const homeSection = document.createElement('div');
    content.appendChild(homeSection)

    const homeHeader = document.createElement('h1');
    homeHeader.innerText = "Retaurant Home Page";
    homeSection.appendChild(homeHeader);

    const restaurantDesc = document.createElement('p');
    restaurantDesc.textContent = `Lorem ipsum odor amet, consectetuer adipiscing elit. Primis laoreet ultrices potenti tempus sit elit
    volutpat; leo lectus. Accumsan netus lobortis cras sapien nam ultrices. Egestas placerat eros diam
    mauris montes venenatis ipsum ante. Tincidunt elementum interdum leo; quisque velit himenaeos. Mauris
    sociosqu viverra luctus diam mi cubilia. Netus semper habitasse maecenas etiam elit natoque phasellus
    consequat nullam. Lectus sed taciti egestas luctus consequat mus. Laoreet quis semper tincidunt
    efficitur congue fringilla aenean tellus.`;
    homeSection.appendChild(restaurantDesc);

    const openTimesDiv = document.createElement('div');
    openTimesDiv.classList.add("open-times")

    let days = document.createElement('ul');
    openingArray.forEach(e => {
        let hourElement = document.createElement('li');
        hourElement.innerText = e;
        days.appendChild(hourElement);
    })
    openTimesDiv.appendChild(days)
    homeSection.appendChild(openTimesDiv);
    
    setActiveTab("home");
}



