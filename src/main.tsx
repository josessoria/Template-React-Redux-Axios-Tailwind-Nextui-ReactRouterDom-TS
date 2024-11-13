import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom"; // Importa BrowserRouter

import "./index.css";
import App from "./App.tsx";
import store from "./store/store.tsx"; // Asegúrate de que la extensión sea .ts si es solo TypeScript

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
