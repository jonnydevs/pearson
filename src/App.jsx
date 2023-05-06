import { CartProvider } from "react-use-cart";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import CartPage from "./components/cart/CartPage";
import Shopping from "./components/shopping/Shopping";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
  {
    path: "/shop",
    element: <Shopping />,
  },
]);

const App = () => {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
};

export default App;
