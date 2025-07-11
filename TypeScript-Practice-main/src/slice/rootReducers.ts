import {combineReducers} from "redux";
import productReducer from "./productsSlice.ts";
import cartReducer from "./cartSlice.ts";
import contactReducer from "./contactSlice.ts";

 export const rootReducer = combineReducers({
    products : productReducer,
        cart: cartReducer,
     contact: contactReducer
});
 export type RootState = ReturnType<typeof rootReducer>;