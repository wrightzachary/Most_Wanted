'use strict';


 // Checks user input against names in Database

let newPeople = people;
function searchFirstName(){
    let firstNameInput =document.forms['searchBox']['firstName'].value;
    let filteredPeople= people.filter(function(person) {
        firstNameInput = firstNameInput.charAt(0).toUpperCase() + firstNameInput.slice(1);
        if(person.firstName === firstNameInput){
            return true;
        }
        return false;
    });
}
function searchLastName(){
    let lastNameInput =document.forms['searchBox']['lastName'].value;
    let filteredPeople= people.filter(function(person) {
        lastNameInput = lastNameInput.charAt(0).toUpperCase() + lastNameInput.slice(1);
        if(person.lastName === lastNameInput){
            return true;
        }
        return false;
    });
}

function searchHeight(){
    let heighInput =document.forms['search']['height'].value;
    let heightNum = Number(heighInput);
    let filteredWeight =people.filter(function(person){
        if(person.height === heightNum){
            return true;
        }
        return false;
    });

}




function searchName(){
    // Grabbing the values from our nameForm form and inputs.
    document.getElementById("people").innerHTML
    let firstNameInput = document.forms['searchbox']['firstName'].value;
    let lastNameInput = document.forms['searchbox']['lastName'].value;

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
