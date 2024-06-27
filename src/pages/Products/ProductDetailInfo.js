import React, { useContext } from "react";
import Button from "../../components/Button.js";
import { useOutletContext } from "react-router-dom";
import { AppContext } from "../../context/AppContext.js";

export default function ProductDetailInfo() {
  const { product } = useOutletContext();
  const app = useContext(AppContext);
  return (
    <>
      <p>
        {product.description} sold at <strong>${product.price}</strong> per
        piece.
      </p>
      <Button onClick={() => app.onProductAdd(product)}>
        ${product.price}
      </Button>
    </>
  );
}
