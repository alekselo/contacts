"use strict";
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
];
const logPerson = (user) => {
    console.log(`${user.name}, ${user.age}`);
};
console.log('Users:');
persons.forEach(logPerson);
