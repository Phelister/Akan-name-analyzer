const MALE_NAMES = [
  "Kwasi",
  "Kwadwo",
  "Kwabena",
  "Kwaku",
  "Yaw",
  "Kofi",
  "Kwame",
];
const FEMALE_NAMES = [
  "Akosua",
  "Adwoa",
  "Abenaa",
  "Akua",
  "Yaa",
  "Afua",
  "Ama",
];

const DAY_OF_THE_WEEK = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


var email;
var date = null;
var userName;
var gender = null;
var actualAkhanName;
var century;
var year;
var month;
var day;
var dayOfWeek;
var akhanName = null;
/*

function getgender(){
    gender=document.getElementById("gender").value;
}
function getDate(){
    date=document.getElementById("date").value;
}

function getAkhannames{

}
*/

function getAkhanNames(varDate, varGender) {
  varDate = varDate.toString();
  varGender = varGender.toLowerCase();
  century = parseInt(varDate.slice(0, 2));
  year = parseInt(varDate.slice(2, 4));
  month = parseInt(varDate.slice(5, 7));
  day = parseInt(varDate.slice(8, 10));

  // if(gender!="male" || gender !="female"){
  //     return alert("Enter your gender as either Male of Female");
  // }

  dayOfWeek =
    Math.floor(
      century / 4 -
        2 * century -
        1 +
        (5 * year) / 4 +
        (26 * (month + 1)) / 10 +
        day
    ) % 7;

  switch (varGender) {
    case "male":
      akhanName = MALE_NAMES[dayOfWeek];
      break;
    case "female":
        akhanName = FEMALE_NAMES[dayOfWeek];
      break;
  }

  return akhanName;
}

function printUserAkhanName(actualName) {

  document.getElementById("updateDetails").innerHTML = "Hi" +userName + "You were born on a " + DAY_OF_THE_WEEK[dayOfWeek] + ". Your Akan name is " + actualName + ".";

}

document.getElementById("formDetails").onclick = function () {
  email = document.getElementById("email").value;
  date = document.getElementById("date").value;
  userName = document.getElementById("name").value;
  gender = document.getElementById("gender").value;
  console.log(email);
  console.log(date);
  console.log(userName);
  console.log(gender);

  actualAkhanName = getAkhanNames(date, gender);
  console.log(akhanName);
  console.log(gender);
  console.log(dayOfWeek);
  printUserAkhanName(actualAkhanName);
};

// You can use a form or prompt form you use jquery

//get user input, user's birthday and gender
//m or f

//calculate day of birth:

//get users name
//
//
