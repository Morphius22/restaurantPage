import {initialLoad} from "./utils/initial-load";
import {menuLoad} from "./utils/menu-load"
import {contactLoad} from "./utils/contact-load"
import {navButtonClicks} from "./utils/nav-buttons"
import dumplings from "./assets/dumplings.jpeg"
import "./styles.css"

initialLoad();
navButtonClicks();

let container = document.querySelector('#content');

// let image = document.createElement('img');
// image.src = './assets/dumplings.jpeg';

const myIcon = new Image();
myIcon.src = dumplings;

container.appendChild(myIcon);

// container.appendChild(image);