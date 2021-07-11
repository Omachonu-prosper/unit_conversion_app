class Elements {
    constructor (unitName, originalUnit, convertingUnit) {
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
    }
}

// this function gathers all page elements and arranges them how they ought to be on default page load
function pageLoadElements() {
    const elements = new Elements('Width', 'meter', 'centimeter')
   
    return `
        ${elements.nav}
        ${elements.container}
    `
}

// export the arranged elements 
export const arrange = pageLoadElements();