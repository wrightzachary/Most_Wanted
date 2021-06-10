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
     function clearTable(){
         people.map(function(el){
             documentElement.getElementById("getResults").innerHTML = "";
         })
     }   
     function filteredPeople(){
         let userSubmission = [
         document.forms['searchMe']['fname'].value,
         document.forms['searchMe']['lname'].value,
         document.forms['searchMe']['gender'].value,
         document.forms['searchMe']['dateOfBirth'].value,
         document.forms['searchMe']['height'].value,
         document.forms['searchMe']['weight'].value,
         document.forms['searchMe']['eyecolor'].value,
         document.forms['searchMe']['occupation'].value,
         document.forms['searchMe']['spouse'].value,
         document.forms['searchMe']['parents'].value
         ]
        let getResults = people;
    
        if(userSubmission[0] != ""){
            getrRsults = searchByFirstName(userSubmission[0], getResults)
        }
        if(userSubmission[1] != " "){
            getResults = searchByLastName(userSubmission[1], getResults)
        }
        if(userSubmission[2] != " "){
            getResults = searchByGender(userSubmission[2], getResults)
        }
        if(userSubmission[3] != " "){
            getResults = searchByDateOfBirth(userSubmission[3], getResults)
        }
        if(userSubmission[4] != " "){
            getResults = searchByHeight(userSubmission[4], getResults)
        }
        if(userSubmission[5] != " "){
            getResults = searchByWeight(userSubmission[5], getResults)
        }
        if(userSubmission[6] != " "){
            getResults = searchByEyeColor(userSubmission[6], getResults)
        }
        if(userSubmission[7] != " "){
            getResults = searchByOccupation(userSubmission[7], getResults)
        }
        if(userSubmission[8] != " "){
            getResults = searchBySpouse(userSubmission[8], getResults)
        }
        if(userSubmission[9] != " "){
            getResults = searchByParents(userSubmission[9], getResults)
        }

        getResults.map(function(el) {
            document.getElementById("getResults").innerHTML += `<tr>
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
        if(getResults.length == 1){
            personsOfInterest = getResults[0]
        }
        if(getResults.length == 0){
            alert("No one matching that description exists in our system.")
        }
    }
            
        // if(personsOfInterest.length > 0){
        //     console.log(personsOfInterest);
        // }else{
        //     alert('Sorry, looks like there is no one with that name.');
        // }
        //     function searchByFirstName(firstName, peopleToSearch) {
        //         let filteredPeople = peopleToSearch.filter(function (el) {
        //             if (el.firstName == firstName) {
        //                 return true;
        //             }
        //             else {
        //                 return false;
        //             }
        //         })
        //         console.log(filteredPeople)
        //         return filteredPeople;
        //     }
            
        //     function searchByLastName(lastName, peopleToSearch) {
        //         let filteredPeople = peopleToSearch.filter(function (el) {
        //             if (el.lastName == lastName) {
        //                 return true;
        //             }
        //             else {
        //                 return false;
        //             }
        //         })
        //         console.log(filteredPeople)
        //         return filteredPeople;
        //     }
            
        //     function searchByEyeColor(eyeColor, peopleToSearch) {
        //         let filteredPeople = peopleToSearch.filter(function (el) {
        //             if (el.eyeColor == eyeColor) {
        //                 return true;
        //             }
        //             else {
        //                 return false;
        //             }
        //         })
        //         console.log(filteredPeople)
        //         return filteredPeople;
        //     }
            
        //     function searchByGender(gender, peopleToSearch) {
        //         let filteredPeople = peopleToSearch.filter(function (el) {
        //             if (el.gender == gender) {
        //                 return true;
        //             }
        //             else {
        //                 return false;
        //             }
        //         })
        //         console.log(filteredPeople)
        //         return filteredPeople;
        //     }
        //     function searchByDateOfBirth(dateOfBirth, peopleToSearch) {
        //         let filteredPeople = peopleToSearch.filter(function (el) {
        //             if (el.dateOfBirth == dateOfBirth) {
        //                 return true;
        //             }
        //             else {
        //                 return false;
        //             }
        //         })
        //         console.log(filteredPeople)
        //         return filteredPeople;
        //     }
        //     function searchByHeight(height, peopleToSearch) {
        //         let filteredPeople = peopleToSearch.filter(function (el) {
        //             if (el.height == height) {
        //                 return true;
        //             }
        //             else {
        //                 return false;
        //             }
        //         })
        //         console.log(filteredPeople)
        //         return filteredPeople;
        //     }
        //     function searchByWeight(weight, peopleToSearch) {
        //         let filteredPeople = peopleToSearch.filter(function (el) {
        //             if (el.weight == weight) {
        //                 return true;
        //             }
        //             else {
        //                 return false;
        //             }
        //         })
        //         console.log(filteredPeople)
        //         return filteredPeople;
        //     }
        //     function searchByOccupation(occupation, peopleToSearch) {
        //         let filteredPeople = peopleToSearch.filter(function (el) {
        //             if (el.occupation == occupation) {
        //                 return true;
        //             }
        //             else {
        //                 return false;
        //             }
        //         })
        //         console.log(filteredPeople)
        //         return filteredPeople;
        //     }
        //     function searchByParents(parents, peopleToSearch) {    
        //         let filteredPeople = peopleToSearch.filter(function (el) {
        //             if (el.parents == parents) {
        //                 return true;
        //             }
        //             else {
        //                 return false;
        //             }
        //         })
        //         console.log(filteredPeople)
        //         return filteredPeople;
        //     }
        //     function searchBySpouse(spouse, peopleToSearch) {
        //         let filteredPeople = peopleToSearch.filter(function (el) {
        //             if (el.spouse == spouse) {
        //                 return true;
        //             }
        //             else {
        //                 return false;
        //             }
        //         })
        //         console.log(filteredPeople)
        //         return filteredPeople;
        //     }
            
            
        //     function getPersonId(idEntered){
        //         let filteredPeople = people.filter(person => {
        //             if(person.id == idEntered){
        //                 return true;
        //             }
        //             else{
        //                 return false
        //             }
        //         });
            
        //         if(filteredPeople.length == 1){
        //             return filteredPeople[0]
        //         }else{
        //             alert('That individual does not exist in our system')
        //         }
        //     }
                
                
                
        
        
        
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
        
        function showSlides(n) {
          var i;
          var slides = document.getElementsByClassName("mySlides");
          var dots = document.getElementsByClassName("demo");
          var captionText = document.getElementById("caption");
          if (n > slides.length) {slideIndex = 1}
          if (n < 1) {slideIndex = slides.length}
          for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
          }
          for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
          }
          slides[slideIndex-1].style.display = "block";
          dots[slideIndex-1].className += " active";
          captionText.innerHTML = dots[slideIndex-1].alt;
        }
    }