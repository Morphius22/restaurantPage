import {eraseDom} from "./erase-dom"
import {initialLoad} from "./initial-load";
import {contactLoad} from "./contact-load"
import {menuLoad} from "./menu-load"

export function navButtonClicks () {
    let homeButton = document.querySelector('#home');
    let menuButton = document.querySelector('#menu');
    let contactButton = document.querySelector('#contact');

    contactButton.addEventListener('click', (e) => {
        eraseDom();
        contactLoad();
    });

    menuButton.addEventListener('click', (e) => {
        eraseDom();
        menuLoad();
    });

    homeButton.addEventListener('click', (e) => {
        eraseDom();
        initialLoad();
    });
}
