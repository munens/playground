abstract class Animal {
  constructor(public name: string, public age: number) {
      this.getInformation();
  }

  protected abstract getInformation(): void;
}

class Dog extends Animal {
  constructor(public name: string, public age: number) {
      super(name, age);
  }

  getInformation(): void {
      console.log(`${this.name} ${this.age}`);
  }
}

const a = new Dog('dog', 30);
a.getInformation()
