import { products } from "../Data/productData.js";
import { renderData } from "../Root/function.js";
import handleButtonCard from '../Root/handleButtonCard.js';
import { handleSlide } from "../Root/handleSlide.js";
var samsungContainer = document.querySelector('.list_samsung');
var iphoneContainer = document.querySelector('.list_iphone');
var listSamSung = [];
var listIPhone = [];
//------ GET DATA ------
for(let i=0; i<products.length; i++){
    if(products[i].name.toLowerCase().includes('samsung')) listSamSung.push(products[i]);
    if(products[i].name.toLowerCase().includes('iphone')) listIPhone.push(products[i]);

}
//------ Render Data ----
renderData(listSamSung, samsungContainer);
renderData(listIPhone, iphoneContainer);
var listDataProductsAddCart = [];
handleButtonCard(listDataProductsAddCart);

var btnLeftSamSung = document.querySelector(".btn_left--samsung");
var btnRightSamSung = document.querySelector(".btn_right--samsung");
var btnLeftIPhone = document.querySelector(".btn_left--iphone");
var btnRightIPhone = document.querySelector(".btn_right--iphone");



handleSlide(btnLeftSamSung, btnRightSamSung);

handleSlide(btnLeftIPhone, btnRightIPhone);
// listBtnLeft.forEach(btn => {
//     let blockDisplay = btn.previousElementSibling;
//     btn.onclick = ()=>{
//         if(currentWidth !== 0){
//             currentWidth += 220
//             blockDisplay.style.transform = `translateX(${currentWidth}px)`;
//         }
//     }
// })

// listBtnRight.forEach(btn => {
//     let blockDisplay = btn.previousElementSibling;
//     btn.onclick = ()=>{
//         if(currentWidth > ((blockDisplay.offsetWidth - 1100)*-1) ){
//             currentWidth -= 220;
//             blockDisplay.style.transform = `translateX(${currentWidth}px)`;  
//         }
//     }
// })
