// Add your code here
/*fetch("http://localhost:3000/dogs", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
  body: JSON.stringify({
    dogName: "Byron",
    dogBreed: "Poodle",
  }),
})
.then(function (response) {
    return response.json();
})
.then(function (object) {
    console.log(object);
})
.catch(function (error) {
    alert("Bad things! Ragnarők!");
    console.log(error.message);
})
;*/

const submitData = (userName, userEmail) => {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          name: `${userName}`,
          email: `${userEmail}`,
        }),
      })
      .then(function (response) {
          return response.json();
      })
      .then(function (object) {
        const p = document.createElement("p");
        p.innerHTML = object.id;
        document.body.appendChild(p);
      })
      .catch(function (error) {
        const p = document.createElement("p");
        p.innerHTML = error.message;
        document.body.appendChild(p);
      })
}

//submitData("Sam","sam.camhi@gmail.com")