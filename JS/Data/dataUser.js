var dataUser = [
    {
        email: "bao@gmail.com",
        password: "12345"
    }
]


console.log("data");
const DATA_USERS = "data-users";
const ACCOUNT_SIGNIN = "account-sign";
const DATA_USERS_ORTHER = "data-users-orther";
localStorage.setItem(DATA_USERS, JSON.stringify(dataUser));

export {DATA_USERS, ACCOUNT_SIGNIN, DATA_USERS_ORTHER};
