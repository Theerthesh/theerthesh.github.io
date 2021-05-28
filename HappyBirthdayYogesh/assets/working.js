// navigator.mediaDevices.getUserMedia({Sounds:true})
// Sounds.requestPermission()
var popsound = new Audio('./audio/bgaudio.mpeg');
window.onload = function start() {
    popsound.load();
    popsound.play();
    popsound.volume = 0.5;
    popsound.loop = true;
    var name = setInterval(printName, 200);
    var insertString = 'Yogesh';
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
            clearInterval(blinktime);
            window.scrollBy(0, 500);
        }
    }, 800);
}
var firstscroll = true;
// this function run all time when window scroll 
window.onscroll = function () {
    if (firstscroll) {
        clearInterval(blinktime);
        displayclickme();
        firstscroll = false;
        document.getElementById('drag').style.display = "none";
        popsound.volume = 0.08;
    }
}
var a;
//this function display the click (hand img) after 3 second
function displayclickme() {
    a = setTimeout(() => {
        document.getElementById('clickme').style.display = "inline";
    }, 1800)
}
var displaytextmemory = false;
// displaytext function run when user click on top of the image
function displaytext() {
    clearTimeout(a);
    var img = document.getElementById('memoryimg');
    document.getElementById('clickme').style.display = 'none';
    var text ="Remember that first trip with ua crush S*** wer u dint slept for the whole night in exictement. Booked drivezy (khatara scooty). All the way madam ka photography karte hue, remember that police scene when he told 2 years jail hoga, 2 years MCA jail mai. and phir all the way enjoy karte hue dominos mai pizza kha ke. Aur teri in sab bakchodi ke chalte imam ki 8ki RayBan yaad h. Manya wala scene tera.<br><br><b>---> this words written by akash<b>";
    if (displaytextmemory) {
        img.style.maxHeight = '300px';
        img.style.maxWidth = '300px';
        document.getElementById('paragraph').innerHTML = "";
        displaytextmemory = false;
       // document.getElementById('footer').style.display = "none";

    } else {
        img.style.maxHeight = '100px';
        img.style.maxWidth = '100px';
        document.getElementById('paragraph').innerHTML += text;
        displaytextmemory = true;
       // document.getElementById('footer').style.display = "inline"
    }
}