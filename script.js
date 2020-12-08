const character = {
  name: 'Pendalf',
  gender: 'male',
  age: 100500,
  weapon: 'stick',
  good: true,
};

// Возврат длины всех строковых значений
const checkLength = (objectToCheck) => {
  let length = 0;
  for (const key in objectToCheck) {
    const element = objectToCheck[key];
    if (isNaN(element)) length += element.length;
  }
  return length;
};

console.log(checkLength(character));


// Возврат копии всех свойств без значений
const copyProps = (object) => {
  const newCharacter = {};
  for (const key in object) {
    newCharacter[key] = null;
  }
  return newCharacter;
};

console.log(copyProps(character));


// Возврат копии объекта с заменой значений
const checkData = (property) => {
  switch (typeof(property)) {
    case 'string':
      return property.length;
    case 'number':
      return property;
    case 'boolean':
      return +property;
    case 'undefined':
      return undefined;
    default:
      return null;
  }
};

const copyObject = (objectToCopy) => {
  const newCharacter = {};
  for (const key in objectToCopy) {
    newCharacter[key] = checkData(objectToCopy[key]);
  }
  return newCharacter;
};

console.log(copyObject(character));