// Calculator interface - Step 1: Basic UI only, no functionality yet
class Calculator {
    constructor() {
        this.display = document.getElementById('display');
        this.initializeEventListeners();
    }
    
    initializeEventListeners() {
        // Add visual feedback for button clicks only
        // Actual calculator logic will be implemented in Step 2
        
        // All buttons get click animation
        document.querySelectorAll('.btn').forEach(button => {
            button.addEventListener('click', () => {
                this.animateButton(button);
                console.log('Button clicked:', button.textContent);
            });
        });
        
        // Clear button resets display to 0
        document.getElementById('clear').addEventListener('click', () => {
            this.display.textContent = '0';
        });
    }
    
    animateButton(button) {
        button.classList.add('animate');
        setTimeout(() => {
            button.classList.remove('animate');
        }, 200);
    }
}

// Initialize calculator interface when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Calculator();
});