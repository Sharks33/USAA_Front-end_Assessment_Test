let totalCount = 0;
let clicks = 0;
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

const distArr = [dist1, dist2, dist3, dist4, dist5, dist6, dist7, dist8, dist9, dist10];

for ( var i = 0; i < distArr.length; i++ ) {
    totalCount += distArr[i];
    document.getElementById("d" + (i + 1)).innerHTML = distArr[i] + " Pledges";
}

var pc = setInterval(pledgeCount, 3);
var pCount = 1;
function pledgeCount() {
    document.getElementById("count").innerHTML = pCount;
    pCount++;
    if ( pCount === totalCount + 1 ) {
        clearInterval(pc);
    }
}

updateClickCount = () => {
    var dist = document.getElementById("dist-sel");
    var distVal = dist.options[dist.selectedIndex].value;
    
    for ( var i = 0; i < distArr.length; i++ ) {
        if ( distVal == (i + 1) ) {
            distArr[i]++;
            document.getElementById("d" + (i + 1)).innerHTML = distArr[i]  + " Pledges";
        }
    }

    document.getElementById("count").innerHTML = totalCount + clicks;
}

var perc = 0.0;
var width = 0;
var idCount = 1;

move = () => {  
    var id = setInterval(frame, 20);
    function frame() {
        width++;
        var elem = document.getElementById("bar" + idCount);
        var perc = ((distArr[idCount-1]/totalCount) * 100).toFixed(1) * 2; 
        elem.style.width = width + '%';
        if ( width >= perc ) {
            width = 0;
            idCount++;
        }
        if ( idCount > distArr.length ) {
            clearInterval(id);
        }
    }
}

validEmail = () => { //Need to add regex
    if ( document.getElementById("valid-email").value.length > 0 ) {
        return true;
    } else {
        return false;
    }
}

window.onload = () => {
    move();
    document.getElementById("go-btn").disabled = true;
    document.getElementById("dist-sel").onchange = function() {
        if ( this.options[this.selectedIndex].value >= 1 && validEmail() ) {
            document.getElementById("go-btn").disabled = false;
        }
    }
}
