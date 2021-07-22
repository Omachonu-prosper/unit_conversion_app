class Interactivity {
    constructor() {
        this.unitTitle = document.querySelector('#unit-title');

        this.pDD = document.querySelector('#pDDBox'); // pDD stands for primary drop down
        this.pDDButton = document.querySelector('#pDDButton');

        // select1 and select2(s1 & s2) 
        this.s1 = document.querySelector('#s1');
        this.s2 = document.querySelector('#s2');

        // the input 
        this.input = document.querySelector('#unitValue');
        // output 
        this.output = document.querySelector('.output');
        
        this.unitData = [
            {
                // title will be used for the element's content in html while the name is for in app reference 
                "title": "Length",
                "name": "length",
                "SIUnit": "meter",
                "abbr": ["mm", "cm", "m"]
            },
            {
                // title will be used for the element's content in html while the name is for in app reference 
                "title": "Weight / Mass",
                "name": "weight",
                "SIUnit": "gram",
                "abbr": ["mg", "g", "kg"]
            },
            {
                // title will be used for the element's content in html while the name is for in app reference 
                "title": "Temperature (Beta)",
                "name": "temperature",
                "SIUnit": "kelvin",
                "abbr": ["C", "K", "F"]
            },
            {
                // title will be used for the element's content in html while the name is for in app reference 
                "title": "Time",
                "name": "time",
                "SIUnit": "second",
                "abbr": ["s", "min", "h"]   
            }
        ];

    } //constructor closes here

    pDDElements() {
        let output = '';
        
        this.unitData.forEach( (unit, index) => {
            output += `
                <li data-name="${ unit.name }" data-id="${ index }">${ unit.title }</li>
            `
        });

        return `
            <ul class="dropdown-list">${  output  }</ul>
        `
    };

    selectOptions(i, select) {
        let output = '';
        
        this.unitData[i].abbr.forEach( ( abb, index) => {
            // if the option we wish to select is same as the index add the selected attribute to it 
            if( select === index ) {
                output += `
                    <option value="${ abb }" selected>${ abb }</option>
                `;
            } else {
                output += `
                    <option value="${ abb }">${ abb }</option>
                `;
            }
        });

        return `${ output }`;
    }

    changeUnitElement( arrIndex, select1, select2 ) {
        // change the unit Title 
        this.unitTitle.innerHTML = this.unitData[arrIndex].title;
        // change the data-name 
        this.unitTitle.dataset.name = this.unitData[arrIndex].name;
        // change the data-id 
        this.unitTitle.dataset.id = arrIndex;

        // change the select options 
        this.s1.innerHTML = this.selectOptions(arrIndex, select1);
        this.s2.innerHTML = this.selectOptions(arrIndex, select2)
    }

    emptyInputandOutput() {
        // empty the input 
        this.input.value = '';

        // set the output to 0.00
        this.output.innerHTML = '0.00'
    }
}

var Interactive = ( () => {
    // bring down or take up the primary dropdown 
    function togglePrimaryDropDown() {
        const interactivity =  new Interactivity();

        if( interactivity.pDD.innerHTML ) { // if the dropdown box already has contents 
            interactivity.pDD.style.animationName = 'primary-dropdown-animate-out';
            interactivity.pDDButton.classList.remove('rotate');
            interactivity.pDD.innerHTML = ''; // empty the dropdown

        } else {
            interactivity.pDD.innerHTML = interactivity.pDDElements();
            interactivity.pDD.style.animationName = 'primary-dropdown-animate-in';
            interactivity.pDDButton.classList.add('rotate');
        }
    };

    // change from one unit to another
    function changeUnit(e) {
        const interactivity =  new Interactivity();
        const target = e.target;

        // the unit we are changing to is same as the one already there, dont touch the values
        if( target.dataset.id === interactivity.unitTitle.dataset.id ) {
            // close up the primary dropdown 
            togglePrimaryDropDown();
        } else {
            // manipulate the units in html select
            interactivity.changeUnitElement(target.dataset.id, 1, 2);

            // close up the primary dropdown 
            togglePrimaryDropDown();

            // empty the input and set the output to 0
            interactivity.emptyInputandOutput();
        }
    };
    
    return {        
        pageLoadContent: () => {
            const interactivity =  new Interactivity();
    
            // manipulate the units in html select
            interactivity.changeUnitElement(0, 1, 2);
        },

        togglePrimaryDropDown: () => {
            togglePrimaryDropDown();
        },

        changeUnit: (e) => {
            changeUnit(e)
        }
    }
})();

export default Interactive = Interactive;