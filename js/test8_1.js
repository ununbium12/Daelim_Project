class Pet {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  run = function () {
    alert(`${this.name} is runing`);
  }
}

const cheez = new Pet ("치즈", "white");
cheez.run();