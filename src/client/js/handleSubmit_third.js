function handleSubmit_third(event) {
    event.preventDefault();
    // document.getElementById("second_submit").style.display = "none";
    // document.getElementById("third_submit").style.display = "block"
        //get the trip date from the user
        window.trip_last = document.getElementById("trip_last").value;
        console.log(trip_last);
        document.getElementById("trip_last").value = "";

        // slides like animation (to be improved) for the third submit
        let slides_question = document.getElementsByClassName("slide_question");
        let slides_input = document.getElementsByClassName("mySlides");
        let submit = document.getElementsByClassName("style_submit");
            slides_question[2].style.display = "none";
            slides_input[2].style.display = "none";
            slides_question[3].style.display = "block";
            slides_input[3].style.display = "block";
            submit[2].style.display = "none";
            submit[3].style.display = "block";

}

export { handleSubmit_third };