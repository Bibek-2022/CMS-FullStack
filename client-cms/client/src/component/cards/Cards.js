import React from "react";
import { Link } from "react-router-dom";
import "./cards.css";
const API_ROOT_URL = "http://localhost:8000/";
export const Cards = (obj) => {
  return (
    <>
      <div className="card">
        <img
          src={API_ROOT_URL + obj?.product?.thumbnail}
          alt="Denim Jeans"
          crossOrigin="anonymous"
          width="100%"
        />
        <h3>{obj?.product?.name}</h3>
        <p class="price">{obj?.product?.price}</p>
        <p>{obj?.product?.description}</p>
        <p>
          <Link to="/checkout">
            {" "}
            <button>Add to Cart</button>
          </Link>
        </p>
      </div>
    </>
  );
};
