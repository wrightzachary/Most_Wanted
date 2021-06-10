'use strict';


// Checks user input against names in Database

// Checks user input against names in Database


// "people" is coming from the data.js file. We have access to it within this JavaScript file.

//Form Validation will allow user to access this file to verify if entered name exist in database.
// let filteredPeople = people.filter(function (person) {
//     document.getElementById("searchMe").innerHTML += `<input>`
//     if(person.firstName === firstNameInput && person.lastName === lastNameInput){
//         return true;
//     }
//     return false;
// });

// Rather than console logging, you need to append the filteredPeople to a table.
// function searchByName(firstName, lastName, peopleToSearch) {
    //     let filteredPeople = peopleToSearch.filter(function (person) {
    //         if (person.firstName === firstNameInput && person.lastName === lastNameInput) {
    //             return true;
    //         }
    //         return false;
    //     });
    //     return filteredPeople;
    // }


// Grabbing the values from our nameForm form and inputs.

function getResults(){
    document.getElementById("people").innerHTML
    let firstNameInput = document.forms['searchMe']['fname'].value;
    let lastNameInput = document.forms['searchMe']['lname'].value;
    let genderInput = document.forms['searchMe']['gender'].value;
    let dateOfBirthInput  = document.forms['searchMe']['dateOfBirth'].value;
    let heightInput = document.forms['searchMe']['height'].value;
    let weightInput = document.forms['searchMe']['weight'].value;
    let eyeColorInput = document.forms['searchMe']['eyecolor'].value;
    let occupationInput = document.forms['searchMe']['occupation'].value;
    let spouseInput = document.forms['searchMe']['spouse'].value;
    let parentsInput = document.forms['searchMe']['parents'].value;

    let personsOfInterest=people;

    if(firstNameInput != ""){
        personsOfInterest = searchByFirstName(firstNameInput, personsOfInterest)
    }
    if(lastNameInput != " "){
        personsOfInterest = searchByLastName(lastNameInput, personsOfInterest)
    }
    if(genderInput != " "){
        personsOfInterest = searchByGender(genderInput, personsOfInterest)
    }
    if(dateOfBirthInput != " "){
        personsOfInterest = searchByDateOfBirth(dateOfBirthInput, personsOfInterest)
    }
    if(heightInput != " "){
        personsOfInterest = searchByHeight(heightInput, personsOfInterest)
    }
    if(weightInput != " "){
        personsOfInterest = searchByWeight(weightInput, personsOfInterest)
    }
    if(eyeColorInput != " "){
        personsOfInterest = searchByEyeColor(eyeColorInput, personsOfInterest)
    }
    if(occupationInput != " "){
        searchByOccupation(occupationInput, personsOfInterest)
    }
    if(spouseInput != " "){
        searchBySpouse(spouseInput, personsOfInterest)
    }
    if(parentsInput != " "){
        searchByParents(parentsInput, personsOfInterest)
    }
        
    if(personsOfInterest.length > 0){
        console.log(personsOfInterest);
    }else{
        alert('Sorry, looks like there is no one with that name.');
    }
        function searchByFirstName(firstName, peopleToSearch) {
            let filteredPeople = peopleToSearch.filter(function (el) {
                if (el.firstName == firstName) {
                    return true;
                }
                else {
                    return false;
                }
            })
            console.log(filteredPeople)
            return filteredPeople;
        }
        
        function searchByLastName(lastName, peopleToSearch) {
            let filteredPeople = peopleToSearch.filter(function (el) {
                if (el.lastName == lastName) {
                    return true;
                }
                else {
                    return false;
                }
            })
            console.log(filteredPeople)
            return filteredPeople;
        }
        
        function searchByEyeColor(eyeColor, peopleToSearch) {
            let filteredPeople = peopleToSearch.filter(function (el) {
                if (el.eyeColor == eyeColor) {
                    return true;
                }
                else {
                    return false;
                }
            })
            console.log(filteredPeople)
            return filteredPeople;
        }
        
        function searchByGender(gender, peopleToSearch) {
            let filteredPeople = peopleToSearch.filter(function (el) {
                if (el.gender == gender) {
                    return true;
                }
                else {
                    return false;
                }
            })
            console.log(filteredPeople)
            return filteredPeople;
        }
        function searchByDateOfBirth(dateOfBirth, peopleToSearch) {
            let filteredPeople = peopleToSearch.filter(function (el) {
                if (el.dateOfBirth == dateOfBirth) {
                    return true;
                }
                else {
                    return false;
                }
            })
            console.log(filteredPeople)
            return filteredPeople;
        }
        function searchByHeight(height, peopleToSearch) {
            let filteredPeople = peopleToSearch.filter(function (el) {
                if (el.height == height) {
                    return true;
                }
                else {
                    return false;
                }
            })
            console.log(filteredPeople)
            return filteredPeople;
        }
        function searchByWeight(weight, peopleToSearch) {
            let filteredPeople = peopleToSearch.filter(function (el) {
                if (el.weight == weight) {
                    return true;
                }
                else {
                    return false;
                }
            })
            console.log(filteredPeople)
            return filteredPeople;
        }
        function searchByOccupation(occupation, peopleToSearch) {
            let filteredPeople = peopleToSearch.filter(function (el) {
                if (el.occupation == occupation) {
                    return true;
                }
                else {
                    return false;
                }
            })
            console.log(filteredPeople)
            return filteredPeople;
        }
        function searchByParents(parents, peopleToSearch) {    
            let filteredPeople = peopleToSearch.filter(function (el) {
                if (el.parents == parents) {
                    return true;
                }
                else {
                    return false;
                }
            })
            console.log(filteredPeople)
            return filteredPeople;
        }
        function searchBySpouse(spouse, peopleToSearch) {
            let filteredPeople = peopleToSearch.filter(function (el) {
                if (el.spouse == spouse) {
                    return true;
                }
                else {
                    return false;
                }
            })
            console.log(filteredPeople)
            return filteredPeople;
        }
        
        
        function getPersonId(idEntered){
            let filteredPeople = people.filter(person => {
                if(person.id == idEntered){
                    return true;
                }
                else{
                    return false
                }
            });
        
            if(filteredPeople.length == 1){
                return filteredPeople[0]
            }else{
                alert('That individual does not exist in our system')
            }
        }
      
        function generateTableHead(table) {
            let thead = table.createTHead();
          }
  
}   
people.map(function(el){
    document.getElementById("people").innerHTML += `<tr>
    <td id=${el.id}>${el.id}</td>
    <td>${el.firstName}</td>
    <td>${el.lastName}</td>
    <td>${el.gender}</td>
    <td>${el.dob}</td>
    <td>${el.height}</td>
    <td>${el.weight}</td>
    <td>${el.eyeColor}</td>
    <td>${el.occupation}</td>
    <td>${el.parents}</td>
    <td>${el.currentSpouse}</td>
    </tr>`
})
        
        // function doStuff() {
        //     searchByEyeColor(eyeColor, people)
        // }
        // function buildTable(peopleToDisplay) {
        
        
        
        
        
        //     document.getElementById("persons").innerHTML = ""
        //     peopleToDisplay.map(function (el) {
        
        //         let yourSpouseName = "";
        //         if(el.currentSpouse != null){
        //             let theSpouse = getPersonId(el.currentSpouse)
        //             yourSpouseName = theSpouse.firstName + ' ' + theSpouse.lastName;
        //         }
                
                
                
                
    

    //Will start with form validation of user(s)-verify with team member

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
