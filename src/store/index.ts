import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import productAPI from "./productAPI";
import filterReducer from "./filterSlice";
import productgridReducer from "./paginationSlice";
import newsAPI from "./newsAPI";
import sort from "./sortSlice";
import reviewAPI from "./reviewAPI";
import cartReducer from "./cartSlice";
import counterReducer from "./counterSlice";
import userAPI from "./userAPI";

const persistConfig = {
  key: "wgb_root",
  storage,
  whitelist: ["cartSlice", "counterSlice"],
};

const rootReducer = combineReducers({
  counterSlice: counterReducer,
  cartSlice: cartReducer,
  filter: filterReducer,
  productGrid: productgridReducer,
  sort: sort,
  [productAPI.reducerPath]: productAPI.reducer,
  [newsAPI.reducerPath]: newsAPI.reducer,
  [reviewAPI.reducerPath]: reviewAPI.reducer,
  [userAPI.reducerPath]: userAPI.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(logger)
      .concat(productAPI.middleware)
      .concat(newsAPI.middleware)
      .concat(reviewAPI.middleware)
      .concat(userAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
export default store;
