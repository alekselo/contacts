"use strict";
;
;
const persons = [
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
const isAdmin = (val) => 'group' in val;
const logPerson = (person) => {
    let information;
    if (isAdmin(person)) {
        information = person.group;
    }
    else {
        information = person.role;
    }
    console.log(`${person.name}, ${person.age}, ${information}`);
};
persons.forEach(logPerson);
