var Hello = function () {
    for (var i = 5; i >= 1; i--) {
        for (var j = 1; j <= i; j++) {
            document.write("*");
        }
        document.write("<br>");
    }
};
Hello();
