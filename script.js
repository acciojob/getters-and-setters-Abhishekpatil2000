//complete this code
class Person {
	constructor(name,age){
		this._name=name;
		this._age=age;
	}

	get name(){
		return this._name;
	}
	set grown(age){
		this._age=age;
	}
}


class Student extends Person {
	
	study(){
		return this._name ` is studying`;
	}
}

class Teacher extends Person {
	teach(){
		return this._name ` is teaching`;
	}
}

const person=new Person ("abhi",33);
console.log(person._name);
console.log(person._age);
person.grown=20;
console.log(person._age);

const student=new Student("roni",20);
console.log(student.study())

const teacher=new Teacher("Ben",50);
console.log(teacher.teach());

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
