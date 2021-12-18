// in JS, don't stop prepagation(event bubbling, event captruring)
document.getElementById('parent').onclick = function () {
  console.log('parent');
  return false;
};

document.getElementById('child').onclick = function () {
  console.log('child');
  return false;
};
