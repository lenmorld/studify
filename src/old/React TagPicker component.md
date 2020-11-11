React TagPicker component

* Search for tags or add a new one
* Can be a based for any search + autocomplete + add new UI

* see README and PLAN for design and implementation details


const objectsToArray = (objectsArray) => {
  Object.entries(objectsArray).reduce((acc, [key, value]) => {
    return [...acc, { [key]: value }];
  }, []);
};
