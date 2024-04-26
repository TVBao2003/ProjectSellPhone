import { UserField, EmailField, PasswordField, ConfirmPasswordField, Users } from "./objects.js";
import { DATA_USERS, ACCOUNT_SIGNIN, DATA_USERS_ORTHER } from "./Data/dataUser.js";


var dataUserOrther;
localStorage.setItem(ACCOUNT_SIGNIN, '[]');
var accountSignIn = JSON.parse(localStorage.getItem(ACCOUNT_SIGNIN));
//------------ Handle DATA -----------------
if(JSON.parse(localStorage.getItem(DATA_USERS_ORTHER)))
{
    if(JSON.parse(localStorage.getItem(DATA_USERS_ORTHER)).length != 0)
        dataUserOrther = JSON.parse(localStorage.getItem(DATA_USERS_ORTHER));
    else dataUserOrther = JSON.parse(localStorage.getItem(DATA_USERS));
}else{
    localStorage.setItem(DATA_USERS_ORTHER, '[]');
    dataUserOrther = JSON.parse(localStorage.getItem(DATA_USERS));
}


// var contain_form = document.querySelector('.form_contain--main');

// var e_main_form = contain_form.querySelector('main');
// var contain_input = e_main_form.querySelectorAll('.form_input');

// var e_input_form = e_main_form.querySelectorAll('.form_input input');

var formSignIn = false;

//------ Method check user is valid
function isValidUser(user, dataUser){
    let emailExist = false;
    let passwordExist = true;
    for(let i=0; i<dataUser.length; i++){
        if(dataUser[i].email === user.email)
        {
            emailExist = true;
            if(dataUser[i].password === user.password)
            {
                return {
                    isSuccess: true,
                    emailFault: false,
                    passwordFault: false
                };
            }
            else
            {
                passwordExist = false;
                break;
            }
        }
    }
     return {
        isSuccess: false,
        emailFault: emailExist,
        passwordFault: passwordExist
    };
}

//---- Method error notification -------------
function isNotValid(container, span, object){
    container.classList.add("border--red");
    span.style.color = 'red';
    span.innerHTML = object.message;
    object.isSuccess = false;
}

// -------------- Method Main -----------------------
function Valid(mainElement, classListInput, submitElement)
{   
    const email_field = new EmailField("This is not an email", "email", false, /^[A-Za-z][\w$.]+@[\w]+\.\w+$/);
    const password_field = new PasswordField(`Password is not valid.`, "password", false, 5);
    const user_field = new UserField('User Name is not valid', 'userName', false);
    const confirm_password_field = new ConfirmPasswordField(`Confirm password is not valid.`, 'confirmPassword', false, 5)

    let e_main_form = document.querySelector(mainElement)
    let containInputs = e_main_form.querySelectorAll(classListInput);
    let e_submit_form = e_main_form.querySelector(submitElement);
    let e_form = e_main_form.parentElement.parentElement;

    // if(containInputs.length === 2){

    // }

    //---create user
    var user = new Users();

    //---check this is a form sign in or sign up
    if(containInputs.length === 2){
        formSignIn = true;
        user_field.isSuccess = true;
        confirm_password_field.isSuccess = true;
    }

    containInputs.forEach(containInput => {

        let e_input_form = containInput.querySelector('input');
        let e_span_form = containInput.querySelector('span');
         // --- Change when click---
        e_input_form.onclick = function()
        {
            this.classList.remove("border--red");
            this.classList.add("border--green");
            e_span_form.innerHTML = "";
        }

       // --- Change when input---
        e_input_form.oninput = function()
        {
            this.classList.remove("border--red");
            this.classList.add("border--green");
            e_span_form.innerHTML = "";
        }

        //---- Change when blur ---
        e_input_form.onblur = function()
        {
            this.classList.remove("border--green");
            //------check are the fielde valid?
            if((!email_field.check.test(this.value) || this.value === "") && e_span_form.title === email_field.type){
                // this.classList.add("border--red");
                // e_span_form.style.color = 'red';
                // e_span_form.innerHTML = email_field.message;
                // email_field.isSuccess = false;
                isNotValid(this, e_span_form, email_field);
            } else if(e_span_form.title === email_field.type){
                user.email = this.value;
                email_field.isSuccess = true;
            }

            if(e_span_form.title === password_field.type && (this.value.length < password_field.length || this.value === "" || this.value.length > password_field.length)){
                // this.classList.add("border--red");
                // e_span_form.style.color = 'red';
                // e_span_form.innerHTML = password_field.message;
                // password_field.isSuccess = false;
                isNotValid(this, e_span_form, password_field);
            } else if(e_span_form.title === password_field.type){
                user.password = this.value;
                password_field.isSuccess = true;
            }

            if(e_span_form.title === confirm_password_field.type && (this.value.length < password_field.length || this.value.length > password_field.length || this.value != user.password)){
                // this.classList.add("border--red");
                // e_span_form.style.color = 'red';
                // e_span_form.innerHTML = confirm_password_field.message;
                // confirm_password_field.isSuccess = false;
                isNotValid(this, e_span_form, confirm_password_field)
            } else if(e_span_form.title === confirm_password_field.type){
                confirm_password_field.isSuccess = true;
            }

            if(e_span_form.title === user_field.type && this.value.length === 0){
                // this.classList.add("border--red");
                // e_span_form.style.color = 'red';
                // e_span_form.innerHTML = user_field.message;
                // user_field.isSuccess = false;
                isNotValid(this, e_span_form, user_field.type);
            }else if(e_span_form.title === user_field.type ){
                user.name = this.value;
                user_field.isSuccess = true;
            }   
        }
    });
    //get button sumit
    
  
    let btnSubmit = e_submit_form.querySelector('input');

    btnSubmit.addEventListener("click", function(e){
        //------check fields are Valid
        if(email_field.isSuccess && password_field.isSuccess && user_field.isSuccess && confirm_password_field.isSuccess){
            //------check this is a form sign in 
            if(formSignIn===true){
                if(JSON.parse(localStorage.getItem(DATA_USERS_ORTHER)).length != 0){
                    dataUserOrther = JSON.parse(localStorage.getItem(DATA_USERS_ORTHER)); 
                }else{
                    dataUserOrther = JSON.parse(localStorage.getItem(DATA_USERS));
                }
                if(!isValidUser(user, dataUserOrther).isSuccess){//--- if this is a form sign in, we will check data from fields are valid
                    containInputs.forEach(containInput=>{
                        let e_input_form = containInput.querySelector('input');
                        let e_span_form = containInput.querySelector('span');
                        //---- the fields are not valid, it will error
                        if(!isValidUser(user, dataUserOrther).emailFault && e_span_form.title === email_field.type)
                            isNotValid(e_input_form, e_span_form, email_field);
                        if(!isValidUser(user, dataUserOrther).passwordFault && e_span_form.title === password_field.type)
                            isNotValid(e_input_form, e_span_form, password_field);   
                    })
                    e.preventDefault();
                }else{
                    dataUserOrther = JSON.parse(localStorage.getItem(DATA_USERS_ORTHER));

                    user = dataUserOrther.find((data)=>data.email === user.email);
                    accountSignIn.push(user);
                    console.log(accountSignIn);
                    localStorage.setItem(ACCOUNT_SIGNIN, JSON.stringify(accountSignIn));
                }
            }else{
                dataUserOrther.push(user);
                localStorage.setItem(DATA_USERS_ORTHER,JSON.stringify(dataUserOrther));
            } // ---- if this is a form sign up, we will push dataUserOrther array
         }else{
            //------Loop input blocks
            containInputs.forEach(containInput=>{
                let e_input_form = containInput.querySelector('input');
                let e_span_form = containInput.querySelector('span');
                //------check fields are not Valid------------
                if(e_span_form.title === email_field.type && !email_field.isSuccess) isNotValid(e_input_form, e_span_form, email_field);
                if(e_span_form.title === password_field.type && !password_field.isSuccess) isNotValid(e_input_form, e_span_form, password_field);
                if(e_span_form.title === user_field.type && !user_field.isSuccess) isNotValid(e_input_form, e_span_form, user_field);
            })
            e.preventDefault();
         }
      
    })
}

Valid('main','.form_input','.form_submit');






