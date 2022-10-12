import { useState, useEffect } from "react";
import Input from "./components/Input";
import coldBg from "./assets/cold2.jpg";
import warmBg from "./assets/warm2.jpg";
import axios from "axios";

function App() {
  const [weather, setWeather] = useState("");

  const dynamicBg = { backgroundImage: `url(${coldBg})` };

  useEffect(() => {
    async function getWeather() {
      const res = await fetch("url");
      const data = await res.json();
      setWeather(data);
    }
    getWeather();
  }, []);

  return (
    <div className="App" style={dynamicBg}>
      <Input />
    </div>
  );
}

export default App;
