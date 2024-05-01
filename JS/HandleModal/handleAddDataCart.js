import { primaryColor, changeColor } from "../root.js";
const handleAddDataCart = (listDataProductsAddCart)=>{
    let elementsProduceAct = document.querySelectorAll(".produce_activity");

    elementsProduceAct.forEach(e =>{
        let heartBlock = e.querySelector(".heart_item");
        let iconHeart = heartBlock.querySelector("i");
        let isLiked = false;
        
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

export default handleAddDataCart;