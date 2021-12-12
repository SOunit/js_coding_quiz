(() => {
  class Person {
    constructor(name) {
      this.name = name;
    }
  }

  class Wizard extends Person {
    constructor(name) {
      super(name);
    }

    fire() {
      console.log(`${name} used fire.`);
    }
  }

  const wizard = new Wizard('Jack');
  console.log(wizard);
  console.log(wizard.proto);
})();
