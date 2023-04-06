const getCitizens = () => fetch(`${process.env.REACT_APP_SERVER}/citizens`);

export default getCitizens;
