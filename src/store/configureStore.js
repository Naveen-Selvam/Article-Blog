import { createStore, combineReducers } from "redux";
import formDataReducer from "../reducers/formDataReducer";

const configureStore = () => {
  const store = createStore(
    combineReducers({
      formData: formDataReducer,
    })
  );
  return store;
};

export default configureStore;
