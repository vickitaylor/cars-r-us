import { getPaints, setPaints } from "./database.js";

// obtaining a copy of the state to this module
const paints = getPaints()


document.addEventListener(
    "change", 
    (changeEvent) => { 
        if (changeEvent.target.id === "paints") { 
            setPaints(parseInt(changeEvent.target.value))
        }
    }
)


// function to display the paint color options in a dropdown menu format, using forof loop to display the options 

export const pickPaint = () => { 
    let html = `<h2>Paints</h2>`
    
    html += `<select id="paints">`
    html += `<option value="0">Select Paint Package</option>`

    for (const paint of paints) {
        html += `<option value="${paint.id}">${paint.color}</option>`
    }
    
    html += `</select>`
       
    return html
}

