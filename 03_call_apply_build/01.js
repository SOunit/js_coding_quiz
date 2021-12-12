// 1. call
// can set an object to this
var employee1 = { firstName: 'John', lastName: 'Rodson' };
var employee2 = { firstName: 'Jimmy', lastName: 'Baily' };

function invite(greeting1, greeting2) {
  console.log(
    greeting1 + ' ' + this.firstName + ' ' + this.lastName + ', ' + greeting2
  );
}

invite.call(employee1, 'Hello', 'How are you?'); // Hello John Rodson, How are you?
invite.call(employee2, 'Hello', 'How are you?'); // Hello Jimmy Baily, How are you?

// 2. apply
// same with call, but you can pass argument as array
var employee1 = { firstName: 'John', lastName: 'Rodson' };
var employee2 = { firstName: 'Jimmy', lastName: 'Baily' };

function invite(greeting1, greeting2) {
  console.log(
    greeting1 + ' ' + this.firstName + ' ' + this.lastName + ', ' + greeting2
  );
}

invite.apply(employee1, ['Hello', 'How are you?']); // Hello John Rodson, How are you?
invite.apply(employee2, ['Hello', 'How are you?']); // Hello Jimmy Baily, How are you?

// 3. bind
// return a new function
var employee1 = { firstName: 'John', lastName: 'Rodson' };
var employee2 = { firstName: 'Jimmy', lastName: 'Baily' };

function invite(greeting1, greeting2) {
  console.log(
    greeting1 + ' ' + this.firstName + ' ' + this.lastName + ', ' + greeting2
  );
}
var inviteEmployee1 = invite.bind(employee1);
var inviteEmployee2 = invite.bind(employee2);
inviteEmployee1('Hello', 'How are you?'); // Hello John Rodson, How are you?
inviteEmployee2('Hello', 'How are you?'); // Hello Jimmy Baily, How are you?
