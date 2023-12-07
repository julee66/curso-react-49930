import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import './App.css';

function App() {

  return (
    <div id="app">
      <NavBar />
      <ItemListContainer saludo="Encontrá todo lo necesario para comenzar a entrenar!"/>
    </div>
  )
}

export default App
