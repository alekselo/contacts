interface User  { 
  name : string;
  age: number;
  group: string;
};

interface Admin  {
  name: string;
  age: number;
  role: string;
};

type Person = User | Admin;

const persons: Person[] = [
  {
    name: 'Иван Петров',
    age: 27,
    group: 'SEO-специалист',
  },
  {
    name: 'Марат Aляуддинов',
    age: 20,
    group: 'Музыкант',
  },
  {
    name: 'Василий Пупкин',
    age: 43,
    group: 'Семья',
  },
  {
    name: 'Иван Васильевич',
    age: 65,
    group: 'Друзья',
  },
  {
    name: 'Лев Толстой',
    age: 194,
    group: 'Кумиры',
  },
  {
    name: "Максим Лескин",
    age: 33,
    role: "Администратор",
  },
];

const isAdmin = (val: User | Admin): val is User => 'group' in val; 



const logPerson = (person: Person) => {
  let information: string;
  if (isAdmin(person)) {
    information = person.group;
  } else {
    information = person.role;
  }
  console.log(`${person.name}, ${person.age}, ${information}`);
};

persons.forEach(logPerson);