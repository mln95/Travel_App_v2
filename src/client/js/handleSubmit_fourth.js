function handleSubmit_fourth(event) {
    event.preventDefault();
        //get the trip date from the user
        const trip_feeling = document.getElementById("trip_feeling").value;
        console.log(trip_feeling);
        document.getElementById("trip_feeling").value = "";

        // slides like animation (to be improved) for the fourth submit
        let slides_question = document.getElementsByClassName("slide_question");
        let slides_input = document.getElementsByClassName("mySlides");
        let submit = document.getElementsByClassName("style_submit");
            slides_question[3].style.display = "none";
            slides_input[3].style.display = "none";
            slides_question[4].style.display = "block";
            slides_input[4].style.display = "block";
            submit[3].style.display = "none";
            submit[4].style.display = "block";

            document.getElementById("none").style.display = "none";
            document.getElementById("name").style.display = "none";
            document.getElementsByClassName("fa-search")[0].style.display = "none";
}

export { handleSubmit_fourth };