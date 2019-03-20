// Functions
function setInitial(){
    // Initial state
    document.getElementById("profilesection").style.display = 'block';
    document.getElementById("projectssection").style.display = 'none';
    document.getElementById("socialsection").style.display = 'none';

    document.getElementById('notification').parentElement.parentElement.parentElement.style.display = 'none';

    document.getElementsByTagName("yesscript")[0].style.display = 'block';
}

function pagebutton(item){
    window.scrollTo(0, 0);
    document.getElementById("profile").classList.remove("is-active");
    document.getElementById("projects").classList.remove("is-active");
    document.getElementById("social").classList.remove("is-active");

    item.classList.add("is-active");

    document.getElementById("profilesection").style.display = 'none';
    document.getElementById("projectssection").style.display = 'none';
    document.getElementById("socialsection").style.display = 'none';

    document.getElementById(item.id + "section").style.display = 'block';
}

function closeNotif(item){
    item.parentElement.parentElement.parentElement.style.display = 'none';
}

function showNotif(text){
    var notif = document.getElementById('notification');
    notif.parentElement.parentElement.parentElement.style.display = 'block';
    notif.innerHTML = text;
}