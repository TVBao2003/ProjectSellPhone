/*-----element root----- */
var primaryColor = '#DF052B';
var changeColor = '#9d9d9d';

/*--------design item produces--------------- */
var elementsProduceAct = document.querySelectorAll(".produce_activity");
var listDataProducts = [];

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

       listDataProducts.push(dataProduct);
    }
})

/*---------------------design bar------------------- */
//----elements of nav-----------
var listItems = document.querySelectorAll('.list-items');
var listProductsExist = new Map();
var arrayName = [];

listItems.forEach((item, index)=>{
    var isOpen = false;
    var aElement = item.querySelector('a');

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

    //--------is cart item------
    if(index === 3){

        //---elements of modal cart----------
        var elementCartModal = document.querySelector(".modal_cart");
        var iconClose = elementCartModal.querySelector("i");
        var btnClose = elementCartModal.querySelector(".modal_button-close");
        var bodyModal = elementCartModal.querySelector('.modal_body');
        
        //-------click to Close----------
        iconClose.onclick = ()=>{
            if(isOpen){
                clickOffOpen(elementCartModal);
            }
            changeClose(item, aElement);
            clickClose(elementCartModal);
        }
        
        btnClose.onclick = ()=>{
            if(isOpen){
                clickOffOpen(elementCartModal);
            }
            changeClose(item, aElement);
            clickClose(elementCartModal);
        }
        
        elementCartModal.onclick = (e)=>{
            if(e.target === e.currentTarget){
                if(isOpen){
                    clickOffOpen(elementCartModal);
                }
                changeClose(item, aElement);
                clickClose(elementCartModal);
            }
        }

        //-------Click to Open------------
        item.onclick = ()=>{
            if(!isOpen){
                clickOffClose(elementCartModal);
            }

            //-----------update new data---------- 
            if(listDataProducts.length === 0 && listProductsExist.size === 0 ){
                alert("There is no any products")
            }else{
                const indexFirstElement = 0;
                while(indexFirstElement < listDataProducts.length){
                    if(arrayName.includes(listDataProducts[indexFirstElement].Name)){
                        listDataProducts.shift();
                        continue;
                    }
                    listProductsExist.set(listDataProducts[indexFirstElement].Name, listDataProducts[indexFirstElement].Id);
                    arrayName.push(listDataProducts[indexFirstElement].Name);
                 
                    //-----create div tag------
                    var containProductSaved = document.createElement('div');
                    var informationProductSaved = document.createElement('div');
                    //-----design CSS div tag------
               
                    containProductSaved.classList.add('dataProducts_contain');
                    informationProductSaved.classList.add('dataProducts-SpaceBetween');
                    informationProductSaved.classList.add('dataProducts_style');

                    //------create span tag-------
                    var spanElementName = document.createElement('span');
                    var spanElementPrice = document.createElement('span');

                    //------add content and design CSS----------
                    spanElementName.innerText = listDataProducts[indexFirstElement].Name;
                    spanElementPrice.innerText = listDataProducts[indexFirstElement].Price;
                    spanElementName.style.marginTop = '5px';
                    spanElementPrice.style.marginTop = '5px';

                    //---create image tag-----------
                    var imageElement = document.createElement('img');

                    //-------add src and design CSS--------
                    imageElement.src = listDataProducts[indexFirstElement].Image;
                    imageElement.style.width = '30px';
                    imageElement.style.height = '30px';

                    var btnPopProduct= document.createElement('button');
                    var btnBuyProduct= document.createElement('button')
                    btnPopProduct.classList.add("dataProducts_button--pop");
                    btnBuyProduct.classList.add("dataProducts_button--buy");
                    //-----add span and image elements in div tag-------
                    informationProductSaved.appendChild(imageElement);
                    informationProductSaved.appendChild(spanElementName);
                    informationProductSaved.appendChild(spanElementPrice);


                    containProductSaved.appendChild(informationProductSaved);
                    containProductSaved.appendChild(btnBuyProduct);
                    containProductSaved.appendChild(btnPopProduct);
                    bodyModal.appendChild(containProductSaved);
                    
                    listDataProducts.shift();
                }
            }
           

            //---------delete Products saved out cart---------------
            var deleteProductsSaved = document.querySelectorAll('.dataProducts_button--pop');
            deleteProductsSaved.forEach((element)=>{
               element.onclick = ()=>{
                    var nameOfProduct = element.parentElement.querySelector("span").textContent;
                    var idOfProduct = listProductsExist.get(nameOfProduct);
                    var indexOfProduct = arrayName.indexOf(nameOfProduct);

                    arrayName.splice(indexOfProduct, 1);
                    listProductsExist.delete(nameOfProduct);

                    //------change check icon to cart icon
                    elementsProduceAct[idOfProduct].querySelector(".button_save").innerHTML = "<i class='bx bx-cart-alt'></i>";

                    //--------pop product out cart
                    bodyModal.removeChild(element.parentElement)
                   
                }
            })
            clickOpen(elementCartModal);
            changeOpen(item, aElement);
        }
    }
   
})