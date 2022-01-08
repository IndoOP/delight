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