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
        ]

        this.pDDElements = () => {
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

        this.selectOptions = (i, select) => {
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
        };
    }

    changeUnitElement( arrIndex, select1, select2 ) {
        const parent = new Interactivity;
        
        // change the unit Title 
        parent.unitTitle.innerHTML = parent.unitData[arrIndex].title;
        // change the data-name 
        parent.unitTitle.dataset.name = parent.unitData[arrIndex].name;
        // change the data-id 
        parent.unitTitle.dataset.id = arrIndex;

        // change the select options 
        parent.s1.innerHTML = parent.selectOptions(arrIndex, select1);
        parent.s2.innerHTML = parent.selectOptions(arrIndex, select2);

    };

    pageLoadContent() {
        const parent =  new Interactivity();

        // manipulate the units in html select
        parent.changeUnitElement(0, 1, 2);
    };

    changeUnit(e) {
        const parent =  new Interactivity();
        const target = e.target;
        
        // the unit we are changing to is same as the one already there, dont touch the values
        if( target.dataset.id === parent.unitTitle.dataset.id ) {
            // close up the primary dropdown 
            parent.togglePrimaryDropDown();
        } else {
            // manipulate the units in html select
            parent.changeUnitElement(target.dataset.id, 1, 2);

            // close up the primary dropdown 
            parent.togglePrimaryDropDown();

            // empty the input and set the output to 0
            parent.emptyInputandOutput()
        }
    };

    togglePrimaryDropDown() {
        const parent =  new Interactivity();

        if( parent.pDD.innerHTML ) { // if the dropdown box already has contents 
            parent.pDD.style.animationName = 'primary-dropdown-animate-out';
            parent.pDDButton.classList.remove('rotate');
            parent.pDD.innerHTML = ''; // empty the dropdown

        } else {
            parent.pDD.innerHTML = parent.pDDElements();
            parent.pDD.style.animationName = 'primary-dropdown-animate-in';
            parent.pDDButton.classList.add('rotate');
        }
    };

    emptyInputandOutput() {
        const parent = new Interactivity();

        // empty the input 
        parent.input.value = '';

        // set the output to 0.00
        parent.output.innerHTML = '0.00'
    }
}

export default Interactivity = new Interactivity();