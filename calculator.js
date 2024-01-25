document.addEventListener('DOMContentLoaded', function () {
    // Function to perform the calculation
    function calculate() {
        // Get input values
        var input1 = parseFloat(document.getElementById('input1').value);
        var input2 = parseFloat(document.getElementById('input2').value);

        // Perform the calculation (Addition in this example)
        var result = input1 + input2;

        // Display the result
        document.getElementById('result').innerHTML = 'Result: ' + result;
    }

    // Event listener for the calculate button
    document.getElementById('calculateButton').addEventListener('click', calculate);
});
