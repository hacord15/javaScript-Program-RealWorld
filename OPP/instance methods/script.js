class University {
    constructor(name) {
      this.name = name;
      this.departments = [];
    }
  
    addDepartment(department) {
      this.departments.push(department);
      console.log(`Department "${department}" added to ${this.name}.`);
    }
  
    removeDepartment(department) {
      const index = this.departments.indexOf(department);
      if (index !== -1) {
        this.departments.splice(index, 1);
        console.log(`Department "${department}" removed from ${this.name}.`);
      } else {
        console.log(`Department "${department}" does not exist in ${this.name}.`);
      }
    }
  
    displayDepartments() {
      console.log(`Departments in ${this.name}:`);
      if (this.departments.length === 0) {
        console.log('No departments available.');
      } else {
        this.departments.forEach((department, index) => {
          console.log(`${index + 1}. ${department}`);
        });
      }
    }
  }
  
  // Create an instance of the University class
  const university = new University('ABC University');
  
  // Perform operations on the university
  university.displayDepartments(); // Departments in ABC University: No departments available.
  
  university.addDepartment('Science');
  university.addDepartment('Mathematics');
  university.addDepartment('Physics');
  university.displayDepartments();
  // Departments in ABC University:
  // 1. Computer Science
  // 2. Mathematics
  // 3. Physics
  
  university.removeDepartment('Mathematics');
  university.displayDepartments();
  // Departments in ABC University:
  // 1. Science
  // 2. Physics
  
  university.removeDepartment('Chemistry');
  // Department "Chemistry" does not exist in ABC University.
  
  