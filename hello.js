function showMessage() {

    var naam = document.getElementById("textarea").value;
    var p = document.getElementById("result");

    if (naam.length > 0) {
        var str = "Hello " + naam + "! Have a nice day!";
        var text = document.createTextNode(str);

        if (p.firstChild !== null) {
            p.removeChild(p.firstChild);
        }
        p.appendChild(text);
    }
}