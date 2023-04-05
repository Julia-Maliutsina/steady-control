import Citizen from '../db/models/citizen.js';

const getCitizens = async ({}) => {
  const citizens = await Citizen.find();

  const addElement = (i, citizen) => {
    let result = false;
    if (i < citizen.groups.length) {
      result = {
        type: citizen.groups[i].type,
        name: citizen.groups[i].name,
      };
      if (i !== citizen.groups.length - 1) {
        result.elements = [addElement(i + 1, citizen)];
      } else {
        result.citizens = [{ _id: citizen._id, name: citizen.name, city_id: citizen.city_id }];
      }
    }
    return result;
  };

  const checkGroup = (array, i, citizen) => {
    const lastLevelGroup = i === citizen.groups.length - 1;
    let elementIndex = array.findIndex(
      (el) => el.name === citizen.groups[i].name && el.type === citizen.groups[i].type,
    );
    if (elementIndex < 0) {
      let object = {
        type: citizen.groups[i].type,
        name: citizen.groups[i].name,
      };
      if (lastLevelGroup) {
        const { _id, name, city_id } = citizen;
        object.citizens = [{ _id, name, city_id }];
      } else {
        object.elements = [addElement(i + 1, citizen)];
      }
      array.push(object);
      return { isElementAdded: true, array };
    } else {
      if (lastLevelGroup) {
        const { _id, name, city_id } = citizen;
        array[elementIndex].citizens
          ? array[elementIndex].citizens.push({ _id, name, city_id })
          : (array[elementIndex].citizens = [{ _id, name, city_id }]);
        return { isElementAdded: true, array };
      }
      return { isElementAdded: false, array: array[elementIndex].elements };
    }
  };

  let result = [];

  citizens.forEach((citizen) => {
    let arrayToCheck = result;
    for (let i = 0; i < citizen.groups.length; i++) {
      let { isElementAdded, array } = checkGroup(arrayToCheck, i, citizen);
      arrayToCheck = array;
      if (isElementAdded) {
        break;
      } else {
        continue;
      }
    }
  });

  return { status: 'ok', result };
};

const getCitizen = async ({ id }) => {
  const citizen = await Citizen.findById(id);

  return { status: 'ok', citizen };
};

const citizensService = { getCitizens, getCitizen };

export default citizensService;
