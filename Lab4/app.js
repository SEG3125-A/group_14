// FOR APPOINTMENT MODAL---------------------------------------
var currentStep = 0
const appt_steps = [
  { dataStepName: 'services', title: 'Select Service', description: "Please select a service for which you want to schedule an appointment", stepFunc: generateServices },
  { dataStepName: 'datepicker', title: 'Confirm Details', description: "Confirm your appointment and give us your contact information ", stepFunc: generateDates},
];

const services = [
  {name: "Box Braids", price:150, description: "placeholder"},
  {name: "Twist", price:100, description: "placeholder"},
]

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
    <div id="services_container" class="card">
      <div class="list-group list-group-flush"></div>
    `
    var services_container = document.getElementById('services_container');
    
    //Create Each Service
    services.forEach((service)=> {
    // Create the anchor element
    var anchor = document.createElement('a');
    anchor.href = '#';
    anchor.className = 'list-group-item list-group-item-action flex-column align-items-start active';

    // Set the inner HTML content using a template string
    anchor.innerHTML = `
        <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">${service.name}</h5>
            <small>$${service.price}</small>
        </div>
        <p class="mb-1">${service.description}</p>
    `;

    anchor.style.marginBottom = '10px';
    anchor.style.backgroundColor = '#7A57A4';
    anchor.onclick = advance;
    //Append to container
    services_container.appendChild(anchor);
    })
    
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

    <div class="form-row>
      <div id="calendar_container">
        <label id="selected-date"for="calendar">Selected Date:</label>
        <div id="calendar"></div>
      </div>
    </div>

      <button id="btn-appt" type="submit" class="btn btn-primary">Confirm Appointment</button>
  </form>
    `

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


function advance() {
  currentStep += 1;
  generateProgress();
  if (appt_steps[currentStep].stepFunc) {
    appt_steps[currentStep].stepFunc();
  }
}

  // Call the function with the example steps
  generateProgress(appt_steps);
  generateServices(appt_steps)


// END OF APPOINTMENT MODAL----------------------------------------