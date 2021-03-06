let btnStarters = document.getElementById("btnStarters")
let btnEntrees = document.getElementById("btnEntrees")
let btnDesserts = document.getElementById("btnDesserts")

// Filter
let starters = dishes.filter(function(item) {
  if(item.course === "Starters")
  return item
})
let entrees = dishes.filter(function(item) {
  if(item.course === "Entrees")
  return item
})
let desserts = dishes.filter(function(item) {
  if(item.course === "Desserts")
  return item
})

btnStarters.addEventListener('click', function() {
  itemsContent.innerHTML = ""
  starters.map(function(item) {
    let starterMap = `
    <h4>${item.title}</h4>
    <p>${item.description}</p>
    <h4>${item.price}</h4>
    <img src="${item.imageURL}" alt="">
    `
    itemsContent.innerHTML += starterMap
  })
})

btnEntrees.addEventListener('click', function() {
  itemsContent.innerHTML = ""
  entrees.map(function(item) {
    let entreeMap = `
    <h4>${item.title}</h4>
    <p>${item.description}</p>
    <h4>${item.price}</h4>
    <img src="${item.imageURL}" alt="">
    `
    itemsContent.innerHTML += entreeMap
  })
})

btnDesserts.addEventListener('click', function() {
  itemsContent.innerHTML = ""
  desserts.map(function(item) {
    let dessertMap = `
    <div class="menuText">
    <h4>${item.title}</h4>
    <p>${item.description}</p>
    <h4>${item.price}</h4>
    </div>
    <img src="${item.imageURL}" class="dessertPicture" alt="dessertPictures">
    
    `
    itemsContent.innerHTML += dessertMap
  })
})

