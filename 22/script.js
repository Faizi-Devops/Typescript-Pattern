var Hello = function () {
    for (var i = 5; i >= 1; i--) {
        for (var j = 1; j <= i; j++) {
            var newNum = String.fromCharCode(70 - j);
            document.write(newNum);
        }
        document.write("<br>");
    }
};
Hello();
