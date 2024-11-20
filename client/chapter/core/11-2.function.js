let calcTotal = function () {
  let total = 0;

  //   for (let i = 0; i < arguments.length; i++) {
  //     total += arguments[i];
  //   }

  for (let arg of arguments) {
    total += arg;
  }

  const arr = Array.from(arguments);
  arr.forEach(function (val, idx, ar) {
    console.log(val);
  });
  return total;
};

const result = calcTotal(10000, 30000, 45000, 2500, 30000, 25000);

console.log(result);

// 생성자 함수

function Animal() {
  this.legs = 4;
  this.tail = true;
  this.getEat = function () {
    return this.stomach;
  };
  this.setEat = function (food) {
    this.stomach = [];
    this.stomach.push(food);
  };
}

const a = new Animal();

console.log(a);

a.setEat('사과');
a.getEat();

function Tiger(name) {
  Animal.call(this);

  this.name = name;
  this.pattern = '얼룩무늬';
  this.hunt = function (target) {
    this.pray = target;
    return `${target}에 조용히 접근한다.`;
  };
}

Tiger.prototype = Animal.prototype;

const 금강산호랑이 = new Tiger('금순이');
