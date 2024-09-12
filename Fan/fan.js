// Start Fan With One Button

let fan = false;
let speed = 1;
function openFan() {
    if (fan == false) {
        fan = true;
        speed = 1;
        console.log(`Fan Is Open Speed=> ${speed}`);
    } else if (fan == true && speed < 3) {
        speed++
        console.log(`Speed=> ${speed}`);
    } else {
        fan = false;
        console.log(`Fan Is Closed`);
    }
}

// End Fan With One Button

// Start Fan 2
let fsnStatus = false;
let fanSpeed = 1;
function fanToggle() {
    if (fsnStatus == false) {
        fsnStatus = true;
        speed = 1;
        console.log(`Fan Is Open Speed=> ${speed}`);
    } else {
        fsnStatus = false;
        console.log(`Fan Is Closed`);
    }
}
function increase() {
    if (fsnStatus == true && fanSpeed < 4) {
        fanSpeed++;
        console.log(`Fan Speed Is ${fanSpeed}`);
    }
}
function decrease() {
    if (fsnStatus == true && fanSpeed > 1) {
        fanSpeed--;
        console.log(`Fan Speed Is ${fanSpeed}`);
    }
}
// End Fan 2
