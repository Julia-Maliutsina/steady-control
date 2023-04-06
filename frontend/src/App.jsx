import { useState, useEffect } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  CircularProgress,
} from '@mui/material';

import getCitizens from './api/getCitizens';
import GroupsAccordion from './components/GroupsAccordion';
import './App.css';

const App = () => {
  let [groups, setGroups] = useState([]);
  let [expanded, setExpanded] = useState('');

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
        setGroups(data.citizens);
      });
  }, []);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="app">
      <header className="app__title">Список жителей</header>
      <div>
        {groups[0] ? (
          groups.map((group) => (
            <Accordion
              key={group.name}
              expanded={expanded === `panel${group.name}`}
              onChange={handleChange(`panel${group.name}`)}
              className="app__groups accordion accordion_level_even"
            >
              <AccordionSummary>
                <Typography>{group.name}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <GroupsAccordion group={group.elements} level="odd" />
              </AccordionDetails>
            </Accordion>
          ))
        ) : (
          <CircularProgress size={50} color="secondary" className="app__loader" />
        )}
      </div>
    </div>
  );
};

export default App;
