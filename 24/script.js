var Hello = function () {
    for (var i = 1; i <= 5; i++) {
        for (var j = 4; j >= i; j--) {
            document.write("&nbsp&nbsp");
        }
        for (var k = 1; k <= i; k++) {
            document.write("*");
        }
        document.write("<br>");
    }
};
Hello();
