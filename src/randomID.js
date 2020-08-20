//GET HEXA CODE (4-num)
let hexa4 = () => {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
};

//Create ID random
let randomID = () => {
  return hexa4() + '-' + hexa4() + hexa4() + '-' + hexa4() + hexa4() + '-' + hexa4();
};

export default randomID;