# 🧮 Calculator Built with AI Prompts

> A demonstration of building a complete calculator application using only structured prompts and AI assistance

This project showcases how to build a functional calculator through iterative prompting, demonstrating the power of prompt-driven development. Each feature is built step-by-step using carefully crafted prompts that guide AI to generate clean, functional code.

## What's Inside

- **Step-by-step prompts** for building calculator functionality
- **Progressive complexity** from basic arithmetic to advanced features
- **Clean, maintainable code** generated through structured prompting
- **Real-world examples** of effective AI collaboration

## How to Use This Repository

1. **Follow the prompts in order** - Each builds on the previous one
2. **Copy prompts into your AI agent** - Works with Continue, ChatGPT, Claude, or other AI coding agents
3. **Review and iterate** - Modify prompts as needed for your specific use case
4. **Learn from the process** - Observe how structured prompting leads to better code

## The Prompts

This repository contains a series of prompts that build a complete calculator. Each prompt is designed to be clear, specific, and build upon previous work.

### ✅ 1. Basic Calculator PWA Interface (UI Only)

```
Create a basic calculator PWA (Progressive Web App) interface with HTML, CSS, and JavaScript.

IMPORTANT: This step is for the UI and PWA setup ONLY. Do NOT implement any calculation logic.

The calculator should have:
- A display screen showing "0" initially
- Number buttons (0-9) that only provide visual feedback when clicked
- Basic operation buttons (+, -, ×, ÷) that only provide visual feedback
- An equals button (=) that only provides visual feedback
- A clear button (C) that resets the display to "0"
- Clean, modern styling with a dark theme
- Responsive design that works on mobile devices
- Button click animations for visual feedback

PWA requirements:
- Create a manifest.json for app installation
- Add a service worker for offline capability
- Include app icons (at least a basic SVG icon)
- Make it installable on mobile devices
- Set up proper viewport and theme colors

The buttons should:
- Have hover and active states
- Show visual feedback when clicked (animations)
- Console.log their value when clicked (for debugging)
- NOT perform any calculations or update the display (except Clear)

Create a grid layout that resembles a real calculator. The calculator should look complete but not function yet.
```

### 2. Arithmetic Operations (Add Functionality)

```
Now add working functionality to the existing calculator interface from Step 1.

IMPORTANT: You are adding functionality to an existing UI. The buttons and display already exist.

Implement the following features:
- Make number buttons (0-9) update the display when clicked
- Make the decimal point button add a decimal to the current number
- Implement basic arithmetic operations (+, -, ×, ÷)
- Make the equals button calculate and show the result
- Ensure the clear button resets all calculator state
- Handle sequential operations (e.g., 2 + 3 = 5, then + 4 = 9)

Functionality requirements:
- Display should update as users type numbers
- Support decimal numbers (prevent multiple decimal points)
- Perform the calculation when equals is pressed
- Handle division by zero with an error message
- Support operation chaining (but NOT order of operations yet)
- Add keyboard support for numbers and basic operations

Note: For this step, operations should be evaluated left-to-right as entered (5 + 3 × 2 = 16, not 11).
```

### 3. Advanced Mathematical Functions

```
Extend the calculator with advanced mathematical functions:
- Add scientific functions: sin, cos, tan, log, ln, sqrt
- Include constants: π (pi), e (Euler's number)
- Add power functions: x², x³, xʸ
- Include parentheses for grouping operations
- Add memory functions: M+, M-, MR, MC
- Implement percentage calculations
- Add a toggle between standard and scientific modes

Ensure all functions work correctly and display appropriate results.
```

### 4. Error Handling and Edge Cases

```
Improve the calculator's robustness by adding comprehensive error handling:
- Handle division by zero with appropriate error messages
- Manage invalid mathematical operations (e.g., square root of negative numbers)
- Prevent multiple decimal points in a single number
- Handle very large numbers and display formatting
- Manage invalid input sequences
- Add input validation for all operations
- Implement proper error recovery (users can continue after an error)
- Display helpful error messages instead of breaking

Test edge cases like: 0/0, √(-1), very long decimal numbers, and rapid button pressing.
```

### 5. UI/UX Improvements

```
Enhance the calculator's user interface and experience:
- Add button press animations and visual feedback
- Implement keyboard support for all functions
- Add sound effects for button presses (optional toggle)
- Improve the display with better number formatting
- Add a history panel showing recent calculations
- Implement themes: dark, light, and colorful options
- Add accessibility features: ARIA labels, keyboard navigation
- Optimize the layout for both desktop and mobile
- Include helpful tooltips for advanced functions
- Add smooth transitions and micro-animations

Focus on making the calculator feel responsive and professional.
```

### 6. Testing and Validation

```
Implement comprehensive testing for the calculator:
- Create unit tests for all mathematical operations
- Add integration tests for user interaction flows
- Test error handling scenarios thoroughly
- Validate accessibility compliance
- Test cross-browser compatibility
- Add performance tests for complex calculations
- Create automated tests for UI interactions
- Include edge case testing for all functions
- Add visual regression tests for the interface
- Document test coverage and results

Ensure the calculator is reliable, accurate, and production-ready.
```

## Recommended Setup

While these prompts work with any AI coding assistant, we recommend [Continue](https://continue.dev) for the best experience:

- **Continue CLI**: Terminal-native AI assistance
- **VS Code Extension**: Integrated code generation and editing
- **Context awareness**: Automatically includes relevant project files

[Quick Setup Guide](https://hub.continue.dev/continue-cli)

## Getting Started

1. Clone this repository
2. Choose your AI coding tool
3. Start with the first prompt in the series
4. Watch your calculator come to life!

---

**Built with AI assistance** - Demonstrating the future of collaborative coding
