
const questions_en = [
        {
        "text": "What happens in the browser after clicking on the url",
        "tags": ["Basics"],
        "frequency": 100,
        },
        {
        "text": "What is the client-server architecture, what are the features",
        "tags": ["Basics"],
        },
        {
        "text": "Decrypt HTTP, what are the current versions",
        "tags": ["Basics"]
        },
        {
        "text": "What are the types of HTTP requests",
        "tags": ["Basics"]
        },
        {
        "text": "What are the HTTP response status codes (categories in hundreds)",
        "tags": ["Basics"]
        },
        {
        "text": "What is CORS, why is it needed, how to avoid it",
        "tags": ["Basics"]
        },
        {
        "text": "What is the REST API, url examples",
        "tags": ["Basics"]
        },
        {
        "text": "What is GraphQL, query body examples",
        "tags": ["Basics"]
        },
        {
        "text": "What are Cookies and why are they used",
        "tags": ["Basics"]
        },
        {
        "text": "What is the complexity of the algorithm, notation About big",
        "tags": ["Basics"]
        },
        // -- CSS
        {
        "text": "What is a cascade in CSS, a few examples",
        "tags": ["CSS"]
        },
        {
        "text": "What is specificity in CSS, how is it calculated, examples of calculations",
        "tags": ["CSS"]
        },
        {
        "text": "What is inheritance in CSS, what properties are inherited, how to control",
        "tags": ["CSS"]
        },
        {
        "text": "What are preprocessors and postprocessors in CSS, list the main ones",
        "tags": ["CSS"]
        },
        {
        "text": "What are media queries in CSS for, how do they work",
        "tags": ["CSS"]
        },
        {
        "text": "What are the types of positioning in CSS, what are the features",
        "tags": ["CSS"]
        },
        {
        "text": "What are the values of the display property in CSS, what are the differences",
        "tags": ["CSS"]
        },
        {
        "text": "What is accessibility and how is accessibility ensured in the browser (HTML)",
        "tags": ["CSS"]
        },
        // -- JS
        {
        "text": "What is window and what is the difference from document",
        "tags": ["JS"]
        },
        {
        "text": "What are the differences between let, var and const",
        "tags": ["JS"]
        },
        {
        "text": "What are the data types in JS",
        "tags": ["JS"]
        },
        {
        "text": "What are the differences between primitive and reference types",
        "tags": ["JS"]
        },
        {
        "text": "How type conversion works in JS, examples with == and ===",
        "tags": ["JS"]
        },
        {
        "text": "What is the scope in JS, a few examples",
        "tags": ["JS"]
        },
        {
        "text": "What is localStorage and what is the difference from sessionStorage",
        "tags": ["JS"]
        },
        {
        "text": "What is fetch, basic options and the process of getting the result",
        "tags": ["JS"]
        },
        {
        "text": "What is JSON, usage examples",
        "tags": ["JS"]
        },
        {
        "text": "What are the main libraries for JS, what are the differences",
        "tags": ["JS"]
        },
        {
        "text": "What are the differences between the library and the framework",
        "tags": ["JS"]
        },
        {
        "text": "What is a package manager, how does npm work",
        "tags": ["JS"]
        },
        // -- OOP
        {
        "text": "Describe the basic principles of OOP",
        "tags": ["OOP"]
        },
        {
        "text": "Name a few design patterns",
        "tags": ["OOP"]
        },
        {
        "text": "What is a class and an object, what is the difference",
        "tags": ["OOP"]
        },
        
        {
        "text": "What is an abstract class, application examples",
        "tags": ["OOP"]
        },
        {
        "text": "What is the interface, application examples",
        "tags": ["OOP"]
        },
        {
        "text": "What is DRY, how it stands for, a couple of examples",
        "tags": ["OOP"]
        },
        {
        "text": "What is KISS, how it stands for, a couple of examples",
        "tags": ["OOP"]
        },
        {
        "text": "What is SOLID, how it stands for, a couple of examples",
        "tags": ["OOP"]
        },
        {
        "text": "What is the difference between public, private and protected access modifiers",
        "tags": ["OOP"]
        },
        {
        "text": "What is a class constructor",
        "tags": ["OOP"]
        },
        {
        "text": "What are static methods and properties, how do they differ from regular ones",
        "tags": ["OOP"]
        },
        // Git
        // Short answers - https://hackr.io/blog/git-interview-questions
        {
        "text": "What is Git and what is the difference from GitHub",
        "tags": ["Git"]
        },
        {
        "text": "Name some of the most commonly used Git commands",
        "tags": ["Git"]
        },
        {
        "text": "What is head from the point of view of Git",
        "tags": ["Git"]
        },
        {
        "text": "What is a conflict from the point of view of Git and what are the solutions",
        "tags": ["Git"]
        },
        {
        "text": "How can I switch to another branch without committing the changes I made",
        "tags": ["Git"]
        },
        {
        "text": "Describe the GitFlow branching strategy",
        "tags": ["Git"]
        },
        {
        "text": "What are the ways to merge branches (default, squash, rebase)",
        "tags": ["Git"]
        },
        // Database
        // Very simple - https://habr.com/ru/articles/555760 /
        {
        "text": "What databases are needed for, examples of popular ones",
        "tags": ["Database"]
        },
        {
        "text": "What types of links are there in the database, an example for each",
        "tags": ["Database"]
        },
        {
        "text": "What are keys, what are they, how to use them",
        "tags": ["Database"]
        },
        {
        "text": "What are indexes, describe the data structure (btree)",
        "tags": ["Database"]
        },
        {
        "text": "What are indexes, describe the data structure (btree)",
        "tags": ["Database"]
        },
        {
        "text": "What are transactions, decrypt ACID",
        "tags": ["Database"]
        },
        {
        "text": "What are migrations and what are they for",
        "tags": ["Database"]
        },
        {
        "text": "What are the four main types of JOIN in SQL",
        "tags": ["Database"]
        },
        {
        "text": "What is the difference between DELETE and TRUNCATE",
        "tags": ["Database"]
        },
        {
        "text": "What is the difference between WHERE and HAVING",
        "tags": ["Database"]
        },
        // PHP
        // More questions - https://github.com/ivan-isaev21/250-questions-PHP/blob/master/Junior/README .MD
        {
        "text": "Basic PHP syntax, how to declare a variable, function, class and object",
        "tags": ["PHP"]
        },
        {
        "text": "What is a dependency manager, how composer works",
        "tags": ["PHP"]
        }
    ];
    
export default questions_en;