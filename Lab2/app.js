// Swaps between pages in the website
function showPage(evt, pageName) {
    console.log("Swapping Pages")
    document.querySelectorAll(".page").forEach(page => {
        console.log(page)
        page.style.display = 'none'
    })
    document.getElementById(pageName).style.display = 'block'
}

//Predefined products avaliable on the website
const products = [
    {id:1, name: "Cereal", price:4, vegetarian: true, glutenfree: false, organic: false},
    {id:2, name: "Jam", price:2.75, vegetarian: true, glutenfree: false, organic: false},
    {id:3, name: "Eggs", price:12, vegetarian: true, glutenfree: false, organic: false},
    {id:4, name: "Milk", price:3, vegetarian: true, glutenfree: false, organic: false},
    {id:5, name: "Flour", price:6, vegetarian: true, glutenfree: false, organic: false},
    {id:6, name: "Carrots", price:1.5, vegetarian: true, glutenfree: false, organic: false},
    {id:7, name: "Onions", price:3.5, vegetarian: true, glutenfree: false, organic: false},
    {id:8, name: "Bread", price:3, vegetarian: true, glutenfree: false, organic: false},
    {id:9, name: "Olive Oil", price:8, vegetarian: true, glutenfree: false, organic: false},
    {id:10, name: "Butter", price:8, vegetarian: true, glutenfree: false, organic: false},    
]


function createProductList() {
    const productsList = document.getElementById("product_list")

    products.forEach(prod => {
        const item = document.createElement("div")
        item.innerHTML = `
        <h3>${prod.name}</h3>
        <img height="150px" width="200px" src="\images\\${prod.id}.jpeg" alt="${prod.name}">
        <p>$${prod.price} CAD</p>
        <button>Add ${prod.name} to Cart</button>
        `
        item.id = prod.id
        item.classList.add("item")
        productsList.appendChild(item)
    })
}

function sort(target) {
    const productsList = document.getElementById("product_list")
    if (target == "asc") {
        products.sort((a,b)=> a.price - b.price)
    }
    else {
        products.sort((a,b)=> b.price - a.price)
    }
    productsList.innerHTML = ""
    createProductList()
}

createProductList()