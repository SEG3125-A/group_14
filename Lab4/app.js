// FOR APPOINTMENT MODAL---------------------------------------
var currentStep = 0
const appt_steps = [
  { dataStepName: 'services', title: 'Select Service', description: "Please select a service for which you want to schedule an appointment", stepFunc: generateServices },
  { dataStepName: 'length', title: 'Select Length', description: "Please select a length for your hairstyle", stepFunc: generateLength},
  { dataStepName: 'datepicker', title: 'Contact Details', description: "Confirm your contact information ", stepFunc: generateDates},
  { dataStepName: 'confirmation', title: 'Confirm Details', description: "Confirm your appointment", stepFunc: generateSummary},
];

const services = [
  {name: "Box Braids", description: ""},
  {name: "Knotless Braids", description: ""},
  {name: "Twist", description: ""},
  {name: "Stitch Braids", description: ""},
  {name: "Cornrows", description: ""},
]

const lengths = [
  {name: "Medium Lower Back", price:150, description: "Hair included"},
  {name: "Medium Waist", price:100, description: "Hair included"},
  {name: "Large Lower Back", price:150, description: "Hair included"},
  {name: "Large Waist", price:100, description: "Hair included"},
  {name: "Small Pre Parting", price:150, description: "For DIY installations"},
  {name: "Large Pre Parting", price:100, description: "For DIY installations"},
]

var cart = [];
var cart_total = 0;

function activateApptModal(){
  currentStep = -1;
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
        </div>
        <p class="mb-1">${service.description}</p>
    `;
    anchor.onclick = function () {
      cart.push(service.name);
      advance();
    };
    //Append to container
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
    // Create the anchor element
    var anchor = document.createElement('a');
    anchor.href = '#';
    anchor.className = 'appt-service-item list-group-item list-group-item-action flex-column align-items-start active';

    // Set the inner HTML content using a template string
    anchor.innerHTML = `
        <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">${length.name}</h5>
            <small>$${length.price}</small>
        </div>
        <p class="mb-1">${length.description}</p>
    `;
    anchor.onclick = function () {
      cart.push(length.name);
      cart_total = length.price;
      advance();
    };
    //Append to container
    length_container.appendChild(anchor);
    })

    const back_button = document.createElement('div');
    back_button.innerHTML = `<button type="button" id="modal-back-button" class="btn btn-primary">Back</button>`
    
    modal_main.appendChild(back_button);
    modal_back_button = document.getElementById("modal-back-button")
    modal_back_button.onclick = function () {
      cart.pop();
      cart_total = 0;
      goBack();
    };
  }


  function generateDates() {
    const modal_main = document.getElementById('modal_main');
    modal_main.innerHTML = ''
    modal_main.innerHTML = `
    <div id="modal_main_header">${appt_steps[currentStep].title}</div>
    <form id="appt-form">
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="FullName">Full Name</label>
            <input class="form-control" id="FullName" placeholder="Full Name">
          </div>
          <div class="form-group col-md-6">
            <label for="Email">Email</label>
            <input class="form-control" id="Email" placeholder="Email">
          </div>
        </div>

      <div class="form-group">
        <label id="appt-comments-label" for="appt-comments">Additional Details?</label>
        <textarea class="appt-comments" id="appt-comments" rows="1"></textarea>
      </div>

      <div class="form-row>
        <div id="calendar_container">
          <label id="selected-date"for="calendar">Selected Date:</label>
          <div id="calendar"></div>
        </div>
      </div>

      <button id="btn-appt" class="btn btn-primary" onclick="advance()">Next</button>
    </form>
    <button type="button" id="modal-back-button" class="btn btn-primary">Back</button>
    `

    modal_back_button = document.getElementById("modal-back-button")
    modal_back_button.onclick = function () {
      cart.pop();
      cart_total = 0;
      goBack();
    };
  const calendar = document.getElementById('calendar');

   // Initialize Pikaday
  var picker = new Pikaday({
  showMonthAfterYear: false,
  onSelect: function(selectedDate) {
    handleDateChange(selectedDate);
  }
});

  calendar.appendChild(picker.el);
  picker.show();
}

function handleDateChange(selectedDate) {
  var formattedDate = moment(selectedDate).format('YYYY-MM-DD');
  document.getElementById('selected-date').textContent = 'Selected Date: ' + formattedDate;
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
          <p id="product_entries">${cart[0]}</p>
      </div>
      <div class="cart-column" id="prices">
          <h3> Length</h3>
          <p id="price_entries">${cart[1]}</p>
      </div>
      <div class="cart-column" id="prices">
          <h3> Price</h3>
          <p id="price_entries">${cart_total}</p>
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