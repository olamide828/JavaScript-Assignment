const userContainer = document.querySelector("#user-container");
const fetchUser = () => {


    fetch("https://dummyjson.com/users")
    .then((res) => res.json())
    .then((data) => {
    users = data.users; 

        
        
        users.forEach((n) => {
        const userDetails = document.createElement("div");
        userDetails.classList.add("userDetails");

        userDetails.innerHTML = `
        <img src = "${n.image}" > 
        <h2>${n.firstName} &nbsp; ${n.lastName}</h2>
        <p>${n.username}</p>
        <p>${n.password}<p>
       
        <small>${n.gender}</small>
              
        <p class="ip">${n.ip}</p>`;
            



         userContainer.appendChild(userDetails);
        });

    })
       .catch((error) => console.error(error))
};

fetchUser();
console.log("hello world")