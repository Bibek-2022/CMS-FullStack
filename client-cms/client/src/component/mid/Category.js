import React, { useEffect, useState } from "react";
import "./category.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoryAction } from "../../pages/mid-page/catAction";
import { checkoutAction } from "../../pages/checkout/CheckoutAction";
export const Category = () => {
  const dispatch = useDispatch();
  const [cat, setCat] = useState([]);
  //const { checkout } = useSelector((state) => state.checkout);
  const { category } = useSelector((state) => state.category);
  const [items, setItems] = useState([]);

  // useEffect(() => {
  //   localStorage.setItem("items", JSON.stringify(items));
  // }, [items]);
  useEffect(() => {
    !cat.length && dispatch(fetchCategoryAction());
    category.length && setCat(category);
  }, [category, dispatch, cat]);

  const addToCart = (e) => {
    console.log(e);
    console.log(e.target);
    console.log("add to cart");
    //dispatch(checkoutAction(e));
  };
  return (
    <div className="back p-3">
      <h1 className="text-center p-3 Auth-form-title mt-3">
        ☀☀☀☀☀☀ HOT PRODUCT ☀☀☀☀☀☀
      </h1>
      <div className="d-flex flex-wrap justify-content-center align-items-center gap-5 category">
        <div class="container1">
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
              <span value="abcde" onClick={addToCart}>
                ADD TO CART
              </span>
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
              <span>ADD TO CART</span>
            </div>
          </div>
        </div>
        <div class="container1 cont3">
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
              <span>ADD TO CART</span>
            </div>
          </div>
        </div>
        <div class="container1 cont4">
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
              {/* <i class="fa fa-shopping-cart"></i> 
              <span>ADD TO CART</span> */}
              <i class="fa fa-circle-info "></i>
              {/* <span>CHECK OUT</span> */}
              <span>
                <Link to="/products" className="linkk">
                  {" "}
                  CHECK IT OUT!
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
