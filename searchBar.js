"use strict"

window.onload = () => {

    //get form off index page
    const searchItemForm = document.querySelector("#searchBarForm");

    //add an event listerner to the form's submit event
    searchItemForm.addEventListener("submit", searchItem)

}

//function to get products to display on search bar and redirect user when item is clicked
const searchItem = async (event) => {

    //prevent the default form submission behavior
    event.preventDefault();

    //get user search input element
    const searchInput = document.getElementById("searchInput")

    //get search query from the input field
    const searchQuery = searchInput.value.trim();

    //get item off local storage and parse string
    const products = JSON.parse(localStorage.getItem('products'));
    const seasonalProducts = JSON.parse(localStorage.getItem('seasonalProducts'));

    //get all products array from js files
    const allProducts = [...products,...seasonalProducts];

    console.log(products)

    //filter through products to find the item searched
    const filteredProducts = allProducts.filter((product) => {
        //convert the product names to lower case 
        const productName = product.name.toLowerCase();
        //convert the user input to lowercase
        const searchQueryLower = searchQuery.toLowerCase();
        //return the product the user input
        return productName.includes(searchQueryLower);
    });

    //get product list and search result elemment from index page
    const productList = document.getElementById("productList");
    const searchResults = document.getElementById('searchResults');

    //clear the product list HTML
    productList.innerHTML = '';
    //loop through the filtered products
    filteredProducts.forEach((product) => {
        // if statement to determine what page to redirect user to based on product chosen
        let redirectPage;
        // if item is in products array redirect them to birthdaycakes.html
        if (products.includes(product)) {
            redirectPage = "birthdaycakes.html";
        // if item is in seasonal products array redirect them seasonalcakes.html
        } else if (seasonalProducts.includes(product)) {
            redirectPage = "seasonalcakes.html";
        }
        //create HTML for the product list item that will show under search bar
        //when user click on item, they are redirected to specific page
        const productHTML = `
        <li>
        <a href="#" onclick="window.location.href='${redirectPage}'">
                <p>${product.name}</p>
            </a>
        </li> 
        `;
        //add the product HTML to the product list
        productList.innerHTML += productHTML;
    });

    //show the search results adding the "show" class
    searchResults.classList.add("show");

};