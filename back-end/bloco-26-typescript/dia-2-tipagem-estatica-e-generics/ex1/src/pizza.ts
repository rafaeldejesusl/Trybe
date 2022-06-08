type Slices = 4 | 6 | 8;
type Comum = 'Calabresa' | 'Frango' | 'Pepperoni';
type Vegetariana = 'Marguerita' | 'Palmito' | 'Cogumelo';
type Doce = 'Nutela' | 'Goiabada com Queijo' | 'Marshmallow';

interface Pizza {
  flavor: string,
  slices: Slices
};

const calabresa: Pizza = {
  flavor: 'Calabresa',
  slices: 8
};

const marguerita: Pizza = {
  flavor: 'Marguerita',
  slices: 6
};

const nutela: Pizza = {
  flavor: 'Nutela',
  slices: 4
};

interface PizzaComum extends Pizza {
  flavor: Comum
};

interface PizzaVegetariana extends Pizza {
  flavor: Vegetariana
}

interface PizzaDoce extends Pizza {
  flavor: Doce,
  slices: 4
}

const pizza1: PizzaComum = {
  flavor: 'Calabresa',
  slices: 8
};

const pizza2: PizzaComum = {
  flavor: 'Frango',
  slices: 8
};

const pizza3: PizzaComum = {
  flavor: 'Pepperoni',
  slices: 8
}

const pizza4: PizzaVegetariana = {
  flavor: 'Marguerita',
  slices: 6
};

const pizza5: PizzaVegetariana = {
  flavor: 'Cogumelo',
  slices: 6
};

const pizza6: PizzaDoce = {
  flavor: 'Goiabada com Queijo',
  slices: 4
}
