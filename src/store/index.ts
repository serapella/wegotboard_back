import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import cartReducer from "./cartSlice";
import reviewsReducer from "./reviewSlice";

const persistConfig = {
  key: "wgb_root",
  storage,
  whitelist: ["reviews"],
};

const rootReducer = combineReducers({
  cartSlice: cartReducer,
  reviewSlice: reviewsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const weGotBoard = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }).concat(logger),
});

export default weGotBoard;
export type RootState = ReturnType<typeof weGotBoard.getState>;
export type AppDispatch = typeof weGotBoard.dispatch;
export const persistor = persistStore(weGotBoard);
