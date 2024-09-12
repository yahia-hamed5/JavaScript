let tasks = [];

let showAll = () => {
    console.clear();
    tasks.forEach((ele, index) => {
        console.log(`${index + 1}-${ele}`);
    })
}

let addTask = () => {
    let newTAsk = prompt('Enter New Task ');
    tasks.push(newTAsk);
    showAll();
}

let updateTask = () => {
    let updateindex = +prompt('Enter The Index To Updated') - 1;
    tasks.splice(updateindex, 1, prompt('Enter The Task to Update'));
    showAll();
}

let deleteTask = () => {
    let updateindex = +prompt('Enter The Index To Updated') - 1;
    tasks.splice(updateindex, 1);
    showAll();
}