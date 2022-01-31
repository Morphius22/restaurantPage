import {createElement} from "./create-element"
import {navButtonClicks} from "./nav-buttons";

export function menuLoad () {

    createElement('div', '#content','container')

    createElement('div', '#container', 'nav')
    createElement('button', '#nav', 'home', 'home');
    createElement('button', '#nav', 'menu', 'menu');
    createElement('button', '#nav', 'contact', 'contact');

    createElement('div', '#container', 'appetizers');
    createElement('h3', '#appetizers', '', 'Appetizers');
    createElement('p','#appetizers', '', 'Garlic String Beans');
    createElement('p','#appetizers', '', 'Scallion Pancakes');
    createElement('p','#appetizers', '', 'Ox Tail');
    createElement('p','#appetizers', '', 'Fried Okra');

    createElement('div', '#container', 'entrees');
    createElement('h3', '#entrees', '', 'Entrees');
    createElement('p','#entrees', '', 'Juicy Pan Fried Pork Buns');
    createElement('p','#entrees', '', 'Pork Xia Long Bao');
    createElement('p','#entrees', '', 'Spicy Pork Xia Long Bao');
    createElement('p','#entrees', '', 'Scallion Noodles');

    createElement('div', '#container', 'dessert');
    createElement('h3', '#dessert', '', 'Desserts');
    createElement('p','#dessert', '', 'Hit the gym and do some snatches! Work off those dumplings');

    navButtonClicks();

}