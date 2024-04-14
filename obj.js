// Define a Cat constructor function
function Cat(name, breed, color) {
    this.name = name;
    this.breed = breed;
    this.color = color;
    
    // Define greeting method within the constructor
    this.greeting = function() {
      console.log(`Hello, said ${this.name} the ${this.breed}.`);
    };
  }
  
  // Create cat instances using the Cat constructor
  const cat = new Cat('Bertie', 'Cymric', 'white');
  const cat2 = new Cat('Elfie', 'Aphrodite Giant', 'ginger');
  
  // Call greeting() method for each cat instance
  cat.greeting();
  cat2.greeting();
