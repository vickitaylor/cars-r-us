import { buildCar } from "./buildCar.js"

const mainContainer = document.querySelector("#container")

export const renderAllHTML = () => {
    mainContainer.innerHTML = buildCar()
}

renderAllHTML()


document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHTML()
})