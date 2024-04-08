//<------------------------------JAVASCRIPT----------------------------------------->
//<------------------------------Hlavní stránka------------------------------------->
//<------------------------------Funkce a třídy------------------------------------->
class SpaceShip {
    nazev;
    silaStitu;
    mana
    constructor(nazev, silaStitu, mana) {
        this.nazev = nazev;
        this.silaStitu = silaStitu;
        this.mana = mana;
    }
    getManaAmount() {
        if (this.nazev == spaceShip1.nazev) {
            document.getElementById("mana").innerHTML = "Amount of energy: <br> <svg id='manabar' width='120px' height='15px'> <rect height='10px' width='" + (100 * this.mana) + "px' x='5px' y='2px' style='fill:yellow;stroke-width:2;stroke:black'> </svg>"
        }
        else {
            document.getElementById("enemyMana").innerHTML = "Amount of energy: <br> <svg id='enemyManabar' width='120px' height='15px'> <rect height='10px' width='" + (100 * this.mana) + "px' x='5px' y='2px' style='fill:yellow;stroke-width:2;stroke:black'> </svg>"
        }
    }
    reloadMana() {
        if (this.mana < 1) {
            this.mana += 0.0015;
        }
        this.getManaAmount();
    }
    getshieldStrength() {
        if (this.nazev == spaceShip1.nazev) {
            if (this.silaStitu <= 0) {
                enemyShip1.weaponPower = 0;
                spaceShip1.weaponPower = 0;
                document.getElementById("enemyButtons").innerHTML = "Attack (Space)";
                document.getElementById("shipButtons").innerHTML = "Attack (G)";
                document.getElementById("vesmirnaLod").style.color = "#DC143C";
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
                enemyShip1.weaponPower = 0;
                spaceShip1.weaponPower = 0;
                document.getElementById("enemyButtons").innerHTML = "Attack (Space)";
                document.getElementById("shipButtons").innerHTML = "Attack (G)";
                document.getElementById("nepratelskaLod").style.color = "#DC143C";
                document.getElementById("tabulka").style.color = "chartreuse"
                document.getElementById("tabulka").innerHTML = ("<h1>Spaceship <em>" + this.nazev + "</em> was destroyed. <em>" + spaceShip1.nazev + "</em> won!</h1>");
                document.getElementById("enemyShield").innerHTML = ("Shield strength: " + this.silaStitu);
                reloadButton();
            }
            else {
                document.getElementById("enemyShield").innerHTML = ("Shield strength: " + this.silaStitu);
            }
        }
    }
}

function alertStrike(utocnik, obet) {
    if (enemyShip1.silaStitu > 0 && spaceShip1.silaStitu > 0) {
        if (document.getElementById("messageBox").style.display != "block") {
            refuelInterval = setInterval(() => {
                document.getElementById("messageBox").style.display = "block";
                document.getElementById("messageBox").innerHTML = ("<p>Strike! Spaceship <em>" + utocnik + "</em> shot <em>" + obet + "</em>.</p>");
            }, 300);
            setTimeout(() => {
                clearInterval(refuelInterval);
                document.getElementById("messageBox").style.display = "none";
            }, 4000);
        }
        else {
            setTimeout(() => {
                refuelInterval = setInterval(() => {
                    document.getElementById("messageBox").style.display = "block";
                    document.getElementById("messageBox").innerHTML = ("<p>Strike! Spaceship <em>" + utocnik + "</em> shot <em>" + obet + "</em>.</p>");
                }, 300);
                setTimeout(() => {
                    clearInterval(refuelInterval);
                    document.getElementById("messageBox").style.display = "none";
                }, 4000);
            }, 4000);
        }
    }
}

function strike(target) {
    if (target == enemyShip1) {
        let barva = document.getElementById("enemyShield");
        if (target.silaStitu > 0) {
            myInterval = setInterval(() => {
                barva.style.color = 'red';
                setTimeout(() => {
                    barva.style.color = 'yellow';
                }, 250)
            }, 500);
            setTimeout(() => {
                clearInterval(myInterval);
            }, 2000);
        }
        else {
            barva.style.color = '#DC143C';
        }
    }
    else if (target == spaceShip1) {
        let barva = document.getElementById("shield");
        if (target.silaStitu > 0) {
            myInterval = setInterval(() => {
                barva.style.color = 'red';
                setTimeout(() => {
                    barva.style.color = 'yellow';
                }, 250)
            }, 500);
            setTimeout(() => {
                clearInterval(myInterval);
            }, 2000);
        }
        else {
            barva.style.color = '#DC143C';
        }
    }
}

class EnemySpaceShip extends SpaceShip {
    weaponPower;
    constructor(nazev, silaStitu, mana, weaponPower) {
        super(nazev, silaStitu, mana);
        this.weaponPower = weaponPower;
    }
    getWeaponPower() {
        if(this.nazev == "Heart of Gold") {
            document.getElementById("weaponPower").innerHTML = ("Weapon power: " + this.weaponPower);
        }
        else {
            document.getElementById("enemyWeaponPower").innerHTML = ("Weapon power: " + this.weaponPower);
        }
    }
    attack(target) {
        if (enemyShip1.weaponPower != 0) {
            target.silaStitu = target.silaStitu - this.weaponPower;
            alertStrike(this.nazev, target.nazev);
            strike(target);
            target.getshieldStrength();
        }
    }
}

//<------------------------------Konec funkcí a tříd-------------------------------->
//<------------------------------Vyvolávání----------------------------------------->

const spaceShip1 = new EnemySpaceShip("Heart of Gold", 10, 1, 3);

spaceShip1.getshieldStrength();
spaceShip1.getWeaponPower();
spaceShip1.getManaAmount();

document.getElementById("name").innerHTML = ("<em>" + spaceShip1.nazev + "</em>");

const enemyShip1 = new EnemySpaceShip("Star Destroyer", 8, 1, 4);

enemyShip1.getshieldStrength();
enemyShip1.getWeaponPower();
enemyShip1.getManaAmount();

document.getElementById("enemyName").innerHTML = ("<em>" + enemyShip1.nazev + "</em>");

//<------------------------------Konec vyvolávání----------------------------------->
//<------------------------------Konec hlavní stránky------------------------------->






//<------------------------------Easteregg------------------------------------------>

document.getElementById("reloadButton").style.display = "none";

const hlasky = ["HEY, YOU CLICKED ON ME!","STOP IT!","WHY ARE YOU CLICKING ON ME!?!","YOU PERVERT, STOP TOUCHING ME!","DON'T TOUCH ME AGAIN, OR I WILL TOUCH YOUR MOM!","WHY ARE YOU BULLYING ME!?!"];

let aggro = 0;

function reloadButton() {
    document.getElementById("reloadButton").style.display = "block";
}

function reload() {
    location.reload();
}

function jaJaAJenomJa() {
    aggro = aggro + 1;
    if (aggro == 7) {
        document.getElementById("easteregg").innerHTML = "&copy;2024. <a href='FONTS/EASTEREGG/index2.html' role='button' onclick='jaJaAJenomJa()'>BOĎA Adam</a>. Vytvořeno pro zábavu."
        document.getElementById('sipkaDolu').style.display = 'block';
        document.getElementById("sipkaDolu").innerHTML = "ONE MORE TIME YOU CLICK ON ME, AND YOU WILL GET BANNED!!!";
        setTimeout(() => {
            const disappearing = document.getElementById('sipkaDolu');
            disappearing.style.display = 'none';
        },4000);
    }
    else {
        let n = Math.floor(Math.random()*(6))+0;
        document.getElementById('sipkaDolu').style.display = 'block';
        document.getElementById("sipkaDolu").innerHTML = hlasky[n];
        setTimeout(() => {
            const disappearing = document.getElementById('sipkaDolu');
            disappearing.style.display = 'none';
        },2500);
    }
}

//<-------------------------Konec eastereggu---------------------------------------->






//<--------------------------Canvas------------------------------------------------->

var mySpaceShip, enemySpaceShip;

var levaStena, pravaStena, horniStena, spodniStena;

var strelaPole = [];
var n = 0;
strelaPole[n] = ("strela" + n);
var strelaAngle = [];
strelaAngle[n] = 100;

var strelaShipPole = [];
var m = 0;
strelaShipPole[m] = ("strelaShip" + m);
var strelaShipAngle = [];
strelaShipAngle[m] = 100;

var meteorite = [];
var numberOfMeteorites = 0;
meteorite[numberOfMeteorites] = ("meteorite" + numberOfMeteorites);
var meteoriteAngle = [];
meteoriteAngle[numberOfMeteorites] = 180 * Math.PI / 180;
var meteoriteCreation = [true];

var meteorite2 = [];
var numberOfMeteorites2 = 0;
meteorite2[numberOfMeteorites2] = ("meteorite2" + numberOfMeteorites2);
var meteoriteAngle2 = [];
meteoriteAngle2[numberOfMeteorites2] = 180 * Math.PI / 180;
var meteoriteCreation2 = [true];

var meteorite3 = [];
var numberOfMeteorites3 = 0;
meteorite3[numberOfMeteorites3] = ("meteorite3" + numberOfMeteorites3);
var meteoriteAngle3 = [];
meteoriteAngle3[numberOfMeteorites3] = Math.PI / 180;
var meteoriteCreation3 = [true];

var meteorite4 = [];
var numberOfMeteorites4 = 0;
meteorite4[numberOfMeteorites4] = ("meteorite4" + numberOfMeteorites4);
var meteoriteAngle4 = [];
meteoriteAngle4[numberOfMeteorites4] = 180 * Math.PI / 180;
var meteoriteCreation4 = [true];

function startGame() {
    myGameArea.start();

    mySpaceShip = new component(30, 30, "IMAGES/VesmirnaLodHodna.png", 150, 225, "image", spaceShip1);
    enemySpaceShip = new component(30, 30, "IMAGES/VesmirnaLodZla.png", 600, 225, "image", enemyShip1);

    levaStena = new component(100, 650, "red",-100, -100, "object");
    horniStena = new component(1000, 100, "red", -100, -100, "object");
    pravaStena = new component(100, 650, "red", 770, -100, "object");
    spodniStena = new component(1000, 150, "red", -100, 470, "object");

    strelaPole[n] = new component(5,5,"yellow", -200, -200, "object");
    strelaShipPole[m] = new component(5,5,"red",-200, -200, "object");

    meteorite[numberOfMeteorites] = new component(25.86666666, 18, "IMAGES/meteorite.png", 375, -50, "image");
    meteorite2[numberOfMeteorites2] = new component(25.86666666, 18, "IMAGES/meteorite.png", 800, 225, "image");
    meteorite3[numberOfMeteorites3] = new component(25.86666666, 18, "IMAGES/meteorite.png", 375, 500, "image");
    meteorite4[numberOfMeteorites4] = new component(25.86666666, 18, "IMAGES/meteorite.png", -50, 225, "image");
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 750;
        this.canvas.height = 450;
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

function component(width, height, color, x, y, type, shipName) {
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
    this.shipName = shipName;
    if (this.shipName == enemyShip1) {
        this.weaponPower = enemyShip1.weaponPower;
    }
    else {
        this.weaponPower = spaceShip1.weaponPower;
    }
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
        if (checkCollisionWithMySpaceShip(shotShip)) {
            if (shotShip == spaceShip1){
                enemyShip1.attack(shotShip);
            }
            else {
                spaceShip1.attack(enemyShip1);
            }
        } 
    }
}

function checkCollisionWithMySpaceShip(shoot) {
    if (shoot == spaceShip1) {
        for (let i = 0; i <= n; i++) {
            let bullet = strelaPole[i];
            if (bullet.x < (mySpaceShip.x + mySpaceShip.width - 15) &&
                bullet.x + bullet.width > (mySpaceShip.x - 12) &&
                bullet.y < mySpaceShip.y + (mySpaceShip.height - 15) &&
                bullet.y + bullet.height > (mySpaceShip.y - 10)) {
                    strelaPole.splice(i, 1); // Odstranění střely ze seznamu
                    n--; // Snížení počtu střel v poli
                    return true;
            }
        }
        return false;
    }
    else if (shoot == enemyShip1) {
        for (let i = 0; i <= m; i++) {
            let bullet = strelaShipPole[i];
            if (bullet.x < (enemySpaceShip.x + enemySpaceShip.width - 15) &&
                bullet.x + bullet.width > (enemySpaceShip.x - 12) &&
                bullet.y < enemySpaceShip.y + (enemySpaceShip.height - 15) &&
                bullet.y + bullet.height > (enemySpaceShip.y - 10)) {
                    strelaShipPole.splice(i, 1); // Odstranění střely ze seznamu
                    m--; // Snížení počtu střel v poli
                    return true;
            }
        }
        return false;
    }
    else if (shoot == meteorite) {
        for (let i = 0; i <= numberOfMeteorites; i++) {
            for (let j = 0; j <= m; j++) {
                let bullet = strelaShipPole[j];
                if (bullet.x < (meteorite[i].x + meteorite[i].width - 15) &&
                bullet.x + bullet.width > (meteorite[i].x - 12) &&
                bullet.y < meteorite[i].y + (meteorite[i].height - 15) &&
                bullet.y + bullet.height > (meteorite[i].y - 10)) {
                    strelaShipPole.splice(j, 1); // Odstranění střely ze seznamu
                    m--; // Snížení počtu střel v poli
                    meteorite.splice(i, 1);
                    numberOfMeteorites--;
                    return true;
                }
            }
            for (let j = 0; j <= n; j++) {
                let bullet = strelaPole[j];
                if (bullet.x < (meteorite[i].x + meteorite[i].width - 15) &&
                bullet.x + bullet.width > (meteorite[i].x - 12) &&
                bullet.y < meteorite[i].y + (meteorite[i].height - 15) &&
                bullet.y + bullet.height > (meteorite[i].y - 10)) {
                    strelaPole.splice(j, 1); // Odstranění střely ze seznamu
                    n--; // Snížení počtu střel v poli
                    meteorite.splice(i, 1);
                    numberOfMeteorites--;
                    return true;
                }
            }
        }
    }
    else if (shoot == meteorite2) {
        for (let i = 0; i <= numberOfMeteorites2; i++) {
            for (let j = 0; j <= m; j++) {
                let bullet = strelaShipPole[j];
                if (bullet.x < (meteorite2[i].x + meteorite2[i].width - 15) &&
                bullet.x + bullet.width > (meteorite2[i].x - 12) &&
                bullet.y < meteorite2[i].y + (meteorite2[i].height - 15) &&
                bullet.y + bullet.height > (meteorite2[i].y - 10)) {
                    strelaShipPole.splice(j, 1); // Odstranění střely ze seznamu
                    m--; // Snížení počtu střel v poli
                    meteorite2.splice(i, 1);
                    numberOfMeteorites2--;
                    return true;
                }
            }
            for (let j = 0; j <= n; j++) {
                let bullet = strelaPole[j];
                if (bullet.x < (meteorite2[i].x + meteorite2[i].width - 15) &&
                bullet.x + bullet.width > (meteorite2[i].x - 12) &&
                bullet.y < meteorite2[i].y + (meteorite2[i].height - 15) &&
                bullet.y + bullet.height > (meteorite2[i].y - 10)) {
                    strelaPole.splice(j, 1); // Odstranění střely ze seznamu
                    n--; // Snížení počtu střel v poli
                    meteorite2.splice(i, 1);
                    numberOfMeteorites2--;
                    return true;
                }
            }
        }
    }
    else if (shoot == meteorite3) {
        for (let i = 0; i <= numberOfMeteorites3; i++) {
            for (let j = 0; j <= m; j++) {
                let bullet = strelaShipPole[j];
                if (bullet.x < (meteorite3[i].x + meteorite3[i].width - 15) &&
                bullet.x + bullet.width > (meteorite3[i].x - 12) &&
                bullet.y < meteorite3[i].y + (meteorite3[i].height - 15) &&
                bullet.y + bullet.height > (meteorite3[i].y - 10)) {
                    strelaShipPole.splice(j, 1); // Odstranění střely ze seznamu
                    m--; // Snížení počtu střel v poli
                    meteorite3.splice(i, 1);
                    numberOfMeteorites3--;
                    return true;
                }
            }
            for (let j = 0; j <= n; j++) {
                let bullet = strelaPole[j];
                if (bullet.x < (meteorite3[i].x + meteorite3[i].width - 15) &&
                bullet.x + bullet.width > (meteorite3[i].x - 12) &&
                bullet.y < meteorite3[i].y + (meteorite3[i].height - 15) &&
                bullet.y + bullet.height > (meteorite3[i].y - 10)) {
                    strelaPole.splice(j, 1); // Odstranění střely ze seznamu
                    n--; // Snížení počtu střel v poli
                    meteorite3.splice(i, 1);
                    numberOfMeteorites3--;
                    return true;
                }
            }
        }
    }
    else if (shoot == meteorite4) {
        for (let i = 0; i <= numberOfMeteorites4; i++) {
            for (let j = 0; j <= m; j++) {
                let bullet = strelaShipPole[j];
                if (bullet.x < (meteorite4[i].x + meteorite4[i].width - 15) &&
                bullet.x + bullet.width > (meteorite4[i].x - 12) &&
                bullet.y < meteorite4[i].y + (meteorite4[i].height - 15) &&
                bullet.y + bullet.height > (meteorite4[i].y - 10)) {
                    strelaShipPole.splice(j, 1); // Odstranění střely ze seznamu
                    m--; // Snížení počtu střel v poli
                    meteorite4.splice(i, 1);
                    numberOfMeteorites4--;
                    return true;
                }
            }
            for (let j = 0; j <= n; j++) {
                let bullet = strelaPole[j];
                if (bullet.x < (meteorite4[i].x + meteorite4[i].width - 15) &&
                bullet.x + bullet.width > (meteorite4[i].x - 12) &&
                bullet.y < meteorite4[i].y + (meteorite4[i].height - 15) &&
                bullet.y + bullet.height > (meteorite4[i].y - 10)) {
                    strelaPole.splice(j, 1); // Odstranění střely ze seznamu
                    n--; // Snížení počtu střel v poli
                    meteorite4.splice(i, 1);
                    numberOfMeteorites4--;
                    return true;
                }
            }
        }
    }
}

function updateGameArea() {
        if (mySpaceShip.crashWith(horniStena) && enemySpaceShip.crashWith(horniStena)) {
            let a = Math.floor(Math.random()*(600)+0);
            let b = Math.floor(Math.random()*(600)+0);
            let c = Math.floor(Math.random()*(600)+0);
            let d = Math.floor(Math.random()*(600)+0);
            if (meteoriteCreation[a]) {
                let x = (Math.random()*(101)-50);
                numberOfMeteorites += 1;
                meteorite[numberOfMeteorites] = new component(25.86666666, 18, "IMAGES/meteorite.png", 375, -50, "image");
                meteoriteAngle[numberOfMeteorites] = x * Math.PI / 180;
            }
            if (meteoriteCreation2[b]) {
                let x = (Math.random()*(61)-120);
                numberOfMeteorites2 += 1;
                meteorite2[numberOfMeteorites2] = new component(25.86666666, 18, "IMAGES/meteorite.png", 800, 225, "image");
                meteoriteAngle2[numberOfMeteorites2] = x * Math.PI / 180;
            }
            if (meteoriteCreation3[c]) {
                let x = (Math.random()*(101)+130);
                numberOfMeteorites3 += 1;
                meteorite3[numberOfMeteorites3] = new component(25.86666666, 18, "IMAGES/meteorite.png", 375, 500, "image");
                meteoriteAngle3[numberOfMeteorites3] = x * Math.PI / 180;
            }
            if (meteoriteCreation4[d]) {
                let x = (Math.random()*(61)+60);
                numberOfMeteorites4 += 1;
                meteorite4[numberOfMeteorites4] = new component(25.86666666, 18, "IMAGES/meteorite.png", -50, 225, "image");
                meteoriteAngle4[numberOfMeteorites4] = x * Math.PI / 180;
            }
            checkCollisionWithMySpaceShip(meteorite);
            checkCollisionWithMySpaceShip(meteorite2);
            checkCollisionWithMySpaceShip(meteorite3);
            checkCollisionWithMySpaceShip(meteorite4);
            enemyShip1.reloadMana();
            spaceShip1.reloadMana();
            mySpaceShip.shoot(spaceShip1);
            enemySpaceShip.shoot(enemyShip1);
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
            if (myGameArea.keys && myGameArea.keys [40]) {enemySpaceShip.speed = -1.5; }
            if (myGameArea.keys && myGameArea.keys [38]) {enemySpaceShip.speed = 2.5; }
            mySpaceShip.newPos();
            enemySpaceShip.newPos();
            mySpaceShip.update();
            enemySpaceShip.update();
            for (let i = 0; i <= numberOfMeteorites; i++) {
                let rychlost = (Math.random()*(3)+2)
                meteorite[i].x += rychlost * Math.sin(meteoriteAngle[i]);
                meteorite[i].y += rychlost * Math.cos(meteoriteAngle[i]);
                meteorite[i].update();
            }
            for (let i = 0; i <= numberOfMeteorites2; i++) {
                let rychlost = (Math.random()*(3)+2)
                meteorite2[i].x += rychlost * Math.sin(meteoriteAngle2[i]);
                meteorite2[i].y += rychlost * Math.cos(meteoriteAngle2[i]);
                meteorite2[i].update();
            }
            for (let i = 0; i <= numberOfMeteorites3; i++) {
                let rychlost = (Math.random()*(3)+2)
                meteorite3[i].x += rychlost * Math.sin(meteoriteAngle3[i]);
                meteorite3[i].y += rychlost * Math.cos(meteoriteAngle3[i]);
                meteorite3[i].update();
            }
            for (let i = 0; i <= numberOfMeteorites4; i++) {
                let rychlost = (Math.random()*(3)+2)
                meteorite4[i].x += rychlost * Math.sin(meteoriteAngle4[i]);
                meteorite4[i].y += rychlost * Math.cos(meteoriteAngle4[i]);
                meteorite4[i].update();
            }
            for (let i = 0; i <= m; i++) {
                strelaShipPole[i].x += 5 * Math.sin(strelaShipAngle[i]);
                strelaShipPole[i].y -= 5 * Math.cos(strelaShipAngle[i]);
                strelaShipPole[i].update();
            }
            for (let i = 0; i <= n; i++) {
                strelaPole[i].x += 5 * Math.sin(strelaAngle[i]);
                strelaPole[i].y -= 5 * Math.cos(strelaAngle[i]);
                strelaPole[i].update();
            }
        }
        else if (mySpaceShip.crashWith(spodniStena) && enemySpaceShip.crashWith(spodniStena)) {
            let a = Math.floor(Math.random()*(600)+0);
            let b = Math.floor(Math.random()*(600)+0);
            let c = Math.floor(Math.random()*(600)+0);
            let d = Math.floor(Math.random()*(600)+0);
            if (meteoriteCreation[a]) {
                let x = (Math.random()*(101)-50);
                numberOfMeteorites += 1;
                meteorite[numberOfMeteorites] = new component(25.86666666, 18, "IMAGES/meteorite.png", 375, -50, "image");
                meteoriteAngle[numberOfMeteorites] = x * Math.PI / 180;
            }
            if (meteoriteCreation2[b]) {
                let x = (Math.random()*(61)-120);
                numberOfMeteorites2 += 1;
                meteorite2[numberOfMeteorites2] = new component(25.86666666, 18, "IMAGES/meteorite.png", 800, 225, "image");
                meteoriteAngle2[numberOfMeteorites2] = x * Math.PI / 180;
            }
            if (meteoriteCreation3[c]) {
                let x = (Math.random()*(101)+130);
                numberOfMeteorites3 += 1;
                meteorite3[numberOfMeteorites3] = new component(25.86666666, 18, "IMAGES/meteorite.png", 375, 500, "image");
                meteoriteAngle3[numberOfMeteorites3] = x * Math.PI / 180;
            }
            if (meteoriteCreation4[d]) {
                let x = (Math.random()*(61)+60);
                numberOfMeteorites4 += 1;
                meteorite4[numberOfMeteorites4] = new component(25.86666666, 18, "IMAGES/meteorite.png", -50, 225, "image");
                meteoriteAngle4[numberOfMeteorites4] = x * Math.PI / 180;
            }
            checkCollisionWithMySpaceShip(meteorite);
            checkCollisionWithMySpaceShip(meteorite2);
            checkCollisionWithMySpaceShip(meteorite3);
            checkCollisionWithMySpaceShip(meteorite4);
            enemyShip1.reloadMana();
            spaceShip1.reloadMana();
            mySpaceShip.shoot(spaceShip1);
            enemySpaceShip.shoot(enemyShip1);
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
            if (myGameArea.keys && myGameArea.keys [40]) {enemySpaceShip.speed = -1.5; }
            if (myGameArea.keys && myGameArea.keys [38]) {enemySpaceShip.speed = 2.5; }
            mySpaceShip.newPos();
            enemySpaceShip.newPos();
            mySpaceShip.update();
            enemySpaceShip.update();
            for (let i = 0; i <= numberOfMeteorites; i++) {
                let rychlost = (Math.random()*(3)+2)
                meteorite[i].x += rychlost * Math.sin(meteoriteAngle[i]);
                meteorite[i].y += rychlost * Math.cos(meteoriteAngle[i]);
                meteorite[i].update();
            }
            for (let i = 0; i <= numberOfMeteorites2; i++) {
                let rychlost = (Math.random()*(3)+2)
                meteorite2[i].x += rychlost * Math.sin(meteoriteAngle2[i]);
                meteorite2[i].y += rychlost * Math.cos(meteoriteAngle2[i]);
                meteorite2[i].update();
            }
            for (let i = 0; i <= numberOfMeteorites3; i++) {
                let rychlost = (Math.random()*(3)+2)
                meteorite3[i].x += rychlost * Math.sin(meteoriteAngle3[i]);
                meteorite3[i].y += rychlost * Math.cos(meteoriteAngle3[i]);
                meteorite3[i].update();
            }
            for (let i = 0; i <= numberOfMeteorites4; i++) {
                let rychlost = (Math.random()*(3)+2)
                meteorite4[i].x += rychlost * Math.sin(meteoriteAngle4[i]);
                meteorite4[i].y += rychlost * Math.cos(meteoriteAngle4[i]);
                meteorite4[i].update();
            }
            for (let i = 0; i <= m; i++) {
                strelaShipPole[i].x += 5 * Math.sin(strelaShipAngle[i]);
                strelaShipPole[i].y -= 5 * Math.cos(strelaShipAngle[i]);
                strelaShipPole[i].update();
            }
            for (let i = 0; i <= n; i++) {
                strelaPole[i].x += 5 * Math.sin(strelaAngle[i]);
                strelaPole[i].y -= 5 * Math.cos(strelaAngle[i]);
                strelaPole[i].update();
            }
        }
    else if (mySpaceShip.crashWith(horniStena) && enemySpaceShip.crashWith(spodniStena)) {
        let a = Math.floor(Math.random()*(600)+0);
        let b = Math.floor(Math.random()*(600)+0);
        let c = Math.floor(Math.random()*(600)+0);
        let d = Math.floor(Math.random()*(600)+0);
        if (meteoriteCreation[a]) {
            let x = (Math.random()*(101)-50);
            numberOfMeteorites += 1;
            meteorite[numberOfMeteorites] = new component(25.86666666, 18, "IMAGES/meteorite.png", 375, -50, "image");
            meteoriteAngle[numberOfMeteorites] = x * Math.PI / 180;
        }
        if (meteoriteCreation2[b]) {
            let x = (Math.random()*(61)-120);
            numberOfMeteorites2 += 1;
            meteorite2[numberOfMeteorites2] = new component(25.86666666, 18, "IMAGES/meteorite.png", 800, 225, "image");
            meteoriteAngle2[numberOfMeteorites2] = x * Math.PI / 180;
        }
        if (meteoriteCreation3[c]) {
            let x = (Math.random()*(101)+130);
            numberOfMeteorites3 += 1;
            meteorite3[numberOfMeteorites3] = new component(25.86666666, 18, "IMAGES/meteorite.png", 375, 500, "image");
            meteoriteAngle3[numberOfMeteorites3] = x * Math.PI / 180;
        }
        if (meteoriteCreation4[d]) {
            let x = (Math.random()*(61)+60);
            numberOfMeteorites4 += 1;
            meteorite4[numberOfMeteorites4] = new component(25.86666666, 18, "IMAGES/meteorite.png", -50, 225, "image");
            meteoriteAngle4[numberOfMeteorites4] = x * Math.PI / 180;
        }
        checkCollisionWithMySpaceShip(meteorite);
        checkCollisionWithMySpaceShip(meteorite2);
        checkCollisionWithMySpaceShip(meteorite3);
        checkCollisionWithMySpaceShip(meteorite4);
        enemyShip1.reloadMana();
        spaceShip1.reloadMana();
        mySpaceShip.shoot(spaceShip1);
        enemySpaceShip.shoot(enemyShip1);
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
        if (myGameArea.keys && myGameArea.keys [40]) {enemySpaceShip.speed = -1.5; }
        if (myGameArea.keys && myGameArea.keys [38]) {enemySpaceShip.speed = 2.5; }
        mySpaceShip.newPos();
        enemySpaceShip.newPos();
        mySpaceShip.update();
        enemySpaceShip.update();
        for (let i = 0; i <= numberOfMeteorites; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite[i].x += rychlost * Math.sin(meteoriteAngle[i]);
            meteorite[i].y += rychlost * Math.cos(meteoriteAngle[i]);
            meteorite[i].update();
        }
        for (let i = 0; i <= numberOfMeteorites2; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite2[i].x += rychlost * Math.sin(meteoriteAngle2[i]);
            meteorite2[i].y += rychlost * Math.cos(meteoriteAngle2[i]);
            meteorite2[i].update();
        }
        for (let i = 0; i <= numberOfMeteorites3; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite3[i].x += rychlost * Math.sin(meteoriteAngle3[i]);
            meteorite3[i].y += rychlost * Math.cos(meteoriteAngle3[i]);
            meteorite3[i].update();
        }
        for (let i = 0; i <= numberOfMeteorites4; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite4[i].x += rychlost * Math.sin(meteoriteAngle4[i]);
            meteorite4[i].y += rychlost * Math.cos(meteoriteAngle4[i]);
            meteorite4[i].update();
        }
        for (let i = 0; i <= m; i++) {
            strelaShipPole[i].x += 5 * Math.sin(strelaShipAngle[i]);
            strelaShipPole[i].y -= 5 * Math.cos(strelaShipAngle[i]);
            strelaShipPole[i].update();
        }
        for (let i = 0; i <= n; i++) {
            strelaPole[i].x += 5 * Math.sin(strelaAngle[i]);
            strelaPole[i].y -= 5 * Math.cos(strelaAngle[i]);
            strelaPole[i].update();
        }
    }
    else if (enemySpaceShip.crashWith(horniStena) && mySpaceShip.crashWith(spodniStena)) {
        mySpaceShip.shoot(spaceShip1);
        let a = Math.floor(Math.random()*(600)+0);
        let b = Math.floor(Math.random()*(600)+0);
        let c = Math.floor(Math.random()*(600)+0);
        let d = Math.floor(Math.random()*(600)+0);
        if (meteoriteCreation[a]) {
            let x = (Math.random()*(101)-50);
            numberOfMeteorites += 1;
            meteorite[numberOfMeteorites] = new component(25.86666666, 18, "IMAGES/meteorite.png", 375, -50, "image");
            meteoriteAngle[numberOfMeteorites] = x * Math.PI / 180;
        }
        if (meteoriteCreation2[b]) {
            let x = (Math.random()*(61)-120);
            numberOfMeteorites2 += 1;
            meteorite2[numberOfMeteorites2] = new component(25.86666666, 18, "IMAGES/meteorite.png", 800, 225, "image");
            meteoriteAngle2[numberOfMeteorites2] = x * Math.PI / 180;
        }
        if (meteoriteCreation3[c]) {
            let x = (Math.random()*(101)+130);
            numberOfMeteorites3 += 1;
            meteorite3[numberOfMeteorites3] = new component(25.86666666, 18, "IMAGES/meteorite.png", 375, 500, "image");
            meteoriteAngle3[numberOfMeteorites3] = x * Math.PI / 180;
        }
        if (meteoriteCreation4[d]) {
            let x = (Math.random()*(61)+60);
            numberOfMeteorites4 += 1;
            meteorite4[numberOfMeteorites4] = new component(25.86666666, 18, "IMAGES/meteorite.png", -50, 225, "image");
            meteoriteAngle4[numberOfMeteorites4] = x * Math.PI / 180;
        }
        checkCollisionWithMySpaceShip(meteorite);
        checkCollisionWithMySpaceShip(meteorite2);
        checkCollisionWithMySpaceShip(meteorite3);
        checkCollisionWithMySpaceShip(meteorite4);
        enemyShip1.reloadMana();
        spaceShip1.reloadMana();
        enemySpaceShip.shoot(enemyShip1);
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
        if (myGameArea.keys && myGameArea.keys [40]) {enemySpaceShip.speed = -1.5; }
        if (myGameArea.keys && myGameArea.keys [38]) {enemySpaceShip.speed = 2.5; }
        mySpaceShip.newPos();
        enemySpaceShip.newPos();
        mySpaceShip.update();
        enemySpaceShip.update();
        for (let i = 0; i <= numberOfMeteorites; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite[i].x += rychlost * Math.sin(meteoriteAngle[i]);
            meteorite[i].y += rychlost * Math.cos(meteoriteAngle[i]);
            meteorite[i].update();
        }
        for (let i = 0; i <= numberOfMeteorites2; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite2[i].x += rychlost * Math.sin(meteoriteAngle2[i]);
            meteorite2[i].y += rychlost * Math.cos(meteoriteAngle2[i]);
            meteorite2[i].update();
        }
        for (let i = 0; i <= numberOfMeteorites3; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite3[i].x += rychlost * Math.sin(meteoriteAngle3[i]);
            meteorite3[i].y += rychlost * Math.cos(meteoriteAngle3[i]);
            meteorite3[i].update();
        }
        for (let i = 0; i <= numberOfMeteorites4; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite4[i].x += rychlost * Math.sin(meteoriteAngle4[i]);
            meteorite4[i].y += rychlost * Math.cos(meteoriteAngle4[i]);
            meteorite4[i].update();
        }
        for (let i = 0; i <= m; i++) {
            strelaShipPole[i].x += 5 * Math.sin(strelaShipAngle[i]);
            strelaShipPole[i].y -= 5 * Math.cos(strelaShipAngle[i]);
            strelaShipPole[i].update();
        }
        for (let i = 0; i <= n; i++) {
            strelaPole[i].x += 5 * Math.sin(strelaAngle[i]);
            strelaPole[i].y -= 5 * Math.cos(strelaAngle[i]);
            strelaPole[i].update();
        }
    }
    else if (mySpaceShip.crashWith(spodniStena) && enemySpaceShip.crashWith(levaStena)) {
        let a = Math.floor(Math.random()*(600)+0);
        let b = Math.floor(Math.random()*(600)+0);
        let c = Math.floor(Math.random()*(600)+0);
        let d = Math.floor(Math.random()*(600)+0);
        if (meteoriteCreation[a]) {
            let x = (Math.random()*(101)-50);
            numberOfMeteorites += 1;
            meteorite[numberOfMeteorites] = new component(25.86666666, 18, "IMAGES/meteorite.png", 375, -50, "image");
            meteoriteAngle[numberOfMeteorites] = x * Math.PI / 180;
        }
        if (meteoriteCreation2[b]) {
            let x = (Math.random()*(61)-120);
            numberOfMeteorites2 += 1;
            meteorite2[numberOfMeteorites2] = new component(25.86666666, 18, "IMAGES/meteorite.png", 800, 225, "image");
            meteoriteAngle2[numberOfMeteorites2] = x * Math.PI / 180;
        }
        if (meteoriteCreation3[c]) {
            let x = (Math.random()*(101)+130);
            numberOfMeteorites3 += 1;
            meteorite3[numberOfMeteorites3] = new component(25.86666666, 18, "IMAGES/meteorite.png", 375, 500, "image");
            meteoriteAngle3[numberOfMeteorites3] = x * Math.PI / 180;
        }
        if (meteoriteCreation4[d]) {
            let x = (Math.random()*(61)+60);
            numberOfMeteorites4 += 1;
            meteorite4[numberOfMeteorites4] = new component(25.86666666, 18, "IMAGES/meteorite.png", -50, 225, "image");
            meteoriteAngle4[numberOfMeteorites4] = x * Math.PI / 180;
        }
        checkCollisionWithMySpaceShip(meteorite);
        checkCollisionWithMySpaceShip(meteorite2);
        checkCollisionWithMySpaceShip(meteorite3);
        checkCollisionWithMySpaceShip(meteorite4);
        enemyShip1.reloadMana();
        spaceShip1.reloadMana();
        mySpaceShip.shoot(spaceShip1);
        enemySpaceShip.shoot(enemyShip1);
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
        if (myGameArea.keys && myGameArea.keys [40]) {enemySpaceShip.speed = -1.5; }
        if (myGameArea.keys && myGameArea.keys [38]) {enemySpaceShip.speed = 2.5; }
        mySpaceShip.newPos();
        enemySpaceShip.newPos();
        mySpaceShip.update();
        enemySpaceShip.update();
        for (let i = 0; i <= numberOfMeteorites; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite[i].x += rychlost * Math.sin(meteoriteAngle[i]);
            meteorite[i].y += rychlost * Math.cos(meteoriteAngle[i]);
            meteorite[i].update();
        }
        for (let i = 0; i <= numberOfMeteorites2; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite2[i].x += rychlost * Math.sin(meteoriteAngle2[i]);
            meteorite2[i].y += rychlost * Math.cos(meteoriteAngle2[i]);
            meteorite2[i].update();
        }
        for (let i = 0; i <= numberOfMeteorites3; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite3[i].x += rychlost * Math.sin(meteoriteAngle3[i]);
            meteorite3[i].y += rychlost * Math.cos(meteoriteAngle3[i]);
            meteorite3[i].update();
        }
        for (let i = 0; i <= numberOfMeteorites4; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite4[i].x += rychlost * Math.sin(meteoriteAngle4[i]);
            meteorite4[i].y += rychlost * Math.cos(meteoriteAngle4[i]);
            meteorite4[i].update();
        }
        for (let i = 0; i <= m; i++) {
            strelaShipPole[i].x += 5 * Math.sin(strelaShipAngle[i]);
            strelaShipPole[i].y -= 5 * Math.cos(strelaShipAngle[i]);
            strelaShipPole[i].update();
        }
        for (let i = 0; i <= n; i++) {
            strelaPole[i].x += 5 * Math.sin(strelaAngle[i]);
            strelaPole[i].y -= 5 * Math.cos(strelaAngle[i]);
            strelaPole[i].update();
        }
    }
    else if (enemySpaceShip.crashWith(spodniStena) && mySpaceShip.crashWith(levaStena)) {
        let a = Math.floor(Math.random()*(600)+0);
        let b = Math.floor(Math.random()*(600)+0);
        let c = Math.floor(Math.random()*(600)+0);
        let d = Math.floor(Math.random()*(600)+0);
        if (meteoriteCreation[a]) {
            let x = (Math.random()*(101)-50);
            numberOfMeteorites += 1;
            meteorite[numberOfMeteorites] = new component(25.86666666, 18, "IMAGES/meteorite.png", 375, -50, "image");
            meteoriteAngle[numberOfMeteorites] = x * Math.PI / 180;
        }
        if (meteoriteCreation2[b]) {
            let x = (Math.random()*(61)-120);
            numberOfMeteorites2 += 1;
            meteorite2[numberOfMeteorites2] = new component(25.86666666, 18, "IMAGES/meteorite.png", 800, 225, "image");
            meteoriteAngle2[numberOfMeteorites2] = x * Math.PI / 180;
        }
        if (meteoriteCreation3[c]) {
            let x = (Math.random()*(101)+130);
            numberOfMeteorites3 += 1;
            meteorite3[numberOfMeteorites3] = new component(25.86666666, 18, "IMAGES/meteorite.png", 375, 500, "image");
            meteoriteAngle3[numberOfMeteorites3] = x * Math.PI / 180;
        }
        if (meteoriteCreation4[d]) {
            let x = (Math.random()*(61)+60);
            numberOfMeteorites4 += 1;
            meteorite4[numberOfMeteorites4] = new component(25.86666666, 18, "IMAGES/meteorite.png", -50, 225, "image");
            meteoriteAngle4[numberOfMeteorites4] = x * Math.PI / 180;
        }
        checkCollisionWithMySpaceShip(meteorite);
        checkCollisionWithMySpaceShip(meteorite2);
        checkCollisionWithMySpaceShip(meteorite3);
        checkCollisionWithMySpaceShip(meteorite4);
        enemyShip1.reloadMana();
        spaceShip1.reloadMana();
        mySpaceShip.shoot(spaceShip1);
        enemySpaceShip.shoot(enemyShip1);
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
        if (myGameArea.keys && myGameArea.keys [40]) {enemySpaceShip.speed = -1.5; }
        if (myGameArea.keys && myGameArea.keys [38]) {enemySpaceShip.speed = 2.5; }
        mySpaceShip.newPos();
        enemySpaceShip.newPos();
        mySpaceShip.update();
        enemySpaceShip.update();
        for (let i = 0; i <= numberOfMeteorites; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite[i].x += rychlost * Math.sin(meteoriteAngle[i]);
            meteorite[i].y += rychlost * Math.cos(meteoriteAngle[i]);
            meteorite[i].update();
        }
        for (let i = 0; i <= numberOfMeteorites2; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite2[i].x += rychlost * Math.sin(meteoriteAngle2[i]);
            meteorite2[i].y += rychlost * Math.cos(meteoriteAngle2[i]);
            meteorite2[i].update();
        }
        for (let i = 0; i <= numberOfMeteorites3; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite3[i].x += rychlost * Math.sin(meteoriteAngle3[i]);
            meteorite3[i].y += rychlost * Math.cos(meteoriteAngle3[i]);
            meteorite3[i].update();
        }
        for (let i = 0; i <= numberOfMeteorites4; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite4[i].x += rychlost * Math.sin(meteoriteAngle4[i]);
            meteorite4[i].y += rychlost * Math.cos(meteoriteAngle4[i]);
            meteorite4[i].update();
        }
        for (let i = 0; i <= m; i++) {
            strelaShipPole[i].x += 5 * Math.sin(strelaShipAngle[i]);
            strelaShipPole[i].y -= 5 * Math.cos(strelaShipAngle[i]);
            strelaShipPole[i].update();
        }
        for (let i = 0; i <= n; i++) {
            strelaPole[i].x += 5 * Math.sin(strelaAngle[i]);
            strelaPole[i].y -= 5 * Math.cos(strelaAngle[i]);
            strelaPole[i].update();
        }
    }
    else if (mySpaceShip.crashWith(spodniStena) && enemySpaceShip.crashWith(pravaStena)) {
        let a = Math.floor(Math.random()*(600)+0);
        let b = Math.floor(Math.random()*(600)+0);
        let c = Math.floor(Math.random()*(600)+0);
        let d = Math.floor(Math.random()*(600)+0);
        if (meteoriteCreation[a]) {
            let x = (Math.random()*(101)-50);
            numberOfMeteorites += 1;
            meteorite[numberOfMeteorites] = new component(25.86666666, 18, "IMAGES/meteorite.png", 375, -50, "image");
            meteoriteAngle[numberOfMeteorites] = x * Math.PI / 180;
        }
        if (meteoriteCreation2[b]) {
            let x = (Math.random()*(61)-120);
            numberOfMeteorites2 += 1;
            meteorite2[numberOfMeteorites2] = new component(25.86666666, 18, "IMAGES/meteorite.png", 800, 225, "image");
            meteoriteAngle2[numberOfMeteorites2] = x * Math.PI / 180;
        }
        if (meteoriteCreation3[c]) {
            let x = (Math.random()*(101)+130);
            numberOfMeteorites3 += 1;
            meteorite3[numberOfMeteorites3] = new component(25.86666666, 18, "IMAGES/meteorite.png", 375, 500, "image");
            meteoriteAngle3[numberOfMeteorites3] = x * Math.PI / 180;
        }
        if (meteoriteCreation4[d]) {
            let x = (Math.random()*(61)+60);
            numberOfMeteorites4 += 1;
            meteorite4[numberOfMeteorites4] = new component(25.86666666, 18, "IMAGES/meteorite.png", -50, 225, "image");
            meteoriteAngle4[numberOfMeteorites4] = x * Math.PI / 180;
        }
        checkCollisionWithMySpaceShip(meteorite);
        checkCollisionWithMySpaceShip(meteorite2);
        checkCollisionWithMySpaceShip(meteorite3);
        checkCollisionWithMySpaceShip(meteorite4);
        enemyShip1.reloadMana();
        spaceShip1.reloadMana();
        mySpaceShip.shoot(spaceShip1);
        enemySpaceShip.shoot(enemyShip1);
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
        if (myGameArea.keys && myGameArea.keys [40]) {enemySpaceShip.speed = -1.5; }
        if (myGameArea.keys && myGameArea.keys [38]) {enemySpaceShip.speed = 2.5; }
        mySpaceShip.newPos();
        enemySpaceShip.newPos();
        mySpaceShip.update();
        enemySpaceShip.update();
        for (let i = 0; i <= numberOfMeteorites; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite[i].x += rychlost * Math.sin(meteoriteAngle[i]);
            meteorite[i].y += rychlost * Math.cos(meteoriteAngle[i]);
            meteorite[i].update();
        }
        for (let i = 0; i <= numberOfMeteorites2; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite2[i].x += rychlost * Math.sin(meteoriteAngle2[i]);
            meteorite2[i].y += rychlost * Math.cos(meteoriteAngle2[i]);
            meteorite2[i].update();
        }
        for (let i = 0; i <= numberOfMeteorites3; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite3[i].x += rychlost * Math.sin(meteoriteAngle3[i]);
            meteorite3[i].y += rychlost * Math.cos(meteoriteAngle3[i]);
            meteorite3[i].update();
        }
        for (let i = 0; i <= numberOfMeteorites4; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite4[i].x += rychlost * Math.sin(meteoriteAngle4[i]);
            meteorite4[i].y += rychlost * Math.cos(meteoriteAngle4[i]);
            meteorite4[i].update();
        }
        for (let i = 0; i <= m; i++) {
            strelaShipPole[i].x += 5 * Math.sin(strelaShipAngle[i]);
            strelaShipPole[i].y -= 5 * Math.cos(strelaShipAngle[i]);
            strelaShipPole[i].update();
        }
        for (let i = 0; i <= n; i++) {
            strelaPole[i].x += 5 * Math.sin(strelaAngle[i]);
            strelaPole[i].y -= 5 * Math.cos(strelaAngle[i]);
            strelaPole[i].update();
        }
    }
    else if (enemySpaceShip.crashWith(spodniStena) && mySpaceShip.crashWith(pravaStena)) {
        let a = Math.floor(Math.random()*(600)+0);
        let b = Math.floor(Math.random()*(600)+0);
        let c = Math.floor(Math.random()*(600)+0);
        let d = Math.floor(Math.random()*(600)+0);
        if (meteoriteCreation[a]) {
            let x = (Math.random()*(101)-50);
            numberOfMeteorites += 1;
            meteorite[numberOfMeteorites] = new component(25.86666666, 18, "IMAGES/meteorite.png", 375, -50, "image");
            meteoriteAngle[numberOfMeteorites] = x * Math.PI / 180;
        }
        if (meteoriteCreation2[b]) {
            let x = (Math.random()*(61)-120);
            numberOfMeteorites2 += 1;
            meteorite2[numberOfMeteorites2] = new component(25.86666666, 18, "IMAGES/meteorite.png", 800, 225, "image");
            meteoriteAngle2[numberOfMeteorites2] = x * Math.PI / 180;
        }
        if (meteoriteCreation3[c]) {
            let x = (Math.random()*(101)+130);
            numberOfMeteorites3 += 1;
            meteorite3[numberOfMeteorites3] = new component(25.86666666, 18, "IMAGES/meteorite.png", 375, 500, "image");
            meteoriteAngle3[numberOfMeteorites3] = x * Math.PI / 180;
        }
        if (meteoriteCreation4[d]) {
            let x = (Math.random()*(61)+60);
            numberOfMeteorites4 += 1;
            meteorite4[numberOfMeteorites4] = new component(25.86666666, 18, "IMAGES/meteorite.png", -50, 225, "image");
            meteoriteAngle4[numberOfMeteorites4] = x * Math.PI / 180;
        }
        checkCollisionWithMySpaceShip(meteorite);
        checkCollisionWithMySpaceShip(meteorite2);
        checkCollisionWithMySpaceShip(meteorite3);
        checkCollisionWithMySpaceShip(meteorite4);
        enemyShip1.reloadMana();
        spaceShip1.reloadMana();
        mySpaceShip.shoot(spaceShip1);
        enemySpaceShip.shoot(enemyShip1);
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
        if (myGameArea.keys && myGameArea.keys [40]) {enemySpaceShip.speed = -1.5; }
        if (myGameArea.keys && myGameArea.keys [38]) {enemySpaceShip.speed = 2.5; }
        mySpaceShip.newPos();
        enemySpaceShip.newPos();
        mySpaceShip.update();
        enemySpaceShip.update();
        for (let i = 0; i <= numberOfMeteorites; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite[i].x += rychlost * Math.sin(meteoriteAngle[i]);
            meteorite[i].y += rychlost * Math.cos(meteoriteAngle[i]);
            meteorite[i].update();
        }
        for (let i = 0; i <= numberOfMeteorites2; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite2[i].x += rychlost * Math.sin(meteoriteAngle2[i]);
            meteorite2[i].y += rychlost * Math.cos(meteoriteAngle2[i]);
            meteorite2[i].update();
        }
        for (let i = 0; i <= numberOfMeteorites3; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite3[i].x += rychlost * Math.sin(meteoriteAngle3[i]);
            meteorite3[i].y += rychlost * Math.cos(meteoriteAngle3[i]);
            meteorite3[i].update();
        }
        for (let i = 0; i <= numberOfMeteorites4; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite4[i].x += rychlost * Math.sin(meteoriteAngle4[i]);
            meteorite4[i].y += rychlost * Math.cos(meteoriteAngle4[i]);
            meteorite4[i].update();
        }
        for (let i = 0; i <= m; i++) {
            strelaShipPole[i].x += 5 * Math.sin(strelaShipAngle[i]);
            strelaShipPole[i].y -= 5 * Math.cos(strelaShipAngle[i]);
            strelaShipPole[i].update();
        }
        for (let i = 0; i <= n; i++) {
            strelaPole[i].x += 5 * Math.sin(strelaAngle[i]);
            strelaPole[i].y -= 5 * Math.cos(strelaAngle[i]);
            strelaPole[i].update();
        }
    }
    else if (mySpaceShip.crashWith(horniStena) && enemySpaceShip.crashWith(pravaStena)) {
        let a = Math.floor(Math.random()*(600)+0);
        let b = Math.floor(Math.random()*(600)+0);
        let c = Math.floor(Math.random()*(600)+0);
        let d = Math.floor(Math.random()*(600)+0);
        if (meteoriteCreation[a]) {
            let x = (Math.random()*(101)-50);
            numberOfMeteorites += 1;
            meteorite[numberOfMeteorites] = new component(25.86666666, 18, "IMAGES/meteorite.png", 375, -50, "image");
            meteoriteAngle[numberOfMeteorites] = x * Math.PI / 180;
        }
        if (meteoriteCreation2[b]) {
            let x = (Math.random()*(61)-120);
            numberOfMeteorites2 += 1;
            meteorite2[numberOfMeteorites2] = new component(25.86666666, 18, "IMAGES/meteorite.png", 800, 225, "image");
            meteoriteAngle2[numberOfMeteorites2] = x * Math.PI / 180;
        }
        if (meteoriteCreation3[c]) {
            let x = (Math.random()*(101)+130);
            numberOfMeteorites3 += 1;
            meteorite3[numberOfMeteorites3] = new component(25.86666666, 18, "IMAGES/meteorite.png", 375, 500, "image");
            meteoriteAngle3[numberOfMeteorites3] = x * Math.PI / 180;
        }
        if (meteoriteCreation4[d]) {
            let x = (Math.random()*(61)+60);
            numberOfMeteorites4 += 1;
            meteorite4[numberOfMeteorites4] = new component(25.86666666, 18, "IMAGES/meteorite.png", -50, 225, "image");
            meteoriteAngle4[numberOfMeteorites4] = x * Math.PI / 180;
        }
        checkCollisionWithMySpaceShip(meteorite);
        checkCollisionWithMySpaceShip(meteorite2);
        checkCollisionWithMySpaceShip(meteorite3);
        checkCollisionWithMySpaceShip(meteorite4);
        enemyShip1.reloadMana();
        spaceShip1.reloadMana();
        mySpaceShip.shoot(spaceShip1);
        enemySpaceShip.shoot(enemyShip1);
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
        if (myGameArea.keys && myGameArea.keys [40]) {enemySpaceShip.speed = -1.5; }
        if (myGameArea.keys && myGameArea.keys [38]) {enemySpaceShip.speed = 2.5; }
        mySpaceShip.newPos();
        enemySpaceShip.newPos();
        mySpaceShip.update();
        enemySpaceShip.update();
        for (let i = 0; i <= numberOfMeteorites; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite[i].x += rychlost * Math.sin(meteoriteAngle[i]);
            meteorite[i].y += rychlost * Math.cos(meteoriteAngle[i]);
            meteorite[i].update();
        }
        for (let i = 0; i <= numberOfMeteorites2; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite2[i].x += rychlost * Math.sin(meteoriteAngle2[i]);
            meteorite2[i].y += rychlost * Math.cos(meteoriteAngle2[i]);
            meteorite2[i].update();
        }
        for (let i = 0; i <= numberOfMeteorites3; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite3[i].x += rychlost * Math.sin(meteoriteAngle3[i]);
            meteorite3[i].y += rychlost * Math.cos(meteoriteAngle3[i]);
            meteorite3[i].update();
        }
        for (let i = 0; i <= numberOfMeteorites4; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite4[i].x += rychlost * Math.sin(meteoriteAngle4[i]);
            meteorite4[i].y += rychlost * Math.cos(meteoriteAngle4[i]);
            meteorite4[i].update();
        }
        for (let i = 0; i <= m; i++) {
            strelaShipPole[i].x += 5 * Math.sin(strelaShipAngle[i]);
            strelaShipPole[i].y -= 5 * Math.cos(strelaShipAngle[i]);
            strelaShipPole[i].update();
        }
        for (let i = 0; i <= n; i++) {
            strelaPole[i].x += 5 * Math.sin(strelaAngle[i]);
            strelaPole[i].y -= 5 * Math.cos(strelaAngle[i]);
            strelaPole[i].update();
        }
    }
    else if (enemySpaceShip.crashWith(pravaStena) && mySpaceShip.crashWith(levaStena)) {
        let a = Math.floor(Math.random()*(600)+0);
        let b = Math.floor(Math.random()*(600)+0);
        let c = Math.floor(Math.random()*(600)+0);
        let d = Math.floor(Math.random()*(600)+0);
        if (meteoriteCreation[a]) {
            let x = (Math.random()*(101)-50);
            numberOfMeteorites += 1;
            meteorite[numberOfMeteorites] = new component(25.86666666, 18, "IMAGES/meteorite.png", 375, -50, "image");
            meteoriteAngle[numberOfMeteorites] = x * Math.PI / 180;
        }
        if (meteoriteCreation2[b]) {
            let x = (Math.random()*(61)-120);
            numberOfMeteorites2 += 1;
            meteorite2[numberOfMeteorites2] = new component(25.86666666, 18, "IMAGES/meteorite.png", 800, 225, "image");
            meteoriteAngle2[numberOfMeteorites2] = x * Math.PI / 180;
        }
        if (meteoriteCreation3[c]) {
            let x = (Math.random()*(101)+130);
            numberOfMeteorites3 += 1;
            meteorite3[numberOfMeteorites3] = new component(25.86666666, 18, "IMAGES/meteorite.png", 375, 500, "image");
            meteoriteAngle3[numberOfMeteorites3] = x * Math.PI / 180;
        }
        if (meteoriteCreation4[d]) {
            let x = (Math.random()*(61)+60);
            numberOfMeteorites4 += 1;
            meteorite4[numberOfMeteorites4] = new component(25.86666666, 18, "IMAGES/meteorite.png", -50, 225, "image");
            meteoriteAngle4[numberOfMeteorites4] = x * Math.PI / 180;
        }
        checkCollisionWithMySpaceShip(meteorite);
        checkCollisionWithMySpaceShip(meteorite2);
        checkCollisionWithMySpaceShip(meteorite3);
        checkCollisionWithMySpaceShip(meteorite4);
        enemyShip1.reloadMana();
        spaceShip1.reloadMana();
        mySpaceShip.shoot(spaceShip1);
        enemySpaceShip.shoot(enemyShip1);
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
        if (myGameArea.keys && myGameArea.keys [40]) {enemySpaceShip.speed = -1.5; }
        if (myGameArea.keys && myGameArea.keys [38]) {enemySpaceShip.speed = 2.5; }
        mySpaceShip.newPos();
        enemySpaceShip.newPos();
        mySpaceShip.update();
        enemySpaceShip.update();
        for (let i = 0; i <= numberOfMeteorites; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite[i].x += rychlost * Math.sin(meteoriteAngle[i]);
            meteorite[i].y += rychlost * Math.cos(meteoriteAngle[i]);
            meteorite[i].update();
        }
        for (let i = 0; i <= numberOfMeteorites2; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite2[i].x += rychlost * Math.sin(meteoriteAngle2[i]);
            meteorite2[i].y += rychlost * Math.cos(meteoriteAngle2[i]);
            meteorite2[i].update();
        }
        for (let i = 0; i <= numberOfMeteorites3; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite3[i].x += rychlost * Math.sin(meteoriteAngle3[i]);
            meteorite3[i].y += rychlost * Math.cos(meteoriteAngle3[i]);
            meteorite3[i].update();
        }
        for (let i = 0; i <= numberOfMeteorites4; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite4[i].x += rychlost * Math.sin(meteoriteAngle4[i]);
            meteorite4[i].y += rychlost * Math.cos(meteoriteAngle4[i]);
            meteorite4[i].update();
        }
        for (let i = 0; i <= m; i++) {
            strelaShipPole[i].x += 5 * Math.sin(strelaShipAngle[i]);
            strelaShipPole[i].y -= 5 * Math.cos(strelaShipAngle[i]);
            strelaShipPole[i].update();
        }
        for (let i = 0; i <= n; i++) {
            strelaPole[i].x += 5 * Math.sin(strelaAngle[i]);
            strelaPole[i].y -= 5 * Math.cos(strelaAngle[i]);
            strelaPole[i].update();
        }
    }
    else if (mySpaceShip.crashWith(pravaStena) && enemySpaceShip.crashWith(levaStena)) {
        let a = Math.floor(Math.random()*(600)+0);
        let b = Math.floor(Math.random()*(600)+0);
        let c = Math.floor(Math.random()*(600)+0);
        let d = Math.floor(Math.random()*(600)+0);
        if (meteoriteCreation[a]) {
            let x = (Math.random()*(101)-50);
            numberOfMeteorites += 1;
            meteorite[numberOfMeteorites] = new component(25.86666666, 18, "IMAGES/meteorite.png", 375, -50, "image");
            meteoriteAngle[numberOfMeteorites] = x * Math.PI / 180;
        }
        if (meteoriteCreation2[b]) {
            let x = (Math.random()*(61)-120);
            numberOfMeteorites2 += 1;
            meteorite2[numberOfMeteorites2] = new component(25.86666666, 18, "IMAGES/meteorite.png", 800, 225, "image");
            meteoriteAngle2[numberOfMeteorites2] = x * Math.PI / 180;
        }
        if (meteoriteCreation3[c]) {
            let x = (Math.random()*(101)+130);
            numberOfMeteorites3 += 1;
            meteorite3[numberOfMeteorites3] = new component(25.86666666, 18, "IMAGES/meteorite.png", 375, 500, "image");
            meteoriteAngle3[numberOfMeteorites3] = x * Math.PI / 180;
        }
        if (meteoriteCreation4[d]) {
            let x = (Math.random()*(61)+60);
            numberOfMeteorites4 += 1;
            meteorite4[numberOfMeteorites4] = new component(25.86666666, 18, "IMAGES/meteorite.png", -50, 225, "image");
            meteoriteAngle4[numberOfMeteorites4] = x * Math.PI / 180;
        }
        checkCollisionWithMySpaceShip(meteorite);
        checkCollisionWithMySpaceShip(meteorite2);
        checkCollisionWithMySpaceShip(meteorite3);
        checkCollisionWithMySpaceShip(meteorite4);
        enemyShip1.reloadMana();
        spaceShip1.reloadMana();
        mySpaceShip.shoot(spaceShip1);
        enemySpaceShip.shoot(enemyShip1);
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
        if (myGameArea.keys && myGameArea.keys [40]) {enemySpaceShip.speed = -1.5; }
        if (myGameArea.keys && myGameArea.keys [38]) {enemySpaceShip.speed = 2.5; }
        mySpaceShip.newPos();
        enemySpaceShip.newPos();
        mySpaceShip.update();
        enemySpaceShip.update();
        for (let i = 0; i <= numberOfMeteorites; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite[i].x += rychlost * Math.sin(meteoriteAngle[i]);
            meteorite[i].y += rychlost * Math.cos(meteoriteAngle[i]);
            meteorite[i].update();
        }
        for (let i = 0; i <= numberOfMeteorites2; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite2[i].x += rychlost * Math.sin(meteoriteAngle2[i]);
            meteorite2[i].y += rychlost * Math.cos(meteoriteAngle2[i]);
            meteorite2[i].update();
        }
        for (let i = 0; i <= numberOfMeteorites3; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite3[i].x += rychlost * Math.sin(meteoriteAngle3[i]);
            meteorite3[i].y += rychlost * Math.cos(meteoriteAngle3[i]);
            meteorite3[i].update();
        }
        for (let i = 0; i <= numberOfMeteorites4; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite4[i].x += rychlost * Math.sin(meteoriteAngle4[i]);
            meteorite4[i].y += rychlost * Math.cos(meteoriteAngle4[i]);
            meteorite4[i].update();
        }
        for (let i = 0; i <= m; i++) {
            strelaShipPole[i].x += 5 * Math.sin(strelaShipAngle[i]);
            strelaShipPole[i].y -= 5 * Math.cos(strelaShipAngle[i]);
            strelaShipPole[i].update();
        }
        for (let i = 0; i <= n; i++) {
            strelaPole[i].x += 5 * Math.sin(strelaAngle[i]);
            strelaPole[i].y -= 5 * Math.cos(strelaAngle[i]);
            strelaPole[i].update();
        }
    }
    else if (enemySpaceShip.crashWith(horniStena) && mySpaceShip.crashWith(pravaStena)) {
        let a = Math.floor(Math.random()*(600)+0);
        let b = Math.floor(Math.random()*(600)+0);
        let c = Math.floor(Math.random()*(600)+0);
        let d = Math.floor(Math.random()*(600)+0);
        if (meteoriteCreation[a]) {
            let x = (Math.random()*(101)-50);
            numberOfMeteorites += 1;
            meteorite[numberOfMeteorites] = new component(25.86666666, 18, "IMAGES/meteorite.png", 375, -50, "image");
            meteoriteAngle[numberOfMeteorites] = x * Math.PI / 180;
        }
        if (meteoriteCreation2[b]) {
            let x = (Math.random()*(61)-120);
            numberOfMeteorites2 += 1;
            meteorite2[numberOfMeteorites2] = new component(25.86666666, 18, "IMAGES/meteorite.png", 800, 225, "image");
            meteoriteAngle2[numberOfMeteorites2] = x * Math.PI / 180;
        }
        if (meteoriteCreation3[c]) {
            let x = (Math.random()*(101)+130);
            numberOfMeteorites3 += 1;
            meteorite3[numberOfMeteorites3] = new component(25.86666666, 18, "IMAGES/meteorite.png", 375, 500, "image");
            meteoriteAngle3[numberOfMeteorites3] = x * Math.PI / 180;
        }
        if (meteoriteCreation4[d]) {
            let x = (Math.random()*(61)+60);
            numberOfMeteorites4 += 1;
            meteorite4[numberOfMeteorites4] = new component(25.86666666, 18, "IMAGES/meteorite.png", -50, 225, "image");
            meteoriteAngle4[numberOfMeteorites4] = x * Math.PI / 180;
        }
        checkCollisionWithMySpaceShip(meteorite);
        checkCollisionWithMySpaceShip(meteorite2);
        checkCollisionWithMySpaceShip(meteorite3);
        checkCollisionWithMySpaceShip(meteorite4);
        enemyShip1.reloadMana();
        spaceShip1.reloadMana();
        mySpaceShip.shoot(spaceShip1);
        enemySpaceShip.shoot(enemyShip1);
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
        if (myGameArea.keys && myGameArea.keys [40]) {enemySpaceShip.speed = -1.5; }
        if (myGameArea.keys && myGameArea.keys [38]) {enemySpaceShip.speed = 2.5; }
        mySpaceShip.newPos();
        enemySpaceShip.newPos();
        mySpaceShip.update();
        enemySpaceShip.update();
        for (let i = 0; i <= numberOfMeteorites; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite[i].x += rychlost * Math.sin(meteoriteAngle[i]);
            meteorite[i].y += rychlost * Math.cos(meteoriteAngle[i]);
            meteorite[i].update();
        }
        for (let i = 0; i <= numberOfMeteorites2; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite2[i].x += rychlost * Math.sin(meteoriteAngle2[i]);
            meteorite2[i].y += rychlost * Math.cos(meteoriteAngle2[i]);
            meteorite2[i].update();
        }
        for (let i = 0; i <= numberOfMeteorites3; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite3[i].x += rychlost * Math.sin(meteoriteAngle3[i]);
            meteorite3[i].y += rychlost * Math.cos(meteoriteAngle3[i]);
            meteorite3[i].update();
        }
        for (let i = 0; i <= numberOfMeteorites4; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite4[i].x += rychlost * Math.sin(meteoriteAngle4[i]);
            meteorite4[i].y += rychlost * Math.cos(meteoriteAngle4[i]);
            meteorite4[i].update();
        }
        for (let i = 0; i <= m; i++) {
            strelaShipPole[i].x += 5 * Math.sin(strelaShipAngle[i]);
            strelaShipPole[i].y -= 5 * Math.cos(strelaShipAngle[i]);
            strelaShipPole[i].update();
        }
        for (let i = 0; i <= n; i++) {
            strelaPole[i].x += 5 * Math.sin(strelaAngle[i]);
            strelaPole[i].y -= 5 * Math.cos(strelaAngle[i]);
            strelaPole[i].update();
        }
    }
    else if (mySpaceShip.crashWith(pravaStena) && enemySpaceShip.crashWith(pravaStena)) {
        let a = Math.floor(Math.random()*(600)+0);
        let b = Math.floor(Math.random()*(600)+0);
        let c = Math.floor(Math.random()*(600)+0);
        let d = Math.floor(Math.random()*(600)+0);
        if (meteoriteCreation[a]) {
            let x = (Math.random()*(101)-50);
            numberOfMeteorites += 1;
            meteorite[numberOfMeteorites] = new component(25.86666666, 18, "IMAGES/meteorite.png", 375, -50, "image");
            meteoriteAngle[numberOfMeteorites] = x * Math.PI / 180;
        }
        if (meteoriteCreation2[b]) {
            let x = (Math.random()*(61)-120);
            numberOfMeteorites2 += 1;
            meteorite2[numberOfMeteorites2] = new component(25.86666666, 18, "IMAGES/meteorite.png", 800, 225, "image");
            meteoriteAngle2[numberOfMeteorites2] = x * Math.PI / 180;
        }
        if (meteoriteCreation3[c]) {
            let x = (Math.random()*(101)+130);
            numberOfMeteorites3 += 1;
            meteorite3[numberOfMeteorites3] = new component(25.86666666, 18, "IMAGES/meteorite.png", 375, 500, "image");
            meteoriteAngle3[numberOfMeteorites3] = x * Math.PI / 180;
        }
        if (meteoriteCreation4[d]) {
            let x = (Math.random()*(61)+60);
            numberOfMeteorites4 += 1;
            meteorite4[numberOfMeteorites4] = new component(25.86666666, 18, "IMAGES/meteorite.png", -50, 225, "image");
            meteoriteAngle4[numberOfMeteorites4] = x * Math.PI / 180;
        }
        checkCollisionWithMySpaceShip(meteorite);
        checkCollisionWithMySpaceShip(meteorite2);
        checkCollisionWithMySpaceShip(meteorite3);
        checkCollisionWithMySpaceShip(meteorite4);
        enemyShip1.reloadMana();
        spaceShip1.reloadMana();
        mySpaceShip.shoot(spaceShip1);
        enemySpaceShip.shoot(enemyShip1);
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
        if (myGameArea.keys && myGameArea.keys [40]) {enemySpaceShip.speed = -1.5; }
        if (myGameArea.keys && myGameArea.keys [38]) {enemySpaceShip.speed = 2.5; }
        mySpaceShip.newPos();
        enemySpaceShip.newPos();
        mySpaceShip.update();
        enemySpaceShip.update();
        for (let i = 0; i <= numberOfMeteorites; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite[i].x += rychlost * Math.sin(meteoriteAngle[i]);
            meteorite[i].y += rychlost * Math.cos(meteoriteAngle[i]);
            meteorite[i].update();
        }
        for (let i = 0; i <= numberOfMeteorites2; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite2[i].x += rychlost * Math.sin(meteoriteAngle2[i]);
            meteorite2[i].y += rychlost * Math.cos(meteoriteAngle2[i]);
            meteorite2[i].update();
        }
        for (let i = 0; i <= numberOfMeteorites3; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite3[i].x += rychlost * Math.sin(meteoriteAngle3[i]);
            meteorite3[i].y += rychlost * Math.cos(meteoriteAngle3[i]);
            meteorite3[i].update();
        }
        for (let i = 0; i <= numberOfMeteorites4; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite4[i].x += rychlost * Math.sin(meteoriteAngle4[i]);
            meteorite4[i].y += rychlost * Math.cos(meteoriteAngle4[i]);
            meteorite4[i].update();
        }
        for (let i = 0; i <= m; i++) {
            strelaShipPole[i].x += 5 * Math.sin(strelaShipAngle[i]);
            strelaShipPole[i].y -= 5 * Math.cos(strelaShipAngle[i]);
            strelaShipPole[i].update();
        }
        for (let i = 0; i <= n; i++) {
            strelaPole[i].x += 5 * Math.sin(strelaAngle[i]);
            strelaPole[i].y -= 5 * Math.cos(strelaAngle[i]);
            strelaPole[i].update();
        }
    }
    else if (mySpaceShip.crashWith(horniStena) && enemySpaceShip.crashWith(levaStena)) {
        let a = Math.floor(Math.random()*(600)+0);
        let b = Math.floor(Math.random()*(600)+0);
        let c = Math.floor(Math.random()*(600)+0);
        let d = Math.floor(Math.random()*(600)+0);
        if (meteoriteCreation[a]) {
            let x = (Math.random()*(101)-50);
            numberOfMeteorites += 1;
            meteorite[numberOfMeteorites] = new component(25.86666666, 18, "IMAGES/meteorite.png", 375, -50, "image");
            meteoriteAngle[numberOfMeteorites] = x * Math.PI / 180;
        }
        if (meteoriteCreation2[b]) {
            let x = (Math.random()*(61)-120);
            numberOfMeteorites2 += 1;
            meteorite2[numberOfMeteorites2] = new component(25.86666666, 18, "IMAGES/meteorite.png", 800, 225, "image");
            meteoriteAngle2[numberOfMeteorites2] = x * Math.PI / 180;
        }
        if (meteoriteCreation3[c]) {
            let x = (Math.random()*(101)+130);
            numberOfMeteorites3 += 1;
            meteorite3[numberOfMeteorites3] = new component(25.86666666, 18, "IMAGES/meteorite.png", 375, 500, "image");
            meteoriteAngle3[numberOfMeteorites3] = x * Math.PI / 180;
        }
        if (meteoriteCreation4[d]) {
            let x = (Math.random()*(61)+60);
            numberOfMeteorites4 += 1;
            meteorite4[numberOfMeteorites4] = new component(25.86666666, 18, "IMAGES/meteorite.png", -50, 225, "image");
            meteoriteAngle4[numberOfMeteorites4] = x * Math.PI / 180;
        }
        checkCollisionWithMySpaceShip(meteorite);
        checkCollisionWithMySpaceShip(meteorite2);
        checkCollisionWithMySpaceShip(meteorite3);
        checkCollisionWithMySpaceShip(meteorite4);
        enemyShip1.reloadMana();
        spaceShip1.reloadMana();
        mySpaceShip.shoot(spaceShip1);
        enemySpaceShip.shoot(enemyShip1);
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
        if (myGameArea.keys && myGameArea.keys [40]) {enemySpaceShip.speed = -1.5; }
        if (myGameArea.keys && myGameArea.keys [38]) {enemySpaceShip.speed = 2.5; }
        mySpaceShip.newPos();
        enemySpaceShip.newPos();
        mySpaceShip.update();
        enemySpaceShip.update();
        for (let i = 0; i <= numberOfMeteorites; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite[i].x += rychlost * Math.sin(meteoriteAngle[i]);
            meteorite[i].y += rychlost * Math.cos(meteoriteAngle[i]);
            meteorite[i].update();
        }
        for (let i = 0; i <= numberOfMeteorites2; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite2[i].x += rychlost * Math.sin(meteoriteAngle2[i]);
            meteorite2[i].y += rychlost * Math.cos(meteoriteAngle2[i]);
            meteorite2[i].update();
        }
        for (let i = 0; i <= numberOfMeteorites3; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite3[i].x += rychlost * Math.sin(meteoriteAngle3[i]);
            meteorite3[i].y += rychlost * Math.cos(meteoriteAngle3[i]);
            meteorite3[i].update();
        }
        for (let i = 0; i <= numberOfMeteorites4; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite4[i].x += rychlost * Math.sin(meteoriteAngle4[i]);
            meteorite4[i].y += rychlost * Math.cos(meteoriteAngle4[i]);
            meteorite4[i].update();
        }
        for (let i = 0; i <= m; i++) {
            strelaShipPole[i].x += 5 * Math.sin(strelaShipAngle[i]);
            strelaShipPole[i].y -= 5 * Math.cos(strelaShipAngle[i]);
            strelaShipPole[i].update();
        }
        for (let i = 0; i <= n; i++) {
            strelaPole[i].x += 5 * Math.sin(strelaAngle[i]);
            strelaPole[i].y -= 5 * Math.cos(strelaAngle[i]);
            strelaPole[i].update();
        }
    }
    else if (enemySpaceShip.crashWith(horniStena) && mySpaceShip.crashWith(levaStena)) {
        let a = Math.floor(Math.random()*(600)+0);
        let b = Math.floor(Math.random()*(600)+0);
        let c = Math.floor(Math.random()*(600)+0);
        let d = Math.floor(Math.random()*(600)+0);
        if (meteoriteCreation[a]) {
            let x = (Math.random()*(101)-50);
            numberOfMeteorites += 1;
            meteorite[numberOfMeteorites] = new component(25.86666666, 18, "IMAGES/meteorite.png", 375, -50, "image");
            meteoriteAngle[numberOfMeteorites] = x * Math.PI / 180;
        }
        if (meteoriteCreation2[b]) {
            let x = (Math.random()*(61)-120);
            numberOfMeteorites2 += 1;
            meteorite2[numberOfMeteorites2] = new component(25.86666666, 18, "IMAGES/meteorite.png", 800, 225, "image");
            meteoriteAngle2[numberOfMeteorites2] = x * Math.PI / 180;
        }
        if (meteoriteCreation3[c]) {
            let x = (Math.random()*(101)+130);
            numberOfMeteorites3 += 1;
            meteorite3[numberOfMeteorites3] = new component(25.86666666, 18, "IMAGES/meteorite.png", 375, 500, "image");
            meteoriteAngle3[numberOfMeteorites3] = x * Math.PI / 180;
        }
        if (meteoriteCreation4[d]) {
            let x = (Math.random()*(61)+60);
            numberOfMeteorites4 += 1;
            meteorite4[numberOfMeteorites4] = new component(25.86666666, 18, "IMAGES/meteorite.png", -50, 225, "image");
            meteoriteAngle4[numberOfMeteorites4] = x * Math.PI / 180;
        }
        checkCollisionWithMySpaceShip(meteorite);
        checkCollisionWithMySpaceShip(meteorite2);
        checkCollisionWithMySpaceShip(meteorite3);
        checkCollisionWithMySpaceShip(meteorite4);
        enemyShip1.reloadMana();
        spaceShip1.reloadMana();
        mySpaceShip.shoot(spaceShip1);
        enemySpaceShip.shoot(enemyShip1);
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
        if (myGameArea.keys && myGameArea.keys [40]) {enemySpaceShip.speed = -1.5; }
        if (myGameArea.keys && myGameArea.keys [38]) {enemySpaceShip.speed = 2.5; }
        mySpaceShip.newPos();
        enemySpaceShip.newPos();
        mySpaceShip.update();
        enemySpaceShip.update();
        for (let i = 0; i <= numberOfMeteorites; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite[i].x += rychlost * Math.sin(meteoriteAngle[i]);
            meteorite[i].y += rychlost * Math.cos(meteoriteAngle[i]);
            meteorite[i].update();
        }
        for (let i = 0; i <= numberOfMeteorites2; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite2[i].x += rychlost * Math.sin(meteoriteAngle2[i]);
            meteorite2[i].y += rychlost * Math.cos(meteoriteAngle2[i]);
            meteorite2[i].update();
        }
        for (let i = 0; i <= numberOfMeteorites3; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite3[i].x += rychlost * Math.sin(meteoriteAngle3[i]);
            meteorite3[i].y += rychlost * Math.cos(meteoriteAngle3[i]);
            meteorite3[i].update();
        }
        for (let i = 0; i <= numberOfMeteorites4; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite4[i].x += rychlost * Math.sin(meteoriteAngle4[i]);
            meteorite4[i].y += rychlost * Math.cos(meteoriteAngle4[i]);
            meteorite4[i].update();
        }
        for (let i = 0; i <= m; i++) {
            strelaShipPole[i].x += 5 * Math.sin(strelaShipAngle[i]);
            strelaShipPole[i].y -= 5 * Math.cos(strelaShipAngle[i]);
            strelaShipPole[i].update();
        }
        for (let i = 0; i <= n; i++) {
            strelaPole[i].x += 5 * Math.sin(strelaAngle[i]);
            strelaPole[i].y -= 5 * Math.cos(strelaAngle[i]);
            strelaPole[i].update();
        }
    }
    else if (mySpaceShip.crashWith(levaStena) && enemySpaceShip.crashWith(levaStena)) {
        let a = Math.floor(Math.random()*(600)+0);
        let b = Math.floor(Math.random()*(600)+0);
        let c = Math.floor(Math.random()*(600)+0);
        let d = Math.floor(Math.random()*(600)+0);
        if (meteoriteCreation[a]) {
            let x = (Math.random()*(101)-50);
            numberOfMeteorites += 1;
            meteorite[numberOfMeteorites] = new component(25.86666666, 18, "IMAGES/meteorite.png", 375, -50, "image");
            meteoriteAngle[numberOfMeteorites] = x * Math.PI / 180;
        }
        if (meteoriteCreation2[b]) {
            let x = (Math.random()*(61)-120);
            numberOfMeteorites2 += 1;
            meteorite2[numberOfMeteorites2] = new component(25.86666666, 18, "IMAGES/meteorite.png", 800, 225, "image");
            meteoriteAngle2[numberOfMeteorites2] = x * Math.PI / 180;
        }
        if (meteoriteCreation3[c]) {
            let x = (Math.random()*(101)+130);
            numberOfMeteorites3 += 1;
            meteorite3[numberOfMeteorites3] = new component(25.86666666, 18, "IMAGES/meteorite.png", 375, 500, "image");
            meteoriteAngle3[numberOfMeteorites3] = x * Math.PI / 180;
        }
        if (meteoriteCreation4[d]) {
            let x = (Math.random()*(61)+60);
            numberOfMeteorites4 += 1;
            meteorite4[numberOfMeteorites4] = new component(25.86666666, 18, "IMAGES/meteorite.png", -50, 225, "image");
            meteoriteAngle4[numberOfMeteorites4] = x * Math.PI / 180;
        }
        checkCollisionWithMySpaceShip(meteorite);
        checkCollisionWithMySpaceShip(meteorite2);
        checkCollisionWithMySpaceShip(meteorite3);
        checkCollisionWithMySpaceShip(meteorite4);
        enemyShip1.reloadMana();
        spaceShip1.reloadMana();
        mySpaceShip.shoot(spaceShip1);
        enemySpaceShip.shoot(enemyShip1);
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
        if (myGameArea.keys && myGameArea.keys [40]) {enemySpaceShip.speed = -1.5; }
        if (myGameArea.keys && myGameArea.keys [38]) {enemySpaceShip.speed = 2.5; }
        mySpaceShip.newPos();
        enemySpaceShip.newPos();
        mySpaceShip.update();
        enemySpaceShip.update();
        for (let i = 0; i <= numberOfMeteorites; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite[i].x += rychlost * Math.sin(meteoriteAngle[i]);
            meteorite[i].y += rychlost * Math.cos(meteoriteAngle[i]);
            meteorite[i].update();
        }
        for (let i = 0; i <= numberOfMeteorites2; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite2[i].x += rychlost * Math.sin(meteoriteAngle2[i]);
            meteorite2[i].y += rychlost * Math.cos(meteoriteAngle2[i]);
            meteorite2[i].update();
        }
        for (let i = 0; i <= numberOfMeteorites3; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite3[i].x += rychlost * Math.sin(meteoriteAngle3[i]);
            meteorite3[i].y += rychlost * Math.cos(meteoriteAngle3[i]);
            meteorite3[i].update();
        }
        for (let i = 0; i <= numberOfMeteorites4; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite4[i].x += rychlost * Math.sin(meteoriteAngle4[i]);
            meteorite4[i].y += rychlost * Math.cos(meteoriteAngle4[i]);
            meteorite4[i].update();
        }
        for (let i = 0; i <= m; i++) {
            strelaShipPole[i].x += 5 * Math.sin(strelaShipAngle[i]);
            strelaShipPole[i].y -= 5 * Math.cos(strelaShipAngle[i]);
            strelaShipPole[i].update();
        }
        for (let i = 0; i <= n; i++) {
            strelaPole[i].x += 5 * Math.sin(strelaAngle[i]);
            strelaPole[i].y -= 5 * Math.cos(strelaAngle[i]);
            strelaPole[i].update();
        }
    }
    else if (mySpaceShip.crashWith(horniStena) && mySpaceShip.crashWith(levaStena) && enemySpaceShip.crashWith(horniStena) && enemySpaceShip.crashWith(levaStena)) {
        let a = Math.floor(Math.random()*(600)+0);
        let b = Math.floor(Math.random()*(600)+0);
        let c = Math.floor(Math.random()*(600)+0);
        let d = Math.floor(Math.random()*(600)+0);
        if (meteoriteCreation[a]) {
            let x = (Math.random()*(101)-50);
            numberOfMeteorites += 1;
            meteorite[numberOfMeteorites] = new component(25.86666666, 18, "IMAGES/meteorite.png", 375, -50, "image");
            meteoriteAngle[numberOfMeteorites] = x * Math.PI / 180;
        }
        if (meteoriteCreation2[b]) {
            let x = (Math.random()*(61)-120);
            numberOfMeteorites2 += 1;
            meteorite2[numberOfMeteorites2] = new component(25.86666666, 18, "IMAGES/meteorite.png", 800, 225, "image");
            meteoriteAngle2[numberOfMeteorites2] = x * Math.PI / 180;
        }
        if (meteoriteCreation3[c]) {
            let x = (Math.random()*(101)+130);
            numberOfMeteorites3 += 1;
            meteorite3[numberOfMeteorites3] = new component(25.86666666, 18, "IMAGES/meteorite.png", 375, 500, "image");
            meteoriteAngle3[numberOfMeteorites3] = x * Math.PI / 180;
        }
        if (meteoriteCreation4[d]) {
            let x = (Math.random()*(61)+60);
            numberOfMeteorites4 += 1;
            meteorite4[numberOfMeteorites4] = new component(25.86666666, 18, "IMAGES/meteorite.png", -50, 225, "image");
            meteoriteAngle4[numberOfMeteorites4] = x * Math.PI / 180;
        }
        checkCollisionWithMySpaceShip(meteorite);
        checkCollisionWithMySpaceShip(meteorite2);
        checkCollisionWithMySpaceShip(meteorite3);
        checkCollisionWithMySpaceShip(meteorite4);
        enemyShip1.reloadMana();
        spaceShip1.reloadMana();
        mySpaceShip.shoot(spaceShip1);
        enemySpaceShip.shoot(enemyShip1);
        mySpaceShip.x += 3;
        mySpaceShip.y += 3;
        enemySpaceShip.x += 3;
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
        if (myGameArea.keys && myGameArea.keys [40]) {enemySpaceShip.speed = -1.5; }
        if (myGameArea.keys && myGameArea.keys [38]) {enemySpaceShip.speed = 2.5; }
        mySpaceShip.newPos();
        enemySpaceShip.newPos();
        mySpaceShip.update();
        enemySpaceShip.update();
        for (let i = 0; i <= numberOfMeteorites; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite[i].x += rychlost * Math.sin(meteoriteAngle[i]);
            meteorite[i].y += rychlost * Math.cos(meteoriteAngle[i]);
            meteorite[i].update();
        }
        for (let i = 0; i <= numberOfMeteorites2; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite2[i].x += rychlost * Math.sin(meteoriteAngle2[i]);
            meteorite2[i].y += rychlost * Math.cos(meteoriteAngle2[i]);
            meteorite2[i].update();
        }
        for (let i = 0; i <= numberOfMeteorites3; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite3[i].x += rychlost * Math.sin(meteoriteAngle3[i]);
            meteorite3[i].y += rychlost * Math.cos(meteoriteAngle3[i]);
            meteorite3[i].update();
        }
        for (let i = 0; i <= numberOfMeteorites4; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite4[i].x += rychlost * Math.sin(meteoriteAngle4[i]);
            meteorite4[i].y += rychlost * Math.cos(meteoriteAngle4[i]);
            meteorite4[i].update();
        }
        for (let i = 0; i <= m; i++) {
            strelaShipPole[i].x += 5 * Math.sin(strelaShipAngle[i]);
            strelaShipPole[i].y -= 5 * Math.cos(strelaShipAngle[i]);
            strelaShipPole[i].update();
        }
        for (let i = 0; i <= n; i++) {
            strelaPole[i].x += 5 * Math.sin(strelaAngle[i]);
            strelaPole[i].y -= 5 * Math.cos(strelaAngle[i]);
            strelaPole[i].update();
        }
    }
    else if (mySpaceShip.crashWith(horniStena) && mySpaceShip.crashWith(levaStena) && enemySpaceShip.crashWith(horniStena)) {
        let a = Math.floor(Math.random()*(600)+0);
        let b = Math.floor(Math.random()*(600)+0);
        let c = Math.floor(Math.random()*(600)+0);
        let d = Math.floor(Math.random()*(600)+0);
        if (meteoriteCreation[a]) {
            let x = (Math.random()*(101)-50);
            numberOfMeteorites += 1;
            meteorite[numberOfMeteorites] = new component(25.86666666, 18, "IMAGES/meteorite.png", 375, -50, "image");
            meteoriteAngle[numberOfMeteorites] = x * Math.PI / 180;
        }
        if (meteoriteCreation2[b]) {
            let x = (Math.random()*(61)-120);
            numberOfMeteorites2 += 1;
            meteorite2[numberOfMeteorites2] = new component(25.86666666, 18, "IMAGES/meteorite.png", 800, 225, "image");
            meteoriteAngle2[numberOfMeteorites2] = x * Math.PI / 180;
        }
        if (meteoriteCreation3[c]) {
            let x = (Math.random()*(101)+130);
            numberOfMeteorites3 += 1;
            meteorite3[numberOfMeteorites3] = new component(25.86666666, 18, "IMAGES/meteorite.png", 375, 500, "image");
            meteoriteAngle3[numberOfMeteorites3] = x * Math.PI / 180;
        }
        if (meteoriteCreation4[d]) {
            let x = (Math.random()*(61)+60);
            numberOfMeteorites4 += 1;
            meteorite4[numberOfMeteorites4] = new component(25.86666666, 18, "IMAGES/meteorite.png", -50, 225, "image");
            meteoriteAngle4[numberOfMeteorites4] = x * Math.PI / 180;
        }
        checkCollisionWithMySpaceShip(meteorite);
        checkCollisionWithMySpaceShip(meteorite2);
        checkCollisionWithMySpaceShip(meteorite3);
        checkCollisionWithMySpaceShip(meteorite4);
        enemyShip1.reloadMana();
        spaceShip1.reloadMana();
        mySpaceShip.shoot(spaceShip1);
        enemySpaceShip.shoot(enemyShip1);
        mySpaceShip.x += 3;
        mySpaceShip.y += 3;
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
        if (myGameArea.keys && myGameArea.keys [40]) {enemySpaceShip.speed = -1.5; }
        if (myGameArea.keys && myGameArea.keys [38]) {enemySpaceShip.speed = 2.5; }
        mySpaceShip.newPos();
        enemySpaceShip.newPos();
        mySpaceShip.update();
        enemySpaceShip.update();
        for (let i = 0; i <= numberOfMeteorites; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite[i].x += rychlost * Math.sin(meteoriteAngle[i]);
            meteorite[i].y += rychlost * Math.cos(meteoriteAngle[i]);
            meteorite[i].update();
        }
        for (let i = 0; i <= numberOfMeteorites2; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite2[i].x += rychlost * Math.sin(meteoriteAngle2[i]);
            meteorite2[i].y += rychlost * Math.cos(meteoriteAngle2[i]);
            meteorite2[i].update();
        }
        for (let i = 0; i <= numberOfMeteorites3; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite3[i].x += rychlost * Math.sin(meteoriteAngle3[i]);
            meteorite3[i].y += rychlost * Math.cos(meteoriteAngle3[i]);
            meteorite3[i].update();
        }
        for (let i = 0; i <= numberOfMeteorites4; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite4[i].x += rychlost * Math.sin(meteoriteAngle4[i]);
            meteorite4[i].y += rychlost * Math.cos(meteoriteAngle4[i]);
            meteorite4[i].update();
        }
        for (let i = 0; i <= m; i++) {
            strelaShipPole[i].x += 5 * Math.sin(strelaShipAngle[i]);
            strelaShipPole[i].y -= 5 * Math.cos(strelaShipAngle[i]);
            strelaShipPole[i].update();
        }
        for (let i = 0; i <= n; i++) {
            strelaPole[i].x += 5 * Math.sin(strelaAngle[i]);
            strelaPole[i].y -= 5 * Math.cos(strelaAngle[i]);
            strelaPole[i].update();
        }
    }
    else if (mySpaceShip.crashWith(horniStena) && mySpaceShip.crashWith(levaStena) && enemySpaceShip.crashWith(levaStena)) {
        let a = Math.floor(Math.random()*(600)+0);
        let b = Math.floor(Math.random()*(600)+0);
        let c = Math.floor(Math.random()*(600)+0);
        let d = Math.floor(Math.random()*(600)+0);
        if (meteoriteCreation[a]) {
            let x = (Math.random()*(101)-50);
            numberOfMeteorites += 1;
            meteorite[numberOfMeteorites] = new component(25.86666666, 18, "IMAGES/meteorite.png", 375, -50, "image");
            meteoriteAngle[numberOfMeteorites] = x * Math.PI / 180;
        }
        if (meteoriteCreation2[b]) {
            let x = (Math.random()*(61)-120);
            numberOfMeteorites2 += 1;
            meteorite2[numberOfMeteorites2] = new component(25.86666666, 18, "IMAGES/meteorite.png", 800, 225, "image");
            meteoriteAngle2[numberOfMeteorites2] = x * Math.PI / 180;
        }
        if (meteoriteCreation3[c]) {
            let x = (Math.random()*(101)+130);
            numberOfMeteorites3 += 1;
            meteorite3[numberOfMeteorites3] = new component(25.86666666, 18, "IMAGES/meteorite.png", 375, 500, "image");
            meteoriteAngle3[numberOfMeteorites3] = x * Math.PI / 180;
        }
        if (meteoriteCreation4[d]) {
            let x = (Math.random()*(61)+60);
            numberOfMeteorites4 += 1;
            meteorite4[numberOfMeteorites4] = new component(25.86666666, 18, "IMAGES/meteorite.png", -50, 225, "image");
            meteoriteAngle4[numberOfMeteorites4] = x * Math.PI / 180;
        }
        checkCollisionWithMySpaceShip(meteorite);
        checkCollisionWithMySpaceShip(meteorite2);
        checkCollisionWithMySpaceShip(meteorite3);
        checkCollisionWithMySpaceShip(meteorite4);
        enemyShip1.reloadMana();
        spaceShip1.reloadMana();
        mySpaceShip.shoot(spaceShip1);
        enemySpaceShip.shoot(enemyShip1);
        mySpaceShip.x += 3;
        mySpaceShip.y += 3;
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
        if (myGameArea.keys && myGameArea.keys [40]) {enemySpaceShip.speed = -1.5; }
        if (myGameArea.keys && myGameArea.keys [38]) {enemySpaceShip.speed = 2.5; }
        mySpaceShip.newPos();
        enemySpaceShip.newPos();
        mySpaceShip.update();
        enemySpaceShip.update();
        for (let i = 0; i <= numberOfMeteorites; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite[i].x += rychlost * Math.sin(meteoriteAngle[i]);
            meteorite[i].y += rychlost * Math.cos(meteoriteAngle[i]);
            meteorite[i].update();
        }
        for (let i = 0; i <= numberOfMeteorites2; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite2[i].x += rychlost * Math.sin(meteoriteAngle2[i]);
            meteorite2[i].y += rychlost * Math.cos(meteoriteAngle2[i]);
            meteorite2[i].update();
        }
        for (let i = 0; i <= numberOfMeteorites3; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite3[i].x += rychlost * Math.sin(meteoriteAngle3[i]);
            meteorite3[i].y += rychlost * Math.cos(meteoriteAngle3[i]);
            meteorite3[i].update();
        }
        for (let i = 0; i <= numberOfMeteorites4; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite4[i].x += rychlost * Math.sin(meteoriteAngle4[i]);
            meteorite4[i].y += rychlost * Math.cos(meteoriteAngle4[i]);
            meteorite4[i].update();
        }
        for (let i = 0; i <= m; i++) {
            strelaShipPole[i].x += 5 * Math.sin(strelaShipAngle[i]);
            strelaShipPole[i].y -= 5 * Math.cos(strelaShipAngle[i]);
            strelaShipPole[i].update();
        }
        for (let i = 0; i <= n; i++) {
            strelaPole[i].x += 5 * Math.sin(strelaAngle[i]);
            strelaPole[i].y -= 5 * Math.cos(strelaAngle[i]);
            strelaPole[i].update();
        }
    }
    else if (mySpaceShip.crashWith(horniStena) && enemySpaceShip.crashWith(horniStena) && enemySpaceShip.crashWith(levaStena)) {
        let a = Math.floor(Math.random()*(600)+0);
        let b = Math.floor(Math.random()*(600)+0);
        let c = Math.floor(Math.random()*(600)+0);
        let d = Math.floor(Math.random()*(600)+0);
        if (meteoriteCreation[a]) {
            let x = (Math.random()*(101)-50);
            numberOfMeteorites += 1;
            meteorite[numberOfMeteorites] = new component(25.86666666, 18, "IMAGES/meteorite.png", 375, -50, "image");
            meteoriteAngle[numberOfMeteorites] = x * Math.PI / 180;
        }
        if (meteoriteCreation2[b]) {
            let x = (Math.random()*(61)-120);
            numberOfMeteorites2 += 1;
            meteorite2[numberOfMeteorites2] = new component(25.86666666, 18, "IMAGES/meteorite.png", 800, 225, "image");
            meteoriteAngle2[numberOfMeteorites2] = x * Math.PI / 180;
        }
        if (meteoriteCreation3[c]) {
            let x = (Math.random()*(101)+130);
            numberOfMeteorites3 += 1;
            meteorite3[numberOfMeteorites3] = new component(25.86666666, 18, "IMAGES/meteorite.png", 375, 500, "image");
            meteoriteAngle3[numberOfMeteorites3] = x * Math.PI / 180;
        }
        if (meteoriteCreation4[d]) {
            let x = (Math.random()*(61)+60);
            numberOfMeteorites4 += 1;
            meteorite4[numberOfMeteorites4] = new component(25.86666666, 18, "IMAGES/meteorite.png", -50, 225, "image");
            meteoriteAngle4[numberOfMeteorites4] = x * Math.PI / 180;
        }
        checkCollisionWithMySpaceShip(meteorite);
        checkCollisionWithMySpaceShip(meteorite2);
        checkCollisionWithMySpaceShip(meteorite3);
        checkCollisionWithMySpaceShip(meteorite4);
        enemyShip1.reloadMana();
        spaceShip1.reloadMana();
        mySpaceShip.shoot(spaceShip1);
        enemySpaceShip.shoot(enemyShip1);
        mySpaceShip.y += 3;
        enemySpaceShip.x += 4;
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
        if (myGameArea.keys && myGameArea.keys [40]) {enemySpaceShip.speed = -1.5; }
        if (myGameArea.keys && myGameArea.keys [38]) {enemySpaceShip.speed = 2.5; }
        mySpaceShip.newPos();
        enemySpaceShip.newPos();
        mySpaceShip.update();
        enemySpaceShip.update();
        for (let i = 0; i <= numberOfMeteorites; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite[i].x += rychlost * Math.sin(meteoriteAngle[i]);
            meteorite[i].y += rychlost * Math.cos(meteoriteAngle[i]);
            meteorite[i].update();
        }
        for (let i = 0; i <= numberOfMeteorites2; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite2[i].x += rychlost * Math.sin(meteoriteAngle2[i]);
            meteorite2[i].y += rychlost * Math.cos(meteoriteAngle2[i]);
            meteorite2[i].update();
        }
        for (let i = 0; i <= numberOfMeteorites3; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite3[i].x += rychlost * Math.sin(meteoriteAngle3[i]);
            meteorite3[i].y += rychlost * Math.cos(meteoriteAngle3[i]);
            meteorite3[i].update();
        }
        for (let i = 0; i <= numberOfMeteorites4; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite4[i].x += rychlost * Math.sin(meteoriteAngle4[i]);
            meteorite4[i].y += rychlost * Math.cos(meteoriteAngle4[i]);
            meteorite4[i].update();
        }
        for (let i = 0; i <= m; i++) {
            strelaShipPole[i].x += 5 * Math.sin(strelaShipAngle[i]);
            strelaShipPole[i].y -= 5 * Math.cos(strelaShipAngle[i]);
            strelaShipPole[i].update();
        }
        for (let i = 0; i <= n; i++) {
            strelaPole[i].x += 5 * Math.sin(strelaAngle[i]);
            strelaPole[i].y -= 5 * Math.cos(strelaAngle[i]);
            strelaPole[i].update();
        }
    }
    else if (mySpaceShip.crashWith(levaStena) && enemySpaceShip.crashWith(horniStena) && enemySpaceShip.crashWith(levaStena)) {
        let a = Math.floor(Math.random()*(600)+0);
        let b = Math.floor(Math.random()*(600)+0);
        let c = Math.floor(Math.random()*(600)+0);
        let d = Math.floor(Math.random()*(600)+0);
        if (meteoriteCreation[a]) {
            let x = (Math.random()*(101)-50);
            numberOfMeteorites += 1;
            meteorite[numberOfMeteorites] = new component(25.86666666, 18, "IMAGES/meteorite.png", 375, -50, "image");
            meteoriteAngle[numberOfMeteorites] = x * Math.PI / 180;
        }
        if (meteoriteCreation2[b]) {
            let x = (Math.random()*(61)-120);
            numberOfMeteorites2 += 1;
            meteorite2[numberOfMeteorites2] = new component(25.86666666, 18, "IMAGES/meteorite.png", 800, 225, "image");
            meteoriteAngle2[numberOfMeteorites2] = x * Math.PI / 180;
        }
        if (meteoriteCreation3[c]) {
            let x = (Math.random()*(101)+130);
            numberOfMeteorites3 += 1;
            meteorite3[numberOfMeteorites3] = new component(25.86666666, 18, "IMAGES/meteorite.png", 375, 500, "image");
            meteoriteAngle3[numberOfMeteorites3] = x * Math.PI / 180;
        }
        if (meteoriteCreation4[d]) {
            let x = (Math.random()*(61)+60);
            numberOfMeteorites4 += 1;
            meteorite4[numberOfMeteorites4] = new component(25.86666666, 18, "IMAGES/meteorite.png", -50, 225, "image");
            meteoriteAngle4[numberOfMeteorites4] = x * Math.PI / 180;
        }
        checkCollisionWithMySpaceShip(meteorite);
        checkCollisionWithMySpaceShip(meteorite2);
        checkCollisionWithMySpaceShip(meteorite3);
        checkCollisionWithMySpaceShip(meteorite4);
        enemyShip1.reloadMana();
        spaceShip1.reloadMana();
        mySpaceShip.shoot(spaceShip1);
        enemySpaceShip.shoot(enemyShip1);
        mySpaceShip.x += 3;
        enemySpaceShip.x += 5;
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
        if (myGameArea.keys && myGameArea.keys [40]) {enemySpaceShip.speed = -1.5; }
        if (myGameArea.keys && myGameArea.keys [38]) {enemySpaceShip.speed = 2.5; }
        mySpaceShip.newPos();
        enemySpaceShip.newPos();
        mySpaceShip.update();
        enemySpaceShip.update();
        for (let i = 0; i <= numberOfMeteorites; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite[i].x += rychlost * Math.sin(meteoriteAngle[i]);
            meteorite[i].y += rychlost * Math.cos(meteoriteAngle[i]);
            meteorite[i].update();
        }
        for (let i = 0; i <= numberOfMeteorites2; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite2[i].x += rychlost * Math.sin(meteoriteAngle2[i]);
            meteorite2[i].y += rychlost * Math.cos(meteoriteAngle2[i]);
            meteorite2[i].update();
        }
        for (let i = 0; i <= numberOfMeteorites3; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite3[i].x += rychlost * Math.sin(meteoriteAngle3[i]);
            meteorite3[i].y += rychlost * Math.cos(meteoriteAngle3[i]);
            meteorite3[i].update();
        }
        for (let i = 0; i <= numberOfMeteorites4; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite4[i].x += rychlost * Math.sin(meteoriteAngle4[i]);
            meteorite4[i].y += rychlost * Math.cos(meteoriteAngle4[i]);
            meteorite4[i].update();
        }
        for (let i = 0; i <= m; i++) {
            strelaShipPole[i].x += 5 * Math.sin(strelaShipAngle[i]);
            strelaShipPole[i].y -= 5 * Math.cos(strelaShipAngle[i]);
            strelaShipPole[i].update();
        }
        for (let i = 0; i <= n; i++) {
            strelaPole[i].x += 5 * Math.sin(strelaAngle[i]);
            strelaPole[i].y -= 5 * Math.cos(strelaAngle[i]);
            strelaPole[i].update();
        }
    }
    else if (mySpaceShip.crashWith(horniStena) && mySpaceShip.crashWith(levaStena)) {
        let a = Math.floor(Math.random()*(600)+0);
        let b = Math.floor(Math.random()*(600)+0);
        let c = Math.floor(Math.random()*(600)+0);
        let d = Math.floor(Math.random()*(600)+0);
        if (meteoriteCreation[a]) {
            let x = (Math.random()*(101)-50);
            numberOfMeteorites += 1;
            meteorite[numberOfMeteorites] = new component(25.86666666, 18, "IMAGES/meteorite.png", 375, -50, "image");
            meteoriteAngle[numberOfMeteorites] = x * Math.PI / 180;
        }
        if (meteoriteCreation2[b]) {
            let x = (Math.random()*(61)-120);
            numberOfMeteorites2 += 1;
            meteorite2[numberOfMeteorites2] = new component(25.86666666, 18, "IMAGES/meteorite.png", 800, 225, "image");
            meteoriteAngle2[numberOfMeteorites2] = x * Math.PI / 180;
        }
        if (meteoriteCreation3[c]) {
            let x = (Math.random()*(101)+130);
            numberOfMeteorites3 += 1;
            meteorite3[numberOfMeteorites3] = new component(25.86666666, 18, "IMAGES/meteorite.png", 375, 500, "image");
            meteoriteAngle3[numberOfMeteorites3] = x * Math.PI / 180;
        }
        if (meteoriteCreation4[d]) {
            let x = (Math.random()*(61)+60);
            numberOfMeteorites4 += 1;
            meteorite4[numberOfMeteorites4] = new component(25.86666666, 18, "IMAGES/meteorite.png", -50, 225, "image");
            meteoriteAngle4[numberOfMeteorites4] = x * Math.PI / 180;
        }
        checkCollisionWithMySpaceShip(meteorite);
        checkCollisionWithMySpaceShip(meteorite2);
        checkCollisionWithMySpaceShip(meteorite3);
        checkCollisionWithMySpaceShip(meteorite4);
        enemyShip1.reloadMana();
        spaceShip1.reloadMana();
        mySpaceShip.shoot(spaceShip1);
        enemySpaceShip.shoot(enemyShip1);
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
        if (myGameArea.keys && myGameArea.keys [40]) {enemySpaceShip.speed = -1.5; }
        if (myGameArea.keys && myGameArea.keys [38]) {enemySpaceShip.speed = 2.5; }
        mySpaceShip.newPos();
        enemySpaceShip.newPos();
        mySpaceShip.update();
        enemySpaceShip.update();
        for (let i = 0; i <= numberOfMeteorites; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite[i].x += rychlost * Math.sin(meteoriteAngle[i]);
            meteorite[i].y += rychlost * Math.cos(meteoriteAngle[i]);
            meteorite[i].update();
        }
        for (let i = 0; i <= numberOfMeteorites2; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite2[i].x += rychlost * Math.sin(meteoriteAngle2[i]);
            meteorite2[i].y += rychlost * Math.cos(meteoriteAngle2[i]);
            meteorite2[i].update();
        }
        for (let i = 0; i <= numberOfMeteorites3; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite3[i].x += rychlost * Math.sin(meteoriteAngle3[i]);
            meteorite3[i].y += rychlost * Math.cos(meteoriteAngle3[i]);
            meteorite3[i].update();
        }
        for (let i = 0; i <= numberOfMeteorites4; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite4[i].x += rychlost * Math.sin(meteoriteAngle4[i]);
            meteorite4[i].y += rychlost * Math.cos(meteoriteAngle4[i]);
            meteorite4[i].update();
        }
        for (let i = 0; i <= m; i++) {
            strelaShipPole[i].x += 5 * Math.sin(strelaShipAngle[i]);
            strelaShipPole[i].y -= 5 * Math.cos(strelaShipAngle[i]);
            strelaShipPole[i].update();
        }
        for (let i = 0; i <= n; i++) {
            strelaPole[i].x += 5 * Math.sin(strelaAngle[i]);
            strelaPole[i].y -= 5 * Math.cos(strelaAngle[i]);
            strelaPole[i].update();
        }
    }
    else if (mySpaceShip.crashWith(horniStena)) {
        let a = Math.floor(Math.random()*(600)+0);
        let b = Math.floor(Math.random()*(600)+0);
        let c = Math.floor(Math.random()*(600)+0);
        let d = Math.floor(Math.random()*(600)+0);
        if (meteoriteCreation[a]) {
            let x = (Math.random()*(101)-50);
            numberOfMeteorites += 1;
            meteorite[numberOfMeteorites] = new component(25.86666666, 18, "IMAGES/meteorite.png", 375, -50, "image");
            meteoriteAngle[numberOfMeteorites] = x * Math.PI / 180;
        }
        if (meteoriteCreation2[b]) {
            let x = (Math.random()*(61)-120);
            numberOfMeteorites2 += 1;
            meteorite2[numberOfMeteorites2] = new component(25.86666666, 18, "IMAGES/meteorite.png", 800, 225, "image");
            meteoriteAngle2[numberOfMeteorites2] = x * Math.PI / 180;
        }
        if (meteoriteCreation3[c]) {
            let x = (Math.random()*(101)+130);
            numberOfMeteorites3 += 1;
            meteorite3[numberOfMeteorites3] = new component(25.86666666, 18, "IMAGES/meteorite.png", 375, 500, "image");
            meteoriteAngle3[numberOfMeteorites3] = x * Math.PI / 180;
        }
        if (meteoriteCreation4[d]) {
            let x = (Math.random()*(61)+60);
            numberOfMeteorites4 += 1;
            meteorite4[numberOfMeteorites4] = new component(25.86666666, 18, "IMAGES/meteorite.png", -50, 225, "image");
            meteoriteAngle4[numberOfMeteorites4] = x * Math.PI / 180;
        }
        checkCollisionWithMySpaceShip(meteorite);
        checkCollisionWithMySpaceShip(meteorite2);
        checkCollisionWithMySpaceShip(meteorite3);
        checkCollisionWithMySpaceShip(meteorite4);
        enemyShip1.reloadMana();
        spaceShip1.reloadMana();
        mySpaceShip.shoot(spaceShip1);
        enemySpaceShip.shoot(enemyShip1);
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
        if (myGameArea.keys && myGameArea.keys [40]) {enemySpaceShip.speed = -1.5; }
        if (myGameArea.keys && myGameArea.keys [38]) {enemySpaceShip.speed = 2.5; }
        mySpaceShip.newPos();
        enemySpaceShip.newPos();
        mySpaceShip.update();
        enemySpaceShip.update();
        for (let i = 0; i <= numberOfMeteorites; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite[i].x += rychlost * Math.sin(meteoriteAngle[i]);
            meteorite[i].y += rychlost * Math.cos(meteoriteAngle[i]);
            meteorite[i].update();
        }
        for (let i = 0; i <= numberOfMeteorites2; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite2[i].x += rychlost * Math.sin(meteoriteAngle2[i]);
            meteorite2[i].y += rychlost * Math.cos(meteoriteAngle2[i]);
            meteorite2[i].update();
        }
        for (let i = 0; i <= numberOfMeteorites3; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite3[i].x += rychlost * Math.sin(meteoriteAngle3[i]);
            meteorite3[i].y += rychlost * Math.cos(meteoriteAngle3[i]);
            meteorite3[i].update();
        }
        for (let i = 0; i <= numberOfMeteorites4; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite4[i].x += rychlost * Math.sin(meteoriteAngle4[i]);
            meteorite4[i].y += rychlost * Math.cos(meteoriteAngle4[i]);
            meteorite4[i].update();
        }
        for (let i = 0; i <= m; i++) {
            strelaShipPole[i].x += 5 * Math.sin(strelaShipAngle[i]);
            strelaShipPole[i].y -= 5 * Math.cos(strelaShipAngle[i]);
            strelaShipPole[i].update();
        }
        for (let i = 0; i <= n; i++) {
            strelaPole[i].x += 5 * Math.sin(strelaAngle[i]);
            strelaPole[i].y -= 5 * Math.cos(strelaAngle[i]);
            strelaPole[i].update();
        }
    }
    else if (enemySpaceShip.crashWith(horniStena)) {
        let a = Math.floor(Math.random()*(600)+0);
        let b = Math.floor(Math.random()*(600)+0);
        let c = Math.floor(Math.random()*(600)+0);
        let d = Math.floor(Math.random()*(600)+0);
        if (meteoriteCreation[a]) {
            let x = (Math.random()*(101)-50);
            numberOfMeteorites += 1;
            meteorite[numberOfMeteorites] = new component(25.86666666, 18, "IMAGES/meteorite.png", 375, -50, "image");
            meteoriteAngle[numberOfMeteorites] = x * Math.PI / 180;
        }
        if (meteoriteCreation2[b]) {
            let x = (Math.random()*(61)-120);
            numberOfMeteorites2 += 1;
            meteorite2[numberOfMeteorites2] = new component(25.86666666, 18, "IMAGES/meteorite.png", 800, 225, "image");
            meteoriteAngle2[numberOfMeteorites2] = x * Math.PI / 180;
        }
        if (meteoriteCreation3[c]) {
            let x = (Math.random()*(101)+130);
            numberOfMeteorites3 += 1;
            meteorite3[numberOfMeteorites3] = new component(25.86666666, 18, "IMAGES/meteorite.png", 375, 500, "image");
            meteoriteAngle3[numberOfMeteorites3] = x * Math.PI / 180;
        }
        if (meteoriteCreation4[d]) {
            let x = (Math.random()*(61)+60);
            numberOfMeteorites4 += 1;
            meteorite4[numberOfMeteorites4] = new component(25.86666666, 18, "IMAGES/meteorite.png", -50, 225, "image");
            meteoriteAngle4[numberOfMeteorites4] = x * Math.PI / 180;
        }
        checkCollisionWithMySpaceShip(meteorite);
        checkCollisionWithMySpaceShip(meteorite2);
        checkCollisionWithMySpaceShip(meteorite3);
        checkCollisionWithMySpaceShip(meteorite4);
        enemyShip1.reloadMana();
        spaceShip1.reloadMana();
        mySpaceShip.shoot(spaceShip1);
        enemySpaceShip.shoot(enemyShip1);
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
        if (myGameArea.keys && myGameArea.keys [40]) {enemySpaceShip.speed = -1.5; }
        if (myGameArea.keys && myGameArea.keys [38]) {enemySpaceShip.speed = 2.5; }
        mySpaceShip.newPos();
        enemySpaceShip.newPos();
        mySpaceShip.update();
        enemySpaceShip.update();
        for (let i = 0; i <= numberOfMeteorites; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite[i].x += rychlost * Math.sin(meteoriteAngle[i]);
            meteorite[i].y += rychlost * Math.cos(meteoriteAngle[i]);
            meteorite[i].update();
        }
        for (let i = 0; i <= numberOfMeteorites2; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite2[i].x += rychlost * Math.sin(meteoriteAngle2[i]);
            meteorite2[i].y += rychlost * Math.cos(meteoriteAngle2[i]);
            meteorite2[i].update();
        }
        for (let i = 0; i <= numberOfMeteorites3; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite3[i].x += rychlost * Math.sin(meteoriteAngle3[i]);
            meteorite3[i].y += rychlost * Math.cos(meteoriteAngle3[i]);
            meteorite3[i].update();
        }
        for (let i = 0; i <= numberOfMeteorites4; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite4[i].x += rychlost * Math.sin(meteoriteAngle4[i]);
            meteorite4[i].y += rychlost * Math.cos(meteoriteAngle4[i]);
            meteorite4[i].update();
        }
        for (let i = 0; i <= m; i++) {
            strelaShipPole[i].x += 5 * Math.sin(strelaShipAngle[i]);
            strelaShipPole[i].y -= 5 * Math.cos(strelaShipAngle[i]);
            strelaShipPole[i].update();
        }
        for (let i = 0; i <= n; i++) {
            strelaPole[i].x += 5 * Math.sin(strelaAngle[i]);
            strelaPole[i].y -= 5 * Math.cos(strelaAngle[i]);
            strelaPole[i].update();
        }
    }
    else if (mySpaceShip.crashWith(spodniStena)) {
        let a = Math.floor(Math.random()*(600)+0);
        let b = Math.floor(Math.random()*(600)+0);
        let c = Math.floor(Math.random()*(600)+0);
        let d = Math.floor(Math.random()*(600)+0);
        if (meteoriteCreation[a]) {
            let x = (Math.random()*(101)-50);
            numberOfMeteorites += 1;
            meteorite[numberOfMeteorites] = new component(25.86666666, 18, "IMAGES/meteorite.png", 375, -50, "image");
            meteoriteAngle[numberOfMeteorites] = x * Math.PI / 180;
        }
        if (meteoriteCreation2[b]) {
            let x = (Math.random()*(61)-120);
            numberOfMeteorites2 += 1;
            meteorite2[numberOfMeteorites2] = new component(25.86666666, 18, "IMAGES/meteorite.png", 800, 225, "image");
            meteoriteAngle2[numberOfMeteorites2] = x * Math.PI / 180;
        }
        if (meteoriteCreation3[c]) {
            let x = (Math.random()*(101)+130);
            numberOfMeteorites3 += 1;
            meteorite3[numberOfMeteorites3] = new component(25.86666666, 18, "IMAGES/meteorite.png", 375, 500, "image");
            meteoriteAngle3[numberOfMeteorites3] = x * Math.PI / 180;
        }
        if (meteoriteCreation4[d]) {
            let x = (Math.random()*(61)+60);
            numberOfMeteorites4 += 1;
            meteorite4[numberOfMeteorites4] = new component(25.86666666, 18, "IMAGES/meteorite.png", -50, 225, "image");
            meteoriteAngle4[numberOfMeteorites4] = x * Math.PI / 180;
        }
        checkCollisionWithMySpaceShip(meteorite);
        checkCollisionWithMySpaceShip(meteorite2);
        checkCollisionWithMySpaceShip(meteorite3);
        checkCollisionWithMySpaceShip(meteorite4);
        enemyShip1.reloadMana();
        spaceShip1.reloadMana();
        mySpaceShip.shoot(spaceShip1);
        enemySpaceShip.shoot(enemyShip1);
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
        if (myGameArea.keys && myGameArea.keys [40]) {enemySpaceShip.speed = -1.5; }
        if (myGameArea.keys && myGameArea.keys [38]) {enemySpaceShip.speed = 2.5; }
        mySpaceShip.newPos();
        enemySpaceShip.newPos();
        mySpaceShip.update();
        enemySpaceShip.update();
        for (let i = 0; i <= numberOfMeteorites; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite[i].x += rychlost * Math.sin(meteoriteAngle[i]);
            meteorite[i].y += rychlost * Math.cos(meteoriteAngle[i]);
            meteorite[i].update();
        }
        for (let i = 0; i <= numberOfMeteorites2; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite2[i].x += rychlost * Math.sin(meteoriteAngle2[i]);
            meteorite2[i].y += rychlost * Math.cos(meteoriteAngle2[i]);
            meteorite2[i].update();
        }
        for (let i = 0; i <= numberOfMeteorites3; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite3[i].x += rychlost * Math.sin(meteoriteAngle3[i]);
            meteorite3[i].y += rychlost * Math.cos(meteoriteAngle3[i]);
            meteorite3[i].update();
        }
        for (let i = 0; i <= numberOfMeteorites4; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite4[i].x += rychlost * Math.sin(meteoriteAngle4[i]);
            meteorite4[i].y += rychlost * Math.cos(meteoriteAngle4[i]);
            meteorite4[i].update();
        }
        for (let i = 0; i <= m; i++) {
            strelaShipPole[i].x += 5 * Math.sin(strelaShipAngle[i]);
            strelaShipPole[i].y -= 5 * Math.cos(strelaShipAngle[i]);
            strelaShipPole[i].update();
        }
        for (let i = 0; i <= n; i++) {
            strelaPole[i].x += 5 * Math.sin(strelaAngle[i]);
            strelaPole[i].y -= 5 * Math.cos(strelaAngle[i]);
            strelaPole[i].update();
        }
    }
    else if (enemySpaceShip.crashWith(spodniStena)) {
        let a = Math.floor(Math.random()*(600)+0);
        let b = Math.floor(Math.random()*(600)+0);
        let c = Math.floor(Math.random()*(600)+0);
        let d = Math.floor(Math.random()*(600)+0);
        if (meteoriteCreation[a]) {
            let x = (Math.random()*(101)-50);
            numberOfMeteorites += 1;
            meteorite[numberOfMeteorites] = new component(25.86666666, 18, "IMAGES/meteorite.png", 375, -50, "image");
            meteoriteAngle[numberOfMeteorites] = x * Math.PI / 180;
        }
        if (meteoriteCreation2[b]) {
            let x = (Math.random()*(61)-120);
            numberOfMeteorites2 += 1;
            meteorite2[numberOfMeteorites2] = new component(25.86666666, 18, "IMAGES/meteorite.png", 800, 225, "image");
            meteoriteAngle2[numberOfMeteorites2] = x * Math.PI / 180;
        }
        if (meteoriteCreation3[c]) {
            let x = (Math.random()*(101)+130);
            numberOfMeteorites3 += 1;
            meteorite3[numberOfMeteorites3] = new component(25.86666666, 18, "IMAGES/meteorite.png", 375, 500, "image");
            meteoriteAngle3[numberOfMeteorites3] = x * Math.PI / 180;
        }
        if (meteoriteCreation4[d]) {
            let x = (Math.random()*(61)+60);
            numberOfMeteorites4 += 1;
            meteorite4[numberOfMeteorites4] = new component(25.86666666, 18, "IMAGES/meteorite.png", -50, 225, "image");
            meteoriteAngle4[numberOfMeteorites4] = x * Math.PI / 180;
        }
        checkCollisionWithMySpaceShip(meteorite);
        checkCollisionWithMySpaceShip(meteorite2);
        checkCollisionWithMySpaceShip(meteorite3);
        checkCollisionWithMySpaceShip(meteorite4);
        enemyShip1.reloadMana();
        spaceShip1.reloadMana();
        mySpaceShip.shoot(spaceShip1);
        enemySpaceShip.shoot(enemyShip1);
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
        if (myGameArea.keys && myGameArea.keys [40]) {enemySpaceShip.speed = -1.5; }
        if (myGameArea.keys && myGameArea.keys [38]) {enemySpaceShip.speed = 2.5; }
        mySpaceShip.newPos();
        enemySpaceShip.newPos();
        mySpaceShip.update();
        enemySpaceShip.update();
        for (let i = 0; i <= numberOfMeteorites; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite[i].x += rychlost * Math.sin(meteoriteAngle[i]);
            meteorite[i].y += rychlost * Math.cos(meteoriteAngle[i]);
            meteorite[i].update();
        }
        for (let i = 0; i <= numberOfMeteorites2; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite2[i].x += rychlost * Math.sin(meteoriteAngle2[i]);
            meteorite2[i].y += rychlost * Math.cos(meteoriteAngle2[i]);
            meteorite2[i].update();
        }
        for (let i = 0; i <= numberOfMeteorites3; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite3[i].x += rychlost * Math.sin(meteoriteAngle3[i]);
            meteorite3[i].y += rychlost * Math.cos(meteoriteAngle3[i]);
            meteorite3[i].update();
        }
        for (let i = 0; i <= numberOfMeteorites4; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite4[i].x += rychlost * Math.sin(meteoriteAngle4[i]);
            meteorite4[i].y += rychlost * Math.cos(meteoriteAngle4[i]);
            meteorite4[i].update();
        }
        for (let i = 0; i <= m; i++) {
            strelaShipPole[i].x += 5 * Math.sin(strelaShipAngle[i]);
            strelaShipPole[i].y -= 5 * Math.cos(strelaShipAngle[i]);
            strelaShipPole[i].update();
        }
        for (let i = 0; i <= n; i++) {
            strelaPole[i].x += 5 * Math.sin(strelaAngle[i]);
            strelaPole[i].y -= 5 * Math.cos(strelaAngle[i]);
            strelaPole[i].update();
        }
    }
    else if (mySpaceShip.crashWith(pravaStena)) {
        let a = Math.floor(Math.random()*(600)+0);
        let b = Math.floor(Math.random()*(600)+0);
        let c = Math.floor(Math.random()*(600)+0);
        let d = Math.floor(Math.random()*(600)+0);
        if (meteoriteCreation[a]) {
            let x = (Math.random()*(101)-50);
            numberOfMeteorites += 1;
            meteorite[numberOfMeteorites] = new component(25.86666666, 18, "IMAGES/meteorite.png", 375, -50, "image");
            meteoriteAngle[numberOfMeteorites] = x * Math.PI / 180;
        }
        if (meteoriteCreation2[b]) {
            let x = (Math.random()*(61)-120);
            numberOfMeteorites2 += 1;
            meteorite2[numberOfMeteorites2] = new component(25.86666666, 18, "IMAGES/meteorite.png", 800, 225, "image");
            meteoriteAngle2[numberOfMeteorites2] = x * Math.PI / 180;
        }
        if (meteoriteCreation3[c]) {
            let x = (Math.random()*(101)+130);
            numberOfMeteorites3 += 1;
            meteorite3[numberOfMeteorites3] = new component(25.86666666, 18, "IMAGES/meteorite.png", 375, 500, "image");
            meteoriteAngle3[numberOfMeteorites3] = x * Math.PI / 180;
        }
        if (meteoriteCreation4[d]) {
            let x = (Math.random()*(61)+60);
            numberOfMeteorites4 += 1;
            meteorite4[numberOfMeteorites4] = new component(25.86666666, 18, "IMAGES/meteorite.png", -50, 225, "image");
            meteoriteAngle4[numberOfMeteorites4] = x * Math.PI / 180;
        }
        checkCollisionWithMySpaceShip(meteorite);
        checkCollisionWithMySpaceShip(meteorite2);
        checkCollisionWithMySpaceShip(meteorite3);
        checkCollisionWithMySpaceShip(meteorite4);
        enemyShip1.reloadMana();
        spaceShip1.reloadMana();
        mySpaceShip.shoot(spaceShip1);
        enemySpaceShip.shoot(enemyShip1);
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
        if (myGameArea.keys && myGameArea.keys [40]) {enemySpaceShip.speed = -1.5; }
        if (myGameArea.keys && myGameArea.keys [38]) {enemySpaceShip.speed = 2.5; }
        mySpaceShip.newPos();
        enemySpaceShip.newPos();
        mySpaceShip.update();
        enemySpaceShip.update();
        for (let i = 0; i <= numberOfMeteorites; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite[i].x += rychlost * Math.sin(meteoriteAngle[i]);
            meteorite[i].y += rychlost * Math.cos(meteoriteAngle[i]);
            meteorite[i].update();
        }
        for (let i = 0; i <= numberOfMeteorites2; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite2[i].x += rychlost * Math.sin(meteoriteAngle2[i]);
            meteorite2[i].y += rychlost * Math.cos(meteoriteAngle2[i]);
            meteorite2[i].update();
        }
        for (let i = 0; i <= numberOfMeteorites3; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite3[i].x += rychlost * Math.sin(meteoriteAngle3[i]);
            meteorite3[i].y += rychlost * Math.cos(meteoriteAngle3[i]);
            meteorite3[i].update();
        }
        for (let i = 0; i <= numberOfMeteorites4; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite4[i].x += rychlost * Math.sin(meteoriteAngle4[i]);
            meteorite4[i].y += rychlost * Math.cos(meteoriteAngle4[i]);
            meteorite4[i].update();
        }
        for (let i = 0; i <= m; i++) {
            strelaShipPole[i].x += 5 * Math.sin(strelaShipAngle[i]);
            strelaShipPole[i].y -= 5 * Math.cos(strelaShipAngle[i]);
            strelaShipPole[i].update();
        }
        for (let i = 0; i <= n; i++) {
            strelaPole[i].x += 5 * Math.sin(strelaAngle[i]);
            strelaPole[i].y -= 5 * Math.cos(strelaAngle[i]);
            strelaPole[i].update();
        }
    }
    else if (enemySpaceShip.crashWith(pravaStena)) {
        let a = Math.floor(Math.random()*(600)+0);
        let b = Math.floor(Math.random()*(600)+0);
        let c = Math.floor(Math.random()*(600)+0);
        let d = Math.floor(Math.random()*(600)+0);
        if (meteoriteCreation[a]) {
            let x = (Math.random()*(101)-50);
            numberOfMeteorites += 1;
            meteorite[numberOfMeteorites] = new component(25.86666666, 18, "IMAGES/meteorite.png", 375, -50, "image");
            meteoriteAngle[numberOfMeteorites] = x * Math.PI / 180;
        }
        if (meteoriteCreation2[b]) {
            let x = (Math.random()*(61)-120);
            numberOfMeteorites2 += 1;
            meteorite2[numberOfMeteorites2] = new component(25.86666666, 18, "IMAGES/meteorite.png", 800, 225, "image");
            meteoriteAngle2[numberOfMeteorites2] = x * Math.PI / 180;
        }
        if (meteoriteCreation3[c]) {
            let x = (Math.random()*(101)+130);
            numberOfMeteorites3 += 1;
            meteorite3[numberOfMeteorites3] = new component(25.86666666, 18, "IMAGES/meteorite.png", 375, 500, "image");
            meteoriteAngle3[numberOfMeteorites3] = x * Math.PI / 180;
        }
        if (meteoriteCreation4[d]) {
            let x = (Math.random()*(61)+60);
            numberOfMeteorites4 += 1;
            meteorite4[numberOfMeteorites4] = new component(25.86666666, 18, "IMAGES/meteorite.png", -50, 225, "image");
            meteoriteAngle4[numberOfMeteorites4] = x * Math.PI / 180;
        }
        checkCollisionWithMySpaceShip(meteorite);
        checkCollisionWithMySpaceShip(meteorite2);
        checkCollisionWithMySpaceShip(meteorite3);
        checkCollisionWithMySpaceShip(meteorite4);
        enemyShip1.reloadMana();
        spaceShip1.reloadMana();
        mySpaceShip.shoot(spaceShip1);
        enemySpaceShip.shoot(enemyShip1);
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
        if (myGameArea.keys && myGameArea.keys [40]) {enemySpaceShip.speed = -1.5; }
        if (myGameArea.keys && myGameArea.keys [38]) {enemySpaceShip.speed = 2.5; }
        mySpaceShip.newPos();
        enemySpaceShip.newPos();
        mySpaceShip.update();
        enemySpaceShip.update();
        for (let i = 0; i <= numberOfMeteorites; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite[i].x += rychlost * Math.sin(meteoriteAngle[i]);
            meteorite[i].y += rychlost * Math.cos(meteoriteAngle[i]);
            meteorite[i].update();
        }
        for (let i = 0; i <= numberOfMeteorites2; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite2[i].x += rychlost * Math.sin(meteoriteAngle2[i]);
            meteorite2[i].y += rychlost * Math.cos(meteoriteAngle2[i]);
            meteorite2[i].update();
        }
        for (let i = 0; i <= numberOfMeteorites3; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite3[i].x += rychlost * Math.sin(meteoriteAngle3[i]);
            meteorite3[i].y += rychlost * Math.cos(meteoriteAngle3[i]);
            meteorite3[i].update();
        }
        for (let i = 0; i <= numberOfMeteorites4; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite4[i].x += rychlost * Math.sin(meteoriteAngle4[i]);
            meteorite4[i].y += rychlost * Math.cos(meteoriteAngle4[i]);
            meteorite4[i].update();
        }
        for (let i = 0; i <= m; i++) {
            strelaShipPole[i].x += 5 * Math.sin(strelaShipAngle[i]);
            strelaShipPole[i].y -= 5 * Math.cos(strelaShipAngle[i]);
            strelaShipPole[i].update();
        }
        for (let i = 0; i <= n; i++) {
            strelaPole[i].x += 5 * Math.sin(strelaAngle[i]);
            strelaPole[i].y -= 5 * Math.cos(strelaAngle[i]);
            strelaPole[i].update();
        }
    }
    else if (enemySpaceShip.crashWith(levaStena)) {
        let a = Math.floor(Math.random()*(600)+0);
        let b = Math.floor(Math.random()*(600)+0);
        let c = Math.floor(Math.random()*(600)+0);
        let d = Math.floor(Math.random()*(600)+0);
        if (meteoriteCreation[a]) {
            let x = (Math.random()*(101)-50);
            numberOfMeteorites += 1;
            meteorite[numberOfMeteorites] = new component(25.86666666, 18, "IMAGES/meteorite.png", 375, -50, "image");
            meteoriteAngle[numberOfMeteorites] = x * Math.PI / 180;
        }
        if (meteoriteCreation2[b]) {
            let x = (Math.random()*(61)-120);
            numberOfMeteorites2 += 1;
            meteorite2[numberOfMeteorites2] = new component(25.86666666, 18, "IMAGES/meteorite.png", 800, 225, "image");
            meteoriteAngle2[numberOfMeteorites2] = x * Math.PI / 180;
        }
        if (meteoriteCreation3[c]) {
            let x = (Math.random()*(101)+130);
            numberOfMeteorites3 += 1;
            meteorite3[numberOfMeteorites3] = new component(25.86666666, 18, "IMAGES/meteorite.png", 375, 500, "image");
            meteoriteAngle3[numberOfMeteorites3] = x * Math.PI / 180;
        }
        if (meteoriteCreation4[d]) {
            let x = (Math.random()*(61)+60);
            numberOfMeteorites4 += 1;
            meteorite4[numberOfMeteorites4] = new component(25.86666666, 18, "IMAGES/meteorite.png", -50, 225, "image");
            meteoriteAngle4[numberOfMeteorites4] = x * Math.PI / 180;
        }
        checkCollisionWithMySpaceShip(meteorite);
        checkCollisionWithMySpaceShip(meteorite2);
        checkCollisionWithMySpaceShip(meteorite3);
        checkCollisionWithMySpaceShip(meteorite4);
        enemyShip1.reloadMana();
        spaceShip1.reloadMana();
        mySpaceShip.shoot(spaceShip1);
        enemySpaceShip.shoot(enemyShip1);
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
        if (myGameArea.keys && myGameArea.keys [40]) {enemySpaceShip.speed = -1.5; }
        if (myGameArea.keys && myGameArea.keys [38]) {enemySpaceShip.speed = 2.5; }
        mySpaceShip.newPos();
        enemySpaceShip.newPos();
        mySpaceShip.update();
        enemySpaceShip.update();
        for (let i = 0; i <= numberOfMeteorites; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite[i].x += rychlost * Math.sin(meteoriteAngle[i]);
            meteorite[i].y += rychlost * Math.cos(meteoriteAngle[i]);
            meteorite[i].update();
        }
        for (let i = 0; i <= numberOfMeteorites2; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite2[i].x += rychlost * Math.sin(meteoriteAngle2[i]);
            meteorite2[i].y += rychlost * Math.cos(meteoriteAngle2[i]);
            meteorite2[i].update();
        }
        for (let i = 0; i <= numberOfMeteorites3; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite3[i].x += rychlost * Math.sin(meteoriteAngle3[i]);
            meteorite3[i].y += rychlost * Math.cos(meteoriteAngle3[i]);
            meteorite3[i].update();
        }
        for (let i = 0; i <= numberOfMeteorites4; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite4[i].x += rychlost * Math.sin(meteoriteAngle4[i]);
            meteorite4[i].y += rychlost * Math.cos(meteoriteAngle4[i]);
            meteorite4[i].update();
        }
        for (let i = 0; i <= m; i++) {
            strelaShipPole[i].x += 5 * Math.sin(strelaShipAngle[i]);
            strelaShipPole[i].y -= 5 * Math.cos(strelaShipAngle[i]);
            strelaShipPole[i].update();
        }
        for (let i = 0; i <= n; i++) {
            strelaPole[i].x += 5 * Math.sin(strelaAngle[i]);
            strelaPole[i].y -= 5 * Math.cos(strelaAngle[i]);
            strelaPole[i].update();
        }
    }
    else if (mySpaceShip.crashWith(levaStena)) {
        let a = Math.floor(Math.random()*(600)+0);
        let b = Math.floor(Math.random()*(600)+0);
        let c = Math.floor(Math.random()*(600)+0);
        let d = Math.floor(Math.random()*(600)+0);
        if (meteoriteCreation[a]) {
            let x = (Math.random()*(101)-50);
            numberOfMeteorites += 1;
            meteorite[numberOfMeteorites] = new component(25.86666666, 18, "IMAGES/meteorite.png", 375, -50, "image");
            meteoriteAngle[numberOfMeteorites] = x * Math.PI / 180;
        }
        if (meteoriteCreation2[b]) {
            let x = (Math.random()*(61)-120);
            numberOfMeteorites2 += 1;
            meteorite2[numberOfMeteorites2] = new component(25.86666666, 18, "IMAGES/meteorite.png", 800, 225, "image");
            meteoriteAngle2[numberOfMeteorites2] = x * Math.PI / 180;
        }
        if (meteoriteCreation3[c]) {
            let x = (Math.random()*(101)+130);
            numberOfMeteorites3 += 1;
            meteorite3[numberOfMeteorites3] = new component(25.86666666, 18, "IMAGES/meteorite.png", 375, 500, "image");
            meteoriteAngle3[numberOfMeteorites3] = x * Math.PI / 180;
        }
        if (meteoriteCreation4[d]) {
            let x = (Math.random()*(61)+60);
            numberOfMeteorites4 += 1;
            meteorite4[numberOfMeteorites4] = new component(25.86666666, 18, "IMAGES/meteorite.png", -50, 225, "image");
            meteoriteAngle4[numberOfMeteorites4] = x * Math.PI / 180;
        }
        checkCollisionWithMySpaceShip(meteorite);
        checkCollisionWithMySpaceShip(meteorite2);
        checkCollisionWithMySpaceShip(meteorite3);
        checkCollisionWithMySpaceShip(meteorite4);
        enemyShip1.reloadMana();
        spaceShip1.reloadMana();
        mySpaceShip.shoot(spaceShip1);
        enemySpaceShip.shoot(enemyShip1);
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
        if (myGameArea.keys && myGameArea.keys [40]) {enemySpaceShip.speed = -1.5; }
        if (myGameArea.keys && myGameArea.keys [38]) {enemySpaceShip.speed = 2.5; }
        mySpaceShip.newPos();
        enemySpaceShip.newPos();
        mySpaceShip.update();
        enemySpaceShip.update();
        for (let i = 0; i <= numberOfMeteorites; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite[i].x += rychlost * Math.sin(meteoriteAngle[i]);
            meteorite[i].y += rychlost * Math.cos(meteoriteAngle[i]);
            meteorite[i].update();
        }
        for (let i = 0; i <= numberOfMeteorites2; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite2[i].x += rychlost * Math.sin(meteoriteAngle2[i]);
            meteorite2[i].y += rychlost * Math.cos(meteoriteAngle2[i]);
            meteorite2[i].update();
        }
        for (let i = 0; i <= numberOfMeteorites3; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite3[i].x += rychlost * Math.sin(meteoriteAngle3[i]);
            meteorite3[i].y += rychlost * Math.cos(meteoriteAngle3[i]);
            meteorite3[i].update();
        }
        for (let i = 0; i <= numberOfMeteorites4; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite4[i].x += rychlost * Math.sin(meteoriteAngle4[i]);
            meteorite4[i].y += rychlost * Math.cos(meteoriteAngle4[i]);
            meteorite4[i].update();
        }
        for (let i = 0; i <= m; i++) {
            strelaShipPole[i].x += 5 * Math.sin(strelaShipAngle[i]);
            strelaShipPole[i].y -= 5 * Math.cos(strelaShipAngle[i]);
            strelaShipPole[i].update();
        }
        for (let i = 0; i <= n; i++) {
            strelaPole[i].x += 5 * Math.sin(strelaAngle[i]);
            strelaPole[i].y -= 5 * Math.cos(strelaAngle[i]);
            strelaPole[i].update();
        }
    }
    else {
        let a = Math.floor(Math.random()*(600)+0);
        let b = Math.floor(Math.random()*(600)+0);
        let c = Math.floor(Math.random()*(600)+0);
        let d = Math.floor(Math.random()*(600)+0);
        if (meteoriteCreation[a]) {
            let x = (Math.random()*(101)-50);
            numberOfMeteorites += 1;
            meteorite[numberOfMeteorites] = new component(25.86666666, 18, "IMAGES/meteorite.png", 375, -50, "image");
            meteoriteAngle[numberOfMeteorites] = x * Math.PI / 180;
        }
        if (meteoriteCreation2[b]) {
            let x = (Math.random()*(61)-120);
            numberOfMeteorites2 += 1;
            meteorite2[numberOfMeteorites2] = new component(25.86666666, 18, "IMAGES/meteorite.png", 800, 225, "image");
            meteoriteAngle2[numberOfMeteorites2] = x * Math.PI / 180;
        }
        if (meteoriteCreation3[c]) {
            let x = (Math.random()*(101)+130);
            numberOfMeteorites3 += 1;
            meteorite3[numberOfMeteorites3] = new component(25.86666666, 18, "IMAGES/meteorite.png", 375, 500, "image");
            meteoriteAngle3[numberOfMeteorites3] = x * Math.PI / 180;
        }
        if (meteoriteCreation4[d]) {
            let x = (Math.random()*(61)+60);
            numberOfMeteorites4 += 1;
            meteorite4[numberOfMeteorites4] = new component(25.86666666, 18, "IMAGES/meteorite.png", -50, 225, "image");
            meteoriteAngle4[numberOfMeteorites4] = x * Math.PI / 180;
        }
        /*
        for (let i = 0; i <= numberOfMeteorites; i++) {
            if (meteoriteCrashWith(mySpaceShip, meteorite[i]) == 0) {
                meteoriteCrashing(meteorite[i], spaceShip1, i);
            }
            else if (meteoriteCrashWith(enemySpaceShip, meteorite[i]) == 0) {
                meteoriteCrashing(meteorite[i], enemyShip1, i);
            }
        }
        for (let i = 0; i <= numberOfMeteorites2; i++) {
            if (meteoriteCrashWith(mySpaceShip, meteorite2[i]) == ) {
                meteoriteCrashing(meteorite2[i], spaceShip1, i);
            }
            else if (meteoriteCrashWith(enemySpaceShip, meteorite2[i]) == 0) {
                meteoriteCrashing(meteorite2[i], enemyShip1, i);
            }
        }
        for (let i = 0; i <= numberOfMeteorites3; i++) {
            if (meteoriteCrashWith(mySpaceShip, meteorite3[i]) == 0) {
                meteoriteCrashing(meteorite3[i], spaceShip1, i);
            }
            else if (meteoriteCrashWith(enemySpaceShip, meteorite3[i]) == 0) {
                meteoriteCrashing(meteorite3[i], enemyShip1, i);
            }
        }
        for (let i = 0; i <= numberOfMeteorites4; i++) {
            if (meteoriteCrashWith(mySpaceShip, meteorite4[i]) == 0) {
                meteoriteCrashing(meteorite4[i], spaceShip1, i);
            }
            else if (meteoriteCrashWith(enemySpaceShip, meteorite4[i]) == 0) {
                meteoriteCrashing(meteorite4[i], enemyShip1, i);
            }
        }
        */
        checkCollisionWithMySpaceShip(meteorite);
        checkCollisionWithMySpaceShip(meteorite2);
        checkCollisionWithMySpaceShip(meteorite3);
        checkCollisionWithMySpaceShip(meteorite4);
        enemyShip1.reloadMana();
        spaceShip1.reloadMana();
        enemySpaceShip.shoot(enemyShip1);    
        mySpaceShip.shoot(spaceShip1);
        myGameArea.clear();
        mySpaceShip.moveAngle = 0;
        mySpaceShip.speed = 0;
        if (myGameArea.keys && myGameArea.keys [65]) {wasdMoveLeft();}
        if (myGameArea.keys && myGameArea.keys [68]) {wasdMoveRight();}
        if (myGameArea.keys && myGameArea.keys [83]) {wasdMoveDown();}
        if (myGameArea.keys && myGameArea.keys [87]) {wasdMoveUp();}
        enemySpaceShip.moveAngle = 0;
        enemySpaceShip.speed = 0;
        if (myGameArea.keys && myGameArea.keys [37]) {enemySpaceShip.moveAngle = -2.5; }
        if (myGameArea.keys && myGameArea.keys [39]) {enemySpaceShip.moveAngle = 2.5 }
        if (myGameArea.keys && myGameArea.keys [40]) {enemySpaceShip.speed = -1.5; }
        if (myGameArea.keys && myGameArea.keys [38]) {enemySpaceShip.speed = 2.5; }
        mySpaceShip.newPos();
        enemySpaceShip.newPos();
        mySpaceShip.update();
        enemySpaceShip.update();
        for (let i = 0; i <= numberOfMeteorites; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite[i].x += rychlost * Math.sin(meteoriteAngle[i]);
            meteorite[i].y += rychlost * Math.cos(meteoriteAngle[i]);
            meteorite[i].update();
        }
        for (let i = 0; i <= numberOfMeteorites2; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite2[i].x += rychlost * Math.sin(meteoriteAngle2[i]);
            meteorite2[i].y += rychlost * Math.cos(meteoriteAngle2[i]);
            meteorite2[i].update();
        }
        for (let i = 0; i <= numberOfMeteorites3; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite3[i].x += rychlost * Math.sin(meteoriteAngle3[i]);
            meteorite3[i].y += rychlost * Math.cos(meteoriteAngle3[i]);
            meteorite3[i].update();
        }
        for (let i = 0; i <= numberOfMeteorites4; i++) {
            let rychlost = (Math.random()*(3)+2)
            meteorite4[i].x += rychlost * Math.sin(meteoriteAngle4[i]);
            meteorite4[i].y += rychlost * Math.cos(meteoriteAngle4[i]);
            meteorite4[i].update();
        }
        for (let i = 0; i <= m; i++) {
            strelaShipPole[i].x += 5 * Math.sin(strelaShipAngle[i]);
            strelaShipPole[i].y -= 5 * Math.cos(strelaShipAngle[i]);
            strelaShipPole[i].update();
        }
        for (let i = 0; i <= n; i++) {
            strelaPole[i].x += 5 * Math.sin(strelaAngle[i]);
            strelaPole[i].y -= 5 * Math.cos(strelaAngle[i]);
            strelaPole[i].update();
        }
    }
}
/*
function meteoriteCrashing(meteoriteType, target, k) {
    meteoriteType.spilce(k,1);
    if (meteoriteType == meteorite[i]) {
        numberOfMeteorites--;
    }
    else if (meteoriteType == meteorite2[i]) {
        numberOfMeteorites2--;
    }
    else if (meteoriteType == meteorite3[i]) {
        numberOfMeteorites3--;
    }
    else if (meteoriteType == meteorite4[i]) {
        numberOfMeteorites4--;
    }
    target.silaStitu -= 2;
    target.getshieldStrength();
    refuelInterval = setInterval(() => {
        document.getElementById("messageBox").style.display = "block";
        document.getElementById("messageBox").innerHTML = ("<p>Strike! Meteorite shot <em>" + target.nazev + "</em>.</p>");
    },300);
    setTimeout(() => {
        clearInterval(refuelInterval);
        document.getElementById("messageBox").style.display = "none";
    },4000);
}

function meteoriteCrashWith(ship, meteorite) {
    let shipleft = ship.x;
    let shipright = ship.x + (ship.width);
    let shiptop = ship.y;
    let shipbottom = ship.y + (ship.height);
    let meteoriteleft = meteorite.x;
    let meteoriteright = meteorite.x + (meteorite.width);
    let meteoritetop = meteorite.y;
    let meteoritebottom = meteorite.y + (meteorite.height);
    var crashed;
    if ((shipbottom < meteoritetop) || (shiptop > meteoritebottom) || (shipright < meteoriteleft) || (shipleft > meteoriteright)) {
        crashed = false;
    }
    else {
        crashed = true;
    }
    return
}
*/
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

function myStopMove() {
    mySpaceShip.speed = 0;
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
var shotFired2 = false;

// Funkce pro střelbu
function attack(attacker) {
    if (!shotFired) { // Pokud je false (žádná střelba není provedena)
        n += 1;
        strelaPole[n] = new component(5, 5, "yellow", attacker.x, attacker.y);
        strelaAngle[n] = enemySpaceShip.angle;
        shotFired = true; // Nastavíme na true (střelba provedena)
    }
}

function attack2(attacker) {
    if (!shotFired2) { // Pokud je false (žádná střelba není provedena)
        m += 1;
        strelaShipPole[m] = new component(5, 5, "red", attacker.x, attacker.y);
        strelaShipAngle[m] = mySpaceShip.angle;
        shotFired2 = true; // Nastavíme na true (střelba provedena)
    }
}

// Funkce pro obsluhu události stisknutí klávesy
document.addEventListener("keydown", function(event) {
    if (event.keyCode === 76 && enemyShip1.mana > 0.2) { // Klávesa L
        attack(enemySpaceShip);
        enemyShip1.mana -= 0.2;
    }
    else if (event.keyCode === 71 && spaceShip1.mana > 0.2) { // Klávesa G
        attack2(mySpaceShip);
        spaceShip1.mana -= 0.2;
    }
});

document.addEventListener("keyup", function(event) {
    if (event.keyCode === 76) { // Klávesa L
        shotFired = false; // Nastavíme zpět na false (povolíme opětovnou střelbu)
    } else if (event.keyCode === 71) { // Klávesa G
        shotFired2 = false; // Nastavíme zpět na false (povolíme opětovnou střelbu)
    }
});


//<------------------AI dotahala---------------------------------------------------->

//<--------------------Konec canvasu------------------------------------------------>
//Přidej: pausnutí hry; střet dvou střel; "healthbar" na střely => ŠUPNI TO VŠUDE!!! (do UpdateGameArea(););
