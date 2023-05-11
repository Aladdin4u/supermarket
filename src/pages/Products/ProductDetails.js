import React, { useState, useEffect } from "react";
import { NavLink, useParams, Outlet } from "react-router-dom";
import useFetch from "../../hooks/useFetch.js";

export default function ProductDetails(props) {
  const params = useParams()
  const [product, setProduct] = useState({});
  const { get } = useFetch(
    "https://shoppingcart-d80f0-default-rtdb.firebaseio.com/"
  );

  useEffect(() => {
    get(`productinfo/id${params.id}.json`)
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => console.log("Could not load product details", error));
  }, [get, params.id]);

  const activeStyles = {
    fontWeight: "bold",
    borderBottom: "7px solid #2b8379",
  };

  return (
    <div className="product-details-layout">
      <div>
        <h2>{product.name}</h2>
        <img
          src={product.image}
          width="125"
          height="125"
          className="product-details-image"
          alt={product.name}
        />
      </div>
      <div>
        <div className="tabs">
          <ul>
            <li>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyles : null)}
                to="."
                end
              >
                Details
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyles : null)}
                to="nutrition"
              >
                Nutrition
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyles : null)}
                to="storage"
              >
                Storage
              </NavLink>
            </li>
          </ul>
        </div>
        <Outlet context={{ product }} />
      </div>
    </div>
  );
}
