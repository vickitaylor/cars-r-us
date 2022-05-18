import { getModels, setModels } from "./database.js";

const models = getModels()

// adding additional car options


document.addEventListener("change", (changeEvent) => {
    if (changeEvent.target.id === "model") {
        setModels(parseInt(changeEvent.target.value))
    }
})

export const pickModel = () => {
    return `<h2>Models</h2>
        <select id="model">
            <option value ="0">Select Car Model</option>
                ${models.map((model) => {
        return `<option value="${model.id}">${model.type}</option>`
    }
    ).join("")
        }
        </select>`
}