const techTopics = [
  {
    id: "javascript",
    name: "JavaScript",
    icon: "🟨",
    color: "bg-yellow-500",
    category: "Programming",
    description:
      "General questions about the JavaScript language. Topics include data types, variables, control flow, functions, and the runtime environment.",
    questionTypes: {
      mcq: 0.4,
      fill: 0.2,
      code: 0.3,
      trueorfalse: 0.1,
    },
    topics: [
      {
        id: "js-fundamentals",
        name: "Fundamentals",
        description:
          "Questions on basic concepts like data types (primitives vs. objects), variable declaration (var, let, const), operators, and control structures (if/else, loops).",
      },
      {
        id: "js-dom",
        name: "DOM Manipulation",
        description:
          "Questions about interacting with the Document Object Model. Focus on selecting elements, modifying content, changing styles, and handling events.",
      },
      {
        id: "js-async",
        name: "Asynchronous JS",
        description:
          "Concepts related to asynchronous operations, including callbacks, event loop, and concurrent execution in JavaScript.",
      },
      {
        id: "js-es6",
        name: "ES6+",
        description:
          "Questions on features introduced in ECMAScript 2015 and later, such as arrow functions, template literals, destructuring, and classes.",
      },
      {
        id: "js-promises",
        name: "Promises & Async/Await",
        description:
          "Questions focused on managing asynchronous operations using Promises and the modern async/await syntax.",
      },
      {
        id: "js-closures",
        name: "Closures",
        description:
          "Deep dive into closures, including how they work and practical use cases for maintaining state in a function's lexical scope.",
      },
      {
        id: "js-hoisting",
        name: "Hoisting",
        description:
          "Questions on the concept of hoisting, where variable and function declarations are moved to the top of their scope during compilation.",
      },
      {
        id: "js-scope",
        name: "Scope & Context",
        description:
          "Questions on different types of scope (global, function, block) and the 'this' keyword in various contexts.",
      },
      {
        id: "js-prototypes",
        name: "Prototypes",
        description:
          "Advanced questions on JavaScript's prototype-based inheritance model and the prototype chain.",
      },
      {
        id: "js-modules",
        name: "Modules",
        description:
          "Questions about modular programming in JavaScript using ES Modules (import/export) and CommonJS (require/module.exports).",
      },
      {
        id: "js-error-handling",
        name: "Error Handling",
        description:
          "Questions on using try-catch blocks, the 'throw' statement, and best practices for managing errors in JavaScript applications.",
      },
      {
        id: "js-testing",
        name: "Testing (Jest, Mocha)",
        description:
          "Questions on JavaScript testing concepts and popular frameworks like Jest and Mocha, including writing assertions and mock functions.",
      },
    ],
  },
  {
    id: "python",
    name: "Python",
    icon: "🐍",
    color: "bg-green-600",
    category: "Programming",
    description:
      "General questions about Python. Topics include syntax, data types, control flow, functions, and object-oriented programming concepts.",
    questionTypes: {
      mcq: 0.4,
      fill: 0.2,
      code: 0.3,
      trueorfalse: 0.1,
    },
    topics: [
      {
        id: "py-basics",
        name: "Basics",
        description:
          "Questions on fundamental Python syntax, including variable assignment, basic data types (int, float, str, bool), and standard I/O operations.",
      },
      {
        id: "py-oops",
        name: "OOP",
        description:
          "Questions on object-oriented programming in Python, including classes, objects, inheritance, polymorphism, and encapsulation.",
      },
      {
        id: "py-data-structures",
        name: "Data Structures",
        description:
          "Questions on built-in data structures such as lists, tuples, dictionaries, and sets, and their appropriate use cases.",
      },
      {
        id: "py-web",
        name: "Web Frameworks",
        description:
          "Questions on popular web frameworks for Python, such as Django and Flask, and their core concepts.",
      },
      {
        id: "py-threading",
        name: "Threading",
        description:
          "Questions on concurrent programming using threads in Python, including the Global Interpreter Lock (GIL).",
      },
      {
        id: "py-decorators",
        name: "Decorators",
        description:
          "Questions on decorators, including how to define and use them to modify function behavior.",
      },
      {
        id: "py-generators",
        name: "Generators & Iterators",
        description:
          "Questions about generators (using `yield`) and iterators, and their role in memory-efficient data processing.",
      },
      {
        id: "py-exception-handling",
        name: "Exception Handling",
        description:
          "Questions on managing errors using `try`, `except`, `else`, and `finally` blocks.",
      },
      {
        id: "py-file-io",
        name: "File I/O",
        description:
          "Questions on reading from and writing to files using Python's built-in file handling functions.",
      },
      {
        id: "py-regex",
        name: "Regular Expressions",
        description:
          "Questions on using Python's `re` module for pattern matching and text manipulation.",
      },
      {
        id: "py-modules-packages",
        name: "Modules & Packages",
        description:
          "Questions about organizing Python code into modules and packages, and using `import` statements.",
      },
      {
        id: "py-testing",
        name: "Testing (unittest, pytest)",
        description:
          "Questions on Python testing frameworks like `unittest` and `pytest`, including writing test cases and assertions.",
      },
    ],
  },
  {
    id: "java",
    name: "Java",
    icon: "☕",
    color: "bg-orange-600",
    category: "Programming",
    description:
      "General questions on the Java programming language. Topics include syntax, JVM, garbage collection, and core libraries.",
    questionTypes: {
      mcq: 0.4,
      fill: 0.2,
      code: 0.3,
      trueorfalse: 0.1,
    },
    topics: [
      {
        id: "java-oops",
        name: "OOP",
        description:
          "Questions on object-oriented programming principles in Java, including inheritance, polymorphism, encapsulation, and abstraction.",
      },
      {
        id: "java-collections",
        name: "Collections",
        description:
          "Questions on the Java Collections Framework, including interfaces like List, Set, Map, and their concrete implementations.",
      },
      {
        id: "java-threads",
        name: "Multithreading",
        description:
          "Questions on creating and managing threads, synchronization, and handling concurrency issues.",
      },
      {
        id: "java-stream",
        name: "Stream API",
        description:
          "Questions on using the Java 8 Stream API for functional-style operations on collections of elements.",
      },
      {
        id: "java-exception-handling",
        name: "Exception Handling",
        description:
          "Questions about Java's exception hierarchy, checked vs. unchecked exceptions, and using `try-catch-finally` blocks.",
      },
      {
        id: "java-generics",
        name: "Generics",
        description:
          "Questions on generic classes and methods to write type-safe code and avoid boilerplate.",
      },
      {
        id: "java-annotations",
        name: "Annotations",
        description:
          "Questions on defining and using annotations to add metadata to code.",
      },
      {
        id: "java-reflection",
        name: "Reflection",
        description:
          "Questions on the Java Reflection API, which allows inspecting and manipulating classes, methods, and fields at runtime.",
      },
      {
        id: "java-io",
        name: "I/O Streams",
        description:
          "Questions about Java's I/O system, including byte and character streams, and file handling.",
      },
      {
        id: "java-jdbc",
        name: "JDBC",
        description:
          "Questions on using Java Database Connectivity (JDBC) to connect to and interact with databases.",
      },
      {
        id: "java-lambda",
        name: "Lambda Expressions",
        description:
          "Questions on Java 8 lambda expressions for creating anonymous functions.",
      },
      {
        id: "java-design-patterns",
        name: "Design Patterns",
        description:
          "Questions on common object-oriented design patterns and their implementation in Java.",
      },
    ],
  },
  {
    id: "cpp",
    name: "C++",
    icon: "⚡",
    color: "bg-blue-600",
    category: "Programming",
    description:
      "General questions about the C++ programming language. Topics include syntax, memory management, and the Standard Template Library (STL).",
    questionTypes: {
      mcq: 0.4,
      fill: 0.2,
      code: 0.3,
      trueorfalse: 0.1,
    },
    topics: [
      {
        id: "cpp-basics",
        name: "Basics & Syntax",
        description:
          "Questions on fundamental C++ syntax, including data types, operators, and control flow statements.",
      },
      {
        id: "cpp-oops",
        name: "Object-Oriented Programming",
        description:
          "Questions on object-oriented concepts in C++, such as classes, objects, and constructors.",
      },
      {
        id: "cpp-pointers",
        name: "Pointers & References",
        description:
          "Questions on the use of pointers and references, including their differences and common use cases.",
      },
      {
        id: "cpp-memory",
        name: "Memory Management",
        description:
          "Questions about manual memory management in C++, including the `new` and `delete` operators.",
      },
      {
        id: "cpp-stl",
        name: "Standard Template Library",
        description:
          "Questions on the components of the STL, including containers (vector, map), algorithms, and iterators.",
      },
      {
        id: "cpp-templates",
        name: "Templates",
        description:
          "Questions on generic programming in C++ using function and class templates.",
      },
      {
        id: "cpp-inheritance",
        name: "Inheritance & Polymorphism",
        description:
          "Questions about inheritance, virtual functions, and runtime polymorphism.",
      },
      {
        id: "cpp-operator-overloading",
        name: "Operator Overloading",
        description:
          "Questions on how to overload operators to work with custom data types.",
      },
      {
        id: "cpp-file-handling",
        name: "File Handling",
        description:
          "Questions on reading from and writing to files using C++ streams.",
      },
      {
        id: "cpp-exception-handling",
        name: "Exception Handling",
        description:
          "Questions on using `try-catch` blocks to handle runtime errors.",
      },
      {
        id: "cpp-multithreading",
        name: "Multithreading",
        description:
          "Questions on concurrent programming using C++ threads and synchronization primitives.",
      },
      {
        id: "cpp-smart-pointers",
        name: "Smart Pointers",
        description:
          "Questions on modern C++ memory management using `unique_ptr`, `shared_ptr`, and `weak_ptr`.",
      },
    ],
  },
  {
    id: "csharp",
    name: "C#",
    icon: "💜",
    color: "bg-purple-600",
    category: "Programming",
    description:
      "General questions about the C# language. Topics include syntax, the .NET ecosystem, and object-oriented principles.",
    questionTypes: {
      mcq: 0.4,
      fill: 0.2,
      code: 0.3,
      trueorfalse: 0.1,
    },
    topics: [
      {
        id: "csharp-basics",
        name: "Basics & Syntax",
        description:
          "Questions on fundamental C# syntax, data types, and control flow statements.",
      },
      {
        id: "csharp-oops",
        name: "Object-Oriented Programming",
        description:
          "Questions on OOP concepts like classes, objects, interfaces, and abstract classes.",
      },
      {
        id: "csharp-collections",
        name: "Collections & Generics",
        description:
          "Questions on the .NET Collections framework and using generics for type-safe code.",
      },
      {
        id: "csharp-linq",
        name: "LINQ",
        description:
          "Questions on Language Integrated Query (LINQ) for querying data from various sources.",
      },
      {
        id: "csharp-async",
        name: "Async/Await",
        description:
          "Questions about asynchronous programming in C# using the `async` and `await` keywords.",
      },
      {
        id: "csharp-delegates",
        name: "Delegates & Events",
        description:
          "Questions on delegates (type-safe function pointers) and events for building decoupled systems.",
      },
      {
        id: "csharp-exception-handling",
        name: "Exception Handling",
        description:
          "Questions on managing exceptions using `try-catch-finally` and custom exceptions.",
      },
      {
        id: "csharp-reflection",
        name: "Reflection",
        description:
          "Questions on inspecting and manipulating metadata about types and objects at runtime.",
      },
      {
        id: "csharp-attributes",
        name: "Attributes",
        description:
          "Questions on using attributes to add declarative information to code.",
      },
      {
        id: "csharp-file-io",
        name: "File I/O",
        description:
          "Questions on reading and writing to files and streams in C#.",
      },
      {
        id: "csharp-memory",
        name: "Memory Management",
        description:
          "Questions on the Common Language Runtime's (CLR) garbage collection and memory management.",
      },
      {
        id: "csharp-entity-framework",
        name: "Entity Framework",
        description:
          "Questions on the Entity Framework ORM for database interaction.",
      },
    ],
  },
  {
    id: "go",
    name: "Go",
    icon: "🐹",
    color: "bg-cyan-600",
    category: "Programming",
    description:
      "General questions about the Go programming language. Topics include concurrency, syntax, and standard libraries.",
    questionTypes: {
      mcq: 0.4,
      fill: 0.2,
      code: 0.3,
      trueorfalse: 0.1,
    },
    topics: [
      {
        id: "go-basics",
        name: "Basics & Syntax",
        description:
          "Questions on Go's fundamental syntax, including variable declaration, control flow, and functions.",
      },
      {
        id: "go-goroutines",
        name: "Goroutines",
        description:
          "Questions on goroutines, Go's lightweight and efficient concurrency primitive.",
      },
      {
        id: "go-channels",
        name: "Channels",
        description:
          "Questions about channels, the communication mechanism between goroutines.",
      },
      {
        id: "go-interfaces",
        name: "Interfaces",
        description:
          "Questions on Go's implicit interfaces and how they are used for polymorphism.",
      },
      {
        id: "go-structs",
        name: "Structs & Methods",
        description:
          "Questions on defining structs and methods to implement custom data types.",
      },
      {
        id: "go-error-handling",
        name: "Error Handling",
        description:
          "Questions on Go's idiomatic error handling pattern using multiple return values.",
      },
      {
        id: "go-packages",
        name: "Packages & Modules",
        description:
          "Questions about Go's module system for organizing and managing code dependencies.",
      },
      {
        id: "go-testing",
        name: "Testing",
        description:
          "Questions on writing and running tests in Go using the built-in `testing` package.",
      },
      {
        id: "go-json",
        name: "JSON Handling",
        description:
          "Questions on encoding and decoding JSON data using the standard library.",
      },
      {
        id: "go-http",
        name: "HTTP & Web Services",
        description:
          "Questions on building web services with Go's standard `net/http` package.",
      },
      {
        id: "go-concurrency",
        name: "Concurrency Patterns",
        description:
          "Questions on common concurrency patterns like workers, fan-out/fan-in, and errgroup.",
      },
      {
        id: "go-performance",
        name: "Performance & Optimization",
        description:
          "Questions on profiling and optimizing Go applications.",
      },
    ],
  },
  {
    id: "rust",
    name: "Rust",
    icon: "🦀",
    color: "bg-orange-700",
    category: "Programming",
    description:
      "General questions about the Rust programming language. Topics include ownership, borrowing, and the memory-safety guarantees.",
    questionTypes: {
      mcq: 0.4,
      fill: 0.2,
      code: 0.3,
      trueorfalse: 0.1,
    },
    topics: [
      {
        id: "rust-basics",
        name: "Basics & Syntax",
        description:
          "Questions on fundamental Rust syntax, including variable bindings, data types, and control flow.",
      },
      {
        id: "rust-ownership",
        name: "Ownership & Borrowing",
        description:
          "Questions on Rust's core memory management concepts: ownership, borrowing, and lifetimes.",
      },
      {
        id: "rust-structs-enums",
        name: "Structs & Enums",
        description:
          "Questions on defining and using structs and enums to create custom data types.",
      },
      {
        id: "rust-pattern-matching",
        name: "Pattern Matching",
        description:
          "Questions on using the `match` keyword for powerful control flow and destructuring.",
      },
      {
        id: "rust-error-handling",
        name: "Error Handling",
        description:
          "Questions on Rust's idiomatic error handling using the `Result` and `Option` enums.",
      },
      {
        id: "rust-traits",
        name: "Traits",
        description:
          "Questions on traits (similar to interfaces) for defining shared behavior.",
      },
      {
        id: "rust-lifetimes",
        name: "Lifetimes",
        description:
          "Advanced questions on lifetimes and how they ensure borrowed data remains valid.",
      },
      {
        id: "rust-generics",
        name: "Generics",
        description:
          "Questions on using generics to write flexible, reusable code.",
      },
      {
        id: "rust-concurrency",
        name: "Concurrency",
        description:
          "Questions on Rust's safe concurrency primitives like `Arc` and `Mutex`.",
      },
      {
        id: "rust-macros",
        name: "Macros",
        description:
          "Questions on procedural and declarative macros for code generation.",
      },
      {
        id: "rust-cargo",
        name: "Cargo & Crates",
        description:
          "Questions on Rust's package manager and build system, Cargo.",
      },
      {
        id: "rust-unsafe",
        name: "Unsafe Rust",
        description:
          "Questions on the `unsafe` keyword and when it is necessary to bypass Rust's safety guarantees.",
      },
    ],
  },
  {
    id: "typescript",
    name: "TypeScript",
    icon: "🔷",
    color: "bg-blue-500",
    category: "Programming",
    description:
      "General questions about TypeScript. Topics include its type system, classes, and advanced types.",
    questionTypes: {
      mcq: 0.4,
      fill: 0.2,
      code: 0.3,
      trueorfalse: 0.1,
    },
    topics: [
      {
        id: "ts-basics",
        name: "Basics & Type System",
        description:
          "Questions on fundamental TypeScript concepts, including static typing, primitive types, and type inference.",
      },
      {
        id: "ts-interfaces",
        name: "Interfaces",
        description:
          "Questions on defining interfaces to describe the shape of an object.",
      },
      {
        id: "ts-classes",
        name: "Classes",
        description:
          "Questions on using classes in TypeScript, including access modifiers and inheritance.",
      },
      {
        id: "ts-generics",
        name: "Generics",
        description:
          "Questions on creating reusable components and functions that work with a variety of types.",
      },
      {
        id: "ts-unions-intersections",
        name: "Union & Intersection Types",
        description:
          "Questions on combining types using union (`|`) and intersection (`&`) operators.",
      },
      {
        id: "ts-decorators",
        name: "Decorators",
        description:
          "Questions about decorators for adding metadata to classes, methods, and properties.",
      },
      {
        id: "ts-modules",
        name: "Modules & Namespaces",
        description:
          "Questions on organizing code using modules and namespaces.",
      },
      {
        id: "ts-advanced-types",
        name: "Advanced Types",
        description:
          "Questions on advanced type system features like type aliases, literal types, and type guards.",
      },
      {
        id: "ts-mapped-types",
        name: "Mapped Types",
        description:
          "Questions on creating new types by transforming existing ones.",
      },
      {
        id: "ts-conditional-types",
        name: "Conditional Types",
        description:
          "Questions on creating types that depend on a condition, often used in complex utility types.",
      },
      {
        id: "ts-config",
        name: "TypeScript Configuration",
        description:
          "Questions on configuring the TypeScript compiler using the `tsconfig.json` file.",
      },
      {
        id: "ts-migration",
        name: "JavaScript to TypeScript Migration",
        description:
          "Questions on best practices and strategies for migrating a JavaScript codebase to TypeScript.",
      },
    ],
  },
  {
    id: "ruby",
    name: "Ruby",
    icon: "💎",
    color: "bg-red-600",
    category: "Programming",
    description:
      "General questions about the Ruby programming language. Topics include syntax, metaprogramming, and object-oriented concepts.",
    questionTypes: {
      mcq: 0.4,
      fill: 0.2,
      code: 0.3,
      trueorfalse: 0.1,
    },
    topics: [
      {
        id: "ruby-basics",
        name: "Basics & Syntax",
        description:
          "Questions on fundamental Ruby syntax, including variable assignment, data types, and control flow.",
      },
      {
        id: "ruby-oops",
        name: "Object-Oriented Programming",
        description:
          "Questions on OOP principles in Ruby, including classes, objects, inheritance, and mixins.",
      },
      {
        id: "ruby-blocks",
        name: "Blocks, Procs & Lambdas",
        description:
          "Questions on the differences and use cases for blocks, Procs, and Lambdas.",
      },
      {
        id: "ruby-modules",
        name: "Modules & Mixins",
        description:
          "Questions on using modules to group methods, constants, and classes, and including them as mixins.",
      },
      {
        id: "ruby-metaprogramming",
        name: "Metaprogramming",
        description:
          "Questions on Ruby's powerful metaprogramming capabilities, allowing code to write code.",
      },
      {
        id: "ruby-gems",
        name: "Gems & Bundler",
        description:
          "Questions on managing dependencies using RubyGems and Bundler.",
      },
      {
        id: "ruby-io",
        name: "File I/O",
        description:
          "Questions on reading from and writing to files using Ruby's I/O methods.",
      },
      {
        id: "ruby-regex",
        name: "Regular Expressions",
        description:
          "Questions on using regular expressions for pattern matching in strings.",
      },
      {
        id: "ruby-testing",
        name: "Testing (RSpec, Minitest)",
        description:
          "Questions on popular testing frameworks like RSpec and Minitest.",
      },
      {
        id: "ruby-threading",
        name: "Threading & Concurrency",
        description:
          "Questions on concurrent programming in Ruby, including threads and the GIL.",
      },
      {
        id: "ruby-dsl",
        name: "Domain Specific Languages",
        description:
          "Questions on how Ruby's syntax facilitates the creation of Domain Specific Languages (DSLs).",
      },
      {
        id: "ruby-performance",
        name: "Performance Optimization",
        description:
          "Questions on techniques for improving the performance of Ruby applications.",
      },
    ],
  },
  {
    id: "php",
    name: "PHP",
    icon: "🐘",
    color: "bg-purple-700",
    category: "Programming",
    description:
      "General questions about the PHP language. Topics include web development fundamentals, syntax, and object-oriented features.",
    questionTypes: {
      mcq: 0.4,
      fill: 0.2,
      code: 0.3,
      trueorfalse: 0.1,
    },
    topics: [
      {
        id: "php-basics",
        name: "Basics & Syntax",
        description:
          "Questions on fundamental PHP syntax, including variable types, operators, and control structures.",
      },
      {
        id: "php-oops",
        name: "Object-Oriented Programming",
        description:
          "Questions on OOP principles in PHP, including classes, objects, interfaces, and traits.",
      },
      {
        id: "php-arrays",
        name: "Arrays & Functions",
        description:
          "Questions on handling and manipulating arrays and using built-in functions.",
      },
      {
        id: "php-forms",
        name: "Forms & Validation",
        description:
          "Questions on processing HTML form data and performing server-side validation.",
      },
      {
        id: "php-sessions",
        name: "Sessions & Cookies",
        description:
          "Questions on managing state between HTTP requests using sessions and cookies.",
      },
      {
        id: "php-database",
        name: "Database Connectivity",
        description:
          "Questions on connecting to and querying databases using PHP Data Objects (PDO) or MySQLi.",
      },
      {
        id: "php-file-handling",
        name: "File Handling",
        description:
          "Questions on reading from and writing to files using PHP's file system functions.",
      },
      {
        id: "php-error-handling",
        name: "Error Handling",
        description:
          "Questions on handling errors and exceptions in PHP applications.",
      },
      {
        id: "php-composer",
        name: "Composer & Packages",
        description:
          "Questions on managing dependencies using the Composer package manager.",
      },
      {
        id: "php-namespaces",
        name: "Namespaces",
        description:
          "Questions on using namespaces to organize and prevent naming conflicts in code.",
      },
      {
        id: "php-traits",
        name: "Traits",
        description:
          "Questions on using traits to reuse methods in independent classes.",
      },
      {
        id: "php-security",
        name: "Security Best Practices",
        description:
          "Questions on common web security vulnerabilities and how to prevent them in PHP (e.g., SQL injection, XSS).",
      },
    ],
  },
  {
    id: "scala",
    name: "Scala",
    icon: "⚙️",
    color: "bg-indigo-600",
    category: "Programming",
    description:
      "General questions about the Scala language, which combines functional and object-oriented programming.",
    questionTypes: {
      mcq: 0.4,
      fill: 0.2,
      code: 0.3,
      trueorfalse: 0.1,
    },
    topics: [
      {
        id: "scala-basics",
        name: "Basics & Syntax",
        description:
          "Questions on Scala's fundamental syntax, including variable declarations (`val`, `var`) and control structures.",
      },
      {
        id: "scala-functional",
        name: "Functional Programming",
        description:
          "Questions on functional concepts like immutability, pure functions, and higher-order functions.",
      },
      {
        id: "scala-oops",
        name: "Object-Oriented Programming",
        description:
          "Questions on OOP principles in Scala, including classes, objects, and inheritance.",
      },
      {
        id: "scala-collections",
        name: "Collections",
        description:
          "Questions on Scala's rich and immutable collections library.",
      },
      {
        id: "scala-pattern-matching",
        name: "Pattern Matching",
        description:
          "Questions on using pattern matching for powerful control flow and data extraction.",
      },
      {
        id: "scala-traits",
        name: "Traits & Mixins",
        description:
          "Questions on traits, which allow for code reuse and mixin composition.",
      },
      {
        id: "scala-case-classes",
        name: "Case Classes",
        description:
          "Questions on case classes, which are optimized for pattern matching and immutable data.",
      },
      {
        id: "scala-futures",
        name: "Futures & Concurrency",
        description:
          "Questions on handling asynchronous and concurrent operations using Futures.",
      },
      {
        id: "scala-implicits",
        name: "Implicits",
        description:
          "Questions on implicit conversions and parameters, a powerful feature of Scala.",
      },
      {
        id: "scala-akka",
        name: "Akka Framework",
        description:
          "Questions on the Akka toolkit for building highly concurrent and distributed applications.",
      },
      {
        id: "scala-spark",
        name: "Apache Spark",
        description:
          "Questions on using Scala with Apache Spark for large-scale data processing.",
      },
      {
        id: "scala-sbt",
        name: "SBT Build Tool",
        description:
          "Questions on using SBT for building, testing, and running Scala projects.",
      },
    ],
  },
  {
    id: "dart",
    name: "Dart",
    icon: "🎯",
    color: "bg-blue-400",
    category: "Programming",
    description:
      "General questions about the Dart language, a client-optimized language for building apps.",
    questionTypes: {
      mcq: 0.4,
      fill: 0.2,
      code: 0.3,
      trueorfalse: 0.1,
    },
    topics: [
      {
        id: "dart-basics",
        name: "Basics & Syntax",
        description:
          "Questions on fundamental Dart syntax, including variable declarations, data types, and control flow.",
      },
      {
        id: "dart-oops",
        name: "Object-Oriented Programming",
        description:
          "Questions on OOP principles in Dart, including classes, objects, inheritance, and mixins.",
      },
      {
        id: "dart-functions",
        name: "Functions & Methods",
        description:
          "Questions on defining functions, named and positional parameters, and arrow syntax.",
      },
      {
        id: "dart-collections",
        name: "Collections & Iterables",
        description:
          "Questions on Dart's built-in collections like lists, sets, and maps.",
      },
      {
        id: "dart-async",
        name: "Asynchronous Programming",
        description:
          "Questions on using `async` and `await` to handle asynchronous operations.",
      },
      {
        id: "dart-streams",
        name: "Streams",
        description:
          "Questions on streams, which represent a sequence of asynchronous events.",
      },
      {
        id: "dart-isolates",
        name: "Isolates",
        description:
          "Questions on isolates for running code on a separate thread to avoid UI jank.",
      },
      {
        id: "dart-packages",
        name: "Packages & Libraries",
        description:
          "Questions on managing dependencies and code reuse using Dart packages.",
      },
      {
        id: "dart-generics",
        name: "Generics",
        description:
          "Questions on creating type-safe and reusable code with generics.",
      },
      {
        id: "dart-mixins",
        name: "Mixins",
        description:
          "Questions on using mixins to reuse code across different classes.",
      },
      {
        id: "dart-null-safety",
        name: "Null Safety",
        description:
          "Questions on Dart's null safety feature to prevent null-related errors.",
      },
      {
        id: "dart-testing",
        name: "Testing",
        description:
          "Questions on writing and running unit and widget tests in Dart.",
      },
    ],
  },
  {
    id: "perl",
    name: "Perl",
    icon: "🦪",
    color: "bg-pink-600",
    category: "Programming",
    description:
      "General questions about the Perl language, known for its powerful text processing capabilities.",
    questionTypes: {
      mcq: 0.4,
      fill: 0.2,
      code: 0.3,
      trueorfalse: 0.1,
    },
    topics: [
      {
        id: "perl-basics",
        name: "Basics & Syntax",
        description:
          "Questions on fundamental Perl syntax, including sigils (`$`, `@`, `%`) and control flow.",
      },
      {
        id: "perl-regex",
        name: "Regular Expressions",
        description:
          "Questions on Perl's powerful regular expression engine for text matching and substitution.",
      },
      {
        id: "perl-references",
        name: "References & Data Structures",
        description:
          "Questions on creating complex data structures using references to arrays and hashes.",
      },
      {
        id: "perl-modules",
        name: "Modules & Packages",
        description:
          "Questions on code organization using modules and packages.",
      },
      {
        id: "perl-oops",
        name: "Object-Oriented Programming",
        description:
          "Questions on Perl's object-oriented features, including classes and methods.",
      },
      {
        id: "perl-file-handling",
        name: "File Handling",
        description:
          "Questions on reading from and writing to files using Perl's I/O functions.",
      },
      {
        id: "perl-cpan",
        name: "CPAN & Libraries",
        description:
          "Questions on using the Comprehensive Perl Archive Network (CPAN) for external libraries.",
      },
      {
        id: "perl-dbi",
        name: "Database Programming (DBI)",
        description:
          "Questions on using the Database Interface (DBI) module for database connectivity.",
      },
      {
        id: "perl-web",
        name: "Web Programming",
        description:
          "Questions on building web applications using Perl, including CGI and modern frameworks.",
      },
      {
        id: "perl-testing",
        name: "Testing",
        description:
          "Questions on writing tests for Perl code using modules like `Test::More`.",
      },
      {
        id: "perl-system",
        name: "System Administration",
        description:
          "Questions on using Perl for system administration tasks and scripting.",
      },
      {
        id: "perl-bioinformatics",
        name: "Bioinformatics",
        description:
          "Questions on the use of Perl in bioinformatics and computational biology.",
      },
    ],
  },
  {
    id: "haskell",
    name: "Haskell",
    icon: "📐",
    color: "bg-green-700",
    category: "Programming",
    description:
      "General questions about the purely functional language Haskell. Topics include types, functions, and monads.",
    questionTypes: {
      mcq: 0.4,
      fill: 0.2,
      code: 0.3,
      trueorfalse: 0.1,
    },
    topics: [
      {
        id: "haskell-basics",
        name: "Basics & Syntax",
        description:
          "Questions on fundamental Haskell syntax, including function definitions, pattern matching, and recursion.",
      },
      {
        id: "haskell-functions",
        name: "Functions & Recursion",
        description:
          "Questions on defining and using functions, including recursive functions.",
      },
      {
        id: "haskell-types",
        name: "Type System",
        description:
          "Questions on Haskell's static and strong type system, including type inference and type classes.",
      },
      {
        id: "haskell-lists",
        name: "Lists & List Comprehensions",
        description:
          "Questions on working with lists and using list comprehensions for concise code.",
      },
      {
        id: "haskell-higher-order",
        name: "Higher-Order Functions",
        description:
          "Questions on functions that take other functions as arguments or return them as results.",
      },
      {
        id: "haskell-monads",
        name: "Monads",
        description:
          "Advanced questions on monads for structuring computations that involve sequences of actions.",
      },
      {
        id: "haskell-functors",
        name: "Functors & Applicatives",
        description:
          "Questions on functors and applicatives, which are generalizations of functions.",
      },
      {
        id: "haskell-io",
        name: "Input/Output",
        description:
          "Questions on how to perform I/O operations in a purely functional language using the `IO` monad.",
      },
      {
        id: "haskell-modules",
        name: "Modules",
        description:
          "Questions on organizing code into modules and managing dependencies.",
      },
      {
        id: "haskell-laziness",
        name: "Lazy Evaluation",
        description:
          "Questions on Haskell's non-strict evaluation strategy and its implications for performance and control flow.",
      },
      {
        id: "haskell-cabal",
        name: "Cabal & Stack",
        description:
          "Questions on using the Cabal and Stack build tools for managing Haskell projects.",
      },
      {
        id: "haskell-testing",
        name: "Testing (QuickCheck)",
        description:
          "Questions on property-based testing using the QuickCheck library.",
      },
    ],
  },
  {
    id: "elixir",
    name: "Elixir",
    icon: "🔮",
    color: "bg-purple-500",
    category: "Programming",
    description:
      "General questions about the Elixir language, known for building scalable and maintainable applications.",
    questionTypes: {
      mcq: 0.4,
      fill: 0.2,
      code: 0.3,
      trueorfalse: 0.1,
    },
    topics: [
      {
        id: "elixir-basics",
        name: "Basics & Syntax",
        description:
          "Questions on fundamental Elixir syntax, including variable assignment, data types, and functions.",
      },
      {
        id: "elixir-pattern-matching",
        name: "Pattern Matching",
        description:
          "Questions on Elixir's powerful pattern matching for destructuring data and controlling flow.",
      },
      {
        id: "elixir-processes",
        name: "Processes & Actors",
        description:
          "Questions on Elixir's lightweight concurrency model using processes and the actor model.",
      },
      {
        id: "elixir-otp",
        name: "OTP (Open Telecom Platform)",
        description:
          "Questions on the OTP framework for building fault-tolerant and highly concurrent systems.",
      },
      {
        id: "elixir-genserver",
        name: "GenServer",
        description:
          "Questions on the GenServer behavior for implementing a client-server relationship.",
      },
      {
        id: "elixir-supervisor",
        name: "Supervisors",
        description:
          "Questions on supervisors for managing the lifecycle of processes and building fault-tolerant applications.",
      },
      {
        id: "elixir-phoenix",
        name: "Phoenix Framework",
        description:
          "Questions on the Phoenix web framework for building highly scalable web applications.",
      },
      {
        id: "elixir-ets",
        name: "ETS & DETS",
        description:
          "Questions on the Erlang Term Storage (ETS) and Disk Erlang Term Storage (DETS) for in-memory and on-disk storage.",
      },
      {
        id: "elixir-macros",
        name: "Macros",
        description:
          "Questions on Elixir's powerful macro system for code generation.",
      },
      {
        id: "elixir-mix",
        name: "Mix Build Tool",
        description:
          "Questions on using the Mix build tool for managing projects, dependencies, and tasks.",
      },
      {
        id: "elixir-testing",
        name: "Testing (ExUnit)",
        description:
          "Questions on writing and running tests with the ExUnit framework.",
      },
      {
        id: "elixir-fault-tolerance",
        name: "Fault Tolerance",
        description:
          "Questions on Elixir's built-in fault tolerance features for building robust systems.",
      },
    ],
  },
  {
    id: "clojure",
    name: "Clojure",
    icon: "🔗",
    color: "bg-green-600",
    category: "Programming",
    description:
      "General questions about the functional programming language Clojure. Topics include data structures, concurrency, and Java interoperability.",
    questionTypes: {
      mcq: 0.4,
      fill: 0.2,
      code: 0.3,
      trueorfalse: 0.1,
    },
    topics: [
      {
        id: "clojure-basics",
        name: "Basics & Syntax",
        description:
          "Questions on fundamental Clojure syntax, including S-expressions and core functions.",
      },
      {
        id: "clojure-data-structures",
        name: "Data Structures",
        description:
          "Questions on Clojure's immutable and persistent data structures like lists, vectors, maps, and sets.",
      },
      {
        id: "clojure-functions",
        name: "Functions & Closures",
        description:
          "Questions on defining functions, anonymous functions, and closures.",
      },
      {
        id: "clojure-sequences",
        name: "Sequences",
        description:
          "Questions on working with sequences, which are a powerful abstraction over collections.",
      },
      {
        id: "clojure-macros",
        name: "Macros",
        description:
          "Questions on macros, which allow extending the language itself.",
      },
      {
        id: "clojure-state",
        name: "State Management",
        description:
          "Questions on Clojure's concurrency primitives for managing mutable state, such as atoms, refs, and agents.",
      },
      {
        id: "clojure-concurrency",
        name: "Concurrency",
        description:
          "Questions on Clojure's approach to concurrency and parallelism.",
      },
      {
        id: "clojure-java-interop",
        name: "Java Interoperability",
        description:
          "Questions on how Clojure code can seamlessly interact with Java libraries and objects.",
      },
      {
        id: "clojure-protocols",
        name: "Protocols & Multimethods",
        description:
          "Questions on protocols for polymorphic dispatch and multimethods for dynamic dispatch.",
      },
      {
        id: "clojure-lein",
        name: "Leiningen",
        description:
          "Questions on using Leiningen, the build automation and dependency management tool for Clojure.",
      },
      {
        id: "clojure-testing",
        name: "Testing",
        description:
          "Questions on writing tests for Clojure applications using libraries like `clojure.test`.",
      },
      {
        id: "clojure-web",
        name: "Web Development (Ring/Compojure)",
        description:
          "Questions on building web applications using the Ring and Compojure libraries.",
      },
    ],
  },
  {
    id: "html",
    name: "HTML",
    icon: "🌐",
    color: "bg-red-500",
    category: "Web",
    description:
      "General questions about HTML. Topics include document structure, semantic tags, forms, and multimedia elements. Questions should focus on proper usage and best practices.",
    questionTypes: {
      mcq: 0.6,
      fill: 0.3,
      code: 0.05,
      trueorfalse: 0.05,
    },
    topics: [
      {
        id: "html-basics",
        name: "Basics & Structure",
        description:
          "Questions on the fundamental structure of an HTML document, including `<!DOCTYPE html>`, `<html>`, `<head>`, and `<body>` tags.",
      },
      {
        id: "html-forms",
        name: "Forms & Input Elements",
        description:
          "Questions on creating forms with different input types (`text`, `email`, `password`, `radio`, `checkbox`) and form submission.",
      },
      {
        id: "html-semantic",
        name: "Semantic HTML",
        description:
          "Questions on using semantic tags like `<header>`, `<nav>`, `<article>`, `<section>`, and `<footer>` for better accessibility and SEO.",
      },
      {
        id: "html-multimedia",
        name: "Images, Audio & Video",
        description:
          "Questions on embedding images (`<img>`), audio (`<audio>`), and video (`<video>`) elements, including attributes like `src` and `alt`.",
      },
      {
        id: "html-tables",
        name: "Tables",
        description:
          "Questions on creating and structuring data tables using `<table>`, `<thead>`, `<tbody>`, `<tr>`, `<th>`, and `<td>` tags.",
      },
      {
        id: "html-accessibility",
        name: "Accessibility (ARIA)",
        description:
          "Questions on making web content more accessible for users with disabilities, including ARIA attributes and best practices.",
      },
      {
        id: "html5-features",
        name: "HTML5 Features",
        description:
          "Questions on new features introduced in HTML5, such as `<header>`, `<nav>`, `<section>`, and the `<canvas>` element.",
      },
      {
        id: "html-canvas",
        name: "Canvas API",
        description:
          "Questions on using the Canvas API for drawing graphics and animations on a webpage.",
      },
      {
        id: "html-svg",
        name: "SVG",
        description:
          "Questions on using Scalable Vector Graphics (SVG) for creating vector-based graphics.",
      },
      {
        id: "html-web-storage",
        name: "Web Storage",
        description:
          "Questions on `localStorage` and `sessionStorage` for storing data on the client side.",
      },
      {
        id: "html-geolocation",
        name: "Geolocation API",
        description:
          "Questions on using the Geolocation API to get the user's geographical location.",
      },
      {
        id: "html-drag-drop",
        name: "Drag & Drop API",
        description:
          "Questions on implementing drag and drop functionality using the HTML5 Drag and Drop API.",
      },
    ],
  },
  {
    id: "css",
    name: "CSS",
    icon: "🎨",
    color: "bg-blue-400",
    category: "Web",
    description:
      "General questions about CSS. Topics include selectors, the box model, Flexbox, Grid, and responsive design. Questions may include code snippets to debug.",
    questionTypes: {
      mcq: 0.5,
      fill: 0.3,
      code: 0.15,
      trueorfalse: 0.05,
    },
    topics: [
      {
        id: "css-basics",
        name: "Basics & Selectors",
        description:
          "Questions on fundamental CSS syntax, including ID, class, and attribute selectors.",
      },
      {
        id: "css-box-model",
        name: "Box Model",
        description:
          "Questions on the CSS Box Model, including content, padding, border, and margin.",
      },
      {
        id: "css-flexbox",
        name: "Flexbox",
        description:
          "Questions on using Flexbox for one-dimensional layout and alignment.",
      },
      {
        id: "css-grid",
        name: "CSS Grid",
        description:
          "Questions on using CSS Grid for two-dimensional layout and grid-based design.",
      },
      {
        id: "css-positioning",
        name: "Positioning",
        description:
          "Questions on the `position` property and its values (`static`, `relative`, `absolute`, `fixed`, `sticky`).",
      },
      {
        id: "css-responsive",
        name: "Responsive Design",
        description:
          "Questions on creating responsive designs using media queries, fluid grids, and flexible images.",
      },
      {
        id: "css-animations",
        name: "Animations & Transitions",
        description:
          "Questions on creating smooth animations and transitions using CSS properties.",
      },
      {
        id: "css-preprocessors",
        name: "Preprocessors (Sass, Less)",
        description:
          "Questions on CSS preprocessors like Sass and Less, including variables, mixins, and nesting.",
      },
      {
        id: "css-frameworks",
        name: "Frameworks (Bootstrap, Tailwind)",
        description:
          "Questions on popular CSS frameworks like Bootstrap and Tailwind CSS.",
      },
      {
        id: "css-modules",
        name: "CSS Modules",
        description:
          "Questions on using CSS Modules to scope CSS locally to components.",
      },
      {
        id: "css-variables",
        name: "Custom Properties",
        description:
          "Questions on using CSS custom properties (`--*`) for reusable values.",
      },
      {
        id: "css-architecture",
        name: "CSS Architecture (BEM, OOCSS)",
        description:
          "Questions on organizing and structuring CSS code using methodologies like BEM and OOCSS.",
      },
    ],
  },
  {
    id: "react",
    name: "React.js",
    icon: "⚛️",
    color: "bg-cyan-500",
    category: "Web",
    description:
      "General questions about React.js. Topics include components, state, props, hooks, and the virtual DOM. Questions may involve debugging or writing small React components.",
    questionTypes: {
      mcq: 0.3,
      fill: 0.2,
      code: 0.4,
      trueorfalse: 0.1,
    },
    topics: [
      {
        id: "react-basics",
        name: "Components & JSX",
        description:
          "Questions on building functional components, using JSX syntax, and rendering elements.",
      },
      {
        id: "react-hooks",
        name: "Hooks",
        description:
          "Questions on core hooks like `useState`, `useEffect`, and `useContext`, and their rules.",
      },
      {
        id: "react-state",
        name: "State Management",
        description:
          "Questions on managing component state with `useState` and passing state down to children.",
      },
      {
        id: "react-props",
        name: "Props & Events",
        description:
          "Questions on passing data between components using props and handling user events.",
      },
      {
        id: "react-lifecycle",
        name: "Component Lifecycle",
        description:
          "Questions on the lifecycle of a React component and the hooks associated with each phase.",
      },
      {
        id: "react-routing",
        name: "React Router",
        description:
          "Questions on using React Router for client-side routing and navigation.",
      },
      {
        id: "react-context",
        name: "Context API",
        description:
          "Questions on using the Context API for passing data through the component tree without prop drilling.",
      },
      {
        id: "react-redux",
        name: "Redux",
        description:
          "Questions on using Redux for predictable state management, including actions, reducers, and the store.",
      },
      {
        id: "react-forms",
        name: "Forms & Validation",
        description:
          "Questions on creating and managing forms, including controlled components and validation.",
      },
      {
        id: "react-testing",
        name: "Testing (Jest, React Testing Library)",
        description:
          "Questions on testing React components using Jest and React Testing Library.",
      },
      {
        id: "react-performance",
        name: "Performance Optimization",
        description:
          "Questions on techniques to improve performance, such as `React.memo`, `useCallback`, and `useMemo`.",
      },
      {
        id: "react-patterns",
        name: "Design Patterns",
        description:
          "Questions on common React design patterns, such as Higher-Order Components (HOCs) and Render Props.",
      },
    ],
  },
  {
    id: "nextjs",
    name: "Next.js",
    icon: "⚫",
    color: "bg-gray-800",
    category: "Web",
    description:
      "General questions about Next.js. Topics include routing, data fetching, and rendering strategies. Questions may include code snippets for specific Next.js features.",
    questionTypes: {
      mcq: 0.4,
      fill: 0.2,
      code: 0.3,
      trueorfalse: 0.1,
    },
    topics: [
      {
        id: "nextjs-basics",
        name: "Pages & Routing",
        description:
          "Questions on the file-system based routing and creating pages in Next.js.",
      },
      {
        id: "nextjs-ssr",
        name: "Server-Side Rendering",
        description:
          "Questions on server-side rendering (SSR) and using `getServerSideProps` for data fetching.",
      },
      {
        id: "nextjs-ssg",
        name: "Static Site Generation",
        description:
          "Questions on static site generation (SSG) and using `getStaticProps` for building static pages.",
      },
      {
        id: "nextjs-api-routes",
        name: "API Routes",
        description:
          "Questions on creating backend API endpoints within a Next.js application.",
      },
      {
        id: "nextjs-dynamic-routing",
        name: "Dynamic Routing",
        description:
          "Questions on creating dynamic routes to handle pages with variable paths.",
      },
      {
        id: "nextjs-image-optimization",
        name: "Image Optimization",
        description:
          "Questions on using the `<Image>` component for automatic image optimization.",
      },
      {
        id: "nextjs-deployment",
        name: "Deployment",
        description:
          "Questions on deploying a Next.js application to various platforms like Vercel or a custom server.",
      },
      {
        id: "nextjs-middleware",
        name: "Middleware",
        description:
          "Questions on using middleware to run code before a request is completed.",
      },
      {
        id: "nextjs-auth",
        name: "Authentication",
        description:
          "Questions on implementing authentication in a Next.js application.",
      },
      {
        id: "nextjs-performance",
        name: "Performance",
        description:
          "Questions on performance optimizations and the different rendering strategies in Next.js.",
      },
      {
        id: "nextjs-data-fetching",
        name: "Data Fetching",
        description:
          "Questions on different data fetching methods like `getStaticProps`, `getServerSideProps`, and `useSWR`.",
      },
      {
        id: "nextjs-internationalization",
        name: "Internationalization",
        description:
          "Questions on building multilingual applications with Next.js.",
      },
    ],
  },
  {
    id: "vue",
    name: "Vue.js",
    icon: "💚",
    color: "bg-green-500",
    category: "Web",
    description:
      "General questions about Vue.js. Topics include components, directives, data binding, and state management. Questions may involve debugging or writing small Vue components.",
    questionTypes: {
      mcq: 0.3,
      fill: 0.2,
      code: 0.4,
      trueorfalse: 0.1,
    },
    topics: [
      {
        id: "vue-basics",
        name: "Basics & Templates",
        description:
          "Questions on the fundamental structure of a Vue application and using template syntax.",
      },
      {
        id: "vue-components",
        name: "Components",
        description:
          "Questions on defining and using single-file components and passing props.",
      },
      {
        id: "vue-directives",
        name: "Directives",
        description:
          "Questions on using built-in directives like `v-if`, `v-for`, and `v-bind`.",
      },
      {
        id: "vue-data-binding",
        name: "Data Binding",
        description:
          "Questions on two-way data binding using `v-model` and one-way binding with `v-bind`.",
      },
      {
        id: "vue-events",
        name: "Event Handling",
        description:
          "Questions on handling user events with `v-on` and custom events.",
      },
      {
        id: "vue-lifecycle",
        name: "Lifecycle Hooks",
        description:
          "Questions on the lifecycle of a Vue component and the associated hooks (`created`, `mounted`, `updated`).",
      },
      {
        id: "vue-router",
        name: "Vue Router",
        description:
          "Questions on using Vue Router for client-side routing.",
      },
      {
        id: "vue-vuex",
        name: "Vuex State Management",
        description:
          "Questions on using Vuex for centralized state management, including state, mutations, actions, and getters.",
      },
      {
        id: "vue-composition",
        name: "Composition API",
        description:
          "Questions on using the Composition API for organizing component logic.",
      },
      {
        id: "vue-forms",
        name: "Forms & Validation",
        description:
          "Questions on creating and handling forms in Vue applications.",
      },
      {
        id: "vue-testing",
        name: "Testing",
        description:
          "Questions on testing Vue components using frameworks like Vue Test Utils and Jest.",
      },
      {
        id: "vue-nuxt",
        name: "Nuxt.js Framework",
        description:
          "Questions on the Nuxt.js framework for building server-side rendered Vue applications.",
      },
    ],
  },
  {
    id: "angular",
    name: "Angular",
    icon: "🅰️",
    color: "bg-red-600",
    category: "Web",
    description:
      "General questions about Angular. Topics include components, modules, services, and routing. Questions may involve debugging or writing small Angular components.",
    questionTypes: {
      mcq: 0.3,
      fill: 0.2,
      code: 0.4,
      trueorfalse: 0.1,
    },
    topics: [
      {
        id: "angular-basics",
        name: "Components & Templates",
        description:
          "Questions on creating and using components and their associated templates.",
      },
      {
        id: "angular-typescript",
        name: "TypeScript Integration",
        description:
          "Questions on how Angular uses TypeScript and its features for building applications.",
      },
      {
        id: "angular-services",
        name: "Services & Dependency Injection",
        description:
          "Questions on using services to provide reusable logic and the dependency injection system.",
      },
      {
        id: "angular-routing",
        name: "Routing & Navigation",
        description:
          "Questions on configuring and using the Angular Router for navigation.",
      },
      {
        id: "angular-forms",
        name: "Forms (Reactive & Template-driven)",
        description:
          "Questions on the two approaches to building forms: reactive forms and template-driven forms.",
      },
      {
        id: "angular-http",
        name: "HTTP Client",
        description:
          "Questions on making HTTP requests using the `HttpClient` module.",
      },
      {
        id: "angular-observables",
        name: "RxJS & Observables",
        description:
          "Questions on using RxJS and Observables for handling asynchronous data streams.",
      },
      {
        id: "angular-directives",
        name: "Directives & Pipes",
        description:
          "Questions on using built-in directives (`NgIf`, `NgFor`) and pipes (`currency`, `date`).",
      },
      {
        id: "angular-lifecycle",
        name: "Lifecycle Hooks",
        description:
          "Questions on the lifecycle hooks of an Angular component and their execution order.",
      },
      {
        id: "angular-testing",
        name: "Testing (Jasmine, Karma)",
        description:
          "Questions on unit and end-to-end testing with Jasmine and Karma.",
      },
      {
        id: "angular-animations",
        name: "Animations",
        description:
          "Questions on creating animations and transitions using Angular's animation module.",
      },
      {
        id: "angular-cli",
        name: "Angular CLI",
        description:
          "Questions on using the Angular CLI for scaffolding and managing projects.",
      },
    ],
  },
  {
    id: "svelte",
    name: "Svelte",
    icon: "🔥",
    color: "bg-orange-500",
    category: "Web",
    description:
      "General questions about Svelte. Topics include reactivity, components, stores, and lifecycle. Questions may involve debugging or writing small Svelte components.",
    questionTypes: {
      mcq: 0.4,
      fill: 0.2,
      code: 0.3,
      trueorfalse: 0.1,
    },
    topics: [
      {
        id: "svelte-basics",
        name: "Basics & Components",
        description:
          "Questions on the fundamental structure of a Svelte component and its syntax.",
      },
      {
        id: "svelte-reactivity",
        name: "Reactivity",
        description:
          "Questions on Svelte's reactivity system, which compiles away at build time.",
      },
      {
        id: "svelte-props",
        name: "Props & Events",
        description:
          "Questions on passing data to and from components using props and events.",
      },
      {
        id: "svelte-stores",
        name: "Stores",
        description:
          "Questions on using stores (`writable`, `readable`, `derived`) for global state management.",
      },
      {
        id: "svelte-lifecycle",
        name: "Lifecycle",
        description:
          "Questions on the lifecycle of a Svelte component and the associated hooks (`onMount`, `onDestroy`).",
      },
      {
        id: "svelte-animations",
        name: "Animations & Transitions",
        description:
          "Questions on creating smooth animations and transitions using Svelte's built-in animation system.",
      },
      {
        id: "svelte-routing",
        name: "Routing",
        description:
          "Questions on client-side routing with frameworks like Svelte-Spa-Router or SvelteKit's router.",
      },
      {
        id: "svelte-styling",
        name: "Styling",
        description:
          "Questions on component-scoped styling and global styling in Svelte.",
      },
      {
        id: "svelte-actions",
        name: "Actions",
        description:
          "Questions on using custom actions to extend the functionality of HTML elements.",
      },
      {
        id: "svelte-sveltekit",
        name: "SvelteKit",
        description:
          "Questions on the SvelteKit framework for building fast web applications.",
      },
      {
        id: "svelte-testing",
        name: "Testing",
        description:
          "Questions on testing Svelte components using frameworks like Jest and Testing Library.",
      },
      {
        id: "svelte-deployment",
        name: "Deployment",
        description:
          "Questions on deploying a Svelte application to various hosting providers.",
      },
    ],
  },
  {
    id: "gatsby",
    name: "Gatsby",
    icon: "🌿",
    color: "bg-purple-400",
    category: "Web",
    description:
      "General questions about Gatsby.js. Topics include static site generation, GraphQL, plugins, and performance optimization.",
    questionTypes: {
      mcq: 0.5,
      fill: 0.3,
      code: 0.15,
      trueorfalse: 0.05,
    },
    topics: [
      {
        id: "gatsby-basics",
        name: "Static Site Generation",
        description:
          "Questions on the core concept of Gatsby: generating static HTML, CSS, and JavaScript at build time.",
      },
      {
        id: "gatsby-graphql",
        name: "GraphQL Data Layer",
        description:
          "Questions on using GraphQL to query and fetch data from various sources.",
      },
      {
        id: "gatsby-pages",
        name: "Pages & Routing",
        description:
          "Questions on creating pages and managing client-side routing in Gatsby.",
      },
      {
        id: "gatsby-plugins",
        name: "Plugins",
        description:
          "Questions on how to use and configure plugins to add functionality to a Gatsby site.",
      },
      {
        id: "gatsby-images",
        name: "Image Processing",
        description:
          "Questions on using `gatsby-image` for high-performance image handling.",
      },
      {
        id: "gatsby-cms",
        name: "Headless CMS Integration",
        description:
          "Questions on integrating Gatsby with a headless Content Management System (CMS).",
      },
      {
        id: "gatsby-deployment",
        name: "Deployment",
        description:
          "Questions on deploying Gatsby sites to platforms like Netlify or Vercel.",
      },
      {
        id: "gatsby-performance",
        name: "Performance Optimization",
        description:
          "Questions on Gatsby's built-in performance optimizations and how to leverage them.",
      },
      {
        id: "gatsby-pwa",
        name: "Progressive Web Apps",
        description:
          "Questions on turning a Gatsby site into a Progressive Web App (PWA) with offline capabilities.",
      },
      {
        id: "gatsby-themes",
        name: "Themes",
        description:
          "Questions on using and creating Gatsby themes for building reusable components and functionality.",
      },
      {
        id: "gatsby-styling",
        name: "Styling Solutions",
        description:
          "Questions on various styling methods in Gatsby, including CSS-in-JS and Sass.",
      },
      {
        id: "gatsby-e-commerce",
        name: "E-commerce Integration",
        description:
          "Questions on building e-commerce sites with Gatsby and a headless e-commerce platform.",
      },
    ],
  },
  {
    id: "ember",
    name: "Ember.js",
    icon: "🐹",
    color: "bg-red-400",
    category: "Web",
    description:
      "General questions about Ember.js. Topics include components, routing, and data handling. Questions may involve code snippets for specific Ember.js features.",
    questionTypes: {
      mcq: 0.4,
      fill: 0.2,
      code: 0.3,
      trueorfalse: 0.1,
    },
    topics: [
      {
        id: "ember-basics",
        name: "Components & Templates",
        description:
          "Questions on creating and using components and Handlebars templates.",
      },
      {
        id: "ember-routing",
        name: "Routing",
        description:
          "Questions on Ember's convention-over-configuration approach to routing.",
      },
      {
        id: "ember-models",
        name: "Models & Ember Data",
        description:
          "Questions on using Ember Data for handling models and interacting with an API.",
      },
      {
        id: "ember-controllers",
        name: "Controllers",
        description:
          "Questions on controllers for managing application state and presenting data to templates.",
      },
      {
        id: "ember-services",
        name: "Services",
        description:
          "Questions on using services for shared state and logic across the application.",
      },
      {
        id: "ember-actions",
        name: "Actions & Events",
        description:
          "Questions on handling user actions and events in templates and components.",
      },
      {
        id: "ember-helpers",
        name: "Helpers",
        description:
          "Questions on using helpers for reusable template logic.",
      },
      {
        id: "ember-addons",
        name: "Addons",
        description:
          "Questions on extending Ember functionality using addons.",
      },
      {
        id: "ember-testing",
        name: "Testing",
        description:
          "Questions on writing unit, integration, and acceptance tests in Ember.",
      },
      {
        id: "ember-cli",
        name: "Ember CLI",
        description:
          "Questions on using the Ember CLI for scaffolding and managing projects.",
      },
      {
        id: "ember-fastboot",
        name: "FastBoot (SSR)",
        description:
          "Questions on using FastBoot for server-side rendering of Ember applications.",
      },
      {
        id: "ember-deployment",
        name: "Deployment",
        description:
          "Questions on deploying Ember applications to various environments.",
      },
    ],
  },
  {
    id: "jquery",
    name: "jQuery",
    icon: "💙",
    color: "bg-blue-600",
    category: "Web",
    description:
      "General questions about jQuery. Topics include DOM manipulation, event handling, and AJAX. Questions may involve code snippets.",
    questionTypes: {
      mcq: 0.6,
      fill: 0.2,
      code: 0.1,
      trueorfalse: 0.1,
    },
    topics: [
      {
        id: "jquery-basics",
        name: "Basics & Selectors",
        description:
          "Questions on the fundamental syntax of jQuery and how to select elements using selectors.",
      },
      {
        id: "jquery-dom",
        name: "DOM Manipulation",
        description:
          "Questions on manipulating the DOM, including adding, removing, and changing elements.",
      },
      {
        id: "jquery-events",
        name: "Event Handling",
        description:
          "Questions on handling user events and event delegation.",
      },
      {
        id: "jquery-effects",
        name: "Effects & Animations",
        description:
          "Questions on using jQuery's built-in effects and animations (`fadeIn`, `slideUp`).",
      },
      {
        id: "jquery-ajax",
        name: "AJAX",
        description:
          "Questions on making asynchronous HTTP requests using jQuery's AJAX methods.",
      },
      {
        id: "jquery-forms",
        name: "Form Handling",
        description:
          "Questions on handling form submissions and validating form data with jQuery.",
      },
      {
        id: "jquery-plugins",
        name: "Plugins",
        description:
          "Questions on extending jQuery's functionality with plugins.",
      },
      {
        id: "jquery-ui",
        name: "jQuery UI",
        description:
          "Questions on using jQuery UI for building user interfaces with widgets and interactions.",
      },
      {
        id: "jquery-mobile",
        name: "jQuery Mobile",
        description:
          "Questions on using jQuery Mobile for building mobile web applications.",
      },
      {
        id: "jquery-performance",
        name: "Performance Best Practices",
        description:
          "Questions on optimizing jQuery code for better performance.",
      },
      {
        id: "jquery-migration",
        name: "Migration to Modern JS",
        description:
          "Questions on how to transition from jQuery to modern vanilla JavaScript.",
      },
      {
        id: "jquery-deferred",
        name: "Deferred Objects",
        description:
          "Questions on using deferred objects for managing asynchronous operations.",
      },
    ],
  },
  {
    id: "nodejs",
    name: "Node.js",
    icon: "🟢",
    color: "bg-green-600",
    category: "Backend",
    description:
      "General questions about Node.js. Topics include the event loop, modules, and core APIs. Questions may involve writing or debugging Node.js code.",
    questionTypes: {
      mcq: 0.4,
      fill: 0.2,
      code: 0.3,
      trueorfalse: 0.1,
    },
    topics: [
      {
        id: "nodejs-basics",
        name: "Basics & Event Loop",
        description:
          "Questions on the fundamental concepts of Node.js, including its single-threaded, non-blocking I/O model and the event loop.",
      },
      {
        id: "nodejs-modules",
        name: "Modules & NPM",
        description:
          "Questions on the CommonJS module system and managing dependencies with NPM.",
      },
      {
        id: "nodejs-fs",
        name: "File System",
        description:
          "Questions on reading from and writing to files using the built-in `fs` module.",
      },
      {
        id: "nodejs-http",
        name: "HTTP Module",
        description:
          "Questions on creating basic HTTP servers and clients using the `http` module.",
      },
      {
        id: "nodejs-streams",
        name: "Streams",
        description:
          "Questions on using streams for efficient data processing and I/O operations.",
      },
      {
        id: "nodejs-events",
        name: "Events",
        description:
          "Questions on the `EventEmitter` class and the publish-subscribe pattern.",
      },
      {
        id: "nodejs-buffer",
        name: "Buffers",
        description:
          "Questions on buffers for handling binary data.",
      },
      {
        id: "nodejs-async",
        name: "Asynchronous Programming",
        description:
          "Questions on handling asynchronous operations using callbacks, promises, and `async/await`.",
      },
      {
        id: "nodejs-clustering",
        name: "Clustering",
        description:
          "Questions on using the `cluster` module to create multiple processes for handling concurrent requests.",
      },
      {
        id: "nodejs-debugging",
        name: "Debugging",
        description:
          "Questions on debugging Node.js applications using the built-in debugger or external tools.",
      },
      {
        id: "nodejs-testing",
        name: "Testing (Mocha, Jest)",
        description:
          "Questions on popular testing frameworks for Node.js like Mocha and Jest.",
      },
      {
        id: "nodejs-security",
        name: "Security Best Practices",
        description:
          "Questions on securing Node.js applications against common vulnerabilities.",
      },
    ],
  },
  {
    id: "express",
    name: "Express.js",
    icon: "🚂",
    color: "bg-gray-700",
    category: "Backend",
    description:
      "General questions about Express.js. Topics include routing, middleware, and API development. Questions may involve writing or debugging Express.js routes.",
    questionTypes: {
      mcq: 0.5,
      fill: 0.2,
      code: 0.2,
      trueorfalse: 0.1,
    },
    topics: [
      {
        id: "express-basics",
        name: "Basics & Routing",
        description:
          "Questions on creating a basic Express server and defining routes for different HTTP methods.",
      },
      {
        id: "express-middleware",
        name: "Middleware",
        description:
          "Questions on using middleware functions to handle requests and responses.",
      },
      {
        id: "express-routing",
        name: "Advanced Routing",
        description:
          "Questions on using route parameters, query strings, and router modules for advanced routing.",
      },
      {
        id: "express-templates",
        name: "Template Engines",
        description:
          "Questions on integrating template engines like EJS or Pug for server-side rendering.",
      },
      {
        id: "express-static",
        name: "Static Files",
        description:
          "Questions on serving static assets like CSS, JavaScript, and images.",
      },
      {
        id: "express-error-handling",
        name: "Error Handling",
        description:
          "Questions on creating and using error-handling middleware.",
      },
      {
        id: "express-validation",
        name: "Input Validation",
        description:
          "Questions on validating user input with libraries like `express-validator`.",
      },
      {
        id: "express-auth",
        name: "Authentication & Authorization",
        description:
          "Questions on implementing authentication and authorization with Express.",
      },
      {
        id: "express-sessions",
        name: "Sessions & Cookies",
        description:
          "Questions on managing user sessions and cookies.",
      },
      {
        id: "express-database",
        name: "Database Integration",
        description:
          "Questions on connecting Express to databases like MongoDB or PostgreSQL.",
      },
      {
        id: "express-security",
        name: "Security (Helmet, CORS)",
        description:
          "Questions on securing Express applications using middleware like Helmet and CORS.",
      },
      {
        id: "express-testing",
        name: "Testing",
        description:
          "Questions on testing Express routes and middleware.",
      },
    ],
  },
  {
    id: "django",
    name: "Django",
    icon: "🎸",
    color: "bg-green-700",
    category: "Backend",
    description:
      "General questions about the Django web framework. Topics include models, views, templates, and the ORM. Questions may involve writing or debugging Django code.",
    questionTypes: {
      mcq: 0.4,
      fill: 0.2,
      code: 0.3,
      trueorfalse: 0.1,
    },
    topics: [
      {
        id: "django-basics",
        name: "Models, Views, Templates",
        description:
          "Questions on the core MVT (Model-View-Template) architecture of Django.",
      },
      {
        id: "django-orm",
        name: "ORM & Database",
        description:
          "Questions on using the Django ORM to interact with databases and defining models.",
      },
      {
        id: "django-admin",
        name: "Admin Interface",
        description:
          "Questions on using and customizing the built-in Django admin interface.",
      },
      {
        id: "django-forms",
        name: "Forms & Validation",
        description:
          "Questions on creating and validating forms using Django's form classes.",
      },
      {
        id: "django-auth",
        name: "User Authentication",
        description:
          "Questions on using Django's built-in authentication system for users and permissions.",
      },
      {
        id: "django-middleware",
        name: "Middleware",
        description:
          "Questions on middleware for processing requests and responses.",
      },
      {
        id: "django-rest",
        name: "Django REST Framework",
        description:
          "Questions on building RESTful APIs using the Django REST Framework.",
      },
      {
        id: "django-testing",
        name: "Testing",
        description:
          "Questions on writing unit tests for Django models, views, and forms.",
      },
      {
        id: "django-deployment",
        name: "Deployment",
        description:
          "Questions on deploying Django applications to production environments.",
      },
      {
        id: "django-security",
        name: "Security",
        description:
          "Questions on Django's built-in security features and best practices.",
      },
      {
        id: "django-signals",
        name: "Signals",
        description:
          "Questions on using signals to decouple applications and allow different parts of the framework to send and receive notifications.",
      },
      {
        id: "django-caching",
        name: "Caching",
        description:
          "Questions on using Django's caching framework to improve performance.",
      },
    ],
  },
  {
    id: "flask",
    name: "Flask",
    icon: "🌶️",
    color: "bg-red-400",
    category: "Backend",
    description:
      "General questions about the Flask web framework. Topics include routing, templates, and extensions. Questions may involve writing or debugging Flask code.",
    questionTypes: {
      mcq: 0.4,
      fill: 0.2,
      code: 0.3,
      trueorfalse: 0.1,
    },
    topics: [
      {
        id: "flask-basics",
        name: "Basics & Routing",
        description:
          "Questions on creating a basic Flask application and defining routes.",
      },
      {
        id: "flask-templates",
        name: "Templates (Jinja2)",
        description:
          "Questions on using Jinja2 for rendering dynamic HTML templates.",
      },
      {
        id: "flask-forms",
        name: "Forms & Validation",
        description:
          "Questions on handling forms and validating data with libraries like Flask-WTF.",
      },
      {
        id: "flask-database",
        name: "Database Integration",
        description:
          "Questions on connecting Flask to databases using extensions like Flask-SQLAlchemy.",
      },
      {
        id: "flask-auth",
        name: "User Authentication",
        description:
          "Questions on implementing user authentication with Flask-Login or other extensions.",
      },
      {
        id: "flask-blueprints",
        name: "Blueprints",
        description:
          "Questions on using blueprints to modularize Flask applications.",
      },
      {
        id: "flask-restful",
        name: "RESTful APIs",
        description:
          "Questions on building RESTful APIs with Flask and extensions like Flask-RESTful.",
      },
      {
        id: "flask-testing",
        name: "Testing",
        description:
          "Questions on writing unit and integration tests for Flask applications.",
      },
      {
        id: "flask-deployment",
        name: "Deployment",
        description:
          "Questions on deploying a Flask application to a production environment.",
      },
      {
        id: "flask-extensions",
        name: "Extensions",
        description:
          "Questions on using popular Flask extensions to add functionality.",
      },
      {
        id: "flask-sessions",
        name: "Sessions & Cookies",
        description:
          "Questions on managing sessions and cookies in Flask.",
      },
      {
        id: "flask-error-handling",
        name: "Error Handling",
        description:
          "Questions on handling HTTP errors and exceptions in Flask.",
      },
    ],
  },
  {
    id: "fastapi",
    name: "FastAPI",
    icon: "⚡",
    color: "bg-teal-600",
    category: "Backend",
    description:
      "General questions about FastAPI. Topics include path operations, Pydantic models, and dependency injection. Questions may involve writing or debugging FastAPI code.",
    questionTypes: {
      mcq: 0.4,
      fill: 0.2,
      code: 0.3,
      trueorfalse: 0.1,
    },
    topics: [
      {
        id: "fastapi-basics",
        name: "Basics & Path Operations",
        description:
          "Questions on creating a basic FastAPI application and defining path operations.",
      },
      {
        id: "fastapi-pydantic",
        name: "Pydantic Models",
        description:
          "Questions on using Pydantic models for data validation and serialization.",
      },
      {
        id: "fastapi-validation",
        name: "Request Validation",
        description:
          "Questions on automatic request validation using Pydantic and type hints.",
      },
      {
        id: "fastapi-dependency",
        name: "Dependency Injection",
        description:
          "Questions on FastAPI's dependency injection system and how to use it for reusable logic.",
      },
      {
        id: "fastapi-auth",
        name: "Authentication & Security",
        description:
          "Questions on implementing authentication and security using OAuth2 and JWT.",
      },
      {
        id: "fastapi-database",
        name: "Database Integration",
        description:
          "Questions on connecting FastAPI to databases using ORMs like SQLAlchemy.",
      },
      {
        id: "fastapi-middleware",
        name: "Middleware",
        description:
          "Questions on creating and using middleware functions.",
      },
      {
        id: "fastapi-testing",
        name: "Testing",
        description:
          "Questions on writing tests for FastAPI applications using `TestClient`.",
      },
      {
        id: "fastapi-async",
        name: "Async Operations",
        description:
          "Questions on handling asynchronous operations and using `async/await`.",
      },
      {
        id: "fastapi-websockets",
        name: "WebSockets",
        description:
          "Questions on building real-time applications using WebSockets.",
      },
      {
        id: "fastapi-deployment",
        name: "Deployment",
        description:
          "Questions on deploying a FastAPI application to a production environment.",
      },
      {
        id: "fastapi-documentation",
        name: "Automatic Documentation",
        description:
          "Questions on FastAPI's automatic generation of interactive API documentation.",
      },
    ],
  },
  {
    id: "spring",
    name: "Spring Boot",
    icon: "🍃",
    color: "bg-green-600",
    category: "Backend",
    description:
      "General questions about the Spring Boot framework. Topics include MVC, data access, and security. Questions may involve writing or debugging Spring Boot code.",
    questionTypes: {
      mcq: 0.4,
      fill: 0.2,
      code: 0.3,
      trueorfalse: 0.1,
    },
    topics: [
      {
        id: "spring-basics",
        name: "Basics & Auto-configuration",
        description:
          "Questions on the fundamental concepts of Spring Boot, including auto-configuration and the main application class.",
      },
      {
        id: "spring-mvc",
        name: "Spring MVC",
        description:
          "Questions on the Model-View-Controller (MVC) pattern and creating REST controllers.",
      },
      {
        id: "spring-data",
        name: "Spring Data JPA",
        description:
          "Questions on using Spring Data JPA for simplified database access.",
      },
      {
        id: "spring-security",
        name: "Spring Security",
        description:
          "Questions on implementing authentication and authorization with Spring Security.",
      },
      {
        id: "spring-rest",
        name: "RESTful Web Services",
        description:
          "Questions on building RESTful APIs using `@RestController` and `@GetMapping`.",
      },
      {
        id: "spring-actuator",
        name: "Spring Boot Actuator",
        description:
          "Questions on using Spring Boot Actuator for monitoring and managing applications.",
      },
      {
        id: "spring-testing",
        name: "Testing",
        description:
          "Questions on writing unit and integration tests for Spring applications.",
      },
      {
        id: "spring-profiles",
        name: "Profiles & Configuration",
        description:
          "Questions on managing application properties for different environments using profiles.",
      },
      {
        id: "spring-microservices",
        name: "Microservices",
        description:
          "Questions on building microservices architectures with Spring Boot.",
      },
      {
        id: "spring-cloud",
        name: "Spring Cloud",
        description:
          "Questions on using the Spring Cloud family of projects for distributed systems.",
      },
      {
        id: "spring-batch",
        name: "Spring Batch",
        description:
          "Questions on using Spring Batch for building robust batch applications.",
      },
      {
        id: "spring-deployment",
        name: "Deployment",
        description:
          "Questions on deploying Spring Boot applications to various environments.",
      },
    ],
  },
  {
    id: "laravel",
    name: "Laravel",
    icon: "🎯",
    color: "bg-red-600",
    category: "Backend",
    description:
      "General questions about the Laravel framework. Topics include MVC, Eloquent ORM, and Blade templates. Questions may involve writing or debugging Laravel code.",
    questionTypes: {
      mcq: 0.4,
      fill: 0.2,
      code: 0.3,
      trueorfalse: 0.1,
    },
    topics: [
      {
        id: "laravel-basics",
        name: "MVC & Routing",
        description:
          "Questions on the core Model-View-Controller (MVC) architecture of Laravel and defining routes.",
      },
      {
        id: "laravel-eloquent",
        name: "Eloquent ORM",
        description:
          "Questions on using Eloquent, Laravel's ORM, to interact with the database.",
      },
      {
        id: "laravel-blade",
        name: "Blade Templates",
        description:
          "Questions on using Blade, Laravel's powerful templating engine.",
      },
      {
        id: "laravel-auth",
        name: "Authentication & Authorization",
        description:
          "Questions on implementing user authentication and authorization.",
      },
      {
        id: "laravel-middleware",
        name: "Middleware",
        description:
          "Questions on using middleware to handle HTTP requests before they reach the controller.",
      },
      {
        id: "laravel-validation",
        name: "Form Validation",
        description:
          "Questions on validating form input using Laravel's validation rules.",
      },
      {
        id: "laravel-queue",
        name: "Queues & Jobs",
        description:
          "Questions on running time-consuming tasks in the background using queues.",
      },
      {
        id: "laravel-mail",
        name: "Mail & Notifications",
        description:
          "Questions on sending emails and notifications from the application.",
      },
      {
        id: "laravel-artisan",
        name: "Artisan Console",
        description:
          "Questions on using the Artisan command-line interface for common tasks.",
      },
      {
        id: "laravel-testing",
        name: "Testing (PHPUnit)",
        description:
          "Questions on writing unit and feature tests with PHPUnit.",
      },
      {
        id: "laravel-api",
        name: "API Development",
        description:
          "Questions on building RESTful APIs with Laravel.",
      },
      {
        id: "laravel-deployment",
        name: "Deployment",
        description:
          "Questions on deploying Laravel applications to a production environment.",
      },
    ],
  },
  {
    id: "ruby-on-rails",
    name: "Ruby on Rails",
    icon: "💎",
    color: "bg-red-500",
    category: "Backend",
    description:
      "General questions about the Ruby on Rails framework. Topics include MVC, Active Record, and routing. Questions may involve writing or debugging Rails code.",
    questionTypes: {
      mcq: 0.4,
      fill: 0.2,
      code: 0.3,
      trueorfalse: 0.1,
    },
    topics: [
      {
        id: "rails-mvc",
        name: "MVC Architecture",
        description:
          "Questions on the core Model-View-Controller (MVC) architecture of Rails.",
      },
      {
        id: "rails-routing",
        name: "Routing",
        description:
          "Questions on defining routes that map URLs to controller actions.",
      },
      {
        id: "rails-active-record",
        name: "Active Record",
        description:
          "Questions on using Active Record, the ORM that simplifies database interaction.",
      },
      {
        id: "rails-views",
        name: "Views & ERB",
        description:
          "Questions on creating views using Embedded Ruby (ERB) templates.",
      },
      {
        id: "rails-controllers",
        name: "Controllers",
        description:
          "Questions on controllers for handling requests and preparing data for views.",
      },
      {
        id: "rails-migrations",
        name: "Migrations",
        description:
          "Questions on managing database schema changes with migrations.",
      },
      {
        id: "rails-validations",
        name: "Validations",
        description:
          "Questions on validating data before it is saved to the database.",
      },
      {
        id: "rails-associations",
        name: "Associations",
        description:
          "Questions on defining relationships between models (e.g., `has_many`, `belongs_to`).",
      },
      {
        id: "rails-testing",
        name: "Testing (RSpec, Minitest)",
        description:
          "Questions on writing tests with RSpec or Minitest.",
      },
      {
        id: "rails-api",
        name: "API Development",
        description:
          "Questions on building RESTful APIs with Rails.",
      },
      {
        id: "rails-deployment",
        name: "Deployment",
        description:
          "Questions on deploying a Rails application to a production environment.",
      },
      {
        id: "rails-security",
        name: "Security Best Practices",
        description:
          "Questions on securing Rails applications against common vulnerabilities.",
      },
    ],
  },
  {
    id: "aspnet",
    name: "ASP.NET",
    icon: "🅰️",
    color: "bg-purple-700",
    category: "Backend",
    description:
      "General questions about the ASP.NET framework. Topics include MVC, Web API, and Entity Framework. Questions may involve writing or debugging C# code within the framework.",
    questionTypes: {
      mcq: 0.4,
      fill: 0.2,
      code: 0.3,
      trueorfalse: 0.1,
    },
    topics: [
      {
        id: "aspnet-mvc",
        name: "MVC Pattern",
        description:
          "Questions on the Model-View-Controller (MVC) pattern in ASP.NET.",
      },
      {
        id: "aspnet-web-api",
        name: "Web API",
        description:
          "Questions on building RESTful APIs with ASP.NET Web API.",
      },
      {
        id: "aspnet-core",
        name: "ASP.NET Core",
        description:
          "Questions on the cross-platform version of the framework, ASP.NET Core.",
      },
      {
        id: "aspnet-entity-framework",
        name: "Entity Framework",
        description:
          "Questions on using the Entity Framework ORM for data access.",
      },
      {
        id: "aspnet-identity",
        name: "Identity & Authentication",
        description:
          "Questions on implementing user authentication and authorization.",
      },
      {
        id: "aspnet-middleware",
        name: "Middleware",
        description:
          "Questions on using middleware to create a request pipeline.",
      },
      {
        id: "aspnet-dependency-injection",
        name: "Dependency Injection",
        description:
          "Questions on the built-in dependency injection system.",
      },
      {
        id: "aspnet-razor",
        name: "Razor Pages",
        description:
          "Questions on using Razor Pages for building web UI with a page-based model.",
      },
      {
        id: "aspnet-signalr",
        name: "SignalR",
        description:
          "Questions on using SignalR for real-time web functionality.",
      },
      {
        id: "aspnet-testing",
        name: "Testing",
        description:
          "Questions on writing unit and integration tests for ASP.NET applications.",
      },
      {
        id: "aspnet-deployment",
        name: "Deployment",
        description:
          "Questions on deploying ASP.NET applications to various environments.",
      },
      {
        id: "aspnet-security",
        name: "Security",
        description:
          "Questions on securing ASP.NET applications against common vulnerabilities.",
      },
    ],
  },
  {
    id: "graphql",
    name: "GraphQL",
    icon: "🔺",
    color: "bg-pink-600",
    category: "Backend",
    description:
      "General questions about GraphQL. Topics include schema, queries, mutations, and resolvers. Questions may involve writing or debugging GraphQL queries and schemas.",
    questionTypes: {
      mcq: 0.5,
      fill: 0.3,
      code: 0.1,
      trueorfalse: 0.1,
    },
    topics: [
      {
        id: "graphql-basics",
        name: "Schema & Types",
        description:
          "Questions on defining a GraphQL schema and its various types (Object, Scalar, Enum).",
      },
      {
        id: "graphql-queries",
        name: "Queries",
        description:
          "Questions on fetching data using GraphQL queries and fragments.",
      },
      {
        id: "graphql-mutations",
        name: "Mutations",
        description:
          "Questions on modifying data on the server using mutations.",
      },
      {
        id: "graphql-subscriptions",
        name: "Subscriptions",
        description:
          "Questions on real-time data fetching using subscriptions.",
      },
      {
        id: "graphql-resolvers",
        name: "Resolvers",
        description:
          "Questions on resolver functions that fetch data for a specific field.",
      },
      {
        id: "graphql-apollo",
        name: "Apollo Server",
        description:
          "Questions on building a GraphQL server with Apollo Server.",
      },
      {
        id: "graphql-relay",
        name: "Relay",
        description:
          "Questions on the Relay framework for building data-driven React applications.",
      },
      {
        id: "graphql-authentication",
        name: "Authentication",
        description:
          "Questions on implementing authentication in a GraphQL API.",
      },
      {
        id: "graphql-caching",
        name: "Caching",
        description:
          "Questions on caching strategies for GraphQL APIs.",
      },
      {
        id: "graphql-testing",
        name: "Testing",
        description:
          "Questions on testing GraphQL APIs and resolvers.",
      },
      {
        id: "graphql-federation",
        name: "Federation",
        description:
          "Questions on building a federated GraphQL architecture with multiple microservices.",
      },
      {
        id: "graphql-performance",
        name: "Performance Optimization",
        description:
          "Questions on optimizing the performance of GraphQL APIs.",
      },
    ],
  },
  {
    id: "sql",
    name: "SQL",
    icon: "🗄️",
    color: "bg-blue-700",
    category: "Database",
    description:
      "General questions about SQL. Topics include basic queries, joins, and indexing. Questions may require writing or completing a query.",
    questionTypes: {
      mcq: 0.5,
      fill: 0.3,
      code: 0.1,
      trueorfalse: 0.1,
    },
    topics: [
      {
        id: "sql-basics",
        name: "Basic Queries (SELECT, INSERT, UPDATE, DELETE)",
        description:
          "Questions on the fundamental SQL commands for data manipulation.",
      },
      {
        id: "sql-joins",
        name: "Joins",
        description:
          "Questions on different types of joins (INNER, LEFT, RIGHT, FULL) and when to use them.",
      },
      {
        id: "sql-functions",
        name: "Aggregate Functions",
        description:
          "Questions on using aggregate functions like `COUNT`, `SUM`, `AVG`, `MIN`, and `MAX`.",
      },
      {
        id: "sql-subqueries",
        name: "Subqueries",
        description:
          "Questions on using subqueries to nest queries within other queries.",
      },
      {
        id: "sql-indexes",
        name: "Indexes",
        description:
          "Questions on the purpose of indexes and how they improve query performance.",
      },
      {
        id: "sql-views",
        name: "Views",
        description:
          "Questions on creating and using views for simplified data access.",
      },
      {
        id: "sql-stored-procedures",
        name: "Stored Procedures",
        description:
          "Questions on creating and executing stored procedures for reusable code.",
      },
      {
        id: "sql-triggers",
        name: "Triggers",
        description:
          "Questions on using triggers to automatically execute a set of SQL statements.",
      },
      {
        id: "sql-transactions",
        name: "Transactions",
        description:
          "Questions on database transactions and the ACID properties.",
      },
      {
        id: "sql-normalization",
        name: "Database Normalization",
        description:
          "Questions on database normalization forms (1NF, 2NF, 3NF) and their purpose.",
      },
      {
        id: "sql-performance",
        name: "Query Optimization",
        description:
          "Questions on techniques for optimizing slow-running SQL queries.",
      },
      {
        id: "sql-window-functions",
        name: "Window Functions",
        description:
          "Questions on using window functions for advanced analytical queries.",
      },
    ],
  },
  {
    id: "sql-query-writing",
    name: "SQL Query Writing",
    icon: "✍️",
    color: "bg-blue-800",
    category: "Database",
    description:
      "These questions focus on practical application of SQL. Generate a scenario with sample table schemas and data. Ask the user to write a specific query to solve a problem. The prompt should clearly define the tables, columns, and the desired output.",
    questionTypes: {
      mcq: 0.0,
      fill: 1.0,
      code: 0.0,
      trueorfalse: 0.0,
    },
    topics: [
      {
        id: "sql-query-writing",
        name: "SQL Query Writing",
        description:
          "Practical scenario-based questions that require you to write a complete SQL query. The prompt will provide a problem description and table schemas.",
      },
    ],
  },
  {
    id: "mysql",
    name: "MySQL",
    icon: "🐬",
    color: "bg-orange-600",
    category: "Database",
    description:
      "General questions about MySQL. Topics include data types, storage engines, and administration. Questions may involve writing or debugging MySQL-specific queries.",
    questionTypes: {
      mcq: 0.6,
      fill: 0.2,
      code: 0.1,
      trueorfalse: 0.1,
    },
    topics: [
      {
        id: "mysql-installation",
        name: "Installation & Setup",
        description:
          "Questions on the process of installing and setting up MySQL.",
      },
      {
        id: "mysql-data-types",
        name: "Data Types",
        description:
          "Questions on MySQL-specific data types, including `VARCHAR`, `TEXT`, `INT`, `DATE`, etc.",
      },
      {
        id: "mysql-storage-engines",
        name: "Storage Engines",
        description:
          "Questions on different storage engines like InnoDB and MyISAM, and their use cases.",
      },
      {
        id: "mysql-replication",
        name: "Replication",
        description:
          "Questions on setting up and managing MySQL replication for high availability and scalability.",
      },
      {
        id: "mysql-partitioning",
        name: "Partitioning",
        description:
          "Questions on partitioning tables to improve performance and manage large datasets.",
      },
      {
        id: "mysql-backup",
        name: "Backup & Recovery",
        description:
          "Questions on different backup and recovery methods, including `mysqldump`.",
      },
      {
        id: "mysql-security",
        name: "Security",
        description:
          "Questions on securing a MySQL database, including user management and access control.",
      },
      {
        id: "mysql-performance",
        name: "Performance Tuning",
        description:
          "Questions on optimizing MySQL performance, including query tuning and index usage.",
      },
      {
        id: "mysql-clustering",
        name: "MySQL Cluster",
        description:
          "Questions on MySQL Cluster for high availability and real-time data.",
      },
      {
        id: "mysql-json",
        name: "JSON Data Type",
        description:
          "Questions on using the `JSON` data type in MySQL.",
      },
      {
        id: "mysql-full-text",
        name: "Full-Text Search",
        description:
          "Questions on implementing full-text search with MySQL.",
      },
      {
        id: "mysql-administration",
        name: "Database Administration",
        description:
          "Questions on day-to-day MySQL database administration tasks.",
      },
    ],
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    icon: "🐘",
    color: "bg-blue-800",
    category: "Database",
    description:
      "General questions about PostgreSQL. Topics include advanced data types, JSONB, and replication. Questions may involve writing or debugging PostgreSQL-specific queries.",
    questionTypes: {
      mcq: 0.6,
      fill: 0.2,
      code: 0.1,
      trueorfalse: 0.1,
    },
    topics: [
      {
        id: "postgresql-advanced-types",
        name: "Advanced Data Types",
        description:
          "Questions on PostgreSQL's rich set of data types, including `hstore` and geometric types.",
      },
      {
        id: "postgresql-jsonb",
        name: "JSONB",
        description:
          "Questions on the `JSONB` data type for storing and querying JSON data.",
      },
      {
        id: "postgresql-arrays",
        name: "Arrays",
        description:
          "Questions on using arrays as a data type in PostgreSQL.",
      },
      {
        id: "postgresql-extensions",
        name: "Extensions",
        description:
          "Questions on using extensions like PostGIS for spatial data.",
      },
      {
        id: "postgresql-functions",
        name: "Functions & Procedures",
        description:
          "Questions on creating and using stored functions and procedures.",
      },
      {
        id: "postgresql-triggers",
        name: "Triggers",
        description:
          "Questions on using triggers to execute functions automatically.",
      },
      {
        id: "postgresql-replication",
        name: "Replication",
        description:
          "Questions on different types of replication, including streaming replication.",
      },
      {
        id: "postgresql-partitioning",
        name: "Table Partitioning",
        description:
          "Questions on partitioning large tables for performance.",
      },
      {
        id: "postgresql-full-text",
        name: "Full-Text Search",
        description:
          "Questions on implementing full-text search with PostgreSQL.",
      },
      {
        id: "postgresql-performance",
        name: "Performance Tuning",
        description:
          "Questions on optimizing PostgreSQL performance, including query planning and index usage.",
      },
      {
        id: "postgresql-administration",
        name: "Administration",
        description:
          "Questions on day-to-day PostgreSQL database administration tasks.",
      },
      {
        id: "postgresql-gis",
        name: "PostGIS (Spatial Data)",
        description:
          "Questions on using the PostGIS extension for handling geographical data.",
      },
    ],
  },
  {
    id: "mongodb",
    name: "MongoDB",
    icon: "🍃",
    color: "bg-green-700",
    category: "Database",
    description:
      "General questions about MongoDB. Topics include documents, collections, the aggregation pipeline, and indexing. Questions may require writing or debugging MongoDB queries.",
    questionTypes: {
      mcq: 0.5,
      fill: 0.4,
      code: 0.1,
      trueorfalse: 0.0,
    },
    topics: [
      {
        id: "mongodb-documents",
        name: "Documents & Collections",
        description:
          "Questions on the fundamental concepts of MongoDB: documents and collections.",
      },
      {
        id: "mongodb-queries",
        name: "Queries & Filters",
        description:
          "Questions on querying data using `find()` and various filter operators.",
      },
      {
        id: "mongodb-aggregation",
        name: "Aggregation Pipeline",
        description:
          "Questions on using the aggregation pipeline for data transformation and analysis.",
      },
      {
        id: "mongodb-indexing",
        name: "Indexing",
        description:
          "Questions on creating and using indexes to improve query performance.",
      },
      {
        id: "mongodb-replication",
        name: "Replica Sets",
        description:
          "Questions on replica sets for high availability and data redundancy.",
      },
      {
        id: "mongodb-sharding",
        name: "Sharding",
        description:
          "Questions on sharding for horizontal scaling of large datasets.",
      },
      {
        id: "mongodb-transactions",
        name: "Transactions",
        description:
          "Questions on multi-document ACID transactions.",
      },
      {
        id: "mongodb-schema",
        name: "Schema Design",
        description:
          "Questions on best practices for designing a flexible and efficient MongoDB schema.",
      },
      {
        id: "mongodb-mongoose",
        name: "Mongoose ODM",
        description:
          "Questions on using Mongoose, a popular ODM for Node.js.",
      },
      {
        id: "mongodb-atlas",
        name: "MongoDB Atlas",
        description:
          "Questions on the MongoDB Atlas cloud service.",
      },
      {
        id: "mongodb-security",
        name: "Security",
        description:
          "Questions on securing a MongoDB database.",
      },
      {
        id: "mongodb-performance",
        name: "Performance Optimization",
        description:
          "Questions on techniques for optimizing MongoDB performance.",
      },
    ],
  },
  {
    id: "redis",
    name: "Redis",
    icon: "🔴",
    color: "bg-red-600",
    category: "Database",
    description:
      "General questions about Redis. Topics include data structures, caching, and pub/sub. Questions may involve writing or debugging Redis commands.",
    questionTypes: {
      mcq: 0.6,
      fill: 0.3,
      code: 0.1,
      trueorfalse: 0.0,
    },
    topics: [
      {
        id: "redis-data-structures",
        name: "Data Structures",
        description:
          "Questions on Redis's core data structures: Strings, Hashes, Lists, Sets, and Sorted Sets.",
      },
      {
        id: "redis-caching",
        name: "Caching Strategies",
        description:
          "Questions on using Redis as a cache, including write-through, write-behind, and cache-aside strategies.",
      },
      {
        id: "redis-pub-sub",
        name: "Pub/Sub",
        description:
          "Questions on Redis's publish-subscribe messaging system.",
      },
      {
        id: "redis-transactions",
        name: "Transactions",
        description:
          "Questions on using Redis transactions to execute a group of commands atomically.",
      },
      {
        id: "redis-lua-scripting",
        name: "Lua Scripting",
        description:
          "Questions on using Lua scripts for atomic operations and reduced network latency.",
      },
      {
        id: "redis-persistence",
        name: "Persistence",
        description:
          "Questions on Redis's persistence options: RDB (Redis Database) and AOF (Append-Only File).",
      },
      {
        id: "redis-clustering",
        name: "Clustering",
        description:
          "Questions on setting up and managing a Redis cluster for horizontal scaling.",
      },
      {
        id: "redis-sentinel",
        name: "Redis Sentinel",
        description:
          "Questions on using Redis Sentinel for high availability and monitoring.",
      },
      {
        id: "redis-streams",
        name: "Redis Streams",
        description:
          "Questions on using Redis Streams for building real-time message queues.",
      },
      {
        id: "redis-modules",
        name: "Redis Modules",
        description:
          "Questions on extending Redis functionality with modules like RedisJSON and RediSearch.",
      },
      {
        id: "redis-security",
        name: "Security",
        description:
          "Questions on securing a Redis instance.",
      },
      {
        id: "redis-monitoring",
        name: "Monitoring & Debugging",
        description:
          "Questions on monitoring Redis performance and debugging issues.",
      },
    ],
  },
  {
    id: "sqlite",
    name: "SQLite",
    icon: "📦",
    color: "bg-gray-500",
    category: "Database",
    description:
      "General questions about SQLite. Topics include basics, data types, and transactions. Questions may involve writing or debugging SQLite-specific queries.",
    questionTypes: {
      mcq: 0.7,
      fill: 0.2,
      code: 0.1,
      trueorfalse: 0.0,
    },
    topics: [
      {
        id: "sqlite-basics",
        name: "Basics & Setup",
        description:
          "Questions on the fundamental concepts of SQLite as a serverless database.",
      },
      {
        id: "sqlite-data-types",
        name: "Data Types",
        description:
          "Questions on SQLite's flexible data typing system.",
      },
      {
        id: "sqlite-constraints",
        name: "Constraints",
        description:
          "Questions on using constraints like `NOT NULL`, `UNIQUE`, and `PRIMARY KEY`.",
      },
      {
        id: "sqlite-indexes",
        name: "Indexes",
        description:
          "Questions on creating indexes to speed up queries.",
      },
      {
        id: "sqlite-views",
        name: "Views",
        description:
          "Questions on creating and using views.",
      },
      {
        id: "sqlite-triggers",
        name: "Triggers",
        description:
          "Questions on using triggers to automate actions on a database.",
      },
      {
        id: "sqlite-transactions",
        name: "Transactions",
        description:
          "Questions on SQLite's transaction model and its durability.",
      },
      {
        id: "sqlite-fts",
        name: "Full-Text Search",
        description:
          "Questions on implementing full-text search with SQLite's FTS extension.",
      },
      {
        id: "sqlite-json",
        name: "JSON Support",
        description:
          "Questions on storing and querying JSON data.",
      },
      {
        id: "sqlite-performance",
        name: "Performance Optimization",
        description:
          "Questions on optimizing SQLite database performance.",
      },
      {
        id: "sqlite-backup",
        name: "Backup & Recovery",
        description:
          "Questions on backing up and restoring an SQLite database.",
      },
      {
        id: "sqlite-extensions",
        name: "Extensions",
        description:
          "Questions on using SQLite extensions to add functionality.",
      },
    ],
  },
  {
    id: "cassandra",
    name: "Cassandra",
    icon: "🎰",
    color: "bg-purple-600",
    category: "Database",
    description:
      "General questions about Apache Cassandra. Topics include its distributed architecture, data modeling, and consistency levels. Questions may involve writing or debugging CQL queries.",
    questionTypes: {
      mcq: 0.8,
      fill: 0.1,
      code: 0.1,
      trueorfalse: 0.0,
    },
    topics: [
      {
        id: "cassandra-architecture",
        name: "Architecture",
        description:
          "Questions on the distributed, decentralized architecture of Cassandra.",
      },
      {
        id: "cassandra-data-modeling",
        name: "Data Modeling",
        description:
          "Questions on Cassandra's query-driven data modeling approach.",
      },
      {
        id: "cassandra-cql",
        name: "CQL (Cassandra Query Language)",
        description:
          "Questions on the Cassandra Query Language for interacting with the database.",
      },
      {
        id: "cassandra-partitioning",
        name: "Partitioning",
        description:
          "Questions on how Cassandra partitions data across nodes using a partition key.",
      },
      {
        id: "cassandra-replication",
        name: "Replication",
        description:
          "Questions on replication factors and strategies for data redundancy.",
      },
      {
        id: "cassandra-consistency",
        name: "Consistency Levels",
        description:
          "Questions on Cassandra's tunable consistency levels.",
      },
      {
        id: "cassandra-clustering",
        name: "Clustering",
        description:
          "Questions on how Cassandra nodes form a cluster to manage data.",
      },
      {
        id: "cassandra-performance",
        name: "Performance Tuning",
        description:
          "Questions on optimizing Cassandra cluster performance.",
      },
      {
        id: "cassandra-monitoring",
        name: "Monitoring",
        description:
          "Questions on monitoring a Cassandra cluster.",
      },
      {
        id: "cassandra-security",
        name: "Security",
        description:
          "Questions on securing a Cassandra cluster.",
      },
      {
        id: "cassandra-backup",
        name: "Backup & Recovery",
        description:
          "Questions on different backup and recovery methods.",
      },
      {
        id: "cassandra-migration",
        name: "Data Migration",
        description:
          "Questions on migrating data into and out of Cassandra.",
      },
    ],
  },
  {
    id: "firebase",
    name: "Firebase",
    icon: "🔥",
    color: "bg-orange-400",
    category: "Database",
    description:
      "General questions about Google Firebase. Topics include Realtime Database, Cloud Firestore, Authentication, and Cloud Functions. Questions may involve writing or debugging code for Firebase services.",
    questionTypes: {
      mcq: 0.5,
      fill: 0.4,
      code: 0.05,
      trueorfalse: 0.05,
    },
    topics: [
      {
        id: "firebase-realtime-db",
        name: "Realtime Database",
        description:
          "Questions on the Realtime Database and its JSON-based data model.",
      },
      {
        id: "firebase-firestore",
        name: "Cloud Firestore",
        description:
          "Questions on Cloud Firestore, its document-based data model, and query capabilities.",
      },
      {
        id: "firebase-auth",
        name: "Authentication",
        description:
          "Questions on implementing user authentication with various providers like email, social logins, etc.",
      },
      {
        id: "firebase-hosting",
        name: "Hosting",
        description:
          "Questions on deploying web applications and static content with Firebase Hosting.",
      },
      {
        id: "firebase-functions",
        name: "Cloud Functions",
        description:
          "Questions on writing and deploying serverless functions triggered by Firebase events or HTTP requests.",
      },
      {
        id: "firebase-storage",
        name: "Cloud Storage",
        description:
          "Questions on storing and retrieving user-generated content like images and videos.",
      },
      {
        id: "firebase-messaging",
        name: "Cloud Messaging",
        description:
          "Questions on sending push notifications to web and mobile apps.",
      },
      {
        id: "firebase-analytics",
        name: "Analytics",
        description:
          "Questions on using Firebase Analytics to track user behavior.",
      },
      {
        id: "firebase-security",
        name: "Security Rules",
        description:
          "Questions on writing and managing security rules for databases and storage.",
      },
      {
        id: "firebase-performance",
        name: "Performance Monitoring",
        description:
          "Questions on using Performance Monitoring to gain insights into app performance.",
      },
      {
        id: "firebase-remote-config",
        name: "Remote Config",
        description:
          "Questions on using Remote Config to change app behavior and appearance without publishing an app update.",
      },
      {
        id: "firebase-crashlytics",
        name: "Crashlytics",
        description:
          "Questions on Crashlytics for real-time crash reporting.",
      },
    ],
  },
  {
    id: "react-native",
    name: "React Native",
    icon: "📱",
    color: "bg-blue-500",
    category: "Mobile",
    description:
      "General questions about React Native. Topics include components, styling, navigation, and native modules. Questions may involve writing or debugging React Native code.",
    questionTypes: {
      mcq: 0.3,
      fill: 0.2,
      code: 0.4,
      trueorfalse: 0.1,
    },
    topics: [
      {
        id: "rn-basics",
        name: "Components & Navigation",
        description:
          "Questions on building UI components and navigating between screens.",
      },
      {
        id: "rn-styling",
        name: "Styling & Flexbox",
        description:
          "Questions on styling components using `StyleSheet` and Flexbox.",
      },
      {
        id: "rn-state",
        name: "State Management",
        description:
          "Questions on managing component state and using libraries like Redux or Context API.",
      },
      {
        id: "rn-navigation",
        name: "React Navigation",
        description:
          "Questions on using React Navigation for screen navigation.",
      },
      {
        id: "rn-native-modules",
        name: "Native Modules",
        description:
          "Questions on bridging JavaScript with native code (Java/Kotlin, Objective-C/Swift).",
      },
      {
        id: "rn-apis",
        name: "Device APIs",
        description:
          "Questions on accessing device features like the camera, geolocation, and sensors.",
      },
      {
        id: "rn-storage",
        name: "Local Storage",
        description:
          "Questions on using local storage solutions like `AsyncStorage`.",
      },
      {
        id: "rn-networking",
        name: "Networking",
        description:
          "Questions on making API requests using `fetch` or a library like Axios.",
      },
      {
        id: "rn-testing",
        name: "Testing",
        description:
          "Questions on testing React Native applications.",
      },
      {
        id: "rn-deployment",
        name: "Deployment",
        description:
          "Questions on deploying to the App Store and Google Play Store.",
      },
      {
        id: "rn-performance",
        name: "Performance Optimization",
        description:
          "Questions on optimizing performance, including debugging and bundling.",
      },
      {
        id: "rn-expo",
        name: "Expo Framework",
        description:
          "Questions on using the Expo framework for building and deploying React Native apps.",
      },
    ],
  },
  {
    id: "flutter",
    name: "Flutter",
    icon: "🦋",
    color: "bg-blue-400",
    category: "Mobile",
    description:
      "General questions about the Flutter framework. Topics include widgets, layouts, state management, and animations. Questions may involve writing or debugging Dart code in a Flutter context.",
    questionTypes: {
      mcq: 0.4,
      fill: 0.2,
      code: 0.3,
      trueorfalse: 0.1,
    },
    topics: [
      {
        id: "flutter-widgets",
        name: "Widgets",
        description:
          "Questions on the fundamental building blocks of Flutter: `StatelessWidget` and `StatefulWidget`.",
      },
      {
        id: "flutter-layouts",
        name: "Layouts",
        description:
          "Questions on creating responsive layouts using widgets like `Row`, `Column`, and `Stack`.",
      },
      {
        id: "flutter-state",
        name: "State Management",
        description:
          "Questions on different state management solutions like `Provider`, `Riverpod`, and `Bloc`.",
      },
      {
        id: "flutter-navigation",
        name: "Navigation & Routing",
        description:
          "Questions on navigating between screens using the `Navigator` and routes.",
      },
      {
        id: "flutter-animations",
        name: "Animations",
        description:
          "Questions on creating explicit and implicit animations.",
      },
      {
        id: "flutter-networking",
        name: "HTTP & Networking",
        description:
          "Questions on making API requests using the `http` package or a library like `dio`.",
      },
      {
        id: "flutter-storage",
        name: "Local Storage",
        description:
          "Questions on storing data locally using `shared_preferences` or SQLite.",
      },
      {
        id: "flutter-plugins",
        name: "Plugins & Packages",
        description:
          "Questions on using and creating plugins to access platform-specific features.",
      },
      {
        id: "flutter-testing",
        name: "Testing",
        description:
          "Questions on writing unit, widget, and integration tests.",
      },
      {
        id: "flutter-deployment",
        name: "Deployment",
        description:
          "Questions on deploying Flutter apps to the App Store and Google Play Store.",
      },
      {
        id: "flutter-performance",
        name: "Performance",
        description:
          "Questions on optimizing Flutter application performance.",
      },
      {
        id: "flutter-platform-channels",
        name: "Platform Channels",
        description:
          "Questions on communicating between Dart and native code using platform channels.",
      },
    ],
  },
  {
    id: "kotlin",
    name: "Kotlin",
    icon: "🟣",
    color: "bg-purple-500",
    category: "Mobile",
    description:
      "General questions about Kotlin. Topics include syntax, Android development basics, and coroutines. Questions may involve writing or debugging Kotlin code for Android.",
    questionTypes: {
      mcq: 0.4,
      fill: 0.2,
      code: 0.3,
      trueorfalse: 0.1,
    },
    topics: [
      {
        id: "kotlin-basics",
        name: "Syntax & Basics",
        description:
          "Questions on fundamental Kotlin syntax, including variable declarations, data types, and control flow.",
      },
      {
        id: "kotlin-android-basics",
        name: "Android Development Basics",
        description:
          "Questions on the fundamentals of Android development with Kotlin.",
      },
      {
        id: "kotlin-activities",
        name: "Activities & Fragments",
        description:
          "Questions on the building blocks of an Android application: activities and fragments.",
      },
      {
        id: "kotlin-ui",
        name: "UI Development",
        description:
          "Questions on building user interfaces with XML layouts and Jetpack Compose.",
      },
      {
        id: "kotlin-data",
        name: "Data Storage",
        description:
          "Questions on storing data locally using `SharedPreferences`, SQLite, or Room.",
      },
      {
        id: "kotlin-networking",
        name: "Networking",
        description:
          "Questions on making network requests with libraries like Retrofit or Ktor.",
      },
      {
        id: "kotlin-architecture",
        name: "Architecture Components",
        description:
          "Questions on Jetpack Architecture Components like ViewModel and LiveData.",
      },
      {
        id: "kotlin-jetpack",
        name: "Jetpack Compose",
        description:
          "Questions on Jetpack Compose, the modern toolkit for building native Android UI.",
      },
      {
        id: "kotlin-testing",
        name: "Testing",
        description:
          "Questions on writing unit and UI tests for Android applications.",
      },
      {
        id: "kotlin-coroutines",
        name: "Coroutines",
        description:
          "Questions on Kotlin Coroutines for asynchronous and concurrent programming.",
      },
      {
        id: "kotlin-multiplatform",
        name: "Kotlin Multiplatform",
        description:
          "Questions on using Kotlin Multiplatform to share code between different platforms.",
      },
      {
        id: "kotlin-deployment",
        name: "App Deployment",
        description:
          "Questions on preparing and deploying Android apps to the Google Play Store.",
      },
    ],
  },
  {
    id: "swift",
    name: "Swift",
    icon: "🍎",
    color: "bg-orange-500",
    category: "Mobile",
    description:
      "General questions about Swift. Topics include syntax, iOS development basics, and memory management. Questions may involve writing or debugging Swift code for iOS.",
    questionTypes: {
      mcq: 0.4,
      fill: 0.2,
      code: 0.3,
      trueorfalse: 0.1,
    },
    topics: [
      {
        id: "swift-basics",
        name: "Syntax & Basics",
        description:
          "Questions on fundamental Swift syntax, including variable declarations, optionals, and control flow.",
      },
      {
        id: "swift-ios-basics",
        name: "iOS Development Basics",
        description:
          "Questions on the fundamentals of iOS development with Swift.",
      },
      {
        id: "swift-ui",
        name: "UIKit & SwiftUI",
        description:
          "Questions on building user interfaces with both UIKit and SwiftUI.",
      },
      {
        id: "swift-mvc",
        name: "MVC Architecture",
        description:
          "Questions on the Model-View-Controller (MVC) design pattern in iOS development.",
      },
      {
        id: "swift-data",
        name: "Core Data",
        description:
          "Questions on using Core Data for data persistence.",
      },
      {
        id: "swift-networking",
        name: "Networking",
        description:
          "Questions on making network requests using `URLSession` and other networking frameworks.",
      },
      {
        id: "swift-autolayout",
        name: "Auto Layout",
        description:
          "Questions on using Auto Layout to create adaptive UIs.",
      },
      {
        id: "swift-navigation",
        name: "Navigation",
        description:
          "Questions on navigating between screens using `UINavigationController` and segues.",
      },
      {
        id: "swift-testing",
        name: "Testing",
        description:
          "Questions on writing unit and UI tests for iOS applications.",
      },
      {
        id: "swift-memory",
        name: "Memory Management",
        description:
          "Questions on Automatic Reference Counting (ARC) and preventing retain cycles.",
      },
      {
        id: "swift-app-store",
        name: "App Store Deployment",
        description:
          "Questions on the process of submitting an app to the App Store.",
      },
      {
        id: "swift-combine",
        name: "Combine Framework",
        description:
          "Questions on the Combine framework for reactive programming.",
      },
    ],
  },
  {
    id: "java-android",
    name: "Java (Android)",
    icon: "🤖",
    color: "bg-green-600",
    category: "Mobile",
    description:
      "General questions about Android development with Java. Topics include activities, fragments, and UI components. Questions may involve writing or debugging Java code for Android.",
    questionTypes: {
      mcq: 0.4,
      fill: 0.2,
      code: 0.3,
      trueorfalse: 0.1,
    },
    topics: [
      {
        id: "java-android-basics",
        name: "Android Development Basics",
        description:
          "Questions on the fundamental concepts of Android application development.",
      },
      {
        id: "java-android-activities",
        name: "Activities & Intents",
        description:
          "Questions on activities and intents for managing screens and communication.",
      },
      {
        id: "java-android-fragments",
        name: "Fragments",
        description:
          "Questions on fragments for modular UI development.",
      },
      {
        id: "java-android-ui",
        name: "UI Components",
        description:
          "Questions on common UI components like `TextView`, `Button`, and `RecyclerView`.",
      },
      {
        id: "java-android-layouts",
        name: "Layouts",
        description:
          "Questions on creating layouts with XML, including `LinearLayout`, `RelativeLayout`, and `ConstraintLayout`.",
      },
      {
        id: "java-android-data",
        name: "Data Storage",
        description:
          "Questions on local data storage options like `SharedPreferences` and SQLite.",
      },
      {
        id: "java-android-networking",
        name: "Networking",
        description:
          "Questions on making network requests using libraries like Volley or Retrofit.",
      },
      {
        id: "java-android-services",
        name: "Services & Background Tasks",
        description:
          "Questions on services for performing background operations.",
      },
      {
        id: "java-android-broadcasting",
        name: "Broadcast Receivers",
        description:
          "Questions on broadcast receivers for responding to system-wide events.",
      },
      {
        id: "java-android-testing",
        name: "Testing",
        description:
          "Questions on writing unit and instrumentation tests for Android.",
      },
      {
        id: "java-android-deployment",
        name: "App Deployment",
        description:
          "Questions on preparing and deploying Android apps to the Google Play Store.",
      },
      {
        id: "java-android-material",
        name: "Material Design",
        description:
          "Questions on implementing Material Design principles in Android apps.",
      },
    ],
  },
  {
    id: "objective-c",
    name: "Objective-C",
    icon: "🍏",
    color: "bg-green-700",
    category: "Mobile",
    description:
      "General questions about Objective-C. Topics include syntax, memory management, and the Cocoa framework. Questions may involve writing or debugging Objective-C code for iOS.",
    questionTypes: {
      mcq: 0.4,
      fill: 0.2,
      code: 0.3,
      trueorfalse: 0.1,
    },
    topics: [
      {
        id: "objc-basics",
        name: "Syntax & Basics",
        description:
          "Questions on fundamental Objective-C syntax, including message passing and class definitions.",
      },
      {
        id: "objc-memory",
        name: "Memory Management",
        description:
          "Questions on memory management, including Manual Retain/Release (MRR) and Automatic Reference Counting (ARC).",
      },
      {
        id: "objc-classes",
        name: "Classes & Objects",
        description:
          "Questions on defining and using classes and objects.",
      },
      {
        id: "objc-protocols",
        name: "Protocols & Delegates",
        description:
          "Questions on using protocols for communication between objects.",
      },
      {
        id: "objc-categories",
        name: "Categories & Extensions",
        description:
          "Questions on adding methods to existing classes using categories.",
      },
      {
        id: "objc-foundation",
        name: "Foundation Framework",
        description:
          "Questions on the Foundation framework for basic functionality like strings, arrays, and dates.",
      },
      {
        id: "objc-uikit",
        name: "UIKit",
        description:
          "Questions on using the UIKit framework for building iOS user interfaces.",
      },
      {
        id: "objc-mvc",
        name: "MVC Pattern",
        description:
          "Questions on the Model-View-Controller (MVC) design pattern.",
      },
      {
        id: "objc-core-data",
        name: "Core Data",
        description:
          "Questions on using Core Data for data persistence.",
      },
      {
        id: "objc-networking",
        name: "Networking",
        description:
          "Questions on making network requests with Objective-C.",
      },
      {
        id: "objc-blocks",
        name: "Blocks",
        description:
          "Questions on using blocks (anonymous functions) for callbacks.",
      },
      {
        id: "objc-legacy",
        name: "Legacy Code Maintenance",
        description:
          "Questions on working with and maintaining older Objective-C codebases.",
      },
    ],
  },
  {
    id: "docker",
    name: "Docker",
    icon: "🐳",
    color: "bg-blue-600",
    category: "DevOps",
    description:
      "General questions about Docker. Topics include containers, images, Dockerfiles, and networking. Questions may involve writing or debugging a Dockerfile.",
    questionTypes: {
      mcq: 0.5,
      fill: 0.2,
      code: 0.2,
      trueorfalse: 0.1,
    },
    topics: [
      {
        id: "docker-basics",
        name: "Containers & Images",
        description:
          "Questions on the fundamental concepts of containers and images.",
      },
      {
        id: "docker-dockerfile",
        name: "Dockerfile",
        description:
          "Questions on writing a Dockerfile to build a custom image.",
      },
      {
        id: "docker-compose",
        name: "Docker Compose",
        description:
          "Questions on using Docker Compose to define and run multi-container applications.",
      },
      {
        id: "docker-networking",
        name: "Networking",
        description:
          "Questions on how containers communicate with each other and the host.",
      },
      {
        id: "docker-volumes",
        name: "Volumes & Storage",
        description:
          "Questions on persistent data storage using volumes and bind mounts.",
      },
      {
        id: "docker-registry",
        name: "Docker Registry",
        description:
          "Questions on storing and sharing Docker images using a registry like Docker Hub.",
      },
      {
        id: "docker-security",
        name: "Security",
        description:
          "Questions on securing Docker containers and images.",
      },
      {
        id: "docker-multi-stage",
        name: "Multi-stage Builds",
        description:
          "Questions on using multi-stage builds to create smaller, more secure images.",
      },
      {
        id: "docker-swarm",
        name: "Docker Swarm",
        description:
          "Questions on using Docker Swarm for orchestrating containers.",
      },
      {
        id: "docker-monitoring",
        name: "Monitoring & Logging",
        description:
          "Questions on monitoring and logging containerized applications.",
      },
      {
        id: "docker-optimization",
        name: "Optimization",
        description:
          "Questions on optimizing Docker images and container performance.",
      },
      {
        id: "docker-troubleshooting",
        name: "Troubleshooting",
        description:
          "Questions on common Docker troubleshooting techniques.",
      },
    ],
  },
  {
    id: "kubernetes",
    name: "Kubernetes",
    icon: "☸️",
    color: "bg-blue-700",
    category: "DevOps",
    description:
      "General questions about Kubernetes. Topics include pods, services, deployments, and architecture. Questions may involve writing or debugging a YAML manifest.",
    questionTypes: {
      mcq: 0.5,
      fill: 0.2,
      code: 0.2,
      trueorfalse: 0.1,
    },
    topics: [
      {
        id: "k8s-architecture",
        name: "Architecture",
        description:
          "Questions on the main components of a Kubernetes cluster: master node, worker nodes, and their components.",
      },
      {
        id: "k8s-pods",
        name: "Pods",
        description:
          "Questions on the smallest deployable unit in Kubernetes: the pod.",
      },
      {
        id: "k8s-services",
        name: "Services",
        description:
          "Questions on services for exposing pods and load balancing.",
      },
      {
        id: "k8s-deployments",
        name: "Deployments",
        description:
          "Questions on deployments for managing replica sets and declarative updates.",
      },
      {
        id: "k8s-configmaps",
        name: "ConfigMaps & Secrets",
        description:
          "Questions on managing application configuration and sensitive data.",
      },
      {
        id: "k8s-volumes",
        name: "Volumes",
        description:
          "Questions on persistent storage using volumes.",
      },
      {
        id: "k8s-networking",
        name: "Networking",
        description:
          "Questions on how networking works within a Kubernetes cluster.",
      },
      {
        id: "k8s-ingress",
        name: "Ingress",
        description:
          "Questions on using Ingress to expose services to the outside world.",
      },
      {
        id: "k8s-helm",
        name: "Helm",
        description:
          "Questions on using Helm, the package manager for Kubernetes.",
      },
      {
        id: "k8s-monitoring",
        name: "Monitoring",
        description:
          "Questions on monitoring a Kubernetes cluster.",
      },
      {
        id: "k8s-security",
        name: "Security",
        description:
          "Questions on securing a Kubernetes cluster.",
      },
      {
        id: "k8s-troubleshooting",
        name: "Troubleshooting",
        description:
          "Questions on common Kubernetes troubleshooting techniques.",
      },
    ],
  },
  {
    id: "terraform",
    name: "Terraform",
    icon: "🌍",
    color: "bg-green-600",
    category: "DevOps",
    description:
      "General questions about Terraform. Topics include providers, resources, and state management. Questions may involve writing or debugging a Terraform configuration.",
    questionTypes: {
      mcq: 0.5,
      fill: 0.2,
      code: 0.2,
      trueorfalse: 0.1,
    },
    topics: [
      {
        id: "terraform-basics",
        name: "Basics & HCL",
        description:
          "Questions on the fundamental concepts of Infrastructure as Code and the HashiCorp Configuration Language (HCL).",
      },
      {
        id: "terraform-providers",
        name: "Providers",
        description:
          "Questions on how providers interact with different cloud platforms and services.",
      },
      {
        id: "terraform-resources",
        name: "Resources",
        description:
          "Questions on defining and managing resources like virtual machines, networks, and databases.",
      },
      {
        id: "terraform-variables",
        name: "Variables",
        description:
          "Questions on using input variables for flexible configurations.",
      },
      {
        id: "terraform-modules",
        name: "Modules",
        description:
          "Questions on creating and using reusable modules.",
      },
      {
        id: "terraform-state",
        name: "State Management",
        description:
          "Questions on the Terraform state file and how it tracks managed resources.",
      },
      {
        id: "terraform-workspaces",
        name: "Workspaces",
        description:
          "Questions on using workspaces to manage multiple environments.",
      },
      {
        id: "terraform-remote-state",
        name: "Remote State",
        description:
          "Questions on storing and sharing state files remotely.",
      },
      {
        id: "terraform-provisioners",
        name: "Provisioners",
        description:
          "Questions on using provisioners to execute scripts on local or remote machines.",
      },
      {
        id: "terraform-import",
        name: "Import & Migration",
        description:
          "Questions on importing existing resources into a Terraform state.",
      },
      {
        id: "terraform-best-practices",
        name: "Best Practices",
        description:
          "Questions on best practices for writing maintainable and scalable Terraform code.",
      },
      {
        id: "terraform-testing",
        name: "Testing",
        description:
          "Questions on writing tests for Terraform configurations.",
      },
    ],
  },
  {
    id: "ansible",
    name: "Ansible",
    icon: "🎯",
    color: "bg-red-600",
    category: "DevOps",
    description:
      "General questions about Ansible. Topics include playbooks, modules, and roles. Questions may involve writing or debugging a YAML playbook.",
    questionTypes: {
      mcq: 0.5,
      fill: 0.2,
      code: 0.2,
      trueorfalse: 0.1,
    },
    topics: [
      {
        id: "ansible-basics",
        name: "Basics & Inventory",
        description:
          "Questions on the fundamental concepts of Ansible and managing an inventory of hosts.",
      },
      {
        id: "ansible-playbooks",
        name: "Playbooks",
        description:
          "Questions on writing playbooks to orchestrate tasks and configurations.",
      },
      {
        id: "ansible-modules",
        name: "Modules",
        description:
          "Questions on using Ansible modules to perform specific tasks.",
      },
      {
        id: "ansible-variables",
        name: "Variables",
        description:
          "Questions on defining and using variables in playbooks and inventory files.",
      },
      {
        id: "ansible-conditionals",
        name: "Conditionals & Loops",
        description:
          "Questions on using conditionals and loops for dynamic playbooks.",
      },
      {
        id: "ansible-handlers",
        name: "Handlers",
        description:
          "Questions on handlers for performing actions only when a change is made.",
      },
      {
        id: "ansible-roles",
        name: "Roles",
        description:
          "Questions on organizing playbooks into reusable roles.",
      },
      {
        id: "ansible-vault",
        name: "Ansible Vault",
        description:
          "Questions on using Ansible Vault for encrypting sensitive data.",
      },
      {
        id: "ansible-templates",
        name: "Templates (Jinja2)",
        description:
          "Questions on using Jinja2 templates for dynamic configuration files.",
      },
      {
        id: "ansible-galaxy",
        name: "Ansible Galaxy",
        description:
          "Questions on sharing and reusing roles with Ansible Galaxy.",
      },
      {
        id: "ansible-testing",
        name: "Testing",
        description:
          "Questions on testing Ansible playbooks and roles.",
      },
      {
        id: "ansible-best-practices",
        name: "Best Practices",
        description:
          "Questions on best practices for writing clean and maintainable Ansible code.",
      },
    ],
  },
  {
    id: "jenkins",
    name: "Jenkins",
    icon: "🤖",
    color: "bg-red-700",
    category: "DevOps",
    description:
      "General questions about Jenkins. Topics include jobs, pipelines, and plugins. Questions may involve writing or debugging a Jenkinsfile.",
    questionTypes: {
      mcq: 0.5,
      fill: 0.2,
      code: 0.2,
      trueorfalse: 0.1,
    },
    topics: [
      {
        id: "jenkins-basics",
        name: "Basics & Installation",
        description:
          "Questions on the fundamental concepts of Jenkins and its installation.",
      },
      {
        id: "jenkins-jobs",
        name: "Jobs & Builds",
        description:
          "Questions on creating and running different types of jobs.",
      },
      {
        id: "jenkins-pipeline",
        name: "Pipeline as Code",
        description:
          "Questions on defining CI/CD pipelines using a Jenkinsfile.",
      },
      {
        id: "jenkins-plugins",
        name: "Plugins",
        description:
          "Questions on using and managing Jenkins plugins to extend functionality.",
      },
      {
        id: "jenkins-scm",
        name: "Source Code Management",
        description:
          "Questions on integrating Jenkins with Git and other SCM systems.",
      },
      {
        id: "jenkins-triggers",
        name: "Build Triggers",
        description:
          "Questions on how to trigger a build automatically.",
      },
      {
        id: "jenkins-distributed",
        name: "Distributed Builds",
        description:
          "Questions on setting up and managing a Jenkins master-agent architecture.",
      },
      {
        id: "jenkins-security",
        name: "Security",
        description:
          "Questions on securing Jenkins and managing user permissions.",
      },
      {
        id: "jenkins-monitoring",
        name: "Monitoring",
        description:
          "Questions on monitoring Jenkins and its build jobs.",
      },
      {
        id: "jenkins-backup",
        name: "Backup & Recovery",
        description:
          "Questions on backing up and restoring a Jenkins instance.",
      },
      {
        id: "jenkins-scripting",
        name: "Groovy Scripting",
        description:
          "Questions on using Groovy for writing Jenkins pipelines.",
      },
      {
        id: "jenkins-integration",
        name: "Tool Integration",
        description:
          "Questions on integrating Jenkins with other DevOps tools like Docker and SonarQube.",
      },
    ],
  },
  {
    id: "aws",
    name: "AWS",
    icon: "☁️",
    color: "bg-yellow-600",
    category: "Cloud",
    description:
      "General questions about Amazon Web Services. Topics include core services like EC2, S3, and Lambda, as well as security and networking.",
    questionTypes: {
      mcq: 0.6,
      fill: 0.2,
      code: 0.1,
      trueorfalse: 0.1,
    },
    topics: [
      {
        id: "aws-ec2",
        name: "EC2",
        description:
          "Questions on Elastic Compute Cloud (EC2) for virtual servers.",
      },
      {
        id: "aws-s3",
        name: "S3",
        description:
          "Questions on Simple Storage Service (S3) for object storage.",
      },
      {
        id: "aws-rds",
        name: "RDS",
        description:
          "Questions on Relational Database Service (RDS) for managed databases.",
      },
      {
        id: "aws-lambda",
        name: "Lambda",
        description:
          "Questions on Lambda for serverless computing.",
      },
      {
        id: "aws-vpc",
        name: "VPC",
        description:
          "Questions on Virtual Private Cloud (VPC) for isolated networks.",
      },
      {
        id: "aws-iam",
        name: "IAM",
        description:
          "Questions on Identity and Access Management (IAM) for managing users and permissions.",
      },
      {
        id: "aws-cloudformation",
        name: "CloudFormation",
        description:
          "Questions on CloudFormation for Infrastructure as Code.",
      },
      {
        id: "aws-api-gateway",
        name: "API Gateway",
        description:
          "Questions on API Gateway for creating and managing APIs.",
      },
      {
        id: "aws-cloudwatch",
        name: "CloudWatch",
        description:
          "Questions on CloudWatch for monitoring and observability.",
      },
      {
        id: "aws-eks",
        name: "EKS",
        description:
          "Questions on Elastic Kubernetes Service (EKS) for managed Kubernetes.",
      },
      {
        id: "aws-route53",
        name: "Route 53",
        description:
          "Questions on Route 53 for DNS management.",
      },
      {
        id: "aws-security",
        name: "Security Best Practices",
        description:
          "Questions on general security best practices for AWS.",
      },
    ],
  },
  {
    id: "azure",
    name: "Azure",
    icon: "🌐",
    color: "bg-blue-600",
    category: "Cloud",
    description:
      "General questions about Microsoft Azure. Topics include virtual machines, storage, and serverless functions.",
    questionTypes: {
      mcq: 0.6,
      fill: 0.2,
      code: 0.1,
      trueorfalse: 0.1,
    },
    topics: [
      {
        id: "azure-vm",
        name: "Virtual Machines",
        description:
          "Questions on creating and managing virtual machines.",
      },
      {
        id: "azure-storage",
        name: "Storage Solutions",
        description:
          "Questions on different storage options like Blob Storage and File Storage.",
      },
      {
        id: "azure-sql",
        name: "Azure SQL Database",
        description:
          "Questions on the managed relational database service.",
      },
      {
        id: "azure-functions",
        name: "Azure Functions",
        description:
          "Questions on serverless computing with Azure Functions.",
      },
      {
        id: "azure-app-service",
        name: "App Service",
        description:
          "Questions on the platform for building and deploying web apps.",
      },
      {
        id: "azure-aks",
        name: "Azure Kubernetes Service",
        description:
          "Questions on the managed Kubernetes service.",
      },
      {
        id: "azure-ad",
        name: "Active Directory",
        description:
          "Questions on Azure Active Directory for identity and access management.",
      },
      {
        id: "azure-devops",
        name: "Azure DevOps",
        description:
          "Questions on the DevOps services for planning, development, and deployment.",
      },
      {
        id: "azure-arm",
        name: "ARM Templates",
        description:
          "Questions on using ARM templates for Infrastructure as Code.",
      },
      {
        id: "azure-monitor",
        name: "Azure Monitor",
        description:
          "Questions on monitoring and diagnostics.",
      },
      {
        id: "azure-networking",
        name: "Networking",
        description:
          "Questions on virtual networks and subnets.",
      },
      {
        id: "azure-security",
        name: "Security",
        description:
          "Questions on securing Azure resources.",
      },
    ],
  },
  {
    id: "gcp",
    name: "Google Cloud",
    icon: "🌈",
    color: "bg-red-500",
    category: "Cloud",
    description:
      "General questions about Google Cloud Platform. Topics include Compute Engine, Cloud Storage, and serverless functions.",
    questionTypes: {
      mcq: 0.6,
      fill: 0.2,
      code: 0.1,
      trueorfalse: 0.1,
    },
    topics: [
      {
        id: "gcp-compute",
        name: "Compute Engine",
        description:
          "Questions on creating and managing virtual machines.",
      },
      {
        id: "gcp-storage",
        name: "Cloud Storage",
        description:
          "Questions on object storage with Cloud Storage.",
      },
      {
        id: "gcp-sql",
        name: "Cloud SQL",
        description:
          "Questions on the managed relational database service.",
      },
      {
        id: "gcp-functions",
        name: "Cloud Functions",
        description:
          "Questions on serverless computing with Cloud Functions.",
      },
      {
        id: "gcp-app-engine",
        name: "App Engine",
        description:
          "Questions on the platform for building and deploying web apps.",
      },
      {
        id: "gcp-gke",
        name: "Google Kubernetes Engine",
        description:
          "Questions on the managed Kubernetes service.",
      },
      {
        id: "gcp-iam",
        name: "Identity & Access Management",
        description:
          "Questions on managing users and permissions.",
      },
      {
        id: "gcp-networking",
        name: "Networking",
        description:
          "Questions on virtual networks and firewalls.",
      },
      {
        id: "gcp-monitoring",
        name: "Cloud Monitoring",
        description:
          "Questions on monitoring and logging.",
      },
      {
        id: "gcp-deployment",
        name: "Deployment Manager",
        description:
          "Questions on using Deployment Manager for Infrastructure as Code.",
      },
      {
        id: "gcp-bigquery",
        name: "BigQuery",
        description:
          "Questions on the serverless data warehouse.",
      },
      {
        id: "gcp-security",
        name: "Security",
        description:
          "Questions on securing Google Cloud resources.",
      },
    ],
  },
  {
    id: "digitalocean",
    name: "DigitalOcean",
    icon: "🐬",
    color: "bg-blue-500",
    category: "Cloud",
    description:
      "General questions about DigitalOcean. Topics include Droplets, Spaces, and App Platform.",
    questionTypes: {
      mcq: 0.6,
      fill: 0.2,
      code: 0.1,
      trueorfalse: 0.1,
    },
    topics: [
      {
        id: "do-droplets",
        name: "Droplets",
        description:
          "Questions on the fundamental virtual machines called Droplets.",
      },
      {
        id: "do-spaces",
        name: "Spaces",
        description:
          "Questions on object storage with Spaces.",
      },
      {
        id: "do-databases",
        name: "Managed Databases",
        description:
          "Questions on the managed relational and NoSQL databases.",
      },
      {
        id: "do-kubernetes",
        name: "Kubernetes",
        description:
          "Questions on the managed Kubernetes service.",
      },
      {
        id: "do-app-platform",
        name: "App Platform",
        description:
          "Questions on the platform for building and deploying web apps.",
      },
      {
        id: "do-load-balancers",
        name: "Load Balancers",
        description:
          "Questions on using load balancers to distribute traffic.",
      },
      {
        id: "do-networking",
        name: "Networking",
        description:
          "Questions on virtual private clouds and firewalls.",
      },
      {
        id: "do-monitoring",
        name: "Monitoring",
        description:
          "Questions on monitoring Droplets and other resources.",
      },
      {
        id: "do-snapshots",
        name: "Snapshots & Backups",
        description:
          "Questions on creating snapshots and backups of Droplets.",
      },
      {
        id: "do-firewall",
        name: "Cloud Firewall",
        description:
          "Questions on securing resources with the cloud firewall.",
      },
      {
        id: "do-volumes",
        name: "Block Storage",
        description:
          "Questions on using block storage for persistent data.",
      },
      {
        id: "do-api",
        name: "API & CLI",
        description:
          "Questions on interacting with DigitalOcean programmatically using the API and CLI.",
      },
    ],
  },
  {
    id: "openstack",
    name: "OpenStack",
    icon: "🔧",
    color: "bg-gray-700",
    category: "Cloud",
    description:
      "General questions about OpenStack. Topics include its architecture, components, and administration.",
    questionTypes: {
      mcq: 0.6,
      fill: 0.2,
      code: 0.1,
      trueorfalse: 0.1,
    },
    topics: [
      {
        id: "openstack-architecture",
        name: "Architecture",
        description:
          "Questions on the overall architecture of OpenStack.",
      },
      {
        id: "openstack-nova",
        name: "Nova (Compute)",
        description:
          "Questions on the Nova service for managing virtual servers.",
      },
      {
        id: "openstack-neutron",
        name: "Neutron (Networking)",
        description:
          "Questions on the Neutron service for networking.",
      },
      {
        id: "openstack-cinder",
        name: "Cinder (Block Storage)",
        description:
          "Questions on the Cinder service for block storage.",
      },
      {
        id: "openstack-swift",
        name: "Swift (Object Storage)",
        description:
          "Questions on the Swift service for object storage.",
      },
      {
        id: "openstack-keystone",
        name: "Keystone (Identity)",
        description:
          "Questions on the Keystone service for identity and access management.",
      },
      {
        id: "openstack-glance",
        name: "Glance (Image)",
        description:
          "Questions on the Glance service for managing virtual machine images.",
      },
      {
        id: "openstack-horizon",
        name: "Horizon (Dashboard)",
        description:
          "Questions on the Horizon web-based dashboard.",
      },
      {
        id: "openstack-heat",
        name: "Heat (Orchestration)",
        description:
          "Questions on the Heat service for orchestration.",
      },
      {
        id: "openstack-deployment",
        name: "Deployment",
        description:
          "Questions on deploying an OpenStack cloud.",
      },
      {
        id: "openstack-troubleshooting",
        name: "Troubleshooting",
        description:
          "Questions on common OpenStack troubleshooting techniques.",
      },
      {
        id: "openstack-administration",
        name: "Administration",
        description:
          "Questions on day-to-day OpenStack administration tasks.",
      },
    ],
  },
  {
    id: "dsa",
    name: "Data Structures & Algorithms",
    icon: "🌳",
    color: "bg-indigo-600",
    category: "CS Fundamentals",
    description:
      "General questions about Data Structures and Algorithms. Topics include arrays, linked lists, trees, and common algorithms like sorting and searching. Questions may involve writing or debugging pseudocode or code snippets.",
    questionTypes: {
      mcq: 0.3,
      fill: 0.1,
      code: 0.5,
      trueorfalse: 0.1,
    },
    topics: [
      {
        id: "dsa-arrays",
        name: "Arrays & Strings",
        description:
          "Questions on fundamental data structures like arrays and strings, including common operations and problems.",
      },
      {
        id: "dsa-linked-lists",
        name: "Linked Lists",
        description:
          "Questions on singly, doubly, and circular linked lists, and their operations.",
      },
      {
        id: "dsa-stacks-queues",
        name: "Stacks & Queues",
        description:
          "Questions on LIFO (Last-In, First-Out) and FIFO (First-In, First-Out) data structures.",
      },
      {
        id: "dsa-trees",
        name: "Trees & Binary Trees",
        description:
          "Questions on tree data structures, including binary search trees, traversal algorithms, and balancing.",
      },
      {
        id: "dsa-graphs",
        name: "Graphs",
        description:
          "Questions on graph data structures, including representations (adjacency list/matrix) and traversal algorithms (BFS/DFS).",
      },
      {
        id: "dsa-hashing",
        name: "Hashing",
        description:
          "Questions on hash tables, hash functions, and collision resolution techniques.",
      },
      {
        id: "dsa-sorting",
        name: "Sorting Algorithms",
        description:
          "Questions on common sorting algorithms like Bubble Sort, Merge Sort, and Quick Sort, including their time and space complexity.",
      },
      {
        id: "dsa-searching",
        name: "Searching Algorithms",
        description:
          "Questions on searching algorithms like linear search and binary search.",
      },
      {
        id: "dsa-dynamic-programming",
        name: "Dynamic Programming",
        description:
          "Questions on solving complex problems by breaking them down into simpler overlapping subproblems.",
      },
      {
        id: "dsa-greedy",
        name: "Greedy Algorithms",
        description:
          "Questions on greedy algorithms, where a locally optimal choice is made at each stage with the hope of finding a global optimum.",
      },
      {
        id: "dsa-backtracking",
        name: "Backtracking",
        description:
          "Questions on backtracking algorithms for solving problems by trying to build a solution incrementally.",
      },
      {
        id: "dsa-complexity",
        name: "Time & Space Complexity",
        description:
          "Questions on analyzing the time and space complexity of algorithms using Big O notation.",
      },
    ],
  },
  {
    id: "os",
    name: "Operating Systems",
    icon: "💻",
    color: "bg-blue-500",
    category: "CS Fundamentals",
    description:
      "General questions about Operating Systems. Topics include processes, threads, memory management, and file systems. Questions may involve theoretical concepts or practical scenarios.",
    questionTypes: {
      mcq: 0.7,
      fill: 0.2,
      code: 0.05,
      trueorfalse: 0.05,
    },
    topics: [
      {
        id: "os-processes",
        name: "Processes & Threads",
        description:
          "Questions on the differences between processes and threads, and their management.",
      },
      {
        id: "os-scheduling",
        name: "CPU Scheduling",
        description:
          "Questions on different CPU scheduling algorithms like FCFS, SJF, and Round Robin.",
      },
      {
        id: "os-synchronization",
        name: "Process Synchronization",
        description:
          "Questions on synchronization problems and solutions like semaphores, mutexes, and monitors.",
      },
      {
        id: "os-deadlocks",
        name: "Deadlocks",
        description:
          "Questions on the four conditions for deadlock, and methods for prevention, avoidance, detection, and recovery.",
      },
      {
        id: "os-memory",
        name: "Memory Management",
        description:
          "Questions on memory management techniques like paging, segmentation, and swapping.",
      },
      {
        id: "os-virtual-memory",
        name: "Virtual Memory",
        description:
          "Questions on virtual memory and its implementation using paging and demand paging.",
      },
      {
        id: "os-file-systems",
        name: "File Systems",
        description:
          "Questions on the structure and implementation of file systems.",
      },
      {
        id: "os-io",
        name: "I/O Systems",
        description:
          "Questions on I/O hardware and software, and interrupt handling.",
      },
      {
        id: "os-security",
        name: "Protection & Security",
        description:
          "Questions on operating system protection and security mechanisms.",
      },
      {
        id: "os-distributed",
        name: "Distributed Systems",
        description:
          "Questions on concepts of distributed operating systems.",
      },
      {
        id: "os-virtualization",
        name: "Virtualization",
        description:
          "Questions on virtualization and hypervisors.",
      },
      {
        id: "os-case-studies",
        name: "Case Studies (Linux, Windows)",
        description:
          "Questions on the design and implementation of popular operating systems like Linux and Windows.",
      },
      {
        id: "os-problems",
        name: "Problems in Operating Systems ( numericals )",
        description:
          "Numerical problems related to CPU scheduling, memory management (e.g., page replacement algorithms), and disk scheduling.",
      },
    ],
  },
  {
    id: "dbms",
    name: "Database Management Systems",
    icon: "🗄️",
    color: "bg-green-500",
    category: "CS Fundamentals",
    description:
      "General questions about DBMS. Topics include the ER model, relational model, normalization, and transactions. Questions may involve theoretical concepts or practical scenarios.",
    questionTypes: {
      mcq: 0.6,
      fill: 0.2,
      code: 0.1,
      trueorfalse: 0.1,
    },
    topics: [
      {
        id: "dbms-er-model",
        name: "ER Model",
        description:
          "Questions on Entity-Relationship (ER) modeling, including entities, attributes, and relationships.",
      },
      {
        id: "dbms-relational-model",
        name: "Relational Model",
        description:
          "Questions on the relational model, including relations, tuples, attributes, and keys.",
      },
      {
        id: "dbms-normalization",
        name: "Normalization",
        description:
          "Questions on database normalization forms (1NF, 2NF, 3NF, BCNF) and their purpose.",
      },
      {
        id: "dbms-sql",
        name: "SQL",
        description:
          "Questions on the Structured Query Language (SQL) for managing relational databases.",
      },
      {
        id: "dbms-transactions",
        name: "Transactions",
        description:
          "Questions on database transactions and the ACID properties.",
      },
      {
        id: "dbms-concurrency",
        name: "Concurrency Control",
        description:
          "Questions on concurrency control mechanisms like locking and two-phase locking.",
      },
      {
        id: "dbms-recovery",
        name: "Recovery Systems",
        description:
          "Questions on database recovery techniques after a system failure.",
      },
      {
        id: "dbms-indexing",
        name: "Indexing & B-Trees",
        description:
          "Questions on the purpose of indexing and the structure of B-Trees and B+ Trees.",
      },
      {
        id: "dbms-query-processing",
        name: "Query Processing",
        description:
          "Questions on the steps involved in processing a query.",
      },
      {
        id: "dbms-optimization",
        name: "Query Optimization",
        description:
          "Questions on techniques for optimizing query execution plans.",
      },
      {
        id: "dbms-distributed",
        name: "Distributed Databases",
        description:
          "Questions on the concepts and challenges of distributed databases.",
      },
      {
        id: "dbms-nosql",
        name: "NoSQL Databases",
        description:
          "Questions on the characteristics and types of NoSQL databases.",
      },
    ],
  },
  {
    id: "cn",
    name: "Computer Networks",
    icon: "🌐",
    color: "bg-cyan-500",
    category: "CS Fundamentals",
    description:
      "General questions about Computer Networks. Topics include the OSI model, TCP/IP, and various networking protocols. Questions may involve theoretical concepts or numerical problems.",
    questionTypes: {
      mcq: 0.7,
      fill: 0.2,
      code: 0.05,
      trueorfalse: 0.05,
    },
    topics: [
      {
        id: "cn-osi-model",
        name: "OSI Model",
        description:
          "Questions on the seven layers of the OSI model and their functions.",
      },
      {
        id: "cn-tcp-ip",
        name: "TCP/IP Protocol Suite",
        description:
          "Questions on the TCP/IP model and its core protocols like TCP, UDP, IP, and HTTP.",
      },
      {
        id: "cn-physical-layer",
        name: "Physical Layer",
        description:
          "Questions on the physical layer, including transmission media and signals.",
      },
      {
        id: "cn-data-link",
        name: "Data Link Layer",
        description:
          "Questions on the data link layer, including framing, error control, and flow control.",
      },
      {
        id: "cn-network-layer",
        name: "Network Layer",
        description:
          "Questions on the network layer, including IP addressing, routing, and subnetting.",
      },
      {
        id: "cn-transport-layer",
        name: "Transport Layer",
        description:
          "Questions on the transport layer, including TCP and UDP protocols.",
      },
      {
        id: "cn-application-layer",
        name: "Application Layer",
        description:
          "Questions on the application layer and protocols like HTTP, DNS, and FTP.",
      },
      {
        id: "cn-routing",
        name: "Routing Algorithms",
        description:
          "Questions on different routing algorithms like Dijkstra's and Bellman-Ford.",
      },
      {
        id: "cn-congestion",
        name: "Congestion Control",
        description:
          "Questions on congestion control mechanisms in TCP.",
      },
      {
        id: "cn-security",
        name: "Network Security",
        description:
          "Questions on network security concepts like firewalls, VPNs, and encryption.",
      },
      {
        id: "cn-wireless",
        name: "Wireless Networks",
        description:
          "Questions on wireless networking standards and protocols.",
      },
      {
        id: "cn-performance",
        name: "Network Performance",
        description:
          "Questions on network performance metrics like throughput and latency.",
      },
      {
        id: "cn-numericals",
        name: "Numericals",
        description:
          "Numerical problems related to network layer concepts like IP addressing and subnetting, as well as transport layer concepts like window size and throughput.",
      },
    ],
  },
  {
    id: "compiler",
    name: "Compiler Design",
    icon: "🔧",
    color: "bg-gray-600",
    category: "CS Fundamentals",
    description:
      "General questions about Compiler Design. Topics include the phases of a compiler, lexical analysis, and syntax analysis. Questions may involve theoretical concepts or practical scenarios.",
    questionTypes: {
      mcq: 0.6,
      fill: 0.3,
      code: 0.05,
      trueorfalse: 0.05,
    },
    topics: [
      {
        id: "compiler-lexical",
        name: "Lexical Analysis",
        description:
          "Questions on the lexical analysis phase, including tokens, lexemes, and regular expressions.",
      },
      {
        id: "compiler-syntax",
        name: "Syntax Analysis",
        description:
          "Questions on the syntax analysis phase, including context-free grammars and parsing.",
      },
      {
        id: "compiler-semantic",
        name: "Semantic Analysis",
        description:
          "Questions on the semantic analysis phase, including type checking and symbol tables.",
      },
      {
        id: "compiler-intermediate",
        name: "Intermediate Code Generation",
        description:
          "Questions on generating intermediate representations like three-address code.",
      },
      {
        id: "compiler-optimization",
        name: "Code Optimization",
        description:
          "Questions on techniques for optimizing intermediate or target code.",
      },
      {
        id: "compiler-target",
        name: "Target Code Generation",
        description:
          "Questions on generating machine code from intermediate code.",
      },
      {
        id: "compiler-symbol-table",
        name: "Symbol Table",
        description:
          "Questions on the structure and use of a symbol table.",
      },
      {
        id: "compiler-error-handling",
        name: "Error Handling",
        description:
          "Questions on error detection and recovery in a compiler.",
      },
      {
        id: "compiler-runtime",
        name: "Runtime Environments",
        description:
          "Questions on runtime environments, including stack and heap allocation.",
      },
      {
        id: "compiler-parsing",
        name: "Parsing Techniques",
        description:
          "Questions on top-down and bottom-up parsing techniques.",
      },
      {
        id: "compiler-automata",
        name: "Finite Automata",
        description:
          "Questions on finite automata and their use in lexical analysis.",
      },
      {
        id: "compiler-grammars",
        name: "Context-Free Grammars",
        description:
          "Questions on context-free grammars and their use in syntax analysis.",
      },
    ],
  },
  {
    id: "ai-ml",
    name: "AI & Machine Learning",
    icon: "🤖",
    color: "bg-purple-600",
    category: "CS Fundamentals",
    description:
      "General questions about Artificial Intelligence and Machine Learning. Topics include supervised and unsupervised learning, neural networks, and common algorithms. Questions may involve theoretical concepts or practical scenarios.",
    questionTypes: {
      mcq: 0.5,
      fill: 0.2,
      code: 0.2,
      trueorfalse: 0.1,
    },
    topics: [
      {
        id: "ml-supervised",
        name: "Supervised Learning",
        description:
          "Questions on supervised learning algorithms like linear regression and classification.",
      },
      {
        id: "ml-unsupervised",
        name: "Unsupervised Learning",
        description:
          "Questions on unsupervised learning algorithms like clustering and dimensionality reduction.",
      },
      {
        id: "ml-reinforcement",
        name: "Reinforcement Learning",
        description:
          "Questions on reinforcement learning, where an agent learns to make decisions by trial and error.",
      },
      {
        id: "ml-neural-networks",
        name: "Neural Networks",
        description:
          "Questions on the fundamentals of neural networks, including neurons, layers, and activation functions.",
      },
      {
        id: "ml-deep-learning",
        name: "Deep Learning",
        description:
          "Questions on deep learning architectures like Convolutional Neural Networks (CNNs) and Recurrent Neural Networks (RNNs).",
      },
      {
        id: "ml-nlp",
        name: "Natural Language Processing",
        description:
          "Questions on NLP techniques for processing and understanding human language.",
      },
      {
        id: "ml-computer-vision",
        name: "Computer Vision",
        description:
          "Questions on computer vision techniques for processing and analyzing images and videos.",
      },
      {
        id: "ml-feature-engineering",
        name: "Feature Engineering",
        description:
          "Questions on the process of creating new features from raw data to improve model performance.",
      },
      {
        id: "ml-model-evaluation",
        name: "Model Evaluation",
        description:
          "Questions on evaluating model performance using metrics like accuracy, precision, and recall.",
      },
      {
        id: "ml-algorithms",
        name: "ML Algorithms",
        description:
          "Questions on specific machine learning algorithms like Decision Trees, SVMs, and K-Means.",
      },
      {
        id: "ml-frameworks",
        name: "ML Frameworks (TensorFlow, PyTorch)",
        description:
          "Questions on popular machine learning frameworks like TensorFlow and PyTorch.",
      },
      {
        id: "ml-ethics",
        name: "AI Ethics",
        description:
          "Questions on the ethical considerations and biases in AI and machine learning.",
      },
    ],
  },
  {
    id: "theory-computation",
    name: "Theory of Computation",
    icon: "📚",
    color: "bg-indigo-700",
    category: "CS Fundamentals",
    description:
      "General questions about Theory of Computation. Topics include automata, formal languages, and computability. Questions may involve theoretical concepts or proofs.",
    questionTypes: {
      mcq: 0.7,
      fill: 0.2,
      code: 0.0,
      trueorfalse: 0.1,
    },
    topics: [
      {
        id: "toc-automata",
        name: "Finite Automata",
        description:
          "Questions on deterministic finite automata (DFA) and non-deterministic finite automata (NFA).",
      },
      {
        id: "toc-regular",
        name: "Regular Languages",
        description:
          "Questions on regular languages and regular expressions.",
      },
      {
        id: "toc-context-free",
        name: "Context-Free Languages",
        description:
          "Questions on context-free languages and context-free grammars.",
      },
      {
        id: "toc-pushdown",
        name: "Pushdown Automata",
        description:
          "Questions on pushdown automata (PDA) and their relationship to context-free languages.",
      },
      {
        id: "toc-turing",
        name: "Turing Machines",
        description:
          "Questions on Turing machines as a model of computation.",
      },
      {
        id: "toc-decidability",
        name: "Decidability",
        description:
          "Questions on decidability, undecidability, and the Halting Problem.",
      },
      {
        id: "toc-complexity",
        name: "Computational Complexity",
        description:
          "Questions on computational complexity theory and complexity classes like P and NP.",
      },
      {
        id: "toc-p-np",
        name: "P vs NP Problem",
        description:
          "Questions on the famous P vs NP problem.",
      },
      {
        id: "toc-reductions",
        name: "Reductions",
        description:
          "Questions on the concept of reducing one problem to another.",
      },
      {
        id: "toc-space-complexity",
        name: "Space Complexity",
        description:
          "Questions on the space complexity of algorithms.",
      },
      {
        id: "toc-hierarchy",
        name: "Chomsky Hierarchy",
        description:
          "Questions on the Chomsky Hierarchy of formal languages.",
      },
      {
        id: "toc-pumping-lemma",
        name: "Pumping Lemma",
        description:
          "Questions on the pumping lemma for regular and context-free languages.",
      },
    ],
  },
  {
    id: "cryptography",
    name: "Cryptography",
    icon: "🔒",
    color: "bg-purple-700",
    category: "CS Fundamentals",
    description:
      "General questions about Cryptography. Topics include symmetric and asymmetric encryption, hash functions, and digital signatures. Questions may involve theoretical concepts or security principles.",
    questionTypes: {
      mcq: 0.6,
      fill: 0.3,
      code: 0.0,
      trueorfalse: 0.1,
    },
    topics: [
      {
        id: "crypto-symmetric",
        name: "Symmetric Cryptography",
        description:
          "Questions on symmetric-key algorithms like AES and DES.",
      },
      {
        id: "crypto-asymmetric",
        name: "Asymmetric Cryptography",
        description:
          "Questions on public-key algorithms like RSA and Diffie-Hellman.",
      },
      {
        id: "crypto-hash",
        name: "Hash Functions",
        description:
          "Questions on cryptographic hash functions like SHA-256 and MD5.",
      },
      {
        id: "crypto-digital-signatures",
        name: "Digital Signatures",
        description:
          "Questions on digital signatures for message authenticity and integrity.",
      },
      {
        id: "crypto-key-management",
        name: "Key Management",
        description:
          "Questions on the best practices for generating, storing, and distributing cryptographic keys.",
      },
      {
        id: "crypto-protocols",
        name: "Cryptographic Protocols",
        description:
          "Questions on protocols like TLS/SSL and their role in securing communication.",
      },
      {
        id: "crypto-pki",
        name: "Public Key Infrastructure",
        description:
          "Questions on Public Key Infrastructure (PKI) and its components like Certificate Authorities (CAs).",
      },
      {
        id: "crypto-network-security",
        name: "Network Security",
        description:
          "Questions on network security concepts like firewalls and intrusion detection systems.",
      },
      {
        id: "crypto-attacks",
        name: "Cryptographic Attacks",
        description:
          "Questions on common cryptographic attacks like brute-force and man-in-the-middle.",
      },
      {
        id: "crypto-blockchain",
        name: "Blockchain Cryptography",
        description:
          "Questions on the cryptographic principles behind blockchain technology.",
      },
      {
        id: "crypto-quantum",
        name: "Quantum Cryptography",
        description:
          "Questions on emerging quantum cryptography concepts.",
      },
      {
        id: "crypto-implementations",
        name: "Implementation Security",
        description:
          "Questions on common vulnerabilities in cryptographic implementations.",
      },
    ],
  },
  {
    id: "software-engineering",
    name: "Software Engineering",
    icon: "🛠️",
    color: "bg-blue-700",
    category: "CS Fundamentals",
    description:
      "General questions about Software Engineering. Topics include the SDLC, design patterns, and testing methodologies. Questions may involve theoretical concepts or practical scenarios.",
    questionTypes: {
      mcq: 0.8,
      fill: 0.1,
      code: 0.0,
      trueorfalse: 0.1,
    },
    topics: [
      {
        id: "se-sdlc",
        name: "Software Development Life Cycle",
        description:
          "Questions on the different phases of the SDLC, including Waterfall and Agile models.",
      },
      {
        id: "se-requirements",
        name: "Requirements Engineering",
        description:
          "Questions on gathering, analyzing, and documenting software requirements.",
      },
      {
        id: "se-design",
        name: "Software Design",
        description:
          "Questions on software design principles and methodologies.",
      },
      {
        id: "se-architecture",
        name: "Software Architecture",
        description:
          "Questions on different software architectural styles like monolithic and microservices.",
      },
      {
        id: "se-testing",
        name: "Software Testing",
        description:
          "Questions on various testing types like unit, integration, and system testing.",
      },
      {
        id: "se-maintenance",
        name: "Software Maintenance",
        description:
          "Questions on the different types of software maintenance.",
      },
      {
        id: "se-project-management",
        name: "Project Management",
        description:
          "Questions on project management methodologies like Scrum and Kanban.",
      },
      {
        id: "se-agile",
        name: "Agile Methodologies",
        description:
          "Questions on the principles and practices of Agile software development.",
      },
      {
        id: "se-version-control",
        name: "Version Control",
        description:
          "Questions on using version control systems like Git.",
      },
      {
        id: "se-documentation",
        name: "Documentation",
        description:
          "Questions on the importance and types of software documentation.",
      },
      {
        id: "se-quality",
        name: "Software Quality",
        description:
          "Questions on software quality assurance and quality control.",
      },
      {
        id: "se-metrics",
        name: "Software Metrics",
        description:
          "Questions on metrics for measuring software size, complexity, and quality.",
      },
    ],
  },
  {
    id: "oops-python",
    name: "OOP in Python",
    icon: "🐍",
    color: "bg-green-500",
    category: "OOP",
    description:
      "General questions about Object-Oriented Programming in Python. Topics include classes, objects, and the core OOP principles. Questions may involve writing or debugging Python code snippets.",
    questionTypes: {
      mcq: 0.4,
      fill: 0.2,
      code: 0.3,
      trueorfalse: 0.1,
    },
    topics: [
      {
        id: "py-oop-classes",
        name: "Classes & Objects",
        description:
          "Questions on defining classes and creating objects.",
      },
      {
        id: "py-oop-inheritance",
        name: "Inheritance",
        description:
          "Questions on single, multiple, and multi-level inheritance.",
      },
      {
        id: "py-oop-polymorphism",
        name: "Polymorphism",
        description:
          "Questions on polymorphism and method overriding.",
      },
      {
        id: "py-oop-encapsulation",
        name: "Encapsulation",
        description:
          "Questions on data hiding and access control using private and protected members.",
      },
      {
        id: "py-oop-abstraction",
        name: "Abstraction",
        description:
          "Questions on abstract classes and methods.",
      },
      {
        id: "py-oop-magic-methods",
        name: "Magic Methods",
        description:
          "Questions on special methods like `__init__`, `__str__`, and `__len__`.",
      },
      {
        id: "py-oop-property",
        name: "Property Decorators",
        description:
          "Questions on using `@property` for getters, setters, and deleters.",
      },
      {
        id: "py-oop-class-methods",
        name: "Class & Static Methods",
        description:
          "Questions on the differences between instance, class, and static methods.",
      },
      {
        id: "py-oop-multiple-inheritance",
        name: "Multiple Inheritance",
        description:
          "Questions on multiple inheritance and the MRO.",
      },
      {
        id: "py-oop-mro",
        name: "Method Resolution Order",
        description:
          "Questions on the Method Resolution Order (MRO) for resolving method calls in a complex inheritance hierarchy.",
      },
      {
        id: "py-oop-metaclasses",
        name: "Metaclasses",
        description:
          "Questions on metaclasses and their role in creating classes dynamically.",
      },
      {
        id: "py-oop-design-patterns",
        name: "Design Patterns",
        description:
          "Questions on common design patterns and their implementation in Python.",
      },
    ],
  },
  {
    id: "oops-java",
    name: "OOP in Java",
    icon: "☕",
    color: "bg-orange-500",
    category: "OOP",
    description:
      "General questions about Object-Oriented Programming in Java. Topics include classes, objects, and the core OOP principles. Questions may involve writing or debugging Java code snippets.",
    questionTypes: {
      mcq: 0.4,
      fill: 0.2,
      code: 0.3,
      trueorfalse: 0.1,
    },
    topics: [
      {
        id: "java-oop-classes",
        name: "Classes & Objects",
        description:
          "Questions on defining classes and creating objects.",
      },
      {
        id: "java-oop-inheritance",
        name: "Inheritance",
        description:
          "Questions on single and multi-level inheritance.",
      },
      {
        id: "java-oop-polymorphism",
        name: "Polymorphism",
        description:
          "Questions on method overriding and overloading.",
      },
      {
        id: "java-oop-encapsulation",
        name: "Encapsulation",
        description:
          "Questions on data hiding and access control using access modifiers (`private`, `public`, `protected`).",
      },
      {
        id: "java-oop-abstraction",
        name: "Abstraction",
        description:
          "Questions on abstract classes and interfaces.",
      },
      {
        id: "java-oop-interfaces",
        name: "Interfaces",
        description:
          "Questions on interfaces and their role in defining contracts.",
      },
      {
        id: "java-oop-access-modifiers",
        name: "Access Modifiers",
        description:
          "Questions on the different access modifiers in Java and their scope.",
      },
      {
        id: "java-oop-constructors",
        name: "Constructors",
        description:
          "Questions on constructors, including default and parameterized constructors.",
      },
      {
        id: "java-oop-overriding",
        name: "Method Overriding",
        description:
          "Questions on overriding methods in a subclass.",
      },
      {
        id: "java-oop-overloading",
        name: "Method Overloading",
        description:
          "Questions on overloading methods with different parameters.",
      },
      {
        id: "java-oop-final",
        name: "Final Keyword",
        description:
          "Questions on using the `final` keyword for classes, methods, and variables.",
      },
      {
        id: "java-oop-design-patterns",
        name: "Design Patterns",
        description:
          "Questions on common object-oriented design patterns and their implementation in Java.",
      },
    ],
  },
  {
    id: "oops-cpp",
    name: "OOP in C++",
    icon: "⚡",
    color: "bg-blue-500",
    category: "OOP",
    description:
      "General questions about Object-Oriented Programming in C++. Topics include classes, objects, and the core OOP principles. Questions may involve writing or debugging C++ code snippets.",
    questionTypes: {
      mcq: 0.4,
      fill: 0.2,
      code: 0.3,
      trueorfalse: 0.1,
    },
    topics: [
      {
        id: "cpp-oop-classes",
        name: "Classes & Objects",
        description:
          "Questions on defining classes and creating objects.",
      },
      {
        id: "cpp-oop-constructors",
        name: "Constructors & Destructors",
        description:
          "Questions on constructors for object initialization and destructors for cleanup.",
      },
      {
        id: "cpp-oop-inheritance",
        name: "Inheritance",
        description:
          "Questions on single, multiple, and multi-level inheritance.",
      },
      {
        id: "cpp-oop-polymorphism",
        name: "Polymorphism",
        description:
          "Questions on polymorphism using virtual functions.",
      },
      {
        id: "cpp-oop-encapsulation",
        name: "Encapsulation",
        description:
          "Questions on data hiding and access control.",
      },
      {
        id: "cpp-oop-abstraction",
        name: "Abstraction",
        description:
          "Questions on abstract classes and pure virtual functions.",
      },
      {
        id: "cpp-oop-virtual",
        name: "Virtual Functions",
        description:
          "Questions on virtual functions and their use in achieving polymorphism.",
      },
      {
        id: "cpp-oop-operator-overloading",
        name: "Operator Overloading",
        description:
          "Questions on overloading operators to work with custom data types.",
      },
      {
        id: "cpp-oop-friend",
        name: "Friend Functions & Classes",
        description:
          "Questions on friend functions and classes that can access private members.",
      },
      {
        id: "cpp-oop-multiple-inheritance",
        name: "Multiple Inheritance",
        description:
          "Questions on multiple inheritance and its complexities.",
      },
      {
        id: "cpp-oop-templates",
        name: "Templates",
        description:
          "Questions on using function and class templates for generic programming.",
      },
      {
        id: "cpp-oop-stl",
        name: "STL & OOP",
        description:
          "Questions on how the STL integrates with object-oriented programming.",
      },
    ],
  },
  {
    id: "oops-csharp",
    name: "OOP in C#",
    icon: "💜",
    color: "bg-purple-500",
    category: "OOP",
    description:
      "General questions about Object-Oriented Programming in C#. Topics include classes, objects, and the core OOP principles. Questions may involve writing or debugging C# code snippets.",
    questionTypes: {
      mcq: 0.4,
      fill: 0.2,
      code: 0.3,
      trueorfalse: 0.1,
    },
    topics: [
      {
        id: "cs-oop-classes",
        name: "Classes & Objects",
        description:
          "Questions on defining classes and creating objects.",
      },
      {
        id: "cs-oop-inheritance",
        name: "Inheritance",
        description:
          "Questions on single and multi-level inheritance.",
      },
      {
        id: "cs-oop-polymorphism",
        name: "Polymorphism",
        description:
          "Questions on method overriding and overloading.",
      },
      {
        id: "cs-oop-encapsulation",
        name: "Encapsulation",
        description:
          "Questions on data hiding and access modifiers.",
      },
      {
        id: "cs-oop-abstraction",
        name: "Abstraction",
        description:
          "Questions on abstract classes and interfaces.",
      },
      {
        id: "cs-oop-interfaces",
        name: "Interfaces",
        description:
          "Questions on interfaces and their use in defining contracts.",
      },
      {
        id: "cs-oop-properties",
        name: "Properties",
        description:
          "Questions on properties for controlled access to class members.",
      },
      {
        id: "cs-oop-indexers",
        name: "Indexers",
        description:
          "Questions on indexers for accessing objects like an array.",
      },
      {
        id: "cs-oop-delegates",
        name: "Delegates & Events",
        description:
          "Questions on delegates and events for building decoupled systems.",
      },
      {
        id: "cs-oop-generics",
        name: "Generics",
        description:
          "Questions on creating type-safe and reusable code with generics.",
      },
      {
        id: "cs-oop-extension-methods",
        name: "Extension Methods",
        description:
          "Questions on adding new methods to existing types without modifying them.",
      },
      {
        id: "cs-oop-design-patterns",
        name: "Design Patterns",
        description:
          "Questions on common design patterns and their implementation in C#.",
      },
    ],
  },
  {
    id: "oops-ruby",
    name: "OOP in Ruby",
    icon: "💎",
    color: "bg-red-600",
    category: "OOP",
    description:
      "General questions about Object-Oriented Programming in Ruby. Topics include classes, modules, and metaprogramming. Questions may involve writing or debugging Ruby code snippets.",
    questionTypes: {
      mcq: 0.4,
      fill: 0.2,
      code: 0.3,
      trueorfalse: 0.1,
    },
    topics: [
      {
        id: "ruby-oop-classes",
        name: "Classes & Objects",
        description:
          "Questions on defining classes and creating objects.",
      },
      {
        id: "ruby-oop-modules",
        name: "Modules & Mixins",
        description:
          "Questions on using modules for code reuse and as mixins.",
      },
      {
        id: "ruby-oop-inheritance",
        name: "Inheritance",
        description:
          "Questions on single inheritance and its mechanics.",
      },
      {
        id: "ruby-oop-visibility",
        name: "Method Visibility",
        description:
          "Questions on public, private, and protected methods.",
      },
      {
        id: "ruby-oop-attr",
        name: "Attribute Accessors",
        description:
          "Questions on using `attr_accessor`, `attr_reader`, and `attr_writer`.",
      },
      {
        id: "ruby-oop-class-methods",
        name: "Class Methods & Variables",
        description:
          "Questions on defining methods and variables that belong to the class itself.",
      },
      {
        id: "ruby-oop-constants",
        name: "Constants",
        description:
          "Questions on defining and using constants.",
      },
      {
        id: "ruby-oop-singleton",
        name: "Singleton Methods",
        description:
          "Questions on methods defined for a single object.",
      },
      {
        id: "ruby-oop-metaprogramming",
        name: "Metaprogramming",
        description:
          "Questions on Ruby's dynamic nature and metaprogramming features.",
      },
      {
        id: "ruby-oop-duck-typing",
        name: "Duck Typing",
        description:
          "Questions on the concept of duck typing and its role in Ruby.",
      },
      {
        id: "ruby-oop-method-missing",
        name: "Method Missing",
        description:
          "Questions on using `method_missing` to handle calls to undefined methods.",
      },
      {
        id: "ruby-oop-design-patterns",
        name: "Design Patterns",
        description:
          "Questions on common design patterns and their implementation in Ruby.",
      },
    ],
  },
  {
    id: "git",
    name: "Git & Version Control",
    icon: "🌿",
    color: "bg-orange-600",
    category: "Tools",
    description:
      "General questions about Git. Topics include basic commands, branching, merging, and remote repositories. Questions may involve writing or debugging Git commands.",
    questionTypes: {
      mcq: 0.6,
      fill: 0.2,
      code: 0.1,
      trueorfalse: 0.1,
    },
    topics: [
      {
        id: "git-basics",
        name: "Basic Commands",
        description:
          "Questions on fundamental Git commands like `add`, `commit`, `status`, and `log`.",
      },
      {
        id: "git-branching",
        name: "Branching & Merging",
        description:
          "Questions on creating, switching, and merging branches.",
      },
      {
        id: "git-remote",
        name: "Remote Repositories",
        description:
          "Questions on interacting with remote repositories using `push`, `pull`, and `fetch`.",
      },
      {
        id: "git-workflow",
        name: "Git Workflows",
        description:
          "Questions on common Git workflows like Git Flow and GitHub Flow.",
      },
      {
        id: "git-conflicts",
        name: "Merge Conflicts",
        description:
          "Questions on resolving merge conflicts.",
      },
      {
        id: "git-rebase",
        name: "Rebasing",
        description:
          "Questions on rebasing and its use cases.",
      },
      {
        id: "git-hooks",
        name: "Git Hooks",
        description:
          "Questions on using Git hooks to automate tasks at certain points in the development workflow.",
      },
      {
        id: "git-submodules",
        name: "Submodules",
        description:
          "Questions on using Git submodules to include one repository inside another.",
      },
      {
        id: "git-advanced",
        name: "Advanced Git",
        description:
          "Questions on advanced commands like `revert`, `reset`, and `bisect`.",
      },
      {
        id: "git-github",
        name: "GitHub Features",
        description:
          "Questions on features of GitHub like pull requests, issues, and actions.",
      },
      {
        id: "git-gitlab",
        name: "GitLab Features",
        description:
          "Questions on features of GitLab like merge requests and CI/CD.",
      },
      {
        id: "git-best-practices",
        name: "Best Practices",
        description:
          "Questions on best practices for using Git effectively in a team environment.",
      },
    ],
  },
  {
    id: "linux",
    name: "Linux Commands",
    icon: "🐧",
    color: "bg-gray-800",
    category: "Tools",
    description:
      "General questions about Linux. Topics include basic commands, file system navigation, permissions, and shell scripting. Questions may involve writing or debugging shell commands.",
    questionTypes: {
      mcq: 0.4,
      fill: 0.3,
      code: 0.2,
      trueorfalse: 0.1,
    },
    topics: [
      {
        id: "linux-basics",
        name: "Basic Commands",
        description:
          "Questions on fundamental commands like `ls`, `cd`, `pwd`, and `man`.",
      },
      {
        id: "linux-file-system",
        name: "File System Navigation",
        description:
          "Questions on navigating the Linux file system.",
      },
      {
        id: "linux-permissions",
        name: "File Permissions",
        description:
          "Questions on managing file permissions using `chmod`, `chown`, and `chgrp`.",
      },
      {
        id: "linux-text-processing",
        name: "Text Processing",
        description:
          "Questions on using commands like `grep`, `sed`, and `awk` for text manipulation.",
      },
      {
        id: "linux-process",
        name: "Process Management",
        description:
          "Questions on managing processes using commands like `ps`, `top`, `kill`, and `bg`.",
      },
      {
        id: "linux-networking",
        name: "Networking Commands",
        description:
          "Questions on networking commands like `ping`, `ifconfig`, and `netstat`.",
      },
      {
        id: "linux-system-info",
        name: "System Information",
        description:
          "Questions on getting system information using commands like `uname` and `df`.",
      },
      {
        id: "linux-package-management",
        name: "Package Management",
        description:
          "Questions on using package managers like `apt`, `yum`, and `pacman`.",
      },
      {
        id: "linux-shell-scripting",
        name: "Shell Scripting",
        description:
          "Questions on writing basic shell scripts with variables, conditionals, and loops.",
      },
      {
        id: "linux-cron",
        name: "Cron Jobs",
        description:
          "Questions on scheduling tasks with `cron`.",
      },
      {
        id: "linux-logs",
        name: "Log Files",
        description:
          "Questions on viewing and managing log files.",
      },
      {
        id: "linux-performance",
        name: "Performance Monitoring",
        description:
          "Questions on monitoring system performance with tools like `top`, `htop`, and `iostat`.",
      },
    ],
  },
  {
    id: "testing",
    name: "Software Testing",
    icon: "🧪",
    color: "bg-teal-500",
    category: "Tools",
    description:
      "General questions about Software Testing. Topics include testing fundamentals, types of testing, and methodologies like TDD. Questions may involve theoretical concepts or practical scenarios.",
    questionTypes: {
      mcq: 0.8,
      fill: 0.2,
      code: 0.0,
      trueorfalse: 0.0,
    },
    topics: [
      {
        id: "testing-fundamentals",
        name: "Testing Fundamentals",
        description:
          "Questions on the basic principles of software testing.",
      },
      {
        id: "testing-unit",
        name: "Unit Testing",
        description:
          "Questions on testing individual components or functions in isolation.",
      },
      {
        id: "testing-integration",
        name: "Integration Testing",
        description:
          "Questions on testing how different parts of a system work together.",
      },
      {
        id: "testing-e2e",
        name: "End-to-End Testing",
        description:
          "Questions on testing the entire application flow from start to finish.",
      },
      {
        id: "testing-tdd",
        name: "Test-Driven Development",
        description:
          "Questions on the TDD methodology: write a failing test, write code to make it pass, and then refactor.",
      },
      {
        id: "testing-bdd",
        name: "Behavior-Driven Development",
        description:
          "Questions on the BDD methodology, which focuses on describing behavior in a human-readable format.",
      },
      {
        id: "testing-automation",
        name: "Test Automation",
        description:
          "Questions on automating tests to improve efficiency and reliability.",
      },
      {
        id: "testing-performance",
        name: "Performance Testing",
        description:
          "Questions on testing application performance under load.",
      },
      {
        id: "testing-security",
        name: "Security Testing",
        description:
          "Questions on testing an application for security vulnerabilities.",
      },
      {
        id: "testing-frameworks",
        name: "Testing Frameworks",
        description:
          "Questions on popular testing frameworks for different languages and platforms.",
      },
      {
        id: "testing-ci-cd",
        name: "Testing in CI/CD",
        description:
          "Questions on integrating automated tests into a Continuous Integration/Continuous Deployment (CI/CD) pipeline.",
      },
      {
        id: "testing-strategies",
        name: "Testing Strategies",
        description:
          "Questions on different strategies for testing software, such as the testing pyramid.",
      },
    ],
  },
  {
    id: "webpack",
    name: "Webpack",
    icon: "📦",
    color: "bg-purple-600",
    category: "Tools",
    description:
      "General questions about Webpack. Topics include configuration, loaders, plugins, and optimization. Questions may involve writing or debugging a Webpack configuration file.",
    questionTypes: {
      mcq: 0.5,
      fill: 0.3,
      code: 0.1,
      trueorfalse: 0.1,
    },
    topics: [
      {
        id: "webpack-basics",
        name: "Basics & Configuration",
        description:
          "Questions on the fundamental concepts of Webpack and its configuration file (`webpack.config.js`).",
      },
      {
        id: "webpack-loaders",
        name: "Loaders",
        description:
          "Questions on loaders for processing files and transforming them into modules.",
      },
      {
        id: "webpack-plugins",
        name: "Plugins",
        description:
          "Questions on plugins for performing a wide range of tasks like bundle optimization and asset management.",
      },
      {
        id: "webpack-dev-server",
        name: "Dev Server",
        description:
          "Questions on using the Webpack Dev Server for development.",
      },
      {
        id: "webpack-code-splitting",
        name: "Code Splitting",
        description:
          "Questions on splitting code into smaller chunks for faster loading.",
      },
      {
        id: "webpack-optimization",
        name: "Optimization",
        description:
          "Questions on optimizing the production build for performance.",
      },
      {
        id: "webpack-hot-reload",
        name: "Hot Module Replacement",
        description:
          "Questions on Hot Module Replacement (HMR) for live reloading without a full page refresh.",
      },
      {
        id: "webpack-assets",
        name: "Asset Management",
        description:
          "Questions on managing assets like images, fonts, and CSS.",
      },
      {
        id: "webpack-production",
        name: "Production Builds",
        description:
          "Questions on creating production-ready builds with minification and tree shaking.",
      },
      {
        id: "webpack-tree-shaking",
        name: "Tree Shaking",
        description:
          "Questions on tree shaking for removing unused code.",
      },
      {
        id: "webpack-source-maps",
        name: "Source Maps",
        description:
          "Questions on source maps for debugging production code.",
      },
      {
        id: "webpack-advanced",
        name: "Advanced Configuration",
        description:
          "Questions on advanced configuration options and best practices.",
      },
    ],
  },
  {
    id: "babel",
    name: "Babel",
    icon: "📝",
    color: "bg-yellow-400",
    category: "Tools",
    description:
      "General questions about Babel. Topics include presets, plugins, and configuration. Questions may involve writing or debugging a Babel configuration file.",
    questionTypes: {
      mcq: 0.6,
      fill: 0.2,
      code: 0.1,
      trueorfalse: 0.1,
    },
    topics: [
      {
        id: "babel-basics",
        name: "Basics & Setup",
        description:
          "Questions on the fundamental concepts of Babel and its role as a JavaScript compiler.",
      },
      {
        id: "babel-presets",
        name: "Presets",
        description:
          "Questions on using presets to group related plugins.",
      },
      {
        id: "babel-plugins",
        name: "Plugins",
        description:
          "Questions on individual plugins for specific transformations.",
      },
      {
        id: "babel-config",
        name: "Configuration",
        description:
          "Questions on configuring Babel using `babel.config.js` or `.babelrc`.",
      },
      {
        id: "babel-polyfills",
        name: "Polyfills",
        description:
          "Questions on using polyfills to add new features to older environments.",
      },
      {
        id: "babel-transforms",
        name: "Custom Transforms",
        description:
          "Questions on writing custom Babel plugins to transform code.",
      },
      {
        id: "babel-webpack",
        name: "Webpack Integration",
        description:
          "Questions on integrating Babel with Webpack using `babel-loader`.",
      },
      {
        id: "babel-nodejs",
        name: "Node.js Integration",
        description:
          "Questions on using Babel to run modern JavaScript on Node.js.",
      },
      {
        id: "babel-react",
        name: "React & JSX",
        description:
          "Questions on Babel's role in compiling JSX syntax.",
      },
      {
        id: "babel-typescript",
        name: "TypeScript Integration",
        description:
          "Questions on how Babel can be used to compile TypeScript.",
      },
      {
        id: "babel-optimization",
        name: "Build Optimization",
        description:
          "Questions on optimizing the build process with Babel.",
      },
      {
        id: "babel-debugging",
        name: "Debugging",
        description:
          "Questions on debugging Babel compilation issues.",
      },
    ],
  },
  {
    "id": "eslint",
    "name": "ESLint",
    "icon": "🚨",
    "color": "bg-red-500",
    "category": "Tools",
    "description": "General questions about ESLint, a static code analysis tool for identifying problematic patterns found in JavaScript, including syntax errors and style inconsistencies. Topics include rules, configuration files, and integration.",
    "questionTypes": {
      "mcq": 0.6,
      "fill": 0.2,
      "code": 0.1,
      "trueorfalse": 0.1
    },
    "topics": [
      {
        "id": "eslint-basics",
        "name": "Basics & Setup",
        "description": "Questions on the fundamental concepts of ESLint and how to initialize and run it on a project for the first time."
      },
      {
        "id": "eslint-rules",
        "name": "Rules Configuration",
        "description": "Questions about enabling, disabling, and configuring individual ESLint rules to enforce specific coding styles or best practices."
      },
      {
        "id": "eslint-config",
        "name": "Configuration Files",
        "description": "Questions related to the structure and properties of `.eslintrc` files, including `extends`, `plugins`, `rules`, and `parserOptions`."
      },
      {
        "id": "eslint-presets",
        "name": "Shareable Configs",
        "description": "Questions on using shareable configurations (e.g., `eslint:recommended`, `airbnb`) to apply a predefined set of rules to a project."
      },
      {
        "id": "eslint-plugins",
        "name": "Plugins",
        "description": "Questions about installing and using ESLint plugins to add support for new rules or different file types (e.g., React, TypeScript)."
      },
      {
        "id": "eslint-custom-rules",
        "name": "Custom Rules",
        "description": "Questions on the process of writing and implementing your own custom ESLint rules to enforce project-specific logic."
      },
      {
        "id": "eslint-integration",
        "name": "IDE Integration",
        "description": "Questions about setting up ESLint to provide real-time feedback and automatic linting within various code editors like VS Code."
      },
      {
        "id": "eslint-ci-cd",
        "name": "CI/CD Integration",
        "description": "Questions on how to incorporate ESLint into a continuous integration and continuous deployment pipeline to enforce code quality before deployment."
      },
      {
        "id": "eslint-typescript",
        "name": "TypeScript Support",
        "description": "Questions on configuring ESLint to lint TypeScript code, often involving packages like `@typescript-eslint/parser` and `@typescript-eslint/eslint-plugin`."
      },
      {
        "id": "eslint-react",
        "name": "React Support",
        "description": "Questions about using ESLint with React, focusing on JSX linting and best practices provided by the `eslint-plugin-react`."
      },
      {
        "id": "eslint-vue",
        "name": "Vue.js Support",
        "description": "Questions on configuring ESLint for Vue.js projects, typically involving plugins that handle Vue-specific syntax."
      },
      {
        "id": "eslint-best-practices",
        "name": "Best Practices",
        "description": "Questions on general best practices for using ESLint effectively, such as combining it with Prettier and setting up lint-staged hooks."
      }
    ]
  },
  {
    "id": "prettier",
    "name": "Prettier",
    "icon": "🎨",
    "color": "bg-pink-400",
    "category": "Tools",
    "description": "General questions about Prettier, an opinionated code formatter that enforces a consistent style by parsing your code and re-printing it with its own rules that take the maximum line length into account.",
    "questionTypes": {
      "mcq": 0.7,
      "fill": 0.2,
      "code": 0.0,
      "trueorfalse": 0.1
    },
    "topics": [
      {
        "id": "prettier-basics",
        "name": "Basics & Setup",
        "description": "Questions on the fundamental purpose of Prettier and how to install and run it for basic code formatting."
      },
      {
        "id": "prettier-config",
        "name": "Configuration",
        "description": "Questions about customizing Prettier's formatting rules using configuration files like `.prettierrc`."
      },
      {
        "id": "prettier-integration",
        "name": "IDE Integration",
        "description": "Questions about setting up Prettier to automatically format code on save in popular IDEs like VS Code."
      },
      {
        "id": "prettier-eslint",
        "name": "ESLint Integration",
        "description": "Questions on how to use Prettier and ESLint together without conflicts, typically involving `eslint-config-prettier`."
      },
      {
        "id": "prettier-pre-commit",
        "name": "Pre-commit Hooks",
        "description": "Questions on using tools like `husky` and `lint-staged` to automatically format code with Prettier before a Git commit."
      },
      {
        "id": "prettier-ci-cd",
        "name": "CI/CD Integration",
        "description": "Questions on integrating Prettier into a CI/CD pipeline to ensure all committed code adheres to a consistent formatting style."
      },
      {
        "id": "prettier-languages",
        "name": "Supported Languages",
        "description": "Questions about the various programming languages and file types that Prettier can format out of the box."
      },
      {
        "id": "prettier-ignore",
        "name": "Ignore Files",
        "description": "Questions on using `.prettierignore` to prevent Prettier from formatting specific files or directories."
      },
      {
        "id": "prettier-plugins",
        "name": "Plugins",
        "description": "Questions about using community plugins to extend Prettier's functionality to languages it doesn't support natively."
      },
      {
        "id": "prettier-api",
        "name": "Prettier API",
        "description": "Questions about programmatically using Prettier's API to format code within other applications."
      },
      {
        "id": "prettier-workflow",
        "name": "Workflow Integration",
        "description": "Questions on how to best incorporate Prettier into a development team's workflow for maximum efficiency."
      },
      {
        "id": "prettier-best-practices",
        "name": "Best Practices",
        "description": "Questions on general best practices for using Prettier, such as automating formatting to avoid manual steps."
      }
    ]
  },
  {
    "id": "jira",
    "name": "Jira",
    "icon": "📋",
    "color": "bg-blue-700",
    "category": "Tools",
    "description": "General questions about Jira, a popular project management and issue-tracking tool used by Agile teams. Topics include project setup, issue workflows, and reporting.",
    "questionTypes": {
      "mcq": 0.8,
      "fill": 0.2,
      "code": 0.0,
      "trueorfalse": 0.0
    },
    "topics": [
      {
        "id": "jira-basics",
        "name": "Basics & Navigation",
        "description": "Questions on the fundamental concepts of Jira and how to navigate its interface to find issues, boards, and reports."
      },
      {
        "id": "jira-projects",
        "name": "Projects & Issues",
        "description": "Questions on creating and managing different types of projects and issues (e.g., tasks, bugs, stories) in Jira."
      },
      {
        "id": "jira-workflows",
        "name": "Workflows",
        "description": "Questions about how issues move through different statuses in a Jira workflow and how to customize them."
      },
      {
        "id": "jira-agile",
        "name": "Agile Boards",
        "description": "Questions on using Agile boards (e.g., Scrum, Kanban) in Jira to visualize and manage work."
      },
      {
        "id": "jira-reporting",
        "name": "Reporting & Analytics",
        "description": "Questions about generating and interpreting reports in Jira, such as burndown charts, velocity charts, and cumulative flow diagrams."
      },
      {
        "id": "jira-customization",
        "name": "Customization",
        "description": "Questions on customizing Jira with custom fields, screens, and issue types to fit a team's specific needs."
      },
      {
        "id": "jira-automation",
        "name": "Automation Rules",
        "description": "Questions about creating automation rules in Jira to handle repetitive tasks and streamline workflows."
      },
      {
        "id": "jira-integrations",
        "name": "Integrations",
        "description": "Questions on integrating Jira with other tools like Confluence, GitHub, or Slack to improve collaboration."
      },
      {
        "id": "jira-permissions",
        "name": "Permissions & Security",
        "description": "Questions about managing user permissions and project roles to control access to Jira data."
      },
      {
        "id": "jira-administration",
        "name": "Administration",
        "description": "Questions on the administrative tasks involved in managing a Jira instance, including user management and system settings."
      },
      {
        "id": "jira-api",
        "name": "REST API",
        "description": "Questions on using Jira's REST API to programmatically interact with issues, projects, and other data."
      },
      {
        "id": "jira-best-practices",
        "name": "Best Practices",
        "description": "Questions on general best practices for using Jira to optimize team productivity and project visibility."
      }
    ]
  },
  {
    "id": "postman",
    "name": "Postman",
    "icon": "📬",
    "color": "bg-orange-400",
    "category": "Tools",
    "description": "General questions about Postman, an API platform for building and using APIs. Topics include creating requests, organizing collections, and automating tests.",
    "questionTypes": {
      "mcq": 0.6,
      "fill": 0.3,
      "code": 0.0,
      "trueorfalse": 0.1
    },
    "topics": [
      {
        "id": "postman-basics",
        "name": "Basics & Interface",
        "description": "Questions on the fundamental concepts of Postman and how to navigate its user interface to create and send requests."
      },
      {
        "id": "postman-requests",
        "name": "Creating Requests",
        "description": "Questions on how to construct various types of HTTP requests (e.g., GET, POST, PUT) with headers, body, and query parameters in Postman."
      },
      {
        "id": "postman-collections",
        "name": "Collections",
        "description": "Questions on organizing and grouping related API requests into collections for better management and sharing."
      },
      {
        "id": "postman-environments",
        "name": "Environments & Variables",
        "description": "Questions about using environments and variables to manage different configurations (e.g., development, production) and dynamic data in requests."
      },
      {
        "id": "postman-testing",
        "name": "Writing Tests",
        "description": "Questions on writing Postman tests in JavaScript to validate API responses and ensure correct functionality."
      },
      {
        "id": "postman-scripts",
        "name": "Pre-request Scripts",
        "description": "Questions on using pre-request scripts to run code before a request is sent, such as generating dynamic data or setting variables."
      },
      {
        "id": "postman-automation",
        "name": "Test Automation",
        "description": "Questions on automating a series of requests and tests using the Collection Runner to perform end-to-end testing."
      },
      {
        "id": "postman-monitoring",
        "name": "API Monitoring",
        "description": "Questions on using Postman monitors to continuously check the health and performance of APIs."
      },
      {
        "id": "postman-documentation",
        "name": "API Documentation",
        "description": "Questions on generating and publishing beautiful, machine-readable API documentation directly from a Postman collection."
      },
      {
        "id": "postman-collaboration",
        "name": "Team Collaboration",
        "description": "Questions on how to share collections, environments, and APIs with team members for collaborative development."
      },
      {
        "id": "postman-ci-cd",
        "name": "CI/CD Integration",
        "description": "Questions on integrating Postman with CI/CD pipelines using Newman, the command-line collection runner."
      },
      {
        "id": "postman-advanced",
        "name": "Advanced Features",
        "description": "Questions about more complex Postman features, such as mock servers and API schemas."
      }
    ]
  },
  {
    "id": "hadoop",
    "name": "Hadoop",
    "icon": "🐘",
    "color": "bg-green-700",
    "category": "Big Data",
    "description": "General questions about the Apache Hadoop framework, a collection of open-source software utilities that facilitates using a network of computers to solve problems involving massive amounts of data and computation.",
    "questionTypes": {
      "mcq": 0.7,
      "fill": 0.2,
      "code": 0.0,
      "trueorfalse": 0.1
    },
    "topics": [
      {
        "id": "hadoop-architecture",
        "name": "Hadoop Architecture",
        "description": "Questions on the core components of Hadoop, including HDFS, YARN, and MapReduce, and how they work together."
      },
      {
        "id": "hadoop-hdfs",
        "name": "HDFS",
        "description": "Questions about the Hadoop Distributed File System, a fault-tolerant, scalable file system designed for storing very large files across many machines."
      },
      {
        "id": "hadoop-mapreduce",
        "name": "MapReduce",
        "description": "Questions on the MapReduce programming model for processing and generating large data sets with a parallel, distributed algorithm."
      },
      {
        "id": "hadoop-yarn",
        "name": "YARN",
        "description": "Questions about Yet Another Resource Negotiator, the resource management layer of Hadoop that handles job scheduling and resource allocation."
      },
      {
        "id": "hadoop-ecosystem",
        "name": "Hadoop Ecosystem",
        "description": "Questions on the various projects and tools built around the core Hadoop framework, such as Hive, Pig, and HBase."
      },
      {
        "id": "hadoop-hive",
        "name": "Apache Hive",
        "description": "Questions about Hive, a data warehouse software that facilitates reading, writing, and managing large datasets residing in distributed storage using SQL-like syntax."
      },
      {
        "id": "hadoop-pig",
        "name": "Apache Pig",
        "description": "Questions on Pig, a high-level platform for creating MapReduce programs used for ETL and data analysis."
      },
      {
        "id": "hadoop-hbase",
        "name": "HBase",
        "description": "Questions about HBase, a non-relational, distributed database modeled after Google's Bigtable, designed to host very large tables."
      },
      {
        "id": "hadoop-sqoop",
        "name": "Sqoop",
        "description": "Questions on Sqoop, a tool for transferring data between Hadoop and relational databases."
      },
      {
        "id": "hadoop-flume",
        "name": "Flume",
        "description": "Questions about Flume, a service for efficiently collecting, aggregating, and moving large amounts of log data."
      },
      {
        "id": "hadoop-oozie",
        "name": "Oozie",
        "description": "Questions on Oozie, a workflow scheduler system for managing Apache Hadoop jobs."
      },
      {
        "id": "hadoop-administration",
        "name": "Cluster Administration",
        "description": "Questions on the practical aspects of managing and monitoring a Hadoop cluster."
      }
    ]
  },
  {
    "id": "spark",
    "name": "Apache Spark",
    "icon": "✨",
    "color": "bg-red-600",
    "category": "Big Data",
    "description": "General questions about Apache Spark, a unified analytics engine for large-scale data processing. Topics include RDDs, DataFrames, Spark SQL, and performance tuning.",
    "questionTypes": {
      "mcq": 0.6,
      "fill": 0.2,
      "code": 0.1,
      "trueorfalse": 0.1
    },
    "topics": [
      {
        "id": "spark-core",
        "name": "Spark Core",
        "description": "Questions on the fundamental architecture and components of Spark, including the driver program and the SparkContext."
      },
      {
        "id": "spark-rdd",
        "name": "RDDs",
        "description": "Questions about Resilient Distributed Datasets (RDDs), the core data abstraction in Spark, and their transformations and actions."
      },
      {
        "id": "spark-dataframes",
        "name": "DataFrames & Datasets",
        "description": "Questions on using DataFrames and Datasets, higher-level abstractions that provide a more structured and optimized way to work with data."
      },
      {
        "id": "spark-sql",
        "name": "Spark SQL",
        "description": "Questions about Spark SQL, a module for working with structured data that allows you to query data using SQL or a DataFrame API."
      },
      {
        "id": "spark-streaming",
        "name": "Spark Streaming",
        "description": "Questions on Spark Streaming, a module that enables scalable and fault-tolerant processing of live data streams."
      },
      {
        "id": "spark-mllib",
        "name": "MLlib",
        "description": "Questions on MLlib, Spark's machine learning library that provides a high-level API for various machine learning algorithms."
      },
      {
        "id": "spark-graphx",
        "name": "GraphX",
        "description": "Questions about GraphX, Spark's component for graph-parallel computation."
      },
      {
        "id": "spark-performance",
        "name": "Performance Tuning",
        "description": "Questions on how to optimize Spark applications for better performance, including caching, shuffling, and partitioning."
      },
      {
        "id": "spark-deployment",
        "name": "Deployment Modes",
        "description": "Questions on different ways to deploy a Spark application, such as standalone mode, YARN, and Mesos."
      },
      {
        "id": "spark-scala",
        "name": "Spark with Scala",
        "description": "Questions on writing Spark applications using the Scala programming language."
      },
      {
        "id": "spark-python",
        "name": "PySpark",
        "description": "Questions on using the PySpark API to write Spark applications with Python."
      },
      {
        "id": "spark-java",
        "name": "Spark with Java",
        "description": "Questions on using the Java API for developing Spark applications."
      }
    ]
  },
  {
    "id": "kafka",
    "name": "Apache Kafka",
    "icon": "☕",
    "color": "bg-red-700",
    "category": "Big Data",
    "description": "General questions about Apache Kafka, a distributed event streaming platform used for building real-time data pipelines and streaming applications. Topics include producers, consumers, and brokers.",
    "questionTypes": {
      "mcq": 0.7,
      "fill": 0.2,
      "code": 0.0,
      "trueorfalse": 0.1
    },
    "topics": [
      {
        "id": "kafka-basics",
        "name": "Kafka Basics",
        "description": "Questions on the core concepts of Kafka, including topics, producers, consumers, and brokers."
      },
      {
        "id": "kafka-architecture",
        "name": "Architecture",
        "description": "Questions about the high-level architecture of a Kafka cluster, including the role of the ZooKeeper."
      },
      {
        "id": "kafka-producers",
        "name": "Producers",
        "description": "Questions on how producers publish messages to a Kafka topic."
      },
      {
        "id": "kafka-consumers",
        "name": "Consumers",
        "description": "Questions on how consumers read and process messages from a Kafka topic."
      },
      {
        "id": "kafka-topics",
        "name": "Topics & Partitions",
        "description": "Questions about Kafka topics, how they are divided into partitions, and the role of replication."
      },
      {
        "id": "kafka-brokers",
        "name": "Brokers",
        "description": "Questions about Kafka brokers, the servers that store topics and partitions."
      },
      {
        "id": "kafka-zookeeper",
        "name": "ZooKeeper",
        "description": "Questions on the role of ZooKeeper in managing and coordinating a Kafka cluster (though modern Kafka can run without it)."
      },
      {
        "id": "kafka-streams",
        "name": "Kafka Streams",
        "description": "Questions on Kafka Streams, a client library for building applications that process data stored in Kafka."
      },
      {
        "id": "kafka-connect",
        "name": "Kafka Connect",
        "description": "Questions on Kafka Connect, a framework for connecting Kafka with other systems for data import/export."
      },
      {
        "id": "kafka-schema-registry",
        "name": "Schema Registry",
        "description": "Questions on using a Schema Registry to manage and enforce message schemas in Kafka."
      },
      {
        "id": "kafka-monitoring",
        "name": "Monitoring",
        "description": "Questions about tools and techniques for monitoring the health and performance of a Kafka cluster."
      },
      {
        "id": "kafka-security",
        "name": "Security",
        "description": "Questions on securing a Kafka cluster with authentication, authorization, and encryption."
      }
    ]
  },
  {
    "id": "solidity",
    "name": "Solidity",
    "icon": "🔷",
    "color": "bg-blue-600",
    "category": "Blockchain",
    "description": "General questions about Solidity, the primary high-level, contract-oriented programming language for writing smart contracts on the Ethereum blockchain. Topics include data types, functions, and security.",
    "questionTypes": {
      "mcq": 0.3,
      "fill": 0.2,
      "code": 0.4,
      "trueorfalse": 0.1
    },
    "topics": [
      {
        "id": "solidity-basics",
        "name": "Syntax & Basics",
        "description": "Questions on the fundamental syntax and structure of a Solidity smart contract."
      },
      {
        "id": "solidity-data-types",
        "name": "Data Types",
        "description": "Questions on Solidity's unique data types, including `uint`, `address`, and mappings."
      },
      {
        "id": "solidity-functions",
        "name": "Functions",
        "description": "Questions on defining and using functions in Solidity, including their visibility (e.g., `public`, `private`, `external`)."
      },
      {
        "id": "solidity-contracts",
        "name": "Contracts",
        "description": "Questions on the structure of a smart contract and how state variables are stored on the blockchain."
      },
      {
        "id": "solidity-inheritance",
        "name": "Inheritance",
        "description": "Questions about how contracts can inherit functionality from other contracts using the `is` keyword."
      },
      {
        "id": "solidity-events",
        "name": "Events & Logging",
        "description": "Questions on using events to log information on the blockchain that can be efficiently monitored off-chain."
      },
      {
        "id": "solidity-modifiers",
        "name": "Modifiers",
        "description": "Questions on using function modifiers to check conditions before a function is executed, often for access control."
      },
      {
        "id": "solidity-libraries",
        "name": "Libraries",
        "description": "Questions on using libraries to deploy reusable code that can be called by multiple contracts without being deployed with each one."
      },
      {
        "id": "solidity-assembly",
        "name": "Inline Assembly",
        "description": "Questions about using inline assembly to write low-level code for fine-grained control or gas optimization."
      },
      {
        "id": "solidity-patterns",
        "name": "Design Patterns",
        "description": "Questions on common and best-practice design patterns for writing secure and efficient smart contracts."
      },
      {
        "id": "solidity-security",
        "name": "Security Best Practices",
        "description": "Questions on identifying and mitigating common vulnerabilities in smart contracts, such as re-entrancy attacks."
      },
      {
        "id": "solidity-testing",
        "name": "Testing & Debugging",
        "description": "Questions on the tools and techniques for testing and debugging Solidity smart contracts."
      }
    ]
  },
  {
    "id": "ethereum",
    "name": "Ethereum",
    "icon": "⧫",
    "color": "bg-purple-700",
    "category": "Blockchain",
    "description": "General questions about the Ethereum blockchain, a decentralized, open-source blockchain with smart contract functionality. Topics include the EVM, gas, and development tools.",
    "questionTypes": {
      "mcq": 0.6,
      "fill": 0.2,
      "code": 0.1,
      "trueorfalse": 0.1
    },
    "topics": [
      {
        "id": "ethereum-basics",
        "name": "Ethereum Fundamentals",
        "description": "Questions on the basic concepts of Ethereum, including its purpose, decentralized nature, and the difference between Ether and the network."
      },
      {
        "id": "ethereum-evm",
        "name": "Ethereum Virtual Machine",
        "description": "Questions on the EVM, the virtual machine that executes smart contract code on the Ethereum network."
      },
      {
        "id": "ethereum-gas",
        "name": "Gas & Transaction Fees",
        "description": "Questions about the concept of gas as a unit of computational effort and how it relates to transaction fees on the network."
      },
      {
        "id": "ethereum-accounts",
        "name": "Accounts & Addresses",
        "description": "Questions on the different types of Ethereum accounts (Externally Owned Accounts and Contract Accounts) and their public addresses."
      },
      {
        "id": "ethereum-web3",
        "name": "Web3.js",
        "description": "Questions on using the Web3.js library to interact with the Ethereum blockchain from a web application."
      },
      {
        "id": "ethereum-metamask",
        "name": "MetaMask Integration",
        "description": "Questions on how to connect a dApp to the MetaMask browser wallet to manage user accounts and transactions."
      },
      {
        "id": "ethereum-truffle",
        "name": "Truffle Framework",
        "description": "Questions about using the Truffle suite for developing, testing, and deploying smart contracts."
      },
      {
        "id": "ethereum-hardhat",
        "name": "Hardhat",
        "description": "Questions about using the Hardhat development environment for compiling, deploying, and testing smart contracts."
      },
      {
        "id": "ethereum-ipfs",
        "name": "IPFS Integration",
        "description": "Questions on how to use the InterPlanetary File System (IPFS) for decentralized storage of data that can be referenced from smart contracts."
      },
      {
        "id": "ethereum-layer2",
        "name": "Layer 2 Solutions",
        "description": "Questions on various Layer 2 scaling solutions like sidechains, rollups, and state channels designed to improve Ethereum's scalability."
      },
      {
        "id": "ethereum-upgrades",
        "name": "Contract Upgrades",
        "description": "Questions about the patterns and techniques used to upgrade smart contracts to new versions while maintaining state."
      },
      {
        "id": "ethereum-oracles",
        "name": "Oracles",
        "description": "Questions on the role of oracles in fetching real-world data and feeding it to smart contracts."
      }
    ]
  },
  {
    "id": "figma",
    "name": "Figma",
    "icon": "🎨",
    "color": "bg-purple-500",
    "category": "Design",
    "description": "General questions about Figma, a web-based collaborative interface design tool. Topics include components, auto layout, and prototyping.",
    "questionTypes": {
      "mcq": 0.7,
      "fill": 0.2,
      "code": 0.0,
      "trueorfalse": 0.1
    },
    "topics": [
      {
        "id": "figma-basics",
        "name": "Interface & Tools",
        "description": "Questions on navigating the Figma interface and using its basic design tools."
      },
      {
        "id": "figma-design",
        "name": "Design Basics",
        "description": "Questions on fundamental design concepts within Figma, such as frames, layers, and vector networks."
      },
      {
        "id": "figma-components",
        "name": "Components & Variants",
        "description": "Questions on creating and using reusable components and their variants to build a design system."
      },
      {
        "id": "figma-auto-layout",
        "name": "Auto Layout",
        "description": "Questions on using Auto Layout to create responsive designs that adapt to content changes."
      },
      {
        "id": "figma-constraints",
        "name": "Constraints",
        "description": "Questions about how to use constraints to define how layers and objects should behave when a frame is resized."
      },
      {
        "id": "figma-styles",
        "name": "Styles & Design Systems",
        "description": "Questions on creating and managing text styles, color styles, and effects to maintain design consistency."
      },
      {
        "id": "figma-prototyping",
        "name": "Prototyping",
        "description": "Questions on creating interactive prototypes and user flows to simulate the user experience."
      },
      {
        "id": "figma-collaboration",
        "name": "Collaboration",
        "description": "Questions on Figma's collaborative features, such as real-time editing and commenting."
      },
      {
        "id": "figma-plugins",
        "name": "Plugins",
        "description": "Questions about finding, installing, and using Figma plugins to extend its functionality."
      },
      {
        "id": "figma-handoff",
        "name": "Developer Handoff",
        "description": "Questions on the process of preparing design files for developers, including using the Inspect panel and exporting assets."
      },
      {
        "id": "figma-responsive",
        "name": "Responsive Design",
        "description": "Questions about using Figma's features to create designs that look good on different screen sizes."
      },
      {
        "id": "figma-advanced",
        "name": "Advanced Features",
        "description": "Questions about advanced Figma features like Smart Animate, interactive components, and variables."
      }
    ]
  },
  {
    "id": "adobe-xd",
    "name": "Adobe XD",
    "icon": "✏️",
    "color": "bg-red-600",
    "category": "Design",
    "description": "General questions about Adobe XD, a vector-based user experience design tool for web and mobile applications. Topics include prototyping, design systems, and responsive resizing.",
    "questionTypes": {
      "mcq": 0.7,
      "fill": 0.2,
      "code": 0.0,
      "trueorfalse": 0.1
    },
    "topics": [
      {
        "id": "xd-basics",
        "name": "Interface & Tools",
        "description": "Questions on navigating the Adobe XD interface and using its core design tools."
      },
      {
        "id": "xd-design",
        "name": "Design & Layout",
        "description": "Questions on fundamental design and layout techniques within Adobe XD."
      },
      {
        "id": "xd-artboards",
        "name": "Artboards & Grids",
        "description": "Questions about creating and managing multiple artboards and using layout grids."
      },
      {
        "id": "xd-components",
        "name": "Components & States",
        "description": "Questions on creating and using reusable components with different states (e.g., hover, pressed)."
      },
      {
        "id": "xd-responsive",
        "name": "Responsive Resize",
        "description": "Questions about using the Responsive Resize feature to automatically adjust designs for different screen sizes."
      },
      {
        "id": "xd-prototyping",
        "name": "Prototyping & Interactions",
        "description": "Questions on creating interactive prototypes with transitions, gestures, and voice commands."
      },
      {
        "id": "xd-voice",
        "name": "Voice Prototyping",
        "description": "Questions on creating prototypes that can be controlled with voice commands."
      },
      {
        "id": "xd-collaboration",
        "name": "Sharing & Collaboration",
        "description": "Questions on sharing prototypes and design specs with stakeholders and team members."
      },
      {
        "id": "xd-plugins",
        "name": "Plugins & Integrations",
        "description": "Questions on using third-party plugins and integrating with other Adobe Creative Cloud apps."
      },
      {
        "id": "xd-specs",
        "name": "Design Specs",
        "description": "Questions on generating and sharing design specifications with developers."
      },
      {
        "id": "xd-assets",
        "name": "Assets & Libraries",
        "description": "Questions on creating and managing design assets and using Creative Cloud Libraries."
      },
      {
        "id": "xd-workflow",
        "name": "Design Workflow",
        "description": "Questions on the end-to-end design workflow using Adobe XD, from wireframing to final handoff."
      }
    ]
  },
  {
    "id": "sketch",
    "name": "Sketch",
    "icon": "✂️",
    "color": "bg-yellow-500",
    "category": "Design",
    "description": "General questions about Sketch, a vector graphics editor for macOS used for user interface and user experience design. Topics include symbols, styles, and cloud collaboration.",
    "questionTypes": {
      "mcq": 0.7,
      "fill": 0.2,
      "code": 0.0,
      "trueorfalse": 0.1
    },
    "topics": [
      {
        "id": "sketch-basics",
        "name": "Interface & Tools",
        "description": "Questions on navigating the Sketch interface and using its core design tools."
      },
      {
        "id": "sketch-vectors",
        "name": "Vector Editing",
        "description": "Questions on working with vector shapes, paths, and points in Sketch."
      },
      {
        "id": "sketch-symbols",
        "name": "Symbols & Overrides",
        "description": "Questions on creating and using reusable symbols with overrides to quickly update multiple instances of an element."
      },
      {
        "id": "sketch-styles",
        "name": "Text & Layer Styles",
        "description": "Questions on creating and applying reusable text and layer styles to maintain consistency."
      },
      {
        "id": "sketch-libraries",
        "name": "Libraries",
        "description": "Questions on creating and using Sketch Libraries to share symbols and styles across multiple documents."
      },
      {
        "id": "sketch-prototyping",
        "name": "Prototyping",
        "description": "Questions on creating interactive prototypes within Sketch to simulate a user's journey."
      },
      {
        "id": "sketch-plugins",
        "name": "Plugins",
        "description": "Questions about installing and using third-party plugins to extend Sketch's functionality."
      },
      {
        "id": "sketch-cloud",
        "name": "Sketch Cloud",
        "description": "Questions on using Sketch Cloud for collaboration, sharing documents, and getting developer feedback."
      },
      {
        "id": "sketch-handoff",
        "name": "Developer Handoff",
        "description": "Questions on the process of preparing design files for developers, including using the Sketch inspector."
      },
      {
        "id": "sketch-export",
        "name": "Export & Assets",
        "description": "Questions on exporting assets from Sketch in various formats for web and mobile development."
      },
      {
        "id": "sketch-design-systems",
        "name": "Design Systems",
        "description": "Questions on building and managing a comprehensive design system using Sketch's features."
      },
      {
        "id": "sketch-workflow",
        "name": "Design Workflow",
        "description": "Questions on the end-to-end design workflow using Sketch, from concept to handoff."
      }
    ]
  },
  {
    "id": "quant-number-system",
    "name": "Number System",
    "icon": "🔢",
    "color": "bg-blue-600",
    "category": "Aptitude",
    "description": "Questions on fundamental concepts of number systems, including types of numbers, divisibility rules, remainders, and basic arithmetic operations.",
    "questionTypes": {
      "mcq": 0.9,
      "fill": 0.1,
      "code": 0.0,
      "trueorfalse": 0.0
    },
    "topics": [
      {
        "id": "quant-number-system-basics",
        "name": "Number System Basics",
        "description": "Questions covering the different types of numbers (e.g., real, rational, prime) and their properties."
      }
    ]
  },
  {
    "id": "quant-hcf-lcm",
    "name": "HCF & LCM",
    "icon": "➗",
    "color": "bg-teal-500",
    "category": "Aptitude",
    "description": "Questions related to finding the Highest Common Factor (HCF) and Least Common Multiple (LCM) of numbers, including word problems and applications.",
    "questionTypes": {
      "mcq": 0.9,
      "fill": 0.1,
      "code": 0.0,
      "trueorfalse": 0.0
    },
    "topics": [
      {
        "id": "quant-hcf-lcm-basics",
        "name": "HCF & LCM Basics",
        "description": "Questions on the methods to find HCF and LCM and their use in solving problems."
      }
    ]
  },
  {
    "id": "quant-percentages",
    "name": "Percentages",
    "icon": "📊",
    "color": "bg-orange-500",
    "category": "Aptitude",
    "description": "Questions on percentage calculations, including profit and loss, interest, and changes in value. Includes direct calculations and word problems.",
    "questionTypes": {
      "mcq": 0.9,
      "fill": 0.1,
      "code": 0.0,
      "trueorfalse": 0.0
    },
    "topics": [
      {
        "id": "quant-percentages-basics",
        "name": "Percentage Concepts",
        "description": "Questions on the definition and application of percentages."
      }
    ]
  },
  {
    "id": "quant-ratios-proportions",
    "name": "Ratios & Proportions",
    "icon": "⚖️",
    "color": "bg-purple-500",
    "category": "Aptitude",
    "description": "Questions about ratios, proportions, and their applications in various scenarios, including problems involving ages and mixtures.",
    "questionTypes": {
      "mcq": 0.9,
      "fill": 0.1,
      "code": 0.0,
      "trueorfalse": 0.0
    },
    "topics": [
      {
        "id": "quant-ratios-proportions-basics",
        "name": "Ratio & Proportion Concepts",
        "description": "Questions on the fundamental concepts of ratios and proportions and how to solve problems involving them."
      }
    ]
  },
  {
    "id": "quant-average",
    "name": "Averages",
    "icon": "📏",
    "color": "bg-pink-500",
    "category": "Aptitude",
    "description": "Questions on calculating averages and means, including weighted averages and problems involving a series of numbers.",
    "questionTypes": {
      "mcq": 0.9,
      "fill": 0.1,
      "code": 0.0,
      "trueorfalse": 0.0
    },
    "topics": [
      {
        "id": "quant-average-basics",
        "name": "Average Calculations",
        "description": "Questions on calculating the average of a set of numbers and solving related word problems."
      }
    ]
  },
  {
    "id": "quant-mixtures",
    "name": "Mixtures & Alligation",
    "icon": "🥤",
    "color": "bg-green-500",
    "category": "Aptitude",
    "description": "Questions on the concept of mixing two or more items and calculating the final ratio or percentage, often using the rule of alligation.",
    "questionTypes": {
      "mcq": 0.9,
      "fill": 0.1,
      "code": 0.0,
      "trueorfalse": 0.0
    },
    "topics": [
      {
        "id": "quant-mixtures-basics",
        "name": "Mixtures & Alligation Concepts",
        "description": "Questions on the principles of mixtures and alligation and how to apply them to solve problems."
      }
    ]
  },
  {
    "id": "quant-simple-interest",
    "name": "Simple Interest",
    "icon": "💰",
    "color": "bg-yellow-600",
    "category": "Aptitude",
    "description": "Questions on simple interest calculations, including finding the principal, rate, time, or total amount.",
    "questionTypes": {
      "mcq": 0.9,
      "fill": 0.1,
      "code": 0.0,
      "trueorfalse": 0.0
    },
    "topics": [
      {
        "id": "quant-simple-interest-basics",
        "name": "Simple Interest Calculations",
        "description": "Questions on the formula for simple interest and its application."
      }
    ]
  },
  {
    "id": "quant-compound-interest",
    "name": "Compound Interest",
    "icon": "🏦",
    "color": "bg-green-700",
    "category": "Aptitude",
    "description": "Questions on compound interest calculations, including problems involving different compounding periods.",
    "questionTypes": {
      "mcq": 0.9,
      "fill": 0.1,
      "code": 0.0,
      "trueorfalse": 0.0
    },
    "topics": [
      {
        "id": "quant-compound-interest-basics",
        "name": "Compound Interest Calculations",
        "description": "Questions on the compound interest formula and how it differs from simple interest."
      }
    ]
  },
  {
    "id": "quant-time-work",
    "name": "Time & Work",
    "icon": "⏳",
    "color": "bg-cyan-600",
    "category": "Aptitude",
    "description": "Questions on problems involving the time taken to complete a task by a certain number of workers, including individual and combined effort.",
    "questionTypes": {
      "mcq": 0.9,
      "fill": 0.1,
      "code": 0.0,
      "trueorfalse": 0.0
    },
    "topics": [
      {
        "id": "quant-time-work-basics",
        "name": "Time & Work Concepts",
        "description": "Questions on the fundamental concepts of time and work, including efficiency and combined effort."
      }
    ]
  },
  {
    "id": "quant-time-distance",
    "name": "Time, Speed & Distance",
    "icon": "🚗",
    "color": "bg-blue-500",
    "category": "Aptitude",
    "description": "Questions on the relationship between time, speed, and distance, including problems on trains and relative speed.",
    "questionTypes": {
      "mcq": 0.9,
      "fill": 0.1,
      "code": 0.0,
      "trueorfalse": 0.0
    },
    "topics": [
      {
        "id": "quant-time-distance-basics",
        "name": "Time, Speed & Distance Concepts",
        "description": "Questions on the formulas and concepts of time, speed, and distance, including conversions."
      }
    ]
  },
  {
    "id": "quant-pipes-cisterns",
    "name": "Pipes & Cisterns",
    "icon": "🚰",
    "color": "bg-indigo-500",
    "category": "Aptitude",
    "description": "Questions on problems involving pipes filling or emptying a cistern, which are an extension of time and work concepts.",
    "questionTypes": {
      "mcq": 0.9,
      "fill": 0.1,
      "code": 0.0,
      "trueorfalse": 0.0
    },
    "topics": [
      {
        "id": "quant-pipes-cisterns-basics",
        "name": "Pipes & Cisterns Concepts",
        "description": "Questions on the application of time and work principles to problems involving pipes and tanks."
      }
    ]
  },
  {
    "id": "quant-profit-loss",
    "name": "Profit & Loss",
    "icon": "📈",
    "color": "bg-red-500",
    "category": "Aptitude",
    "description": "Questions on calculating profit, loss, cost price, and selling price, including discounts and markups.",
    "questionTypes": {
      "mcq": 0.9,
      "fill": 0.1,
      "code": 0.0,
      "trueorfalse": 0.0
    },
    "topics": [
      {
        "id": "quant-profit-loss-basics",
        "name": "Profit & Loss Concepts",
        "description": "Questions on the formulas and concepts of profit and loss calculations."
      }
    ]
  },
  {
    "id": "quant-partnership",
    "name": "Partnerships",
    "icon": "🤝",
    "color": "bg-gray-500",
    "category": "Aptitude",
    "description": "Questions on problems involving partnerships and the distribution of profit based on investment and time.",
    "questionTypes": {
      "mcq": 0.9,
      "fill": 0.1,
      "code": 0.0,
      "trueorfalse": 0.0
    },
    "topics": [
      {
        "id": "quant-partnership-basics",
        "name": "Partnership Concepts",
        "description": "Questions on how to calculate profit shares in a business partnership."
      }
    ]
  },
  {
    "id": "quant-ages",
    "name": "Problems on Ages",
    "icon": "🎂",
    "color": "bg-purple-600",
    "category": "Aptitude",
    "description": "Questions on problems involving the calculation of ages, often using ratios and algebraic equations.",
    "questionTypes": {
      "mcq": 0.9,
      "fill": 0.1,
      "code": 0.0,
      "trueorfalse": 0.0
    },
    "topics": [
      {
        "id": "quant-ages-basics",
        "name": "Age Problem Concepts",
        "description": "Questions on setting up and solving equations for age-related problems."
      }
    ]
  },
  {
    "id": "quant-trains",
    "name": "Problems on Trains",
    "icon": "🚆",
    "color": "bg-orange-600",
    "category": "Aptitude",
    "description": "Questions on problems related to trains, including calculating the time taken to cross a pole, platform, or another train.",
    "questionTypes": {
      "mcq": 0.9,
      "fill": 0.1,
      "code": 0.0,
      "trueorfalse": 0.0
    },
    "topics": [
      {
        "id": "quant-trains-basics",
        "name": "Train Problem Concepts",
        "description": "Questions on the formulas and concepts specific to problems involving trains and relative speed."
      }
    ]
  },
  {
    "id": "quant-boats-streams",
    "name": "Boats & Streams",
    "icon": "🚤",
    "color": "bg-blue-700",
    "category": "Aptitude",
    "description": "Questions on problems involving boats moving in streams, including upstream and downstream speeds.",
    "questionTypes": {
      "mcq": 0.9,
      "fill": 0.1,
      "code": 0.0,
      "trueorfalse": 0.0
    },
    "topics": [
      {
        "id": "quant-boats-streams-basics",
        "name": "Boat & Stream Concepts",
        "description": "Questions on the principles of boats in streams, including the effect of water speed."
      }
    ]
  },
  {
    "id": "quant-permutation-combination",
    "name": "Permutations & Combinations",
    "icon": "🎲",
    "color": "bg-teal-700",
    "category": "Aptitude",
    "description": "Questions on the fundamental concepts of arranging and selecting items, including factorials and probability-related problems.",
    "questionTypes": {
      "mcq": 0.9,
      "fill": 0.1,
      "code": 0.0,
      "trueorfalse": 0.0
    },
    "topics": [
      {
        "id": "quant-permutation-combination-basics",
        "name": "P&C Fundamentals",
        "description": "Questions on the basic formulas and principles of permutations and combinations."
      }
    ]
  },
  {
    "id": "quant-probability",
    "name": "Probability",
    "icon": "🎯",
    "color": "bg-purple-500",
    "category": "Aptitude",
    "description": "Questions on the likelihood of events occurring, including single-event and multiple-event probability problems.",
    "questionTypes": {
      "mcq": 0.9,
      "fill": 0.1,
      "code": 0.0,
      "trueorfalse": 0.0
    },
    "topics": [
      {
        "id": "quant-probability-basics",
        "name": "Probability Concepts",
        "description": "Questions on the fundamental concepts of probability and its calculation."
      }
    ]
  },
  {
    "id": "quant-algebra",
    "name": "Algebra",
    "icon": "➕",
    "color": "bg-green-600",
    "category": "Aptitude",
    "description": "Questions on basic algebra, including linear equations, polynomials, and quadratic equations.",
    "questionTypes": {
      "mcq": 0.9,
      "fill": 0.1,
      "code": 0.0,
      "trueorfalse": 0.0
    },
    "topics": [
      {
        "id": "quant-algebra-basics",
        "name": "Algebraic Concepts",
        "description": "Questions on the fundamental principles and formulas of algebra."
      }
    ]
  },
  {
    "id": "quant-geometry",
    "name": "Geometry",
    "icon": "📐",
    "color": "bg-indigo-600",
    "category": "Aptitude",
    "description": "Questions on geometric shapes, angles, lines, and planes, including theorems and their applications.",
    "questionTypes": {
      "mcq": 0.9,
      "fill": 0.1,
      "code": 0.0,
      "trueorfalse": 0.0
    },
    "topics": [
      {
        "id": "quant-geometry-basics",
        "name": "Geometric Principles",
        "description": "Questions on the core concepts of geometry and geometric figures."
      }
    ]
  },
  {
    "id": "quant-mensuration",
    "name": "Mensuration",
    "icon": "📏",
    "color": "bg-yellow-500",
    "category": "Aptitude",
    "description": "Questions on the calculation of area, perimeter, and volume of various 2D and 3D shapes.",
    "questionTypes": {
      "mcq": 0.9,
      "fill": 0.1,
      "code": 0.0,
      "trueorfalse": 0.0
    },
    "topics": [
      {
        "id": "quant-mensuration-basics",
        "name": "Mensuration Formulas",
        "description": "Questions on the formulas and applications of mensuration for different shapes."
      }
    ]
  },
  {
    "id": "quant-trigonometry",
    "name": "Trigonometry",
    "icon": "📐",
    "color": "bg-blue-500",
    "category": "Aptitude",
    "description": "Questions on the fundamentals of trigonometry, including trigonometric ratios, identities, and basic applications.",
    "questionTypes": {
      "mcq": 0.9,
      "fill": 0.1,
      "code": 0.0,
      "trueorfalse": 0.0
    },
    "topics": [
      {
        "id": "quant-trigonometry-basics",
        "name": "Trigonometric Concepts",
        "description": "Questions on the core principles of trigonometry and the relationships between angles and side lengths of triangles."
      }
    ]
  },
  {
    "id": "quant-logarithms",
    "name": "Logarithms",
    "icon": "📈",
    "color": "bg-red-600",
    "category": "Aptitude",
    "description": "Questions on the properties of logarithms, logarithmic equations, and their application in problem-solving.",
    "questionTypes": {
      "mcq": 0.9,
      "fill": 0.1,
      "code": 0.0,
      "trueorfalse": 0.0
    },
    "topics": [
      {
        "id": "quant-logarithms-basics",
        "name": "Logarithm Properties",
        "description": "Questions on the fundamental rules and definitions of logarithms."
      }
    ]
  },
  {
    "id": "quant-progressions",
    "name": "AP & GP",
    "icon": "🔄",
    "color": "bg-green-700",
    "category": "Aptitude",
    "description": "Questions on arithmetic progressions (AP) and geometric progressions (GP), including finding terms and sums of series.",
    "questionTypes": {
      "mcq": 0.9,
      "fill": 0.1,
      "code": 0.0,
      "trueorfalse": 0.0
    },
    "topics": [
      {
        "id": "quant-progressions-basics",
        "name": "AP & GP Concepts",
        "description": "Questions on the core concepts of arithmetic and geometric progressions."
      }
    ]
  },
  {
    "id": "reasoning-puzzles",
    "name": "Puzzles",
    "icon": "🧩",
    "color": "bg-yellow-500",
    "category": "Reasoning",
    "description": "Questions on logical puzzles that require deductive reasoning, such as seating arrangements, floor puzzles, and box puzzles.",
    "questionTypes": {
      "mcq": 0.8,
      "fill": 0.2,
      "code": 0.0,
      "trueorfalse": 0.0
    },
    "topics": [
      {
        "id": "reasoning-puzzles-basics",
        "name": "Puzzle-Solving Strategies",
        "description": "Questions on the methods and strategies for approaching and solving various types of logical puzzles."
      }
    ]
  },
  {
    "id": "reasoning-seating-arrangement",
    "name": "Seating Arrangement",
    "icon": "🪑",
    "color": "bg-purple-500",
    "category": "Reasoning",
    "description": "Questions on arranging people or objects in a row or around a circular table based on given conditions.",
    "questionTypes": {
      "mcq": 0.8,
      "fill": 0.2,
      "code": 0.0,
      "trueorfalse": 0.0
    },
    "topics": [
      {
        "id": "reasoning-seating-arrangement-basics",
        "name": "Arrangement Concepts",
        "description": "Questions on the logical principles used to solve seating arrangement problems."
      }
    ]
  },
  {
    "id": "reasoning-blood-relations",
    "name": "Blood Relations",
    "icon": "🧬",
    "color": "bg-red-500",
    "category": "Reasoning",
    "description": "Questions on deducing family relationships between people from a given set of statements.",
    "questionTypes": {
      "mcq": 0.9,
      "fill": 0.1,
      "code": 0.0,
      "trueorfalse": 0.0
    },
    "topics": [
      {
        "id": "reasoning-blood-relations-basics",
        "name": "Blood Relation Concepts",
        "description": "Questions on how to diagram and solve problems involving family relationships."
      }
    ]
  },
  {
    "id": "reasoning-syllogisms",
    "name": "Syllogisms",
    "icon": "⚖️",
    "color": "bg-indigo-500",
    "category": "Reasoning",
    "description": "Questions on drawing logical conclusions from two or more statements, often using Venn diagrams.",
    "questionTypes": {
      "mcq": 0.9,
      "fill": 0.1,
      "code": 0.0,
      "trueorfalse": 0.0
    },
    "topics": [
      {
        "id": "reasoning-syllogisms-basics",
        "name": "Syllogism Concepts",
        "description": "Questions on the logical principles of syllogisms and how to identify valid conclusions."
      }
    ]
  },
  {
    "id": "reasoning-series",
    "name": "Number & Letter Series",
    "icon": "🔢",
    "color": "bg-blue-500",
    "category": "Reasoning",
    "description": "Questions on finding the missing or next term in a sequence of numbers, letters, or a combination of both.",
    "questionTypes": {
      "mcq": 0.9,
      "fill": 0.1,
      "code": 0.0,
      "trueorfalse": 0.0
    },
    "topics": [
      {
        "id": "reasoning-series-basics",
        "name": "Series Logic",
        "description": "Questions on identifying the pattern or rule governing a number or letter series."
      }
    ]
  },
  {
    "id": "reasoning-analogy",
    "name": "Analogy",
    "icon": "🔄",
    "color": "bg-green-500",
    "category": "Reasoning",
    "description": "Questions on identifying the relationship between two items and applying the same relationship to a new pair of items.",
    "questionTypes": {
      "mcq": 0.9,
      "fill": 0.1,
      "code": 0.0,
      "trueorfalse": 0.0
    },
    "topics": [
      {
        "id": "reasoning-analogy-basics",
        "name": "Analogy Principles",
        "description": "Questions on the different types of relationships used in analogies."
      }
    ]
  },
  {
    "id": "reasoning-coding-decoding",
    "name": "Coding & Decoding",
    "icon": "📝",
    "color": "bg-cyan-500",
    "category": "Reasoning",
    "description": "Questions on deciphering a code based on a given pattern and using that pattern to code or decode new words.",
    "questionTypes": {
      "mcq": 0.9,
      "fill": 0.1,
      "code": 0.0,
      "trueorfalse": 0.0
    },
    "topics": [
      {
        "id": "reasoning-coding-decoding-basics",
        "name": "Coding & Decoding Logic",
        "description": "Questions on the various methods and logical patterns used in coding and decoding."
      }
    ]
  },
  {
    "id": "reasoning-data-sufficiency",
    "name": "Data Sufficiency",
    "icon": "📊",
    "color": "bg-orange-500",
    "category": "Reasoning",
    "description": "Questions on determining if the given data in one or more statements is sufficient to answer a question.",
    "questionTypes": {
      "mcq": 0.8,
      "fill": 0.2,
      "code": 0.0,
      "trueorfalse": 0.0
    },
    "topics": [
      {
        "id": "reasoning-data-sufficiency-basics",
        "name": "Data Sufficiency Principles",
        "description": "Questions on the logical framework for assessing whether data is sufficient to solve a problem."
      }
    ]
  },
  {
    "id": "reasoning-clocks-calendars",
    "name": "Clocks & Calendars",
    "icon": "⏰",
    "color": "bg-gray-600",
    "category": "Reasoning",
    "description": "Questions on calculating the time, angle, or day of the week based on clock and calendar rules.",
    "questionTypes": {
      "mcq": 0.9,
      "fill": 0.1,
      "code": 0.0,
      "trueorfalse": 0.0
    },
    "topics": [
      {
        "id": "reasoning-clocks-calendars-basics",
        "name": "Clock & Calendar Logic",
        "description": "Questions on the mathematical and logical rules for solving problems related to clocks and calendars."
      }
    ]
  },
  {
    "id": "reasoning-direction-sense",
    "name": "Direction Sense",
    "icon": "🧭",
    "color": "bg-blue-700",
    "category": "Reasoning",
    "description": "Questions on determining a person's final position or direction based on a series of movements and turns.",
    "questionTypes": {
      "mcq": 0.9,
      "fill": 0.1,
      "code": 0.0,
      "trueorfalse": 0.0
    },
    "topics": [
      {
        "id": "reasoning-direction-sense-basics",
        "name": "Directional Concepts",
        "description": "Questions on the core concepts of direction and relative positioning."
      }
    ]
  },
  {
    "id": "reasoning-logical-deductions",
    "name": "Logical Deductions",
    "icon": "🧠",
    "color": "bg-purple-700",
    "category": "Reasoning",
    "description": "Questions on deducing conclusions from a set of given statements using logical principles.",
    "questionTypes": {
      "mcq": 0.9,
      "fill": 0.1,
      "code": 0.0,
      "trueorfalse": 0.0
    },
    "topics": [
      {
        "id": "reasoning-logical-deductions-basics",
        "name": "Deductive Reasoning",
        "description": "Questions on the formal rules of logical deduction and valid inference."
      }
    ]
  },
  {
    "id": "verbal-reading-comprehension",
    "name": "Reading Comprehension",
    "icon": "📖",
    "color": "bg-green-600",
    "category": "Verbal",
    "description": "Questions that require a candidate to read a passage and answer questions based on the content, including identifying the main idea, tone, and inferences.",
    "questionTypes": {
      "mcq": 0.8,
      "fill": 0.2,
      "code": 0.0,
      "trueorfalse": 0.0
    },
    "topics": [
      {
        "id": "verbal-reading-comprehension-basics",
        "name": "Reading Comprehension Skills",
        "description": "Questions on strategies for effective reading and answering comprehension questions."
      }
    ]
  },
  {
    "id": "verbal-synonyms",
    "name": "Synonyms",
    "icon": "🔄",
    "color": "bg-blue-500",
    "category": "Verbal",
    "description": "Questions on identifying words that are similar in meaning to a given word.",
    "questionTypes": {
      "mcq": 1.0,
      "fill": 0.0,
      "code": 0.0,
      "trueorfalse": 0.0
    },
    "topics": [
      {
        "id": "verbal-synonyms-basics",
        "name": "Synonym Identification",
        "description": "Questions on identifying words with the same or nearly the same meaning."
      }
    ]
  },
  {
    "id": "verbal-antonyms",
    "name": "Antonyms",
    "icon": "🔁",
    "color": "bg-red-500",
    "category": "Verbal",
    "description": "Questions on identifying words that are opposite in meaning to a given word.",
    "questionTypes": {
      "mcq": 1.0,
      "fill": 0.0,
      "code": 0.0,
      "trueorfalse": 0.0
    },
    "topics": [
      {
        "id": "verbal-antonyms-basics",
        "name": "Antonym Identification",
        "description": "Questions on identifying words with opposite meanings."
      }
    ]
  },
  {
    "id": "verbal-error-detection",
    "name": "Error Detection",
    "icon": "🚨",
    "color": "bg-orange-500",
    "category": "Verbal",
    "description": "Questions that require identifying grammatical errors in a sentence.",
    "questionTypes": {
      "mcq": 0.8,
      "fill": 0.2,
      "code": 0.0,
      "trueorfalse": 0.0
    },
    "topics": [
      {
        "id": "verbal-error-detection-basics",
        "name": "Grammar & Usage",
        "description": "Questions on common grammatical rules and their application in sentences."
      }
    ]
  },
  {
    "id": "verbal-sentence-improvement",
    "name": "Sentence Improvement",
    "icon": "✏️",
    "color": "bg-purple-500",
    "category": "Verbal",
    "description": "Questions on choosing the best phrase or word to replace a part of a sentence to make it grammatically correct and coherent.",
    "questionTypes": {
      "mcq": 0.8,
      "fill": 0.2,
      "code": 0.0,
      "trueorfalse": 0.0
    },
    "topics": [
      {
        "id": "verbal-sentence-improvement-basics",
        "name": "Sentence Structure",
        "description": "Questions on improving sentence structure for clarity and correctness."
      }
    ]
  },
  {
    "id": "verbal-parajumbles",
    "name": "Para Jumbles",
    "icon": "🪢",
    "color": "bg-indigo-600",
    "category": "Verbal",
    "description": "Questions on arranging a set of jumbled sentences in a logical order to form a coherent paragraph.",
    "questionTypes": {
      "mcq": 0.8,
      "fill": 0.2,
      "code": 0.0,
      "trueorfalse": 0.0
    },
    "topics": [
      {
        "id": "verbal-parajumbles-basics",
        "name": "Para Jumble Strategies",
        "description": "Questions on the techniques for identifying introductory, concluding, and connecting sentences in a paragraph."
      }
    ]
  },
  {
    "id": "verbal-fill-in-the-blanks",
    "name": "Fill in the Blanks",
    "icon": "📝",
    "color": "bg-yellow-500",
    "category": "Verbal",
    "description": "Questions on filling in missing words in a sentence to make it grammatically and contextually correct.",
    "questionTypes": {
      "mcq": 0.0,
      "fill": 1.0,
      "code": 0.0,
      "trueorfalse": 0.0
    },
    "topics": [
      {
        "id": "verbal-fill-in-the-blanks-basics",
        "name": "Context & Grammar",
        "description": "Questions on selecting the appropriate word based on context and grammatical rules."
      }
    ]
  },
  {
    "id": "verbal-one-word",
    "name": "One Word Substitution",
    "icon": "🗣️",
    "color": "bg-teal-600",
    "category": "Verbal",
    "description": "Questions on replacing a phrase or a sentence with a single word that conveys the same meaning.",
    "questionTypes": {
      "mcq": 1.0,
      "fill": 0.0,
      "code": 0.0,
      "trueorfalse": 0.0
    },
    "topics": [
      {
        "id": "verbal-one-word-basics",
        "name": "Substitution Concepts",
        "description": "Questions on identifying the single word that best describes a given phrase."
      }
    ]
  },
  {
    "id": "verbal-idioms",
    "name": "Idioms & Phrases",
    "icon": "💬",
    "color": "bg-pink-500",
    "category": "Verbal",
    "description": "Questions on understanding the meaning of common idioms and phrases and using them correctly in a sentence.",
    "questionTypes": {
      "mcq": 1.0,
      "fill": 0.0,
      "code": 0.0,
      "trueorfalse": 0.0
    },
    "topics": [
      {
        "id": "verbal-idioms-basics",
        "name": "Idioms & Phrases Concepts",
        "description": "Questions on the literal and figurative meanings of common idioms and phrases."
      }
    ]
  },
  {
    "id": "verbal-active-passive",
    "name": "Active & Passive Voice",
    "icon": "🔄",
    "color": "bg-blue-700",
    "category": "Verbal",
    "description": "Questions on converting sentences between active and passive voice and understanding their correct usage.",
    "questionTypes": {
      "mcq": 0.7,
      "fill": 0.3,
      "code": 0.0,
      "trueorfalse": 0.0
    },
    "topics": [
      {
        "id": "verbal-active-passive-basics",
        "name": "Voice Conversion",
        "description": "Questions on the rules for transforming sentences between active and passive voice."
      }
    ]
  },
  {
    "id": "verbal-direct-indirect",
    "name": "Direct & Indirect Speech",
    "icon": "🗨️",
    "color": "bg-gray-600",
    "category": "Verbal",
    "description": "Questions on converting sentences between direct and indirect speech, paying attention to changes in tense and pronouns.",
    "questionTypes": {
      "mcq": 0.7,
      "fill": 0.3,
      "code": 0.0,
      "trueorfalse": 0.0
    },
    "topics": [
      {
        "id": "verbal-direct-indirect-basics",
        "name": "Speech Conversion",
        "description": "Questions on the rules for converting statements between direct and indirect speech."
      }
    ]
  },
  {
    "id": "resume-writing",
    "name": "Resume Writing",
    "icon": "📄",
    "color": "bg-gray-600",
    "category": "Interview Prep",
    "description": "Questions on best practices for creating a professional resume, including structure, content, and ATS optimization.",
    "questionTypes": {
      "mcq": 0.8,
      "fill": 0.2,
      "code": 0.0,
      "trueorfalse": 0.0
    },
    "topics": [
      {
        "id": "resume-structure",
        "name": "Resume Structure & Format",
        "description": "Questions on the essential sections of a resume and how to format them for clarity and impact."
      },
      {
        "id": "resume-content",
        "name": "Content Writing",
        "description": "Questions on writing compelling content for your resume, focusing on action verbs and quantifiable achievements."
      },
      {
        "id": "resume-keywords",
        "name": "Keywords & ATS Optimization",
        "description": "Questions on how to use relevant keywords and format a resume to pass through Applicant Tracking Systems (ATS)."
      },
      {
        "id": "resume-experience",
        "name": "Work Experience Section",
        "description": "Questions on how to effectively describe your professional experience, focusing on accomplishments rather than duties."
      },
      {
        "id": "resume-skills",
        "name": "Skills Section",
        "description": "Questions on how to categorize and list technical and soft skills on a resume."
      },
      {
        "id": "resume-projects",
        "name": "Projects Section",
        "description": "Questions on how to showcase personal and academic projects to highlight relevant skills."
      },
      {
        "id": "resume-education",
        "name": "Education Section",
        "description": "Questions on what to include and how to format the education section of a resume."
      },
      {
        "id": "resume-objective",
        "name": "Objective vs Summary",
        "description": "Questions on the difference between a resume objective and a professional summary and when to use each."
      },
      {
        "id": "resume-templates",
        "name": "Templates & Design",
        "description": "Questions on choosing and customizing resume templates for different industries."
      },
      {
        "id": "resume-mistakes",
        "name": "Common Mistakes",
        "description": "Questions on identifying and avoiding common resume-writing errors."
      },
      {
        "id": "resume-tailoring",
        "name": "Tailoring for Jobs",
        "description": "Questions on how to customize a resume for a specific job application."
      },
      {
        "id": "resume-portfolio",
        "name": "Portfolio Integration",
        "description": "Questions on how to link a resume to an online portfolio or professional profile."
      }
    ]
  },
  {
    "id": "group-discussion",
    "name": "Group Discussion",
    "icon": "🗣️",
    "color": "bg-yellow-600",
    "category": "Interview Prep",
    "description": "Questions on the skills and strategies needed to participate effectively in a group discussion (GD), including communication, leadership, and conflict resolution.",
    "questionTypes": {
      "mcq": 0.8,
      "fill": 0.2,
      "code": 0.0,
      "trueorfalse": 0.0
    },
    "topics": [
      {
        "id": "gd-basics",
        "name": "GD Fundamentals",
        "description": "Questions on the purpose and format of a group discussion in a professional context."
      },
      {
        "id": "gd-types",
        "name": "Types of GD",
        "description": "Questions on the different types of group discussions, such as topic-based and case-study-based."
      },
      {
        "id": "gd-initiation",
        "name": "Initiating Discussion",
        "description": "Questions on how to confidently start a group discussion and make a strong first impression."
      },
      {
        "id": "gd-participation",
        "name": "Active Participation",
        "description": "Questions on the importance of contributing meaningfully to the discussion without dominating it."
      },
      {
        "id": "gd-leadership",
        "name": "Leadership Skills",
        "description": "Questions on demonstrating leadership in a GD by guiding the conversation and summarizing points."
      },
      {
        "id": "gd-listening",
        "name": "Active Listening",
        "description": "Questions on the importance of actively listening to other participants' points to build a coherent discussion."
      },
      {
        "id": "gd-conflict-resolution",
        "name": "Handling Conflicts",
        "description": "Questions on how to handle disagreements and steer the conversation back on track constructively."
      },
      {
        "id": "gd-body-language",
        "name": "Body Language",
        "description": "Questions on the role of non-verbal cues and body language in a group discussion."
      },
      {
        "id": "gd-topics",
        "name": "Common GD Topics",
        "description": "Questions on common themes and current events that are frequently used as GD topics."
      },
      {
        "id": "gd-evaluation",
        "name": "Evaluation Criteria",
        "description": "Questions on what evaluators look for in a GD, such as content, communication, and collaboration skills."
      },
      {
        "id": "gd-dos-donts",
        "name": "Do's and Don'ts",
        "description": "Questions on the key dos and don'ts for successful participation in a GD."
      },
      {
        "id": "gd-practice",
        "name": "Practice Strategies",
        "description": "Questions on how to effectively prepare for a group discussion."
      }
    ]
  },
  {
    "id": "hr-interview",
    "name": "HR Interview",
    "icon": "🤝",
    "color": "bg-green-500",
    "category": "Interview Prep",
    "description": "Questions on preparing for and excelling in an HR interview, focusing on common questions, behavioral scenarios, and soft skills.",
    "questionTypes": {
      "mcq": 0.8,
      "fill": 0.2,
      "code": 0.0,
      "trueorfalse": 0.0
    },
    "topics": [
      {
        "id": "hr-common-questions",
        "name": "Common HR Questions",
        "description": "Questions on how to answer standard HR interview questions like 'Tell me about yourself' and 'Why should we hire you?'."
      },
      {
        "id": "hr-tell-me-about-yourself",
        "name": "Tell Me About Yourself",
        "description": "Questions on crafting a concise and impactful response to this common opening question."
      },
      {
        "id": "hr-strengths-weaknesses",
        "name": "Strengths & Weaknesses",
        "description": "Questions on how to discuss personal strengths and weaknesses in a way that highlights self-awareness and growth."
      },
      {
        "id": "hr-why-company",
        "name": "Why This Company?",
        "description": "Questions on how to research a company and articulate your interest and fit for the role."
      },
      {
        "id": "hr-career-goals",
        "name": "Career Goals",
        "description": "Questions on how to discuss your short-term and long-term career aspirations with an interviewer."
      },
      {
        "id": "hr-salary-negotiation",
        "name": "Salary Negotiation",
        "description": "Questions on the best practices for discussing salary expectations and negotiating an offer."
      },
      {
        "id": "hr-gap-explanation",
        "name": "Explaining Gaps",
        "description": "Questions on how to address employment gaps on a resume or in an interview."
      },
      {
        "id": "hr-behavioral-questions",
        "name": "Behavioral Questions",
        "description": "Questions on how to use the STAR method to answer behavioral questions about past experiences."
      },
      {
        "id": "hr-conflict-resolution",
        "name": "Conflict Resolution",
        "description": "Questions on how to describe a situation where you had to resolve a conflict with a colleague or manager."
      },
      {
        "id": "hr-leadership",
        "name": "Leadership Examples",
        "description": "Questions on providing specific examples of when you demonstrated leadership skills."
      },
      {
        "id": "hr-questions-to-ask",
        "name": "Questions to Ask HR",
        "description": "Questions on preparing smart questions to ask the interviewer to demonstrate your interest and gather information."
      },
      {
        "id": "hr-follow-up",
        "name": "Follow-up Process",
        "description": "Questions on the best way to follow up after an HR interview."
      }
    ]
  },
  {
    "id": "technical-interview",
    "name": "Technical Interview",
    "icon": "💻",
    "color": "bg-blue-600",
    "category": "Interview Prep",
    "description": "Questions on preparing for and succeeding in a technical interview, covering topics like data structures, algorithms, system design, and project discussion.",
    "questionTypes": {
      "mcq": 0.4,
      "fill": 0.2,
      "code": 0.3,
      "trueorfalse": 0.1
    },
    "topics": [
      {
        "id": "tech-coding-problems",
        "name": "Coding Problems",
        "description": "Questions on approaching and solving algorithmic coding problems during an interview."
      },
      {
        "id": "tech-system-design",
        "name": "System Design",
        "description": "Questions on designing scalable and reliable systems, including databases, APIs, and microservices."
      },
      {
        "id": "tech-data-structures",
        "name": "Data Structures",
        "description": "Questions on the properties and applications of common data structures like arrays, linked lists, trees, and graphs."
      },
      {
        "id": "tech-algorithms",
        "name": "Algorithms",
        "description": "Questions on common algorithms, including sorting, searching, and dynamic programming."
      },
      {
        "id": "tech-database-questions",
        "name": "Database Questions",
        "description": "Questions on database concepts, including SQL, NoSQL, and database design."
      },
      {
        "id": "tech-oops-concepts",
        "name": "OOP Concepts",
        "description": "Questions on the core principles of Object-Oriented Programming (OOP): encapsulation, inheritance, polymorphism, and abstraction."
      },
      {
        "id": "tech-project-discussion",
        "name": "Project Discussion",
        "description": "Questions on how to effectively discuss past projects, highlighting your role and key technical decisions."
      },
      {
        "id": "tech-problem-solving",
        "name": "Problem-Solving Approach",
        "description": "Questions on the structured approach to solving technical problems, from clarification to optimization."
      },
      {
        "id": "tech-coding-best-practices",
        "name": "Coding Best Practices",
        "description": "Questions on writing clean, readable, and maintainable code in an interview setting."
      },
      {
        "id": "tech-testing-debugging",
        "name": "Testing & Debugging",
        "description": "Questions on the importance of testing your code and debugging strategies during a technical interview."
      },
      {
        "id": "tech-technology-trends",
        "name": "Technology Trends",
        "description": "Questions on staying current with new technologies and industry trends."
      },
      {
        "id": "tech-whiteboard-coding",
        "name": "Whiteboard Coding",
        "description": "Questions on the process of writing code on a whiteboard or shared document, including communication and pseudocode."
      }
    ]
  },
  {
    "id": "behavioral-interview",
    "name": "Behavioral Interview",
    "icon": "🧠",
    "color": "bg-purple-500",
    "category": "Interview Prep",
    "description": "Questions on preparing for and answering behavioral interview questions, focusing on providing specific examples of past experiences.",
    "questionTypes": {
      "mcq": 0.8,
      "fill": 0.2,
      "code": 0.0,
      "trueorfalse": 0.0
    },
    "topics": [
      {
        "id": "behavioral-star-method",
        "name": "STAR Method",
        "description": "Questions on the STAR (Situation, Task, Action, Result) method for structuring answers to behavioral questions."
      },
      {
        "id": "behavioral-teamwork",
        "name": "Teamwork Examples",
        "description": "Questions on providing examples of working effectively in a team, including collaboration and conflict resolution."
      },
      {
        "id": "behavioral-leadership",
        "name": "Leadership Situations",
        "description": "Questions on describing situations where you demonstrated leadership or took initiative."
      },
      {
        "id": "behavioral-problem-solving",
        "name": "Problem-Solving Stories",
        "description": "Questions on detailing a time you encountered a problem and how you approached and solved it."
      },
      {
        "id": "behavioral-failure-learning",
        "name": "Failure & Learning",
        "description": "Questions on discussing a professional failure and what you learned from the experience."
      },
      {
        "id": "behavioral-innovation",
        "name": "Innovation & Creativity",
        "description": "Questions on providing examples of when you came up with a creative solution or improved a process."
      },
      {
        "id": "behavioral-pressure-handling",
        "name": "Handling Pressure",
        "description": "Questions on describing how you handle stressful situations, tight deadlines, or difficult stakeholders."
      },
      {
        "id": "behavioral-adaptability",
        "name": "Adaptability",
        "description": "Questions on how you have adapted to a major change in the workplace or a project."
      },
      {
        "id": "behavioral-communication",
        "name": "Communication Skills",
        "description": "Questions on providing examples of effective communication, especially when dealing with complex information or difficult conversations."
      },
      {
        "id": "behavioral-customer-focus",
        "name": "Customer Focus",
        "description": "Questions on describing a time you went above and beyond for a customer or client."
      },
      {
        "id": "behavioral-ethics",
        "name": "Ethical Dilemmas",
        "description": "Questions on how you would handle an ethical dilemma in a professional setting."
      },
      {
        "id": "behavioral-preparation",
        "name": "Story Preparation",
        "description": "Questions on the process of preparing a bank of stories to draw from for behavioral interviews."
      }
    ]
  },
  {
    "id": "communication-skills",
    "name": "Communication Skills",
    "icon": "🗨️",
    "color": "bg-pink-500",
    "category": "Soft Skills",
    "description": "Questions on various aspects of effective communication, including verbal, non-verbal, written, and public speaking skills.",
    "questionTypes": {
      "mcq": 0.8,
      "fill": 0.2,
      "code": 0.0,
      "trueorfalse": 0.0
    },
    "topics": [
      {
        "id": "comm-verbal",
        "name": "Verbal Communication",
        "description": "Questions on the principles of clear and effective verbal communication in professional settings."
      },
      {
        "id": "comm-non-verbal",
        "name": "Non-Verbal Communication",
        "description": "Questions on the role and interpretation of body language, facial expressions, and other non-verbal cues."
      },
      {
        "id": "comm-listening",
        "name": "Active Listening",
        "description": "Questions on the importance and techniques of active listening to understand others and respond thoughtfully."
      },
      {
        "id": "comm-public-speaking",
        "name": "Public Speaking",
        "description": "Questions on strategies for giving effective presentations and speaking confidently to an audience."
      },
      {
        "id": "comm-written",
        "name": "Written Communication",
        "description": "Questions on best practices for professional written communication, such as emails, reports, and memos."
      },
      {
        "id": "comm-presentation",
        "name": "Presentation Skills",
        "description": "Questions on the art of preparing and delivering engaging presentations."
      },
      {
        "id": "comm-interpersonal",
        "name": "Interpersonal Skills",
        "description": "Questions on the skills needed for effective interaction with colleagues and clients."
      },
      {
        "id": "comm-feedback",
        "name": "Giving & Receiving Feedback",
        "description": "Questions on how to provide constructive feedback and how to receive it gracefully."
      },
      {
        "id": "comm-cultural-awareness",
        "name": "Cultural Awareness",
        "description": "Questions on communicating effectively across different cultures and backgrounds."
      },
      {
        "id": "comm-digital",
        "name": "Digital Communication",
        "description": "Questions on best practices for communication in the digital age, including video calls and instant messaging."
      },
      {
        "id": "comm-persuasion",
        "name": "Persuasion & Influence",
        "description": "Questions on the techniques of persuading others and influencing decisions in a professional context."
      },
      {
        "id": "comm-networking",
        "name": "Networking Skills",
        "description": "Questions on building and maintaining professional relationships."
      }
    ]
  },
  {
    "id": "gk-current-affairs",
    "name": "Current Affairs",
    "icon": "📰",
    "color": "bg-red-500",
    "category": "GK",
    "description": "Questions on recent events of national and international importance, including politics, economy, and sports. Note: Information may be time-sensitive.",
    "questionTypes": {
      "mcq": 0.9,
      "fill": 0.1,
      "code": 0.0,
      "trueorfalse": 0.0
    },
    "topics": [
      {
        "id": "gk-current-affairs-basics",
        "name": "Recent Events",
        "description": "Questions on recent events in the news."
      }
    ]
  },
  {
    "id": "gk-static",
    "name": "Static GK",
    "icon": "📚",
    "color": "bg-blue-600",
    "category": "GK",
    "description": "Questions on traditional general knowledge topics that are not subject to frequent change, such as history, geography, and political science.",
    "questionTypes": {
      "mcq": 0.9,
      "fill": 0.1,
      "code": 0.0,
      "trueorfalse": 0.0
    },
    "topics": [
      {
        "id": "gk-history",
        "name": "History",
        "description": "Questions on historical events, figures, and timelines."
      },
      {
        "id": "gk-geography",
        "name": "Geography",
        "description": "Questions on world geography, including continents, countries, rivers, and mountains."
      },
      {
        "id": "gk-polity",
        "name": "Polity",
        "description": "Questions on the political systems, government, and constitution of a country."
      },
      {
        "id": "gk-art-culture",
        "name": "Art & Culture",
        "description": "Questions on various art forms, cultural traditions, and famous cultural landmarks."
      }
    ]
  },
  {
    "id": "gk-business",
    "name": "Business & Economy",
    "icon": "💹",
    "color": "bg-green-500",
    "category": "GK",
    "description": "Questions on business concepts, economic principles, financial markets, and current economic trends.",
    "questionTypes": {
      "mcq": 0.9,
      "fill": 0.1,
      "code": 0.0,
      "trueorfalse": 0.0
    },
    "topics": [
      {
        "id": "gk-finance",
        "name": "Finance",
        "description": "Questions on financial terms, instruments, and principles."
      },
      {
        "id": "gk-banking",
        "name": "Banking",
        "description": "Questions on banking institutions, policies, and regulations."
      },
      {
        "id": "gk-budget",
        "name": "Budget & Policies",
        "description": "Questions on government budgets, economic policies, and fiscal measures."
      }
    ]
  },
  {
    "id": "gk-science-tech",
    "name": "Science & Technology",
    "icon": "🔬",
    "color": "bg-purple-500",
    "category": "GK",
    "description": "Questions on a broad range of scientific and technological concepts, including recent discoveries and innovations.",
    "questionTypes": {
      "mcq": 0.8,
      "fill": 0.2,
      "code": 0.0,
      "trueorfalse": 0.0
    },
    "topics": [
      {
        "id": "gk-space",
        "name": "Space Exploration",
        "description": "Questions on space missions, astronomical bodies, and space technology."
      },
      {
        "id": "gk-biotechnology",
        "name": "Biotechnology",
        "description": "Questions on concepts in biotechnology, including genetic engineering and medical advancements."
      },
      {
        "id": "gk-it",
        "name": "Information Technology",
        "description": "Questions on recent developments and key concepts in the field of information technology."
      }
    ]
  },
  {
    "id": "gk-awards",
    "name": "Awards & Honors",
    "icon": "🏆",
    "color": "bg-yellow-500",
    "category": "GK",
    "description": "Questions on national and international awards, including their fields of recognition and notable recipients.",
    "questionTypes": {
      "mcq": 1.0,
      "fill": 0.0,
      "code": 0.0,
      "trueorfalse": 0.0
    },
    "topics": [
      {
        "id": "gk-awards-basics",
        "name": "Major Awards",
        "description": "Questions on major awards and honors in various fields like Nobel Prizes and film awards."
      }
    ]
  },
  {
    "id": "gk-sports",
    "name": "Sports",
    "icon": "🏅",
    "color": "bg-blue-400",
    "category": "GK",
    "description": "Questions on major sporting events, famous athletes, and rules of various games.",
    "questionTypes": {
      "mcq": 1.0,
      "fill": 0.0,
      "code": 0.0,
      "trueorfalse": 0.0
    },
    "topics": [
      {
        "id": "gk-sports-basics",
        "name": "Sports & Games",
        "description": "Questions on general knowledge about sports, including major tournaments and historical facts."
      }
    ]
  },
  {
    "id": "gk-constitution",
    "name": "Indian Constitution & Polity",
    "icon": "📜",
    "color": "bg-indigo-600",
    "category": "GK",
    "description": "Questions on the framework of the Indian Constitution, including its features, articles, amendments, and the structure of the government.",
    "questionTypes": {
      "mcq": 0.9,
      "fill": 0.1,
      "code": 0.0,
      "trueorfalse": 0.0
    },
    "topics": [
      {
        "id": "gk-constitution-basics",
        "name": "Constitutional Fundamentals",
        "description": "Questions on the core principles and key articles of the Indian Constitution."
      }
    ]
  },
  {
    "id": "gk-environment",
    "name": "Environment & Ecology",
    "icon": "🌱",
    "color": "bg-green-700",
    "category": "GK",
    "description": "Questions on environmental science, ecological principles, climate change, and related global issues and organizations.",
    "questionTypes": {
      "mcq": 0.9,
      "fill": 0.1,
      "code": 0.0,
      "trueorfalse": 0.0
    },
    "topics": [
      {
        "id": "gk-environment-basics",
        "name": "Environmental Concepts",
        "description": "Questions on fundamental concepts of ecology and environmental science."
      }
    ]
  },
  {
    "id": "cybersecurity",
    "name": "Cybersecurity",
    "icon": "🛡️",
    "color": "bg-red-700",
    "category": "Security",
    "description": "General questions on the protection of computer systems and networks from digital attacks. Topics include cryptography, network security, and common threats.",
    "questionTypes": {
      "mcq": 0.6,
      "fill": 0.2,
      "code": 0.1,
      "trueorfalse": 0.1
    },
    "topics": [
      {
        "id": "cyber-basics",
        "name": "Cybersecurity Basics",
        "description": "Questions on fundamental cybersecurity concepts, including the CIA triad (Confidentiality, Integrity, Availability)."
      },
      {
        "id": "cyber-cryptography",
        "name": "Cryptography",
        "description": "Questions on encryption, decryption, and cryptographic algorithms used to secure data."
      },
      {
        "id": "cyber-network-security",
        "name": "Network Security",
        "description": "Questions on protecting computer networks and data from intrusion, including firewalls and VPNs."
      },
      {
        "id": "cyber-web-security",
        "name": "Web Security",
        "description": "Questions on securing web applications against common attacks like XSS and SQL injection."
      },
      {
        "id": "cyber-malware",
        "name": "Malware & Attacks",
        "description": "Questions on different types of malware (e.g., viruses, worms, ransomware) and common attack vectors."
      },
      {
        "id": "cyber-penetration",
        "name": "Penetration Testing",
        "description": "Questions on the process and methodologies of penetration testing to find security vulnerabilities."
      },
      {
        "id": "cyber-incident-response",
        "name": "Incident Response",
        "description": "Questions on the steps and best practices for responding to a security breach or incident."
      },
      {
        "id": "cyber-forensics",
        "name": "Digital Forensics",
        "description": "Questions on the methods for collecting, preserving, and analyzing digital evidence."
      },
      {
        "id": "cyber-cloud-security",
        "name": "Cloud Security",
        "description": "Questions on the unique challenges and solutions for securing data and applications in the cloud."
      },
      {
        "id": "cyber-iot",
        "name": "IoT Security",
        "description": "Questions on the security vulnerabilities and best practices for securing Internet of Things devices."
      },
      {
        "id": "cyber-blockchain-security",
        "name": "Blockchain Security",
        "description": "Questions on the security aspects and potential vulnerabilities of blockchain technology."
      },
      {
        "id": "cyber-standards",
        "name": "Security Standards & Compliance",
        "description": "Questions on industry-standard security frameworks and regulatory compliance (e.g., ISO 27001, GDPR)."
      }
    ]
  },
  {
    "id": "blockchain",
    "name": "Blockchain & Web3",
    "icon": "⛓️",
    "color": "bg-gray-800",
    "category": "Blockchain",
    "description": "General questions on the fundamental concepts of blockchain technology, its applications (e.g., Web3, NFTs, DeFi), and underlying principles like consensus mechanisms.",
    "questionTypes": {
      "mcq": 0.6,
      "fill": 0.2,
      "code": 0.1,
      "trueorfalse": 0.1
    },
    "topics": [
      {
        "id": "blockchain-basics",
        "name": "Blockchain Basics",
        "description": "Questions on the core concepts of blockchain, including distributed ledgers, immutability, and decentralization."
      },
      {
        "id": "blockchain-ethereum",
        "name": "Ethereum",
        "description": "Questions on the Ethereum blockchain, its role as a platform for smart contracts, and the use of Ether (ETH)."
      },
      {
        "id": "blockchain-solidity",
        "name": "Solidity",
        "description": "Questions on the Solidity programming language for writing smart contracts."
      },
      {
        "id": "blockchain-smart-contracts",
        "name": "Smart Contracts",
        "description": "Questions on the nature of smart contracts, their execution, and their use in building decentralized applications (dApps)."
      },
      {
        "id": "blockchain-nfts",
        "name": "NFTs",
        "description": "Questions on Non-Fungible Tokens (NFTs), their technology, and their use cases in digital art and assets."
      },
      {
        "id": "blockchain-defi",
        "name": "DeFi (Decentralized Finance)",
        "description": "Questions on the concept of DeFi and its applications, such as lending protocols and decentralized exchanges."
      },
      {
        "id": "blockchain-consensus",
        "name": "Consensus Mechanisms",
        "description": "Questions on different consensus algorithms like Proof of Work (PoW) and Proof of Stake (PoS) and their role in securing the network."
      },
      {
        "id": "blockchain-hyperledger",
        "name": "Hyperledger",
        "description": "Questions on Hyperledger, an open-source collaborative effort focused on advancing cross-industry blockchain technologies."
      },
      {
        "id": "blockchain-ipfs",
        "name": "IPFS",
        "description": "Questions on the InterPlanetary File System (IPFS) and its role in decentralized storage for blockchain applications."
      },
      {
        "id": "blockchain-dapps",
        "name": "DApps (Decentralized Apps)",
        "description": "Questions on the architecture and functionality of decentralized applications built on blockchain networks."
      },
      {
        "id": "blockchain-web3",
        "name": "Web3.js & Ethers.js",
        "description": "Questions on the libraries used to interact with the Ethereum blockchain from a web browser."
      },
      {
        "id": "blockchain-security",
        "name": "Blockchain Security",
        "description": "Questions on the security considerations and attack vectors unique to blockchain networks."
      }
    ]
  },
  {
    "id": "data-science",
    "name": "Data Science & Big Data",
    "icon": "📊",
    "color": "bg-blue-700",
    "category": "Data",
    "description": "General questions on the field of data science, which involves using scientific methods, processes, and algorithms to extract knowledge and insights from structured and unstructured data.",
    "questionTypes": {
      "mcq": 0.6,
      "fill": 0.2,
      "code": 0.1,
      "trueorfalse": 0.1
    },
    "topics": [
      {
        "id": "ds-data-analysis",
        "name": "Data Analysis",
        "description": "Questions on the process of inspecting, cleaning, transforming, and modeling data to discover useful information."
      },
      {
        "id": "ds-visualization",
        "name": "Data Visualization",
        "description": "Questions on the graphical representation of data to communicate insights clearly and effectively."
      },
      {
        "id": "ds-statistics",
        "name": "Statistics for Data Science",
        "description": "Questions on the statistical concepts and methods essential for data science, such as probability, hypothesis testing, and regression."
      },
      {
        "id": "ds-pandas",
        "name": "Pandas & NumPy",
        "description": "Questions on using the Python libraries Pandas and NumPy for data manipulation and numerical operations."
      },
      {
        "id": "ds-sql",
        "name": "SQL for Data Science",
        "description": "Questions on using Structured Query Language (SQL) to retrieve and manipulate data from databases."
      },
      {
        "id": "ds-big-data",
        "name": "Big Data Basics",
        "description": "Questions on the characteristics (Volume, Velocity, Variety) and challenges of big data."
      },
      {
        "id": "ds-hadoop",
        "name": "Hadoop Ecosystem",
        "description": "Questions on the role of the Hadoop ecosystem (HDFS, MapReduce, etc.) in processing big data."
      },
      {
        "id": "ds-spark",
        "name": "Apache Spark",
        "description": "Questions on using Apache Spark for large-scale data processing and analytics."
      },
      {
        "id": "ds-data-cleaning",
        "name": "Data Cleaning & Preprocessing",
        "description": "Questions on the process of handling missing values, duplicates, and outliers to prepare data for analysis."
      },
      {
        "id": "ds-data-engineering",
        "name": "Data Engineering",
        "description": "Questions on the processes and technologies involved in building systems for collecting, storing, and transforming data."
      },
      {
        "id": "ds-ml",
        "name": "Machine Learning for Data Science",
        "description": "Questions on the application of machine learning algorithms (e.g., supervised, unsupervised) to solve data science problems."
      },
      {
        "id": "ds-cloud",
        "name": "Cloud Data Platforms (AWS, GCP, Azure)",
        "description": "Questions on using cloud services for data storage, processing, and analytics."
      }
    ]
  },
  {
    "id": "software-engineering",
    "name": "Software Engineering",
    "icon": "🛠️",
    "color": "bg-green-600",
    "category": "Engineering",
    "description": "General questions on the discipline of software engineering, which involves the application of a systematic, disciplined, quantifiable approach to the development, operation, and maintenance of software.",
    "questionTypes": {
      "mcq": 0.8,
      "fill": 0.2,
      "code": 0.0,
      "trueorfalse": 0.0
    },
    "topics": [
      {
        "id": "se-sdlc",
        "name": "Software Development Life Cycle",
        "description": "Questions on the different stages of the SDLC, from requirements gathering to maintenance."
      },
      {
        "id": "se-agile",
        "name": "Agile & Scrum",
        "description": "Questions on Agile methodologies and the Scrum framework for software development."
      },
      {
        "id": "se-version-control",
        "name": "Version Control (Git)",
        "description": "Questions on using Git for version control, including branching, merging, and collaboration workflows."
      },
      {
        "id": "se-ci-cd",
        "name": "CI/CD Pipelines",
        "description": "Questions on Continuous Integration and Continuous Deployment pipelines and their role in automating the software delivery process."
      },
      {
        "id": "se-design-patterns",
        "name": "Design Patterns",
        "description": "Questions on common software design patterns (e.g., Singleton, Factory, Observer) and their use cases."
      },
      {
        "id": "se-clean-code",
        "name": "Clean Code Principles",
        "description": "Questions on writing code that is easy to read, understand, and maintain, based on principles from the 'Clean Code' book."
      },
      {
        "id": "se-testing",
        "name": "Unit & Integration Testing",
        "description": "Questions on different levels of software testing, including unit tests, integration tests, and end-to-end tests."
      },
      {
        "id": "se-refactoring",
        "name": "Code Refactoring",
        "description": "Questions on the process of restructuring existing computer code without changing its external behavior."
      },
      {
        "id": "se-documentation",
        "name": "Documentation Best Practices",
        "description": "Questions on the importance and best practices of documenting software code and systems."
      },
      {
        "id": "se-microservices",
        "name": "Microservices Architecture",
        "description": "Questions on the microservices architectural style, its benefits, and challenges compared to monolithic architectures."
      },
      {
        "id": "se-scalability",
        "name": "Scalability & Performance",
        "description": "Questions on designing software systems that can handle increasing workloads and maintain performance."
      },
      {
        "id": "se-system-design",
        "name": "System Design",
        "description": "Questions on the process of designing a software system to meet a set of functional and non-functional requirements."
      }
    ]
  }
]
export default techTopics;