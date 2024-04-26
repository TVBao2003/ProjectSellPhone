import { ACCOUNT_SIGNIN,DATA_USERS_ORTHER } from "./Data/dataUser.js";

var listInputFields = document.querySelectorAll(".block_display");

function renderData(){
    let data = JSON.parse(localStorage.getItem(ACCOUNT_SIGNIN));
    listInputFields[0].value = data[0].userId;
    listInputFields[1].value = data[0].email;
    listInputFields[2].value = data[0].name;
    listInputFields[3].value = data[0].phone;

}

renderData()
listInputFields.forEach(inputField =>inputField.readOnly= true)

var btnUpdate = document.querySelector(".btn_update");
var btnSave = document.querySelector(".btn_save");
var btnBack = document.querySelector(".btn_back");
btnUpdate.onclick = ()=>{
    listInputFields.forEach(inputField =>{
        inputField.readOnly= false;
        inputField.classList.add("update_input")
    });
    btnSave.style.display = 'inline';
    btnUpdate.style.display = 'none';
    btnBack.style.display = 'none';
    localStorage.setItem(ACCOUNT_SIGNIN,'[]');
}

btnSave.onclick = ()=>{

    let user = [{
        userId:listInputFields[0].value,
        email: listInputFields[1].value,
        name: listInputFields[2].value,
        phone: listInputFields[3].value, 
    }];
    let data = JSON.parse(localStorage.getItem(DATA_USERS_ORTHER));
    console.log(data);
    let indexOfData = data.findIndex((e)=>e.email === user[0].email);
    user[0].password = data[indexOfData].password;
    data[indexOfData] = user[0];
    console.log(data);
    listInputFields.forEach(inputField => {
        inputField.readOnly=true;
        inputField.classList.remove('update_input');
        
    });
    btnSave.style.display = 'none';
    btnUpdate.style.display = 'inline';
    btnBack.style.display = 'inline';
    localStorage.setItem(ACCOUNT_SIGNIN,JSON.stringify(user));
    localStorage.setItem(DATA_USERS_ORTHER, JSON.stringify(data));
    renderData();
}