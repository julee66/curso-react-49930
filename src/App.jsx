import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Carrito from "./components/Carrito/Carrito";
import NavBar from "./components/NavBar/NavBar";
import Checkout from "./components/CheckOut/CheckOut";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext"

function App() {

  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
          <Routes>
            <Route path="/" element={ <ItemListContainer/>} />
            <Route path="/categoria/:categoria" element={ <ItemListContainer/>} />
            <Route path="/detalle/:id" element={ <ItemDetailContainer/>} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/checkout" element={ <Checkout /> } />
          </Routes>
        </CartProvider>
    </BrowserRouter>
  );
}

export default App
