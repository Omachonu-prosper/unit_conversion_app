class Interactivity {
    constructor() {
        this.pDD = document.querySelector('#pDDBox'); // pDD stands for primary drop down
        this.pDDButton = document.querySelector('#pDDButton');
        this.pDDElements = `
            <ul class="dropdown-list">
                <li data-category="length">Length</li>
                <li data-category="weight">Weight</li>
                <li data-category="time">Time</li>
            </ul>
        `;
    }

    togglePrimaryDropDown() {
        const self =  new Interactivity();       
        if( self.pDD.innerHTML ) { // if the dropdown box already has contents 
            self.pDD.style.animationName = 'primary-dropdown-animate-out';
            self.pDDButton.classList.remove('rotate');
            self.pDD.innerHTML = ''; // empty the dropdown

        } else {
            self.pDD.innerHTML = self.pDDElements
            self.pDD.style.animationName = 'primary-dropdown-animate-in';
            self.pDDButton.classList.add('rotate');
        }
    }
}

let interactivity = new Interactivity();

export default interactivity = interactivity;