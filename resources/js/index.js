var totalCount = 0;
var clicks = 0;
var dist1 = 112;
var dist2 = 98;
var dist3 = 119;
var dist4 = 126;
var dist5 = 129;
var dist6 = 44;
var dist7 = 118;
var dist8 = 125;
var dist9 = 101;
var dist10 = 27;

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

validSelection = () => {
    if ( document.getElementById("dist-sel").value >= 1 ) {
        return true;
    } else {
        return false;
    }
}

buttonCheck = () => {
    if ( validEmail() && validSelection() ) {
        clicks++;
        updateClickCount();
    } else if ( validEmail() && !validSelection() ) {
        alert("Please select your district");
    } else if ( !validEmail() && validSelection() ) {
        alert("Please enter a valid email address");
    } else {
        alert("Please enter a valid email address and select your district");
    }
}

window.onload = () => {
    move();
}
