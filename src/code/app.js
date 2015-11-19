
    var greeter = require('code/modules/sample');
    var greeter2 = require('code/modules/sample2');
    var $ = require('jquery');

    $(document.body).html(greeter("World"));
    greeter2("blah");

