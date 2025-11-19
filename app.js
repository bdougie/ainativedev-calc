// Calculator with Leet Easter Eggs
class Calculator {
    constructor() {
        this.display = document.getElementById('display');
        this.currentValue = '0';
        this.previousValue = null;
        this.operator = null;
        this.waitingForOperand = false;
        this.easterEggContainer = null;
        this.initializeEventListeners();
        this.createEasterEggContainer();
    }
    
    createEasterEggContainer() {
        this.easterEggContainer = document.createElement('div');
        this.easterEggContainer.className = 'easter-egg-container';
        document.body.appendChild(this.easterEggContainer);
    }
    
    initializeEventListeners() {
        // Number buttons
        document.querySelectorAll('.btn-number').forEach(button => {
            button.addEventListener('click', () => {
                const num = button.dataset.number;
                this.inputNumber(num);
                this.animateButton(button);
            });
        });
        
        // Keyboard support
        document.addEventListener('keydown', (event) => {
            // Handle number keys
            if (event.key >= '0' && event.key <= '9') {
                this.inputNumber(event.key);
            } else if (event.key === '.') {
                this.inputNumber('.');
            } else if (event.key === 'Enter' || event.key === '=') {
                // Check for Easter egg first (before calculation changes the value)
                const hasEasterEgg = this.checkForEasterEgg();
                if (!hasEasterEgg) {
                    this.calculate();
                }
            } else if (event.key === 'Escape' || event.key === 'c' || event.key === 'C') {
                this.clear();
            } else if (event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/') {
                const opMap = {'+': '+', '-': '−', '*': '×', '/': '÷'};
                this.handleOperator(opMap[event.key]);
            }
        });
        
        // Operator buttons
        document.querySelectorAll('.btn-operator').forEach(button => {
            button.addEventListener('click', () => {
                const op = button.dataset.operator;
                this.handleOperator(op);
                this.animateButton(button);
            });
        });
        
        // Clear button
        document.getElementById('clear').addEventListener('click', () => {
            this.clear();
        });
        
        // Equals button - triggers Easter eggs
        document.getElementById('equals').addEventListener('click', () => {
            // Check for Easter egg first (before calculation changes the value)
            const hasEasterEgg = this.checkForEasterEgg();
            if (!hasEasterEgg) {
                this.calculate();
            }
        });
        
        // Plus/minus button
        document.getElementById('plusminus').addEventListener('click', () => {
            this.toggleSign();
        });
        
        // Percent button
        document.getElementById('percent').addEventListener('click', () => {
            this.percentage();
        });
    }
    
    inputNumber(num) {
        if (this.waitingForOperand) {
            this.currentValue = num === '.' ? '0.' : num;
            this.waitingForOperand = false;
        } else {
            if (num === '.') {
                if (this.currentValue.indexOf('.') === -1) {
                    this.currentValue += '.';
                }
            } else {
                this.currentValue = this.currentValue === '0' ? num : this.currentValue + num;
            }
        }
        this.updateDisplay();
    }
    
    handleOperator(nextOperator) {
        const inputValue = parseFloat(this.currentValue);
        
        if (this.previousValue === null) {
            this.previousValue = inputValue;
        } else if (this.operator) {
            const result = this.performCalculation();
            this.currentValue = String(result);
            this.previousValue = result;
        }
        
        this.waitingForOperand = true;
        this.operator = nextOperator;
        this.updateDisplay();
    }
    
    calculate() {
        if (this.operator && this.previousValue !== null) {
            const result = this.performCalculation();
            this.currentValue = String(result);
            this.previousValue = null;
            this.operator = null;
            this.waitingForOperand = true;
            this.updateDisplay();
        }
    }
    
    performCalculation() {
        const inputValue = parseFloat(this.currentValue);
        let result = 0;
        
        switch(this.operator) {
            case '+':
                result = this.previousValue + inputValue;
                break;
            case '-':
            case '−':
                result = this.previousValue - inputValue;
                break;
            case '×':
            case '*':
                result = this.previousValue * inputValue;
                break;
            case '÷':
            case '/':
                result = this.previousValue / inputValue;
                break;
            default:
                return;
        }
        
        return result;
    }
    
    clear() {
        this.currentValue = '0';
        this.previousValue = null;
        this.operator = null;
        this.waitingForOperand = false;
        this.updateDisplay();
    }
    
    toggleSign() {
        this.currentValue = String(parseFloat(this.currentValue) * -1);
        this.updateDisplay();
    }
    
    percentage() {
        this.currentValue = String(parseFloat(this.currentValue) / 100);
        this.updateDisplay();
    }
    
    updateDisplay() {
        this.display.textContent = this.currentValue;
    }
    
    animateButton(button) {
        button.classList.add('animate');
        setTimeout(() => {
            button.classList.remove('animate');
        }, 200);
    }
    
    checkForEasterEgg() {
        // Easter eggs only trigger on equals/enter
        const value = this.currentValue.replace('.', '');
        let triggered = false;
        const easterEggs = {
            '1337': {
                message: 'ACCESS GRANTED, H4X0R',
                emoji: '💻',
                effect: 'matrix'
            },
            '404': {
                message: 'Error: Math not found',
                emoji: '❌',
                effect: 'glitch'
            },
            '777': {
                message: 'JACKPOT!',
                emoji: '🎰',
                effect: 'spin'
            },
            '8008': {
                message: 'Nice nostalgia',
                emoji: '😄',
                effect: 'retro'
            },
            '58008': {
                message: 'Classic calculator jokes',
                emoji: '📟',
                effect: 'retro'
            },
            '5318008': {
                message: 'Throwback detected',
                emoji: '📟',
                effect: 'retro'
            },
            '007': {
                message: 'Bond. Calculator Bond.',
                emoji: '🕵️',
                effect: 'spy'
            },
            '1234': {
                message: 'Sequential vibes only',
                emoji: '📈',
                effect: 'rainbow'
            },
            '1111': {
                message: 'Repetitive excellence',
                emoji: '🔁',
                effect: 'pulse'
            },
            '2222': {
                message: 'Double double',
                emoji: '✌️',
                effect: 'pulse'
            },
            '3333': {
                message: 'Triple threat',
                emoji: '3️⃣',
                effect: 'pulse'
            },
            '4444': {
                message: 'Quad squad',
                emoji: '4️⃣',
                effect: 'pulse'
            },
            '5555': {
                message: 'High five!',
                emoji: '✋',
                effect: 'pulse'
            },
            '6666': {
                message: 'Hexa-awesome',
                emoji: '6️⃣',
                effect: 'pulse'
            },
            '7777': {
                message: 'Lucky sevens!',
                emoji: '7️⃣',
                effect: 'spin'
            },
            '8888': {
                message: 'Infinite loop detected',
                emoji: '♾️',
                effect: 'pulse'
            },
            '9999': {
                message: 'Almost there!',
                emoji: '9️⃣',
                effect: 'pulse'
            }
        };
        
        // Check for specific "over 9000" values (9001 specifically, not everything above 9000)
        if (value === '9001') {
            this.triggerEasterEgg({
                message: "IT'S OVER 9000!!",
                emoji: '💥',
                effect: 'explode'
            });
            return true;
        }
        
        // Check for palindromes
        if (value.length > 2 && value === value.split('').reverse().join('')) {
            this.triggerEasterEgg({
                message: 'Palindrome mode enabled',
                emoji: '🔄',
                effect: 'flip'
            });
            return true;
        }
        
        // Check for pi
        if (this.currentValue.startsWith('3.14159')) {
            this.triggerEasterEgg({
                message: 'π-oneered!',
                emoji: '🥧',
                effect: 'spin'
            });
            return true;
        }
        
        // Check for specific easter eggs
        if (easterEggs[value]) {
            this.triggerEasterEgg(easterEggs[value]);
            return true;
        }
        
        return false;
    }
    
    triggerEasterEgg(config) {
        // Create and show the message
        const message = document.createElement('div');
        message.className = `easter-egg-message ${config.effect}`;
        message.innerHTML = `
            <span class="easter-egg-emoji">${config.emoji}</span>
            <span class="easter-egg-text">${config.message}</span>
        `;
        
        this.easterEggContainer.appendChild(message);
        
        // Apply the specific effect
        this.applyEffect(config.effect);
        
        // Remove message after animation (longer for matrix effect)
        const duration = config.effect === 'matrix' ? 5000 : 3000;
        setTimeout(() => {
            message.remove();
        }, duration);
    }
    
    applyEffect(effect) {
        const calculator = document.querySelector('.calculator');
        
        switch(effect) {
            case 'matrix':
                this.matrixRain();
                break;
            case 'glitch':
                calculator.classList.add('glitch-effect');
                setTimeout(() => calculator.classList.remove('glitch-effect'), 1000);
                break;
            case 'spin':
                calculator.classList.add('spin-effect');
                setTimeout(() => calculator.classList.remove('spin-effect'), 1000);
                break;
            case 'retro':
                document.body.classList.add('retro-mode');
                setTimeout(() => document.body.classList.remove('retro-mode'), 2000);
                break;
            case 'spy':
                calculator.classList.add('spy-effect');
                setTimeout(() => calculator.classList.remove('spy-effect'), 2000);
                break;
            case 'rainbow':
                calculator.classList.add('rainbow-effect');
                setTimeout(() => calculator.classList.remove('rainbow-effect'), 2000);
                break;
            case 'pulse':
                calculator.classList.add('mega-pulse');
                setTimeout(() => calculator.classList.remove('mega-pulse'), 1000);
                break;
            case 'explode':
                calculator.classList.add('explode-effect');
                setTimeout(() => calculator.classList.remove('explode-effect'), 1500);
                break;
            case 'flip':
                calculator.classList.add('flip-effect');
                setTimeout(() => calculator.classList.remove('flip-effect'), 1000);
                break;
        }
    }
    
    matrixRain() {
        const matrixContainer = document.createElement('div');
        matrixContainer.className = 'matrix-rain';
        
        // Create more columns for better coverage
        for (let i = 0; i < 30; i++) {
            const column = document.createElement('div');
            column.className = 'matrix-column';
            column.style.left = `${(i * 3.33)}%`;
            column.style.animationDelay = `${Math.random() * 3}s`;
            column.style.animationDuration = `${3 + Math.random() * 2}s`;
            
            // Mix of 1337 and binary for more hacker feel
            const patterns = ['1337', '01010101', '1337', '10110010', 'L33T', '01001000', 'H4X0R'];
            column.textContent = patterns[Math.floor(Math.random() * patterns.length)].repeat(10);
            
            matrixContainer.appendChild(column);
        }
        
        document.body.appendChild(matrixContainer);
        
        // Last longer for 1337 easter egg
        setTimeout(() => {
            matrixContainer.classList.add('fade-out');
            setTimeout(() => {
                matrixContainer.remove();
            }, 1000);
        }, 6000);
    }
}

// Initialize calculator interface when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Calculator();
});