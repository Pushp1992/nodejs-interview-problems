// Do not run this file, use the exposed data of this file in `src/module-4/books.js`

// TODO: Use nodejs api to expose all the constants
// TODO: Use es6 for constant declaration

const Authors = [
    { id: 1, name: 'J.R.R. Tolkien' },
    { id: 2, name: 'Charles Dickens' },
    { id: 3, name: 'JK Rowling' },
    { id: 4, name: 'Fyodor Dostoyevsky' },
    { id: 5, name: 'Edgar Allan Poe' },
    { id: 6, name: 'C. S. Lewis' },
    { id: 7, name: 'Roald Dahl' },
    { id: 8, name: 'Eric Arthur Blair' },
    { id: 9, name: 'Leo Tolstoy' },
];

const Countries = [
    { id: 1, name: 'India' },
    { id: 2, name: 'Albania' },
    { id: 3, name: 'Algeria' },
    { id: 4, name: 'India' },
    { id: 5, name: 'Angola' },
    { id: 6, name: 'Argentina' },
    { id: 7, name: 'India' },
    { id: 8, name: 'Australia' },
    { id: 9, name: 'Bahrain' },
];

module.exports = { Authors, Countries };