// Functions
var defaultdisplay = null;
function setInitial(){
    // Initial state
    defaultdisplay = document.getElementById("aboutsection").style.display;
    document.getElementById("aboutsection").style.display = defaultdisplay;
    document.getElementById("projectssection").style.display = 'none';
    document.getElementById("socialsection").style.display = 'none';

    document.getElementsByTagName("yesscript")[0].style.display = 'block';
}

function pagebutton(item){
    window.scrollTo(0, 0);
    document.getElementById("about").classList.remove("is-active");
    document.getElementById("projects").classList.remove("is-active");
    document.getElementById("social").classList.remove("is-active");

    item.classList.add("is-active");

    document.getElementById("aboutsection").style.display = 'none';
    document.getElementById("projectssection").style.display = 'none';
    document.getElementById("socialsection").style.display = 'none';

    document.getElementById(item.id + "section").style.display = defaultdisplay;
}