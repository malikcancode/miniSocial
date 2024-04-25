import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import CreatePost from "./Components/CreatePost";
import { useState } from "react";
import Store from "./Components/Store";
import CardsList from "./Components/CardsList";
import Footer from "./Components/Footer";

function App() {
  const [selected, setSelected] = useState("Home");

  return (
    <>
      <Store>
        <div className="app-container">
          <Sidebar setSelected={setSelected} selected={selected} />
          <div className="main">
            {selected === "Home" ? <CardsList /> : <CreatePost />}
          </div>
        </div>
      </Store>
      <Footer></Footer>
    </>
  );
}

export default App;
