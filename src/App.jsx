import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import NavBar from "./components/NavBar/NavBar";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={ <ItemListContainer/>} />
          <Route path="/categoria/:categoria" element={ <ItemListContainer/>} />
          <Route path="/detalle/:id" element={ <ItemDetailContainer/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App
