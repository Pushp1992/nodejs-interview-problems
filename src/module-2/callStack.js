// Currently the console output is: 'foo', 'bar', 'baz'
// TODO: Print the output is sequence as : 'foo', 'baz', 'bar'

// Change the logic at Line 12, to achieve the result without changing the order of function call.

const bar = () => console.log('bar');

const baz = () => console.log('baz');

const foo = () => {
    console.log('foo');
    bar();
    baz();
};

foo();