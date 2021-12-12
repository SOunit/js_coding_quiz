let person = { name: 'Jack' };

const personJSON = JSON.stringify(person);
console.log(personJSON);

const personObj = JSON.parse(personJSON);
console.log(personObj);
