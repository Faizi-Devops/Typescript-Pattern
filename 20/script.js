var Hello = function () {
    for (var i = 1; i <= 5; i++) {
        for (var j = 1; j <= 6 - i; j++) {
            var newNum = String.fromCharCode(i + 64);
            document.write("".concat(newNum));
        }
        document.write("<br>");
    }
};
Hello();
