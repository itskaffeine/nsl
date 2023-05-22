// JavaScript source code
var counter = 0;
var direction = true;

function init() {
    requestAnimationFrame(move);
}

window.onload() = init();

function move() {

    var pathContainer = document.getElementById("planetPath");
    var planetContainer = document.getElementById("planetPath");
    var ns = "http://www.w3.org/2000/svg";
    var paths = pathContainer.getElementsByTagNameNS(ns, "path");
    var osuPlanet = planetContainer.getElementById("osuPlanet");

    var osuLength = paths[0].getTotalLength();
    var wisdomLength = paths[1].getTotalLength();
    var mnLength = paths[2].getTotalLength();

    if (parseInt(counter, 10) === 1) {
        direction = false;
    } else if (parseInt(counter, 10) < 0) {
        direction = true;
    }

    if (direction) {
        counter += 0.003;
    } else {
        counter -= 0.003;
    }

    osuPlanet.setAttribute("transform", "translate(" +
        (paths[0].getPointAtLength(counter * osuLength).x - 15) + "," +
        (paths[0].getPointAtLength(counter * osuLength).y - 15) + ")");

    requestAnimationFrame(move);
}