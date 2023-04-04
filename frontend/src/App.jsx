import { useState, useEffect } from 'react';

import getCitizens from './api/getCitizens';
import getCity from './api/getCity';
import './App.css';

const App = () => {
  let [citizens, setCitizens] = useState([]);
  let [cityData, setCityData] = useState({});

  useEffect(() => {
    getCitizens()
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          console.log(response);
        }
      })
      .then((data) => {
        setCitizens(data.citizens);
      });
  }, []);

  const showCityData = async (id) => {
    getCity(id)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          console.log(response);
        }
      })
      .then((data) => {
        setCityData(data.city);
      });
  };
  const hideCityData = () => {
    setCityData({});
  };

  return (
    <div className="App">
      <div>{cityData._id}</div>
      {citizens[0] &&
        citizens.map((citizen) => (
          <div
            key={citizen._id}
            onMouseEnter={() => showCityData(citizen.city_id)}
            onMouseLeave={hideCityData}
          >
            {citizen.name}
          </div>
        ))}
    </div>
  );
};

export default App;
