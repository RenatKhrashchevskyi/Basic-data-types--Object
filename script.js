function animal(obj){
  let newDog  = {
    name: obj.name,
    legs: obj.legs,
    color: obj.color
  };
  return 'This ' + newDog.color +' ' + newDog.name + ' has ' + newDog.legs + ' legs.';
}