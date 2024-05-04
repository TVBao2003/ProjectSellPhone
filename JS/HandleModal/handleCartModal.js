import { addDataToModal } from "../Root/function.js";
import { products } from "../Data/productData.js";
const handleCartModal = (listDataProductsAddCart, listCart)=>{
    //---elements of modal cart----------
    let elementCartModal = document.querySelector(".modal_cart");
    let bodyCartModal = elementCartModal.querySelector('.modal_cart--body'); 
    let elementsProduceAct = document.querySelectorAll(".produce_activity");   
    if(listDataProductsAddCart.length === 0 &&  listCart.length === 0 ) 
    alert("There is no any products");           
else
    {// upload data on the cart when click
        const indexFirstElement = 0;
        while(indexFirstElement < listDataProductsAddCart.length)
        {     
            //check is the first product of listDataProductsAddCart in arrayName ?            
            if(listCart.includes(listDataProductsAddCart[indexFirstElement].Id))
            {
                listDataProductsAddCart.shift();
                continue;
            }
            
            //-----add data to bodyModal------
            let dataId = listDataProductsAddCart[indexFirstElement].Id;
            let dataName = listDataProductsAddCart[indexFirstElement].Name;
            let dataPrice = listDataProductsAddCart[indexFirstElement].Price;
            let dataImg = listDataProductsAddCart[indexFirstElement].Image;
            
            //add product to Map and array save name and add to modal cart
            // listProductsExist.set(dataName, dataId);
            listCart.push(dataId);
            // arrayName.push(dataName);
            addDataToModal(bodyCartModal, dataId, dataName, dataPrice, dataImg);
            
            //delete product out of listDataProductsAddCart
            listDataProductsAddCart.shift();
        }
    }     
    
 
    //---------delete Products saved out cart---------------
    var deleteProductsSaved = bodyCartModal.querySelectorAll('.dataProducts_button--pop');
    deleteProductsSaved.forEach((element)=>{
        element.onclick = ()=>{             
            let productID = element.parentElement.previousElementSibling.firstChild.firstChild.textContent;
            let indexOfProduct = products.findIndex((e)=>e.id === productID);
            let indexOfCart = listCart.findIndex((e)=>e === productID);
            //------change check icon to cart icon
            elementsProduceAct[indexOfProduct].querySelector(".button_save").innerHTML = "<i class='bx bx-cart-alt'></i>";
            listCart.splice(indexOfCart, 1);
            //--------pop product out cart
            bodyCartModal.removeChild(element.parentElement.parentElement);
           //-------design nav css style. 
        }
    })
                
}

export default handleCartModal;