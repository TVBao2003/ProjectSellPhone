import { ACCOUNT_SIGNIN } from "../Data/dataUser.js";

const handleDataSignIn = ()=>{
    let accountSignIn = JSON.parse(localStorage.getItem(ACCOUNT_SIGNIN));
    let itemAccount = document.querySelectorAll('.list-items')[4].querySelector('b');
    let btnSignOut = document.querySelector('.list_menu--account .itemAccount a p')
    if(accountSignIn !== null && accountSignIn.length !== 0){
        itemAccount.textContent = accountSignIn[0].name
        btnSignOut.textContent = "Sign Out";
    }else{
        itemAccount.textContent = 'Sign In';
        btnSignOut.textContent = "Sign In";
    }
    
    //------handle sign out-----------
    let itemSignOut = document.querySelector(".list_menu--account").querySelector('.itemAccount');
    itemSignOut.onclick = ()=>{
        accountSignIn = [];
        localStorage.setItem(ACCOUNT_SIGNIN, JSON.stringify(accountSignIn));
    }

}    
export default handleDataSignIn;