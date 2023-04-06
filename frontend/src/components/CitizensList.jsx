import { List } from '@mui/material';

import Citizen from './Citizen';

const CitizensList = ({ citizens }) => (
  <List className="group__citizens citizens">
    {citizens.map((citizen) => (
      <Citizen citizen={citizen} key={citizen._id} />
    ))}
  </List>
);

export default CitizensList;
