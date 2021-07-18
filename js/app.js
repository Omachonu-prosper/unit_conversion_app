// imports 
import arrange from './modules/page_layout.js';
import Interactivity from './modules/interactive.js';

// App variables
const  root = document.querySelector('#root');

// set the innerHTML of the root element to the value returned from arrange 
root.innerHTML = arrange;

// event listeners 
const EventCtrl = ( () => {
    // on page load fill in the values for unit-name and secondary drop down content 
    document.addEventListener( 'DOMContentLoaded', Interactivity.pageLoadContent )

    // listen for a click to toggle the primary dropdown 
    document.querySelector('#pDDButton').addEventListener( 'click', Interactivity.togglePrimaryDropDown );
})();