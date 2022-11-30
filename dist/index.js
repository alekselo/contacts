"use strict";
;
;
const persons = [
    {
        type: 'user',
        name: 'Иван Петров',
        age: 27,
        group: 'SEO-специалист',
    },
    {
        type: 'user',
        name: 'Марат Aляуддинов',
        age: 20,
        group: 'Музыкант',
    },
    {
        type: 'user',
        name: 'Василий Пупкин',
        age: 43,
        group: 'Семья',
    },
    {
        type: 'user',
        name: 'Иван Васильевич',
        age: 65,
        group: 'Друзья',
    },
    {
        type: "admin",
        name: "Cемён Слепаков",
        age: 36,
        role: "Администратор",
    },
    {
        type: 'user',
        name: 'Лев Толстой',
        age: 194,
        group: 'Кумиры',
    },
    {
        type: "admin",
        name: "Максим Лескин",
        age: 33,
        role: "Администратор",
    },
];
const isAdmin = (person) => {
    return person.type === 'admin';
};
const isUser = (person) => {
    return person.type === 'user';
};
const isAdmin1 = (val) => 'group' in val;
const logPerson = (person) => {
    let information = '';
    if (isAdmin1(person)) {
        if (isUser(person)) {
            information = person.group;
        }
    }
    else if (isAdmin(person)) {
        information = person.role;
    }
    console.log(` - ${person.name}, ${person.age}, ${information}`);
};
console.log('Admins:');
persons.filter(isAdmin).forEach(logPerson);
console.log();
console.log('Users:');
persons.filter(isUser).forEach(logPerson);
