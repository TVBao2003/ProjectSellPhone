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


class User{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }
}
class FieldSingIn 
 {
    constructor(message, type, isSuccess){
        this.message = message;
        this.type = type;
        this.isSuccess = isSuccess;
    }
}

class EmailField extends FieldSingIn{
    constructor(message, type, isSuccess, check){
        super(message, type, isSuccess);
        this.check = check;
    }
}

class PasswordField extends FieldSingIn{
    constructor(message, type, isSuccess, length) {
        super(message, type, isSuccess);
        this.length = length;
    }
}


function Valid(mainElement, classListInput, submitElement)
{   
    const email_field = new EmailField("This is not an email", "email", false, /^[A-Za-z][\w$.]+@[\w]+\.\w+$/);
    const password_field = new PasswordField(`Password is not valid`, "password", false, 5)
    
    const user = new User();
    let e_main_form = document.querySelector(mainElement)
    let containInputs = e_main_form.querySelectorAll(classListInput);
    let e_submit_form = e_main_form.querySelector(submitElement);

    // if(containInputs.length === 2){

    // }
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
                this.classList.add("border--red");
                e_span_form.style.color = 'red';
                e_span_form.innerHTML = email_field.message;
                email_field.isSuccess = false;
            } else if(e_span_form.title === email_field.type){
                user.email = this.value;
                email_field.isSuccess = true;
            }

            if(e_span_form.title === password_field.type && (this.value.length < password_field.length || this.value === "" || this.value.length > password_field.length)){
                this.classList.add("border--red");
                e_span_form.style.color = 'red';
                e_span_form.innerHTML = password_field.message + `. Password is only ${password_field.length} characters.`;
                password_field.isSuccess = false;
            } else if(e_span_form.title === password_field.type){
                user.password = this.value;
                password_field.isSuccess = true;
            }

           
        }
        
    });
    let btnSubmit = e_submit_form.querySelector('input');
    btnSubmit.onclick = ()=>{
        if(email_field.isSuccess && password_field.isSuccess){
           console.log(user);
            btnSubmit.classList.add('isValid');
        }
    }
    

}

Valid('main','.form_input','.form_submit');


