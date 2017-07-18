exports.myDateTime = function () {
    return Date();
};

exports.withAddparmeter = function(first, second) {
    return "The two number Add : " + first + second + " \n";
};

exports.withMulparmeter = function(first, second) {
    return "The two number Mul : " + first * second + " \n";
};

exports.withDivparmeter = function(first, second) {
    return "The two number Div : " + first / second + " \n" ;
};
 
exports.array = function()
{
    return [1, "String", {}, 1.1, true];
}

exports.arrayIndexOf = function(argv)
{
    if(argv.indexOf('help')) {
        return 'This is the help text.';
    }
}










