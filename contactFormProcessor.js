// When DOM is fully loaded, the fucntion will be executed
document.addEventListener("DOMContentLoaded", function () {
    const contactFormSection = document.getElementById("contact-form");
    console.log("contactFormSection");
  
    // Display a message to the user that the form has been submitted successfully
    contactFormSection.innerHTML = `
      <h1>Your form has been submitted successfully!</h1>
      <h2>Thank you for contacting us. We will get to you in 2-3 working days.</h2>
      <h2>The following are the details you have entered:</h2>
    `;
  
    let formData = location.search;
    // The location.search will return the query string of the URL from the form submission
    console.log(formData);
  
    // Remove the "?" character from the query string
    formData = formData.substring(1, formData.length);
    console.log(formData);

    // Replace all "+" characters with a space
    // indexOf will return -1 if the character is not found
    while (formData.indexOf("+") !== -1) {
      formData = formData.replace("+", " ");
    }

    // Decode the URI component
    formData = decodeURIComponent(formData);
    console.log(formData);

    // Split the form data into an array at each "&" character
    const formArray = formData.split("&");
    console.log(formArray);

    // Create an object to store the form details
    const formDetails = {};

    // Loop through the formArray and split each element at the "=" character
    for (let i = 0; i < formArray.length; ++i) {
      const pair = formArray[i].split("=");
      // Assign the key-value pair to the formDetails object
      console.log(pair);
      formDetails[pair[0]] = pair[1];
    }
    
    // Function to capitalize the first letter of a string
    function capitalizeFirstLetter(string) {
      // charAt(0) returns the first character of the string
      // toUpperCase() converts the character to uppercase
      // slice(1) returns the rest of the string starting from the second character
      return string.charAt(0).toUpperCase() + string.slice(1); 
    }
  
    // Loop through the formDetails object and display the key-value pairs in the contactFormSection
    for (const key in formDetails) {
      // Check if the key is a property of the formDetails object
      if (formDetails.hasOwnProperty(key)) {
        let displayKey = key;
        if (key === "name" || key === "phone" || key === "message") {
          displayKey = capitalizeFirstLetter(key);
        }
        contactFormSection.innerHTML += `<p><strong>${displayKey}:</strong> ${formDetails[key]}</p>`;
      }
    }
  });