import { getWheels, setWheels } from "./database.js";

// getting copy of the state to the module
const wheels = getWheels()


document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "wheels") {
            setWheels(parseInt(changeEvent.target.value))
        }
    }
)


// a function to create a dropdown menu for the wheel options. Using one string template method to create the string of options
// in the function using .map to create an array of strings of the wheel types, then joining the strings together.  Using template literals in the string to run the .map method to iterate thru the wheels array of objects to return a string with the specific object properties.   Then the new array created by the map is being joined, back into the original string
export const pickWheels = () => {
    return `<h2>Wheels</h2> 
      <select id="wheels">
        <option value="0">Select Wheel Package</option>   
            ${wheels.map((wheel) => {
        return `<option value="${wheel.id}">${wheel.type}</option>`
    }
    ).join("")
        }
    </select>`
}
