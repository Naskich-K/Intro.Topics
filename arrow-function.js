// const cube = function (x) {
//     return x * x * x
// }
// We can use the arrow function to the the same
// Key benefits: shorter syntax

const cube = (x) => {
    return x * x * x
}

console.log(cube(5))

// If the function is simple and goes straight to return some value, then:

const cubeS = (x) => x * x * x

console.log(cubeS(4))

// "this" to acess the original object 
// Another example

const event = {
    name: 'Outer Space',
    printMemberList: function (){
        console.log('Member list for ' + this.name)
    }
}

event.printMemberList()

// Arrow funtions is not useful for methods. We do not have access to "this" if we use arrow function:

const event1 = {
    name: 'Outer Space',
    printMemberList:() => {
        console.log('Member list for ' + this.name)
    }
}

event1.printMemberList()

const event2 = {
    name: 'Outer Space',
    memberList: ['Nasko', 'Luke', 'Jenny'],
    // Even shorter syntax, ES6 method definition
    printMemberList() {
        console.log('Member list for ' + this.name)
// We use the aarow function so that "this" takes into account my original object and not part of it
        this.memberList.forEach((member) => {
            console.log(member + ' is invited ' + this.name)
        })
    }
}

event2.printMemberList()