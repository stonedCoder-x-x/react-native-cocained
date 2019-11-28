const checkForEmptyKeys = function(dataObj) {
  let emptyInputs = [];
  let errorString = 'Input error, Please fill '
  for (var key in dataObj) {
    
    if (dataObj[key] == "" || dataObj[key] == undefined ) {
      errorString += key.toUpperCase()+', '
      emptyInputs.push(key.toUpperCase());
    }
  }

  return {anyEmptyInputs:emptyInputs,errorString};
};

export { checkForEmptyKeys };
