var heart_block = document.querySelectorAll(".heart_item");

heart_block.forEach(function(element){
    var heart_element = element.querySelector('i');
    element.onclick = function(){
        heart_element.style.color = "#DF052B";
        element.style.color= "#DF052B";
    }
})


var elementCartModal = document.querySelector(".modal_cart");
var iconClose = elementCartModal.querySelector("i");
var btnClose = elementCartModal.querySelector(".modal_button-close");
var isOpen = false;

function clickClose(e){
    isOpen = false;
    e.classList.add('field_close');
}

function clickOpen(e){
    isOpen = true;
    e.classList.add('field_open');
}
function clickOffClose(e){
    isOpen = true;
    e.classList.remove('field_close');
}

function clickOffOpen(e){
    isOpen = false;
    e.classList.remove('field_open');
}

iconClose.onclick = ()=>{
    if(isOpen){
        clickOffOpen(elementCartModal);
    }
    aElementCart.style.color = "white";
    elementCart.classList.remove('change_click-item');
    clickClose(elementCartModal);
}

btnClose.onclick = ()=>{
    if(isOpen){
        clickOffOpen(elementCartModal);
    }
    aElementCart.style.color = "white";
    elementCart.classList.remove('change_click-item');
    clickClose(elementCartModal);
}

elementCartModal.onclick = (e)=>{
    if(e.target === e.currentTarget){
        if(isOpen){
            clickOffOpen(elementCartModal);
        }
        aElementCart.style.color = "white";
        elementCart.classList.remove('change_click-item');
        clickClose(elementCartModal);
    }
}

var elementCart = document.querySelectorAll('.list-items')[3];
var aElementCart = elementCart.querySelector('a');
elementCart.onclick = ()=>{
    if(!isOpen){
        clickOffClose(elementCartModal);
    }
    clickOpen(elementCartModal);
    aElementCart.style.color = "#DF052B";
    elementCart.classList.add('change_click-item');
}

