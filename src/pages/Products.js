import React, { useState, useEffect } from "react";
import Product from "../components/Product.js";
import useFetch from "../useFetch.js";
import Loader from "../Loader.js";
import data from "../data/data.js";

export default function Products(props) {
  // const [products, setProducts] = useState(data);
  const [search, setSearch] = useState("");
  const [newSearch, setNewSearch] = useState([]);
  const [products, setProducts] = useState([]);
  const { get, loading } = useFetch(
    "https://shoppingcart-d80f0-default-rtdb.firebaseio.com/"
  );

  const handleSearch = (e) => {
    let search = e.target.value;
    setSearch(search);
    let searchItem = products.filter(
      (e) => e.name.toLowerCase() === search.toLowerCase()
    );
    setNewSearch(searchItem);
  };

  useEffect(() => {
    get("supermarket.json")
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => console.log("Could not load products", error));
  }, []);

  return (
    <div className="products-layout">
      <div>
        <input
          className="input"
          style={{ width: "100%" }}
          type="search"
          placeholder="Search..."
          value={search}
          onChange={handleSearch}
        />
        {newSearch.map((product) => {
          return (
            <Product
              key={product.id}
              details={product}
              cart={props.cart}
              onProductAdd={props.onProductAdd}
              onProductDelete={props.onProductDelete}
            />
          );
        })}
      </div>
      <h1>Products</h1>
      <p>Take a look at our products</p>
      <div className="products-grid">
        {loading && <Loader />}
        {products.map((product) => {
          return (
            <Product
              key={product.id}
              details={product}
              cart={props.cart}
              onProductAdd={props.onProductAdd}
              onProductDelete={props.onProductDelete}
            />
          );
        })}
      </div>
    </div>
  );
}
