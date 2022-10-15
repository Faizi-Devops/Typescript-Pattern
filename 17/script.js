var Hello = function () {
    for (var i = 1; i <= 5; i++) {
        for (var j = 5; j >= i; j--) {
            document.write("".concat(j));
        }
        document.write("<br>");
    }
};
Hello();
