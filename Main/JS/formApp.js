var contain_form = document.querySelector('.form_contain--main');

var e_main_form = contain_form.querySelector('main');
var contain_input = e_main_form.querySelectorAll('.form_input');

var e_input_form = e_main_form.querySelectorAll('.form_input input');

e_input_form.forEach( (e) =>{
    e.onclick = function(){
        this.classList.add("border--green");
        console.log(e)
    }
   
    e.oninput = function(){
        this.classList.add("border--green");
    }
    e.onblur = function(){
        this.classList.remove("border--green");
    }
})
