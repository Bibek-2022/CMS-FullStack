import React from "react";
import "./cards.css";
export const Cards = (obj) => {
  console.log(obj);
  return (
    <>
      <div className="card">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/26438/shoe.png"
          alt="Denim Jeans"
        />
        <h1>{obj?.product?.name}</h1>
        <p class="price">{obj?.product?.price}</p>
        <p>{obj?.product?.description}</p>
        <p>
          <button>Add to Cart</button>
        </p>
      </div>
    </>
  );
};
