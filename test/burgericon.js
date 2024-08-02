// Function to be executed when the DOM is fully loaded
function hamburgerIcon() {
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const closeIcon = document.getElementById('close_icon');
    const sidebar = document.getElementById('sidebar_off_screen');

    console.log(hamburgerIcon); 

    // Attach click event listener to the hamburger icon
    hamburgerIcon.addEventListener('click', function() {
        onHamburgerIconClick(sidebar);
    });

    // Attach click event listener to the close icon
    closeIcon.addEventListener('click', function() {
        closeIconClick(sidebar);
    });

    // Attach resize event listener to the window
    window.addEventListener('resize', function() {
        onWindowResize(sidebar);
    });
}

// Function to be executed when the hamburger icon is clicked
function onHamburgerIconClick(sidebar) {
    console.log('Hamburger icon clicked'); // Debugging line
    sidebar.classList.toggle('show');
    document.body.classList.toggle('no-scroll'); // Prevent scrolling when the sidebar is open
}

// Function to be executed when the close icon is clicked
function closeIconClick(sidebar) {
    console.log('Close icon clicked'); // Debugging line
    sidebar.classList.remove('show');
    document.body.classList.remove('no-scroll'); // Remove no-scroll class from body
}

// Function to be executed when the window is resized
function onWindowResize(sidebar) {
    if (window.innerWidth > 768) { // Adjust the threshold as needed
        sidebar.classList.remove('show');
        document.body.classList.remove('no-scroll'); // Remove no-scroll class from body
    }
}

// Attach the onDOMContentLoaded function to the DOMContentLoaded event
document.addEventListener('DOMContentLoaded', hamburgerIcon);