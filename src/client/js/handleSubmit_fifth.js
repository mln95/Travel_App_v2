function handleSubmit_fifth(event) {
    event.preventDefault();
  console.log(data_geonames)

  // variable to extract the needed information from geonames API. Information comes from the global variable declared in handleSubmit_first
  let city = data_geonames.geonames[0].name;
  let country = data_geonames.geonames[0].countryName;
  let depart = trip_date;
  let duration_trip = trip_last;
  let lat = data_geonames.geonames[0].lat;
  let lon = data_geonames.geonames[0].lng;
  // determining the date left before user departing
  let depart_date = new Date(trip_date);
  let convert_departDate = depart_date.getMonth()+1 + "/"+depart_date.getDate()+"/"+depart_date.getFullYear();
  let day = new Date();
  let day_left = ((depart_date - day)/1000/86400)
  day_left = Math.floor(day_left);

  // implement data from geonames API to display it on the DOM 
  document.getElementById("destination").innerHTML += `<span>${city}</span>, <span>${country}</span>`
  document.getElementById("depart").innerHTML += `<span>${convert_departDate}</span>`;
  document.getElementById("lon").innerHTML += `<span>${lon}</span>`;
  document.getElementById("lat").innerHTML += `<span>${lat}</span>`;
  document.getElementById("dayLeft").innerHTML += `<span>${day_left}</span>`

  // initialize the section are disply=none, so we can not see them displayed. Once user click the section become block to be visualized.  
  document.getElementsByTagName("section")[0].style.display = "block";
  document.getElementsByTagName("section")[1].style.display = "block";
  //turn the displayed information asked from the user into none to only display the new data from the different API
  document.getElementById("fifth_submit").style.display = "none";
  document.getElementsByClassName("slide_question")[4].style.display = "none";

  // sending latitude and longitude to the server for weatherbitAPI data access
  fetch("http://localhost:3000/serverWeatherbit",{
            method:"POST",
            credentials: "same-origin",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                lat,
                lon
            }),
        // getting the the answer from the server of the weatherbitAPI data
        }).then((res) => res.json()).then((res) =>{
            // make the information from the server available outside this function trough another function call
            weatherbit_data(res);
            console.log(res);
        })
        // function to get the data from the weatherbit API and display it on the screen
        function weatherbit_data(res){
            // the weatherbit API have 16 day forecasting. Therefore if the planned trip is further than 16 days we inform the users than there are nos forecast available.
            if(day_left > 16){
                document.getElementById("weather_departing").textContent = "No weather forecast for this period";
            } else{
                // Match the user departing date with the weather of the API corresponding date.
                // I extracted the date composition separetly to make it similar to the weatherbit API date format
                let month = depart_date.getMonth()+1;
                let year = depart_date.getFullYear();
                let day = depart_date.getDate();
                let locationIcon = document.querySelector('.weatherbit_icon');
                for(let i = 0; i < res.data.length; i++){
                    if(depart_date.getMonth() < 10 && depart_date.getDate() < 10){
                        let departing = year+"-0"+month+"-0"+day;
                        if(res.data[i].datetime == departing)
                            document.getElementById("weather_departing").innerHTML += `temperature : <span>${res.data[i].temp}°</span><br/> max temp : <span>${res.data[i].max_temp}°</span><br/> min temp : <span>${res.data[i].min_temp}°</span><br/>${res.data[i].weather.description}`;
                            const icon = res.data[i].weather.icon
                            locationIcon.setAttribute("src",`icons/${icon}.png`) 
                        } else if(depart_date.getMonth() < 10 && depart_date.getDate() >= 10){
                        let departing = year+"-0"+month+"-"+day;
                        if(res.data[i].datetime == departing)
                            document.getElementById("weather_departing").innerHTML += `temperature : <span>${res.data[i].temp}°</span><br/> max temp : <span>${res.data[i].max_temp}°</span><br/> min temp : <span>${res.data[i].min_temp}°</span><br/>${res.data[i].weather.description}`;
                            const icon = res.data[i].weather.icon
                            locationIcon.setAttribute("src",`icons/${icon}.png`) 
                        } else{
                        let departing = year+"-"+month+"-"+day;
                        if(res.data[i].datetime == departing)
                            document.getElementById("weather_departing").innerHTML += `temperature : <span>${res.data[i].temp}°</span><br/> max temp : <span>${res.data[i].max_temp}°</span><br/> min temp : <span>${res.data[i].min_temp}°</span><br/>${res.data[i].weather.description}`;
                            const icon = res.data[i].weather.icon
                            locationIcon.setAttribute("src",`icons/${icon}.png`) 
                        }
                    }
                }
            }
            // sending city constante to the server for pixabayAPI data access
            fetch("http://localhost:3000/serverPixabay",{
                method:"POST",
                credentials: "same-origin",
                headers:{
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    city
                }),
            // getting the the answer from the server of the pixabayAPI data
            }).then((res) => res.json()).then((res) =>{
                document.getElementById("main").style.backgroundImage = `url(${res.hits[0].largeImageURL})`;
                console.log(res);
        })
        document.getElementById("trip_length").textContent = `${duration_trip}`
    }

export { handleSubmit_fifth };