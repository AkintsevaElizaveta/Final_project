function clickHandle(evt, itemExperience) {
    let i, content, tab_btn;
    content = document.getElementsByClassName("content");
    for (i = 0; i < content.length; i++) {
        content[i].style.display = "none";
    }
    tab_btn = document.getElementsByClassName("tab_btn");
    for (i = 0; i < tab_btn.length; i++) {
        tab_btn[i].className = tab_btn[i].className.replace(" active", "");
    }
    document.getElementById(itemExperience).style.display = "block";
    evt.currentTarget.className += " active";
}
