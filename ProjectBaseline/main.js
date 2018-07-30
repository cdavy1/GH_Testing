//Define
let die = {
    value: 0
};

let objRoll = {
    die1Roll: 0,
    die2Roll: 0,
    numRoll: 0,
    boolHardway: false,
    dealerMessage: "Silent"
};

let strMessage = "";
let strMessageHardway = "Easy";
let boolIsWinner = "false";

//bind to the DOM
let chatter = document.getElementById('text-area');
let rollButton = document.getElementById('rollShooter-button');


rollButton.addEventListener('click', function () {

    let Rolled = Shooter();
    //console.log("At button click " + Rolled.dealerMessage);
    chatter.innerText = Rolled.numRoll + " " + Rolled.dealerMessage;
    //console.log("Number working is: " + numberworking);

});


function Shooter() {

    //Arrange////
    var ThisRoll = objRoll;

    ThisRoll.die1Roll = RollThemBones(die);
    //console.log("First Roll: " + ThisRoll.die1Roll);
    ThisRoll.die2Roll = RollThemBones(die);
    //console.log("Second Roll: " + ThisRoll.die2Roll);
    //console.log("First Roll after the second roll: " + ThisRoll.die1Roll);  
    ThisRoll.numRoll = ThisRoll.die1Roll + ThisRoll.die2Roll;
    ThisRoll.boolHardway = IsItAHardway(ThisRoll);
    ThisRoll.dealerMessage = DealerChatter(ThisRoll);
    console.log("Inside Shooter dealerMessage: The roll is " + ThisRoll.numRoll + " " + ThisRoll.dealerMessage);
    console.log("Inside Shooter dealerMessage hardway is: " + ThisRoll.boolHardway);
    return ThisRoll;

}

function RollThemBones(die) {

    let dieRoll = 0;

    //Roll it
    while (dieRoll === 0) { //Ensure it can't be zero
        dieRoll = Math.floor(Math.random() * 6);
    }
    console.log("Inside the function Die: " + dieRoll);

    return dieRoll;
}


function IsItAHardwayOld(ThisRoll) {
    console.log("Test: " + ThisRoll.die1Roll);

    numHardway = ThisRoll.numRoll % 2;
    console.log("From inside the hardway function looks like a " + objRoll.numRoll + "was rolled");

    console.log(" DieA = " + ThisRoll.die1Roll + "; DieB = " + ThisRoll.die2Roll + "; Mod = " + numHardway);
    ////////////
    //Hardways yes/no
    if (objRoll.die1Roll === objRoll.die2Roll && numHardway === 0) {
        console.log("We have a hardway!");
        ThisRoll.boolHardway = true;
        //return true;
        return true;

    }
    return false;
}

function IsItAHardway(ThisRoll) {
    numHardway = ThisRoll.numRoll % 2;
    console.log(" DieA = " + ThisRoll.die1Roll + "; DieB = " + ThisRoll.die2Roll + "; Mod = " + numHardway);
    //Hardways yes/no
    if (objRoll.die1Roll === objRoll.die2Roll && numHardway === 0) {
        return true;
    }
    return false;
}



function DealerChatter(objRoll) {
    let pointToMake = document.getElementById('thepoint-text').innerText;
    let strMessagePrefix = "";

    //See if it is a winner
    boolIsWinner = objRoll.numRoll == pointToMake;
    console.log("Check is winner: " + boolIsWinner);
    console.log(objRoll.numRoll + "Rolled and point is " + pointToMake);
    if (boolIsWinner) {
        strMessagePrefix = "Winner! ";
    }

    //Add some chatter
    switch (objRoll.numRoll) {
        case 3:
            strMessage = " Craps.";
            break;
        case 5:
            strMessage = "Fever. Five.";
            break;
        case 11:
            strMessage = "Yo!Eleven";
            break;
        case 8:
            strMessage = "Don't be late";
            break;
        default:
            strMessage = "Good roll shooter!";
            break;
    }

    strdealerMessage = strMessagePrefix + strMessage;

    return strdealerMessage;

}
