
/*--------design item produces--------------- */
var elementsProduceAct = document.querySelectorAll(".produce_activity");
var listDataProductsAddCart = [];



elementsProduceAct.forEach((e, index)=>{
    var heartBlock = e.querySelector(".heart_item");
    var iconHeart = heartBlock.querySelector("i");
    var isLiked = false;
    var buttonSaveElement = e.querySelector(".button_save");
    buttonSaveElement.innerHTML = "<i class='bx bx-cart-alt'></i>";
    var informationProduct = e.previousElementSibling;
    

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
    var dataProduct = {};
    buttonSaveElement.onclick = ()=>{
        let nameProduct = informationProduct.querySelector('.produce_name').textContent;
        let priceProduct = informationProduct.querySelector('.produce_price').textContent;
        let imageProduct = informationProduct.querySelector('.produce_img img').src;
        buttonSaveElement.innerHTML = "<i class='bx bx-check'></i>";
        buttonSaveElement.querySelector("i").style.color = 'red';
        dataProduct = {
            'Id' : index,
            "Image":imageProduct,
            'Name' : nameProduct,
            'Price' : priceProduct
        }
       listDataProductsAddCart.push(dataProduct);
    }
})

/*---------------------design bar------------------- */
var listProducts = [];
document.querySelectorAll('.produce_item').forEach((item, index)=>{
    let productName = item.querySelector('.produce_info').children[1].innerText;
    let productPrice = item.querySelector('.produce_info').children[2].innerText;
    let productImg = item.querySelector('.produce_info').children[0].querySelector('img').src;
    let produceElement = {
        'Id': index,
        'Name': productName,
        'Price':productPrice,
        'Image': productImg
    }

    listProducts.push(produceElement);

})
//----elements of nav-----------

var listItems = document.querySelectorAll('.list-items');
var isOpen = false;

listItems.forEach((item, index)=>{
    //------methods change modal------------
    
//------Primary Part--------------------
    if(index === 0){
        isOpen = false;
        let aElement = item.querySelector('a');
        let elementSearchModal = document.querySelector(".modal_search");
        let btnClose = elementSearchModal.querySelector(".button--close");     
        let bodySearchModal = elementSearchModal.querySelector(".modal_search--body");
        let inputSearchElement = bodySearchModal.parentElement.firstElementChild.firstElementChild;
        let btnSearch = inputSearchElement.nextElementSibling;
        let arrayNameProducts = [];

        listProducts.forEach((item)=>{
            arrayNameProducts.push(item.Name);
        })

        btnSearch.onclick = ()=>{
            let valueInputSearch = inputSearchElement.value;
            console.log(valueInputSearch);
            listProducts.forEach((item)=>{
                if(valueInputSearch === item.Name)
                {
                    let Name = item.Name;
                    let Img = item.Image;
                    let Price = item.Price;
                    addDataToModal(bodySearchModal, Name, Price, Img);
                    inputSearchElement.value = "";
                }
            })
        }
        item.onclick = () =>{
           openModal(isOpen, item, elementSearchModal, aElement);
         }

        btnClose.onclick = ()=>{
           closeModal(isOpen, item, elementSearchModal, aElement);
        }
    }


    //--------is cart item------
    if(index === 3)
    {
        //---element base
        isOpen = false;
        let aElement = item.querySelector('a');
        //---element sort data
        let listProductsExist = new Map();
        let arrayName = [];
        //---elements of modal cart----------
        let elementCartModal = document.querySelector(".modal_cart");
        let iconClose = elementCartModal.querySelector("i");
        let btnClose = elementCartModal.querySelector(".button--close");
        let bodyCartModal = elementCartModal.querySelector('.modal_cart--body');
        
        //-------click to Close----------
        iconClose.onclick = () =>{
            closeModal(isOpen, item, elementCartModal, aElement);
        }

        btnClose.onclick = ()=>{
            closeModal(isOpen, item, elementCartModal, aElement);
        }
        
        elementCartModal.onclick = (e)=>{
            if(e.target === e.currentTarget) 
                closeModal(isOpen, item, elementCartModal, aElement);
        }
        //-------Click to Open------------
        item.onclick = ()=>{
            openModal(isOpen, item, elementCartModal, aElement);
             //-----------update new data---------- 
            if(listDataProductsAddCart.length === 0 && listProductsExist.size === 0 ) 
                alert("There is no any products");           
            else
            {
                const indexFirstElement = 0;
                while(indexFirstElement < listDataProductsAddCart.length)
                {                       
                    if(arrayName.includes(listDataProductsAddCart[indexFirstElement].Name))
                    {
                        listDataProductsAddCart.shift();
                        continue;
                    }
                    
                    //-----add data to bodyModal------
                    let dataId = listDataProductsAddCart[indexFirstElement].Id;
                    let dataName = listDataProductsAddCart[indexFirstElement].Name;
                    let dataPrice = listDataProductsAddCart[indexFirstElement].Price;
                    let dataImg = listDataProductsAddCart[indexFirstElement].Image;

                    listProductsExist.set(dataName, dataId);

                    arrayName.push(dataName);
                    
                    addDataToModal(bodyCartModal, dataName, dataPrice, dataImg);

                    listDataProductsAddCart.shift();
                }
            }           
            //---------delete Products saved out cart---------------
            var deleteProductsSaved = document.querySelectorAll('.dataProducts_button--pop');
            deleteProductsSaved.forEach((element)=>{
               element.onclick = ()=>{             
                    let nameOfProduct = element.parentElement.parentElement.querySelector("span").textContent;
                    let idOfProduct = listProductsExist.get(nameOfProduct);
                    let indexOfProduct = arrayName.indexOf(nameOfProduct);
        
                    arrayName.splice(indexOfProduct, 1);
                    listProductsExist.delete(nameOfProduct);
        
                    //------change check icon to cart icon
                    elementsProduceAct[idOfProduct].querySelector(".button_save").innerHTML = "<i class='bx bx-cart-alt'></i>";
        
                    //--------pop product out cart
                    bodyCartModal.removeChild(element.parentElement.parentElement);
                   
                }
            })
        }
    }
})


//--------------------Modal Menu responsive-------------------
var responsiveMenu = document.querySelector(".responsive_nav_menu");
var modalMenu = document.querySelector("#nav_menu");

responsiveMenu.innerHTML = "<i class='bx bx-menu'></i>";

responsiveMenu.onclick = ()=>{
    if(modalMenu.style.display === 'flex')
    {
        modalMenu.style.display = 'none';   
        responsiveMenu.innerHTML = "<i class='bx bx-menu'></i>";        
    }
    else
    {
        modalMenu.style.display = 'flex';
        responsiveMenu.innerHTML = "<i class='bx bx-x'></i>";
    }  
}


