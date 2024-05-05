
export const handleSlide = (btnLeft, btnRight)=>{
    let currentWidth = 0;
    btnLeft.onclick = ()=>{
        let blockDisplay = btnLeft.nextElementSibling;
        if(currentWidth !== 0){
            currentWidth += 220
            blockDisplay.style.transform = `translateX(${currentWidth}px)`;
        }
    }

    btnRight.onclick = ()=>{
        let blockDisplay = btnRight.previousElementSibling;
        if(currentWidth > ((blockDisplay.offsetWidth - 1100)*-1) ){
            currentWidth -= 220;
            blockDisplay.style.transform = `translateX(${currentWidth}px)`;  
        }
    }
}
