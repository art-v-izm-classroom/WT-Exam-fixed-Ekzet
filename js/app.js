 // Your existing script for ajaxUtils

 document.getElementById('add-button').addEventListener('click', function () {
    performCalculation('add');
});

document.getElementById('sub-button').addEventListener('click', function () {
    performCalculation('sub');
});

document.getElementById('mul-button').addEventListener('click', function () {
    performCalculation('mul');
});

function performCalculation(operation) {
    var op1 = parseFloat(document.getElementById('op1').value);
    
    var op2 = parseFloat(document.getElementById('op2').value);

    if (isNaN(op1) || isNaN(op2)) {
        alert('Please enter valid numbers for both operands.');
        return;
    }

    var result;
    switch (operation) {
        case 'add':
            result = op1 + op2;
            break;
        case 'sub':
            result = op1 - op2;
            break;
        case 'mul':
            result = op1 * op2;
            break;
    }

    document.getElementById('res').textContent = 'Result: ' + result;
}
