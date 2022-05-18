const database = {
    paints: [
        {
            id: 1, 
            color: "Silver",
            price: 500,
        },
        {
            id: 2, 
            color: "Midnight Blue",
            price: 700,
        }, 
        {
            id: 3, 
            color: "Firebrick Red",
            price: 1000,
        }, 
        {
            id: 4, 
            color: "Spring Green",
            price: 750,
        }, 
    ],
    interiors: [
        {
            id: 1,
            type: "Beige Fabric",
            price: 250,
        },
        {
            id: 2,
            type: "Charcoal Fabric",
            price: 300,
        },
        {
            id: 3,
            type: "White Leather",
            price: 750,
        },
        {
            id: 4,
            type: "Black Leather",
            price: 650,
        },
    ],
    technologies: [
        {
            id: 1,
            type: "Basic Package ",
            price: 300,
        },        
        {
            id: 2,
            type: "Navigation Package",
            price: 750,
        },        
        {
            id: 3,
            type: "Visibility Package",
            price: 1500,
        },        
        {
            id: 4,
            type: "Ultra Package ",
            price: 2250,
        },
    ], 
    wheels: [
        {
            id: 1,
            type: "17-inch Pair Radial",
            price: 250,
        },        
        {
            id: 2,
            type: "17-inch Pair Radial Black",
            price: 500,
        },        
        {
            id: 3,
            type: "18-inch Pair Spoke Silver",
            price: 850,
        },        
        {
            id: 4,
            type: "18-inch Pair Spoke Black",
            price: 1100,
        },
    ], 
    orderBuilder: {}, 
    customOrders: [
        {
            id: 1, 
            paintId: 2, 
            interiorId: 4, 
            techId: 4, 
            wheelId: 3,
            modelId: 1,
            timestamp: 1614659931693,
        },
    ],
    models: [
        {id: 1, type: "Car", priceX: 1 }, 
        {id: 2, type: "SUV", priceX: 1.5 }, 
        {id: 3, type: "Truck", priceX: 2.25 },
    ],
}


export const getPaints = () => {
    return database.paints.map(paint => ({...paint}))
}
export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
}
export const getTechnologies = () => { 
    return database.technologies.map(technology => ({...technology}))
}
export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}
export const getOrders = () => {
    return database.customOrders.map(order => ({...order}))
}
export const getModels = () => {
    return database.models.map(model => ({...model}))
}

export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}
export const setPaints = (id) => { 
    database.orderBuilder.paintId = id
}
export const setTech = (id) => { 
    database.orderBuilder.techId = id
}
export const setWheels = (id) => { 
    database.orderBuilder.wheelId = id
}
export const setModels = (id) => { 
    database.orderBuilder.modelId = id
}

export const addCustomOrder = () => { 
    const newOrder = {...database.orderBuilder}
    const lastIndex = database.customOrders.length -1
    newOrder.id = database.customOrders[lastIndex].id +1
    newOrder.timestamp = Date.now() 
    database.customOrders.push(newOrder)
    database.orderBuilder = {}
    document.dispatchEvent(new CustomEvent("stateChanged"))
}
