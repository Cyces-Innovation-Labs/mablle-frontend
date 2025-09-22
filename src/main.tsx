import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Toaster } from "./components/ui/sonner.tsx";
import ReactQueryProvider from "./provider/ReactQueryProvider.tsx";
import { ThemeProvider } from "./provider/ThemeProvider.tsx";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReactQueryProvider>
      <ThemeProvider defaultTheme="light">
        <BrowserRouter>
          <App />
          <Toaster />
        </BrowserRouter>
      </ThemeProvider>
    </ReactQueryProvider>
  </StrictMode>
);
