import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import ItemList from "./component/ItemList";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ItemList />
    </>
  );
}

export default App;
