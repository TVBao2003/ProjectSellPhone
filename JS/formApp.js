// var contain_form = document.querySelector('.form_contain--main');

// var e_main_form = contain_form.querySelector('main');
// var contain_input = e_main_form.querySelectorAll('.form_input');

// var e_input_form = e_main_form.querySelectorAll('.form_input input');

class FormSignIn
{
     constructor(id, header, main, footer){
        this.id = id;
        this.header = header;
        this.main = main;
        this.footer = footer;
     }
}


class FieldForm
{
    constructor(message, type, isSuccess){
        this.message = message;
        this.type = type;
        this.isSuccess = isSuccess;
    }
}

class Users{
    constructor(name, email, password){
        this.name = name;
        this.email = email;
        this.password = password;
    }
}
class UserField extends FieldForm{
    constructor(message, type, isSuccess){
        super(message, type, isSuccess);

    }
}
class EmailField extends FieldForm{
    constructor(message, type, isSuccess, check){
        super(message, type, isSuccess);
        this.check = check;
    }
}

class PasswordField extends FieldForm{
    constructor(message, type, isSuccess, length) {
        super(message, type, isSuccess);
        this.length = length;
    }
}

class ConfirmPasswordField extends PasswordField{
    constructor(message, type, isSuccess, length) {
        super(message, type, isSuccess, length);
    }
}

function isNotValid(container, span, object){
    container.classList.add("border--red");
    span.style.color = 'red';
    span.innerHTML = object.message;
    object.isSuccess = false;
}
    
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
    console.log(e_form)

    // if(containInputs.length === 2){

    // }
    var user = new Users();

    if(containInputs.length === 2){
        user_field.isSuccess = true;
        confirm_password_field.isSuccess = true;
    }

    containInputs.forEach(containInput => {

        let e_input_form = containInput.querySelector('input');
        let e_span_form = containInput.querySelector('span');
            
        
        e_input_form.onclick = function(){
            this.classList.remove("border--red");
            this.classList.add("border--green");
            e_span_form.innerHTML = "";
        }
       
        e_input_form.oninput = function(){
            this.classList.add("border--green");
           
        }
        e_input_form.onblur = function(){
            this.classList.remove("border--green");
    
           
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
                isNotValid(this, e_span_form, )
            }else if(e_span_form.title === user_field.type ){
                user.name = this.value;
                user_field.isSuccess = true;
            }
                
        }
        
    });
    console.log(e_form)
    let btnSubmit = e_submit_form.querySelector('input');
    btnSubmit.addEventListener("click", function(e){
        if(email_field.isSuccess && password_field.isSuccess && user_field.isSuccess && confirm_password_field.isSuccess){
            console.log(user);
            e.classList.add('isValid');
         }else{
            containInputs.forEach( containInput=>{
                let e_input_form = containInput.querySelector('input');
                let e_span_form = containInput.querySelector('span');
                isNotValid(e_input_form, e_span_form, email_field);
                isNotValid(e_input_form, e_span_form, password_field);
                isNotValid(e_input_form, e_span_form, user_field);
            })
            e.preventDefault();
         }
    })
    
}

Valid('main','.form_input','.form_submit');



