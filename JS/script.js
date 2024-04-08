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
    getFuelConsumption() {
        if (this.nazev == spaceShip1.nazev) {
            document.getElementById("consumption").innerHTML = ("Consumption: " + this.spotrebaPaliva + " l/AU");
        }
        else {
            document.getElementById("enemyConsumption").innerHTML = ("Consumption: " + this.spotrebaPaliva + " l/AU");
        }
    }
    getPosition() {
        if (this.nazev == spaceShip1.nazev) {
            document.getElementById("position").innerHTML = ("Position: " + this.pozice + " AU");
        }
        else {
            document.getElementById("enemyPosition").innerHTML = ("Position: " + this.pozice + " AU");
        }
    }
    getFuel() {
        if (this.nazev == spaceShip1.nazev) {
            document.getElementById("fuel").innerHTML = ("Fuel: " + this.palivo + " l");
        }
        else {
            document.getElementById("enemyFuel").innerHTML = ("Fuel: " + this.palivo + " l");
        }
    }
    getshieldStrength() {
        if (this.nazev == spaceShip1.nazev) {
            if (this.silaStitu <= 0) {
                document.getElementById("enemyButtons").innerHTML = "<button>Refill fuel</button> <button>Move</button> <button>Attack</button>";
                document.getElementById("shipButtons").innerHTML = "<button>Refill fuel</button> <button>Move</button>";
                let element = document.getElementById("vesmirnaLod");
                element.style.color = "#DC143C";
                document.getElementById("hraciPole2").innerHTML = ("<h1>Spaceship <em>" + this.nazev + "</em> was destroyed. <em>" + enemyShip1.nazev + "</em> vyhrál!</h1>");
                alert("Spaceship was destroyed! Game over.");
                document.getElementById("shield").innerHTML = ("Shield strength: " + this.silaStitu);
                reloadButton();
            }
            else {
                document.getElementById("shield").innerHTML = ("Shield strength: " + this.silaStitu);
            }
        }
        else {
            if (this.silaStitu <= 0) {
                document.getElementById("enemyButtons").innerHTML = "<button>Refill fuel</button> <button>Move</button> <button>Attack</button>";
                document.getElementById("shipButtons").innerHTML = "<button>Refill fuel</button> <button>Move</button>";
                let element = document.getElementById("nepratelskaLod");
                element.style.color = "#DC143C";
                document.getElementById("hraciPole2").innerHTML = ("<h1>Spaceship <em>" + spaceShip1.nazev + "</em> won!</h1>");
                document.getElementById("enemyShield").innerHTML = ("Shield strength: " + this.silaStitu);
                document.getElementById("enemyConsumption").innerHTML = ("Consumption: " + this.spotrebaPaliva + " l/AU");
                document.getElementById("enemyFuel").innerHTML = ("Fuel: " + this.palivo + " l");
                document.getElementById("enemyWeaponPower").innerHTML = ("Weapon power: " + this.weaponPower);
                reloadButton();
            }
            else {
                document.getElementById("enemyShield").innerHTML = ("Shield strength: " + this.silaStitu);
            }
        }
    }
    refuel(amount) {
        var amount = Math.floor(prompt('Zadej množství doplňovaného paliva: '));
        if (this.nazev == spaceShip1.nazev && amount == 42 && this.nazev != "Milleium Falcon") {
            enemyShip1.nazev = "Květináč petúnií"
            alert("Zapnul jsi nepravděpodobnostní motor a tvůj soupeř se proměnil v květináč petúnií. Vyhrál jsi!");
            document.getElementById("enemyName").innerHTML = ("<em>" + enemyShip1.nazev + "</em>");
            enemyShip1.silaStitu = 0;
            enemyShip1.palivo = 0;
            enemyShip1.spotrebaPaliva = 0;
            enemyShip1.weaponPower = 0;
            enemyShip1.getshieldStrength();
        }
        else if (this.nazev == enemyShip1.nazev && amount == 66) {
            enemyShip1.weaponPower = 1000000000000000;
            this.nazev = "Death Star";
            spaceShip1.nazev = "Milleium Falcon";
            alert("'Under this directive, any and all Jedi leadership must be executed for treason against the Republic. Any soldier that does not comply with the order will also be executed for treason.'");
            document.getElementById("enemyName").innerHTML = ("<em>" + enemyShip1.nazev + "</em>");
            document.getElementById("name").innerHTML = ("<em>" + spaceShip1.nazev + "</em>");
            document.getElementById("enemyWeaponPower").innerHTML = ("Weapon power: Instant kill");
        }
        else {
            alert("Loď " + this.nazev + " byla doplněna palivem o " + amount + " jednotek.");
            this.palivo = this.palivo + amount;
            this.getFuel();
        }
    }
    move(distance) {
        var distance = Math.floor(prompt("Zadej vzdálenost o kterou se chceš posunout:"));
        if ((distance*this.spotrebaPaliva) <= this.palivo) {
            alert("Loď " + this.nazev + " se posunula o " + distance + " světelných let.");
            this.pozice = this.pozice + distance;
            this.palivo = this.palivo - (distance*this.spotrebaPaliva);
            this.getFuel();
            this.getPosition();
        }
        else {
            alert("Loď " + this.nazev + " nemá dostatek paliva na to, aby podnikla tento posun!");
        }
    }
}

const spaceShip1 = new SpaceShip("Heart of Gold", 1000, 600, 6, 10);

spaceShip1.getPosition();
spaceShip1.getFuel();
spaceShip1.getshieldStrength();
spaceShip1.getFuelConsumption();

document.getElementById("name").innerHTML = ("<em>" + spaceShip1.nazev + "</em>");

class EnemySpaceShip extends SpaceShip {
    weaponPower;
    constructor(nazev, pozice, palivo, spotrebaPaliva, silaStitu, weaponPower) {
        super(nazev, pozice, palivo, spotrebaPaliva, silaStitu);
        this.weaponPower = weaponPower;
    }
    getWeaponPower() {
        document.getElementById("enemyWeaponPower").innerHTML = ("Síla útoku: " + this.weaponPower);
    }
    attack(target) {
        target.silaStitu = target.silaStitu - this.weaponPower;
        alert("Zásah! Loď " + this.nazev + " vystřelila na " + target.nazev + ".");
        target.getshieldStrength();
    }
}

const enemyShip1 = new EnemySpaceShip("Star Destroyer", 800, 500, 8, 8, 4);

enemyShip1.getPosition();
enemyShip1.getFuel();
enemyShip1.getshieldStrength();
enemyShip1.getFuelConsumption();
enemyShip1.getWeaponPower();

document.getElementById("enemyName").innerHTML = ("<em>" + enemyShip1.nazev + "</em>");

var x = document.getElementById("reloadButton");
x.style.display = "none";

const hlasky = ["HEY, YOU CLICKED ON ME!","STOP IT!","WHY ARE YOU CLICKING ON ME!?!","YOU PERVERT, STOP TOUCHING ME!","ggg"];

let aggro = 0;

function reloadButton() {
    if (x.style.display === "none") {
        x.style.display = "block";
    }
    else {
        x.style.display = "none";
    }
}

function reload() {
    location.reload();
}

function jaJaAJenomJa() {
    aggro = aggro + 1;
    if (aggro >= 8) {
        document.getElementById("aggro").innerHTML = ("<h1>DON'T PLAY WITH ME, YOU MOTHERF#CKER!!!! YOU JUST GET BANNED!!!</h1> <h2>Muahahahhahahaha!</h2>");
    }
    else if (aggro == 7) {
        let appearing = document.getElementById('sipkaDolu');
        appearing.style.display = 'block';
        document.getElementById("sipkaDolu").innerHTML = "ONE MORE TIME YOU CLICK ON ME, AND YOU WILL GET BANNED!!!";
        setTimeout(() => {
            const disappearing = document.getElementById('sipkaDolu');
            disappearing.style.display = 'none';
        },4000);
    }
    else {
        let n = Math.floor(Math.random()*(5))+0;
        let appearing = document.getElementById('sipkaDolu');
        appearing.style.display = 'block';
        document.getElementById("sipkaDolu").innerHTML = hlasky[n];
        setTimeout(() => {
            const disappearing = document.getElementById('sipkaDolu');
            disappearing.style.display = 'none';
        },3000);
    }
}
