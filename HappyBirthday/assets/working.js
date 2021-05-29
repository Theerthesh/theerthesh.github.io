// navigator.mediaDevices.getUserMedia({Sounds:true})
// Sounds.requestPermission()
var popsound = new Audio('./audio/bgaudio.mpeg');
window.onload = function start() {
    popsound.load();
    popsound.play();
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
// var displayclick = document.getElementById('clickme').style;
var blinktime;
//this function display drag img when and how
function Drag() {
    var scrollcountdown = 4;
    blinktime = setInterval(function () {
        if (scrollcountdown >= 0 && document.getElementById('drag').style.display !== "inline") {
            document.getElementById('drag').style.display = "inline";

        } else if (scrollcountdown >= 0 && document.getElementById('drag').style.display == "inline") {
            document.getElementById('drag').style.display = "none";
            scrollcountdown--;
        }
        if (scrollcountdown < 0) {
            window.scrollBy(0, 500);
            clearInterval(blinktime); 
        }
    }, 800);           
}
var firstscroll = true;
// this function run all time when window scroll 
window.onscroll = function(){
    if(firstscroll){
        window.scrollBy(500, 0);
    displayclickme();
    firstscroll = false;
    document.getElementById('drag').style.display = "none";
    clearInterval(blinktime); 
    popsound.volume = 0.08;
    }
}
var a;
//this function display the click (hand img) after 3 second
function displayclickme(){
    a=setTimeout(() => {
            document.getElementById('clickme').style.display = "inline";              
    },3000)
}
var displaytextmemory = false;
// displaytext function run when user click on top of the image
function displaytext() {
    clearTimeout(a);
    var img = document.getElementById('memoryimg');
    document.getElementById('clickme').style.display = 'none';
    var text = "The oldest classical Greek and Latin writing had little or no space between words and could be written in boustrophedon (alternating directions).Over time, text direction (left to right) became standardized, and word dividers and terminal punctuation became common. The first way to divide sentences into groups was the original paragraphs, similar to an underscore at the beginning of the new group.[2] The Greek parágraphos evolved into the pilcrow (¶), which in English manuscripts in the Middle Ages can be seen inserted inline between sentences The hedera leaf (e.g. ☙) has also been used in the same way."
    if (displaytextmemory) {
        img.style.maxHeight = '300px';
        img.style.maxWidth = '300px';
        document.getElementById('paragraph').innerHTML = "";
        displaytextmemory = false;
        document.getElementById('footer').style.display = "none";
     
    } else {
        img.style.maxHeight = '100px';
        img.style.maxWidth = '100px';
        document.getElementById('paragraph').innerHTML += text;
        displaytextmemory = true;
        document.getElementById('footer').style.display = "inline"
    }
}