import image1 from "./img/food1.jpg"

export function loadMenu() {

    let menuItems = [
        {
            name: "Fancy Meal 1",
            image: image1,
            price: "59.99"
        },
        {
            name: "Fancy Meal 2",
            image: image1,
            price: "69.99"
        },
        {
            name: "Fancy Meal 3",
            image: image1,
            price: "79.99"
        },
    ]

    // Clear the page
    const content = document.getElementById('content');
    content.innerHTML = ''

    const menuSection = document.createElement('div');
    content.appendChild(menuSection)

    const menuHeader = document.createElement('h1');
    menuHeader.innerText = "Check out our menu!";
    menuSection.appendChild(menuHeader);

    menuItems.forEach( (item) => {
        let itemContainer = document.createElement('div');
        itemContainer.classList.add('menu-item')

        let name = document.createElement("h2");
        name.innerText = item.name;

        let price = document.createElement('p');
        price.innerText = `$ ${item.price}`

        let image = document.createElement('img');
        image.src = `${item.image}`;

        itemContainer.appendChild(image);
        itemContainer.appendChild(name);
        itemContainer.appendChild(price);
        
        menuSection.appendChild(itemContainer);
    })
}