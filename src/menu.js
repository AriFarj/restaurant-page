export function loadMenu() {

    let menuItems = [
        {
            name: "Fancy Meal 1",
            image: null,
            price: "59.99"
        },
        {
            name: "Fancy Meal 2",
            image: null,
            price: "69.99"
        },
        {
            name: "Fancy Meal 3",
            image: null,
            price: "79.99"
        },
    ]

    // Clear the page
    const content = document.getElementById('content');
    content.innerHTML = ''

    const menuSection = document.createElement('div');
    content.appendChild(menuSection)
}