import './App.css';
import { BrowserRouter, Route, Routes, Redirect } from "react-router-dom";
import NavBar from "./components/NavBar";
import Item from "./components/Item";
import Home from "./components/Home"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/item:name" element={<Item />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
