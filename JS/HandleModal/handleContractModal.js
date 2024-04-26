const handleContractModal = ()=>{
    let elementCallModal = document.querySelector('.modal_call');
    let bodyCallModal = elementCallModal.querySelector('.modal_call--body');
    let list_types = bodyCallModal.querySelectorAll('.call_item--link');
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

export default handleContractModal;