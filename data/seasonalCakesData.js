const seasonalProducts = [
    {name: "Vanilla Tres Leches"},
    {name: "Lemon Cake"},
    {name: "Coconut Cake"},
    {name: "Chocolate Cake"}
];

localStorage.setItem("seasonalProducts", JSON.stringify(seasonalProducts));
console.log(seasonalProducts)