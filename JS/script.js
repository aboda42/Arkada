//<------------------------------JAVASCRIPT----------------------------------------->
//<------------------------------Hlavní stránka------------------------------------->
//<------------------------------Funkce a třídy------------------------------------->
class SpaceShip {
    nazev;
    silaStitu;
    constructor(nazev, silaStitu) {
        this.nazev = nazev;
        this.silaStitu = silaStitu;
    }
    getshieldStrength() {
        if (this.nazev == spaceShip1.nazev) {
            if (this.silaStitu <= 0) {
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
    refuelInterval = setInterval(() => {
        document.getElementById("messageBox").style.display = "block";
        document.getElementById("messageBox").innerHTML = ("<p>Strike! Spaceship <em>" + utocnik + "</em> shot <em>" + obet + "</em>.</p>");
    },300);
    setTimeout(() => {
        clearInterval(refuelInterval);
        document.getElementById("messageBox").style.display = "none";
    },4000);
}

function strike(target) {
    if (target == enemyShip1) {
        let barva = document.getElementById("enemyShield");
        if (target.silaStitu > 0) {
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
    else if (target == spaceShip1) {
        let barva = document.getElementById("shield");
        if (target.silaStitu > 0) {
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
}

class EnemySpaceShip extends SpaceShip {
    weaponPower;
    constructor(nazev, silaStitu, weaponPower) {
        super(nazev, silaStitu);
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
        target.silaStitu = target.silaStitu - this.weaponPower;
        alertStrike(this.nazev, target.nazev);
        target.getshieldStrength();
        strike(target);
    }
}

//<------------------------------Konec funkcí a tříd-------------------------------->
//<------------------------------Vyvolávání----------------------------------------->

const spaceShip1 = new EnemySpaceShip("Heart of Gold", 10, 3);

spaceShip1.getshieldStrength();
spaceShip1.getWeaponPower();

document.getElementById("name").innerHTML = ("<em>" + spaceShip1.nazev + "</em>");

const enemyShip1 = new EnemySpaceShip("Star Destroyer", 8, 4);

enemyShip1.getshieldStrength();
enemyShip1.getWeaponPower();

document.getElementById("enemyName").innerHTML = ("<em>" + enemyShip1.nazev + "</em>");

//<------------------------------Konec vyvolávání----------------------------------->
//<------------------------------Konec hlavní stránky------------------------------->






//<------------------------------Easteregg se jménem-------------------------------->

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

//<-------------------------Konec eastereggu se jménem------------------------------>






//<--------------------------Canvas------------------------------------------------->

var mySpaceShip, enemySpaceShip;
var levaStena, pravaStena, horniStena, spodniStena;
var strelaPole = [];
var strelaShipPole = [];
var m = 0;
var n = 0;
strelaPole[n] = ("strela" + n);
strelaShipPole[m] = ("strelaShip" + m);
var strelaAngle = [];
var strelaShipAngle = [];

function startGame() {
    myGameArea.start();
    mySpaceShip = new component(30, 30, "IMAGES/VesmirnaLodHodna.png", 120, 175, "image", spaceShip1);
    enemySpaceShip = new component(30, 30, "IMAGES/VesmirnaLodZla.png", 580, 175, "image", enemyShip1);
    levaStena = new component(100, 550, "red",-100, -100, "object");
    horniStena = new component(900, 100, "red", -100, -100, "object");
    pravaStena = new component(100, 550, "red", 720, -100, "object");
    spodniStena = new component(900, 100, "red", -100, 370, "object");
    strelaPole[n] = new component(5,5,"yellow", -150, -150, "object");
    strelaShipPole[m] = new component(5,5,"red",-200, -200, "object");
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
    else {
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
}

function updateGameArea() {
        if (mySpaceShip.crashWith(horniStena) && enemySpaceShip.crashWith(horniStena)) {
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
            if (myGameArea.keys && myGameArea.keys [40]) {enemySpaceShip.speed = -1; }
            if (myGameArea.keys && myGameArea.keys [38]) {enemySpaceShip.speed = 2; }
            mySpaceShip.newPos();
            enemySpaceShip.newPos();
            mySpaceShip.update();
            enemySpaceShip.update();
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
        if (myGameArea.keys && myGameArea.keys [40]) {enemySpaceShip.speed = -1; }
        if (myGameArea.keys && myGameArea.keys [38]) {enemySpaceShip.speed = 2; }
        mySpaceShip.newPos();
        enemySpaceShip.newPos();
        mySpaceShip.update();
        enemySpaceShip.update();
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
        if (myGameArea.keys && myGameArea.keys [40]) {enemySpaceShip.speed = -1; }
        if (myGameArea.keys && myGameArea.keys [38]) {enemySpaceShip.speed = 2; }
        mySpaceShip.newPos();
        enemySpaceShip.newPos();
        mySpaceShip.update();
        enemySpaceShip.update();
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
        if (myGameArea.keys && myGameArea.keys [40]) {enemySpaceShip.speed = -1; }
        if (myGameArea.keys && myGameArea.keys [38]) {enemySpaceShip.speed = 2; }
        mySpaceShip.newPos();
        enemySpaceShip.newPos();
        mySpaceShip.update();
        enemySpaceShip.update();
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
        if (myGameArea.keys && myGameArea.keys [40]) {enemySpaceShip.speed = -1; }
        if (myGameArea.keys && myGameArea.keys [38]) {enemySpaceShip.speed = 2; }
        mySpaceShip.newPos();
        enemySpaceShip.newPos();
        mySpaceShip.update();
        enemySpaceShip.update();
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
        if (myGameArea.keys && myGameArea.keys [40]) {enemySpaceShip.speed = -1; }
        if (myGameArea.keys && myGameArea.keys [38]) {enemySpaceShip.speed = 2; }
        mySpaceShip.newPos();
        enemySpaceShip.newPos();
        mySpaceShip.update();
        enemySpaceShip.update();
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
        if (myGameArea.keys && myGameArea.keys [40]) {enemySpaceShip.speed = -1; }
        if (myGameArea.keys && myGameArea.keys [38]) {enemySpaceShip.speed = 2; }
        mySpaceShip.newPos();
        enemySpaceShip.newPos();
        mySpaceShip.update();
        enemySpaceShip.update();
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
        if (myGameArea.keys && myGameArea.keys [40]) {enemySpaceShip.speed = -1; }
        if (myGameArea.keys && myGameArea.keys [38]) {enemySpaceShip.speed = 2; }
        mySpaceShip.newPos();
        enemySpaceShip.newPos();
        mySpaceShip.update();
        enemySpaceShip.update();
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
        if (myGameArea.keys && myGameArea.keys [40]) {enemySpaceShip.speed = -1; }
        if (myGameArea.keys && myGameArea.keys [38]) {enemySpaceShip.speed = 2; }
        mySpaceShip.newPos();
        enemySpaceShip.newPos();
        mySpaceShip.update();
        enemySpaceShip.update();
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
        if (myGameArea.keys && myGameArea.keys [40]) {enemySpaceShip.speed = -1; }
        if (myGameArea.keys && myGameArea.keys [38]) {enemySpaceShip.speed = 2; }
        mySpaceShip.newPos();
        enemySpaceShip.newPos();
        mySpaceShip.update();
        enemySpaceShip.update();
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
        if (myGameArea.keys && myGameArea.keys [40]) {enemySpaceShip.speed = -1; }
        if (myGameArea.keys && myGameArea.keys [38]) {enemySpaceShip.speed = 2; }
        mySpaceShip.newPos();
        enemySpaceShip.newPos();
        mySpaceShip.update();
        enemySpaceShip.update();
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
        if (myGameArea.keys && myGameArea.keys [40]) {enemySpaceShip.speed = -1; }
        if (myGameArea.keys && myGameArea.keys [38]) {enemySpaceShip.speed = 2; }
        mySpaceShip.newPos();
        enemySpaceShip.newPos();
        mySpaceShip.update();
        enemySpaceShip.update();
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
        if (myGameArea.keys && myGameArea.keys [40]) {enemySpaceShip.speed = -1; }
        if (myGameArea.keys && myGameArea.keys [38]) {enemySpaceShip.speed = 2; }
        mySpaceShip.newPos();
        enemySpaceShip.newPos();
        mySpaceShip.update();
        enemySpaceShip.update();
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
        if (myGameArea.keys && myGameArea.keys [40]) {enemySpaceShip.speed = -1; }
        if (myGameArea.keys && myGameArea.keys [38]) {enemySpaceShip.speed = 2; }
        mySpaceShip.newPos();
        enemySpaceShip.newPos();
        mySpaceShip.update();
        enemySpaceShip.update();
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
        if (myGameArea.keys && myGameArea.keys [40]) {enemySpaceShip.speed = -1; }
        if (myGameArea.keys && myGameArea.keys [38]) {enemySpaceShip.speed = 2; }
        mySpaceShip.newPos();
        enemySpaceShip.newPos();
        mySpaceShip.update();
        enemySpaceShip.update();
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
        if (myGameArea.keys && myGameArea.keys [40]) {enemySpaceShip.speed = -1; }
        if (myGameArea.keys && myGameArea.keys [38]) {enemySpaceShip.speed = 2; }
        mySpaceShip.newPos();
        enemySpaceShip.newPos();
        mySpaceShip.update();
        enemySpaceShip.update();
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
        if (myGameArea.keys && myGameArea.keys [40]) {enemySpaceShip.speed = -1; }
        if (myGameArea.keys && myGameArea.keys [38]) {enemySpaceShip.speed = 2; }
        mySpaceShip.newPos();
        enemySpaceShip.newPos();
        mySpaceShip.update();
        enemySpaceShip.update();
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
        if (myGameArea.keys && myGameArea.keys [40]) {enemySpaceShip.speed = -1; }
        if (myGameArea.keys && myGameArea.keys [38]) {enemySpaceShip.speed = 2; }
        mySpaceShip.newPos();
        enemySpaceShip.newPos();
        mySpaceShip.update();
        enemySpaceShip.update();
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
        if (myGameArea.keys && myGameArea.keys [40]) {enemySpaceShip.speed = -1; }
        if (myGameArea.keys && myGameArea.keys [38]) {enemySpaceShip.speed = 2; }
        mySpaceShip.newPos();
        enemySpaceShip.newPos();
        mySpaceShip.update();
        enemySpaceShip.update();
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
        if (myGameArea.keys && myGameArea.keys [40]) {enemySpaceShip.speed = -1; }
        if (myGameArea.keys && myGameArea.keys [38]) {enemySpaceShip.speed = 2; }
        mySpaceShip.newPos();
        enemySpaceShip.newPos();
        mySpaceShip.update();
        enemySpaceShip.update();
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
        if (myGameArea.keys && myGameArea.keys [40]) {enemySpaceShip.speed = -1; }
        if (myGameArea.keys && myGameArea.keys [38]) {enemySpaceShip.speed = 2; }
        mySpaceShip.newPos();
        enemySpaceShip.newPos();
        mySpaceShip.update();
        enemySpaceShip.update();
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
        if (myGameArea.keys && myGameArea.keys [40]) {enemySpaceShip.speed = -1; }
        if (myGameArea.keys && myGameArea.keys [38]) {enemySpaceShip.speed = 2; }
        mySpaceShip.newPos();
        enemySpaceShip.newPos();
        mySpaceShip.update();
        enemySpaceShip.update();
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
        if (myGameArea.keys && myGameArea.keys [40]) {enemySpaceShip.speed = -1; }
        if (myGameArea.keys && myGameArea.keys [38]) {enemySpaceShip.speed = 2; }
        mySpaceShip.newPos();
        enemySpaceShip.newPos();
        mySpaceShip.update();
        enemySpaceShip.update();
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
        if (myGameArea.keys && myGameArea.keys [40]) {enemySpaceShip.speed = -1; }
        if (myGameArea.keys && myGameArea.keys [38]) {enemySpaceShip.speed = 2; }
        mySpaceShip.newPos();
        enemySpaceShip.newPos();
        mySpaceShip.update();
        enemySpaceShip.update();
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
        if (myGameArea.keys && myGameArea.keys [40]) {enemySpaceShip.speed = -1; }
        if (myGameArea.keys && myGameArea.keys [38]) {enemySpaceShip.speed = 2; }
        mySpaceShip.newPos();
        enemySpaceShip.newPos();
        mySpaceShip.update();
        enemySpaceShip.update();
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
        if (myGameArea.keys && myGameArea.keys [40]) {enemySpaceShip.speed = -1; }
        if (myGameArea.keys && myGameArea.keys [38]) {enemySpaceShip.speed = 2; }
        mySpaceShip.newPos();
        enemySpaceShip.newPos();
        mySpaceShip.update();
        enemySpaceShip.update();
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
        if (myGameArea.keys && myGameArea.keys [40]) {enemySpaceShip.speed = -1; }
        if (myGameArea.keys && myGameArea.keys [38]) {enemySpaceShip.speed = 2; }
        mySpaceShip.newPos();
        enemySpaceShip.newPos();
        mySpaceShip.update();
        enemySpaceShip.update();
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
        if (myGameArea.keys && myGameArea.keys [40]) {enemySpaceShip.speed = -1; }
        if (myGameArea.keys && myGameArea.keys [38]) {enemySpaceShip.speed = 2; }
        mySpaceShip.newPos();
        enemySpaceShip.newPos();
        mySpaceShip.update();
        enemySpaceShip.update();
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
        if (myGameArea.keys && myGameArea.keys [40]) {enemySpaceShip.speed = -1; }
        if (myGameArea.keys && myGameArea.keys [38]) {enemySpaceShip.speed = 2; }
        mySpaceShip.newPos();
        enemySpaceShip.newPos();
        mySpaceShip.update();
        enemySpaceShip.update();
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
        if (myGameArea.keys && myGameArea.keys [40]) {enemySpaceShip.speed = -1; }
        if (myGameArea.keys && myGameArea.keys [38]) {enemySpaceShip.speed = 2; }
        mySpaceShip.newPos();
        enemySpaceShip.newPos();
        mySpaceShip.update();
        enemySpaceShip.update();
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
        enemySpaceShip.shoot(enemyShip1);    
        mySpaceShip.shoot(spaceShip1);
        myGameArea.clear();
        mySpaceShip.moveAngle = 0;
        mySpaceShip.speed = 0;
        if (myGameArea.keys && myGameArea.keys [76]) {attack(enemySpaceShip);}
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
    if (event.keyCode === 76) { // Klávesa mezerníku
        attack(enemySpaceShip);
    } else if (event.keyCode === 71) { // Klávesa G
        attack2(mySpaceShip);
    }
});

document.addEventListener("keyup", function(event) {
    if (event.keyCode === 76) { // Klávesa mezerníku
        shotFired = false; // Nastavíme zpět na false (povolíme opětovnou střelbu)
    } else if (event.keyCode === 71) { // Klávesa G
        shotFired2 = false; // Nastavíme zpět na false (povolíme opětovnou střelbu)
    }
});


//<------------------AI dotahala---------------------------------------------------->

//<--------------------Konec canvasu------------------------------------------------>
