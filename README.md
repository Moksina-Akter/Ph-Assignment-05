
### JavaScript DOM Questions & Answers :-


## What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

### Answer of question 1:-

 **getElementById("id")** its selects a single element by its unique **id** and returns the element object or `null` if not found.**getElementsByClassName("className")** that selects all elements that have the given class and returns a **live HTMLCollection** (updates automatically if DOM changes). **querySelector("css-selector.for example- #")** Its selects the **first matching element** using any **CSS selector** and returns that one element or `null`. **querySelectorAll("css-selector". for example- .)** selects **all matching elements** using any **CSS selector**.And returns a **static NodeList** (does not update automatically).


## How do you create and insert a new element into the DOM?
### Answer of question 2:-
I will use **document.createElement()** to create an element and then I will use **appendChild()** to insert the new created element in DOM.

## What is Event Bubbling and how does it work?
### Answer of question 3:
**Event Bubbling** is a procces in DOM where an event starts at the **target element** (child) and then propagates upword to it's parents. The button's listener executes first and then the container's listener executes.In a word, **event handler** is triggered.

## What is Event Delegation in JavaScript? Why is it useful?
### Answer of question 4:-
**Event Delegation** is a technique in JavaScript where attach a single event listener to a parent element instead of adding multiple separate listeners to the child elements. It is useful because -

 - We can add just one listener on the parent instead of adding many  separate listeners on the child elements. 
 - It's reduces the number of listeners in the DOM.
 - It's works for **dynamic elements**; you don’t need to attach listeners to new elements created later.


## What is the difference between preventDefault() and stopPropagation() methods?
### Answer of question 5:-
The **preventDefault()** stops the default action of an element from happening. It doesn't stop the event from bubbling up. On the other hand, the **stopPropagation()** method stops the event from bubbling up to perent elements. It does not stop the default action of an element.







