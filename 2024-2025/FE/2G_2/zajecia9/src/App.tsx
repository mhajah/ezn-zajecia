import { useState } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";

function App() {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    { id: 0, name: "home", content: <Home /> },
    { id: 1, name: "about", content: "About page" },
    { id: 2, name: "contact", content: "Contact page" },
  ];

  return (
    <>
      <Header setState={setActiveTab} />
      <div>{activeTab}</div>
    </>
  );
}

export default App;
