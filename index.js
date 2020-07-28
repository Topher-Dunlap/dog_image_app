"use strict";

//Variables
let inputNumber = 0;

//Functions

$("form").submit((event) => {
  
  event.preventDefault();
  inputNumber = $("input[type=number][name=dogNumber]").val();
  console.log(inputNumber);
  getDogImage();
  return inputNumber;
});

function getDogImage() {
  fetch(`https://dog.ceo/api/breeds/image/random/${inputNumber}`)
    .then((response) => response.json())
    .then((responseJson) => displayResults(responseJson))
    .catch((error) => alert("Something went wrong. Try again later."));
}

function displayResults(responseJson) {
  debugger;
  console.log(responseJson);
  // dogImageVariable = responseJson.messages;
  // console.log(dogImageVariable);
  let dogImages = '';
  //replace the existing image with the new one
  for (let i = 0; i < inputNumber; i++) {
    dogImages += `<img src="${responseJson.message[i]}" class="results-img">`;
   
    //display the results section
    
  }
  $("#show").html(dogImages);
  $(".results").removeClass("hidden");
}

// function watchForm() {
//   $('form').submit(event => {
//     event.preventDefault();
//     // repeatImageForUserInput()
//   });
// }

$(function () {
  console.log("App loaded! Waiting for submit!");
  // watchForm();
});

// function runApp() {
// repeatImageForUserInput();
// assignFormInput();
// }
