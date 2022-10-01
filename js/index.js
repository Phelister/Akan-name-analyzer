
const MALE_NAMES=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
const FEMALE_NAMES=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

var email;
var date=null;
var userName;
var gender=null;
var actualAkhanName;
var century;
var year;
var month;
var day;
var dayOfWeek;
var akhanName= null;
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

function getAkhanNames(varDate, varGender){
    
    
    varDate =varDate.toString();
   
    varGender=varGender.toLowerCase();

    century=varDate.slice(0,2);
    year=varDate.slice(2,4);
    month=varDate.slice(5,7);
    day=varDate.slice(8,10);

    century=parseInt(century);
    year=parseInt(year);
    month=parseInt(month);
    day= parseInt(day);

    if(gender!="male" || gender !="female"){ 
        return alert("Enter your gender as either Male of Female");
    }

    dayOfWeek=(((century/4)-2*century-1)+((5*year/4))+((26*(month+1)/10))+day)%7;

    dayOfWeek=Math.round(dayOfWeek);
    console.log(dayOfWeek);

    switch(dayOfWeek){
        case 0:
            if(gender=== "male"){
                akhanName=MALE_NAMES[0];
            }
            else{
                akhanName=FEMALE_NAMES[0];
            }
            break;
        case 1:
            if(gender==="male"){
                akhanName=MALE_NAMES[1];
            }
            else{
                akhanName=FEMALE_NAMES[1];
            }
            break;
        case 2:
            if(gender==="male"){
                akhanName=MALE_NAMES[2];
            }
            else{
                akhanName=FEMALE_NAMES[2];
            }
            break;
        case 3:
            if(gender==="male"){
                akhanName=MALE_NAMES[3];
            }
            else{
                akhanName=FEMALE_NAMES[3];
            }
            break;
        case 4:
            if(gender==="male"){
                akhanName=MALE_NAMES[4];
            }
            else{
                akhanName=FEMALE_NAMES[4];
            }
            break;
        case 5:
            if(gender==="male"){
                akhanName=MALE_NAMES[5];
            }
            else{
                akhanName=FEMALE_NAMES[5];
            }
            break;

        case 6:
            if(gender==="male"){
                akhanName=MALE_NAMES[6];
            }
            else{
                akhanName=FEMALE_NAMES[6];
            }
            break;
        
    }
    return akhanName;
}

 function printUserAkhanName(actualAkhanName){


 }

 document.getElementById("formDetails").onclick=ak


 document.getElementById("formDetails").onclick=function(){
    email=document.getElementById("email").value;
    date=document.getElementById("date").value;
    userName=document.getElementById("name").value;
    gender=document.getElementById("gender").value;
    console.log(email);
    console.log(date);
    console.log(userName);
    console.log(gender);
    console.log(century);
    console.log(year);
    console.log(day);
    console.log(month);

    actualAkhanName=getAkhanNames(date,gender);
    console.log(akhanName);
    console.log(gender);
    console.log(dayOfWeek);
    // printUserAkhanName(actualAkhanName);
}



// You can use a form or prompt form you use jquery

//get user input, user's birthday and gender
//m or f

//calculate day of birth:

//get users name
//
// 