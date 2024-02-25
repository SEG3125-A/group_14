// FOR APPOINTMENT MODAL---------------------------------------
var currentStep = 0
const appt_steps = [
  { dataStepName: 'services', title: 'Select Service', description: "Please select a service for which you want to schedule an appointment", stepFunc: generateServices },
  { dataStepName: 'length', title: 'Select Length', description: "Please select a length for your hairstyle", stepFunc: generateLength},
  { dataStepName: 'length', title: 'Select Hairstylist', description: "Please select your hairstylist", stepFunc: generateBraider},
  { dataStepName: 'datepicker', title: 'Contact Details', description: "Confirm your contact information ", stepFunc: generateDates},
  { dataStepName: 'confirmation', title: 'Confirm Details', description: "Confirm your appointment", stepFunc: generateSummary},
];

const services = [
  {name: "Box Braids", description: "", price: 150},
  {name: "Knotless Braids", description: "", price: 185},
  {name: "Twist", description: "", price: 145},
  {name: "Stitch Braids", description: "", price: 50},
  {name: "Cornrows", description: "", price: 35},
]

const lengths = [
  {name: "Medium Lower Back", price_modifier:1.5, description: "Hair included"},
  {name: "Medium Waist", price_modifier:1, description: "Hair included"},
  {name: "Large Lower Back", price_modifier:2, description: "Hair included"},
  {name: "Large Waist", price_modifier:2.5, description: "Hair included"},
  {name: "Small Pre Parting", price_modifier:0.5, description: "For DIY installations"},
  {name: "Large Pre Parting", price_modifier:0.75, description: "For DIY installations"},
]

const braiders = [
  {name: "Aaliyah", description: "Braiding for 10+ years, specializes in locs", disabledDates: [0, 6, 1] },
  {name: "Ella", description: "Braiding for 2+ years, specializes in marley twist, passion twist, and island twist", disabledDates: [1, 2, 5] },
  {name: "Lia", description: "Braiding for 3+ years, specializes in all types of hairstyles", disabledDates: [6, 4] },
]

var cart = [];
var cart_total = 0;
var price_modifier = 1;

function activateApptModal(){
  currentStep = -1;
  cart_total = 0;
  cart = [];
  advance();
}

function generateProgress() {
  var modalGuide = document.getElementById('modal-guide');
  modalGuide.innerHTML = '';
  var progressHTML = `
    <div id="progressList"></div>
    <div class="card" style="top: 35%; border:none">
      <div class="progress_container card-body">
        <div id="progressTitle" class="card-title"></div>
        <div id="progressDesc" class="card-text"></div>
      </div>
    </div>
  `;
  modalGuide.innerHTML = progressHTML;
  var progressList = document.getElementById('progressList');
  var progressTitle = document.getElementById('progressTitle');
  var progressDesc = document.getElementById('progressDesc');

  progressList.innerHTML ='';
  // Create Steps List
  appt_steps.forEach(function (step, index) {
    var listItem = document.createElement('li');
    var classes = ['progress-item'];
    if (index == currentStep) {
      classes.push('progress-item-complete');
    }
    listItem.className = classes.join(' ');
    var div = document.createElement('div');
    listItem.appendChild(div);
    progressList.appendChild(listItem);
  });

  //Create Title for current step
  progressTitle.innerHTML = appt_steps[currentStep].title;

  //Create Description for current step
  progressDesc.innerHTML = appt_steps[currentStep].description;
  }

  function generateServices() {
    const modal_main = document.getElementById('modal_main');
    modal_main.innerHTML = ''
    modal_main.innerHTML = `
    <div id="modal_main_header">${appt_steps[currentStep].title}</div>
    <div id="services_container" class="card appt-card">
      <div class="appt-container list-group list-group-flush"></div>
    `
    var services_container = document.getElementById('services_container');
    
    services.forEach((service)=> {
    var anchor = document.createElement('a');
    anchor.href = '#';
    anchor.className = 'appt-service-item list-group-item list-group-item-action flex-column align-items-start active';

    anchor.innerHTML = `
        <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">${service.name}</h5>
            <div>
            <small>Prices Starting From:</small>
            <small>$${service.price}</small>
            </div>
        </div>
        <p class="mb-1">${service.description}</p>
    `;
    anchor.onclick = function () {
      cart.push(service);
      cart_total = service.price;
      advance();
    };
    services_container.appendChild(anchor);
    }) 
  }

  function generateLength() {
    const modal_main = document.getElementById('modal_main');
    modal_main.innerHTML = ''
    modal_main.innerHTML = `
    <div id="modal_main_header">${appt_steps[currentStep].title}</div>
    <div id="length_container" class="card appt-card">
      <div class="appt-container list-group list-group-flush"></div>
    `
    var length_container = document.getElementById('length_container');
    
    //Create Each Service
    lengths.forEach((length)=> {
    var anchor = document.createElement('a');
    anchor.href = '#';
    anchor.className = 'appt-service-item list-group-item list-group-item-action flex-column align-items-start active';

    anchor.innerHTML = `
        <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">${length.name}</h5>
            <small>$${length.price_modifier*cart_total}</small>
        </div>
        <p class="mb-1">${length.description}</p>
    `;
    anchor.onclick = function () {
      cart.push(length);
      price_modifier = length.price_modifier;
      advance();
    };
    length_container.appendChild(anchor);
    })

    const back_button = document.createElement('div');
    back_button.innerHTML = `<button type="button" id="modal-back-button" class="btn btn-primary">Back</button>`
    
    modal_main.appendChild(back_button);
    modal_back_button = document.getElementById("modal-back-button")
    modal_back_button.onclick = function () {
      cart.pop();
      price_modifier = 1;
      goBack();
    };
  }

  function generateBraider() {
    const modal_main = document.getElementById('modal_main');
    modal_main.innerHTML = ''
    modal_main.innerHTML = `
    <div id="modal_main_header">${appt_steps[currentStep].title}</div>
    <div id="braider_container" class="card-deck"></div>
    <button type="button" id="modal-back-button" class="btn btn-primary">Back</button>
    `
    const braider_container = document.getElementById("braider_container")
    braiders.forEach((braider) => {
      const anchor = document.createElement('div')
      anchor.className = 'braider-card';

      anchor.innerHTML = `
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">${braider.name}</h5>
              <p class="card-text">${braider.description}.</p>
            </div>
            <div class="card-footer">
              <small class="text-muted">Appointment times last updated ${Math.floor(Math.random() * 60)} mins ago</small>
            </div>
          </div>
      `;
      anchor.onclick = function () {
        cart.push(braider);
        advance();
    }
    braider_container.append(anchor)
  })
  
    modal_back_button = document.getElementById("modal-back-button")
    modal_back_button.onclick = function () {
      cart.pop();
      goBack();
    };

  }

  function generateDates() {
    const modal_main = document.getElementById('modal_main');
    modal_main.innerHTML = ''
    modal_main.innerHTML = ''; // Clear existing content
    modal_main.innerHTML = `
    <div id="modal_main_header">${appt_steps[currentStep].title}</div>
    <form id="appt-form" onsubmit="event.preventDefault(); validateForm();">
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="FullName">Full Name</label>
          <input class="form-control" id="FullName" placeholder="Full Name" oninput="validateFullName()" required>
          <div id="fullNameError" class="error-message"></div>
        </div>
        <div class="form-group col-md-6">
          <label for="Email">Email</label>
          <input type="email" class="form-control" id="Email" placeholder="Email" oninput="validateEmail()" required>
          <div id="emailError" class="error-message"></div>
        </div>
      </div>
      
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="CreditCard">Credit Card Number</label>
          <input type="text" class="form-control" id="CreditCard" placeholder="Credit Card Number" oninput="validateCreditCard()" required>
          <div id="creditCardError" class="error-message"></div>
        </div>
        <div class="form-group col-md-3">
          <label for="ExpirationDate">Expiration Date</label>
          <input type="text" class="form-control" id="ExpirationDate" placeholder="MM/YY" oninput="validateExpirationDate()" required>
          <div id="expirationDateError" class="error-message"></div>
        </div>
        <div class="form-group col-md-3">
          <label for="CVV">CVV</label>
          <input type="text" class="form-control" id="CVV" placeholder="CVV" oninput="validateCVV()" required>
          <div id="cvvError" class="error-message"></div>
        </div>
      </div>

      <div class="form-row>
        <div id="calendar_container">
          <label id="selected-date"for="calendar">Selected Date:</label>
          <div id="calendar"></div>
        </div>
      </div>

      <button type="button" id="modal-back-button" class="btn btn-primary">Back</button>
      <button id="btn-appt" class="btn btn-primary" onclick="advance()">Next</button>
    </form>
    `;
    
    
    //validation function called on form submission
    function validateForm() {
      validateFullName();
      validateEmail();
      validateCreditCard();
      validateExpirationDate();
      validateCVV();
    }

    const modal_back_button = document.getElementById("modal-back-button");
    modal_back_button.onclick = function () {
        cart.pop();
        goBack();
    };

    // Form submission and validation logic
    const modal_forward_button = document.getElementById("btn-appt");
    document.getElementById('appt-form').onsubmit = function(event) {
        const errorMessages = document.querySelectorAll('.error-message');
        const hasErrors = Array.from(errorMessages).some(errorMessage => errorMessage.textContent !== '');
        const inputs = document.querySelectorAll('input[required]');
        const isEmpty = Array.from(inputs).some(input => input.value.trim() === '');
        if (!hasErrors && !isEmpty) {
            advance();
        }
    };

    // Calendar initialization
    const calendarContainer = document.getElementById('calendar'); 

    // Initialize Pikaday
    var picker = new Pikaday({
      showMonthAfterYear: false,
      disableDayFn: function (date) {
        return cart[2].disabledDates.includes(date.getDay())
      },
      onSelect: function(selectedDate) {
          var formattedDate = moment(selectedDate).format('YYYY-MM-DD');
          document.getElementById('selected-date').textContent = 'Selected Date: ' + formattedDate;
      }
    });
    
      calendar.appendChild(picker.el);
      picker.show();
    }

function handleFocus(element) {
    element.classList.add('focused');
}

function handleBlur(element) {
    element.classList.remove('focused');
}


// VALIDATION FUNCTIONS-------------------------------
function validateFullName() {
  const fullNameInput = document.getElementById('FullName');
  const fullNameError = document.getElementById('fullNameError');

  // Reset error message
  fullNameError.textContent = '';

  // Validate Full Name (letters and spaces only)
  const fullNamePattern = /^[A-Za-z ]+$/;
  if (!fullNamePattern.test(fullNameInput.value)) {
    fullNameError.textContent = 'Please enter a valid Full Name (letters and spaces only).';
  }
}

function validateEmail() {
  const emailInput = document.getElementById('Email');
  const emailError = document.getElementById('emailError');

  // Reset error message
  emailError.textContent = '';

  // Validate Email using HTML5 email validation
  if (!emailInput.checkValidity()) {
    emailError.textContent = 'Please enter a valid email address.';
  }
}


function validateCreditCard() {
  const creditCardInput = document.getElementById('CreditCard');
  const creditCardError = document.getElementById('creditCardError');

  // Reset error message
  creditCardError.textContent = '';

  // Validate Credit Card Number (for simplicity, assuming 16-digit number)
  const creditCardPattern = /^\d{16}$/;
  if (!creditCardPattern.test(creditCardInput.value)) {
    creditCardError.textContent = 'Please enter a valid 16-digit Credit Card Number.';
  }
}

function validateExpirationDate() {
  const expirationDateInput = document.getElementById('ExpirationDate');
  const expirationDateError = document.getElementById('expirationDateError');

  // Reset error message
  expirationDateError.textContent = '';

  // Validate Expiration Date (for simplicity, assuming MM/YY format)
  const expirationDatePattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
  if (!expirationDatePattern.test(expirationDateInput.value)) {
    expirationDateError.textContent = 'Please enter a valid Expiration Date in MM/YY format.';
  }
}

function validateCVV() {
  const cvvInput = document.getElementById('CVV');
  const cvvError = document.getElementById('cvvError');

  // Reset error message
  cvvError.textContent = '';

  // Validate CVV (for simplicity, assuming 3-digit number)
  const cvvPattern = /^\d{3}$/;
  if (!cvvPattern.test(cvvInput.value)) {
    cvvError.textContent = 'Please enter a valid 3-digit CVV.';
  }
}


function generateSummary(){
  const modal_main = document.getElementById('modal_main');
    modal_main.innerHTML = ''
    modal_main.innerHTML = `
    <div id="modal_main_header">Confirmation</div>
    <form id="appt-form">
    <section class="cart-items">

    <div class="cart-row">
      <div class="cart-column" id="productName">
          <h3> Type</h3>
          <p id="product_entries">${cart[0].name}</p>
      </div>
      <div class="cart-column" id="prices">
          <h3> Length</h3>
          <p id="price_entries">${cart[1].name}</p>
      </div>
      <div class="cart-column" id="braider">
          <h3> Braider</h3>
          <p id="braider_entries">${cart[2].name}</p>
      </div>
      <div class="cart-column" id="prices">
          <h3> Price</h3>
          <p id="price_entries">${cart_total*price_modifier}</p>
      </div>
  </div>
  </section>

  <button id="btn-appt" type="submit" class="btn btn-primary" data-toggle="modal" data-target="#myModal">Confirm Appointment</button>
    </form>
    `
    const back_button = document.createElement('div');
    back_button.innerHTML = `<button type="button" id="modal-back-button" class="btn btn-primary" onclick="goBack()">Back</button>`
    modal_main.appendChild(back_button);

}

function advance() {
  currentStep += 1;
  generateProgress();
  if (appt_steps[currentStep].stepFunc) {
    appt_steps[currentStep].stepFunc();
  }
}

function goBack() {
  if (currentStep > 0) {
    currentStep -= 1;
  }
  generateProgress();
  if (appt_steps[currentStep].stepFunc) {
    appt_steps[currentStep].stepFunc();
  }
}

  // Call the function with the example steps
  generateProgress(appt_steps);
  generateServices(appt_steps)

// END OF APPOINTMENT MODAL----------------------------------------

// REDIRECT MODAL FROM CAROUSEL
function activateApptCarouselModal() {
  currentStep = 2 - 1; // Subtract 1 because advance() will add 1 to currentStep
  cart_total = 0;
  cart = [];

  // Display the modal
  $('#myModal').modal('show');

  advance(); // This will increment the currentStep and display the "Select Hairstylist" step
}
