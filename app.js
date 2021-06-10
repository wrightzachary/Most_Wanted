'use strict';

       
  
  
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
            function searchByFirstName(firstName, getResults){
                let filteredPersons = getResults.filter(function(person){
                    if(person.firstName == firstName){
                        return true;
                    }
                    else{
                        return false;
                    }
                })
                return filteredPersons
            }
            function searchByLastName(lastName, getResults){
                let filteredPersons = getResults.filter(function(person){
                    if(person.lastName == lastName){
                        return true;
                    }
                    else{
                        return false;
                    }
                })
                return filteredPersons
            }
            function searchByGender(gender, getResults){
                let filteredPersons = getResults.filter(function(person){
                    if(person.gender == gender){
                        return true;
                    }
                    else{
                        return false;
                    }
                })
                return filteredPersons
            }
                function searchByDateOfBirth(dob, getResults){
                    let filteredPersons = getResults.filter(function(person){
                        if(person.dateOfBirth == dob){
                            return true;
                        }
                        else{
                            return false;
                        }
                    })
                    return filteredPersons
                }
                function searchByHeight(height, getResults){
                    let filteredPersons = getResults.filter(function(person){
                        if(person.height == height){
                            return true;
                        }
                        else{
                            return false;
                        }
                    })
                    return filteredPersons
            }
            function searchByWeight(weight, getResults){
                let filteredPersons = getResults.filter(function(person){
                if(person.weight == weight){
                    return true;
                }
                else{
                    return false;
                }

                })
                return filteredPersons
            }
            function searchByEyeColor(eyeColor, getResults){
                let filteredPersons = getResults.filter(function(person){
                    if(person.eyeColor == eyeColor){
                        return true;
                    }
                    else{
                        return false;
                    }
                })
                return filteredPersons
            }
            function searchByOccupation(occupation, getResults){
                let filteredPersons = getResults.filter(function(person){
                    if(person.occupation == occupation){
                    return true;
                }
                else{
                    return false;
                }
            })
            return filteredPersons
        }
       
           
                
                
        
        
        
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
    
