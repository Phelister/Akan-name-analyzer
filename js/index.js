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


var email=null;
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

function getAkhanNames(varDate, varGender) {
  if(varGender!=="male" && varGender!=="female" && userName.length < 1){
    
    return alert("Please select the correct gender and userName");
  }

  if(varGender!=="male" && varGender!=="female"){
    
    return alert("Enter your gender as either Male or Female");
  }

  if(userName.length < 1){
    
    return alert("please enter your Name");
  }
  if(varDate.length < 1){
    
    return alert("please enter a valid date");
  }

  century = parseInt(varDate.slice(0, 2));
  year = parseInt(varDate.slice(2, 4));
  month = parseInt(varDate.slice(5, 7));
  day = parseInt(varDate.slice(8, 10));

  dayOfWeek = Math.floor((((century / 4) - 2 * century - 1 )+ (5 * year/4) + ((26 * (month + 1)/ 10)) +(day-0.5) )% 7);
     //( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + (DD - 0.5)) % 7;
    // ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7
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

 if((gender==="male"|| gender==="female") && date.length>=1 && userName.length>=1){
  document.getElementById("updateDetails").innerHTML = "Hi! " + userName + " , your Akan name is " + actualName + ". This is a Ghananian name given to " + gender.toLowerCase() + "s born on a " +  DAY_OF_THE_WEEK[dayOfWeek] + ".";
 }
 else{
  document.getElementById("updateDetails").innerHTML ="Please ensure all fields are filled in correctly";
 }

}

document.getElementById("formDetails").onclick = function () {
  email = document.getElementById("email").value;
  date = document.getElementById("date").value;
  userName = document.getElementById("name").value;
  gender = document.getElementById("gender").value;
  
  console.log(email);
  console.log(date);
  console.log(gender);
 

  // if(ç){
    
  //   return alert("Enter your gender as either Male or Female");
  // }
  // if(userName=="null"){
    
  //   return alert("please enter your username");
  // }
 

  actualAkhanName = getAkhanNames(date, gender);
  console.log(akhanName);
  console.log(gender);
  console.log(dayOfWeek);
  printUserAkhanName(actualAkhanName);
}

