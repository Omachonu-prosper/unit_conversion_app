// imports 
import arrange from './modules/page_layout.js';
import Interactivity from './modules/interactive.js';

// App variables
const  root = document.querySelector('#root');

// set the innerHTML of the root element to the value returned from arrange 
root.innerHTML = arrange;

// event listeners 
const EventCtrl = ( () => {
    document.querySelector('#pDDButton').addEventListener( 'click', Interactivity.togglePrimaryDropDown );
})();