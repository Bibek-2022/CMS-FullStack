import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { checkoutAction } from "../../pages/checkout/CheckoutAction";
import "./cards.css";
const API_ROOT_URL = "http://localhost:8000/";
export const Cards = (obj) => {
  console.log(obj);

  //const { checkout } = useSelector((state) => state.checkout);
  console.log(obj);
  const externalImage = "./images/cat2.jpg";

  const addToCart = (e) => {
    console.log(e);
    console.log("add to cart");
  };
  return (
    // <>
    //   <div className="card">
    //     <img
    //       src={API_ROOT_URL + obj?.product?.thumbnail}
    //       alt="Denim Jeans"
    //       crossOrigin="anonymous"
    //       width="100%"
    //     />
    //     <h1>{obj?.product?.name}</h1>
    //     <p class="price">{obj?.product?.price}</p>
    //     <p>{obj?.product?.description}</p>
    //     <p>
    //       <Link to="/checkout">
    //         {" "}
    //         <button>Add to Cart</button>
    //       </Link>
    //     </p>
    //   </div>
    // </>
    <>
      <div className="d-flex flex-wrap justify-content-center align-items-center gap-5 category">
        <div className="container1">
          <div class="overlay">
            <div class="items"></div>
            <div class="items head">
              <p>TSHIRT</p>
              <hr />
            </div>
            <div class="items price">
              <p class="old">$699</p>
              <p class="new">$345</p>
            </div>
            <div class="items cart">
              <i class="fa fa-shopping-cart"></i>
              <span onClick={addToCart}>ADD TO CART</span>
            </div>
          </div>
        </div>
        <div class="container1 cont2">
          <div class="overlay">
            <div class="items"></div>
            <div class="items head">
              <p>Flower Embroidery Hoop Art</p>
              <hr />
            </div>
            <div class="items price">
              <p class="old">$699</p>
              <p class="new">$345</p>
            </div>
            <div class="items cart">
              <i class="fa fa-shopping-cart"></i>
              <span onClick={addToCart}>ADD TO CART</span>
            </div>
          </div>
        </div>
        <div class="container1 cont3">
          <div class="overlay">
            <div class="items"></div>
            <div class="items head">
              <p>Hoodie</p>
              <hr />
            </div>
            <div class="items price">
              <p class="old">$699</p>
              <p class="new">$345</p>
            </div>
            <div class="items cart">
              <i class="fa fa-shopping-cart"></i>
              <span onClick={addToCart}>ADD TO CART</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
