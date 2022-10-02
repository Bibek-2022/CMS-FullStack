import React from "react";
import "./category.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const Category = () => {
  return (
    <>
      <h1 className="text-center p-3 Auth-form-title">Category</h1>
      <div className="d-flex flex-wrap justify-content-center align-items-center gap-5 category">
        {/* <div class="card text-center sp">
          <blockquote class="blockquote mb-0">
            <p>Tshirt</p>
          </blockquote>
        </div>
        <div class="card text-center sp">
          <blockquote class="blockquote mb-0">
            <p>Jeans</p>
          </blockquote>
        </div>
        <div class="card text-center sp">
          <blockquote class="blockquote mb-0">
            <p>Hoodie</p>
          </blockquote>
        </div>
        <div class="card text-center sp">
          <blockquote class="blockquote mb-0">
            <p>Tops</p>
          </blockquote>
        </div>
        <div class="card text-center sp">
          <blockquote class="blockquote mb-0">
            <p>Shoes</p>
          </blockquote>
        </div>
        <div class="card text-center sp">
          <blockquote class="blockquote mb-0">
            <p>Jacket</p>
          </blockquote>
        </div>
        <div class="card text-center sp">
          <blockquote class="blockquote mb-0">
            <p>Tshirt</p>
          </blockquote>
        </div> */}
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
              <span>ADD TO CART</span>
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
              <FontAwesomeIcon icon="fa-solid fa-circle-info" />
              <span>CHECK OUT</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
