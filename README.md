# calculator
## Description:
A calculator with basic functionalities to add, subtract, multiply or divide two given numbers at a time. The numbers will be chosen via buttons and displayed on the calculator display.
The calculator will be split in two main segments: The display and buttons. 
The user will be able to press buttons which carry a certain value and said value will be shown on the display.

## Technologies: 
- HTML
- CSS
- Javascript.

## Main Functionalities:
- Choose values via buttons
- Input will be automatically displayed after clicking a button
- Choosing an operator: "+, -, * or /" for math equations
- Add two values
- Subtract two values
- Mulitply two values
- Divide two values
- After an equation, two values will yield a new result, which can be temporarily used for a new equation
- Clear user input

## The process
I started by creating the HTML boilerplate and the calculator main segments and nested them accordingly. I wanted to start with a rough idea of a calculator and added numbers and operators to the elements directly in the HTML file. In the meantime I started adding CSS classes and ID's to the HTML elements to for better readabillity.

I adjusted CSS classes so they differences of HTML elements are visually displayed in colour and structure so that errors will be easier detectable. 

After I had the basic structure down, I added the functionality to display the value of the buttons clicked on the display.

Afterwards, I extended the elements in the display so operators and numbers could be seen seperatley on the display. Also, the number buttons and operator buttons are fetched seperatley so the logic, in how the values interact with each other, will be easier to implement.

## What I learned

### Display values: 
Assign values to HTML elements with innerHTML so that they can be displayed on the screen.

### HTML / CSS Standard properties of elements:
Some HTML elements (like input in this case) have certain properties which can impede a cohesive structure and makes the element flood over it's container. Solution was to set CSS class of input manually to make it fit with the rest of the structure.