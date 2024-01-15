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
    if(!check)
    {
        clickOffClose(modalElement);             
        clickOpen(modalElement);
        changeOpen(element, linkElement);
    }
}

function closeModal(check, element, modalElement, linkElement){
    if(check)
    {
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
    containButtonsBuyOrDelete.classList.add('dataProducts-SpaceBetween');
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
             
    btnBuyProduct.innerHTML = `
                                <a href="#">
                                    <i class='bx bx-check'></i>
                                </a>
                             `;
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

// 