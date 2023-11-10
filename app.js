/*-----element root----- */
var primaryColor = '#DF052B';
var changeColor = '#9d9d9d';

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
        if(!isLiked){
            isLiked = true;
            iconHeart.style.color = primaryColor;
            this.style.color= primaryColor;
        }else{
            isLiked = false;
            iconHeart.style.color = changeColor;
            this.style.color= changeColor;
        }
    }

    //---> change the cart icon to the check icon
    var dataProduct = {};
    buttonSaveElement.onclick = ()=>{
        var nameProduct = informationProduct.querySelector('.produce_name').textContent;
        var priceProduct = informationProduct.querySelector('.produce_price').textContent;
        var imageProduct = informationProduct.querySelector('.produce_img img').src;
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
//----elements of nav-----------
var listItems = document.querySelectorAll('.list-items');
var isOpen = false;

listItems.forEach((item, index)=>{
    //------methods change modal------------
    function clickClose(e){
        isOpen = false;
        e.classList.add('field_close');
    }
    
    function clickOpen(e){
        isOpen = true;
        e.classList.add('field_open');
    }
    
    function clickOffClose(e){
        isOpen = true;
        e.classList.remove('field_close');
    }
    
    function clickOffOpen(e){
        isOpen = false;
        e.classList.remove('field_open');
    }

    function changeClose(element, linkElement){
        linkElement.style.color = "white";
        element.classList.remove('change_click-item');
    }
    
    function changeOpen(element, linkElement){
        linkElement.style.color = primaryColor;
        element.classList.add('change_click-item');
    }

    //----Primary methods-------

    function openModal(check, element, modalElement, linkElement){
        if(!check){
            clickOffClose(modalElement);             
            clickOpen(modalElement);
            changeOpen(element, linkElement);
        }
    }

    function closeModal(check, element, modalElement, linkElement){
        if(check){
            clickOffOpen(modalElement);
            clickClose(modalElement);
            changeClose(element, linkElement);
        }
    }

    function addDataToModal(bodyModal, dataName, dataPrice, dataImg){
        var containProductSaved = document.createElement('div');
        var containButtonsBuyOrDelete = document.createElement("div");
        var informationProductSaved = document.createElement('div');
        //-----design CSS div tag------
            
        containProductSaved.classList.add('dataProducts_contain');
        informationProductSaved.classList.add('dataProducts-SpaceBetween');
        informationProductSaved.classList.add('dataProducts_style');
        containButtonsBuyOrDelete.classList.add('dataProducts-SpaceBetween')
        //------create span tag-------
        var spanElementName = document.createElement('span');
        var spanElementPrice = document.createElement('span');
                    
        //------add content and design CSS----------
        spanElementName.innerText = dataName;
        spanElementPrice.innerText = dataPrice;
        spanElementName.style.marginTop = '5px';
        spanElementPrice.style.marginTop = '5px';

        //---create image tag-----------
        var imageElement = document.createElement('img');
                    
        //-------add src and design CSS--------
        imageElement.src = dataImg;
        imageElement.style.width = '30px';
        imageElement.style.height = '30px';

        var btnPopProduct= document.createElement('button');
        var btnBuyProduct= document.createElement('button');

        btnPopProduct.classList.add("dataProducts_button--pop");
        btnBuyProduct.classList.add("dataProducts_button--buy");
                 
        btnBuyProduct.innerHTML = "<i class='bx bx-check'></i>";
        btnPopProduct.innerHTML = "<i class='bx bx-x'></i>";

        //-----add span and image elements in div tag-------
        informationProductSaved.appendChild(imageElement);
        informationProductSaved.appendChild(spanElementName);
        informationProductSaved.appendChild(spanElementPrice);

        containButtonsBuyOrDelete.appendChild(btnBuyProduct);
        containButtonsBuyOrDelete.appendChild(btnPopProduct);

        containProductSaved.appendChild(informationProductSaved);
        containProductSaved.appendChild(containButtonsBuyOrDelete);
        bodyModal.appendChild(containProductSaved);
    }


//------Primary Part--------------------
    if(index === 0){
        isOpen = false;
        var aElement = item.querySelector('a');
        var elementSearchModal = document.querySelector(".modal_search");
        var btnClose = elementSearchModal.querySelector(".button--close");     

        item.onclick = () =>{
           openModal(isOpen, item, elementSearchModal, aElement);
        }

        btnClose.onclick = ()=>{
           closeModal(isOpen, item, elementSearchModal, aElement)
        }
    }


    //--------is cart item------
    if(index === 3){
        //---element base
        isOpen = false;
        var aElement = item.querySelector('a');
        //---element sort data
        var listProductsExist = new Map();
        var arrayName = [];
        //---elements of modal cart----------
        var elementCartModal = document.querySelector(".modal_cart");
        var iconClose = elementCartModal.querySelector("i");
        var btnClose = elementCartModal.querySelector(".button--close");
        var bodyCartModal = elementCartModal.querySelector('.modal_cart--body');
        
        //-------click to Close----------
        iconClose.onclick = () =>{
            closeModal(isOpen, item, elementCartModal, aElement);
        }

        btnClose.onclick = ()=>{
            closeModal(isOpen, item, elementCartModal, aElement);
        }
        
        elementCartModal.onclick = (e)=>{
            if(e.target === e.currentTarget) closeModal(isOpen, item, elementCartModal, aElement);
        }
        //-------Click to Open------------
        item.onclick = ()=>{
            openModal(isOpen, item, elementCartModal, aElement);
             //-----------update new data---------- 
            if(listDataProductsAddCart.length === 0 && listProductsExist.size === 0 ) alert("There is no any products")           
            else{
                const indexFirstElement = 0;
                while(indexFirstElement < listDataProductsAddCart.length){                       
                    if(arrayName.includes(listDataProductsAddCart[indexFirstElement].Name)){
                        listDataProductsAddCart.shift();
                        continue;
                    }
                    
                    //-----add data to bodyModal------
                    let dataId = listDataProductsAddCart[indexFirstElement].Id
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
                    var nameOfProduct = element.parentElement.parentElement.querySelector("span").textContent;
                    var idOfProduct = listProductsExist.get(nameOfProduct);
                    var indexOfProduct = arrayName.indexOf(nameOfProduct);
        
                    arrayName.splice(indexOfProduct, 1);
                    listProductsExist.delete(nameOfProduct);
        
                    //------change check icon to cart icon
                    elementsProduceAct[idOfProduct].querySelector(".button_save").innerHTML = "<i class='bx bx-cart-alt'></i>";
        
                    //--------pop product out cart
                    bodyCartModal.removeChild(element.parentElement.parentElement)
                   
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
    if(modalMenu.style.display === 'flex'){
        modalMenu.style.display = 'none';   
        responsiveMenu.innerHTML = "<i class='bx bx-menu'></i>";        
    }else{
        modalMenu.style.display = 'flex'
        responsiveMenu.innerHTML = "<i class='bx bx-x'></i>";
    }  
}


