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
    gender.toString.toLowerCase;
    gender.toLowerCase();
    dayOfWeek=(((century/4)-2*century-1)+((5*year/4))+((26*(month+1)/10))+day)%7;
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
