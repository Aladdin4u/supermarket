import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button.js";
import { AppContext } from "../context/AppContext.js";

export default function Product(props) {
  const { details } = props;
  const app = useContext(AppContext);

  const productFromCart = app.getProductFromCart(details.id);
  const quantity = productFromCart ? productFromCart.quantity : 0;

  return (
    <div className="product">
      <div className="product-image-container">
        <Link to={`/products/${details.id}`}>
          <img
            src={details.image}
            width="100"
            height="100"
            className="product-image"
            alt={details.name}
          />
        </Link>
        {quantity > 0 && (
          <div className="product-quantity-container">
            <div className="product-quantity">{quantity}</div>
          </div>
        )}
      </div>
      <div className="product-info">
        <h3>{details.name}</h3>
        <p>{details.description}</p>
      </div>
      <div className="product-checkout">
        <div>
          {quantity > 0 && (
            <Button
              outline
              onClick={() => app.onProductDelete(details.id)}
              className="product-delete"
            >
              x
            </Button>
          )}
        </div>
        <Button outline onClick={() => app.onProductAdd(details)}>
          ${details.price}
        </Button>
      </div>
    </div>
  );
}
