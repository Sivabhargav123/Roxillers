import React, { useEffect, useState } from "react";
//import axios from "axios";

const TransactionList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to ensure the effect runs only once

  return (
    <div>
      <h1>Products</h1>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <p>Category: {product.category}</p>
            <img
              src={product.image}
              alt={product.title}
              style={{ maxWidth: "200px" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionList;
