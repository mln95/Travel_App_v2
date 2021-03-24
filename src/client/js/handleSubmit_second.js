function handleSubmit_second(event) {
    event.preventDefault();
        //get the trip date from the user
        window.trip_date = document.getElementById("trip_start").value;
        console.log(trip_date);
        document.getElementById("trip_start").value = "dd/mm/yy";

        // slides like animation (to be improved) for the second submit
        let slides_question = document.getElementsByClassName("slide_question");
        let slides_input = document.getElementsByClassName("mySlides");
        let submit = document.getElementsByClassName("style_submit");
            slides_question[1].style.display = "none";
            slides_input[1].style.display = "none";
            slides_question[2].style.display = "block";
            slides_input[2].style.display = "block";
            submit[1].style.display = "none";
            submit[2].style.display = "block";

}

export { handleSubmit_second };