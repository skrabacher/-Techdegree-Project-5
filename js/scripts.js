/* Treehouse FSJS Techdegree
 * Project 5 - Public API Requests for Employee Directory 
 * Sarah Krabacher */

// ------------------------------------------
//  FETCH FUNCTIONS
// ------------------------------------------

  fetch('https://randomuser.me/api/?results=12') //fetches 12 random users
    .then(response => response.json()) //converts to json object array with 12 users
    .then(function (data) {
      generateEmployeeCards(data.results),
      generateEmployeeModal(data.results)
    })
    
    .catch(error => console.log(error.message))


// ------------------------------------------
//  HELPER FUNCTIONS
// ------------------------------------------

//creates and displays employee contact cards
function generateEmployeeCards(userArray) { //parameter for this function must be an array
  userArray.forEach(user => { //loops through each user in the array and places their data into the card template for html
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

//function to reformat DOB string to mm/dd/yy
function formatBirthday(dob) {
  var month = dob.slice(5,7); //two digit numeral representing the month
  var day = dob.slice(8,10); //two digit numeral representing the day
  var year = dob.slice(2,4); //two digit numeral representing the year
  return `${month}/${day}/${year}`
  };

//creates and displays an employee modal
function generateEmployeeModal(userArray) {
  //console.log(userArray[1]);
  $("[class=card]").click(function(){ //when an employee card is clicked...
    let $index = $("[class=card]").index(this); //returns the index position of the item that was clicked on as an integer
    //console.log($index); // returns an integer that is the index postiion
    let user = userArray[$index] //grabs the employee object at the specific index position in the array
        //console.log(user)
          //variable below formats employee modal and inserts employee data into the modal
          let employeeModal= `<div class="modal-container"> 
                                  <div class="modal">
                                      <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                                      <div class="modal-info-container">
                                          <img class="modal-img" src="${user.picture.large}" alt="profile picture">
                                          <h3 id="name" class="modal-name cap">${user.name.first} ${user.name.last}</h3>
                                          <p class="modal-text">${user.email}</p>
                                          <p class="modal-text cap">${user.location.city}</p>
                                          <hr>
                                          <p class="modal-text">${user.cell}</p>
                                          <p class="modal-text">${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state} ${user.location.postcode}</p>
                                          <p class="modal-text">Birthday: ${formatBirthday(user.dob.date)}</p>
                                      </div>
                                  </div>`
          $("body").append(employeeModal); //appends employeeModal to the body of the html file
          

          $("button").click(function() { //click event to modal close button.
            //console.log("X button clicked");
            $(".modal-container").remove(); //selects and removes modal
          });
  });
};

