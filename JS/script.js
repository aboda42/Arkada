//<------------------------------JAVASCRIPT v6.0.1 beta----------------------------->
//<------------------------------Hlavni stranka------------------------------------->
//<------------------------------Funkce a tridy------------------------------------->
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
            if (this.mana < 0.2) {
                document.getElementById("mana").innerHTML = "Amount of energy: <br> <svg id='manabar' width='120px' height='30px'> <rect height='10px' width='" + (100 * this.mana) + "px' x='11px' y='11px' style='fill:red;stroke-width:2;stroke:black'> </svg>";
            }
            else {
                document.getElementById("mana").innerHTML = "Amount of energy: <br> <svg id='manabar' width='120px' height='30px'> <rect height='10px' width='" + (100 * this.mana) + "px' x='11px' y='11px' style='fill:yellow;stroke-width:2;stroke:black'> </svg>";
            }
        }
        else {
            if (this.mana < 0.2) {
                document.getElementById("enemyMana").innerHTML = "Amount of energy: <br> <svg id='enemyManabar' width='120px' height='30px'> <rect height='10px' width='" + (100 * this.mana) + "px' x='11px' y='11px' style='fill:red;stroke-width:2;stroke:black'> </svg>";
            }
            else {
                document.getElementById("enemyMana").innerHTML = "Amount of energy: <br> <svg id='enemyManabar' width='120px' height='30px'> <rect height='10px' width='" + (100 * this.mana) + "px' x='11px' y='11px' style='fill:yellow;stroke-width:2;stroke:black'> </svg>";
            }
        }
    }
    reloadMana() {
        if (this.mana < 1) {
            this.mana += 0.002;
        }
        this.getManaAmount();
    }

    getshieldStrength() {
        if (this.nazev == spaceShip1.nazev) {
            if (this.silaStitu <= 0) {
                shotLock = true;
                enemyShip1.weaponPower = 0;
                spaceShip1.weaponPower = 0;
                document.getElementById("vesmirnaLod").style.color = "red";
                //document.getElementById("spaceShipButtonW").style.borderColor = "red";            tohle dodelam nekdy pozdeji, az budu mit naladu (nebo nikdy!)
                document.getElementById("tabulka").style.color = "chartreuse";
                document.getElementById("tabulka").innerHTML = ("<h1>Spaceship <em>" + this.nazev + "</em> was destroyed. <em>" + enemyShip1.nazev + "</em> won!</h1>");
                document.getElementById("shield").innerHTML = ("Shield strength:");
                document.getElementById("shield").style.paddingBottom = "25px";
                reloadButton();
            }
            else {
                switch (this.silaStitu) {
                    case 5:
                        document.getElementById("shield").innerHTML = "Shield strength: <br> <img src='IMAGES/fiveHearts.png' height='20px'>";
                        break;
                    case 4.5:
                        document.getElementById("shield").innerHTML = "Shield strength: <br> <img src='IMAGES/fourAndHalfHearts.png' height='20px'>";
                        break;
                    case 4:
                        document.getElementById("shield").innerHTML = "Shield strength: <br> <img src='IMAGES/fourHearts.png' height='20px'>";
                        break;
                    case 3.5:
                        document.getElementById("shield").innerHTML = "Shield strength: <br> <img src='IMAGES/threeAndHalfHearts.png' height='20px'>";
                        break;
                    case 3:
                        document.getElementById("shield").innerHTML = "Shield strength: <br> <img src='IMAGES/threeHearts.png' height='20px'>";
                        break;
                    case 2.5:
                        document.getElementById("shield").innerHTML = "Shield strength: <br> <img src='IMAGES/twoAndHalfHearts.png' height='20px'>";
                        break;
                    case 2:
                        document.getElementById("shield").innerHTML = "Shield strength: <br> <img src='IMAGES/twoHearts.png' height='20px'>";
                        break;
                    case 1.5:
                        document.getElementById("shield").innerHTML = "Shield strength: <br> <img src='IMAGES/oneAndHalfHearts.png' height='20px'>";
                        break;
                    case 1:
                        document.getElementById("shield").innerHTML = "Shield strength: <br> <img src='IMAGES/oneHeart.png' height='20px'>";
                        break;
                    case 0.5:
                        document.getElementById("shield").innerHTML = "Shield strength: <br> <img src='IMAGES/halfHeart.png' height='20px'>";
                }
            }
        }
        else {
            if (this.silaStitu <= 0) {
                shotLock = true;
                enemyShip1.weaponPower = 0;
                spaceShip1.weaponPower = 0;
                document.getElementById("nepratelskaLod").style.color = "red";
                document.getElementById("enemyManabar").style.fill = "red";
                document.getElementById("tabulka").style.color = "chartreuse"
                document.getElementById("tabulka").innerHTML = ("<h1>Spaceship <em>" + this.nazev + "</em> was destroyed. <em>" + spaceShip1.nazev + "</em> won!</h1>");
                document.getElementById("enemyShield").innerHTML = ("Shield strength:");
                document.getElementById("enemyShield").style.paddingBottom = "25px";
                reloadButton();
            }
            else {
                switch (this.silaStitu) {
                    case 5:
                        document.getElementById("enemyShield").innerHTML = "Shield strength: <br> <img src='IMAGES/fiveHearts.png' height='20px'>";
                        break;
                    case 4.5:
                        document.getElementById("enemyShield").innerHTML = "Shield strength: <br> <img src='IMAGES/fourAndHalfHearts.png' height='20px'>";
                        break;
                    case 4:
                        document.getElementById("enemyShield").innerHTML = "Shield strength: <br> <img src='IMAGES/fourHearts.png' height='20px'>";
                        break;
                    case 3.5:
                        document.getElementById("enemyShield").innerHTML = "Shield strength: <br> <img src='IMAGES/threeAndHalfHearts.png' height='20px'>";
                        break;
                    case 3:
                        document.getElementById("enemyShield").innerHTML = "Shield strength: <br> <img src='IMAGES/threeHearts.png' height='20px'>";
                        break;
                    case 2.5:
                        document.getElementById("enemyShield").innerHTML = "Shield strength: <br> <img src='IMAGES/twoAndHalfHearts.png' height='20px'>";
                        break;
                    case 2:
                        document.getElementById("enemyShield").innerHTML = "Shield strength: <br> <img src='IMAGES/twoHearts.png' height='20px'>";
                        break;
                    case 1.5:
                        document.getElementById("enemyShield").innerHTML = "Shield strength: <br> <img src='IMAGES/oneAndHalfHearts.png' height='20px'>";
                        break;
                    case 1:
                        document.getElementById("enemyShield").innerHTML = "Shield strength: <br> <img src='IMAGES/oneHeart.png' height='20px'>";
                        break;
                    case 0.5:
                        document.getElementById("enemyShield").innerHTML = "Shield strength: <br> <img src='IMAGES/halfHeart.png' height='20px'>";
                }
            }
        }
    }
}

function alertStrike(utocnik, obet) {
    if (enemyShip1.silaStitu > 0 && spaceShip1.silaStitu > 0) {
        if (document.getElementById("messageBox").style.display != "block") {
            refuelInterval = setInterval(() => {
                document.getElementById("h1").style.visibility = "hidden";
                document.getElementById("messageBox").style.display = "block";
                document.getElementById("messageBox").innerHTML = ("<p>Strike! Spaceship <em>" + utocnik + "</em> shot <em>" + obet + "</em>.</p>");
            }, 300);
            setTimeout(() => {
                clearInterval(refuelInterval);
                document.getElementById("h1").style.visibility = "visible";
                document.getElementById("messageBox").style.display = "none";
            }, 4000);
        }
        else {
            setTimeout(() => {
                alertStrike(utocnik, obet);
            }, 500);
        }
    }
}

class EnemySpaceShip extends SpaceShip {
    weaponPower;
    constructor(nazev, silaStitu, mana, weaponPower) {
        super(nazev, silaStitu, mana);
        this.weaponPower = weaponPower;
    }
    attack(target) {
        if (enemyShip1.weaponPower != 0) {
            target.silaStitu = target.silaStitu - this.weaponPower;
            alertStrike(this.nazev, target.nazev);
            target.getshieldStrength();
        }
    }
}

//<------------------------------Konec funkci a trid-------------------------------->
//<------------------------------Vyvolavani----------------------------------------->

var shotLock;

const spaceShip1 = new EnemySpaceShip("Heart of Gold", 5, 1, 1);

spaceShip1.getshieldStrength();
spaceShip1.getManaAmount();

document.getElementById("name").innerHTML = ("<em>" + spaceShip1.nazev + "</em>");

const enemyShip1 = new EnemySpaceShip("Star Destroyer", 5, 1, 1);

enemyShip1.getshieldStrength();
enemyShip1.getManaAmount();

document.getElementById("enemyName").innerHTML = ("<em>" + enemyShip1.nazev + "</em>");

//<------------------------------Konec vyvolavani----------------------------------->
//<------------------------------Konec hlavni stranky------------------------------->






//<------------------------------Easteregg------------------------------------------>

document.getElementById("reloadButton").style.display = "none";

const hlasky = ["HEY, YOU CLICKED ON ME!","STOP IT!","WHY ARE YOU CLICKING ON ME!?!","YOU PERVERT, STOP TOUCHING ME!","WHY ARE YOU BULLYING ME!?!"];

function reloadButton() {
    document.getElementById("reloadButton").style.display = "block";
}

function reload() {
    location.reload();
}

function jaJaAJenomJa() {
    let n = Math.floor(Math.random()*(5))+0;
    document.getElementById('sipkaDolu').style.display = 'block';
    document.getElementById("sipkaDolu").innerHTML = hlasky[n];
    setTimeout(() => {
        const disappearing = document.getElementById('sipkaDolu');
        disappearing.style.display = 'none';
    },2500);
}

//<-------------------------Konec eastereggu---------------------------------------->






//<--------------------------Canvas------------------------------------------------->

var canvasWidth, canvasHeight;

canvasWidth = window.innerWidth / 2.048;
canvasHeight = window.innerHeight / 1.44791666666666666667;

//var side;

var pause = false;
var pauseAccomplished = true;

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

    mySpaceShip = new component(30, 30, "IMAGES/VesmirnaLodHodna.png", 150, canvasHeight / 2, "image", spaceShip1);
    enemySpaceShip = new component(30, 30, "IMAGES/VesmirnaLodZla.png", canvasWidth - 150, canvasHeight / 2, "image", enemyShip1);

    levaStena = new component(100, canvasHeight + 170, "red",-100, -100, "object");
    horniStena = new component(canvasWidth + 250, 100, "red", -100, -100, "object");
    pravaStena = new component(100, canvasHeight + 170, "red", canvasWidth + 20, -100, "object");
    spodniStena = new component(canvasWidth + 250, 150, "red", -100, canvasHeight + 20, "object");

    strelaPole[n] = new component(5,5,"yellow", -200, -200, "object");
    strelaShipPole[m] = new component(5,5,"red",-300, -300, "object");

    meteorite[numberOfMeteorites] = new component(25.86666666, 18, "IMAGES/meteorite.png", canvasHeight / 2, -50, "image");
    meteorite2[numberOfMeteorites2] = new component(25.86666666, 18, "IMAGES/meteorite.png", canvasHeight + 50, canvasWidth / 2, "image");
    meteorite3[numberOfMeteorites3] = new component(25.86666666, 18, "IMAGES/meteorite.png", canvasHeight / 2, canvasWidth + 50, "image");
    meteorite4[numberOfMeteorites4] = new component(25.86666666, 18, "IMAGES/meteorite.png", -50, canvasWidth / 2, "image");
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = canvasWidth;
        this.canvas.height = canvasHeight;
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
/*/////////////////////////////////////////////////////////////////////////////////////
        if (mybottom > othertop) {
            side = "bottom";
        }
        else if (mytop < otherbottom) {
            side = "top";
        }
        else if (myright > otherleft) {
            side = "right";
        }
        else if (myleft < otherright) {
            side = "left";
        }
/*/////////////////////////////////////////////////////////////////////////////////////
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
    switch (shoot) {
        case spaceShip1:
            for (let i = 0; i <= n; i++) {
                let bullet = strelaPole[i];
                if (bullet.x < (mySpaceShip.x + mySpaceShip.width - 15) &&
                    bullet.x + bullet.width > (mySpaceShip.x - 12) &&
                    bullet.y < mySpaceShip.y + (mySpaceShip.height - 15) &&
                    bullet.y + bullet.height > (mySpaceShip.y - 10)) {
                        strelaPole.splice(i, 1); // Odstraneni strely ze seznamu
                        n--; // Snizeni poctu strel v poli
                        return true;
                }
            }
            return false;
        case enemyShip1:
            for (let i = 0; i <= m; i++) {
                let bullet = strelaShipPole[i];
                if (bullet.x < (enemySpaceShip.x + enemySpaceShip.width - 15) &&
                    bullet.x + bullet.width > (enemySpaceShip.x - 12) &&
                    bullet.y < enemySpaceShip.y + (enemySpaceShip.height - 15) &&
                    bullet.y + bullet.height > (enemySpaceShip.y - 10)) {
                        strelaShipPole.splice(i, 1);
                        m--;
                        return true;
                }
            }
            return false;
        case meteorite:
            for (let i = 0; i <= numberOfMeteorites; i++) {
                for (let j = 0; j <= m; j++) {
                    let bullet = strelaShipPole[j];
                    if (bullet.x < (meteorite[i].x + meteorite[i].width - 15) &&
                    bullet.x + bullet.width > (meteorite[i].x - 12) &&
                    bullet.y < meteorite[i].y + (meteorite[i].height - 15) &&
                    bullet.y + bullet.height > (meteorite[i].y - 10)) {
                        strelaShipPole.splice(j, 1);
                        m--;
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
                        strelaPole.splice(j, 1);
                        n--;
                        meteorite.splice(i, 1);
                        numberOfMeteorites--;
                        return true;
                    }
                }
            }
            break;
        case meteorite2:
            for (let i = 0; i <= numberOfMeteorites2; i++) {
                for (let j = 0; j <= m; j++) {
                    let bullet = strelaShipPole[j];
                    if (bullet.x < (meteorite2[i].x + meteorite2[i].width - 15) &&
                    bullet.x + bullet.width > (meteorite2[i].x - 12) &&
                    bullet.y < meteorite2[i].y + (meteorite2[i].height - 15) &&
                    bullet.y + bullet.height > (meteorite2[i].y - 10)) {
                        strelaShipPole.splice(j, 1);
                        m--;
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
                        strelaPole.splice(j, 1);
                        n--;
                        meteorite2.splice(i, 1);
                        numberOfMeteorites2--;
                        return true;
                    }
                }
            }
            break;
        case meteorite3:
            for (let i = 0; i <= numberOfMeteorites3; i++) {
                for (let j = 0; j <= m; j++) {
                    let bullet = strelaShipPole[j];
                    if (bullet.x < (meteorite3[i].x + meteorite3[i].width - 15) &&
                        bullet.x + bullet.width > (meteorite3[i].x - 12) &&
                        bullet.y < meteorite3[i].y + (meteorite3[i].height - 15) &&
                        bullet.y + bullet.height > (meteorite3[i].y - 10)) {
                        strelaShipPole.splice(j, 1);
                        m--;
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
                        strelaPole.splice(j, 1);
                        n--;
                        meteorite3.splice(i, 1);
                        numberOfMeteorites3--;
                        return true;
                    }
                }
            }
            break;
        case meteorite4:
            for (let i = 0; i <= numberOfMeteorites4; i++) {
                for (let j = 0; j <= m; j++) {
                    let bullet = strelaShipPole[j];
                    if (bullet.x < (meteorite4[i].x + meteorite4[i].width - 15) &&
                        bullet.x + bullet.width > (meteorite4[i].x - 12) &&
                        bullet.y < meteorite4[i].y + (meteorite4[i].height - 15) &&
                        bullet.y + bullet.height > (meteorite4[i].y - 10)) {
                        strelaShipPole.splice(j, 1);
                        m--;
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
                        strelaPole.splice(j, 1);
                        n--;
                        meteorite4.splice(i, 1);
                        numberOfMeteorites4--;
                        return true;
                    }
                }
            }
    }

/*///////////////////////////////////////////////////////////////////////////////////
    else if (shoot == projectile) {
        for (let i = 0; i <= n; i++) {
            for (let j = 0; j <= m; j++) {
                let bullet = strelaShipPole[j];
                if (bullet.x < (strelaPole[i].x + strelaPole[i].width - 15) &&
                bullet.x + bullet.width > (strelaPole[i].x - 12) &&
                bullet.y < strelaPole[i].y + (strelaPole[i].height - 15) &&
                bullet.y + bullet.height > (strelaPole[i].y - 10)) {
                    strelaShipPole.splice(j, 1);
                    m--;
                    strelaPole.splice(i, 1);
                    n--;
                    return true;
                }
            }
        }
    }
/*//////////////////////////////////////////////////////////////////////////////////  
}

function updatePause() {
    if (pauseAccomplished == true) {
        switch (pause) {
            case true:
                pause = false;
                break;
            case false:
                pause = true;
        }
        pauseAccomplished = false; //toto zajisti, aby se hodnota <<pause>> mohla zmenit pouze jednou behem jednoho zmacknuti tlacitka
    }
}

function updateGameArea() {
    if (pause == true) {
        pauseScreen();
    }
    else if (pause == false) {
        document.getElementById("pauseScreen").style.display = "none";
        document.getElementById("h1").style.filter = "blur(0px)";
        document.getElementById("vesmirnaLod").style.filter = "blur(0px)";
        document.getElementById("nepratelskaLod").style.filter = "blur(0px)";
        document.getElementById("easteregg").style.filter = "blur(0px)";
        document.getElementById("hraciPole").style.filter = "blur(0px)";
        document.getElementById("sipkaDolu").style.filter = "blur(0px)";
/*/////////////////////////////////////////////////////////////////////////////////////////////////////////
        if (mySpaceShip.crashWith(enemySpaceShip)) {
            switch (side) {
                case "bottom":
                    mySpaceShip.y -= 3;
                    break;
                case "top":
                    mySpaceShip.y += 3;
                    break;
                case "right":
                    mySpaceShip.x -= 3;
                    break;
                case "left":
                    mySpaceShip.x -= 3;
            }
        }
/*//////////////////////////////////////////////////////////////////////////////////////////////////////////
        if (mySpaceShip.crashWith(horniStena)) {
            mySpaceShip.y += 3;
        }
        if (enemySpaceShip.crashWith(horniStena)) {
            enemySpaceShip.y += 3;
        }
        if (mySpaceShip.crashWith(spodniStena)) {
            mySpaceShip.y -= 3;
        }
        if (enemySpaceShip.crashWith(spodniStena)) {
            enemySpaceShip.y -= 3;
        }
        if (mySpaceShip.crashWith(pravaStena)) {
            mySpaceShip.x -= 3;
        }
        if (enemySpaceShip.crashWith(pravaStena)) {
            enemySpaceShip.x -= 3;
        }
        if (enemySpaceShip.crashWith(levaStena)) {
            enemySpaceShip.x += 3;
        }
        if (mySpaceShip.crashWith(levaStena)) {
            mySpaceShip.x += 3;
        }
        if (!shotLock) {
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
        }
        for (let i = 0; i <= numberOfMeteorites; i++) {
            if (meteoriteCrashWith(mySpaceShip, meteorite[i])) {
                meteoriteCrashing(meteorite[i], spaceShip1, i);
            }
            else if (meteoriteCrashWith(enemySpaceShip, meteorite[i])) {
                meteoriteCrashing(meteorite[i], enemyShip1, i);
            }
        }
        for (let i = 0; i <= numberOfMeteorites2; i++) {
            if (meteoriteCrashWith(mySpaceShip, meteorite2[i])) {
                meteoriteCrashing(meteorite2[i], spaceShip1, i);
            }
            else if (meteoriteCrashWith(enemySpaceShip, meteorite2[i])) {
                meteoriteCrashing(meteorite2[i], enemyShip1, i);
            }
        }
        for (let i = 0; i <= numberOfMeteorites3; i++) {
            if (meteoriteCrashWith(mySpaceShip, meteorite3[i])) {
                meteoriteCrashing(meteorite3[i], spaceShip1, i);
            }
            else if (meteoriteCrashWith(enemySpaceShip, meteorite3[i])) {
                meteoriteCrashing(meteorite3[i], enemyShip1, i);
            }
        }
        for (let i = 0; i <= numberOfMeteorites4; i++) {
            if (meteoriteCrashWith(mySpaceShip, meteorite4[i])) {
                meteoriteCrashing(meteorite4[i], spaceShip1, i);
            }
            else if (meteoriteCrashWith(enemySpaceShip, meteorite4[i])) {
                meteoriteCrashing(meteorite4[i], enemyShip1, i);
            }
        }
        checkCollisionWithMySpaceShip(meteorite);
        checkCollisionWithMySpaceShip(meteorite2);
        checkCollisionWithMySpaceShip(meteorite3);
        checkCollisionWithMySpaceShip(meteorite4);
///////////////////////////////////////////////////////////////////////////////////
        //checkCollisionWithMySpaceShip(projectile);
////////////////////////////////////////////////////////////////////////////////////
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
        if (myGameArea.keys && myGameArea.keys [37]) {arrowMoveLeft();}
        if (myGameArea.keys && myGameArea.keys [39]) {arrowMoveRight();}
        if (myGameArea.keys && myGameArea.keys [40]) {arrowMoveDown();}
        if (myGameArea.keys && myGameArea.keys [38]) {arrowMoveUp();}
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

function pauseScreen() {
    document.getElementById("pauseScreen").style.display = "block";
    document.getElementById("h1").style.filter = "blur(10px)";
    document.getElementById("vesmirnaLod").style.filter = "blur(10px)";
    document.getElementById("nepratelskaLod").style.filter = "blur(10px)";
    document.getElementById("easteregg").style.filter = "blur(10px)";
    document.getElementById("hraciPole").style.filter = "blur(10px)";
    document.getElementById("sipkaDolu").style.filter = "blur(10px)";
}

function meteoriteCrashing(meteoriteType,target,k) {
    switch(meteoriteType) {
        case meteorite[k]:
            target.silaStitu -= 0.5;
            target.getshieldStrength();
            meteorite.splice(k,1);
            numberOfMeteorites--;
            break;
        case meteorite2[k]:
            target.silaStitu -= 0.5;
            target.getshieldStrength();
            meteorite2.splice(k,1);
            numberOfMeteorites2--;
            break;
        case meteorite3[k]:
            target.silaStitu -= 0.5;
            target.getshieldStrength();
            meteorite3.splice(k,1);
            numberOfMeteorites3--;
            break;
        case meteorite4[k]:
            target.silaStitu -= 0.5;
            target.getshieldStrength();
            meteorite4.splice(k,1);
            numberOfMeteorites4--;
    }
    if (document.getElementById("messageBox").style.display != "block" && !shotLock) {
        refuelInterval = setInterval(() => {
            document.getElementById("h1").style.visibility = "hidden";
            document.getElementById("messageBox").style.display = "block";
            document.getElementById("messageBox").innerHTML = ("<p>Strike! Meteorite shot <em>" + target.nazev + "</em>.</p>");
        },300);
        setTimeout(() => {
            clearInterval(refuelInterval);
            document.getElementById("h1").style.visibility = "visible";
            document.getElementById("messageBox").style.display = "none";
        },4000);
    }
    else if (!shotLock) {
        setTimeout(() => {
            meteoriteCrashing(meteoriteType,target,k);
        }, 500);
    }
    
}

function meteoriteCrashWith(ship, meteorite) {
    let shipleft = ship.x;
    let shipright = ship.x + (ship.width - 15);
    let shiptop = ship.y;
    let shipbottom = ship.y + (ship.height - 12);
    let meteoriteleft = meteorite.x;
    let meteoriteright = meteorite.x + (meteorite.width - 15);
    let meteoritetop = meteorite.y;
    let meteoritebottom = meteorite.y + (meteorite.height - 10);
    var crashed;
    if ((shipbottom < meteoritetop) || (shiptop > meteoritebottom) || (shipright < meteoriteleft) || (shipleft > meteoriteright)) {
        crashed = false;
    }
    else {
        crashed = true;
    }
    return crashed;
}

function arrowMoveUp() {
    enemySpaceShip.speed = 2.5;
}

function arrowMoveDown() {
    enemySpaceShip.speed = -1.5;
}

function arrowMoveLeft() {
    enemySpaceShip.moveAngle = -2.5;
}

function arrowMoveRight() {
    enemySpaceShip.moveAngle = 2.5;
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
// Zde je treba uvest, ze ne vse v teto casti kodu udelala AI, pouze asi 2/3!!!

// Promenna sledujici, zda jiz byla provedena strelba
var shotFired = false;
var shotFired2 = false;

// Funkce pro strelbu
function attack(attacker) {
    if (!shotFired) { // Pokud je false (zadna strelba neni provedena)
        n += 1;
        strelaPole[n] = new component(5, 5, "yellow", attacker.x, attacker.y);
        strelaAngle[n] = enemySpaceShip.angle;
        shotFired = true; // Nastavime na true (strelba provedena)
    }
}

function attack2(attacker) {
    if (!shotFired2) { // Pokud je false (zadna strelba neni provedena)
        m += 1;
        strelaShipPole[m] = new component(5, 5, "red", attacker.x, attacker.y);
        strelaShipAngle[m] = mySpaceShip.angle;
        shotFired2 = true; // Nastavime na true (strelba provedena)
    }
}

// Funkce pro obsluhu udalosti stisknuti klavesy
document.addEventListener("keydown", function(event) {
    if (event.keyCode === 32) {
        updatePause(); //kdyz se zmackne mezernik, tak se spusti tato fce, ktera zmeni hodnotu <<pause>>
    }
    if (event.keyCode === 76 && enemyShip1.mana > 0.2 && !shotLock) { // Klavesa L
        attack(enemySpaceShip);
        enemyShip1.mana -= 0.2;
    }
    if (event.keyCode === 71 && spaceShip1.mana > 0.2 && !shotLock) { // Klavesa G
        attack2(mySpaceShip);
        spaceShip1.mana -= 0.2;
    }
});

document.addEventListener("keyup", function(event) {
    if (event.keyCode === 32) {
        pauseAccomplished = true
    }
    if (event.keyCode === 76) { // Klavesa L
        shotFired = false; // Nastavime zpet na false (povolime opetovnou strelbu)
    }
    if (event.keyCode === 71) { // Klavesa G
        shotFired2 = false; // Nastavime zpet na false (povolime opetovnou strelbu)
    }
});

//<------------------AI dotahala---------------------------------------------------->

//<--------------------Konec canvasu------------------------------------------------>
//Pridej: stret dvou strel; stret lodi; powerupy; ???single-/multiplayer???; guidebook?

/*
git add --all
git status
git commit -m "blablabla"
git push origin
*/
