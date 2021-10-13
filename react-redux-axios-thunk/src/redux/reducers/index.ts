import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productReducer";
import { selectedTableItemReducer, tableReducer } from "./tableReducer";

const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,

  allTableItems: tableReducer,
  tableItem: selectedTableItemReducer
});

export default reducers;