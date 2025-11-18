// problem-1
function formatValue1(value: string): string {
  return value.toUpperCase();
}

const problem1: string = "hello";
const uppercaseConvert: string = formatValue1(problem1);
console.log(uppercaseConvert); 


// problem-2
const addArrow = (num1:number, num2:number):number=>num1*num2
const multi=addArrow(5,10)
console.log(multi);


// problem-3
function formatValue2(value: boolean): boolean {
  return !value
}

const problem3: boolean = false;
const oppositevalueConvert: boolean = formatValue2(problem3);
console.log(oppositevalueConvert); 


/* ------------------------------------------------------------------- */

function getLength(value: string | any[]): number {
  if (typeof value === "string") {
    return value.length;
  } else if (Array.isArray(value)) {
    return value.length;
  }else{
    return 0
  }

}

console.log(getLength('typescript'));    
console.log(getLength([10, 20, 30, 40])); 

/* --------------------------------------------------------------------- */

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

const person1 = new Person('John Doe', 30);
console.log(person1.getDetails());

const person2 = new Person('Alice', 25);
console.log(person2.getDetails());

/* ---------------------------------------------------------------------- */
type Item = {
  title: string;
  rating: number; 
};

function filterByRating(items: Item[]): Item[] {
  return items.filter(item => item.rating >= 4);
}

const books: Item[] = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },
];

console.log(filterByRating(books));

/* ------------------------------------------------------------------------- */
type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

function filterActiveUsers(users: User[]): User[] {
    return users.filter((user) => user.isActive === true);
}

const users: User[] = [
  { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
  { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
  { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];

console.log(filterActiveUsers(users));

/* --------------------------------------------------------------------- */
