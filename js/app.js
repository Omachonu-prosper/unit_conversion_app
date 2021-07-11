// imports 
import arrange from './modules/page_layout.js';

// App variables
const  root = document.querySelector('#root');

// set the innerHTML of the root element to the value returned from arrange 
root.innerHTML = arrange;
