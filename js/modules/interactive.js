class Interactivity {
    constructor() {
        this.unitName = document.querySelector('#unit-name');

        this.pDD = document.querySelector('#pDDBox'); // pDD stands for primary drop down
        this.pDDButton = document.querySelector('#pDDButton');

        // secondary dropdown 
        this.sDD1 = document.querySelector('#sDD-1');
        this.sDD2 = document.querySelector('#sDD-2');
        this.sDDBox1 = document.querySelector('#sDDBox-1');
        this.sDDBox2 = document.querySelector('#sDDBox-2');
        
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
    }

    changeUnitElement( arrIndex, convertingTo, convertingFrom ) {
        const parent = new Interactivity;
        
        // change the unit name 
        parent.unitName.innerHTML = parent.unitData[arrIndex].name;

        // change the secondary dropdowns inner Html
        parent.sDD1.innerHTML = parent.unitData[arrIndex].abbr[convertingTo];
        parent.sDD2.innerHTML = parent.unitData[arrIndex].abbr[convertingFrom];

        // add the abbreviations(abbr) to data-abbr
        parent.sDD1.dataset.abbr = parent.unitData[arrIndex].abbr[convertingTo];
        parent.sDD2.dataset.abbr = parent.unitData[arrIndex].abbr[convertingFrom];

    };

    pageLoadContent() {
        const parent =  new Interactivity();

        // manipulate the units in html
        parent.changeUnitElement(0, 2, 1);

    };

    changeUnit(e) {
        const parent =  new Interactivity();
        const target = e.target;
        
        // manipulate the units in html
        parent.changeUnitElement( target.dataset.id, 2, 1);

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

    toggleSecondaryDropDown() {

    };

}

export default Interactivity = new Interactivity();