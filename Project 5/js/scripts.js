/* Treehouse FSJS Techdegree
 * Project 5 - Public API Requests for Employee Directory 
 * Sarah Krabacher */

// ------------------------------------------
//  FETCH FUNCTIONS
// ------------------------------------------

  fetch('https://randomuser.me/api/?results=12') //fetches 12 random users
    .then(response => response.json()) //converts to json object array with 12 users
    .then(data => console.log(data))
    .catch(error => console.log(error.message))


// ------------------------------------------
//  HELPER FUNCTIONS
// ------------------------------------------



    // <div id="gallery" class="gallery">
    //         <!-- ======================
    //             Gallery markup: 

    //             You can use the commented out markup below as a template
    //             for each of your Gallery items, but you must use JS to 
    //             create and append them to the `gallery` div.

    //             IMPORTANT: Altering the arrangement of the markup and the 
    //             attributes used may break the styles or functionality.

    //             <div class="card">
    //                 <div class="card-img-container">
    //                     <img class="card-img" src="https://placehold.it/90x90" alt="profile picture">
    //                 </div>
    //                 <div class="card-info-container">
    //                     <h3 id="name" class="card-name cap">first last</h3>
    //                     <p class="card-text">email</p>
    //                     <p class="card-text cap">city, state</p>
    //                 </div>
    //             </div>

// ------------------------------------------
//  EVENT LISTENERS
// ------------------------------------------