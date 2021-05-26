var popsound = new Audio('./audio/bgaudio.mpeg');
window.onload = function start() {
    //  document.getElementById('audio').play();
    //  document.getElementById('audio').volume = 0.5;  
    popsound.load();
    popsound.autoplay = true;
    console.log(popsound.play() === undefined);
    if(popsound.play() === undefined) { start() }else{popsound.play()}
    popsound.volume = 0.5;
    popsound.loop = true;
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
function Drag() {
    var scrollcountdown = 4;
    var blinktime = setInterval(function () {
        if (scrollcountdown >= 0 && document.getElementById('drag').style.display !== "inline") {
            document.getElementById('drag').style.display = "inline";

        } else if (scrollcountdown >= 0 && document.getElementById('drag').style.display == "inline") {
            document.getElementById('drag').style.display = "none";
            scrollcountdown--;
        }
        if (scrollcountdown < 0) {
            clearInterval(blinktime);
            popsound.volume = 0.08;
            // document.getElementById('audio').volume = 0.08;
            window.scrollBy(0, 500);
        }
        window.onscroll = function () {
            document.getElementById('drag').style.display = "none"; clearInterval(blinktime); popsound.volume = 0.08;// document.getElementById('audio').volume = 0.08;
        }
    }, 800)
}
displaytextmemory = false;
function displaytext() {
    var par = document.getElementById('paragraph');
    var img = document.getElementById('memoryimg');
    img.style.maxHeight = '100px';
    img.style.maxWidth = '100px';
    var text = "The oldest classical Greek and Latin writing had little or no space between words and could be written in boustrophedon (alternating directions).Over time, text direction (left to right) became standardized, and word dividers and terminal punctuation became common. The first way to divide sentences into groups was the original paragraphs, similar to an underscore at the beginning of the new group.[2] The Greek parágraphos evolved into the pilcrow (¶), which in English manuscripts in the Middle Ages can be seen inserted inline between sentences The hedera leaf (e.g. ☙) has also been used in the same way."
    if (displaytextmemory) {
        img.style.maxHeight = '300px';
        img.style.maxWidth = '300px';
        document.getElementById('paragraph').innerHTML = "";
        displaytextmemory = false;
    } else {
        document.getElementById('paragraph').innerHTML += text;
        displaytextmemory = true;
    }
}