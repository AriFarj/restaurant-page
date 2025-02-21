import "./style.css";
import { loadHome } from "./home.js";
import  {loadAbout} from "./about.js"
import { loadMenu } from "./menu.js";

btnEventListeners();
loadHome();

function btnEventListeners() {
    const homePage = document.querySelector(".home")
    const menuPage = document.querySelector(".menu")
    const aboutPage = document.querySelector(".about")

    homePage.addEventListener("click", loadHome);
    aboutPage.addEventListener("click", loadAbout);
    menuPage.addEventListener("click", loadMenu);
}