class ForagerBee extends Bee {
  constructor() {
    super();
    this.age = 10;
    this.job = 'find pollen';
    this.canFly = true;
    this.treasureChest = [];
  }
  forage(input) {
    this.treasureChest.push(input);
  }
}