var Hello = function () {
    for (var i = 1; i <= 5; i++) {
        for (var j = 1; j <= i; j++) {
            document.write("".concat(i));
        }
        document.write("<br>");
    }
};
Hello();
