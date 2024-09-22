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
const student=new student("roni",20);
const teacher=new Teacher("Ben",50);
// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
