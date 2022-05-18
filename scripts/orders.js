import { getInteriors, getPaints, getTechnologies, getWheels, getOrders, getModels } from "./database.js"

const buildOrderListItem = (order) => { 

    const interiors = getInteriors()
    const paints = getPaints()
    const techs = getTechnologies()
    const wheels = getWheels()
    const models = getModels()

    const foundInterior = interiors.find(interior => { 
        return interior.id === order.interiorId
        })
    
    const foundPaint = paints.find(paint => { 
            return paint.id === order.paintId
        })
    
    const foundTech = techs.find(tech => { 
            return tech.id === order.techId
        })

    const foundWheel = wheels.find(wheel => {
            return wheel.id === order.wheelId
        })
    const foundModel = models.find((model) => {
        return model.id === order.modelId
    })
    
    const totalCost = (foundInterior.price + foundPaint.price + foundTech.price + foundWheel.price) * foundModel.priceX

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency", 
        currency: "USD"
    })
    
    return `<li>
        Order #${order.id} costs ${costString}.
    </li>`
}


export const carOrder = () => {
    const orders = getOrders()

    let html= "<ul>"
    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}

