
// bind,call,apply interview question 

const employee = {
    firstName: 'Nazrul',
    lastName: 'Islam',
    salary:40000,
    getFullName: function(){
        console.log(this.firstName,this.lastName);
    },
    chargeBill: function(amount, tips, tax){
        //console.log(this);
        this.salary = this.salary - amount - tips - tax;
        return this.salary;
    }
}

// employee.getFullName();
// employee.chargeBill(5000);
// console.log('salary', employee.salary);

const heroPerson = {
    firstName:'Hero',
    lastName: 'Alam',
    salary:20000
}

const friendlyPerson = {
    firstName:'Zahid',
    lastName: 'Hasan',
    salary:25000
}

// const heroChargeBill = employee.chargeBill.bind(heroPerson);
// heroChargeBill(3000);
// console.log(heroPerson.salary);

// employee.chargeBill.call(heroPerson,1000);
// employee.chargeBill.call(heroPerson,2000);

//employee.chargeBill.call(heroPerson,1000,100,10);

employee.chargeBill.apply(heroPerson,[1000,100,10]);
console.log(heroPerson.salary);


