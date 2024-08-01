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
    const sidebar = document.getElementById('sidebar_off_screen');
    console.log('Hamburger icon clicked'); // Debugging line
    sidebar.classList.toggle('show');
}

// Function to be executed when the window is resized
function onWindowResize() {
    const sidebar = document.getElementById('sidebar_off_screen');
    if (window.innerWidth > 768) { // Adjust the threshold as needed
        sidebar.classList.remove('show');
    }
}

// Attach the onDOMContentLoaded function to the DOMContentLoaded event
document.addEventListener('DOMContentLoaded', hamburgerIcon);