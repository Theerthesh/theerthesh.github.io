window.onload = function () {
    var name = setInterval(printName, 200);
    var insertString = 'NameHere';
    var i = 0;
    function printName() {
        document.getElementById("name").innerHTML += insertString[i];
        i++;
        if (insertString[i] === undefined) {
            clearInterval(name);
            Drag();
        }
    }
}
function Drag(){
    var i = 4;
    var blinktime= setInterval(function () {
        if (i >= 0 && document.getElementById('drag').style.display !== "inline") {
            document.getElementById('drag').style.display = "inline";
            i--;
        }else if(i >= 0 && document.getElementById('drag').style.display == "inline"){
            document.getElementById('drag').style.display = "none";
        }
        if (i < 0){
            clearInterval(blinktime);
        }
    }, 800)
}