import greeter = require('code/modules/sample');

function greet2(name) {
    greeter(name);
    console.log(name);
}

export = greet2;