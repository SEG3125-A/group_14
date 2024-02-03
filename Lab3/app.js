// Swaps between pages in the website
function showPage(pageName) {

  document.querySelectorAll(".page").forEach(page => {
      page.style.display = 'none';
  });

  document.getElementById(pageName).style.display = 'block';

  // Highlight the active breadcrumb item
  highlightBreadcrumb(pageName);
}

function addEventListenersForPreferences() {
    const select_organic_preferences = document.getElementById("OrganicPreferences");

    // Add an event listener to the checkbox
    select_organic_preferences.addEventListener("change", filterAndDisplayProducts)
}

const product_types = [
  "Vegetable",
  "Dairy",
  "Grain",
  "Fruit",
  "Oil",
];

//Predefined products avaliable on the website
const products = [
    {id:1, name: "Cereal", price:4, vegetarian: true, glutenfree: false, organic: false, type:"Grain"},
    {id:2, name: "Jam", price:2.75, vegetarian: true, glutenfree: false, organic: true, type:"Fruit"},
    {id:3, name: "Eggs", price:12, vegetarian: false, glutenfree: false, organic: false, type:"Dairy"},
    {id:4, name: "Milk", price:3, vegetarian: false, glutenfree: false, organic: false, type:"Dairy"},
    {id:5, name: "Flour", price:6, vegetarian: true, glutenfree: false, organic: true, type:"Grain"},
    {id:6, name: "Carrots", price:1.5, vegetarian: true, glutenfree: true, organic: true, type:"Vegetable"},
    {id:7, name: "Onions", price:3.5, vegetarian: true, glutenfree: true, organic: true, type:"Vegetable"},
    {id:8, name: "Bread", price:3, vegetarian: true, glutenfree: false, organic: false, type:"grain"},
    {id:9, name: "Olive Oil", price:8, vegetarian: true, glutenfree: true, organic: true, type:"Oil"},
    {id:10, name: "Butter", price:8, vegetarian: false, glutenfree: false, organic: false, type:"Dairy"},    
]
let filteredProducts = products;

// highlight breadcrumb function 
function highlightBreadcrumb(pageName) {

  // Remove active class from all breadcrumb items
  document.querySelectorAll('.breadcrumb-item').forEach(item => {
      item.classList.remove('breadcrumb-active');
  });

   // Determine the active breadcrumb item based on the pageName
  let activeBreadcrumb;
  if (pageName.includes('ClientPage')) {
    activeBreadcrumb = document.querySelector('.breadcrumb-item:nth-child(1)');
  } else if (pageName.includes('ProductsPage')) {
    activeBreadcrumb = document.querySelector('.breadcrumb-item:nth-child(3)');
  } else if (pageName.includes('CartPage')) {
    activeBreadcrumb = document.querySelector('.breadcrumb-item:nth-child(5)');
  }

  // Add the 'breadcrumb-active' class to the active breadcrumb item
  if (activeBreadcrumb) {
    activeBreadcrumb.classList.add('breadcrumb-active');
  }

  // Map pageName to breadcrumb item index
  const breadcrumbIndexMap = {
      'Client': 0,
      'Products': 1,
      'Cart': 2
  };

  // Add active class to current breadcrumb item
  const activeIndex = breadcrumbIndexMap[pageName];

  const breadcrumbItems = document.querySelectorAll('.breadcrumb-item');
  if (breadcrumbItems[activeIndex]) {
      breadcrumbItems[activeIndex].classList.add('breadcrumb-active');
  }
}

function createFoodCategories() {
    const foodFilterContainer = document.getElementById("food-filter");
    product_types.forEach((type) => {
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.value = type;
        checkbox.id = type;
        checkbox.className = "filter-checkbox";
        checkbox.addEventListener("change", filterAndDisplayProducts);

        const label = document.createElement("label");
        label.htmlFor = type;
        label.innerText = type;

        foodFilterContainer.appendChild(checkbox);
        foodFilterContainer.appendChild(label);
    });
}

function createProductList(productArray, sort) {
    const productsList = document.getElementById("product_list");
    productsList.innerHTML = ""; // Clear existing products
    
    // Sort array before creating it on the page
    if (sort === "asc") {
      productArray = productArray.sort((a, b) => a.price - b.price);
    } 
    if (sort==="desc") {
      productArray = productArray.sort((a, b) => b.price - a.price);
    }

    productArray.forEach(prod => {
        const item = document.createElement("div");
        item.innerHTML = `
            <h3>${prod.name}</h3>
            <img height="150px" width="200px" src="\images\\${prod.id}.jpeg" alt="${prod.name}">
            <p>$${prod.price} CAD</p>
            <button id="addToCartBtn">Add ${prod.name} to Cart</button>
        `;
        item.id = prod.id;
        item.classList.add("item");
        productsList.appendChild(item);

        const addToCartBtn = item.querySelector("#addToCartBtn");
        addToCartBtn.addEventListener("click", () => addToCart(prod));
    });
}

function filterAndDisplayProducts(sort="") {
  const organicPreference = document.getElementById('OrganicPreferences').value;

  // Directly filter products based on preferences
  const preferenceFilteredProducts = products.filter(product => {
      const meetsOrganic = (organicPreference === 'either' || organicPreference === 'both') ||
          (product.organic && organicPreference === 'organic') ||
          (!product.organic && organicPreference === 'notorganic');
      return meetsOrganic;
  });

  const foodFilterContainer = document.getElementById("food-filter");
  const selectedTypes = Array.from(foodFilterContainer.querySelectorAll('input:checked')).map(checkbox => checkbox.value);

  if (selectedTypes.length > 0) {
        // Filter by both preferences and categories
        const categoryFilteredProducts = preferenceFilteredProducts.filter(product => selectedTypes.includes(product.type));
        createProductList(categoryFilteredProducts, sort);
        showPage("ProductsPage")
  } else {
      // Show all products filtered by preferences when no categories are selected
      createProductList(preferenceFilteredProducts, sort);
      showPage("ProductsPage")
  }
  
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
    return totalPrice;
  }

/* Set the width of the sidebar to 250px (show it) */
function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}

createProductList(products);
createFoodCategories();
showPage("ClientPage");
addEventListenersForPreferences();


