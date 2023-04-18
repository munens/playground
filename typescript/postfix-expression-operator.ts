class Dog {
  height!: number

  constructor() {
    console.log({ height: this.height });
  }
}

const d = new Dog();
