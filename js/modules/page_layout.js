class Elements {
    constructor ( year ) {
        this.nav = `
            <div class="nav">
                <h1 class="brand">Unit Converter</h1>
            </div>
        `; 
        this.container = `
            <section>
                <div class="container">
                    <h2 class="unit-title">
                        <p id="unit-name"></p>

                        <span class="primary-drop-down" id="pDDButton">
                            <i class="fa fa-angle-down"></i>
                        </span>
                        
                        <div class="primary-drop-down-box" id="pDDBox"></div>
                    </h2>

                    <div class="conversion-box">
                        <div class="top">
                            <div class="unit" id="originalUnit">
                                <div class="secondary-drop-down" id="sDDBox-1">
                                    <i class="fa fa-angle-down"></i>
                                
                                    <span id="sDD-1"></span>
                                </div>

                                <input type="number" id="unitValue">
                            </div>
                            to
                            <div class="unit" id="convertingUnit">
                                <div class="secondary-drop-down" id="sDDBox-2">
                                    <i class="fa fa-angle-down"></i>

                                    <span id="sDD-2"></span>
                                </div>
                                
                                <div class="output"> 0.00 </div>
                            </div>
                        </div>
                    </div>
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
    const elements = new Elements( 'Length', currentYear.toString() )
   
    return `
        ${elements.nav}
        ${elements.container}
        ${elements.footer}
    `
}

// export the arranged elements 
export default pageLoadElements = pageLoadElements();