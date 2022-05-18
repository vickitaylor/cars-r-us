import { getTechnologies, setTech } from "./database.js";

// getting copy of the state to this module
const techs = getTechnologies()


document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "tech") {
            setTech(parseInt(changeEvent.target.value))
        }
    }
)

// function that will display a drop down menu for the tech options to be selected.  Using one string template method to create the string of options.  
export const pickTech = () => {
    return `<h2>Technologies</h2>
        <select id="tech">
            <option value="0">Select a Technology Package</option>
            ${techs.map((tech) => {
                return `<option value="${tech.id}">${tech.type}</option>`
            }
        ).join("")
    }
    </select>`
}
