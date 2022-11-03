const changePropertiesNullToEmptyString = (obj: any) => {
  Object.entries(obj).forEach((e, i) => {
    obj[e[0]] = e[1] === null ? '' : e[1];
  });
  return obj;
};

export {
  changePropertiesNullToEmptyString,
};