class Elements {
    constructor () {
        this.nav = `
            <div class="nav">
                <div class="brand">Unit Converter</div>
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