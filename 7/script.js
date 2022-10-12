var start = 65;
var end = 69;
var Hello = function () {
    for (var i = 1; i <= 5; i++) {
        for (var j = start; j <= end; j++) {
            var newNumber = String.fromCharCode(j);
            document.write(newNumber);
        }
        document.write("<br>");
    }
};
Hello();
