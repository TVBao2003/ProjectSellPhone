import { DATA_DETAILS_PRODUCT } from "../Data/productData.js";
var productName = document.querySelector(".span_name");
var productPrice = document.querySelector(".span_price");
var productImg =document.querySelector(".block_image img");

var data = JSON.parse(localStorage.getItem(DATA_DETAILS_PRODUCT));

productName.textContent = data[0].name;
productImg.src = data[0].img
productPrice.textContent = data[0].price;


