"use strict";
var Colors;
(function (Colors) {
    Colors["BLACK"] = "Preta";
    Colors["WHITE"] = "Branca";
    Colors["RED"] = "Vermelha";
    Colors["SILVER"] = "Prata";
})(Colors || (Colors = {}));
var Doors;
(function (Doors) {
    Doors["DOOR1"] = "porta do motorista";
    Doors["DOOR2"] = "porta do passageiro";
    Doors["DOOR3"] = "porta traseira do lado do motorista";
    Doors["DOOR4"] = "porta traseira do lado do passageiro";
})(Doors || (Doors = {}));
var Directions;
(function (Directions) {
    Directions["RIGHT"] = "direito";
    Directions["LEFT"] = "esquerdo";
})(Directions || (Directions = {}));
class Car {
    constructor(brand, color, doors) {
        this.brand = brand;
        this.color = color;
        this.doors = doors;
    }
    ;
    honk() {
        console.log('Buzinando Biii Biii');
    }
    ;
    openTheDoor(door) {
        console.log(`Abrindo a ${door}`);
    }
    closeTheDoor(door) {
        console.log(`Fechando a ${door}`);
    }
    turnOn() {
        console.log('Ligando o carro');
    }
    turnOff() {
        console.log('Desligando o carro');
    }
    speedUp() {
        console.log('Acelerando o carro');
    }
    speedDown() {
        console.log('Desacelerando o carro');
    }
    stop() {
        console.log('Parando o carro');
    }
    turn(direction) {
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
