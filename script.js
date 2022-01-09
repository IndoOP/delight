let nav = document.getElementById("topnav");

const navopen = () => {
    if (nav.className === "topnav"){
        nav.className += " responsive";
    }
    else{
        nav.className = "topnav";
    }
}


function search_con () {
    let input = document.getElementById("search").value;
    input = input.toLowerCase();

    let x = document.getElementsByClassName('card');

    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else{
            x[i].style.display="block";
        }
}
}

let d = new Date();
let m = d.getMonth();
let dy = d.getDate();
let hr = d.getHours();

const test = () => {
    console.log(m + dy + hr);
    if (m>=0 && d>=9 && hr>=12){
        console.log("Done");
        document.getElementById('matterT').style.display="block";
    }
    else{
        console.log("hey");
        document.getElementById('e404').innerHTML = "No tests available...";
    }
}

setInterval(test(), 1000);
