enum Colors {
  BLACK = 'Preta',
  WHITE = 'Branca',
  RED = 'Vermelha',
  SILVER = 'Prata'
}

enum Doors {
  DOOR1 = 'porta do motorista',
  DOOR2 = 'porta do passageiro',
  DOOR3 = 'porta traseira do lado do motorista',
  DOOR4 = 'porta traseira do lado do passageiro'
}

enum Directions {
  RIGHT = 'direito',
  LEFT = 'esquerdo'
}

class Car {
  brand: string;
  color: Colors;
  doors: number;

  constructor (brand: string, color: Colors, doors: number) {
    this.brand = brand;
    this.color = color;
    this.doors = doors;
  };

  honk(): void {
    console.log('Buzinando Biii Biii');
  };

  openTheDoor(door: Doors): void {
    console.log(`Abrindo a ${door}`);
  }

  closeTheDoor(door: Doors): void {
    console.log(`Fechando a ${door}`);
  }

  turnOn(): void {
    console.log('Ligando o carro');
  }

  turnOff(): void {
    console.log('Desligando o carro');
  }

  speedUp(): void {
    console.log('Acelerando o carro');
  }

  speedDown(): void {
    console.log('Desacelerando o carro');
  }

  stop(): void {
    console.log('Parando o carro');
  }

  turn(direction: Directions): void {
    console.log(`Virando para o lado ${direction}`);
  }
}

const gol = new Car('Volkswagen', Colors.SILVER, 4);

gol.openTheDoor(Doors.DOOR1);
gol.closeTheDoor(Doors.DOOR1);
gol.turnOn();
gol.speedUp();
gol.speedDown();
gol.turn(Directions.LEFT);
gol.speedUp();
gol.speedDown();
gol.turn(Directions.RIGHT);
gol.speedUp();
gol.speedDown();
gol.turn(Directions.RIGHT);
gol.speedUp();
gol.speedDown();
gol.stop();
gol.openTheDoor(Doors.DOOR4);
gol.closeTheDoor(Doors.DOOR4);
gol.speedUp();
gol.speedDown();
gol.turn(Directions.RIGHT);
gol.speedUp();
gol.speedDown();
gol.turn(Directions.LEFT);
gol.speedUp();
gol.speedDown();
gol.turn(Directions.RIGHT);
gol.speedUp();
gol.speedDown();
gol.stop();
gol.openTheDoor(Doors.DOOR4);
gol.closeTheDoor(Doors.DOOR4);
gol.speedUp();