import { products } from "../Data/productData.js";
const handleMenuModal = ()=>{
    let elementMenuModal = document.querySelector('.modal_menu');
    let bodyMenuModal = elementMenuModal.querySelector('.modal_menu--body');
    let listTypeMenu = bodyMenuModal.querySelectorAll('.menu_type--item');
    let e_screenMenu = elementMenuModal.querySelector('.screen_menu--title');
    let html_screen_SamSung = `<strong>SamSung</strong>`;
    let html_screen_iPhone = `<strong>iPhone</strong>`;
     //Get data is iPhone:
     products.forEach((e) =>{
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
    products.forEach((e) =>{
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

export default handleMenuModal;