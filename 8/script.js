var start = 69;
var end = 65;
var Hello = function () {
    for (var i = start; i >= end; i--) {
        for (var j = 1; j <= 5; j++) {
            var newArray = String.fromCharCode(i);
            document.write("".concat(newArray));
        }
        document.write("<br>");
    }
};
Hello();
