let acToggel=false;
let heat=16;
let speed=1
function toggleAc() {
    if (acToggel == false) {
        acToggel=true
        heat=16
        speed=1
    console.log(`Ac Is Opened , Heat:${heat} C , speed : ${speed}`);
    } else {
        acToggel = false
    console.log("Ac Is closed");

    }
}

function increase() {
    if (acToggel == true && heat < 29 ) {
        heat++
    console.log(`Heat:${heat} C`);
    }
}

function decrease() {
    if (acToggel == true && heat > 16 ) {
        heat--
    console.log(`Heat:${heat} C`);
    }    
}


function up() {
    if (acToggel == true && speed < 5 ) {
        speed++
    console.log(`Speed:${speed} `);
    }    
}

function down() {
    if (acToggel == true && speed > 1 ) {
        speed--
    console.log(`Speed:${speed} `);
    }
}