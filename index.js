var http = require('http');
var second = require('./second');

http.createServer(function (req, res) {
  
    //Print
    //console.log(res);
    
    res.writeHead(200, {'Content-Type': 'text/plain'});

    var txt = second.myDateTime() + " \n";
    var txt1 = second.withAddparmeter(5,5);
    var txt2 = second.withMulparmeter(5,5);
    var txt3 = second.withDivparmeter(5,5);
    
    //Check Array Get
    var array = second.array();
    var arrayIndexOf = second.arrayIndexOf(['foo', 'bar', 'help']);
    //Check Type Of Object
    console.log(typeof array);
     
    //Copy one Array To seconde 
    var calendars = [];
    array.forEach(function(item)
    {
        calendars.push(item);
    });

    var arr = [ 'a', 'b', 'c'];
    arr.push('d'); // insert as last item
    console.log(arr); // ['a', 'b', 'c', 'd']
    console.log(arr.indexOf(2)); // returns -1
    console.log(arr.indexOf("2")); // returns 1
    console.log(arr.shift()); // remove first item
    console.log(arr.pop()); // remove last item
    console.log(arr); // ['a', 'b', 'c']
    var obj = { has_thing: true, id: 123 };
    if(obj.has_thing) {
        console.log('true', obj.id);
    }

    var items = [ { id: 1 }, { id: 2}, { id: 3}, { id: 4 }];
    // only include items with even id's
    items = items.filter(function(item){
    return (item.id % 2 == 0);
    });
    console.log(items);
    // prints [ {id: 2 }, { id: 4} ]

    var a = [ 'a', 'b', 'c' ];
    var b = [ 1, 2, 3 ];
    console.log( a.concat(['d', 'e', 'f'], b) );
    console.log( a.join('! ') );
    console.log( a.slice(1, 3) );
    console.log( a.reverse() );
    console.log( ' --- ');
    var c = a.splice(0, 2);
    console.log( a, c );
    var d = b.splice(1, 1, 'foo', 'bar');
    console.log( b, d );

    res.write( txt + txt1 + txt2+ txt3 + array + "\n" + calendars + "\n" + arrayIndexOf);
    res.end();
    
}).listen(8080);