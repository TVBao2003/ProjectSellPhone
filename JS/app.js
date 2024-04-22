import { openModal, closeModal, addDataToModal, renderData} from "./function.js";
import {products} from './productData.js';
/*--------design item produces--------------- */
//---- Render Items to User-----------------
var listProducts = [...products];
var containerListProduct = document.getElementById("list_produce");
var listDataProductsAddCart = [];
renderData(listProducts, containerListProduct);


//========= handle buttons in item ===============
var elementsProduceAct = document.querySelectorAll(".produce_activity");

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


/*---------------------design bar------------------- */
//----elements of nav-----------
var listItems = document.querySelectorAll('.list-items');
var isOpen = false;

listItems.forEach((item, index)=>{
    //------methods change modal------------
    console.log(item)
//------Primary Part--------------------
    //----index = 0 => Modal Search:
    //----index = 1 => Modal Menu:
    //----index = 2 => Modal Call;
    //----index = 3 => Modal Cart:
    //----index = 4 => new Page;

    if(index === 0){
        //---------create variables---------
        let linkElementSearch = item.querySelector('a');
        let elementSearchModal = document.querySelector(".modal_search");
        let btnCloseSearch = elementSearchModal.querySelector(".button--close");     
        let bodySearchModal = elementSearchModal.querySelector(".modal_search--body");
        let inputSearchElement = bodySearchModal.parentElement.firstElementChild.firstElementChild;
        let btnSearch = inputSearchElement.nextElementSibling;
        
        btnSearch.onclick = ()=>{

            let previousItems = bodySearchModal.querySelectorAll('.dataProducts_contain');
            //------delete all previous items----------
            if(previousItems.length != 0){
                previousItems.forEach((pre_i)=>{
                    bodySearchModal.removeChild(pre_i);
                })
            }


            let valueInputSearch = inputSearchElement.value;
            //-------search items--------
            if(valueInputSearch.length != 0){
                listProducts.forEach((e)=>{
                    if(e.name.includes(valueInputSearch, 0))
                    {                             
                        let Name = e.name;
                        let Img = e.img;
                        let Price = e.price;
                        let Id = e.id;
                        addDataToModal(bodySearchModal, Id, Name, Price, Img);
                        inputSearchElement.value = "";
                    }
                })
                //-----delete an item----------
                let btnDelete = bodySearchModal.querySelectorAll('.dataProducts_button--pop');
                console.log(btnDelete)
                btnDelete.forEach((btn_del) => {
                    btn_del.onclick = () =>{
                        bodySearchModal.removeChild(btn_del.parentElement.parentElement);
                      
                    }
                })
            }
        }

        //---------Close or Open Modal---------------
        item.onclick = () =>{
            if(!isOpen){
                isOpen = true;
                openModal(item, elementSearchModal, linkElementSearch);
            }
        //    openModal(isOpen, item, elementSearchModal, aElement);
         }

         btnCloseSearch.onclick = ()=>{
            if(isOpen){
                isOpen = false;
                closeModal(item, elementSearchModal, linkElementSearch);
            }
        //     }
        //    closeModal(isOpen, item, elementSearchModal, aElement);
        }

        elementSearchModal.onclick = (e) =>{
            if(e.target == e.currentTarget){
                if(isOpen){
                    isOpen = false;
                    closeModal(item, elementSearchModal,linkElementSearch);
                }
            }
        }
    }

//------------Modal Menu--------------
    if(index === 1){
        let linkElementMenu = item.querySelector('a');
        let elementMenuModal = document.querySelector('.modal_menu');
        let btnCloseMenu = elementMenuModal.querySelector('.button--close');
        let iconCloseMenu = elementMenuModal.querySelector('.icon_close');
        let bodyMenuModal = elementMenuModal.querySelector('.modal_menu--body');
        let listTypeMenu = bodyMenuModal.querySelectorAll('.menu_type--item');
        let e_screenMenu = elementMenuModal.querySelector('.screen_menu--title');
        let html_screen_SamSung = `<strong>SamSung</strong>`;
        let html_screen_iPhone = `<strong>iPhone</strong>`;
        //Open Model
        item.onclick = () =>{
            if(!isOpen){
                openModal(item, elementMenuModal, linkElementMenu);
                isOpen = true;
            }
        }
        
        // Close Modal:
        btnCloseMenu.onclick = () =>{
            if(isOpen){
                isOpen = false;
                closeModal(item, elementMenuModal, linkElementMenu);
            }
        }

        iconCloseMenu.onclick = () =>{
            if(isOpen){
                isOpen = false;
                closeModal(item, elementMenuModal, linkElementMenu);
            }
        }

        elementMenuModal.onclick = (e) =>{
            if(e.target == e.currentTarget){
                if(isOpen){
                    isOpen = false;
                    closeModal(item, elementMenuModal, linkElementMenu);
                }
            }
        }


        //Get data is iPhone:
        listProducts.forEach((e) =>{
            if(e.name.includes("iPhone", 0)){
                html_screen_iPhone += `
                    <div class="screen_menu--item">
                        <a href="#">
                            <span>${e.name}</span>
                        </a>
                    </div>
                `
            }
        })
        // get data is SamSung
        listProducts.forEach((e) =>{
            if(e.name.includes("SamSung ", 0)){
                html_screen_SamSung += `
                    <div class="screen_menu--item">
                        <a href="#">
                            <span>${e.name}</span>
                        </a>
                    </div>
                `
            }
        })

        // Display data
        listTypeMenu.forEach( (e, index) =>{
            e.onclick = ()=>{
                if(index == 0){
                    e_screenMenu.innerHTML = "";
                    e_screenMenu.innerHTML = html_screen_SamSung + html_screen_iPhone
                }

                if(index === 1){
                    e_screenMenu.innerHTML = "";
                    e_screenMenu.innerHTML = "There is not goods at index: 1";
                }

                if(index === 2){
                    e_screenMenu.innerHTML = "";
                    e_screenMenu.innerHTML = "There is not goods at index: 2";
                }
                
                if(index === 3){
                    e_screenMenu.innerHTML = "";
                    e_screenMenu.innerHTML = "There is not goods at index: 3";
                }

                if(index === 4){
                    e_screenMenu.innerHTML = "";
                    e_screenMenu.innerHTML = "There is not goods at index: 4";
                }

                if(index === 5){
                    e_screenMenu.innerHTML = "";
                    e_screenMenu.innerHTML = "There is not goods at index: 5";
                }
            }
        })
    }

//----------Modal Call------
    if(index === 2)
    {
        let linkElementCall = item.querySelector('a');
        let elementCallModal = document.querySelector('.modal_call');
        let bodyCallModal = elementCallModal.querySelector('.modal_call--body');
        let btnCloseCall = elementCallModal.querySelector('.button--close');
        let iconCloseCall = elementCallModal.querySelector('.icon_close');

        let list_types = bodyCallModal.querySelectorAll('.call_item--link');
        // Open or Close Modal
        item.onclick = ()=>{
            if(!isOpen){
                isOpen = true;
                openModal(item, elementCallModal, linkElementCall);
            }
        }

        iconCloseCall.onclick = () =>{
            if(isOpen){
                isOpen = false;
                closeModal(item, elementCallModal, linkElementCall);
            }
        }

        btnCloseCall.onclick = () =>{
            if(isOpen){
                isOpen = false;
                closeModal(item, elementCallModal, linkElementCall);
            }
        }

        elementCallModal.onclick = (e) =>{
            if(e.target == e.currentTarget){
                if(isOpen){
                    isOpen = false;
                    closeModal(item, elementCallModal, linkElementCall);
                }
            }
        }
        // Display information when click 
        list_types.forEach( (e, index) =>{
            e.onmouseover = ()=>{
                if(index == 0) {
                    e.querySelector('span').innerHTML = '0865466071';
                }

                if(index == 1){
                    e.querySelector('span').innerHTML = 'truongvanbao111333@gmail.com';
                }
            }
            e.onmouseleave = () =>{
                if(index == 0) {
                    e.querySelector('span').innerHTML = 'Phone Number';
                }

                if(index == 1){
                    e.querySelector('span').innerHTML = 'Gmail';
                }
            }
            
        })

    }
//----------Modal Cart------
    if(index === 3)
    {
        //---element base
        let linkElementCart = item.querySelector('a');
        //---element sort data
        let listCart = [];
        //---elements of modal cart----------
        let elementCartModal = document.querySelector(".modal_cart");
        let iconCloseCart = elementCartModal.querySelector("i");
        let btnCloseCart = elementCartModal.querySelector(".button--close");
        let bodyCartModal = elementCartModal.querySelector('.modal_cart--body');
        
        //-------click to Close------
        iconCloseCart.onclick = () =>{
            if(isOpen){
                isOpen = false;
                closeModal(item, elementCartModal, linkElementCart);
            }
        }

        btnCloseCart.onclick = ()=>{
            if(isOpen){
                isOpen = false;
                closeModal(item, elementCartModal, linkElementCart);
            }
        }
        
        elementCartModal.onclick = (e)=>{
            if(e.target === e.currentTarget){
                if(isOpen){
                    isOpen = false;
                    closeModal(item, elementCartModal, linkElementCart);
                }
            }
        }
        //-------Click to Open------------
        item.onclick = ()=>{
            if(!isOpen){
                isOpen = true;
                openModal(item, elementCartModal, linkElementCart);
            }
             //-----------update new data of cart---------- 
            if(listDataProductsAddCart.length === 0 && /*listProductsExist.size === 0*/ listCart.length === 0 ) 
                alert("There is no any products");           
            else
            {
                // upload data on the cart when click
                const indexFirstElement = 0;
                while(indexFirstElement < listDataProductsAddCart.length)
                {     
                    //check is the first product of listDataProductsAddCart in arrayName ?            
                    if(listCart.includes(listDataProductsAddCart[indexFirstElement].id))
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
                    let indexOfProduct = listProducts.findIndex((e)=>e.id === productID);
             
                    //------change check icon to cart icon
                    elementsProduceAct[indexOfProduct].querySelector(".button_save").innerHTML = "<i class='bx bx-cart-alt'></i>";
        
                    //--------pop product out cart
                    bodyCartModal.removeChild(element.parentElement.parentElement);
                   //-------design nav css style. 
                }
            })
        }
    }

})


//--------------------Modal Menu responsive-------------------
var responsiveMenu = document.querySelector(".responsive_nav_menu");
var modalMenu = document.querySelector("#nav_menu");
var bannerHead = document.querySelector("#bannerHead");
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




