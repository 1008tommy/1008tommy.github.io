// processor.js

document.addEventListener("DOMContentLoaded", function () {
    const contactFormSection = document.getElementById("contact-form");
  
    // HIDE FROM INCOMPATIBLE BROWSERS
    contactFormSection.innerHTML = `
      <h1>Your form has been submitted successfully!</h1>
      <h2>The following are the details you have entered:</h2>
    `;
  
    let formData = location.search;
  
    formData = formData.substring(1, formData.length);
    while (formData.indexOf("+") !== -1) {
      formData = formData.replace("+", " ");
    }
    formData = decodeURIComponent(formData);
    const formArray = formData.split("&");
    const formDetails = {};
    for (let i = 0; i < formArray.length; ++i) {
      const pair = formArray[i].split("=");
      formDetails[pair[0]] = pair[1];
    }
  
    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  
    for (const key in formDetails) {
      if (formDetails.hasOwnProperty(key)) {
        let displayKey = key;
        if (key === "name" || key === "phone" || key === "message") {
          displayKey = capitalizeFirstLetter(key);
        }
        contactFormSection.innerHTML += `<p><strong>${displayKey}:</strong> ${formDetails[key]}</p>`;
      }
    }
  });