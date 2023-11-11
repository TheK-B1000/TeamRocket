
function showEduLevel() {
    var eduListValue = document.getElementById("educationLevel").value;
    var eduSpan = document.getElementById("EduSpan");
    if(eduListValue == "")
    {
        eduSpan.style.display="none";
    } else 
    {
        eduSpan.style.display="inline-block";
    }
    
}


function validateForm() {
    let email = document.getElementById("email");
    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");
    let mobile = document.getElementById("phone");
    let homePhone = document.getElementById("homePhone");
    let startDate = document.getElementById("start-date");
    let maxHours = document.getElementById("max-hours");
    let militaryService = document.getElementById("militaryService");
    let ssn = document.getElementById("ssn");
    validatEmail(email);
    validateName(firstName);
    validateName(lastName);
    validatePhoneNumber(mobile);
    validatePhoneNumber(homePhone);
    validateStartDate(startDate);
    validateWorkingHours(maxHours);
    validateMilitaryService(militaryService);

}


function validatEmail(ele){
    let regex = /@{1}[a-z]+\.com$/i;
    if (!ele.value.match(regex))
    {
        ele.style.border="2px solid red";
        return false
    } else {
        ele.style.border="1px solid black";
        return true;
    }
}

function validateName(ele)
{
    let regex = /[a-zA-Z]/;
    if(!ele.value.match(regex))
    {
        ele.style.border="2px solid red";
        return false;
    } else {
        ele.style.border="1px solid black";
        return true;
    }
}

function validatePhoneNumber(ele)
{
    let regex = /[0-9]{3}-?[0-9]{3}-?[0-9]{4}/
    if(!ele.value.match(regex))
    {
        ele.style.border="2px solid red";
        return false;
    } else{
        ele.style.border="1px solid black";
        return true;
    }
}

function validateStartDate(ele) {
    let startDate = new Date(ele.value);
    let minDate = new Date('1955-01-01');
    let currentDate = new Date();
    if (startDate < minDate || startDate > currentDate) {
        ele.style.border = "2px solid red";
        alert("Please input a date between 1/1/1955 and the present.");
        return false;
    } else {
        ele.style.border = "1px solid black";
        return true;
    }
}

function validateWorkingHours(ele) {
    let hours = parseInt(ele.value);
    if (hours < 1 || hours > 84) {
        ele.style.border = "2px solid red";
        alert("Please input a number between 1 and 84 for total working hours.");
        return false;
    } else {
        ele.style.border = "1px solid black";
        return true;
    }
}

function validateMilitaryService(ele) {
    let years = parseInt(ele.value);
    if (years < 1 || years > 100) {
        ele.style.border = "2px solid red";
        alert("Please enter a number between 1 and 100 for military years of service.");
        return false;
    } else {
        ele.style.border = "1px solid black";
        return true;
    }
}
