import { toast } from "react-toastify";
import { getProducts, getsingleProduct } from "../../helpers/axiosHelper";

import { setProducts, setSelectedProduct } from "./productSlice";

export const fetchProductsAction = () => async (dispatch) => {
  const { status, message, products } = await getProducts();

  status === "success" && dispatch(setProducts(products));
};

export const fetchSingleProductAction = (_id) => async (dispatch) => {
  const { status, message, products } = await getsingleProduct(_id);

  status === "success" && dispatch(setSelectedProduct(products));
};
