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
// renderData(listMac, macContainer);
var listDataProductsAddCart = [];
handleButtonCard(listDataProductsAddCart);

var btnLeftSamSung = document.querySelector(".btn_left--samsung");
var btnRightSamSung = document.querySelector(".btn_right--samsung");
handleSlide(btnLeftSamSung, btnRightSamSung);



var btnLeftIPhone = document.querySelector(".btn_left--iphone");
var btnRightIPhone = document.querySelector(".btn_right--iphone");
handleSlide(btnLeftIPhone, btnRightIPhone);
