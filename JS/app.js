
/*--------design item produces--------------- */
var elementsProduceAct = document.querySelectorAll(".produce_activity");
var listDataProductsAddCart = [];



elementsProduceAct.forEach((e, index)=>{
    let heartBlock = e.querySelector(".heart_item");
    let iconHeart = heartBlock.querySelector("i");
    let isLiked = false;
    let buttonSaveElement = e.querySelector(".button_save");
    buttonSaveElement.innerHTML = "<i class='bx bx-cart-alt'></i>";
    let informationProduct = e.previousElementSibling;
    

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
    //----index = 0 => Modal Search:
    //----index = 1 => Modal Menu:
    //----index = 2 => Modal Call;
    //----index = 3 => Modal Cart:
    //----index = 4 => new Page;

    if(index === 0){
        //---------create variables---------
        isOpen = false;
        let aElement = item.querySelector('a');
        let elementSearchModal = document.querySelector(".modal_search");
        let btnClose = elementSearchModal.querySelector(".button--close");     
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
                    if(e.Name.includes(valueInputSearch, 0))
                    {                             
                        let Name = e.Name;
                        let Img = e.Image;
                        let Price = e.Price;
                        addDataToModal(bodySearchModal, Name, Price, Img);
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

        //---------Close or Open Modal-------------
        item.onclick = () =>{
           openModal(isOpen, item, elementSearchModal, aElement);
         }

        btnClose.onclick = ()=>{
           closeModal(isOpen, item, elementSearchModal, aElement);
        }

        elementSearchModal.onclick = (e) =>{
            if(e.target == e.currentTarget){
                closeModal(isOpen, item, elementSearchModal, aElement);
            }
        }
    }

//---------Modal Menu-------
    if(index === 1){
        isOpen = false;
        let aElement = item.querySelector('a');
        let elementMenuModal = document.querySelector('.modal_menu');
        let btnClose = elementMenuModal.querySelector('.button--close');
        let iconClose = elementMenuModal.querySelector('.icon_close');
        let bodyMenuModal = elementMenuModal.querySelector('.modal_menu--body');
        let list_types = bodyMenuModal.querySelectorAll('.menu_type--item');
        let e_screenMenu = elementMenuModal.querySelector('.screen_menu--title');
        let html_screen_SamSung = `<strong>SamSung</strong>`;
        let html_screen_iPhone = `<strong>iPhone</strong>`;
        // Close or Open Modal
        item.onclick = () =>{
            openModal(isOpen, item, elementMenuModal, aElement);
        }

        btnClose.onclick = () =>{
            closeModal(isOpen, item, elementMenuModal, aElement);
        }

        iconClose.onclick = () =>{
            closeModal(isOpen, item, elementMenuModal, aElement);
        }

        elementMenuModal.onclick = (e) =>{
            if(e.target == e.currentTarget){
                closeModal(isOpen, item, elementMenuModal, aElement);
            }
        }


        // get data is iPhone
        listProducts.forEach((e) =>{
            if(e.Name.includes("iPhone", 0)){
                html_screen_iPhone += `
                    <div class="screen_menu--item">
                        <a href="#">
                            <span>${e.Name}</span>
                        </a>
                    </div>
                `
            }
        })
        // get data is SamSung
        listProducts.forEach((e) =>{
            if(e.Name.includes("SamSung ", 0)){
                html_screen_SamSung += `
                    <div class="screen_menu--item">
                        <a href="#">
                            <span>${e.Name}</span>
                        </a>
                    </div>
                `
            }
        })

        // display data
        list_types.forEach( (e, index) =>{
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
        //element base
        isOpen = false;
        let aElement = item.querySelector('a');
        let elementCallModal = document.querySelector('.modal_call');
        let bodyCallModal = elementCallModal.querySelector('.modal_call--body');
        let btnClose = elementCallModal.querySelector('.button--close');
        let iconClose = elementCallModal.querySelector('.icon_close');

        let list_types = bodyCallModal.querySelectorAll('.call_item--link');
        // Open or Close Modal
        item.onclick = ()=>{
            openModal(isOpen, item, elementCallModal, aElement);
        }

        iconClose.onclick = () =>{
            closeModal(isOpen, item, elementCallModal, aElement);
        }

        btnClose.onclick = () =>{
            closeModal(isOpen, item, elementCallModal, aElement);
        }

        elementCallModal.onclick = (e) =>{
            if(e.target == e.currentTarget){
                closeModal(isOpen, item, elementCallModal, aElement);
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
        
        //-------click to Close------e
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
                   //-------design nav css style. 
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


