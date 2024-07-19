# creamy_cakes_ecom_store

## description

This project is a capstone project that focuses on HTML, CSS, and Bootstrap to create an e-commerce website. This e-commerce website is product based on cakes for a small business. 

## screenshots

![Home page](/screenshots/homepage.html.png)
![Birthday Cakes page](/screenshots/birthdaycakes.html.png)
![Seasonal Cakes page](/screenshots/seasonalcakes.html.png)
![Log In page](/screenshots/login.html.png)
![Create Account page](/screenshots/createaccount.html.png)
![Contact page](/screenshots/contact.html.png)
![Checkout page](/screenshots/checkout.html.png)
![Payment page](/screenshots/payment.html.png)

## interesting piece of HTML 

```javascript
        <section class="container mb-3">
            <h4>Payment Information</h4>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"
                    checked>
                <label class="form-check-label" for="exampleRadios1">
                    Debit Card
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
                <label class="form-check-label" for="exampleRadios2">
                    Credit Card
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3">
                <label class="form-check-label" for="exampleRadios3">
                    Paypal
                </label>
            </div>
        </section>

        <section class="container">
            <form class="row g-3">
                <div class="mb-3 col-md-6">
                    <label for="cardholderName" class="form-label"> Cardholder Name</label>
                    <input type="cardholderName" class="form-control" id="cardholderName" placeholder="John Doe">
                </div>
                <div class="mb-3 col-md-6">
                    <label for="cardNumber" class="form-label">Card Number</label>
                    <input type="cardNumber" class="form-control" id="cardNumber" placeholder="1234 1234 1234 1234">
                </div>
                <div class="mb-3 col-md-6">
                    <label for="expirationDate" class="form-label">Expiration Date</label>
                    <input type="expirationDate" class="form-control" id="expirationDate" placeholder="MM/YY">
                </div>
                <div class="mb-3 col-md-6">
                    <label for="cvc" class="form-label">CVC</label>
                    <input type="cvc" class="form-control" id="cvc" placeholder="CVC">
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                    <label class="form-check-label" for="exampleCheck1">Save information for next time</label>
                </div>
                <button type="button" class="btn btn-outline-dark mb-4">Checkout</button>
            </form>
        </section>

```
This is one of my interesting piece of HTML I wrote because it was when previous knowledge of flexbox came in handy when making a payment form. 

![Updated home page](/images/updated_index_page.png)
![Updated registration page](/images/updated_registration_page.png)
![Updated login page](/images/updated_login_page.png)

## Capstone 2.0 changes 

The user can now register using personal credit that will be stored in the local API. The saved creditials will allow the user to login on the login page. User cannot view content unless logged in.

Once logged in, the user can now search for certain products listed and will appear on the search bar as a list. The user can click any items on the list and will be redirected to the specific page the product is located on.