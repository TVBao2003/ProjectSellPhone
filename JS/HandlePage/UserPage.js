import { ACCOUNT_SIGNIN,DATA_USERS } from "../Data/dataUser.js";

var listInputFields = document.querySelectorAll(".block_display");
var data = JSON.parse(localStorage.getItem(ACCOUNT_SIGNIN));
function renderData(){
    let data = JSON.parse(localStorage.getItem(ACCOUNT_SIGNIN));
    if(data.length !== 0){
        listInputFields[0].value = data[0]._id;
        listInputFields[1].value = data[0].idOfUser;
        listInputFields[2].value = data[0].email;
        listInputFields[3].value = data[0].name;
        listInputFields[4].value = data[0].phone;
    }
}

renderData()
listInputFields.forEach(inputField =>inputField.readOnly= true)

var btnUpdate = document.querySelector(".btn_update");
var btnSave = document.querySelector(".btn_save");
var btnBack = document.querySelector(".btn_back");
var btnAccept = document.querySelector(".btn_accept");
var rows = document.querySelectorAll(".row");
if(data.length !== 0) {
    //Event btn Update
    btnUpdate.onclick = ()=>{
        listInputFields.forEach(inputField =>{
            inputField.readOnly= false;
            inputField.classList.add("update_input")
        });
        rows.forEach(row=>row.classList.add("row-flex"))
        btnSave.style.display = 'inline';
        btnUpdate.style.display = 'none';
        btnBack.style.display = 'none';
        btnAccept.style.display = 'none';
        localStorage.setItem(ACCOUNT_SIGNIN,'[]');
    }
    //Event btn Save
    btnSave.onclick = ()=>{
        let user = [{
            _id: listInputFields[0].value,
            idOfUser: listInputFields[1].value,
            email: listInputFields[2].value,
            name: listInputFields[3].value,
            phone: listInputFields[4].value, 
        }];
       
        let indexOfData = DATA_USERS.findIndex((e)=>e.email === user[0].email);
        user[0].password = DATA_USERS[indexOfData].password;
        // user[0].password = DATA_USERS[indexOfData].password;
        listInputFields.forEach(inputField => {
            inputField.readOnly=true;
            inputField.classList.remove('update_input');
            
        });
        rows.forEach(row=>row.classList.remove("row-flex"))
        btnSave.style.display = 'none';
        btnUpdate.style.display = 'none';
        btnBack.style.display = 'none';  
        btnAccept.style.display = 'inline';
        localStorage.setItem(ACCOUNT_SIGNIN,JSON.stringify(user));

    }
}else{
    btnUpdate.style.display = 'none';
}