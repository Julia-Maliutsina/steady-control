import { useState, useEffect } from 'react';

import getCitizens from './api/getCitizens';
import './App.css';

const App = () => {
  let [citizens, setCitizens] = useState([]);

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

  return <div className="App">{citizens[0] && citizens[0].name}</div>;
};

export default App;
