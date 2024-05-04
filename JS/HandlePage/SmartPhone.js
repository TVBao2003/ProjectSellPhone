import { products } from "../Data/productData.js";
import { renderData } from "../Root/function.js";
import handleButtonCard from '../HandleModal/handleButtonCard.js'
var samsungContainer = document.querySelector('.list_samsung');
var iphoneContainer = document.querySelector('.list_iphone');
var listSamSung = [];
var listIPhone = [];
//------ GET DATA ------
for(let i=0; i<products.length; i++){
    if(products[i].name.toLowerCase().includes('samsung')) listSamSung.push(products[i]);
    if(products[i].name.toLowerCase().includes('iphone')) listIPhone.push(products[i]);

}
renderData(listSamSung, samsungContainer);
renderData(listIPhone, iphoneContainer);
var listDataProductsAddCart = [];

handleButtonCard(listDataProductsAddCart);
