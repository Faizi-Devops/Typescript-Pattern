var Hello = function () {
    for (var i = 1; i <= 5; i++) {
        for (var j = 5; j >= 1; j--) {
            document.write("".concat(j));
        }
        document.write("<br>");
    }
};
Hello();
