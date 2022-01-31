import {createElement} from "./create-element"
import {navButtonClicks} from "./nav-buttons";

export function contactLoad () {

    createElement('div', '#content','container')

    createElement('div', '#container', 'nav')
    createElement('button', '#nav', 'home', 'home');
    createElement('button', '#nav', 'menu', 'menu');
    createElement('button', '#nav', 'contact', 'contact');

    createElement('div', '#container', 'contactSection');
    createElement('h3', '#contactSection', '', 'Contact Info');
    createElement('p','#contactSection', '', 'Phone number: 1234567890');
    createElement('p','#contactSection', '', 'Email: info@dumplings.com');
    createElement('p','#contactSection', '', 'Address: 1234 dumpling way, dumplingville, NC, 994509');

    navButtonClicks();
}