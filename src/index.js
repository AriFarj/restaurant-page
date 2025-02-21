import "./style.css";
import { loadHome } from "./home.js";
import  {loadAbout} from "./about.js"

btnEventListeners();
loadHome();

function btnEventListeners() {
    const homePage = document.querySelector(".home")
    const menuPage = document.querySelector(".menu")
    const aboutPage = document.querySelector(".about")

    homePage.addEventListener("click", loadHome);
    aboutPage.addEventListener("click", loadAbout);
}