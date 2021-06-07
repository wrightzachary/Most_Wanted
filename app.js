'use strict';


let newPeople = people;
function searchFirstName(){
    let firstNameInput =document.forms['searchBox']['fname'].value;
    let filteredPeople= people.filter(function(person) {
        input= document.getElementById('query')
        firstNameInput = firstNameInput.charAt(0).toUpperCase() + firstNameInput.slice(1);
        if(person.firstName === firstNameInput){
            return true;
        }
        return false;
    });
}
 newPeople = people;
function searchLastName(){
    let firstNameInput =document.forms['searchBox']['lastName'].value;
    let filteredPeople= people.filter(function(person) {
        input= document.getElementById('query')
        lastNameInput = lastNameInput.charAt(0).toUpperCase() + lastNameInput.slice(1);
        if(person.lastName === lastNameInput){
            return true;
        }
        return false;
    });
}




function searchByName(){
    // Grabbing the values from our nameForm form and inputs.
    document.getElementById("people").innerHTML
    let firstNameInput = document.forms['searchbox']['firstName'].value;
    let lastNameInput = document.forms['searchbox']['lastName'].value;

    // Checks user input against names in Database

    function searchFirst(people){
        let firstNameInput = document.forms['searchbox']['firstName'].vaule;
        let filteredPeople = people.filter(function(person){
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
});
 
const height=function searchHeight(){
    console.log("Your overweight");
}
//Testiing a for on possibly looping through the array(condition)
// function searchForName(){
// for(i = 0; i < people.length; i++){
// 	if(people[i].height < 70) {
// 		document.write(people[i].height + "," + people[i].firstName + people[i].lastName)
// 	}
// }

