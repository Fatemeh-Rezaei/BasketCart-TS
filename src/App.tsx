import { useRoutes } from "react-router-dom";

import Header from "./components/Header";
import routes from "./routes";
import CartContextProvider from "./context/CartContext";

import "./App.css";

function App() {
  const router = useRoutes(routes);

  return (
    <CartContextProvider>
      <div className="app">
        <Header />

        {router}

        {/* Finish Content */}

        <footer>
          <a target={"_blank"} href="https://sabzlearn.ir">
            Developed by Fatemeh with ♥
          </a>
        </footer>
      </div>
    </CartContextProvider>
  );
}

export default App;
