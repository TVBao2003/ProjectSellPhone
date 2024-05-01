async function getData(){
    return await fetch('http://localhost:8000/user')
    .then(res => res.json())
    .then(data => data)
}

export const DATA_USERS = await getData();
export const ACCOUNT_SIGNIN = "account-sign";
// const DATA_USERS = "data-users";
// const DATA_USERS_ORTHER = "data-users-orther";
// localStorage.setItem(DATA_USERS, JSON.stringify(dataUser));

// export {DATA_USERS, ACCOUNT_SIGNIN, DATA_USERS_ORTHER};
