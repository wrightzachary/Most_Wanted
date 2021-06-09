'use strict';


 // Checks user input against names in Database




function getResults(){
    // Grabbing the values from our nameForm form and inputs.
    document.getElementById("people").innerHTML
    let firstNameInput = document.forms['searchMe']['fname'].value;
    let firstNameInput = document.forms['searchMe']['lname'].value;
    let firstNameInput = document.forms['searchMe']['gender'].value;
    let firstNameInput = document.forms['searchMe']['dateOfBirth'].value;
    let firstNameInput = document.forms['searchMe']['height'].value;
    let firstNameInput = document.forms['searchMe']['weight'].value;
    let firstNameInput = document.forms['searchMe']['eyecolor'].value;
    let firstNameInput = document.forms['searchMe']['occupation'].value;
    let firstNameInput = document.forms['searchMe']['spouse'].value;
    let firstNameInput = document.forms['searchMe']['parents'].value;



    // Checks user input against names in Database


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
}
// Populates table
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

    
});

//Performs real time search changes as user types

function updateResult(query) {
    let resultList = document.querySelector(".result");
    resultList.innerHTML = "";

    arr.map(function(algo){
        query.split(" ").map(function (word){
            if(algo.toLowerCase().indexOf(word.toLowerCase()) != -1){
                resultList.innerHTML += `<tr>
                <td id=${algo.id}>${el.id}</td>
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
            }
        })
    })
}

 
const height=function searchHeight(){
    console.log("Your overweight");
}
