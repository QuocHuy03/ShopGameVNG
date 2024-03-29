import ReactDOM from "react-dom/client";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { persistor, store } from "./stores/index.ts";
import App from "./App.tsx";
const queryClient = new QueryClient();
import NProgress from "nprogress";
import "nprogress/nprogress.css"; // Import the styles
import { BrowserRouter } from "react-router-dom";
// Configure NProgress
NProgress.configure({ showSpinner: true });
ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  </BrowserRouter>
  // </React.StrictMode>
);
