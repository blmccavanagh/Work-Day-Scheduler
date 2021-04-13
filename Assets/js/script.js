let now = moment();

// Function to run when page is loaded
// - when document is ready
$(document).ready(function(){

    updateTimeSensitiveFunctions();

});

// Function to update time
setInterval(updateTimeSensitiveFunctions, 1000);

// Function to update scheduler based on current time
function updateTimeSensitiveFunctions(){

    displayCurrentDateAndTime();
    // colorCode();

}

// Display current date and time in the header
function displayCurrentDateAndTime(){
    $('#currentDay').text(now.format('dddd, MMMM Do YYYY h:mm a'))
}

// Function to color code scheduler based on time
// Add background color to hours of the day
// Grey if hour has passed
// Red if current hour
// Green for future hours

function colorCode(){
    // Convert string value of hour to number value
    let currentTime = parseInt(now.format('h'));
// Use the value from now.format
// Create for loop
// if current time then red
// if less than current time then grey
// if more than current time then green
}

// Function to display schedule

// Function to retrieve schedule
// Assign any saved text to appropriate hour in scheduler

// Function to save schedule
// Save text input when save button is clicked
// Add click event for save buttons
// Click event stores text input in local storage