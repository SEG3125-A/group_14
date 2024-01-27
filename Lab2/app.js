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
    {id:2, name: "Jam", price:2.75, vegetarian: true, glutenfree: false, organic: true},
    {id:3, name: "Eggs", price:12, vegetarian: false, glutenfree: false, organic: false},
    {id:4, name: "Milk", price:3, vegetarian: false, glutenfree: false, organic: false},
    {id:5, name: "Flour", price:6, vegetarian: true, glutenfree: false, organic: true},
    {id:6, name: "Carrots", price:1.5, vegetarian: true, glutenfree: true, organic: true},
    {id:7, name: "Onions", price:3.5, vegetarian: true, glutenfree: true, organic: true},
    {id:8, name: "Bread", price:3, vegetarian: true, glutenfree: false, organic: false},
    {id:9, name: "Olive Oil", price:8, vegetarian: true, glutenfree: true, organic: true},
    {id:10, name: "Butter", price:8, vegetarian: false, glutenfree: false, organic: false},    
]


function createProductList(productArray) {
    const productsList = document.getElementById("product_list");
    productsList.innerHTML = ""; // Clear existing products

    productArray.forEach(prod => { // Use 'productArray' instead of 'products'
        const item = document.createElement("div");
        item.innerHTML = `
            <h3>${prod.name}</h3>
            <img height="150px" width="200px" src="\images\\${prod.id}.jpeg" alt="${prod.name}">
            <p>$${prod.price} CAD</p>
            <button id= "addToCartBtn">Add ${prod.name} to Cart</button>
            `;
        item.id = prod.id;
        item.classList.add("item");
        productsList.appendChild(item);

        const addToCartBtn = item.querySelector("#addToCartBtn");
        addToCartBtn.addEventListener("click", () => addToCart(prod))

    });
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
    createProductList(products);
}


createProductList(products)

function updatePreferences() {
    event.preventDefault();

    const vegetarian = document.getElementById('vegetarian').checked;
    const glutenFree = document.getElementById('glutenfree').checked;
    const organicPreference = document.getElementById('OrganicPreferences').value;
    
    filterAndDisplayProducts(vegetarian, glutenFree, organicPreference);
  }
  
  function filterAndDisplayProducts(vegetarian, glutenFree, organic) {
    const filteredProducts = products.filter(product => {
      const meetsVegetarian = !vegetarian || product.vegetarian;
      const meetsGlutenFree = !glutenFree || product.glutenfree;
      const meetsOrganic = (organic === 'either' || organic === 'both') || 
                           (product.organic && organic === 'organic') || 
                           (!product.organic && organic === 'notorganic');
  
      return meetsVegetarian && meetsGlutenFree && meetsOrganic;
    });
  
    createProductList(filteredProducts);
  }
  
  let cart = [];

  function addToCart(product) {
  
      //checking if we already added the product to the cart 
    const existingProduct = cart.find((item) => item.id === product.id);
  
    if (existingProduct) {
      existingProduct.quantity++
    } else {
      product.quantity = 1
      cart.push(product)
    }
  
    const productList = document.getElementById("cart")
  
    // Update the display for the cart
    updateCartDisplay(productList)
  
  
    //updates the calculation for the total price
    let price = document.getElementById("totalPrice")
    price.innerHTML = "Your total : " + getTotalPrice(cart)
  
  }
  
  function updateCartDisplay(productList) {
    productList.innerHTML = "" // Clear the current display
    const products = document.getElementById("product_entries")
    const prices = document.getElementById("price_entries")
    const quantities = document.getElementById("quantity_entries")
  
  
  
    // Update the display for each product in the cart... this is an alternate way of doing the code below
      // they both work but I'm not sure why neither will give me a row
    cart.forEach((product) => {
      const prod = document.createElement("div")
      prod.classList.add("row")
      prod.innerHTML = `
        <div class="column">
            <p>${product.name}</p>
        </div>
        <div class="column">
            <p>${product.price}</p>
        </div>
        <div class="column">
            <p>${product.quantity}</p>
        </div>
      `
  
      prod.classList.add("prod")
      productList.appendChild(prod)
      })
  }
  
  
  
  
  
  function getTotalPrice(chosenProducts) {
    
  
      let totalPrice = 0;
      cart.forEach(prod => {
          totalPrice+= prod.price * prod.quantity
      })
       //console.log("total cost", totalPrice)
      return totalPrice;
  }
