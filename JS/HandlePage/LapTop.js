import { products } from "../Data/productData.js";
import { renderData } from "../Root/function.js";
import handleButtonCard from '../Root/handleButtonCard.js';
import { handleSlide } from "../Root/handleSlide.js";
var macContainer = document.querySelector('.list_mac');
var msiContainer = document.querySelector('.list_msi');
var asusContainer = document.querySelector('.list_asus');
var dellContainer = document.querySelector('.list_dell')
var listASUS = [];
var listMac = [];
var listMSI = [];
var listDell = [];
//------ GET DATA ------
for(let i=0; i<products.length; i++){
    if(products[i].name.toLowerCase().includes('macbook')) listMac.push(products[i]);
    if(products[i].name.toLowerCase().includes('msi')) listMSI.push(products[i]);
    if(products[i].name.toLowerCase().includes('asus')) listASUS.push(products[i]);
    if(products[i].name.toLowerCase().includes('dell')) listDell.push(products[i]);

}
//------ Render Data ----
renderData(listMac, macContainer);
renderData(listMSI, msiContainer);
renderData(listASUS, asusContainer);
renderData(listDell, dellContainer);

var listDataProductsAddCart = [];
handleButtonCard(listDataProductsAddCart);

var btnLeftMac = document.querySelector(".btn_left--mac");
var btnRightMac = document.querySelector(".btn_right--mac");
handleSlide(btnLeftMac, btnRightMac);

var btnLeftMSI = document.querySelector(".btn_left--msi");
var btnRightMSI = document.querySelector(".btn_right--msi");
handleSlide(btnLeftMSI, btnRightMSI);

var btnLeftASUS = document.querySelector(".btn_left--asus");
var btnRightASUS = document.querySelector(".btn_right--asus");
handleSlide(btnLeftASUS, btnRightASUS);

var btnLeftDell = document.querySelector(".btn_left--dell");
var btnRightDell = document.querySelector(".btn_right--dell");
handleSlide(btnLeftDell, btnRightDell);

