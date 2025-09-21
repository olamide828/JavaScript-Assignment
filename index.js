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
        <p>${n.id}<p>
        <h1>${n.firstName}</h1>
        <h1>${n.lastName}</h1>
        <p>${n.maidenName}</p>
        <small>${n.age}</small>
        <img src = "${n.image}" >       
        <p>${n.ip}</p>`;
            



         userContainer.appendChild(userDetails);
        });

    })
       .catch((error) => console.error(error))
};

fetchUser();
console.log("hello world")