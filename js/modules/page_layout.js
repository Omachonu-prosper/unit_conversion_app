class Elements {
    constructor () {
        this.nav = `
            <div class="nav">
                <h1 class="brand">Unit Converter</h1>
            </div>
        `; 
    }
}

// this function gathers all page elements and arranges them how they ought to be 
function arrangeElements() {
    const elements = new Elements()
   
    return `
        ${elements.nav}
    `
}

// export the arranged elements 
export const arrange = arrangeElements();