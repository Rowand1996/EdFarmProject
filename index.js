const express = require('express')
var bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.urlencoded({ extended: false}))

app.use(bodyParser.json())




const port = 3000
let customerOrders = []
const orders =  [
    {
        id: "607dc689-56f9-4b11-9171-b242f9558b1f",
        created_at: "09/07/2022 6:16PM",
        items: [
            {
                id: "1e99f795-d8a4-407d-b882-6285e97c148b",
                name: "Volcanic Island",
                description: "Magic: The Gathering Revised Edition",
                price: "508.69",
                quantity: "2"
            },
            {
                id: "a8b10f96-aac9-4641-9556-e31c71619619",
                name: "Gilded Drake",
                description: "Magic: The Gathering Urza's Saga",
                price: "224.95",
                quantity: "4"
            }
        ],
        customer: {
            id: "f6d1a974-891a-4f33-888b-cb5cf6b623d0",
            firstName: "Bob",
            lastName: "Saget"
        } 
    },
    {
        id: "72f5a4cf-a31d-4374-a249-1f206e63e638",
        created_at: "09/07/2022 6:16PM",
        items: [
            {
                id: "a8b10f96-aac9-4641-9556-e31c71619619",
                name: "City of Traitors",
                description: "Magic: The Gathering Exodus",
                price: "224.95",
                quantity: "4"
            },
            {
                id: "2b8c4ce0-5cdf-49ae-bf08-14cb94fae958",
                name: "Underground Sea",
                description: "Magic: The Gathering Revised Edition",
                price: "500.00",
                quantity: "3"
            }
        ],
        customer: {
            id: "f113206c-4877-4a36-9169-3269f41e2abe",
            firstName: "Steve",
            lastName: "Jobs"
        } 
    },
    {
        id: "95922a55-7830-41a6-a24d-15ff197876e6",
        created_at: "09/07/2022 6:19PM",
        items: [
            {
                id: "844d8293-b7e0-4dab-b749-b2e3d9aaed47",
                name: "Survival of the Fittest",
                description: "Magic: The Gathering Exodus",
                price: "178.95",
                quantity: "2"
            }
        ],
        customer: {
            id: "f113206c-4877-4a36-9169-3269f41e2abe",
            firstName: "Steve",
            lastName: "Jobs"
        } 
    }
]


app.get("/", (req, res) => {
    res.json(orders)
})

app.get("/orders/:id", (req, res) => {
    
    for (let i = 0; i < orders.length; i++){
        if (orders[i].id === req.params.id){
            res.json(orders[i])
        }
    } 
})

app.get("/orders/customer/:id", (req, res) => {
    
    for (let i = 0; i < orders.length; i++){
        if (orders[i].customer.id === req.params.id){
            customerOrders.push(orders[i])
        }
    }
    res.json(customerOrders)
})



app.listen(port, () => {
    console.log(`Listening on port ${port}! lets ride.`)
})


