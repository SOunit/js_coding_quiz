const parent = document.querySelector('.parent');
const child = document.querySelector('.child');

parent.addEventListener(
  'click',
  () => {
    console.log('parent');
  },
  // event capturing
  true
);

child.addEventListener('click', () => {
  console.log('child');
});
