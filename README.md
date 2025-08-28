
### JavaScript DOM Questions & Answers :-


# What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
## Answer of question 1:-
The propertygetElementById** selects a single element by its id. It returns the element object or null if not found. And **getElementByClassName** selects all elements with a same class. Reans can select multiple items and return a live HTML collection. And the property **querySelector* and *querySelectorAll** can select elements using ans CSS selector. The **querySelector** selects the first matching element and **querySelectorAll selects Nodelist of all matching elemnets.

# How do you create and insert a new element into the DOM?
## Answer of question 2:-
I will use **document.createElement()** to create an element and then I will use appendChild()** to insert the new created element in DOM.

# What is Event Bubbling and how does it work?
## Answer of question 3:
**Event Bubbling is a procces in DOM where an event first occurs on the child and then propagates upword through it's parents. The button's listener executes first and then the container's listener executes. Means the event happens on the target element and then the event moves upwords to the parent element.

# What is Event Delegation in JavaScript? Why is it useful?
## Answer of question 4:-
**Event Delegation is a technique in JavaScript where attach a single event listener to a parent element instead of adding multiple separate listeners to the child elements. It is useful because by using this we can add just one listener on the parent instead of adding many separate listeners on the child elements. It also works for dynamic elements, we don't need to add a listener every time when a new element is created.

# What is the difference between preventDefault() and stopPropagation() methods?
## Answer of question 5:-
The **preventDefault()** stops the default action of an element from happening. It doesn't stop the event from bubbling up. On the other hand, the stopPropagation()** method stops the event from bubbling up to perent elements. It does not stop the default action of an element.
