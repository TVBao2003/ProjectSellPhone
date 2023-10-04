
var heart_block = document.querySelectorAll(".heart_item");
console.log(heart_block);
heart_block.forEach(function(element){
    var heart_element = element.querySelector('i');
    element.onclick = function(){
        heart_element.style.color = "#DF052B";
        element.style.color= "#DF052B";
    }
})