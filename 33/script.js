var Hello = function () {
    for (var i = 1; i <= 5; i++) {
        for (var j = 1; j <= 5 - i; j++) {
            document.write("&nbsp&nbsp");
        }
        for (var k = 1; k <= i; k++) {
            var newNum = String.fromCharCode(k + 64);
            document.write(newNum + "&nbsp");
        }
        document.write("<br>");
    }
};
Hello();
