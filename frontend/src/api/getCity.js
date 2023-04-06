const getCity = (id) => fetch(`${process.env.REACT_APP_SERVER}/cities/${id}`);

export default getCity;
