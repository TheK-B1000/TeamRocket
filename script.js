function alertIt()
{
    alert("Hello");
}

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