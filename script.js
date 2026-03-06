// Function that runs when the "Calculate Age" button is clicked
function calculateAge() {

    // Get the values from the input boxes
    var year = document.getElementById("year").value;
    var month = document.getElementById("month").value - 1; // Months start at 0 in JavaScript
    var day = document.getElementById("day").value;

    // Get today's date
    var today = new Date();

    // Create a birth date object using the user's input
    var birthDate = new Date(year, month, day);

    // Calculate the age
    var age = today.getFullYear() - birthDate.getFullYear();

    // Check if the birthday already happened this year
    var m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--; // Subtract 1 if the birthday hasn't happened yet
    }

    // Array of fun birthday messages
    var messages = [
        "Age is just a number!",
        "Hope you have an amazing birthday this year!",
        "Another year older, another year wiser!",
        "Celebrate every year of your life!"
    ];

    // Pick a random message from the list
    var randomMessage = messages[Math.floor(Math.random() * messages.length)];

    // Display the result on the webpage
    document.getElementById("result").innerHTML =
        "You are " + age + " years old. <br>" + randomMessage;
}