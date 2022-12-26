class Pet {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  run = function () { 
    alert(`${this.name} is runing`);
  }
}

class Cat extends Pet {
  constructor(name, breed, color) {
    super(name, color);
    this.breed = breed;
  }
  veiwInfo() {
    alert(`이름 : ${this.name}, 품종 : ${this.breed}, 색깔 : ${this.color}`);
  }
}

const bori = new Cat ("보리", "코숏", "흰색");
bori.veiwInfo();