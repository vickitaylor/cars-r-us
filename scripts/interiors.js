import { getInteriors, setInterior } from "./database.js"

// getting a copy of the state on this module.
const interiors = getInteriors()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "interior") {
            setInterior(parseInt(changeEvent.target.value))
        }
    }
)


// function that will display a drop down menu of interior options to be selected, using .map() to build the string array 


export const pickInterior = () => {
    let html = `<h2>Interiors</h2>`

    html += `<select id="interior">`
    html += `<option value="0">Select Interior Package</option>`

    // function is creating an array of option value strings.
    const interiorOptions = interiors.map( (interior) => {
        return `<option value="${interior.id}">${interior.type}</option>`
    })
    
    // using .join to combine the individual array items to a string
    html += interiorOptions.join("")
    html += `</select>`
    return html 
}

