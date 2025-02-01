import { StrictMode, useContext } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "animate.css";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { themeContext, ThemeProvider } from "./Context/Context.jsx";



createRoot(document.getElementById("root")).render(

  <StrictMode>
    <ThemeProvider>
    <App/>
    </ThemeProvider>
  </StrictMode>
);
