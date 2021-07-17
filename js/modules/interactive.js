class Interactivity {
    constructor() {
        this.pDD = document.querySelector('#pDDBox'); // pDD stands for primary drop down

        this.pDDButton = document.querySelector('#pDDButton');
        
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

    togglePrimaryDropDown(data) {
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
    }
}

export default Interactivity = new Interactivity();