import { useState, useEffect } from "react";
import Input from "./components/Input";
import coldBg from "./assets/cold2.jpg";
import warmBg from "./assets/warm2.jpg";

function App() {
  const dynamicBg = { backgroundImage: `url(${coldBg})` };

  return (
    <div className="App" style={dynamicBg}>
      <Input />
    </div>
  );
}

export default App;
