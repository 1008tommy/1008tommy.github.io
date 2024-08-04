document.addEventListener('DOMContentLoaded', function() {
    // Function to initialize the Google Map. this is the script that will be loaded in the HTML file
    function initMap() {
        // Coordinates of the hotel
        const hotelLocation = { lat: 1.385719, lng: 103.943028 }; // Example coordinates

        // Create a new map object in the #map element
        const map = new google.maps.Map(document.getElementById('map'), {
            // Set the center of the map to the hotel location
            center: hotelLocation,
            // Set the zoom level of the map
            zoom: 14
        });

        // Create a new marker for the hotel location
        new google.maps.Marker({
            // Set the position of the marker to the hotel location
            position: hotelLocation,
            // Set the map to the map object created above
            map: map,
            // Set the title of the marker
            title: 'Our Hotel'
        });
    }

    // Make (Local function) initMap globally accessible, making it a global function
    // This is necessary for the Google Maps API to call the function as it requires a 
    // global function name to be called once loaded.
    window.initMap = initMap;

    // Load the Google Maps script and initialize the map
    // The script will call the initMap function when it is loaded
    const script = document.createElement('script');
    // API key is required to use Google Maps API
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDEtGAWKm0oGUNQfy4TQGXxCppHRpDmH-8&callback=initMap`;
    // Defer loading of the script until the DOM is fully loaded
    script.defer = true;
    // Asynchronously load the script
    script.async = true;
    // Append the script to the head of the document
    document.head.appendChild(script);
});