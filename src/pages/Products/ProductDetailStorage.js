import React from "react";
import { useOutletContext } from "react-router-dom";

export default function ProductDetailStorage() {
  const { product } = useOutletContext()
  return (
    <p>
      <strong>Storage instructions:</strong> {product.storage}
    </p>
  );
}
