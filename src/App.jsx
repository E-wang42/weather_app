import { useState, useEffect } from "react";
import coldBg from "./assets/cold2.jpg";
import warmBg from "./assets/warm2.jpg";
import axios from "axios";

function App() {
  const [weather, setWeather] = useState({});

  const dynamicBg = { backgroundImage: `url(${coldBg})` };

  useEffect(() => {
    async function getWeather() {
      const res = await fetch(
        `api.openweathermap.org/data/2.5/forecast?q=${"dallas"}&appid=${"84bc8ff0a28c640cbe8ca1ffe5b2b532"}`
      );
      const data = await res.json();
      setWeather(data);
    }
    getWeather();
  }, []);

  return (
    <div className="app" style={dynamicBg}>
      <div className="overlay">
        <div className="mt-8 w-3/4 flex-row justify-center gap-y-6">
          <div className="section section__inputs">
            <input
              className="indent-4"
              name="city"
              type="text"
              placeholder="Enter City"
            />
            <button className="degrees">°F</button>
          </div>

          <div className="section section__temp">
            <div className="icon">
              <h3>London, GB</h3>
              <img
                className="weatherIcon"
                src="https://i.ibb.co/9NxvtG9/cloud.png"
                alt="weatherIcon"
              />
              <h3>Cloudy</h3>
            </div>

            <div className="temp">
              <h1>34 °C</h1>
            </div>
          </div>

          {/* {bottom desc} */}
        </div>
      </div>
    </div>
  );
}

export default App;
