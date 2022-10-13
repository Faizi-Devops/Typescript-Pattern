var Hello = function () {
    for (var i = 65; i <= 69; i++) {
        for (var j = 65; j <= i; j++) {
            var newNum = String.fromCharCode(i);
            document.write("".concat(newNum));
        }
        document.write("<br>");
    }
};
Hello();
