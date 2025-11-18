class Calculator {
    constructor() {
        this.currentValue = '0';
        this.previousValue = null;
        this.operation = null;
        this.waitingForNewValue = false;
        
        this.display = document.getElementById('display');
        this.initializeEventListeners();
    }
    
    initializeEventListeners() {
        // Number buttons
        document.querySelectorAll('.btn-number').forEach(button => {
            button.addEventListener('click', () => {
                const number = button.dataset.number;
                this.inputNumber(number);
                this.animateButton(button);
            });
        });
        
        // Operator buttons
        document.querySelectorAll('.btn-operator').forEach(button => {
            button.addEventListener('click', () => {
                const operator = button.dataset.operator;
                this.inputOperator(operator);
                this.animateButton(button);
                this.setActiveOperator(button);
            });
        });
        
        // Clear button
        document.getElementById('clear').addEventListener('click', (e) => {
            this.clear();
            this.animateButton(e.target);
        });
        
        // Equals button
        document.getElementById('equals').addEventListener('click', (e) => {
            this.calculate();
            this.animateButton(e.target);
        });
        
        // Plus/Minus button
        document.getElementById('plusminus').addEventListener('click', (e) => {
            this.toggleSign();
            this.animateButton(e.target);
        });
        
        // Percent button
        document.getElementById('percent').addEventListener('click', (e) => {
            this.percent();
            this.animateButton(e.target);
        });
        
        // Keyboard support
        document.addEventListener('keydown', (e) => this.handleKeyboard(e));
    }
    
    inputNumber(num) {
        if (this.waitingForNewValue) {
            this.currentValue = '';
            this.waitingForNewValue = false;
        }
        
        // Handle decimal point
        if (num === '.') {
            if (this.currentValue.includes('.')) return;
            if (this.currentValue === '') {
                this.currentValue = '0.';
            } else {
                this.currentValue += '.';
            }
        } else {
            // Handle regular numbers
            if (this.currentValue === '0') {
                this.currentValue = num;
            } else {
                // Limit display length
                if (this.currentValue.length < 12) {
                    this.currentValue += num;
                }
            }
        }
        
        this.updateDisplay();
    }
    
    inputOperator(operator) {
        const inputValue = parseFloat(this.currentValue);
        
        if (this.previousValue === null) {
            this.previousValue = inputValue;
        } else if (this.operation && !this.waitingForNewValue) {
            const result = this.performCalculation();
            this.currentValue = String(result);
            this.previousValue = result;
        } else {
            this.previousValue = inputValue;
        }
        
        this.waitingForNewValue = true;
        this.operation = operator;
        this.updateDisplay();
    }
    
    calculate() {
        if (this.operation && this.previousValue !== null) {
            const result = this.performCalculation();
            this.currentValue = String(result);
            this.operation = null;
            this.previousValue = null;
            this.waitingForNewValue = true;
            this.updateDisplay();
            this.clearActiveOperators();
        }
    }
    
    performCalculation() {
        const inputValue = parseFloat(this.currentValue);
        const previousValue = this.previousValue;
        let result = 0;
        
        switch (this.operation) {
            case '+':
                result = previousValue + inputValue;
                break;
            case '-':
            case '−':
                result = previousValue - inputValue;
                break;
            case '×':
            case '*':
                result = previousValue * inputValue;
                break;
            case '÷':
            case '/':
                if (inputValue === 0) {
                    alert('Cannot divide by zero');
                    this.clear();
                    return 0;
                }
                result = previousValue / inputValue;
                break;
            default:
                return;
        }
        
        // Round to avoid floating point issues
        return Math.round(result * 100000000) / 100000000;
    }
    
    clear() {
        this.currentValue = '0';
        this.previousValue = null;
        this.operation = null;
        this.waitingForNewValue = false;
        this.updateDisplay();
        this.clearActiveOperators();
    }
    
    toggleSign() {
        const value = parseFloat(this.currentValue);
        this.currentValue = String(-value);
        this.updateDisplay();
    }
    
    percent() {
        const value = parseFloat(this.currentValue);
        this.currentValue = String(value / 100);
        this.updateDisplay();
    }
    
    updateDisplay() {
        let displayValue = this.currentValue;
        
        // Format large numbers
        if (displayValue.length > 12) {
            const num = parseFloat(displayValue);
            if (num > 999999999999) {
                displayValue = num.toExponential(6);
            } else {
                displayValue = displayValue.substring(0, 12);
            }
        }
        
        this.display.textContent = displayValue;
    }
    
    animateButton(button) {
        button.classList.add('animate');
        setTimeout(() => {
            button.classList.remove('animate');
        }, 200);
    }
    
    setActiveOperator(button) {
        this.clearActiveOperators();
        button.classList.add('active');
    }
    
    clearActiveOperators() {
        document.querySelectorAll('.btn-operator').forEach(btn => {
            btn.classList.remove('active');
        });
    }
    
    handleKeyboard(e) {
        e.preventDefault();
        
        // Numbers
        if (e.key >= '0' && e.key <= '9') {
            const button = document.querySelector(`[data-number="${e.key}"]`);
            if (button) button.click();
        }
        
        // Decimal
        if (e.key === '.') {
            const button = document.querySelector('[data-number="."]');
            if (button) button.click();
        }
        
        // Operators
        const operatorMap = {
            '+': '+',
            '-': '-',
            '*': '×',
            '/': '÷',
            'Enter': 'equals',
            '=': 'equals',
            'Escape': 'clear',
            'c': 'clear',
            'C': 'clear'
        };
        
        if (operatorMap[e.key]) {
            if (e.key === 'Enter' || e.key === '=') {
                document.getElementById('equals').click();
            } else if (e.key === 'Escape' || e.key === 'c' || e.key === 'C') {
                document.getElementById('clear').click();
            } else {
                const button = document.querySelector(`[data-operator="${operatorMap[e.key]}"]`);
                if (button) button.click();
            }
        }
        
        // Backspace
        if (e.key === 'Backspace') {
            if (this.currentValue.length > 1) {
                this.currentValue = this.currentValue.slice(0, -1);
            } else {
                this.currentValue = '0';
            }
            this.updateDisplay();
        }
    }
}

// Initialize calculator when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Calculator();
});