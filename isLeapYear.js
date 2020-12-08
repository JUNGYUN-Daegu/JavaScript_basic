function isLeap() {

var year = prompt("what year is it?");

if (year % 4 == 0) {
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            console.log("Leap year.")
        } else {
            console.log("Not leap year.")
        }
    }
    console.log("Leap year.")
} else {
    console.log("Not leap year.")
}
}

isLeap();
