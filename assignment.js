// ******* Problem 01: Convert Feet to mile  *******

function feetToMile(distance) {
    var unit = 0.000189394; // 1 feet = 0.000189394 mile.
    if (distance < 0) {
        return -1;
    } else {
        var mile = distance * unit; // convert feet to mile
    }
    return mile;
}

// user input:
var feet = 18845;
var mile = feetToMile(feet).toFixed(5); // call function for convert

if (feet >= 0) {
    console.log(feet + " Feet = " + mile + " Mile. \n");//output
} else {
    console.log("Distance can not be negetive.\n");
}


// ******* Problem 02: Wood Calculator *******

function woodCalculator(chair, table, bed) {
    if (chair < 0 || table < 0 || bed < 0) {
        return -1;
    }
    //set dimension for every particle in cubic feet.
    const dimensionOfChair = 1;
    const dimensionOfTable = 3;
    const dimensionOfBed = 5;

    var amountOfChair = chair * dimensionOfChair;
    var amountOfTable = table * dimensionOfTable;
    var amountOfBed = bed * dimensionOfBed;

    var totalAmountOfWood = amountOfChair + amountOfTable + amountOfBed;
    return totalAmountOfWood;
}

// user input:
var chair = 1;
var table = 2;
var bed = 3;
var totalAmountOfWood = woodCalculator(chair, table, bed); //call function for calculate total wood.

if (totalAmountOfWood < 0) { // check negetive value
    console.log("Wood Particle Number can not be negetive.\n");
} else {
    console.log("Total wood in cubic feet: " + totalAmountOfWood + "\n"); //output
}


// ******* Problem 03: Brick Calculator ******* 

function brickCalculator(floor) {
    const maximumHeight = 15, mediumHeight = 12,
        lowerHeight = 10, brickPerFeet = 1000;

    var totalAmountOfBrick, firstTenFloor, afterTenFloor, lastAllFloor,
        brickOfFirst10th, brickOfSecond10th, brickOfLastFloor;

    if (floor <= 0) {
        return -1;
    }
    else if (floor >= 1 && floor <= 10) {
        totalAmountOfBrick = floor * maximumHeight * brickPerFeet;
        return totalAmountOfBrick;
    }
    else if (floor > 10 && floor <= 20) {
        afterTenFloor = floor - 10; // Find after 10 floor
        firstTenFloor = floor - afterTenFloor; // find 1st 10 floor.
        brickOfFirst10th = firstTenFloor * maximumHeight * brickPerFeet; // brick for 1st 10th floor
        brickOfSecond10th = afterTenFloor * mediumHeight * brickPerFeet;// brick for after 10th floor
        totalAmountOfBrick = brickOfFirst10th + brickOfSecond10th;
        return totalAmountOfBrick;
    }
    else if (floor > 20) {
        firstTenFloor = afterTenFloor = 10;
        lastAllFloor = (floor - (firstTenFloor + afterTenFloor));// find floor after 20th floor.
        brickOfFirst10th = firstTenFloor * maximumHeight * brickPerFeet; // brick for 1st 10th floor
        brickOfSecond10th = afterTenFloor * mediumHeight * brickPerFeet;// brick for after 10th floor
        brickOfLastFloor = lastAllFloor * lowerHeight * brickPerFeet;// brick for after 20th floor
        totalAmountOfBrick = brickOfFirst10th + brickOfSecond10th + brickOfLastFloor;
        return totalAmountOfBrick;
    }
}

// user input:
var floor = 21;
var totalAmountOfBrick = brickCalculator(floor); // Call function for calculate brick

if (totalAmountOfBrick <= 0) {
    console.log("Floor Must Be Start With minimum 1 .\n");
} else {
    console.log("Total Amount of Brick: " + totalAmountOfBrick + "\n");//output
}


// ******* Problem 04: Find Tiny Friend ******* 

function tinyFriend(friends) {
    var len = friends.length; //length of array index
    if (len == 0) { // check array is empty or not
        return -1;
    } else if (len == 1) { // check for only one name
        return 1;
    }
    else {
        var tinyName = friends[0];
        for (var i = 0; i < len; i++) {
            if (friends[i].length < tinyName.length) { // find name of minimum length
                tinyName = friends[i]; // replace with pre-set value.
            }
        }
    }
    return tinyName;
}

// user input:
var name = ["Mobinul Islam", "shahria", "kamal ahmed", "jamal vuia", "Naimul Islam", "Said Akbar"];
var tinyName = tinyFriend(name); // call funtion for find tiny name

if (tinyName < 0) {// check empty array
    console.log("Name or Array can not be empty.\n");
} else if (tinyName == 1) { // check if only one name
    console.log("There is nothing to compare so given name is Tiny Name.\n");
}
else {
    console.log("Tiny Friend Name: " + tinyName + "\n"); //output
}