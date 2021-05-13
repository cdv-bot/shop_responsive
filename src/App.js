import "./App.css";
import MenuBar from "./component/menu/MenuBar";
import MenuMobile from "./component/menu/MenuMobile";
import Home from "./pages/home";
function App() {
  return (
    <div className="App">
      <MenuMobile />
      <MenuBar />
      <Home />
    </div>
  );
}

export default App;
