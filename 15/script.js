var Hello = function () {
    for (var i = 1; i <= 5; i++) {
        for (var j = 6 - i; j >= 1; j--) {
            document.write("".concat(i));
        }
        document.write("<br>");
    }
};
Hello();
