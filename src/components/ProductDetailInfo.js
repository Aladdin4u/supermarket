import React, { useContext } from "react";
import Button from "./Button.js";
import { AppContext } from "../AppContext.js";

export default function ProductDetailInfo({ product }) {
  const app = useContext(AppContext);
  return (
    <>
      <p>
        {product.description} sold at <strong>${product.price}</strong> per
        piece.
      </p>
      <Button onClick={() => app.onProductAdd(product)}>${product.price}</Button>
    </>
  );
}
