const MALE_NAMES=[Kwasi,Kwadwo,Kwabena,Kwaku,Yaw,Kofi,Kwame];
const FEMALE_NAMES=[Akosua,Adwoa,Abenaa,Akua,Yaa,Afua,Ama];
const DAYS_OF_THE_WEEK=[];
var email;
var date=null;
var userName;
var gender=null;
var akhanName;
var century;
var year;
var month;
var day;
var dayOfWeek;

function getAkhanNames(date, gender){
    if(date== null ||)
    date.toString();
    dayOfWeek=(((century/4)-2*century-1)+((5*year/4))+((26*(month+1)/10))+day)%7;
}




$(document).ready(function(){
    $('#formDetails').click(function(event){
        event.preventDefault();
        email=$('#email').val();
        date=$('#date').val();
        userName=$('#name').val();
        gender=$('#gender').val();
        akhanName=getAkhanNames(date,gender);
        printUserAkhanName(akhanName);
           
    })
});
// You can use a form or prompt form you use jquery

//get user input, user's birthday and gender
//m or f

//calculate day of birth:

//get users name
//
var index_dayof week=

function getAkhanNames(day,month, year,gender){
    
}
