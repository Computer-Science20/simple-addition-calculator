// Simple Addition Calculator

// Add Event Listener to the Button
document.getElementById("btn").addEventListener("click", calcTotal);

// Event Function
function calcTotal() {
    // Input
    let num1 = +document.getElementById("num1").value;
    let num2 = +document.getElementById("num2").value;

    // Process
    let total = num1 + num2;

    // Output
    document.getElementById("total").innerHTML = total;
}