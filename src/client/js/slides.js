let slides = document.getElementsByClassName("mySlides");
let slides_titles = document.getElementsByClassName("slide_question")
for(let i = 1; i < slides.length; i++){
    slides[i].style.display = "none";
    slides_titles[i].style.display = "none";
}