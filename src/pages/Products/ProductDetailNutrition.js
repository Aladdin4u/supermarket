import React from "react";
import { useOutletContext } from "react-router-dom";

export default function ProductDetailNutrition() {
  const { product } = useOutletContext();
  return (
    <table className="table table-product">
      <thead>
        <tr>
          <th>Nutrient</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Protein</td>
          <td>{product.nutrition.protein}g</td>
        </tr>
        <tr>
          <td>Carbohydrates</td>
          <td>{product.nutrition.carbs}g</td>
        </tr>
        <tr>
          <td>Fat</td>
          <td>{product.nutrition.fat}g</td>
        </tr>
        <tr>
          <td>Salt</td>
          <td>{product.nutrition.salt}g</td>
        </tr>
      </tbody>
    </table>
  );
}
