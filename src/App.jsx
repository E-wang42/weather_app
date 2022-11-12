import { useState, useEffect, useTransition } from "react";
import coldBg from "./assets/cold2.jpg";
import warmBg from "./assets/warm2.jpg";
import Desc from "./components/Desc";

function App() {
  const [input, setInput] = useState("Dallas");
  const [weather, setWeather] = useState([]);
  const [units, setUnits] = useState("metric");
  const [bg, setBg] = useState(warmBg);

  const dynamicBg = { backgroundImage: `url(${coldBg})` };

  // useEffect(() => {
  //   fetch(
  //     `https://api.openweathermap.org/data/2.5/weather?q=${"dallas"}&appid=84bc8ff0a28c640cbe8ca1ffe5b2b532`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => setWeather(data))
  //     .catch((err) => console.error(err));
  // }, []);

  weather.main.temp;

  const getFahrenheit = () => {
    const fahren = Math.round(1.8 * ({} - 273) + 32);
  };

  return (
    <div className="app" style={dynamicBg}>
      <div className="overlay">
        <div className="container">
          <div className="section section__inputs">
            <input
              className="focus:outline-none indent-4"
              name="city"
              type="text"
              placeholder="Enter City..."
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
              <h1>34 °</h1>
            </div>
          </div>
          {/* {bottom desc} */}
          <Desc />
          {/* <div>{currentWeather}</div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
