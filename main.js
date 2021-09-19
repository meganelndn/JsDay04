// Exercise 31
// Write a JavaScript program that retrieves H (h1 to h6) elements in 6 different ways:
// getElementById, querySelector (#id), getElementsByTagname, querySelector (tagname), getElementsByClassName, querySelector (.className).
// console.log items after you download them and see them in the console and reflect on why it's easier to use querySelector.
console.log("%cExercise 31", "color: black; background: pink");

console.log(document.getElementById("one"));
console.log(document.querySelector("#two"));
console.log(document.getElementsByTagName("h3"));
console.log(document.getElementsByClassName("header4"));
console.log(document.querySelector(".header5"));

// Exercise 32
// Write a JavaScript program that retrieves an empty paragraph tag in your HTML using a query selector. The paragraph tag must be filled in with your name using JavaScript.
// Hint: innerText
console.log("%cExercise 32", "color: black; background: pink");

const paragraph = document.querySelector("#p")
paragraph.innerText = "My name is Mégane";
console.log(paragraph)

// Exercise 33
// Write a JavaScript program that retrieves a button using the "button1" class. Use queryselector to retrieve the button. When the button is clicked, a function must be executed which creates an alert on the page where it says "button1".
console.log("%cExercise 33", "color: black; background: pink");

const btn = document.querySelector(".btn1");
btn.addEventListener("click", e => {
    alert("This button has been clicked")
})

// Exercise 34
// Write a JavaScript program that retrieves a button using an ID "id1". Use querySelector to retrieve the button. When the button is clicked, a function must be executed which changes the background color of the body element from black to yellow.
console.log("%cExercise 34", "color: black; background: pink");

const btnID = document.querySelector("#id1");
btnID.addEventListener("click", e => {
    btnID.style.backgroundColor = "yellow";
})

// Exercise 35
// Write a JavaScript program that retrieves five identical class elements in 5 different blank p-tags. Add the text button1, button2, button3, button4 and button5 in each p-tag with JavaScript. Add one
// EventListener on each p-tag. Each time one of the buttons is clicked, it must tell which p-tags are clicked.
console.log("%cExercise 35", "color: black; background: pink");

const p5 = document.querySelectorAll(".paragraph");
p5.forEach(para => {
    if (para.id == "p1") {
        para.innerText = "Button1";
    } else if (para.id == "p2") {
        para.innerText = "Button2";
    } else if (para.id == "p3") {
        para.innerText = "Button3";
    } else if (para.id == "p4") {
        para.innerText = "Button4";
    } else if (para.id == "p5") {
        para.innerText = "Button5";
    }

    para.addEventListener("click", () => {
        console.log(`${para.innerText} has been clicked!`)
    }) 

    /* for (let i = 0; i < para.length; i++) {
        console.log(para[i])

        if (i == 0) {
            para.innerText = "button1";
        } else if (i == 1) {
            para.innerText = "button2";
        } else if (i == 2) {
            para.innerText = "button3";
        } else if (i == 3) {
            para.innerText = "button4";
        } else {
            para.innerText = "button5";
        }
        console.log(para[i])
    } */
})

// Exercise 36
// Write a JavaScript program that has three Div elements with the same class on each Div element. Write “Rip” in the first element, “Rap” in the second element and “Rup” in the third element.
// Retrieve all three Div elements with querySelectorAll and loop through the elements with a foreach. Add a class on the Rap element that changes the styling. Add an EventListener
// on the Rup element, which activates an Alert that says: “Rup”.
console.log("%cExercise 36", "color: black; background: pink");

const divs = document.querySelectorAll(".div");
divs.forEach(div => {
    if (div.id == "div1") {
        div.innerText = "Rip";
    } else if (div.id == "div2") {
        div.innerText = "Rap";
        div.style.color = "blue";
    } else if (div.id == "div3") {
        div.innerText = "Rup";
        div.addEventListener("click", e => {
            alert("Rup");
        })
    }
})

// Exercise 37
// Write a JavaScript with an array of five names. Use a forEach loop to loop through the array, add html and a class to each index array and print it in a blank Div ​​on the page.
// Decide for yourself how the class should be styled and which element should be printed in the empty div.
console.log("%cExercise 37", "color: black; background: pink");

let names = ["Anna", "Charlie", "Sara", "Kira", "Heather"];
names.forEach(name => {
    document.querySelector(".nameContainer").innerHTML += (`<p class="${name}">${name}</p>`);
})

// Exercise 38
// Write a JavaScript program that retrieves two numbers from two different input fields. Also add a select list with the options to choose: plus, minus and times. Add a button with the text "result". Also add a paragraph to show the result.
// You probably guessed it! - the exercise involves making a calculator with the mentioned elements.
console.log("%cExercise 38", "color: black; background: pink");

let result;
const operator = prompt('Enter operator ( either +, -, * or / ): ');
const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));

switch(operator) {
    case '+':
        result = number1 + number2;
        console.log(`${number1} + ${number2} = ${result}`);
        break;

    case '-':
        result = number1 - number2;
        console.log(`${number1} - ${number2} = ${result}`);
        break;

    case '*':
        result = number1 * number2;
        console.log(`${number1} * ${number2} = ${result}`);
        break;

    case '/':
        result = number1 / number2;
        console.log(`${number1} / ${number2} = ${result}`);
        break;

    default:
        console.log('Invalid operator');
        break;
}

// Exercise 39
// Write a JavaScript program that works like a drum kit. The drum kit should work with the keyboard.
console.log("%cExercise 39", "color: black; background: pink");