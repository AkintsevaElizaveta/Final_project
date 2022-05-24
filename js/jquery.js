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
var slideIndex = 1;
    showSlides(slideIndex);
function plusSlide( ){
    showSlides(slideIndex += 1);
}
function minusSlide( ){
    showSlides(slideIndex -=1);
}
function currentSlide(n){
    showSlides(slideIndex = n);
}
function showSlides(n){
    var i;
    var slides=document.getElementsByClassName("slider_item");
    var dots=document.getElementsByClassName("slider_dots_item");
    if (n>slides.length) {
        slideIndex=1
    }
    if (n>1){
        slideIndex=slides.length
    }
    for (i=0; i< slides.length; i++){
        slides[i].style.display="none";
    }
    for (i=0; i< dots.length; i++){
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex -1].style.display="block";
    dots[slideIndex -1].className += "active";
}