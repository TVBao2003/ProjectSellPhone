import { addDataToModal } from "../Root/function.js";
import { products } from "../Data/productData.js";
const handleSearchModal = ()=>{
    //---------create variables---------
    let elementSearchModal = document.querySelector(".modal_search");
    let bodySearchModal = elementSearchModal.querySelector(".modal_search--body");
    let inputSearchElement = bodySearchModal.parentElement.firstElementChild.firstElementChild;
    let btnSearch = inputSearchElement.nextElementSibling;
    
    btnSearch.onclick = ()=>{
        let previousItems = bodySearchModal.querySelectorAll('.dataProducts_contain');
        //------delete all previous items----------
        if(previousItems.length != 0)
        {
            previousItems.forEach(pre_i=>{
                bodySearchModal.removeChild(pre_i);
            })
        }
        
        let valueInputSearch = inputSearchElement.value;
        //-------Search items--------
        if(valueInputSearch.length != 0)
        {
            products.forEach((e)=>{
                if(e.name.includes(valueInputSearch, 0))
                {                             
                    let Name = e.name;
                    let Img = e.img;
                    let Price = e.price;
                    let Id = e.id
                    addDataToModal(bodySearchModal, Id, Name, Price, Img);
                    inputSearchElement.value = "";
                }
            })
            //-----delete an item----------
            let btnDelete = bodySearchModal.querySelectorAll('.dataProducts_button--pop');
            btnDelete.forEach(btn_del => {
                btn_del.onclick = () =>{
                    bodySearchModal.removeChild(btn_del.parentElement.parentElement);
                    
                }
            })
        }
    }
}

export default handleSearchModal;