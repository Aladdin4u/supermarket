import React, { useState, useContext } from "react";
import { loadStripe } from "@stripe/stripe-js";
// import { firebase } from "../firebase";
import Input from "./Input.js";
import Button from "./Button.js";
import { AppContext } from "../context/AppContext.js";
import { AuthContext } from "../context/AuthContext.js";
import { Link } from "react-router-dom";

// TODO: Replace with your own publishable key
const stripeLoadedPromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

export default function Cart() {
  const app = useContext(AppContext);
  const { user } = useContext(AuthContext);
  
  const currentUser = user? user.email : ""
  const cart = app.cart;
  const totalPrice = app.getTotalPrice();

  const [email, setEmail] = useState(currentUser);

  function handleFormSubmit(event) {
    event.preventDefault();

    const lineItems = cart.map((product) => {
      return { price: product.price_id, quantity: product.quantity };
    });
    
    stripeLoadedPromise.then((stripe) => {
      stripe
        .redirectToCheckout({
          lineItems: lineItems,
          mode: "payment",
          successUrl: process.env.REACT_APP_SUCCESSURL, // for local testing http://localhost:3000/success
          cancelUrl: process.env.REACT_APP_CANCELURL, // for local testing http://localhost:3000/cancel
          customerEmail: email,
        })
        .then((response) => {
          // this will only log if the redirect did not work
          console.log(response.error);
        })
        .catch((error) => {
          // wrong API key? you will see the error message here
          console.log(error);
        });
    });
  }

  return (
    <div className="cart-layout">
      <div>
        <h1>Your Cart</h1>
        {cart.length === 0 && (
          <p>You have not added any product to your cart yet. <Link to="/products">Return to shop</Link></p>
        )}
        {cart.length > 0 && (
          <>
            <table className="table table-cart">
              <thead>
                <tr>
                  <th width="25%" className="th-product">
                    Product
                  </th>
                  <th width="20%">Unit price</th>
                  <th width="10%">Quanity</th>
                  <th width="25%">Total</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((product) => {
                  return (
                    <tr key={product.id}>
                      <td>
                        <img
                          src={product.image}
                          width="30"
                          height="30"
                          alt=""
                        />{" "}
                        {product.name}
                      </td>
                      <td>${product.price}</td>
                      <td>{product.quantity}</td>
                      <td>
                        <strong>${product.price * product.quantity}</strong>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot>
                <tr>
                  <th colSpan="2"></th>
                  <th className="cart-highlight">Total</th>
                  <th className="cart-highlight">${totalPrice}</th>
                </tr>
                <tr>
                  <th colSpan="3"></th>
                  <th className="cart-highlight">
                    <Button style={{backgroundColor: "transparent", width: "100%"}} onClick={() => app.clearProductFromCart()}>
                      Clear Cart
                    </Button>
                  </th>
                </tr>
              </tfoot>
            </table>
            {user ? (
              <form className="pay-form" onSubmit={handleFormSubmit}>
                <p>
                  Enter your email and then click on pay and your products will
                  be delivered to you on the same day!
                </p>
                <Input
                  placeholder="Email"
                  onChange={(event) => setEmail(event.target.value)}
                  value={email}
                  type="email"
                  required
                />
                <Button type="submit">Pay</Button>
              </form>
            ) : (
              <>
                <p>You have to Login to complete your order</p>
                <Link to="/login" className="btn btn-default">
                  Login
                </Link>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}
