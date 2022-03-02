class RetiredForagerBee extends ForagerBee {
  constructor() {
    super();
    this.age = 40;
    this.job = 'gamble';
    this.canFly = false;
    this.color = 'grey';
  }
  gamble() {
    this.treasureChest.push('treasure');
  }
  forage() {
    return 'I am too old, let me play cards instead';
  }
}