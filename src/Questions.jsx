const questions = [
  {
    title:
      "What are the differences between var, let, and const in JavaScript?",
    text: "<p><strong>Var</strong> is a traditional way of declaring variables (before ES6) - functional scoped (accessible throughout the function in which they are declared, even if they are inside a block such as a loop or an if statement. If they are declared outside a function, then they become globally scoped). Hoisted to the top of their scope (declaration is moved to the top of the scope during execution). Not block scoped and can be redeclared. - Can lead to bugs and confusing code. </p><p><strong>Let</strong> is a modern way of declaring variables in block scope(eg. loop, if statement - within{}. If used outside: reference error). No hoisting (variables declared with let are hoisted to the top of the scope but with an undefined value until assigned and executed - remains in a temporal dead zone). Cannot be redeclared in the same scope but can be reassigned.</p><p> <strong>Const</strong> is a keyword used to declare constant variables that can not be reassigned after their initial assignment - reassigning will throw a type error. Block scoped (only accessible within the block in which it is assigned). Needs an initial value. If it's declaring a variable that holds an array/object, the elements of that array/object can be changed. No hoisting (variables declared with let are hoisted to the top of the scope but with an undefined value until assigned and executed - remains in a temporal dead zone)</p>",
  },
  {
    title: "Explain the concept of hoisting in JavaScript.",
    text: "Hoisting is a behavior in which variables and function declarations are moved to the top of their scope during execution (compile phase) - this means that variables and functions can be used before they are declared.",
  },
  {
    title: "What is a closure in JavaScript?",
    text: "Closure is a function that remembers and can access its lexical environment (parent scope) even after the parent function has finished execution. Used for async operations, event handlers and allow us to have functions with private variables and create data encapsulation.",
  },
  {
    title: "What is the difference between null and undefined?",
    text: "<p>Null represents explicitly assigned to no value or no object while undefined means a variable has been declared but the value is not assigned.</p> <p><i>Null === undefined → false</i></p> <p> <i>Null == undefined → true</i></p>",
  },
  {
    title: "What is a promise, and how does it work in JavaScript?",
    text: "<p>A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. Promises have three states: pending(initial state - async operation has not completed yet), resolved/fulfilled(The async operation has completed successfully, and the promise has been resolved with a value), and rejected(async operation failed, and the promise has been rejected with an error).</p> <p>Once a promise is created, you can attach callbacks that will be called when the promise is fulfilled or rejected: <strong>then():</strong> handle resolved state. takes a function that is executed when the promise is resolved successfully. <strong>catch():</strong> handle the rejected state. takes a function that is executed when the promise is rejected. <strong>finally():</strong> runs regardless of whether the promise was resolved or rejected, useful for cleanup tasks or final actions that should always happen.</p> <p>Cleaner Code - avoid nested callbacks (callback hell) and make asynchronous code easier to read and maintain. Error management is simpler with .catch(). Promises can be chained, allowing multiple asynchronous operations to be executed in sequence.</p>",
  },
  {
    title:
      "What is the difference between synchronous and asynchronous programming?",
    text: "<p><strong>Synchronous programming:</strong> Block the execution of code until they complete - tasks are executed sequentially (line by line) - one after the other. Each operation must be completed before the next operation starts(blocking). This means that the program waits/blocks for each task to finish before moving on to the next one - The order of operations is straightforward and predictable. However, it’s problematic for long-running operations, such as file reading or network requests, as the program will be blocked while waiting for that operation to complete. </p> <p><strong>Asynchronous programming:</strong> Allows the code to continue executing while waiting for a task to complete - tasks are executed independently of the main program flow - doesn't wait for each task to finish before moving on to the next one(Non-blocking). Instead, operations are typically initiated, and the program continues to run other code while waiting for the asynchronous task to complete (Multiple tasks can be handled concurrently). Often involves events, callbacks, or promises to handle operations once they finish.</p>",
  },
  {
    title: "Explain the this keyword in JavaScript.",
    text: "<p>Refers to the execution context - The value of this is dynamically determined by how a function is called. It doesn’t refer to the function itself or the object where the function is defined but rather to the object that is executing the function.</p> <p>It can represent the global object (when used outside of any function - global scope. In a browser, the global object is the window. in strict mode, this in the global context will be undefined), an object method (this refers to the object that the method is called on), or an arrow function (this inside an arrow function is inherited from the surrounding/lexical context, i.e., the enclosing function or the global context). In the context of an event handler, this refers to the element that triggered the event.</p> <p>You can explicitly set the value of this using the bind(): Creates a new function with a specific this value and optionally prepends arguments, call() and apply(): Immediately invokes the function with a specific this value. call() takes arguments individually, while apply() takes arguments as an array.</p>",
  },
  {
    title: "What are higher-order functions in JavaScript?",
    text: "<p>A higher-order function is a function that either takes one or more functions as arguments or returns a function as its result. Examples include map(), filter(), and reduce(). Enable functional programming techniques.</p> <p><strong>Advantages:</strong> Abstraction: allow you to abstract away repetitive logic - no need to manually loop through arrays. Reusability: more modular and reusable code. Composition: combine multiple small functions into larger, more complex operations. Declarative Code: map(), filter(), and reduce() help express logic more declaratively.</p>",
  },
  {
    title:
      "What are arrow functions and how do they differ from regular functions?",
    text: "<p>Arrow functions and regular functions are two ways to define functions. They perform the same core functionality (defining a block of code that can be executed when called), there are significant differences in how they are written and how they behave.</p> <p><strong>Syntax:</strong> Arrow functions have a shorter, more concise syntax, => separates the parameters and the function body and for single-expression functions, the body can be implicitly returned without needing to write the return keyword. A regular needs the function keyword to declare the function and the return statement is required to return a value.</p> <p><strong>This binding:</strong> Arrow Functions have lexically bound this. The value of this is inherited from the surrounding (enclosing) context where the arrow function was defined. It does not have its own this. Regular Functions have dynamically bound this. The value of this is determined by how the function is called. In a method, this will refer to the object that called the method. In a regular function call, this will refer to the global object (or undefined in strict mode).</p> <p><strong>Arguments:</strong> Arrow Functions do not have their own arguments object, they inherit the arguments object from the enclosing function or context. If there is no enclosing function, arguments are unavailable. Regular Functions have their own arguments object.</p> <p>Arrow functions are ideal for situations like callbacks, but they are not suitable for methods or constructors. Regular functions are more flexible and better suited for object methods.</p>",
  },
  {
    title: "Explain the concept of event delegation in JavaScript.",
    text: "<p>Event delegation is a technique where instead of attaching an event listener to each individual child element, you attach a single event listener to a parent element and use event bubbling to capture events from child elements (an event triggered on an element will bubble up through its ancestors in the DOM hierarchy). Useful when you have a large number of child elements (like a list of items, buttons, etc) → more efficient, simplified code and great for dynamic content (will automatically add the event listener to the newly added item).</p> <p><strong>Use Cases:</strong> Handling click events on dynamically generated elements, managing form submissions, where the form may contain multiple dynamically added input elements or buttons, handling mouse or keyboard events on groups of elements, such as links, buttons, or menu items.</p>",
  },
  {
    title:
      "What is the difference between function expressions and function declarations?",
    text: "<p><strong>Function declaration</strong> is a way to define a function using the function keyword, followed by the function name, parameters, and the function body - hoisted (can be called before they are defined in the code) and function scoped.</p> <p><strong>Function expression</strong> is assigned to a variable - not hoisted (only available after the expression is evaluated), more flexible since it can be passed around like any other value (eg. as an argument or return value).</p>",
  },
  {
    title: "What are call back functions",
    text: "<p>A callback function in JavaScript is a function that is passed as an argument to another function, and it is executed (or called back) after a certain operation is completed. Callbacks are often used for asynchronous operations, such as handling events, making network requests, or dealing with timeouts.</p> <p>They allow for flexible and reusable code, but they can lead to issues like callback hell in complex scenarios, which can be mitigated using Promises or async/await.</p>",
  },
  {
    title: "What is prototypal inheritance",
    text: "<p>Allows objects to inherit properties and methods from other objects. Every JavaScript object has a hidden link to another object, called its prototype, from which it can inherit properties and methods. This chain of links between objects is known as the prototype chain.</p> <p>When an object tries to access a property or method, JavaScript first looks in the object itself. If the property isn't found there, it checks the object's prototype. This search continues up the prototype chain until the property is found or the chain ends (reaching null).</p> <p>This inheritance mechanism is flexible and efficient but can sometimes lead to unexpected behavior, especially when properties are shadowed or prototypes are modified.</p>",
  },
];

export default questions;
