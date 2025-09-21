const userContainer = document.querySelector("#user-container");
const fetchProduct = () => {


    fetch("https://dummyjson.com/users")
    .then((res) => res.json())
    .then((data) => {

    users = data.users; 

        users.forEach((p) => {
        const userEl = document.createElement("div");
        userEl.classList.add("userCard");

        userEl.innerHTML = `<img src = ${p.image} >`
            
        });
        
        

    });
}

console.log("hello world")