const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = () => {
  let damage = 0;
  for (let i = 0; damage < 15; i += 1) {
    damage = Math.floor(Math.random() * dragon.strength);
  }
  return damage;
}

const warriorDamage = () => {
  let damage = 0;
  for (let i = 0; damage < warrior.strength; i += 1) {
    damage = Math.floor(Math.random() * (warrior.strength * warrior.weaponDmg));
  }
  return damage;
}

const mageDamage = () => {
  let damage = 0;
  let manaUsed = 15;
  if (mage.mana < 15) {
    damage = 'Não possui mana suficiente';
    manaUsed = 0;
    return {damage, manaUsed}
  }
  for (let i = 0; damage < mage.intelligence; i += 1) {
    damage = Math.floor(Math.random() * (mage.intelligence * 2));
  }
  return {damage, manaUsed};
}

const gameActions = {
  warriorTurn: (callback) => {
    let damage = callback();
    dragon.healthPoints -= damage;
    warrior.damage = damage;
  },
  mageTurn: (callback) => {
    let damage = callback().damage;
    dragon.healthPoints -= damage;
    mage.damage = damage;
    mage.mana -= callback().manaUsed;
  },
  dragonTurn: (callback) => {
    let damage = callback();
    warrior.healthPoints -= damage;
    mage.healthPoints -= damage;
    dragon.damage = damage;
  },
  turnEnd: () => battleMembers,
};

gameActions.warriorTurn(warriorDamage);
gameActions.mageTurn(mageDamage);
gameActions.dragonTurn(dragonDamage);
console.log(gameActions.turnEnd());