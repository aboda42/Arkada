// class Person {
//     name;
//     constructor(name) {
//         this.name = name;
//     }
// }
// class Student extends Person { //třída Student je potomek třídy Person
//     absence;
//     constructor(name, absence) {
//         super(name) //volání konstruktoru předka
//         this.absence = absence;
//     }
// }

// const firstStudent = new Student("Adam", 50);
// console.log("Student " + firstStudent.name +" má " + firstStudent.absence +" zameškaných hodin.");

//Vesmírná loď

class SpaceShip {
    nazev;
    pozice;
    palivo;
    spotrebaPaliva;
    silaStitu;
    constructor(nazev, pozice, palivo, spotrebaPaliva, silaStitu) {
        this.nazev = nazev;
        this.pozice = pozice;
        this.palivo = palivo;
        this.spotrebaPaliva = spotrebaPaliva;
        this.silaStitu = silaStitu;
    }
    getPosition() {
        console.log("Současná pozice vesmírné lodi " + this.nazev + " je " + this.pozice + " světelných let.");
    }
    getFuel() {
        console.log("Množství paliva v lodi " + this.nazev + " je " + this.palivo + " jednotek.");
    }
    getshieldStrength() {
        if (this.silaStitu <= 0) {
            console.log("Loď " + this.nazev + " byla zničena!");
        }
        else {
            console.log("Loď " + this.nazev + " má aktivní štít o síle " + this.silaStitu + ".");
        }
    }
    refuel(amount) {
        console.log("Loď " + this.nazev + " byla doplněna palivem o " + amount + " jednotek.");
        this.palivo = this.palivo + amount;
    }
    move(distance) {
        if ((distance*this.spotrebaPaliva) <= this.palivo) {
            console.log("Loď " + this.nazev + " se posunula o " + distance + " světelných let.");
            this.pozice = this.pozice + distance;
            this.palivo = this.palivo - (distance*this.spotrebaPaliva);
        }
        else {
            console.log("Vaše loď nemá dostatek paliva na to, aby podnikla tento posun!");
        }
    }
}

const spaceShip1 = new SpaceShip("Heart of Gold", 1000, 500, 5, 10);

spaceShip1.getPosition();
spaceShip1.getFuel();
spaceShip1.getshieldStrength();
spaceShip1.move(20);
spaceShip1.getPosition();
spaceShip1.getFuel();
spaceShip1.move(100);
spaceShip1.refuel(500);
spaceShip1.getFuel();
spaceShip1.move(100);
spaceShip1.getPosition();
spaceShip1.getFuel();

console.log("");

class EnemySpaceShip extends SpaceShip {
    weaponPower;
    constructor(nazev, pozice, palivo, spotrebaPaliva, silaStitu, weaponPower) {
        super(nazev, pozice, palivo, spotrebaPaliva, silaStitu);
        this.weaponPower = weaponPower;
    }
    attack(target) {
        target.silaStitu = target.silaStitu - this.weaponPower;
        console.log("Zásah! Loď " + this.nazev + " vystřelila na " + target.nazev + ".");
    }
}

const enemyShip1 = new EnemySpaceShip("Star Destroyer", 800, 500, 8, 8, 4);

enemyShip1.attack(spaceShip1);
spaceShip1.getshieldStrength();
enemyShip1.attack(spaceShip1);
enemyShip1.attack(spaceShip1);
spaceShip1.getshieldStrength();
