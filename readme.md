# Javascript Playground

## About

Built into [Xcode](https://developer.apple.com/xcode/) (Apple's IDE for apps) is a neat little feature called "[Playgrounds](https://developer.apple.com/swift/blog/?id=24)", which allows those first learning how to program write some code and see it run & display in real-time. For learning languages like C, Objective-C or Swift, this is perfect.

But when you want to learn scripting languages built for the web, there's not a lot of simple, accessible tools out there for running your Javascript code in real-time— *without the need to write any HTML*. So I've built this editor to place focus on learning programming fundamentals, while at the same time seeing code run alongside writing in real-time. Also, why the heck not?

## Built-In Functions

A live version of the app is available at [**mlgrto.com/misc/js**](http://mlgrto.com/misc/js) and you can enter these built-in functions in the editor to manipulate the app. Run the following scripts in the playground to see how they work.

### printf()

```js
var x = "Bat";
var y = "man";
printf(x + y);
```
	
This simulates the C Language's ``printf()`` function, displaying its contents in the sidebar on the right. Think of it as a glorified ``console.log()`` but displays instead on-screen.

### newdiv()

```js
var button = newdiv(data, style, id);
var data = "What's in the box?";
var style = "background: silver; margin: 0 0 10px;";
var id = button;

button.onclick = function() {
	printf("Tracey")
}
```

	
This creates a new instance of a HTML ``<div>`` in the box as an object that you can manipulate. You can give it styles, data, and the ID must equal the name of the new ``<div>`` in order to give it custom functions.

### require()

```js
require("http://path/to/custom/script");
customFunction();
```
	
Instead of copying and pasting functions into the editor to see how they work, using this built-in function allows to call up your own script and run its functions without having to define or paste them in this editor.

### percentwidth()

```js
percentwidth(50);
```
	
This special function allows to customise the look and feel of the editor. Enter a number between 1-100 and it will adjust the width of the sidebar by that percentage.

### The special "output" variable

```js
output.style.backgroundColor = "black";
```
 	
The variable ``output`` is reserved in this app as a reference to the output sidebar on the right. Custom Javascript styles can be applied so the sidebar can be manipulated.

### help()

```js
help()
```
	
Another reserved function, but displays the help in-app— it's a shortened version of this readme as a reference.

## Future Features

I'll gradually build on this to add more and more features in the future, making it closer to Xcode's playground feature, but for the web. The goal of this is to be a great self-learning tool for Javascript, and programming fundamentals in general.
	

