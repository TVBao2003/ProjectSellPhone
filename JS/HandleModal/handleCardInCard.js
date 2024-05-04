import {products, DATA_DETAILS_PRODUCT} from '../Data/productData.js ';
export const handleCardInCard = ()=>{
    let btnBuy = document.querySelectorAll(".dataProducts_button--buy");
    localStorage.setItem(DATA_DETAILS_PRODUCT, '[]');
    btnBuy.forEach((btn)=>{
        btn.onclick = ()=>{
            let id = btn.parentElement.previousElementSibling.querySelector('.span_id').textContent;
            let product = products.find((product)=>product.id === id);
            let data = [{}];
            data[0].name = product.name;
            data[0].price = product.price;
            data[0].img = product.img;
            localStorage.setItem(DATA_DETAILS_PRODUCT, JSON.stringify(data));
        }
    })
}