class Person {
    constructor(firstName,lastName,salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}

const newPerson = new Person('Nazrul','Islam',40000);
console.log(newPerson);