# Session-01

## 1.What is Emmet?

Emmet is a free add-on for your text editor that allows you to type shortcuts that are then expanded into full pieces of code.Emmet uses a shorthand syntax to generate HTML and CSS code, which expands to a full code by the code editor or the plugin. It is a toolkit that helps developers to write code in a code editor like vs code, sublime Text, etc.

### Example:

! enter button it will generate:

    <!DOCTYPE html>
    <html lang="en">
    <head>
       <meta charset="UTF-8">
       <meta http-equiv="X-UA-Compatible" content="IE=edge">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Document</title>
    </head>
    <body>
    </body>
    </html>

## 2.Difference between a Library and Framework?

A library is the collection of pre-written code that provides common functions or features in a program. It is generally imported to a program and allowing the programmer to use the pre-baked code and not write it from the scratch. A framework, on the other hand, is a set of pre-written code that provides a structure for building and organizing a program. A framework defines the overall architecture of a program and provides a set of rules and guidelines for building the program. When using a framework, the programmer writes code to fit within the framework, rather than starting from scratch.

## 3.What is CDN? Why do we use it?

It stands for Content Delivery Network,has been around since the late 90's.It was originally developed to speed up the delivery of the static HTML content for users all around the world.Nowadays, a CDN should be used whenever HTTP traffic is served.
A CDN brings content closer to the user.this improves the performance of a web service as perceived by the user.CDN deployes servers at hundreds of locations all over the world.the servver locations are called point od presence(pop).the server inside the pop is now commly called an edge server.

## 4.Why is React known as React?

React is known as React because it was designed to be the "react" part of the user interface, allowing developers to declaratively describe how the UI should change in response to certain actions or events.

## 5.What is crossorigin in script tag?

Crossorigin enable CORS (Cross-Origin Resource Sharing) for script files. CORS is a mechanism that allows a web page to make requests to a different domain.

## 6.What is diference between React and ReactDOM?

React is a JavaScript library for building User Interfaces and ReactDOM is the JavaScript library that allows React to interact with the DOM-(Document Object Model) It provides a way to take a React component and render it to the DOM.

## 5.What is difference between react.development.js and react.production.js files via CDN?

The react.development.js and react.production.js files are different versions of the React library that are optimized for development and production, respectively.The development version of React is meant to be used during the development and testing of your application. It includes helpful warnings and error messages, and it also has a longer build time due to the inclusion of additional debugging information. The production version of React is meant to be used in the final, deployed version of your application. It is optimized for performance and does not include the additional debugging information found in the development version. As a result, the production version has a smaller file size and faster build time.

## 6.What is async and defer?

The async and defer attributes are used to specify the behavior of a script element in an HTML document. These attributes can be used to optimize the loading of external scripts, which can improve the performance of a web page.

The async attribute tells the browser to download and execute the script asynchronously, meaning that it will not block other elements on the page from loading while the script is being downloaded and executed. This can be useful for scripts that do not need to be executed immediately when the page loads, as it allows the browser to continue rendering the page while the script is being downloaded. Here is an example of how the async attribute is used:

  <script src="script.js" async></script>

The defer attribute tells the browser to download the script, but to wait until the page has finished parsing before executing it. This can be useful for scripts that depend on the content of the page, as it ensures that the script will not be executed until the page has finished loading. Here is an example of how the defer attribute is used:

  <script src="script.js" defer></script>
