'use strict';

class First {
  constructor(firstText = 'Привет я метод родителя!') {
    this.firstText = firstText;
  }
  hello() {
    console.log(this.firstText);
  }
}

class Second extends First {
  constructor(firstText, secondText = 'А я наследуемый метод!') {
    super(firstText);
    this.secondText = secondText;
  }
  hello() {
    super.hello();
    console.log(this.secondText);
  }
}

const second = new Second();
second.hello()
