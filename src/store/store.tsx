import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
// Importa aquí tus slices
import userReducer from "./slices/userSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    // Agrega más reducers aquí
  },
});

// Tipos para el state y dispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
