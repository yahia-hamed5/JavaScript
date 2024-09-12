let phoneNAme = ['phone1', 'phone2', 'phone3', 'phone4', 'phone5', 'phone6'];
let phonePrice = [100, 200, 300, 400, 500, 600];
let phoneQty = [1, 2, 3, 4, 5, 6];

let showAll = () => {
    console.clear();
    if (phoneNAme.length == 0 && phonePrice.length==0 && phoneQty.length==0) {
        console.log("No Data");
        addPhone()
    } else {
        phoneNAme.forEach((phone, index) => {
            console.log(` ${index + 1}- phone:${phone} ==> Price:${phonePrice[index]} ==> Qty:${phoneQty[index]};`)
        })
    }
}

let addPhone = () => {
    phoneNAme.push(prompt('Enter Phone Name'));
    phonePrice.push(prompt('Enter Phone Price'));
    phoneQty.push(prompt('Enter Phone Qty'));
    showAll();
}

let updatePhone = () => {
    let updateindex = prompt('Enter Index To Update') - 1;
    let witchOne = prompt('Enter What Do You Update')
    if (witchOne == 'name') {
        phoneNAme.splice(updateindex, 1, prompt('Enter The New Name'));
        showAll();
    } else if (witchOne == 'price') {
        phonePrice.splice(updateindex, 1, prompt('Enter The New Price'));
        showAll();
    } else if (witchOne == 'qty') {
        phoneQty.splice(updateindex, 1, prompt('Enter The New Qty'));
        showAll();
    }
}

let deletePhone = () => {
    let deleteindex = prompt('Enter Index To Delete') - 1;
    phoneNAme.splice(deleteindex, 1);
    phonePrice.splice(deleteindex, 1);
    phoneQty.splice(deleteindex, 1);
    showAll();
}