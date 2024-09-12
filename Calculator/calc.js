

function mathop() {
let num1=+prompt("Enter The  Number");
    let operator=prompt("Select Operation `[+,-,*,/]`");
    let num2=+prompt("Enter The  Number");
        if (operator == "+") {
        let sum = num1 + num2;
        console.log(`${num1} ${operator} ${num2} = ${sum}`);
    }else if (operator == "-"){
        let Sub = num1 - num2;
        console.log(`${num1} ${operator} ${num2} = ${Sub}`);
    }else if (operator == "*"){
        let Multip = num1 * num2;
        console.log(`${num1} ${operator} ${num2} = ${Multip}`);
    }else if (operator == "/"){
        let Division = num1 / num2;
        console.log(`${num1} ${operator} ${num2} = ${Division}`);
    }

}