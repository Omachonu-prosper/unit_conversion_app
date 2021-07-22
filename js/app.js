// imports 
import convertLength from './modules/definitions/length.js';
import convertWeight from './modules/definitions/weight.js';
import convertTime from './modules/definitions/time.js';
import convertTemperature from './modules/definitions/temperature.js';
import arrange from './modules/page_layout.js';
import Interactivity from './modules/interactive.js';

// App variables
const root = document.querySelector('#root'),
    input = document.querySelector('#unitValue'),
    title = document.querySelector('#unit-title'),
    selector1 = document.querySelector('#unit-title'),
    selector2 = document.querySelector('#unit-title'),
    outputElement = document.querySelector('.output'),
    primaryDropdownButton = document.querySelector('#pDDButton'),
    primaryDropdownBox = document.querySelector('#pDDBox');

// set the innerHTML of the root element to the value returned from arrange 
root.innerHTML = arrange;

const AppFunctions = ( () => {
    // decide which conversion to call 
    function decideConversion(category, value, from, to) {
        let result;
        
        // set up a switch to regulate which function gets called according to the category 
        switch (category) {
            case 'length': result = convertLength(value, from, to);
            break;
            case 'weight': result = convertWeight(value, from, to);
            break;
            case 'time': result = convertTime(value, from, to);
            break;
            default: result = convertTemperature(value, from, to);
            break;
        }

        return result;
    }
    
    return{
        convert: () => {
            // the Number form ot the value inputed by the user
            const value = Number(input.value);
            const category = title.dataset.name;
            // the select1's selected options value
            const from = selector1.selectedOptions[0].value;
            // the select2's selected options value
            const to = selector2.selectedOptions[0].value;
            
            // Send the answer to the user
            value === 0 ? outputElement.innerHTML = '0.00' : outputElement.innerHTML =  decideConversion(category, value, from, to);
        }
    }
})();

// event listeners 
const EventCtrl = ( () => {

    // on page load fill in the values for unit-title and secondary drop down content 
    document.addEventListener( 'DOMContentLoaded', Interactivity.pageLoadContent );

    // click on the units to change from one unit to another 
    primaryDropdownBox.addEventListener( 'click', Interactivity.changeUnit )

    // listen for a click to toggle the primary dropdown 
    primaryDropdownButton.addEventListener( 'click', Interactivity.togglePrimaryDropDown );

    // listen for when a user types in the input(#unitValue);
    input.addEventListener('keyup', AppFunctions.convert);

    // once a selector(and its outputs) is/are clicked it is assumed that the user might have changed the converting to or from unit so we would convert and output to correspond to the supposed change 
    selector1.addEventListener('click', AppFunctions.convert);
    selector2.addEventListener('click', AppFunctions.convert);

})();