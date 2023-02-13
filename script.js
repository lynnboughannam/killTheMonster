
let count = 0; //counting heals

function NewGame() {
    location.reload();
}
function YouWin() {
    document.getElementById("log").style.display = "none";
    document.querySelector(".buttons").style.display = "none";


    document.getElementById("final").innerHTML += "<h2>Game Over<h2> <h3>You Win!<h3>";
    document.getElementById("final").innerHTML += "<input id='btn' type='button' value='START NEW GAME' onclick='NewGame()'>";


}
function YouLose() {
    document.getElementById("log").style.display = "none";
    document.querySelector(".buttons").style.display = "none";

    document.getElementById("final").innerHTML += "<h2>Game Over<h2> <h3>You Lose!<h3>";
    document.getElementById("final").innerHTML += "<input id='btn' type='button' value='START NEW GAME' onclick='NewGame()'>";


}
function Draw() {
    document.getElementById("log").style.display = "none";
    document.querySelector(".buttons").style.display = "none";

    document.getElementById("final").innerHTML += "<h2>Game Over<h2> <h3>Draw!<h3>";

    document.getElementById("final").innerHTML += "<input id='btn' type='button' value='START NEW GAME' onclick='NewGame()'>";


}

function Update(monsterHealth, yourHealth) {
    document.getElementById("monster-color").style.width = monsterHealth + "%";
    document.getElementById("your-color").style.width = yourHealth + "%";
}
let monsterHealth = 100;
let yourHealth = 100;


function attack() {
    count = 0;// counting heal button back to zero

    let monsterAttack = Math.floor(Math.random() * 99) + 1;//random number between 1 and 99 
    //damage done by player
    console.log("attack: " + monsterAttack);//for testing purposes

    let yourAttack = Math.floor(Math.random() * 99) + 1;
    //damage done by monster

    console.log("your attack: " + yourAttack);

    monsterHealth -= monsterAttack;
    yourHealth -= yourAttack;
    console.log(" ");
    console.log("monster health: " + monsterHealth);
    console.log("your health: " + yourHealth);//for testing purposes


    if (yourHealth === 0 && monsterHealth === 0 || monsterHealth <= 0 && yourHealth <= 0) {
        monsterHealth = 0;
        yourHealth = 0;

        Draw();
    }
    else if (monsterHealth <= 0) {
        monsterHealth = 0;
        YouWin();
    }
    else if (yourHealth <= 0) {
        yourHealth = 0;
        YouLose();
    }
    //changing the healthbar
    Update(monsterHealth, yourHealth);
    // document.getElementById("monster-color").style.width = monsterHealth + "%";
    // document.getElementById("your-color").style.width = yourHealth + "%";

    if (monsterHealth != 0 && yourHealth != 0) {

        //updating battle log

        document.getElementById("log").innerHTML += "<p><span id='monster'>Monster</span> attacks and deal <span id=red> " + yourAttack + "</span><p><span id='player'>Player</span> attacks and deal <span id=red>" + monsterAttack + " </span>";

        //editing the player and mosnster span
        // document.getElementById("monster").style.color = "orange";
        // document.getElementById("player").style.color = "purple";
    }
    console.log("");
    console.log("yourHealth" + yourHealth);
    console.log("monsterHealth" + monsterHealth);



    Test();
}

function Test() {

    if (yourHealth < monsterHealth * 0.8) {

        document.getElementById("btnSpecial").style.backgroundColor = "rgb(136, 0, 91)";
    }
    else {
        document.getElementById("btnSpecial").style.backgroundColor = "rgb(131, 82, 115)";

    }
}
function specialAttack() {
    count = 0;// counting heal button back to zero

    let random = (Math.floor(Math.random() * (99 - yourHealth)) + yourHealth);

    if (yourHealth < monsterHealth * 0.8) {

        //document.getElementById("btnSpecial").style.backgroundColor = "rgb(136, 0, 91)";
        console.log("RANDOM " + random);
        monsterHealth -= random//value b/w your health and 99
        if (yourHealth === 0 && monsterHealth === 0 || monsterHealth <= 0 && yourHealth <= 0) {
            monsterHealth = 0;
            yourHealth = 0;

            Draw();
        }
        else if (monsterHealth <= 0) {
            monsterHealth = 0;
            YouWin();
        }
        else if (yourHealth <= 0) {
            yourHealth = 0;
            YouLose();
        }
        Update(monsterHealth, yourHealth);

        if (monsterHealth != 0 && yourHealth != 0) {

            //updating battle log

            document.getElementById("log").innerHTML += "<p><span id='player'>Player</span> attacks and deal <span id=red>" + random + " </span>";

        }
    }

    console.log("You" + yourHealth);
    console.log("MONSTER" + monsterHealth);

    Test();

}


function heal() {
    count = count + 1;

    if (count <= 3) {
        let randHeal = Math.floor(Math.random() * 99) + 1;
        console.log("");
        console.log("heal random: " + randHeal);
        console.log("heal count: " + count);
        if (randHeal > 100 - yourHealth) {
            randHeal = 100 - yourHealth
        }
        yourHealth += randHeal;

        if (yourHealth > 100) {
            yourHealth = 100;
        }
        console.log("heal health: " + yourHealth);

        document.getElementById("your-color").style.width = yourHealth + "%";

        if (monsterHealth != 0 && yourHealth != 0) {

            //updating battle log

            document.getElementById("log").innerHTML += "<p><span id='player'>Player</span> heals himself for <span id=green> " + randHeal + "</span>";

        }

    }
    else if (count > 3) {
        document.getElementById("btnHeal").style.backgroundColor = "rgb(131, 82, 115)";

    }
}