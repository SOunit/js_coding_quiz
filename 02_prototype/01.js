(() => {
  class Person {
    constructor(name) {
      this.name = name;
    }
  }

  class Wizard extends Person {
    constructor(name) {
      super(name);
      this.type = 'Wizard';
    }

    fire() {
      console.log(`${name} used fire.`);
    }
  }

  const wizard = new Wizard('Jack');
  console.log(wizard);
  console.log(wizard.__proto__);
  console.log(Object.getPrototypeOf(wizard));
})();
