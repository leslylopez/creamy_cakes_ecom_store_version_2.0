"use strict"
const products = [
    {name: "Classic Heart Shaped"},
    {name: "Classic Drip Cake"},
    {name: "Classic Gradient"},
    {name: "Rosy Delight"},
    {name: "Confetti Cake"},
    {name: "Two Tier Cake"}
];

localStorage.setItem("products", JSON.stringify(products));
console.log(products)