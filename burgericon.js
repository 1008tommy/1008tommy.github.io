// Function to be executed when the DOM is fully loaded
function hamburgerIcon() {
    // Get the hamburger icon, close icon, and sidebar elements
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const closeIcon = document.getElementById('close_icon');
    const sidebar = document.getElementById('sidebar_off_screen');

    console.log(hamburgerIcon); 

    // Attach click event listener to the hamburger icon
    // When the hamburger icon is clicked, the onHamburgerIconClick() function is executed
    hamburgerIcon.addEventListener('click', function() {
        onHamburgerIconClick(sidebar);
    });

    // Attach click event listener to the close icon
    // When the close icon is clicked, the closeIconClick() function is executed
    closeIcon.addEventListener('click', function() {
        closeIconClick(sidebar);
    });

    // Attach resize event listener to the window
    // When the window is resized, the onWindowResize() function is executed
    window.addEventListener('resize', function() {
        onWindowResize(sidebar);
    });
}

// Function to be executed when the hamburger icon is clicked
function onHamburgerIconClick(sidebar) {
    console.log('Hamburger icon clicked'); // Debugging line
    // classList is a property that returns the class name(s) of an element
    sidebar.classList.toggle('show'); // Toggle the show class on the sidebar
    document.body.classList.toggle('no-scroll'); // Prevent scrolling when the sidebar is open
}

// Function to be executed when the close icon is clicked
function closeIconClick(sidebar) {
    console.log('Close icon clicked'); // Debugging line
    sidebar.classList.remove('show'); // Remove the show class from the sidebar if present
    document.body.classList.remove('no-scroll'); // Remove no-scroll class from body
}

// Function to be executed when the window is resized
function onWindowResize(sidebar) {
    console.log('Window resized'); // Debugging line
    if (window.innerWidth > 768) { // Adjust the threshold as needed
        sidebar.classList.remove('show');
        document.body.classList.remove('no-scroll'); // Remove no-scroll class from body if present
    }
}

// Start the script when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', hamburgerIcon);