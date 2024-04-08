//<------------------------------JAVASCRIPT----------------------------------------->
//<------------------------------Hlavní stránka------------------------------------->
//<------------------------------Funkce a třídy------------------------------------->
class SpaceShip {
    nazev;
    palivo;
    spotrebaPaliva;
    silaStitu;
    constructor(nazev, palivo, spotrebaPaliva, silaStitu) {
        this.nazev = nazev;
        this.palivo = palivo;
        this.spotrebaPaliva = spotrebaPaliva;
        this.silaStitu = silaStitu;
    }
    getFuelConsumption() {
        if (this.nazev == spaceShip1.nazev) {
            document.getElementById("consumption").innerHTML = ("Consumption: " + this.spotrebaPaliva + " units/AU");
        }
        else {
            document.getElementById("enemyConsumption").innerHTML = ("Consumption: " + this.spotrebaPaliva + " units/AU");
        }
    }
    getFuel() {
        if (this.nazev == spaceShip1.nazev) {
            document.getElementById("fuel").innerHTML = ("Fuel: " + this.palivo + " units");
        }
        else {
            document.getElementById("enemyFuel").innerHTML = ("Fuel: " + this.palivo + " units");
        }
    }
    getshieldStrength() {
        if (this.nazev == spaceShip1.nazev) {
            if (this.silaStitu <= 0) {
                document.getElementById("enemyButtons").innerHTML = "<button>Refill fuel</button> <button>Attack (Space)</button>";
                document.getElementById("shipButtons").innerHTML = "<button>Refill fuel</button>";
                let element = document.getElementById("vesmirnaLod");
                element.style.color = "#DC143C";
                document.getElementById("tabulka").style.color = "chartreuse"
                document.getElementById("tabulka").innerHTML = ("<h1>Spaceship <em>" + this.nazev + "</em> was destroyed. <em>" + enemyShip1.nazev + "</em> won!</h1>");
                document.getElementById("shield").innerHTML = ("Shield strength: " + this.silaStitu);
                reloadButton();
            }
            else {
                document.getElementById("shield").innerHTML = ("Shield strength: " + this.silaStitu);
            }
        }
        else {
            if (this.silaStitu <= 0) {
                document.getElementById("enemyButtons").innerHTML = "<button>Refill fuel</button> <button>Attack (Space)</button>";
                document.getElementById("shipButtons").innerHTML = "<button>Refill fuel</button>";
                let element = document.getElementById("nepratelskaLod");
                element.style.color = "#DC143C";
                document.getElementById("tabulka").style.color = "chartreuse"
                document.getElementById("tabulka").innerHTML = ("<h1>Spaceship <em>Star Destroyer</em> has turned into the bowl of petunias. Spaceship <em>" + spaceShip1.nazev + "</em> won!</h1>");
                document.getElementById("enemyShield").innerHTML = ("Shield strength: " + this.silaStitu);
                document.getElementById("enemyConsumption").innerHTML = ("Consumption: " + this.spotrebaPaliva + " units/AU");
                document.getElementById("enemyFuel").innerHTML = ("Fuel: " + this.palivo + " units");
                document.getElementById("enemyWeaponPower").innerHTML = ("Weapon power: " + this.weaponPower);
                reloadButton();
            }
            else {
                document.getElementById("enemyShield").innerHTML = ("Shield strength: " + this.silaStitu);
            }
        }
    }
    refuel(amount) {
        var amount = Math.floor(prompt('Enter the amount of fuel to be added: '));
        if (this.nazev == spaceShip1.nazev && amount == 42 && this.nazev != "Milleium Falcon") {
            enemyShip1.nazev = "The bowl of petunias"
            alert42();
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
            alert66();
            document.getElementById("enemyName").innerHTML = ("<em>" + enemyShip1.nazev + "</em>");
            document.getElementById("name").innerHTML = ("<em>" + spaceShip1.nazev + "</em>");
            document.getElementById("enemyWeaponPower").innerHTML = ("Weapon power: Instant kill");
        }
        else {
            alertRefuel(amount, this.nazev);
            this.palivo = this.palivo + amount;
            this.getFuel();
        }
    }
}

function alertRefuel(amount, call) {
    refuelInterval = setInterval(() => {
        document.getElementById("messageBox").style.display = "block";
        document.getElementById("messageBox").innerHTML = ("<p>Spaceship <em>" + call + "</em> was refilled with " + amount + " units of fuel.</p>");
    },300);
    setTimeout(() => {
        clearInterval(refuelInterval);
        document.getElementById("messageBox").style.display = "none";
    },4000);
}

function alert42() {
    refuelInterval = setInterval(() => {
        document.getElementById("messageBox").style.display = "block";
        document.getElementById("messageBox").innerHTML = ("<p>You turned on the Infinite Improbability Engine and your opponent has turned into a bowl of petunias. You won!</p>");
    },300);
    setTimeout(() => {
        clearInterval(refuelInterval);
        document.getElementById("messageBox").style.display = "none";
    },6000);
}

function alert66(){
    refuelInterval = setInterval(() => {
        document.getElementById("messageBox").style.display = "block";
        document.getElementById("messageBox").innerHTML = ("<p> 'Under this directive, any and all Jedi leadership must be executed for treason against the Republic. Any soldier that does not comply with the order will also be executed for treason.' </p>");
    },300);
    setTimeout(() => {
        clearInterval(refuelInterval);
        document.getElementById("messageBox").style.display = "none";
    },10000);
}

function alertStrike(utocnik, obet) {
    refuelInterval = setInterval(() => {
        document.getElementById("messageBox").style.display = "block";
        document.getElementById("messageBox").innerHTML = ("<p>Strike! Spaceship " + utocnik + " shot " + obet + ".</p>");
    },300);
    setTimeout(() => {
        clearInterval(refuelInterval);
        document.getElementById("messageBox").style.display = "none";
    },4000);
}

function strike() {
    let barva = document.getElementById("shield");
    if (spaceShip1.silaStitu > 0) {
        myInterval = setInterval(() => {
            barva.style.color = 'red';
            setTimeout(() => {
                barva.style.color = 'yellow';
            },250)
        },500);
        setTimeout(() => {
            clearInterval(myInterval);
        },2000);
    }
    else {
        barva.style.color = '#DC143C';
    }
}

class EnemySpaceShip extends SpaceShip {
    weaponPower;
    constructor(nazev, palivo, spotrebaPaliva, silaStitu, weaponPower) {
        super(nazev, palivo, spotrebaPaliva, silaStitu);
        this.weaponPower = weaponPower;
    }
    getWeaponPower() {
        document.getElementById("enemyWeaponPower").innerHTML = ("Weapon power: " + this.weaponPower);
    }
    attack(target) {
        target.silaStitu = target.silaStitu - this.weaponPower;
        alertStrike(this.nazev, target.nazev);
        target.getshieldStrength();
        strike();
    }
}

//<------------------------------Konec funkcí a tříd-------------------------------->
//<------------------------------Vyvolávání----------------------------------------->

const spaceShip1 = new SpaceShip("Heart of Gold", 600, 6, 10);

spaceShip1.getFuel();
spaceShip1.getshieldStrength();
spaceShip1.getFuelConsumption();

document.getElementById("name").innerHTML = ("<em>" + spaceShip1.nazev + "</em>");

const enemyShip1 = new EnemySpaceShip("Star Destroyer", 500, 8, 8, 4);

enemyShip1.getFuel();
enemyShip1.getshieldStrength();
enemyShip1.getFuelConsumption();
enemyShip1.getWeaponPower();

document.getElementById("enemyName").innerHTML = ("<em>" + enemyShip1.nazev + "</em>");

//<------------------------------Konec vyvolávání----------------------------------->
//<------------------------------Konec hlavní stránky------------------------------->






//<------------------------------Easteregg se jménem-------------------------------->

var x = document.getElementById("reloadButton");
x.style.display = "none";

const hlasky = ["HEY, YOU CLICKED ON ME!","STOP IT!","WHY ARE YOU CLICKING ON ME!?!","YOU PERVERT, STOP TOUCHING ME!","DON'T TOUCH ME AGAIN, OR I WILL TOUCH YOUR MOM!"];

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
        document.getElementById("aggro").style.color = "yellow"
        document.getElementById("aggro").innerHTML = ("<h1>DON'T PLAY WITH ME, YOU MOTHERF#CKER!!!!</h1> <h2>Muahahahhahahaha!</h2>");
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
        },2500);
    }
}



//Přidej možnost, že když se to pokusíš reloadnout, tak ti to nespadne (key codes (https://www.toptal.com/developers/keycode/table) & if...) + zjisti, jestli jde zakomponovat i reload pomocí tlačítka, co je na webu (ať je blokneš úplně :))

//<-------------------------Konec eastereggu se jménem------------------------------>






//<--------------------------Canvas------------------------------------------------->

var mySpaceShip, enemySpaceShip;
var levaStena, pravaStena, horniStena, spodniStena;
var strelaPole = [];
var n = 0;
strelaPole[n] = ("strela" + n);
var strelaAngle = [];

function startGame() {
    myGameArea.start();
    mySpaceShip = new component(30, 30, "IMAGES/VesmirnaLodHodna.png", 120, 175, "image");
    enemySpaceShip = new component(30, 30, "IMAGES/VesmirnaLodZla.png", 580, 175, "image");
    levaStena = new component(100, 550, "red",-100, -100, "object");
    horniStena = new component(900, 100, "red", -100, -100, "object");
    pravaStena = new component(100, 550, "red", 720, -100, "object");
    spodniStena = new component(900, 100, "red", -100, 370, "object");
    strelaPole[n] = new component(5,5,"yellow", -150, -150, "object");
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 700;
        this.canvas.height = 350;
        this.context = this.canvas.getContext("2d");
        document.getElementById("spaceShipCanvas").insertBefore(this.canvas, document.getElementById("spaceShipCanvas").childNodes[0]);
        this.frameNo = 0;
        this.interval = setInterval(updateGameArea, 20);
        window.addEventListener('keydown', function (e) {
            e.preventDefault();
            myGameArea.keys = (myGameArea.keys || []);
            myGameArea.keys[e.keyCode] = (e.type == "keydown");
        })
        window.addEventListener('keyup', function (e) {
            myGameArea.keys[e.keyCode] = (e.type == "keydown");
        })
    },
    stop : function() {
        clearInterval(this.interval);
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function component(width, height, color, x, y, type) {
    this.type = type;
    if (type == "image") {
        this.image = new Image();
        this.image.src = color;
    }
    this.width = width;
    this.height = height;
    this.speed = 0;
    this.angle = 0;
    this.moveAngle = 0;
    this.x = x;
    this.y = y;
    this.weaponPower = enemyShip1.weaponPower;
    this.update = function() {
        ctx = myGameArea.context;
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        if (type == "image") {
            ctx.drawImage(this.image, this.width / -2, this.height / -2, this.width, this.height);
            ctx.restore();
        }
        else {
            ctx.fillStyle = color;
            ctx.fillRect(this.width / -2, this.height / -2, this.width, this.height);
            ctx.restore();
        }
    }
    this.crashWith = function(otherobj) {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var crash = true;
        if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
            crash = false;
        }
        return crash;
    }
    this.newPos = function() {
        this.angle += this.moveAngle * Math.PI / 180;
        this.x += this.speed * Math.sin(this.angle);
        this.y -= this.speed * Math.cos(this.angle);
        position(this);
    }
    this.shoot = function(shotShip) {
        if (checkCollisionWithMySpaceShip()) {
            enemyShip1.attack(shotShip);
        } 
    }
}

function checkCollisionWithMySpaceShip() {
    for (let i = 0; i <= n; i++) {
        let bullet = strelaPole[i];
        if (bullet.x < (mySpaceShip.x + mySpaceShip.width - 20) &&
            bullet.x + bullet.width > (mySpaceShip.x - 20) &&
            bullet.y < mySpaceShip.y + (mySpaceShip.height - 20) &&
            bullet.y + bullet.height > (mySpaceShip.y - 20)) {
                strelaPole.splice(i, 1); // Odstranění střely ze seznamu
                n--; // Snížení počtu střel v poli
                return true;
        }
    }
    return false;
}

function updateGameArea() {
        if (mySpaceShip.crashWith(horniStena) && enemySpaceShip.crashWith(horniStena)) {
            mySpaceShip.shoot(spaceShip1);
            enemySpaceShip.y += 3;
            mySpaceShip.y += 3;
            myGameArea.clear();
            mySpaceShip.moveAngle = 0;
            mySpaceShip.speed = 0;
            if (myGameArea.keys && myGameArea.keys [65]) {mySpaceShip.moveAngle = -2.5; }//a
            if (myGameArea.keys && myGameArea.keys [68]) {mySpaceShip.moveAngle = 2.5; }//d
            if (myGameArea.keys && myGameArea.keys [83]) {mySpaceShip.speed = -1.5; }//s
            if (myGameArea.keys && myGameArea.keys [87]) {mySpaceShip.speed = 2.5; }//w
            enemySpaceShip.moveAngle = 0;
            enemySpaceShip.speed = 0;
            if (myGameArea.keys && myGameArea.keys [37]) {enemySpaceShip.moveAngle = -2.5; }
            if (myGameArea.keys && myGameArea.keys [39]) {enemySpaceShip.moveAngle = 2.5 }
            if (myGameArea.keys && myGameArea.keys [40]) {enemySpaceShip.speed = -1; }
            if (myGameArea.keys && myGameArea.keys [38]) {enemySpaceShip.speed = 2; }
            mySpaceShip.newPos();
            enemySpaceShip.newPos();
            mySpaceShip.update();
            enemySpaceShip.update();
            for (let i = 0; i <= n; i++) {
                strelaPole[i].x += 5 * Math.sin(strelaAngle[i]);
                strelaPole[i].y -= 5 * Math.cos(strelaAngle[i]);
                strelaPole[i].update();
            }
        }
        else if (mySpaceShip.crashWith(spodniStena) && enemySpaceShip.crashWith(spodniStena)) {
            mySpaceShip.shoot(spaceShip1);
        enemySpaceShip.y -= 3;
        mySpaceShip.y -= 3;
        myGameArea.clear();
        mySpaceShip.moveAngle = 0;
        mySpaceShip.speed = 0;
        if (myGameArea.keys && myGameArea.keys [65]) {mySpaceShip.moveAngle = -2.5; }//a
        if (myGameArea.keys && myGameArea.keys [68]) {mySpaceShip.moveAngle = 2.5; }//d
        if (myGameArea.keys && myGameArea.keys [83]) {mySpaceShip.speed = -1.5; }//s
        if (myGameArea.keys && myGameArea.keys [87]) {mySpaceShip.speed = 2.5; }//w
        enemySpaceShip.moveAngle = 0;
        enemySpaceShip.speed = 0;
        if (myGameArea.keys && myGameArea.keys [37]) {enemySpaceShip.moveAngle = -2.5; }
        if (myGameArea.keys && myGameArea.keys [39]) {enemySpaceShip.moveAngle = 2.5 }
        if (myGameArea.keys && myGameArea.keys [40]) {enemySpaceShip.speed = -1; }
        if (myGameArea.keys && myGameArea.keys [38]) {enemySpaceShip.speed = 2; }
        mySpaceShip.newPos();
        enemySpaceShip.newPos();
        mySpaceShip.update();
        enemySpaceShip.update();
        for (let i = 0; i <= n; i++) {
            strelaPole[i].x += 5 * Math.sin(strelaAngle[i]);
            strelaPole[i].y -= 5 * Math.cos(strelaAngle[i]);
            strelaPole[i].update();
        }
    }
    else if (mySpaceShip.crashWith(horniStena) && enemySpaceShip.crashWith(spodniStena)) {
        mySpaceShip.shoot(spaceShip1);
        enemySpaceShip.y -= 3;
        mySpaceShip.y += 3;
        myGameArea.clear();
        mySpaceShip.moveAngle = 0;
        mySpaceShip.speed = 0;
        if (myGameArea.keys && myGameArea.keys [65]) {mySpaceShip.moveAngle = -2.5; }//a
        if (myGameArea.keys && myGameArea.keys [68]) {mySpaceShip.moveAngle = 2.5; }//d
        if (myGameArea.keys && myGameArea.keys [83]) {mySpaceShip.speed = -1.5; }//s
        if (myGameArea.keys && myGameArea.keys [87]) {mySpaceShip.speed = 2.5; }//w
        enemySpaceShip.moveAngle = 0;
        enemySpaceShip.speed = 0;
        if (myGameArea.keys && myGameArea.keys [37]) {enemySpaceShip.moveAngle = -2.5; }
        if (myGameArea.keys && myGameArea.keys [39]) {enemySpaceShip.moveAngle = 2.5 }
        if (myGameArea.keys && myGameArea.keys [40]) {enemySpaceShip.speed = -1; }
        if (myGameArea.keys && myGameArea.keys [38]) {enemySpaceShip.speed = 2; }
        mySpaceShip.newPos();
        enemySpaceShip.newPos();
        mySpaceShip.update();
        enemySpaceShip.update();
        for (let i = 0; i <= n; i++) {
            strelaPole[i].x += 5 * Math.sin(strelaAngle[i]);
            strelaPole[i].y -= 5 * Math.cos(strelaAngle[i]);
            strelaPole[i].update();
        }
    }
    else if (enemySpaceShip.crashWith(horniStena) && mySpaceShip.crashWith(spodniStena)) {
        mySpaceShip.shoot(spaceShip1);
        mySpaceShip.y -= 3;
        enemySpaceShip.y += 3;
        myGameArea.clear();
        mySpaceShip.moveAngle = 0;
        mySpaceShip.speed = 0;
        if (myGameArea.keys && myGameArea.keys [65]) {mySpaceShip.moveAngle = -2.5; }//a
        if (myGameArea.keys && myGameArea.keys [68]) {mySpaceShip.moveAngle = 2.5; }//d
        if (myGameArea.keys && myGameArea.keys [83]) {mySpaceShip.speed = -1.5; }//s
        if (myGameArea.keys && myGameArea.keys [87]) {mySpaceShip.speed = 2.5; }//w
        enemySpaceShip.moveAngle = 0;
        enemySpaceShip.speed = 0;
        if (myGameArea.keys && myGameArea.keys [37]) {enemySpaceShip.moveAngle = -2.5; }
        if (myGameArea.keys && myGameArea.keys [39]) {enemySpaceShip.moveAngle = 2.5 }
        if (myGameArea.keys && myGameArea.keys [40]) {enemySpaceShip.speed = -1; }
        if (myGameArea.keys && myGameArea.keys [38]) {enemySpaceShip.speed = 2; }
        mySpaceShip.newPos();
        enemySpaceShip.newPos();
        mySpaceShip.update();
        enemySpaceShip.update();
        for (let i = 0; i <= n; i++) {
            strelaPole[i].x += 5 * Math.sin(strelaAngle[i]);
            strelaPole[i].y -= 5 * Math.cos(strelaAngle[i]);
            strelaPole[i].update();
        }
    }
    else if (mySpaceShip.crashWith(spodniStena) && enemySpaceShip.crashWith(levaStena)) {
        mySpaceShip.shoot(spaceShip1);
        enemySpaceShip.x += 3;
        mySpaceShip.y -= 3;
        myGameArea.clear();
        mySpaceShip.moveAngle = 0;
        mySpaceShip.speed = 0;
        if (myGameArea.keys && myGameArea.keys [65]) {mySpaceShip.moveAngle = -2.5; }//a
        if (myGameArea.keys && myGameArea.keys [68]) {mySpaceShip.moveAngle = 2.5; }//d
        if (myGameArea.keys && myGameArea.keys [83]) {mySpaceShip.speed = -1.5; }//s
        if (myGameArea.keys && myGameArea.keys [87]) {mySpaceShip.speed = 2.5; }//w
        enemySpaceShip.moveAngle = 0;
        enemySpaceShip.speed = 0;
        if (myGameArea.keys && myGameArea.keys [37]) {enemySpaceShip.moveAngle = -2.5; }
        if (myGameArea.keys && myGameArea.keys [39]) {enemySpaceShip.moveAngle = 2.5 }
        if (myGameArea.keys && myGameArea.keys [40]) {enemySpaceShip.speed = -1; }
        if (myGameArea.keys && myGameArea.keys [38]) {enemySpaceShip.speed = 2; }
        mySpaceShip.newPos();
        enemySpaceShip.newPos();
        mySpaceShip.update();
        enemySpaceShip.update();
        for (let i = 0; i <= n; i++) {
            strelaPole[i].x += 5 * Math.sin(strelaAngle[i]);
            strelaPole[i].y -= 5 * Math.cos(strelaAngle[i]);
            strelaPole[i].update();
        }
    }
    else if (enemySpaceShip.crashWith(spodniStena) && mySpaceShip.crashWith(levaStena)) {
        mySpaceShip.shoot(spaceShip1);
        mySpaceShip.x += 3;
        enemySpaceShip.y -= 3;
        myGameArea.clear();
        mySpaceShip.moveAngle = 0;
        mySpaceShip.speed = 0;
        if (myGameArea.keys && myGameArea.keys [65]) {mySpaceShip.moveAngle = -2.5; }//a
        if (myGameArea.keys && myGameArea.keys [68]) {mySpaceShip.moveAngle = 2.5; }//d
        if (myGameArea.keys && myGameArea.keys [83]) {mySpaceShip.speed = -1.5; }//s
        if (myGameArea.keys && myGameArea.keys [87]) {mySpaceShip.speed = 2.5; }//w
        enemySpaceShip.moveAngle = 0;
        enemySpaceShip.speed = 0;
        if (myGameArea.keys && myGameArea.keys [37]) {enemySpaceShip.moveAngle = -2.5; }
        if (myGameArea.keys && myGameArea.keys [39]) {enemySpaceShip.moveAngle = 2.5 }
        if (myGameArea.keys && myGameArea.keys [40]) {enemySpaceShip.speed = -1; }
        if (myGameArea.keys && myGameArea.keys [38]) {enemySpaceShip.speed = 2; }
        mySpaceShip.newPos();
        enemySpaceShip.newPos();
        mySpaceShip.update();
        enemySpaceShip.update();
        for (let i = 0; i <= n; i++) {
            strelaPole[i].x += 5 * Math.sin(strelaAngle[i]);
            strelaPole[i].y -= 5 * Math.cos(strelaAngle[i]);
            strelaPole[i].update();
        }
    }
    else if (mySpaceShip.crashWith(spodniStena) && enemySpaceShip.crashWith(pravaStena)) {
        mySpaceShip.shoot(spaceShip1);
        enemySpaceShip.x -= 3;
        mySpaceShip.y -= 3;
        myGameArea.clear();
        mySpaceShip.moveAngle = 0;
        mySpaceShip.speed = 0;
        if (myGameArea.keys && myGameArea.keys [65]) {mySpaceShip.moveAngle = -2.5; }//a
        if (myGameArea.keys && myGameArea.keys [68]) {mySpaceShip.moveAngle = 2.5; }//d
        if (myGameArea.keys && myGameArea.keys [83]) {mySpaceShip.speed = -1.5; }//s
        if (myGameArea.keys && myGameArea.keys [87]) {mySpaceShip.speed = 2.5; }//w
        enemySpaceShip.moveAngle = 0;
        enemySpaceShip.speed = 0;
        if (myGameArea.keys && myGameArea.keys [37]) {enemySpaceShip.moveAngle = -2.5; }
        if (myGameArea.keys && myGameArea.keys [39]) {enemySpaceShip.moveAngle = 2.5 }
        if (myGameArea.keys && myGameArea.keys [40]) {enemySpaceShip.speed = -1; }
        if (myGameArea.keys && myGameArea.keys [38]) {enemySpaceShip.speed = 2; }
        mySpaceShip.newPos();
        enemySpaceShip.newPos();
        mySpaceShip.update();
        enemySpaceShip.update();
        for (let i = 0; i <= n; i++) {
            strelaPole[i].x += 5 * Math.sin(strelaAngle[i]);
            strelaPole[i].y -= 5 * Math.cos(strelaAngle[i]);
            strelaPole[i].update();
        }
    }
    else if (enemySpaceShip.crashWith(spodniStena) && mySpaceShip.crashWith(pravaStena)) {
        mySpaceShip.shoot(spaceShip1);
        mySpaceShip.x -= 3;
        enemySpaceShip.y -= 3;
        myGameArea.clear();
        mySpaceShip.moveAngle = 0;
        mySpaceShip.speed = 0;
        if (myGameArea.keys && myGameArea.keys [65]) {mySpaceShip.moveAngle = -2.5; }//a
        if (myGameArea.keys && myGameArea.keys [68]) {mySpaceShip.moveAngle = 2.5; }//d
        if (myGameArea.keys && myGameArea.keys [83]) {mySpaceShip.speed = -1.5; }//s
        if (myGameArea.keys && myGameArea.keys [87]) {mySpaceShip.speed = 2.5; }//w
        enemySpaceShip.moveAngle = 0;
        enemySpaceShip.speed = 0;
        if (myGameArea.keys && myGameArea.keys [37]) {enemySpaceShip.moveAngle = -2.5; }
        if (myGameArea.keys && myGameArea.keys [39]) {enemySpaceShip.moveAngle = 2.5 }
        if (myGameArea.keys && myGameArea.keys [40]) {enemySpaceShip.speed = -1; }
        if (myGameArea.keys && myGameArea.keys [38]) {enemySpaceShip.speed = 2; }
        mySpaceShip.newPos();
        enemySpaceShip.newPos();
        mySpaceShip.update();
        enemySpaceShip.update();
        for (let i = 0; i <= n; i++) {
            strelaPole[i].x += 5 * Math.sin(strelaAngle[i]);
            strelaPole[i].y -= 5 * Math.cos(strelaAngle[i]);
            strelaPole[i].update();
        }
    }
    else if (mySpaceShip.crashWith(horniStena) && enemySpaceShip.crashWith(pravaStena)) {
        mySpaceShip.shoot(spaceShip1);
        enemySpaceShip.x -= 3;
        mySpaceShip.y += 3;
        myGameArea.clear();
        mySpaceShip.moveAngle = 0;
        mySpaceShip.speed = 0;
        if (myGameArea.keys && myGameArea.keys [65]) {mySpaceShip.moveAngle = -2.5; }//a
        if (myGameArea.keys && myGameArea.keys [68]) {mySpaceShip.moveAngle = 2.5; }//d
        if (myGameArea.keys && myGameArea.keys [83]) {mySpaceShip.speed = -1.5; }//s
        if (myGameArea.keys && myGameArea.keys [87]) {mySpaceShip.speed = 2.5; }//w
        enemySpaceShip.moveAngle = 0;
        enemySpaceShip.speed = 0;
        if (myGameArea.keys && myGameArea.keys [37]) {enemySpaceShip.moveAngle = -2.5; }
        if (myGameArea.keys && myGameArea.keys [39]) {enemySpaceShip.moveAngle = 2.5 }
        if (myGameArea.keys && myGameArea.keys [40]) {enemySpaceShip.speed = -1; }
        if (myGameArea.keys && myGameArea.keys [38]) {enemySpaceShip.speed = 2; }
        mySpaceShip.newPos();
        enemySpaceShip.newPos();
        mySpaceShip.update();
        enemySpaceShip.update();
        for (let i = 0; i <= n; i++) {
            strelaPole[i].x += 5 * Math.sin(strelaAngle[i]);
            strelaPole[i].y -= 5 * Math.cos(strelaAngle[i]);
            strelaPole[i].update();
        }
    }
    else if (enemySpaceShip.crashWith(pravaStena) && mySpaceShip.crashWith(levaStena)) {
        mySpaceShip.shoot(spaceShip1);
        mySpaceShip.x += 3;
        enemySpaceShip.x -= 3;
        myGameArea.clear();
        mySpaceShip.moveAngle = 0;
        mySpaceShip.speed = 0;
        if (myGameArea.keys && myGameArea.keys [65]) {mySpaceShip.moveAngle = -2.5; }//a
        if (myGameArea.keys && myGameArea.keys [68]) {mySpaceShip.moveAngle = 2.5; }//d
        if (myGameArea.keys && myGameArea.keys [83]) {mySpaceShip.speed = -1.5; }//s
        if (myGameArea.keys && myGameArea.keys [87]) {mySpaceShip.speed = 2.5; }//w
        enemySpaceShip.moveAngle = 0;
        enemySpaceShip.speed = 0;
        if (myGameArea.keys && myGameArea.keys [37]) {enemySpaceShip.moveAngle = -2.5; }
        if (myGameArea.keys && myGameArea.keys [39]) {enemySpaceShip.moveAngle = 2.5 }
        if (myGameArea.keys && myGameArea.keys [40]) {enemySpaceShip.speed = -1; }
        if (myGameArea.keys && myGameArea.keys [38]) {enemySpaceShip.speed = 2; }
        mySpaceShip.newPos();
        enemySpaceShip.newPos();
        mySpaceShip.update();
        enemySpaceShip.update();
        for (let i = 0; i <= n; i++) {
            strelaPole[i].x += 5 * Math.sin(strelaAngle[i]);
            strelaPole[i].y -= 5 * Math.cos(strelaAngle[i]);
            strelaPole[i].update();
        }
    }
    else if (mySpaceShip.crashWith(pravaStena) && enemySpaceShip.crashWith(levaStena)) {
        mySpaceShip.shoot(spaceShip1);
        enemySpaceShip.x += 3;
        mySpaceShip.x -= 3;
        myGameArea.clear();
        mySpaceShip.moveAngle = 0;
        mySpaceShip.speed = 0;
        if (myGameArea.keys && myGameArea.keys [65]) {mySpaceShip.moveAngle = -2.5; }//a
        if (myGameArea.keys && myGameArea.keys [68]) {mySpaceShip.moveAngle = 2.5; }//d
        if (myGameArea.keys && myGameArea.keys [83]) {mySpaceShip.speed = -1.5; }//s
        if (myGameArea.keys && myGameArea.keys [87]) {mySpaceShip.speed = 2.5; }//w
        enemySpaceShip.moveAngle = 0;
        enemySpaceShip.speed = 0;
        if (myGameArea.keys && myGameArea.keys [37]) {enemySpaceShip.moveAngle = -2.5; }
        if (myGameArea.keys && myGameArea.keys [39]) {enemySpaceShip.moveAngle = 2.5 }
        if (myGameArea.keys && myGameArea.keys [40]) {enemySpaceShip.speed = -1; }
        if (myGameArea.keys && myGameArea.keys [38]) {enemySpaceShip.speed = 2; }
        mySpaceShip.newPos();
        enemySpaceShip.newPos();
        mySpaceShip.update();
        enemySpaceShip.update();
        for (let i = 0; i <= n; i++) {
            strelaPole[i].x += 5 * Math.sin(strelaAngle[i]);
            strelaPole[i].y -= 5 * Math.cos(strelaAngle[i]);
            strelaPole[i].update();
        }
    }
    else if (enemySpaceShip.crashWith(horniStena) && mySpaceShip.crashWith(pravaStena)) {
        mySpaceShip.shoot(spaceShip1);
        mySpaceShip.x -= 3;
        enemySpaceShip.y += 3;
        myGameArea.clear();
        mySpaceShip.moveAngle = 0;
        mySpaceShip.speed = 0;
        if (myGameArea.keys && myGameArea.keys [65]) {mySpaceShip.moveAngle = -2.5; }//a
        if (myGameArea.keys && myGameArea.keys [68]) {mySpaceShip.moveAngle = 2.5; }//d
        if (myGameArea.keys && myGameArea.keys [83]) {mySpaceShip.speed = -1.5; }//s
        if (myGameArea.keys && myGameArea.keys [87]) {mySpaceShip.speed = 2.5; }//w
        enemySpaceShip.moveAngle = 0;
        enemySpaceShip.speed = 0;
        if (myGameArea.keys && myGameArea.keys [37]) {enemySpaceShip.moveAngle = -2.5; }
        if (myGameArea.keys && myGameArea.keys [39]) {enemySpaceShip.moveAngle = 2.5 }
        if (myGameArea.keys && myGameArea.keys [40]) {enemySpaceShip.speed = -1; }
        if (myGameArea.keys && myGameArea.keys [38]) {enemySpaceShip.speed = 2; }
        mySpaceShip.newPos();
        enemySpaceShip.newPos();
        mySpaceShip.update();
        enemySpaceShip.update();
        for (let i = 0; i <= n; i++) {
            strelaPole[i].x += 5 * Math.sin(strelaAngle[i]);
            strelaPole[i].y -= 5 * Math.cos(strelaAngle[i]);
            strelaPole[i].update();
        }
    }
    else if (mySpaceShip.crashWith(pravaStena) && enemySpaceShip.crashWith(pravaStena)) {
        mySpaceShip.shoot(spaceShip1);
        enemySpaceShip.x -= 3;
        mySpaceShip.x -= 3;
        myGameArea.clear();
        mySpaceShip.moveAngle = 0;
        mySpaceShip.speed = 0;
        if (myGameArea.keys && myGameArea.keys [65]) {mySpaceShip.moveAngle = -2.5; }//a
        if (myGameArea.keys && myGameArea.keys [68]) {mySpaceShip.moveAngle = 2.5; }//d
        if (myGameArea.keys && myGameArea.keys [83]) {mySpaceShip.speed = -1.5; }//s
        if (myGameArea.keys && myGameArea.keys [87]) {mySpaceShip.speed = 2.5; }//w
        enemySpaceShip.moveAngle = 0;
        enemySpaceShip.speed = 0;
        if (myGameArea.keys && myGameArea.keys [37]) {enemySpaceShip.moveAngle = -2.5; }
        if (myGameArea.keys && myGameArea.keys [39]) {enemySpaceShip.moveAngle = 2.5 }
        if (myGameArea.keys && myGameArea.keys [40]) {enemySpaceShip.speed = -1; }
        if (myGameArea.keys && myGameArea.keys [38]) {enemySpaceShip.speed = 2; }
        mySpaceShip.newPos();
        enemySpaceShip.newPos();
        mySpaceShip.update();
        enemySpaceShip.update();
        for (let i = 0; i <= n; i++) {
            strelaPole[i].x += 5 * Math.sin(strelaAngle[i]);
            strelaPole[i].y -= 5 * Math.cos(strelaAngle[i]);
            strelaPole[i].update();
        }
    }
    else if (mySpaceShip.crashWith(horniStena) && enemySpaceShip.crashWith(levaStena)) {
        mySpaceShip.shoot(spaceShip1);
        enemySpaceShip.x += 3;
        mySpaceShip.y += 3;
        myGameArea.clear();
        mySpaceShip.moveAngle = 0;
        mySpaceShip.speed = 0;
        if (myGameArea.keys && myGameArea.keys [65]) {mySpaceShip.moveAngle = -2.5; }//a
        if (myGameArea.keys && myGameArea.keys [68]) {mySpaceShip.moveAngle = 2.5; }//d
        if (myGameArea.keys && myGameArea.keys [83]) {mySpaceShip.speed = -1.5; }//s
        if (myGameArea.keys && myGameArea.keys [87]) {mySpaceShip.speed = 2.5; }//w
        enemySpaceShip.moveAngle = 0;
        enemySpaceShip.speed = 0;
        if (myGameArea.keys && myGameArea.keys [37]) {enemySpaceShip.moveAngle = -2.5; }
        if (myGameArea.keys && myGameArea.keys [39]) {enemySpaceShip.moveAngle = 2.5 }
        if (myGameArea.keys && myGameArea.keys [40]) {enemySpaceShip.speed = -1; }
        if (myGameArea.keys && myGameArea.keys [38]) {enemySpaceShip.speed = 2; }
        mySpaceShip.newPos();
        enemySpaceShip.newPos();
        mySpaceShip.update();
        enemySpaceShip.update();
        for (let i = 0; i <= n; i++) {
            strelaPole[i].x += 5 * Math.sin(strelaAngle[i]);
            strelaPole[i].y -= 5 * Math.cos(strelaAngle[i]);
            strelaPole[i].update();
        }
    }
    else if (enemySpaceShip.crashWith(horniStena) && mySpaceShip.crashWith(levaStena)) {
        mySpaceShip.shoot(spaceShip1);
        mySpaceShip.x += 3;
        enemySpaceShip.y += 3;
        myGameArea.clear();
        mySpaceShip.moveAngle = 0;
        mySpaceShip.speed = 0;
        if (myGameArea.keys && myGameArea.keys [65]) {mySpaceShip.moveAngle = -2.5; }//a
        if (myGameArea.keys && myGameArea.keys [68]) {mySpaceShip.moveAngle = 2.5; }//d
        if (myGameArea.keys && myGameArea.keys [83]) {mySpaceShip.speed = -1.5; }//s
        if (myGameArea.keys && myGameArea.keys [87]) {mySpaceShip.speed = 2.5; }//w
        enemySpaceShip.moveAngle = 0;
        enemySpaceShip.speed = 0;
        if (myGameArea.keys && myGameArea.keys [37]) {enemySpaceShip.moveAngle = -2.5; }
        if (myGameArea.keys && myGameArea.keys [39]) {enemySpaceShip.moveAngle = 2.5 }
        if (myGameArea.keys && myGameArea.keys [40]) {enemySpaceShip.speed = -1; }
        if (myGameArea.keys && myGameArea.keys [38]) {enemySpaceShip.speed = 2; }
        mySpaceShip.newPos();
        enemySpaceShip.newPos();
        mySpaceShip.update();
        enemySpaceShip.update();
        for (let i = 0; i <= n; i++) {
            strelaPole[i].x += 5 * Math.sin(strelaAngle[i]);
            strelaPole[i].y -= 5 * Math.cos(strelaAngle[i]);
            strelaPole[i].update();
        }
    }
    else if (mySpaceShip.crashWith(levaStena) && enemySpaceShip.crashWith(levaStena)) {
        mySpaceShip.shoot(spaceShip1);
        enemySpaceShip.x += 3;
        mySpaceShip.x += 3;
        myGameArea.clear();
        mySpaceShip.moveAngle = 0;
        mySpaceShip.speed = 0;
        if (myGameArea.keys && myGameArea.keys [65]) {mySpaceShip.moveAngle = -2.5; }//a
        if (myGameArea.keys && myGameArea.keys [68]) {mySpaceShip.moveAngle = 2.5; }//d
        if (myGameArea.keys && myGameArea.keys [83]) {mySpaceShip.speed = -1.5; }//s
        if (myGameArea.keys && myGameArea.keys [87]) {mySpaceShip.speed = 2.5; }//w
        enemySpaceShip.moveAngle = 0;
        enemySpaceShip.speed = 0;
        if (myGameArea.keys && myGameArea.keys [37]) {enemySpaceShip.moveAngle = -2.5; }
        if (myGameArea.keys && myGameArea.keys [39]) {enemySpaceShip.moveAngle = 2.5 }
        if (myGameArea.keys && myGameArea.keys [40]) {enemySpaceShip.speed = -1; }
        if (myGameArea.keys && myGameArea.keys [38]) {enemySpaceShip.speed = 2; }
        mySpaceShip.newPos();
        enemySpaceShip.newPos();
        mySpaceShip.update();
        enemySpaceShip.update();
        for (let i = 0; i <= n; i++) {
            strelaPole[i].x += 5 * Math.sin(strelaAngle[i]);
            strelaPole[i].y -= 5 * Math.cos(strelaAngle[i]);
            strelaPole[i].update();
        }
    }
    else if (mySpaceShip.crashWith(horniStena) && mySpaceShip.crashWith(levaStena) && enemySpaceShip.crashWith(horniStena) && enemySpaceShip.crashWith(levaStena)) {
        mySpaceShip.shoot(spaceShip1);
        mySpaceShip.x += 3;
        mySpaceShip.y += 3;
        myGameArea.clear();
        mySpaceShip.moveAngle = 0;
        mySpaceShip.speed = 0;
        if (myGameArea.keys && myGameArea.keys [65]) {mySpaceShip.moveAngle = -2.5; }//a
        if (myGameArea.keys && myGameArea.keys [68]) {mySpaceShip.moveAngle = 2.5; }//d
        if (myGameArea.keys && myGameArea.keys [83]) {mySpaceShip.speed = -1.5; }//s
        if (myGameArea.keys && myGameArea.keys [87]) {mySpaceShip.speed = 2.5; }//w
        enemySpaceShip.moveAngle = 0;
        enemySpaceShip.speed = 0;
        if (myGameArea.keys && myGameArea.keys [37]) {enemySpaceShip.moveAngle = -2.5; }
        if (myGameArea.keys && myGameArea.keys [39]) {enemySpaceShip.moveAngle = 2.5 }
        if (myGameArea.keys && myGameArea.keys [40]) {enemySpaceShip.speed = -1; }
        if (myGameArea.keys && myGameArea.keys [38]) {enemySpaceShip.speed = 2; }
        mySpaceShip.newPos();
        enemySpaceShip.newPos();
        mySpaceShip.update();
        enemySpaceShip.update();
        for (let i = 0; i <= n; i++) {
            strelaPole[i].x += 5 * Math.sin(strelaAngle[i]);
            strelaPole[i].y -= 5 * Math.cos(strelaAngle[i]);
            strelaPole[i].update();
        }
    }
    else if (mySpaceShip.crashWith(horniStena) && mySpaceShip.crashWith(levaStena) && enemySpaceShip.crashWith(horniStena)) {
        mySpaceShip.shoot(spaceShip1);
        mySpaceShip.x += 3;
        mySpaceShip.y += 3;
        myGameArea.clear();
        mySpaceShip.moveAngle = 0;
        mySpaceShip.speed = 0;
        if (myGameArea.keys && myGameArea.keys [65]) {mySpaceShip.moveAngle = -2.5; }//a
        if (myGameArea.keys && myGameArea.keys [68]) {mySpaceShip.moveAngle = 2.5; }//d
        if (myGameArea.keys && myGameArea.keys [83]) {mySpaceShip.speed = -1.5; }//s
        if (myGameArea.keys && myGameArea.keys [87]) {mySpaceShip.speed = 2.5; }//w
        enemySpaceShip.moveAngle = 0;
        enemySpaceShip.speed = 0;
        if (myGameArea.keys && myGameArea.keys [37]) {enemySpaceShip.moveAngle = -2.5; }
        if (myGameArea.keys && myGameArea.keys [39]) {enemySpaceShip.moveAngle = 2.5 }
        if (myGameArea.keys && myGameArea.keys [40]) {enemySpaceShip.speed = -1; }
        if (myGameArea.keys && myGameArea.keys [38]) {enemySpaceShip.speed = 2; }
        mySpaceShip.newPos();
        enemySpaceShip.newPos();
        mySpaceShip.update();
        enemySpaceShip.update();
        for (let i = 0; i <= n; i++) {
            strelaPole[i].x += 5 * Math.sin(strelaAngle[i]);
            strelaPole[i].y -= 5 * Math.cos(strelaAngle[i]);
            strelaPole[i].update();
        }
    }
    else if (mySpaceShip.crashWith(horniStena) && mySpaceShip.crashWith(levaStena) && enemySpaceShip.crashWith(levaStena)) {
        mySpaceShip.shoot(spaceShip1);
        mySpaceShip.x += 3;
        mySpaceShip.y += 3;
        myGameArea.clear();
        mySpaceShip.moveAngle = 0;
        mySpaceShip.speed = 0;
        if (myGameArea.keys && myGameArea.keys [65]) {mySpaceShip.moveAngle = -2.5; }//a
        if (myGameArea.keys && myGameArea.keys [68]) {mySpaceShip.moveAngle = 2.5; }//d
        if (myGameArea.keys && myGameArea.keys [83]) {mySpaceShip.speed = -1.5; }//s
        if (myGameArea.keys && myGameArea.keys [87]) {mySpaceShip.speed = 2.5; }//w
        enemySpaceShip.moveAngle = 0;
        enemySpaceShip.speed = 0;
        if (myGameArea.keys && myGameArea.keys [37]) {enemySpaceShip.moveAngle = -2.5; }
        if (myGameArea.keys && myGameArea.keys [39]) {enemySpaceShip.moveAngle = 2.5 }
        if (myGameArea.keys && myGameArea.keys [40]) {enemySpaceShip.speed = -1; }
        if (myGameArea.keys && myGameArea.keys [38]) {enemySpaceShip.speed = 2; }
        mySpaceShip.newPos();
        enemySpaceShip.newPos();
        mySpaceShip.update();
        enemySpaceShip.update();
        for (let i = 0; i <= n; i++) {
            strelaPole[i].x += 5 * Math.sin(strelaAngle[i]);
            strelaPole[i].y -= 5 * Math.cos(strelaAngle[i]);
            strelaPole[i].update();
        }
    }
    else if (mySpaceShip.crashWith(horniStena) && enemySpaceShip.crashWith(horniStena) && enemySpaceShip.crashWith(levaStena)) {
        mySpaceShip.shoot(spaceShip1);
        mySpaceShip.y += 3;
        myGameArea.clear();
        mySpaceShip.moveAngle = 0;
        mySpaceShip.speed = 0;
        if (myGameArea.keys && myGameArea.keys [65]) {mySpaceShip.moveAngle = -2.5; }//a
        if (myGameArea.keys && myGameArea.keys [68]) {mySpaceShip.moveAngle = 2.5; }//d
        if (myGameArea.keys && myGameArea.keys [83]) {mySpaceShip.speed = -1.5; }//s
        if (myGameArea.keys && myGameArea.keys [87]) {mySpaceShip.speed = 2.5; }//w
        enemySpaceShip.moveAngle = 0;
        enemySpaceShip.speed = 0;
        if (myGameArea.keys && myGameArea.keys [37]) {enemySpaceShip.moveAngle = -2.5; }
        if (myGameArea.keys && myGameArea.keys [39]) {enemySpaceShip.moveAngle = 2.5 }
        if (myGameArea.keys && myGameArea.keys [40]) {enemySpaceShip.speed = -1; }
        if (myGameArea.keys && myGameArea.keys [38]) {enemySpaceShip.speed = 2; }
        mySpaceShip.newPos();
        enemySpaceShip.newPos();
        mySpaceShip.update();
        enemySpaceShip.update();
        for (let i = 0; i <= n; i++) {
            strelaPole[i].x += 5 * Math.sin(strelaAngle[i]);
            strelaPole[i].y -= 5 * Math.cos(strelaAngle[i]);
            strelaPole[i].update();
        }
    }
    else if (mySpaceShip.crashWith(levaStena) && enemySpaceShip.crashWith(horniStena) && enemySpaceShip.crashWith(levaStena)) {
        mySpaceShip.shoot(spaceShip1);
        mySpaceShip.x += 3;
        myGameArea.clear();
        mySpaceShip.moveAngle = 0;
        mySpaceShip.speed = 0;
        if (myGameArea.keys && myGameArea.keys [65]) {mySpaceShip.moveAngle = -2.5; }//a
        if (myGameArea.keys && myGameArea.keys [68]) {mySpaceShip.moveAngle = 2.5; }//d
        if (myGameArea.keys && myGameArea.keys [83]) {mySpaceShip.speed = -1.5; }//s
        if (myGameArea.keys && myGameArea.keys [87]) {mySpaceShip.speed = 2.5; }//w
        enemySpaceShip.moveAngle = 0;
        enemySpaceShip.speed = 0;
        if (myGameArea.keys && myGameArea.keys [37]) {enemySpaceShip.moveAngle = -2.5; }
        if (myGameArea.keys && myGameArea.keys [39]) {enemySpaceShip.moveAngle = 2.5 }
        if (myGameArea.keys && myGameArea.keys [40]) {enemySpaceShip.speed = -1; }
        if (myGameArea.keys && myGameArea.keys [38]) {enemySpaceShip.speed = 2; }
        mySpaceShip.newPos();
        enemySpaceShip.newPos();
        mySpaceShip.update();
        enemySpaceShip.update();
        for (let i = 0; i <= n; i++) {
            strelaPole[i].x += 5 * Math.sin(strelaAngle[i]);
            strelaPole[i].y -= 5 * Math.cos(strelaAngle[i]);
            strelaPole[i].update();
        }
    }
    else if (mySpaceShip.crashWith(horniStena) && mySpaceShip.crashWith(levaStena)) {
        mySpaceShip.shoot(spaceShip1);
        mySpaceShip.x += 3;
        mySpaceShip.y += 3;
        myGameArea.clear();
        mySpaceShip.moveAngle = 0;
        mySpaceShip.speed = 0;
        if (myGameArea.keys && myGameArea.keys [65]) {mySpaceShip.moveAngle = -2.5; }//a
        if (myGameArea.keys && myGameArea.keys [68]) {mySpaceShip.moveAngle = 2.5; }//d
        if (myGameArea.keys && myGameArea.keys [83]) {mySpaceShip.speed = -1.5; }//s
        if (myGameArea.keys && myGameArea.keys [87]) {mySpaceShip.speed = 2.5; }//w
        enemySpaceShip.moveAngle = 0;
        enemySpaceShip.speed = 0;
        if (myGameArea.keys && myGameArea.keys [37]) {enemySpaceShip.moveAngle = -2.5; }
        if (myGameArea.keys && myGameArea.keys [39]) {enemySpaceShip.moveAngle = 2.5 }
        if (myGameArea.keys && myGameArea.keys [40]) {enemySpaceShip.speed = -1; }
        if (myGameArea.keys && myGameArea.keys [38]) {enemySpaceShip.speed = 2; }
        mySpaceShip.newPos();
        enemySpaceShip.newPos();
        mySpaceShip.update();
        enemySpaceShip.update();
        for (let i = 0; i <= n; i++) {
            strelaPole[i].x += 5 * Math.sin(strelaAngle[i]);
            strelaPole[i].y -= 5 * Math.cos(strelaAngle[i]);
            strelaPole[i].update();
        }
    }
    else if (mySpaceShip.crashWith(horniStena)) {
        mySpaceShip.shoot(spaceShip1);
        mySpaceShip.y += 3;
        myGameArea.clear();
        mySpaceShip.moveAngle = 0;
        mySpaceShip.speed = 0;
        if (myGameArea.keys && myGameArea.keys [65]) {mySpaceShip.moveAngle = -2.5; }//a
        if (myGameArea.keys && myGameArea.keys [68]) {mySpaceShip.moveAngle = 2.5; }//d
        if (myGameArea.keys && myGameArea.keys [83]) {mySpaceShip.speed = -1.5; }//s
        if (myGameArea.keys && myGameArea.keys [87]) {mySpaceShip.speed = 2.5; }//w
        enemySpaceShip.moveAngle = 0;
        enemySpaceShip.speed = 0;
        if (myGameArea.keys && myGameArea.keys [37]) {enemySpaceShip.moveAngle = -2.5; }
        if (myGameArea.keys && myGameArea.keys [39]) {enemySpaceShip.moveAngle = 2.5 }
        if (myGameArea.keys && myGameArea.keys [40]) {enemySpaceShip.speed = -1; }
        if (myGameArea.keys && myGameArea.keys [38]) {enemySpaceShip.speed = 2; }
        mySpaceShip.newPos();
        enemySpaceShip.newPos();
        mySpaceShip.update();
        enemySpaceShip.update();
        for (let i = 0; i <= n; i++) {
            strelaPole[i].x += 5 * Math.sin(strelaAngle[i]);
            strelaPole[i].y -= 5 * Math.cos(strelaAngle[i]);
            strelaPole[i].update();
        }
    }
    else if (enemySpaceShip.crashWith(horniStena)) {
        mySpaceShip.shoot(spaceShip1);
        enemySpaceShip.y += 3;
        myGameArea.clear();
        mySpaceShip.moveAngle = 0;
        mySpaceShip.speed = 0;
        if (myGameArea.keys && myGameArea.keys [65]) {mySpaceShip.moveAngle = -2.5; }//a
        if (myGameArea.keys && myGameArea.keys [68]) {mySpaceShip.moveAngle = 2.5; }//d
        if (myGameArea.keys && myGameArea.keys [83]) {mySpaceShip.speed = -1.5; }//s
        if (myGameArea.keys && myGameArea.keys [87]) {mySpaceShip.speed = 2.5; }//w
        enemySpaceShip.moveAngle = 0;
        enemySpaceShip.speed = 0;
        if (myGameArea.keys && myGameArea.keys [37]) {enemySpaceShip.moveAngle = -2.5; }
        if (myGameArea.keys && myGameArea.keys [39]) {enemySpaceShip.moveAngle = 2.5 }
        if (myGameArea.keys && myGameArea.keys [40]) {enemySpaceShip.speed = -1; }
        if (myGameArea.keys && myGameArea.keys [38]) {enemySpaceShip.speed = 2; }
        mySpaceShip.newPos();
        enemySpaceShip.newPos();
        mySpaceShip.update();
        enemySpaceShip.update();
        for (let i = 0; i <= n; i++) {
            strelaPole[i].x += 5 * Math.sin(strelaAngle[i]);
            strelaPole[i].y -= 5 * Math.cos(strelaAngle[i]);
            strelaPole[i].update();
        }
    }
    else if (mySpaceShip.crashWith(spodniStena)) {
        mySpaceShip.shoot(spaceShip1);
        mySpaceShip.y -= 3;
        myGameArea.clear();
        mySpaceShip.moveAngle = 0;
        mySpaceShip.speed = 0;
        if (myGameArea.keys && myGameArea.keys [65]) {mySpaceShip.moveAngle = -2.5; }//a
        if (myGameArea.keys && myGameArea.keys [68]) {mySpaceShip.moveAngle = 2.5; }//d
        if (myGameArea.keys && myGameArea.keys [83]) {mySpaceShip.speed = -1.5; }//s
        if (myGameArea.keys && myGameArea.keys [87]) {mySpaceShip.speed = 2.5; }//w
        enemySpaceShip.moveAngle = 0;
        enemySpaceShip.speed = 0;
        if (myGameArea.keys && myGameArea.keys [37]) {enemySpaceShip.moveAngle = -2.5; }
        if (myGameArea.keys && myGameArea.keys [39]) {enemySpaceShip.moveAngle = 2.5 }
        if (myGameArea.keys && myGameArea.keys [40]) {enemySpaceShip.speed = -1; }
        if (myGameArea.keys && myGameArea.keys [38]) {enemySpaceShip.speed = 2; }
        mySpaceShip.newPos();
        enemySpaceShip.newPos();
        mySpaceShip.update();
        enemySpaceShip.update();
        for (let i = 0; i <= n; i++) {
            strelaPole[i].x += 5 * Math.sin(strelaAngle[i]);
            strelaPole[i].y -= 5 * Math.cos(strelaAngle[i]);
            strelaPole[i].update();
        }
    }
    else if (enemySpaceShip.crashWith(spodniStena)) {
        mySpaceShip.shoot(spaceShip1);
        enemySpaceShip.y -= 3;
        myGameArea.clear();
        mySpaceShip.moveAngle = 0;
        mySpaceShip.speed = 0;
        if (myGameArea.keys && myGameArea.keys [65]) {mySpaceShip.moveAngle = -2.5; }//a
        if (myGameArea.keys && myGameArea.keys [68]) {mySpaceShip.moveAngle = 2.5; }//d
        if (myGameArea.keys && myGameArea.keys [83]) {mySpaceShip.speed = -1.5; }//s
        if (myGameArea.keys && myGameArea.keys [87]) {mySpaceShip.speed = 2.5; }//w
        enemySpaceShip.moveAngle = 0;
        enemySpaceShip.speed = 0;
        if (myGameArea.keys && myGameArea.keys [37]) {enemySpaceShip.moveAngle = -2.5; }
        if (myGameArea.keys && myGameArea.keys [39]) {enemySpaceShip.moveAngle = 2.5 }
        if (myGameArea.keys && myGameArea.keys [40]) {enemySpaceShip.speed = -1; }
        if (myGameArea.keys && myGameArea.keys [38]) {enemySpaceShip.speed = 2; }
        mySpaceShip.newPos();
        enemySpaceShip.newPos();
        mySpaceShip.update();
        enemySpaceShip.update();
        for (let i = 0; i <= n; i++) {
            strelaPole[i].x += 5 * Math.sin(strelaAngle[i]);
            strelaPole[i].y -= 5 * Math.cos(strelaAngle[i]);
            strelaPole[i].update();
        }
    }
    else if (mySpaceShip.crashWith(pravaStena)) {
        mySpaceShip.shoot(spaceShip1);
        mySpaceShip.x -= 3;
        myGameArea.clear();
        mySpaceShip.moveAngle = 0;
        mySpaceShip.speed = 0;
        if (myGameArea.keys && myGameArea.keys [65]) {mySpaceShip.moveAngle = -2.5; }//a
        if (myGameArea.keys && myGameArea.keys [68]) {mySpaceShip.moveAngle = 2.5; }//d
        if (myGameArea.keys && myGameArea.keys [83]) {mySpaceShip.speed = -1.5; }//s
        if (myGameArea.keys && myGameArea.keys [87]) {mySpaceShip.speed = 2.5; }//w
        enemySpaceShip.moveAngle = 0;
        enemySpaceShip.speed = 0;
        if (myGameArea.keys && myGameArea.keys [37]) {enemySpaceShip.moveAngle = -2.5; }
        if (myGameArea.keys && myGameArea.keys [39]) {enemySpaceShip.moveAngle = 2.5 }
        if (myGameArea.keys && myGameArea.keys [40]) {enemySpaceShip.speed = -1; }
        if (myGameArea.keys && myGameArea.keys [38]) {enemySpaceShip.speed = 2; }
        mySpaceShip.newPos();
        enemySpaceShip.newPos();
        mySpaceShip.update();
        enemySpaceShip.update();
        for (let i = 0; i <= n; i++) {
            strelaPole[i].x += 5 * Math.sin(strelaAngle[i]);
            strelaPole[i].y -= 5 * Math.cos(strelaAngle[i]);
            strelaPole[i].update();
        }
    }
    else if (enemySpaceShip.crashWith(pravaStena)) {
        mySpaceShip.shoot(spaceShip1);
        enemySpaceShip.x -= 3;
        myGameArea.clear();
        mySpaceShip.moveAngle = 0;
        mySpaceShip.speed = 0;
        if (myGameArea.keys && myGameArea.keys [65]) {mySpaceShip.moveAngle = -2.5; }//a
        if (myGameArea.keys && myGameArea.keys [68]) {mySpaceShip.moveAngle = 2.5; }//d
        if (myGameArea.keys && myGameArea.keys [83]) {mySpaceShip.speed = -1.5; }//s
        if (myGameArea.keys && myGameArea.keys [87]) {mySpaceShip.speed = 2.5; }//w
        enemySpaceShip.moveAngle = 0;
        enemySpaceShip.speed = 0;
        if (myGameArea.keys && myGameArea.keys [37]) {enemySpaceShip.moveAngle = -2.5; }
        if (myGameArea.keys && myGameArea.keys [39]) {enemySpaceShip.moveAngle = 2.5 }
        if (myGameArea.keys && myGameArea.keys [40]) {enemySpaceShip.speed = -1; }
        if (myGameArea.keys && myGameArea.keys [38]) {enemySpaceShip.speed = 2; }
        mySpaceShip.newPos();
        enemySpaceShip.newPos();
        mySpaceShip.update();
        enemySpaceShip.update();
        for (let i = 0; i <= n; i++) {
            strelaPole[i].x += 5 * Math.sin(strelaAngle[i]);
            strelaPole[i].y -= 5 * Math.cos(strelaAngle[i]);
            strelaPole[i].update();
        }
    }
    else if (enemySpaceShip.crashWith(levaStena)) {
        mySpaceShip.shoot(spaceShip1);
        enemySpaceShip.x += 3;
        myGameArea.clear();
        mySpaceShip.moveAngle = 0;
        mySpaceShip.speed = 0;
        if (myGameArea.keys && myGameArea.keys [65]) {mySpaceShip.moveAngle = -2.5; }//a
        if (myGameArea.keys && myGameArea.keys [68]) {mySpaceShip.moveAngle = 2.5; }//d
        if (myGameArea.keys && myGameArea.keys [83]) {mySpaceShip.speed = -1.5; }//s
        if (myGameArea.keys && myGameArea.keys [87]) {mySpaceShip.speed = 2.5; }//w
        enemySpaceShip.moveAngle = 0;
        enemySpaceShip.speed = 0;
        if (myGameArea.keys && myGameArea.keys [37]) {enemySpaceShip.moveAngle = -2.5; }
        if (myGameArea.keys && myGameArea.keys [39]) {enemySpaceShip.moveAngle = 2.5 }
        if (myGameArea.keys && myGameArea.keys [40]) {enemySpaceShip.speed = -1; }
        if (myGameArea.keys && myGameArea.keys [38]) {enemySpaceShip.speed = 2; }
        mySpaceShip.newPos();
        enemySpaceShip.newPos();
        mySpaceShip.update();
        enemySpaceShip.update();
        for (let i = 0; i <= n; i++) {
            strelaPole[i].x += 5 * Math.sin(strelaAngle[i]);
            strelaPole[i].y -= 5 * Math.cos(strelaAngle[i]);
            strelaPole[i].update();
        }
    }
    else if (mySpaceShip.crashWith(levaStena)) {
        mySpaceShip.shoot(spaceShip1);
        mySpaceShip.x += 3;
        myGameArea.clear();
        mySpaceShip.moveAngle = 0;
        mySpaceShip.speed = 0;
        if (myGameArea.keys && myGameArea.keys [65]) {mySpaceShip.moveAngle = -2.5; }//a
        if (myGameArea.keys && myGameArea.keys [68]) {mySpaceShip.moveAngle = 2.5; }//d
        if (myGameArea.keys && myGameArea.keys [83]) {mySpaceShip.speed = -1.5; }//s
        if (myGameArea.keys && myGameArea.keys [87]) {mySpaceShip.speed = 2.5; }//w
        enemySpaceShip.moveAngle = 0;
        enemySpaceShip.speed = 0;
        if (myGameArea.keys && myGameArea.keys [37]) {enemySpaceShip.moveAngle = -2.5; }
        if (myGameArea.keys && myGameArea.keys [39]) {enemySpaceShip.moveAngle = 2.5 }
        if (myGameArea.keys && myGameArea.keys [40]) {enemySpaceShip.speed = -1; }
        if (myGameArea.keys && myGameArea.keys [38]) {enemySpaceShip.speed = 2; }
        mySpaceShip.newPos();
        enemySpaceShip.newPos();
        mySpaceShip.update();
        enemySpaceShip.update();
        for (let i = 0; i <= n; i++) {
            strelaPole[i].x += 5 * Math.sin(strelaAngle[i]);
            strelaPole[i].y -= 5 * Math.cos(strelaAngle[i]);
            strelaPole[i].update();
        }
    }
    else {
        
    mySpaceShip.shoot(spaceShip1);
        myGameArea.clear();
        mySpaceShip.moveAngle = 0;
        mySpaceShip.speed = 0;
        if (myGameArea.keys && myGameArea.keys [32]) {attack(enemySpaceShip);}
        if (myGameArea.keys && myGameArea.keys [65]) {wasdMoveLeft();}
        if (myGameArea.keys && myGameArea.keys [68]) {wasdMoveRight();}
        if (myGameArea.keys && myGameArea.keys [83]) {wasdMoveDown();}
        if (myGameArea.keys && myGameArea.keys [87]) {wasdMoveUp();}
        enemySpaceShip.moveAngle = 0;
        enemySpaceShip.speed = 0;
        if (myGameArea.keys && myGameArea.keys [37]) {enemySpaceShip.moveAngle = -2.5; }
        if (myGameArea.keys && myGameArea.keys [39]) {enemySpaceShip.moveAngle = 2.5 }
        if (myGameArea.keys && myGameArea.keys [40]) {enemySpaceShip.speed = -1; }
        if (myGameArea.keys && myGameArea.keys [38]) {enemySpaceShip.speed = 2; }
        mySpaceShip.newPos();
        enemySpaceShip.newPos();
        mySpaceShip.update();
        enemySpaceShip.update();
        for (let i = 0; i <= n; i++) {
            strelaPole[i].x += 5 * Math.sin(strelaAngle[i]);
            strelaPole[i].y -= 5 * Math.cos(strelaAngle[i]);
            strelaPole[i].update();
        }
    }
}

function wasdMoveUp() {
    mySpaceShip.speed = 2.5;
}

function wasdMoveDown() {
    mySpaceShip.speed = -1.5;
}

function wasdMoveLeft() {
    mySpaceShip.moveAngle = -2.5;
}

function wasdMoveRight() {
    mySpaceShip.moveAngle = 2.5;
}

function arrowMoveUp() {
    enemySpaceShip.speed -= 1;
}

function arrowMoveDown() {
    enemySpaceShip.speed += 1;
}

function arrowMoveLeft() {
    enemySpaceShip.moveAngle -= 1;
}

function arrowMoveRight() {
    enemySpaceShip.moveAngle += 1;
}

function myStopMove() {
    mySpaceShip.speed = 0;
}

function enemyStopMove() {
    enemySpaceShip.speed = 0;
}

function position(ship) {
    if (ship == mySpaceShip) {
        document.getElementById("position").innerHTML = ("Position: " + Math.round(ship.x) + "x" + Math.round(ship.y) + " AU");
    }
    else {
        document.getElementById("enemyPosition").innerHTML = ("Position: " + Math.round(ship.x) + "x" + Math.round(ship.y) + " AU");
    }
}

//<------------------AI potahala:--------------------------------------------------->

// Proměnná sledující, zda již byla provedena střelba
var shotFired = false;

// Funkce pro střelbu
function attack(attacker) {
    if (!shotFired) { // Pokud je false (žádná střelba není provedena)
        n += 1;
        strelaPole[n] = new component(5, 5, "yellow", attacker.x, attacker.y);
        strelaAngle[n] = enemySpaceShip.angle;
        shotFired = true; // Nastavíme na true (střelba provedena)
    }
}

// Funkce pro obsluhu události stisknutí klávesy
document.addEventListener("keydown", function(event) {
    if (event.keyCode === 32) { // Klávesa mezerníku
        attack(enemySpaceShip);
    }
});

// Funkce pro obsluhu události uvolnění klávesy
document.addEventListener("keyup", function(event) {
    if (event.keyCode === 32) { // Klávesa mezerníku
        shotFired = false; // Nastavíme zpět na false (povolíme opětovnou střelbu)
    }
});

//<------------------AI dotahala---------------------------------------------------->

//<--------------------Konec canvasu------------------------------------------------>
//Co se ještě musí udělat:(palivo zobrazit: healthbar + funkčnost), (input boxy?)
