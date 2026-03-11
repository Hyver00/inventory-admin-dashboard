import axios from "axios"

const API = "http://localhost:8000/api/products"

const products = [

    {
        name: "Laptop",
        description: "Gaming laptop",
        price: 1200,
        stock: 10
    },

    {
        name: "Mouse",
        description: "Wireless mouse",
        price: 25,
        stock: 50
    },

    {
        name: "Keyboard",
        description: "Mechanical keyboard",
        price: 80,
        stock: 20
    },

    {
        name: "Monitor",
        description: "27 inch monitor",
        price: 300,
        stock: 15
    },

    {
        name: "Headphones",
        description: "Noise cancelling",
        price: 150,
        stock: 30
    },

    {
        name: "Webcam",
        description: "HD webcam",
        price: 70,
        stock: 25
    },

    {
        name: "Microphone",
        description: "USB microphone",
        price: 120,
        stock: 18
    },

    {
        name: "Chair",
        description: "Ergonomic chair",
        price: 250,
        stock: 8
    },

    {
        name: "Desk",
        description: "Standing desk",
        price: 400,
        stock: 5
    },

    {
        name: "USB Hub",
        description: "Multiport hub",
        price: 35,
        stock: 40
    }

]

async function seed() {

    for (const product of products) {

        await axios.post(API, product)

        console.log("Inserted:", product.name)

    }

}

seed()