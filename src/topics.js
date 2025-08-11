const techTopics = [
  // Programming Languages (Expanded)
  { id: "javascript", name: "JavaScript", icon: "🟨", color: "bg-yellow-500", category: "Programming" },
  { id: "python", name: "Python", icon: "🐍", color: "bg-green-600", category: "Programming" },
  { id: "java", name: "Java", icon: "☕", color: "bg-orange-600", category: "Programming" },
  { id: "cpp", name: "C++", icon: "⚡", color: "bg-blue-600", category: "Programming" },
  { id: "csharp", name: "C#", icon: "💜", color: "bg-purple-600", category: "Programming" },
  { id: "go", name: "Go", icon: "🐹", color: "bg-cyan-600", category: "Programming" },
  { id: "rust", name: "Rust", icon: "🦀", color: "bg-orange-700", category: "Programming" },
  { id: "typescript", name: "TypeScript", icon: "🔷", color: "bg-blue-500", category: "Programming" },
  { id: "ruby", name: "Ruby", icon: "💎", color: "bg-red-600", category: "Programming" },
  { id: "php", name: "PHP", icon: "🐘", color: "bg-purple-700", category: "Programming" },
  { id: "scala", name: "Scala", icon: "⚙️", color: "bg-indigo-600", category: "Programming" },
  { id: "dart", name: "Dart", icon: "🎯", color: "bg-blue-400", category: "Programming" },
  { id: "perl", name: "Perl", icon: "🦪", color: "bg-pink-600", category: "Programming" },
  { id: "haskell", name: "Haskell", icon: "📐", color: "bg-green-700", category: "Programming" },
  { id: "elixir", name: "Elixir", icon: "🔮", color: "bg-purple-500", category: "Programming" },
  { id: "clojure", name: "Clojure", icon: "🔗", color: "bg-green-600", category: "Programming" },

  // Web Development (Expanded)
  { id: "html", name: "HTML", icon: "🌐", color: "bg-red-500", category: "Web" },
  { id: "css", name: "CSS", icon: "🎨", color: "bg-blue-400", category: "Web" },
  { id: "react", name: "React.js", icon: "⚛️", color: "bg-cyan-500", category: "Web" },
  { id: "nextjs", name: "Next.js", icon: "⚫", color: "bg-gray-800", category: "Web" },
  { id: "vue", name: "Vue.js", icon: "💚", color: "bg-green-500", category: "Web" },
  { id: "angular", name: "Angular", icon: "🅰️", color: "bg-red-600", category: "Web" },
  { id: "svelte", name: "Svelte", icon: "🔥", color: "bg-orange-500", category: "Web" },
  { id: "gatsby", name: "Gatsby", icon: "🌿", color: "bg-purple-400", category: "Web" },
  { id: "ember", name: "Ember.js", icon: "🐹", color: "bg-red-400", category: "Web" },
  { id: "jquery", name: "jQuery", icon: "💙", color: "bg-blue-600", category: "Web" },

  // Backend & APIs (Expanded)
  { id: "nodejs", name: "Node.js", icon: "🟢", color: "bg-green-600", category: "Backend" },
  { id: "express", name: "Express.js", icon: "🚂", color: "bg-gray-700", category: "Backend" },
  { id: "django", name: "Django", icon: "🎸", color: "bg-green-700", category: "Backend" },
  { id: "flask", name: "Flask", icon: "🌶️", color: "bg-red-400", category: "Backend" },
  { id: "fastapi", name: "FastAPI", icon: "⚡", color: "bg-teal-600", category: "Backend" },
  { id: "spring", name: "Spring Boot", icon: "🍃", color: "bg-green-600", category: "Backend" },
  { id: "laravel", name: "Laravel", icon: "🎯", color: "bg-red-600", category: "Backend" },
  { id: "ruby-on-rails", name: "Ruby on Rails", icon: "💎", color: "bg-red-500", category: "Backend" },
  { id: "aspnet", name: "ASP.NET", icon: "🅰️", color: "bg-purple-700", category: "Backend" },
  { id: "graphql", name: "GraphQL", icon: "🔺", color: "bg-pink-600", category: "Backend" },

  // Databases (Expanded)
  { id: "sql", name: "SQL", icon: "🗄️", color: "bg-blue-700", category: "Database" },
  { id: "mysql", name: "MySQL", icon: "🐬", color: "bg-orange-600", category: "Database" },
  { id: "postgresql", name: "PostgreSQL", icon: "🐘", color: "bg-blue-800", category: "Database" },
  { id: "mongodb", name: "MongoDB", icon: "🍃", color: "bg-green-700", category: "Database" },
  { id: "redis", name: "Redis", icon: "🔴", color: "bg-red-600", category: "Database" },
  { id: "sqlite", name: "SQLite", icon: "📦", color: "bg-gray-500", category: "Database" },
  { id: "cassandra", name: "Cassandra", icon: "🎰", color: "bg-purple-600", category: "Database" },
  { id: "firebase", name: "Firebase", icon: "🔥", color: "bg-orange-400", category: "Database" },

  // Mobile Development (Expanded)
  { id: "react-native", name: "React Native", icon: "📱", color: "bg-blue-500", category: "Mobile" },
  { id: "flutter", name: "Flutter", icon: "🦋", color: "bg-blue-400", category: "Mobile" },
  { id: "kotlin", name: "Kotlin", icon: "🟣", color: "bg-purple-500", category: "Mobile" },
  { id: "swift", name: "Swift", icon: "🍎", color: "bg-orange-500", category: "Mobile" },
  { id: "java-android", name: "Java (Android)", icon: "🤖", color: "bg-green-600", category: "Mobile" },
  { id: "objective-c", name: "Objective-C", icon: "🍏", color: "bg-green-700", category: "Mobile" },

  // DevOps & Cloud (Expanded)
  { id: "docker", name: "Docker", icon: "🐳", color: "bg-blue-600", category: "DevOps" },
  { id: "kubernetes", name: "Kubernetes", icon: "☸️", color: "bg-blue-700", category: "DevOps" },
  { id: "terraform", name: "Terraform", icon: "🌍", color: "bg-green-600", category: "DevOps" },
  { id: "ansible", name: "Ansible", icon: "🎯", color: "bg-red-600", category: "DevOps" },
  { id: "jenkins", name: "Jenkins", icon: "🤖", color: "bg-red-700", category: "DevOps" },
  { id: "aws", name: "AWS", icon: "☁️", color: "bg-yellow-600", category: "Cloud" },
  { id: "azure", name: "Azure", icon: "🌐", color: "bg-blue-600", category: "Cloud" },
  { id: "gcp", name: "Google Cloud", icon: "🌈", color: "bg-red-500", category: "Cloud" },
  { id: "digitalocean", name: "DigitalOcean", icon: "🐬", color: "bg-blue-500", category: "Cloud" },
  { id: "openstack", name: "OpenStack", icon: "🔧", color: "bg-gray-700", category: "Cloud" },

  // Computer Science Fundamentals (Expanded)
  { id: "dsa", name: "Data Structures & Algorithms", icon: "🌳", color: "bg-indigo-600", category: "CS Fundamentals" },
  { id: "os", name: "Operating Systems", icon: "💻", color: "bg-blue-500", category: "CS Fundamentals" },
  { id: "dbms", name: "Database Management Systems", icon: "🗄️", color: "bg-green-500", category: "CS Fundamentals" },
  { id: "cn", name: "Computer Networks", icon: "🌐", color: "bg-cyan-500", category: "CS Fundamentals" },
  { id: "compiler", name: "Compiler Design", icon: "🔧", color: "bg-gray-600", category: "CS Fundamentals" },
  { id: "ai-ml", name: "AI & Machine Learning", icon: "🤖", color: "bg-purple-600", category: "CS Fundamentals" },
  { id: "theory-computation", name: "Theory of Computation", icon: "📚", color: "bg-indigo-700", category: "CS Fundamentals" },
  { id: "cryptography", name: "Cryptography", icon: "🔒", color: "bg-purple-700", category: "CS Fundamentals" },
  { id: "software-engineering", name: "Software Engineering", icon: "🛠️", color: "bg-blue-700", category: "CS Fundamentals" },

  // OOP Specific (Expanded)
  { id: "oops-python", name: "OOP in Python", icon: "🐍", color: "bg-green-500", category: "OOP" },
  { id: "oops-java", name: "OOP in Java", icon: "☕", color: "bg-orange-500", category: "OOP" },
  { id: "oops-cpp", name: "OOP in C++", icon: "⚡", color: "bg-blue-500", category: "OOP" },
  { id: "oops-csharp", name: "OOP in C#", icon: "💜", color: "bg-purple-500", category: "OOP" },
  { id: "oops-ruby", name: "OOP in Ruby", icon: "💎", color: "bg-red-600", category: "OOP" },

  // Tools & Others (Expanded)
  { id: "git", name: "Git & Version Control", icon: "🌿", color: "bg-orange-600", category: "Tools" },
  { id: "linux", name: "Linux Commands", icon: "🐧", color: "bg-gray-800", category: "Tools" },
  { id: "testing", name: "Software Testing", icon: "🧪", color: "bg-teal-500", category: "Tools" },
  { id: "webpack", name: "Webpack", icon: "📦", color: "bg-purple-600", category: "Tools" },
  { id: "babel", name: "Babel", icon: "📝", color: "bg-yellow-400", category: "Tools" },
  { id: "eslint", name: "ESLint", icon: "🚨", color: "bg-red-500", category: "Tools" },
  { id: "prettier", name: "Prettier", icon: "🎨", color: "bg-pink-400", category: "Tools" },
  { id: "jira", name: "Jira", icon: "📋", color: "bg-blue-700", category: "Tools" },
  { id: "postman", name: "Postman", icon: "📬", color: "bg-orange-400", category: "Tools" },

  // Other popular categories you might want to add:
  // Big Data & Analytics
  { id: "hadoop", name: "Hadoop", icon: "🐘", color: "bg-green-700", category: "Big Data" },
  { id: "spark", name: "Apache Spark", icon: "✨", color: "bg-red-600", category: "Big Data" },
  { id: "kafka", name: "Apache Kafka", icon: "☕", color: "bg-red-700", category: "Big Data" },
  
  // Blockchain & Crypto
  { id: "blockchain", name: "Blockchain", icon: "⛓️", color: "bg-gray-800", category: "Blockchain" },
  { id: "solidity", name: "Solidity", icon: "🔷", color: "bg-blue-600", category: "Blockchain" },
  { id: "ethereum", name: "Ethereum", icon: "⧫", color: "bg-purple-700", category: "Blockchain" },
  
  // UI/UX & Design
  { id: "figma", name: "Figma", icon: "🎨", color: "bg-purple-500", category: "Design" },
  { id: "adobe-xd", name: "Adobe XD", icon: "✏️", color: "bg-red-600", category: "Design" },
  { id: "sketch", name: "Sketch", icon: "✂️", color: "bg-yellow-500", category: "Design" },

];

export default techTopics;