function handleSubmit_first(event) {
    event.preventDefault();
        // get the trip localisation from the user 
        const userCity = document.getElementById("city_destination").value;
        // reset value to empty string
        document.getElementById("city_destination").value = "";
        console.log(userCity);

        // slides like animation (to be improved) for the first submit
        let slides_question = document.getElementsByClassName("slide_question");
        let slides_input = document.getElementsByClassName("mySlides");
        let submit = document.getElementsByClassName("style_submit");
            slides_question[0].style.display = "none";
            slides_input[0].style.display = "none";
            slides_question[1].style.display = "block";
            slides_input[1].style.display = "block";
            submit[0].style.display = "none";
            submit[1].style.display = "block";

        // sending userCity constante to the server for geonamesAPI data access
        fetch("http://localhost:3000/serverGeonames",{
            method:"POST",
            credentials: "same-origin",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userCity
            }),
        // getting the the answer from the server of the geonameAPI data
        }).then((res) => res.json()).then((res) =>{
            // make the data_geonames variables global to access it from other js file
            window.data_geonames = res;
            console.log(res.geonames[0]);
        })
}


export { handleSubmit_first };
