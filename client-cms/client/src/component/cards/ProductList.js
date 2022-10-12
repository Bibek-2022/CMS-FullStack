import React, { useEffect, useState } from "react";
import { fetchProductsAction } from "../../pages/product/productAction";
import { useDispatch, useSelector } from "react-redux";

import { Cards } from "./Cards";

export const ProductList = () => {
  const dispatch = useDispatch();
  const [displayProducts, setDisplayProduct] = useState([]);

  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    !displayProducts.length && dispatch(fetchProductsAction());
    products.length && setDisplayProduct(products);
  }, [products, dispatch, displayProducts]);
  console.log(displayProducts);
  return (
    <div>
      {/* <div className="search">
        <div class="container">
          <div class="row searchFilter gap-2">
            <div class="col-sm-12">
              <div class="input-group">
                <input
                  id="table_filter"
                  type="text"
                  class="form-control"
                  aria-label="Text input with segmented button dropdown"
                />
                <div class="input-group-btn">
                  <button
                    type="button"
                    class="btn btn-secondary dropdown-toggle dropdown-toggle-split"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span class="label-icon">Category</span>{" "}
                    <span class="caret">&nbsp;</span>
                  </button>
                  <div class="dropdown-menu dropdown-menu-right">
                    <ul class="category_filters">
                      <li>
                        <input
                          class="cat_type category-input"
                          data-label="All"
                          id="all"
                          value=""
                          name="radios"
                          type="radio"
                        />
                        <label for="all">All</label>
                      </li>
                      <li>
                        <input
                          type="radio"
                          name="radios"
                          id="Design"
                          value="Design"
                        />
                        <label class="category-label" for="Design">
                          Design
                        </label>
                      </li>
                      <li>
                        <input
                          type="radio"
                          name="radios"
                          id="Marketing"
                          value="Marketing"
                        />
                        <label class="category-label" for="Marketing">
                          Marketing
                        </label>
                      </li>
                      <li>
                        <input
                          type="radio"
                          name="radios"
                          id="Programming"
                          value="Programming"
                        />
                        <label class="category-label" for="Programming">
                          Programming
                        </label>
                      </li>
                      <li>
                        <input
                          type="radio"
                          name="radios"
                          id="Sales"
                          value="Sales"
                        />
                        <label class="category-label" for="Sales">
                          Sales
                        </label>
                      </li>
                      <li>
                        <input
                          type="radio"
                          name="radios"
                          id="Support"
                          value="Support"
                        />
                        <label class="category-label" for="Support">
                          Support
                        </label>
                      </li>
                    </ul>
                  </div>
                  <button
                    id="searchBtn"
                    type="button"
                    class="btn btn-secondary btn-search"
                  >
                    <span class="glyphicon glyphicon-search">&nbsp;</span>{" "}
                    <span class="label-icon">Search</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* Search bar UI  */}

      <div className="container">
        <h1 className="text-center p-5 Auth-form-title mt-5">
          <bold>P</bold>RODUCTS
        </h1>
        <div className="">
          <div className="wrapper mb-5">
            <div className="search">
              <input
                id="search"
                type="search"
                placeholder="Search your product"
                autocomplete="off"
              />
              <i class="fas fa-search"></i>
            </div>
          </div>
          {/* <div className="wrapper mb-5 col col-4">
            <div className="search">
              <button className="btn btn-primary">Add Product</button>
                id="search"
                type="search"
                placeholder="Search your product"
                autocomplete="off"
              />
              <i class="fas fa-search"></i>
            </div>
          </div> */}
          <div>{/* filter with dropdown */}</div>
        </div>
        {displayProducts.map((product) => {
          return (
            <div>
              <Cards product={product} />
            </div>
          );
        })}
        <Cards />
      </div>
    </div>
  );
};
