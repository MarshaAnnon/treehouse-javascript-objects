/*
  Create an array of 'pet' objects.
  Each object should have the following properties: 
  name, type, breed, age, and photo
*/
const pets = [
  { 
    name: "Fido",
    type: "Dog",
    breed: "aussie",
    age: 8,
    photo: "img/aussie.jpg"
  },

  { 
    name: "Benny",
    type: "Dog",
    breed: "dachshund",
    age: 1,
    photo: "img/dachshund.jpg",
  },

  { 
    name: "Hunter",
    type: "Dog",
    breed: "golden",
    age: 6,
    photo: "img/golden.jpg",
  },

  { 
    name: "Percy",
    type: "Cat",
    breed: "persian",
    age: 5,
    photo: "img/persian.jpg",
  },

  { 
    name: "Pugworth",
    type: "Dog",
    breed: "pug",
    age: 3,
    photo: "img/pug.jpg",
  },

  { 
    name: "Kitty",
    type: "Cat",
    breed: "tabby",
    age: 2,
    photo: "img/tabby.jpg",
  }
]

let html = ""
for (let i = 0; i < pets.length; i++) {
  //access pet object store in the variable pet
  let pet = pets[i]
  //now you can use dot notation to access the properties of each object
  html += `
    <h2>Name: ${pet.name}</h2>
    <h3>${pet.type} | ${pet.breed}</h3>
    <p>Age: ${pet.age}</p>
    <img src="${pet.photo}" alt="${pet.breed}">
    `
}
//add html inside main element insertAdjacentHTML is faster & more efficient than setting the html directly with innerHTML
document.querySelector("main").insertAdjacentHTML("beforeend", html)