let nav = document.getElementById("topnav");

const navopen = () => {
    if (nav.className === "topnav"){
        nav.className += " responsive";
    }
    else{
        nav.className = "topnav";
    }
}

const mainFunction = () => {
    let name = "Tanvi Shruti";

    document.getElementsByTagName(h3).innerHTML += name;
}

mainFunction();