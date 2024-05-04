import { primaryColor, changeColor } from "../Root/root.js";
import { products, DATA_DETAILS_PRODUCT } from "../Data/productData.js";
const handleButtonCard = (listDataProductsAddCart)=>{
    let elementsProduceAct = document.querySelectorAll(".produce_activity");

    elementsProduceAct.forEach(e =>{
        let heartBlock = e.querySelector(".heart_item");
        let iconHeart = heartBlock.querySelector("i");
        let isLiked = false;
        let btnBuy = e.querySelector(".link_page");
        let productID = e.parentElement.previousElementSibling.textContent;
        // Update DATA_DETAILS_PRODUCT
        localStorage.setItem(DATA_DETAILS_PRODUCT, '[]');
        var data =[{}];
        btnBuy.onclick = ()=>{
            let product = products.find((product)=>product.id === productID);
            data[0].name = product.name;
            data[0].price = product.price;
            data[0].img = product.img;
            localStorage.setItem(DATA_DETAILS_PRODUCT,JSON.stringify(data));
           
        }
        //----> change color of block of heart
        heartBlock.onclick = function(){
            if(!isLiked)
            {
                isLiked = true;
                iconHeart.style.color = primaryColor;
                this.style.color= primaryColor;
            }
            else
            {
                isLiked = false;
                iconHeart.style.color = changeColor;
                this.style.color= changeColor;
            }
        }

        //---> change the cart icon to the check icon
        let dataProduct = {};
        let informationProduct = e.previousElementSibling;
        let buttonSaveElement = e.querySelector(".button_save");
        buttonSaveElement.innerHTML = "<i class='bx bx-cart-alt'></i>";

        buttonSaveElement.onclick = ()=>{
            let idProduct = e.parentElement.previousElementSibling.textContent;
            let nameProduct = informationProduct.querySelector('.produce_name').textContent;
            let priceProduct = informationProduct.querySelector('.produce_price').textContent;
            let imageProduct = informationProduct.querySelector('.produce_img img').src;
            buttonSaveElement.innerHTML = "<i class='bx bx-check'></i>";
            buttonSaveElement.querySelector("i").style.color = 'red';
            dataProduct = {
                'Id' : idProduct,
                "Image":imageProduct,
                'Name' : nameProduct,
                'Price' : priceProduct
            }
        listDataProductsAddCart.push(dataProduct);
        }
    })
}

export default handleButtonCard;