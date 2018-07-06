let totalCount = 0;

let dist1 = 112;
let dist2 = 98;
let dist3 = 119;
let dist4 = 126;
let dist5 = 129;
let dist6 = 44;
let dist7 = 118;
let dist8 = 125;
let dist9 = 101;
let dist10 = 27;

let clicks = 0;

totalCount = dist1 + dist2 + dist3 + dist4 + dist5 + dist6 + dist7 + dist8 + dist9 + dist10;

document.getElementById("d1").innerHTML = dist1;
document.getElementById("d2").innerHTML = dist2;
document.getElementById("d3").innerHTML = dist3;
document.getElementById("d4").innerHTML = dist4;
document.getElementById("d5").innerHTML = dist5;
document.getElementById("d6").innerHTML = dist6;
document.getElementById("d7").innerHTML = dist7;
document.getElementById("d8").innerHTML = dist8;
document.getElementById("d9").innerHTML = dist9;
document.getElementById("d10").innerHTML = dist10;
document.getElementById("count").innerHTML = totalCount;

function updateClickCount() {
    var dist = document.getElementById("dist-sel");
    var distVal = dist.options[dist.selectedIndex].value;

    if (distVal == 1) {
        dist1++;
        document.getElementById("d1").innerHTML = dist1;
    }
    if (distVal == 2) {
        dist2++;
        document.getElementById("d2").innerHTML = dist2;
    }
    if (distVal == 3) {
        dist3++;
        document.getElementById("d3").innerHTML = dist3;
    }
    if (distVal == 4) {
        dist4++;
        document.getElementById("d4").innerHTML = dist4;
    }
    if (distVal == 5) {
        dist5++;
        document.getElementById("d5").innerHTML = dist5;
    }
    if (distVal == 6) {
        dist6++;
        document.getElementById("d6").innerHTML = dist6;
    }
    if (distVal == 7) {
        dist7++;
        document.getElementById("d7").innerHTML = dist7;
    }
    if (distVal == 8) {
        dist8++;
        document.getElementById("d8").innerHTML = dist8;
    }
    if (distVal == 9) {
        dist9++;
        document.getElementById("d9").innerHTML = dist9;
    }
    if (distVal == 10) {
        dist10++;
        document.getElementById("d10").innerHTML = dist10;
    }

    totalCount = dist1 + dist2 + dist3 + dist4 + dist5 + dist6 + dist7 + dist8 + dist9 + dist10;
    document.getElementById("count").innerHTML = totalCount + clicks;
}

