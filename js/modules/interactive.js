class Interactivity {
    constructor() {
        this.unitName = document.querySelector('#unit-name');

        this.pDD = document.querySelector('#pDDBox'); // pDD stands for primary drop down
        this.pDDButton = document.querySelector('#pDDButton');

        // select1 and select2(s1 & s2) 
        this.s1 = document.querySelector('#s1');
        this.s2 = document.querySelector('#s2');
        
        this.unitData = [
            {
                "name": "Length",
                "SIUnit": "meter",
                "abbr": ["mm", "cm", "m"]
            },
            {
                "name": "Weight",
                "SIUnit": "gram",
                "abbr": ["mg", "g", "kg"]
            },
            {
                "name": "Temperature",
                "SIUnit": "kelvin",
                "abbr": ["C", "K", "F"]
            },
            {
                "name": "Time",
                "SIUnit": "second",
                "abbr": ["s", "min", "h"]   
            }
        ]

        this.pDDElements = () => {
            let output = '';
            
            this.unitData.forEach( (unit, index) => {
                output += `
                    <li data-id="${index}">${unit.name}</li>
                `
            });

            return `
                <ul class="dropdown-list">${output}</ul>
            `
        };

        this.selectOptions = (i, select) => {
            let output = '';
            
            this.unitData[i].abbr.forEach( ( abb, index) => {
                // if the option we wish to select is same as the index add the selected attribute to it 
                if( select === index ) {
                    output += `
                        <option value="${abb}" selected>${ abb }</option>
                    `;
                } else {
                    output += `
                        <option value="${abb}">${ abb }</option>
                    `;
                }
            });

            return `${output}`;
        };
    }

    changeUnitElement( arrIndex, select1, select2 ) {
        const parent = new Interactivity;
        
        // change the unit name 
        parent.unitName.innerHTML = parent.unitData[arrIndex].name;

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
        
        // manipulate the units in html select
        parent.changeUnitElement(target.dataset.id, 1, 2);

        // close up the primary dropdown 
        parent.togglePrimaryDropDown();
        
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
}

export default Interactivity = new Interactivity();