import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import productAPI from "./productAPI";
import newsAPI from "./newsAPI";
import reviewAPI from "./reviewAPI";
import cartReducer from "./cartSlice";
import filterReducer from "./filterSlice";
import counterReducer from "./counterSlice";
import authReducer from "./authSlice";
import userAPI from "./userAPI";

const persistConfig = {
  key: "wgb_root",
  storage,
  whitelist: ["cartSlice", "counterSlice", "auth"],
};

const rootReducer = combineReducers({
  auth: authReducer,
  counterSlice: counterReducer,
  cartSlice: cartReducer,
  filter: filterReducer,
  [productAPI.reducerPath]: productAPI.reducer,
  [newsAPI.reducerPath]: newsAPI.reducer,
  [reviewAPI.reducerPath]: reviewAPI.reducer,
  [userAPI.reducerPath]: userAPI.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }).concat(
      logger,
      productAPI.middleware,
      newsAPI.middleware,
      reviewAPI.middleware,
      userAPI.middleware
    ),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
export default store;
