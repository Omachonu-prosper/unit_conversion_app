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
                "subUnits": ["millimeter", "centimeter", "meter"],
                "abbr": ["mm", "cm", "m"]
            },
            {
                "name": "Weight",
                "SIUnit": "gram",
                "subUnits": ["milligram", "gram", "Kilogram"],
                "abbr": ["mg", "g", "kg"]
            },
            {
                "name": "Temperature",
                "SIUnit": "kelvin",
                "subUnits": ["celsius", "kelvin", "fahrenheit"],
                "abbr": ["C", "K", "F"]
            },
            {
                "name": "Time",
                "SIUnit": "second",
                "subUnits": ["second", "minute", "hour"],
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

    pageLoadContent() {
        const parent =  new Interactivity();

        // the default unit category is length
        parent.unitName.innerHTML = parent.unitData[0].name;

        // the default converting units are meter and centimeter 
        parent.sDD1.innerHTML = parent.unitData[0].subUnits[2];
        parent.sDD2.innerHTML = parent.unitData[0].subUnits[1];

    };

    changeUnit(e) {
        const parent =  new Interactivity();
        const target = e.target;
        
        // change the unit name 
        parent.unitName.innerHTML = target.textContent;

        // change the secondary dropdowns inner Html
        parent.sDD1.innerHTML = parent.unitData[target.dataset.id].subUnits[2];
        parent.sDD2.innerHTML = parent.unitData[target.dataset.id].subUnits[1];

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