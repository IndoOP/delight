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
let day = d.getDay();

const test = () => {
    let subject = document.getElementById("mumbaiT");
    let dTest = document.getElementById("test");
    subject.style.display="none";
    console.log(m + dy + hr);
    if (m>=0 && d>=16 && hr>=19){
        subject.style.display="block";
        console.log("Done");
    }
    else if (dTest.style.display == "block" && subject.style.display == "none"){
        document.getElementById('e404').innerHTML = "Next Test at 7:00 PM";
    }
    else{
        console.log("hey");
        document.getElementById('e404').innerHTML = "No tests available...";
    }
}


function schedule () {
    console.log(day);
    if (day==1) {
        document.getElementById("mon").style.display="flex";
    }
    else if (day==2) {
        document.getElementById("tue").style.display="flex";
    }
    else if (day==3) {
        document.getElementById("wed").style.display="flex";
    }
    else if (day==4) {
        document.getElementById("thurs").style.display="flex";
    }
    else if (day==5) {
        document.getElementById("fri").style.display="flex";
    }
    else if (day==6) {
        document.getElementById("sat").style.display="flex";
    }
    else{
        document.getElementById("sun").style.display="block";
    }
}