// Function to be executed when the DOM is fully loaded
function hamburgerIcon() {
    const hamburgerIcon = document.getElementById('hamburger-icon');
    console.log(hamburgerIcon); 
  
    // Attach click event listener to the hamburger icon
    hamburgerIcon.addEventListener('click', onHamburgerIconClick);

    // Attach resize event listener to the window
    window.addEventListener('resize', onWindowResize);
}

// Function to be executed when the hamburger icon is clicked
function onHamburgerIconClick() {
    const navbar = document.getElementById('navbar');
    console.log('Hamburger icon clicked'); // Debugging line
    if (navbar.style.display === 'flex') {
        navbar.style.display = 'none';
    } else {
        navbar.style.display = 'flex';
        navbar.style.flexDirection = 'column'; // Ensure the menu items stack vertically
    }
}

// Function to be executed when the window is resized
function onWindowResize() {
    const navbar = document.getElementById('navbar');
    if (window.innerWidth > 768) { // Adjust the threshold as needed
        navbar.style.display = '';
        navbar.style.flexDirection = '';
    }
}

// Attach the onDOMContentLoaded function to the DOMContentLoaded event
document.addEventListener('DOMContentLoaded', hamburgerIcon);