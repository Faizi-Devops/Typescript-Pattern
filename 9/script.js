var Hello = function () {
    for (var i = 1; i <= 5; i++) {
        for (var j = 69; j >= 65; j--) {
            var newNum = String.fromCharCode(j);
            document.write("".concat(newNum));
        }
        document.write("<br>");
    }
};
Hello();
