/* Treehouse FSJS Techdegree
 * Project 5 - Public API Requests for Employee Directory 
 * Sarah Krabacher */

// ------------------------------------------
//  FETCH FUNCTIONS
// ------------------------------------------

  fetch('https://randomuser.me/api/?results=12') //fetches 12 random users
    .then(response => response.json()) //converts to json object array with 12 users
    .then(data => generateEmployeeCards(data.results))
    .catch(error => console.log(error.message))


// ------------------------------------------
//  HELPER FUNCTIONS
// ------------------------------------------

function generateEmployeeCards(userArray) { //parameter for this function must be an array
  userArray.forEach(user => { //loops through each user in the array and places their data into the card template for html
    console.log(user)
    let cardTemplate= `<div class="card">
                  <div class="card-img-container">
                      <img class="card-img" src="${user.picture.medium}" alt="profile picture">
                  </div>
                  <div class="card-info-container">
                      <h3 id="name" class="card-name cap">${user.name.first} ${user.name.last}</h3>
                      <p class="card-text">${user.email}</p>
                      <p class="card-text cap">${user.location.city}, ${user.location.state}</p>
                  </div>`
 $("#gallery").append(cardTemplate); //appends cardTemplate to the gallery div in the html file


})

};

function generateEmployeeModal(userArray) {
 userArray.forEach(user => {
  console.log(user)
    let employeeModal= `<div class="modal-container">
    <div class="modal">
        <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
        <div class="modal-info-container">
            <img class="modal-img" src="${user.picture.large}" alt="profile picture">
            <h3 id="name" class="modal-name cap">${user.name.first} ${user.name.last}</h3>
            <p class="modal-text">${user.email}</p>
            <p class="modal-text cap">${user.location.city}</p>
            <hr>
            <p class="modal-text">${user.phone}</p>
            <p class="modal-text">${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state} ${user.location.postcode}</p>
            <p class="modal-text">Birthday: ${user.dob.date} <br>***NEED TO REFORMAT to MM/DD/YYYY***</p>
        </div>
    </div>`
    $("body").append(employeeModal); //appends employeeModal to the body of the html file

 })
};

// ------------------------------------------
//  EVENT LISTENERS
// ------------------------------------------
const card = document.querySelectorAll('.card'); //***try using click events from Proj 3 with jquery here */
console.log(card);
card.addEventListener('click', console.log("generateEmployeeModal"));//click event handler to open employee modal

const xButton = document.querySelector('.modal-close-button');
xButton.addEventListener('click', generateEmployeeCards);//click event handler to close employee modal