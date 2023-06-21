    // JavaScript code for form validation
	// Prevent form from submitting

      // Retrieve the input field value

      // Regular expression pattern for alphanumeric input

      // Check if the input value matches the pattern

        // Valid input: display confirmation and submit the form

        // Invalid input: display error message


function validateInput(e) {
  e.preventDefault();
  //get the field value
  let fieldVal = document.getElementById("inputField");

  //validate against the regex /^\w*$/
  let isValid = /^\w*$/.test(fieldVal.value);

  //if match then submit
  if (isValid) {
    alert("Submitted!");
    myForm.submit();
    return true;
  }
  //else display error
  else {
    //isValid.setCustomValidity("The input value should be alphanumeric.")
    alert("The input value should be alphanumeric.");
    return(false);
  }

}

let myForm = document.getElementById("myForm");
myForm.onsubmit = validateInput;

