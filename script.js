//complete this code
class Person {
	constructor(name,age){
		this.name=name;
		this.age=age;
	}

	get identity(){
		return  ${this.name}
	}
	set yOld(age){
		this.age=age;
	}
}


class Student extends Person {
	
	study(){
		console.log(`${this.name} is studying`);
	}
}

class Teacher extends Person {
	teach(){
		console.log(`${this.name} is teaching`);
	}
}

const person=new Person ("abhi",33);
console.log(person.name);
console.log(person.age);
person.age=20;
console.log(person.age);

const student=new student("roni",20);
console.log(student.study())

const teacher=new Teacher("Ben",50);
console.log(teacher.teach());

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
