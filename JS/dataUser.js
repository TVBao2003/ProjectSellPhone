var dataUser = [
    {
        email: "bao@gmail.com",
        password: "12345"
    }
]


console.log("data");
const DATA_USERS = "data-users";
localStorage.setItem(DATA_USERS, JSON.stringify(dataUser));

export {DATA_USERS};
