import {createElement} from "./create-element";
import {navButtonClicks} from "./nav-buttons";

export function initialLoad () {
    createElement('div', '#content','container')

    createElement('div', '#container', 'nav')
    createElement('button', '#nav', 'home', 'home');
    createElement('button', '#nav', 'menu', 'menu');
    createElement('button', '#nav', 'contact', 'contact');

    createElement('div', '#container', 'header');
    createElement('h1', '#header','', 'Dumpling Hours');
    createElement('h1', '#header','', 'Walnut Creeks Best Dim Sum');

    createElement('div', '#container', 'mustTry');
    createElement('h3', '#mustTry','', 'Must Try Items');
    createElement('p', '#mustTry','', 'Juicy Pan Fried Pork Buns');
    createElement('p', '#mustTry','', 'Garlic String Beans');
    createElement('p', '#mustTry','', 'Spicy Xia Long Bao');

    createElement('div', '#container', 'hours');
    createElement('h3', '#hours','', 'Hours');
    createElement('p', '#hours','', 'Monday: 12pm - 9pm');
    createElement('p', '#hours','', 'Tuesday: 12pm - 9pm');
    createElement('p', '#hours','', 'Wednesday: 12pm - 9pm');
    createElement('p', '#hours','', 'Thursday: 12pm - 9pm');
    createElement('p', '#hours','', 'Friday: 12pm - 9pm');
    createElement('p', '#hours','', 'Saturday: 12pm - 9pm');
    createElement('p', '#hours','', 'Sunday: 12pm - 9pm');

    createElement('div', '#container', 'location');
    createElement('h3', '#location','', 'Location');
    createElement('p', '#location','', '100 best dumpling shop, Walnut Creek, CA');

    navButtonClicks();
}
