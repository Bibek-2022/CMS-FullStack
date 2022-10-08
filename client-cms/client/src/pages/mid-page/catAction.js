import { toast } from "react-toastify";
import { getCategory } from "../../helpers/axiosHelper";
import { setCategory } from "./catSlice";

// import { setProducts, setSelectedProduct } from "./productSlice";

export const fetchCategoryAction = () => async (dispatch) => {
  const { status, message, result } = await getCategory();

  status === "success" && dispatch(setCategory(result));
};

// export const fetchSingleProductAction = (_id) => async (dispatch) => {
//   const { status, message, products } = await getsingleProduct(_id);

//   status === "success" && dispatch(setSelectedProduct(products));
// };
