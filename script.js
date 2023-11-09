function showEduLevel() {
    var eduListValue = document.getElementById("educationLevel").value;
    var eduSpan = document.getElementById("EduSpan");
    eduSpan.style.display = eduListValue === "" ? "none" : "block";
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("applicationForm").addEventListener("submit", function(event) {
        event.preventDefault();
        var dataIsValid = true;

        var inputs = document.querySelectorAll('input[type=text], input[type=email], input[type=tel], input[type=date], input[type=checkbox], select');
        inputs.forEach(function(input) {
            var errorSpan = document.getElementById(input.name + 'Error');
            if((input.type === "checkbox" && !input.checked) || input.value.trim() === "") {
                errorSpan.textContent = 'This field is required.';
                input.classList.add('is-invalid');
                dataIsValid = false;
            } else {
                errorSpan.textContent = '';
                input.classList.remove('is-invalid');
            }
        });

        function validateRadios(radioName) {
            var radios = document.getElementsByName(radioName);
            var selected = Array.from(radios).some(radio => radio.checked);
            var errorSpan = document.getElementById(radioName + 'Error');
            if (!selected) {
                errorSpan.textContent = 'Please select an option.';
                dataIsValid = false;
            } else {
                errorSpan.textContent = '';
            }
        }

        validateRadios('transport');
        validateRadios('military');

        if (dataIsValid) {
            console.log('Data is valid. Form submitted.');
            this.submit();
        } else {
            console.error('Data is not valid. Correct the errors.');
        }
    });
});
