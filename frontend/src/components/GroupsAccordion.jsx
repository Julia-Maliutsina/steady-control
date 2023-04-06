import { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';

import CitizensList from './CitizensList';

const GroupsAccordion = ({ group, level }) => {
  let [expanded, setExpanded] = useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return group.map((groupEl) => (
    <Accordion
      key={groupEl.name}
      expanded={expanded === `panel${groupEl.name}`}
      onChange={handleChange(`panel${groupEl.name}`)}
      className={`accordion__group group accordion_level_${level}`}
    >
      <AccordionSummary>
        <Typography>{groupEl.name}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {groupEl.elements ? (
          <GroupsAccordion group={groupEl.elements} level={level === 'odd' ? 'even' : 'odd'} />
        ) : (
          <CitizensList citizens={groupEl.citizens} />
        )}
      </AccordionDetails>
    </Accordion>
  ));
};

export default GroupsAccordion;
