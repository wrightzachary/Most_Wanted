'use strict';





function searchByName(){
    // Grabbing the values from our nameForm form and inputs.
    document.getElementById("people").innerHTML
    let firstNameInput = document.forms['nameForm']['fname'].value;
    let lastNameInput = document.forms['nameForm']['lname'].value;

    // Checks user input against names in Database

    function searchFirst(people){
        let fnameInput = document.forms['nameForm']['fname'].vaule;
        let firstNameRes = people.filter(function(person){
            if(person.firstName == fnameInput){
                return true;
            }
            return false;
      })
      return firstNameInput;
    }

    // "people" is coming from the data.js file. We have access to it within this JavaScript file.

    //Form Validation will allow user to access this file to verify if entered name exist in database.
    let filteredPeople = people.filter(function (person) {
        document.getElementById("nameForm").innerHTML += `<input>`
        if(person.firstName === firstNameInput && person.lastName === lastNameInput){
            return true;
        }
        return false;
    });
    
    // Rather than console logging, you need to append the filteredPeople to a table.
    if(filteredPeople.length > 0){
        console.log(filteredPeople);
    }else{
        console.log('Sorry, looks like there is no one with that name.');
    }

    }

    //Will start with form validation of user(s)-verify with team member
    {

    }

function printName(){
    document.getElementById("people").innerHTML
}

//Populates table
printName()
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