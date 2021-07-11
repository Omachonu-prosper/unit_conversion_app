class Elements {
    constructor (unitName, originalUnit, convertingUnit, year) {
        this.nav = `
            <div class="nav">
                <h1 class="brand">Unit Converter</h1>
            </div>
        `; 
        this.container = `
            <section>
                <div class="container">
                    <h2 class="unit-title">
                        ${unitName}
                        <span>
                            (${originalUnit} to ${convertingUnit})
                        </span>
                    </h2>
                </div>
            </section>
        `;
        this.footer = `
            <footer>
                <p class="copyright-text">
                    Made with love by <a href="https://github.com/Omachonu-prosper">Omachonu Prosper</a> &copy; ${year} 
                </p>
            </footer>
        `;
    }
}

// this function gathers all page elements and arranges them how they ought to be on default page load
function pageLoadElements() {
    const date = new Date();
    const currentYear = date.getFullYear();
    const elements = new Elements( 'Width', 'meter', 'centimeter', currentYear.toString() )
   
    return `
        ${elements.nav}
        ${elements.container}
        ${elements.footer}
    `
}

// export the arranged elements 
export default pageLoadElements = pageLoadElements();