import { useState } from 'react';
import { ListItem, ListItemText } from '@mui/material';

import getCity from '../api/getCity';

const Citizen = ({ citizen }) => {
  let [cityData, setCityData] = useState({});

  const showCityData = async () => {
    getCity(citizen.city_id)
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

  let timer;

  return (
    <ListItem
      className="citizens__name citizen"
      onMouseEnter={() => {
        timer = setTimeout(() => {
          showCityData();
        }, 500);
      }}
      onMouseLeave={() => {
        if (timer) {
          clearTimeout(timer);
        }
        hideCityData();
      }}
    >
      <ListItemText primary={citizen.name} />
      {cityData._id && (
        <div className="citizen__tooltip">
          {cityData.name}, {cityData.data} жителей
        </div>
      )}
    </ListItem>
  );
};

export default Citizen;
