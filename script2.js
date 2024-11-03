// JavaScript functionality for navigation
function navigateTo(section) {
    // You can customize this function to handle different sections of your portfolio
    switch (section) {
        case 'home':
            alert("Navigating to Home");
            // Add code to navigate to the home section if using a single-page layout
            break;
        case 'search':
            alert("Searching...");
            // Implement search functionality or navigate to search section
            break;
        case 'about':
            alert("About Me Section");
            // Navigate to the About Me section
            break;
        case 'projects':
            alert("Projects Section");
            // Navigate to Projects section
            break;
        default:
            alert("Unknown Section");
    }
}
