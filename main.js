let display = document.getElementById('display');
        let currentInput = '0';

        function appendNumber(number) {
            if (currentInput === '0') {
                currentInput = number;
            } else {
                currentInput += number;
            }
            display.innerText = currentInput;
        }

        function appendOperator(operator) {
            if (currentInput !== '0') {
                currentInput += ' ' + operator + ' ';
                display.innerText = currentInput;
            }
        }

        function clearDisplay() {
            currentInput = '0';
            display.innerText = '0';
        }

        function calculateResult() {
            try {
                currentInput = eval(currentInput.replace('x', '*').replace('÷', '/')).toString();
                display.innerText = currentInput;
            } catch (error) {
                display.innerText = 'Error';
                currentInput = '0';
            }
        }
