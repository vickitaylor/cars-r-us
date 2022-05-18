import { pickPaint } from "./paints.js";
import { pickTech } from "./technologies.js";
import { pickInterior } from "./interiors.js"
import { pickWheels } from "./wheels.js";
import { carOrder } from "./orders.js"
import { addCustomOrder } from "./database.js";
import { pickModel } from "./models.js";

document.addEventListener(
    "click", 
    (event) => {
        if(event.target.id === "orderButton") { 
            addCustomOrder()
        }
    }
)


export const buildCar = () => { 
    return `
    <article class="choices">
        <section class="choices__paint options">
            ${pickModel()}
        </section>    
        
        <section class="choices__paint options">
            ${pickPaint()}
        </section>
        
        <section class="choices__tech options">
            ${pickTech()}
        </section>

        <section class="choices__interior options">
            ${pickInterior()}
        </section>

        <section class="choices__wheels options">
            ${pickWheels()}
        </section>
    </article>

    <article>
        <button id="orderButton">Create Custom Order</button>
    </article>

    <article class="customOrders">
        <h2>Custom Car Order</h2>
        ${carOrder()}
    </article>
    `
}


// need to do the code for the something 
// need to make button work and save data 
