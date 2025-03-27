class Employee {
  // Private properties
  #salary;
  #password;
  
  constructor(name, age, username, password, email, salary) {
      this.name = name;
      this.age = age;
      this.email = email;
      this.#salary = salary;
      this.username = username;
  }

  // Private method to hash password
  #hashedPassword(password) {
      return `hashed_${password}`;
  }

  // Validate password
  validatePassword(inputpassword) {
      return this.#password === this.#hashedPassword(inputpassword);
  }

  // Get user information (excluding password for security reasons)
  getUserInfo() {
      return {
          name: this.name,
          age: this.age,
          username: this.username,
          email: this.email,
          salary: this.#salary,
      };
  }
  
  // Setter method to update salary
  setsalary(newsalary) {
      this.#salary = newsalary;
  }

  // Update user profile information
  updateProfile({ username, email, password }) {
      if (username) this.username = username;
      if (email) this.email = email;
      if (password) this.#password = this.#hashedPassword(password);
  }

  // Static method to validate email format
  static isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
  }
};

// Prototype check
let z = Employee.prototype;
console.log(z);

// Manager class extending Employee
class Manager extends Employee {
  constructor(name, age, username, password, email, salary, role = 'manager') {
      super(name, age, username, password, email, salary);
      this.role = role;
  }
  
  // Override getUserInfo method to include role
  getUserInfo() {
      const baseInfo = super.getUserInfo();
      return { ...baseInfo, role: this.role };
  }
  
  // Method for manager to delete a user
  deleteUser(user) {
      console.log(`User ${user.username} has been deleted by Manager ${this.username}.`);
  }
}

// Developer class extending Employee
class Developer extends Employee {
  constructor(name, age, username, password, email, salary, programmingLanguage) {
      super(name, age, username, password, email, salary);
      this.programmingLanguage = programmingLanguage;
  }

  // Override getUserInfo method to include programming language
  getUserInfo() {
      const baseInfo = super.getUserInfo();
      return { ...baseInfo, programmingLanguage: this.programmingLanguage };
  }
}

// Intern class extending Employee
class Intern extends Employee {
  constructor(name, age, username, password, email, mentor) {
      super(name, age, username, password, email);
      this.mentor = mentor;
  }
  
  // Override setsalary method since interns don't have a salary
  setsalary() {
      return "Interns do not have salary";
  }

  // Override getUserInfo method to indicate no salary
  getUserInfo() {
      return {
          name: this.name,
          age: this.age,
          username: this.username,
          email: this.email,
          mentor: this.mentor,
          salary: "no salary",
      };
  }
}

// Creating instances of the classes
const user = new Employee("mohamed", 25, "mo", "123456", "khalifa@gmail.com", 50000);
user.setsalary(60000);
console.log("User Info:", user.getUserInfo());
console.log("Authentication:", user.validatePassword("123456")); // true
console.log(Employee.isValidEmail(user.email));

////////////////
const manager = new Manager("manager", 50, "mo", "123456", "manager@gmail.com", 60000, "manager");
console.log(manager.getUserInfo());
console.log("Authentication:", manager.validatePassword("123456"));

///////////////////
const developer = new Developer("developer", 30, "developer", "123456", "developer@gmail.com", 70000, "java");
console.log(developer.getUserInfo());

/////////////////////
let intern = new Intern("intern", 20, "intern", "123456", "intern@gmail.com", "mohamed");
console.log(intern.getUserInfo());
console.log(intern.setsalary());



// // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // Requirement 2

const schema = {
    name: "string",
    age: "number",
    isStudent: "boolean",
    address: {
      city: "string",
      zip: "number", 
    },
    arr: "object",
    func: "function"
  };
  const obj = {
    name: "John",
    age: 25,
    isStudent: false,
    address: {
      city: "New York",
      zip: 10001,
    },
    arr: [1,2,3,4],
    func: function() {
      console.log("Hello");
    }
  };
  



  function validateObject(obj, schema) {
    for (const key in schema) {
    let expectedValue = schema[key];
    let actualValue = obj[key];
    //* array
     if (expectedValue === "array") {
       if (actualValue.constructor !== Array) {
       console.log(`must pass array`);
    return false;
    }
    }
    //* object
if (expectedValue.constructor === Object) {
    if (actualValue.constructor !== Object) {
    console.log(`must pass object`);
    return false;
    }
    if (!validateObject(actualValue, expectedValue)) E
    
    console.log(`must pass object`); //
    return false;
}
    //* string - number - boolean - undefined - function
if (expectedValue !== typeof actualValue && 
    ["string", "number", "boolean", "undefined", "function"]. includes(expectedValue))
    {
    console.log( `must pass ${expectedValue}` );
    return false;
    }
    
    }
    return true;
}

console.log(validateObject(obj, schema));


// function validateObject(obj, schema)
// {

//     let values = Object.values(schema);
//     let objValues = Object.values(obj);
//     for(let i = 0; i < values.length; i++)
//     {   

//         if (typeof objValues[i] === "object" && !Array.isArray(objValues[i])) {
//             if (!validateObject(objValues[i], values[i])) {
//             return false;
//             }

//         } 

//         else if(typeof objValues[i] !== values[i]){
//             return false;
//         }
//     }


//     return true;
// }

//  console.log(validateObject(obj, schema)); // Output: true


// console.log("a" > "A"); // Output: false