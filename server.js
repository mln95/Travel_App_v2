// require express to run the server
const express = require("express");

// to hide API key
const dotenv = require("dotenv");

// to fetch a server from the server side
const fetch = require("node-fetch");
dotenv.config();

// require dependencies
const cors = require("cors");
const bodyParser = require("body-parser");
const port = 3000;

// instance of the app
const app = express();

// cross origin allowance
app.use(cors());

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//main project folder
app.use(express.static("dist"));

app.listen(port, ()=>{
    console.log(`The server is working on port number ${port}`)
})

//get data from GEONAME API
const geoname_url_api = "http://api.geonames.org/searchJSON?";
const geoname_username = process.env.USERNAME_GEONAMES;
console.log(geoname_username);
app.post("/serverGeonames", async(req,res) =>{
    console.log(req.body.userCity);
    const response_geoname = await fetch(`${geoname_url_api}username=${geoname_username}&name=${req.body.userCity}`)
    try {
        const json_geoname = await response_geoname.json();
        res.send(json_geoname);
    } catch (err) {
        console.error("error");
    }
});

//get data from weatherbit API
const weatherbit_url_api = "https://api.weatherbit.io/v2.0/forecast/daily?"
const weatherbit_key_api = process.env.KEY_API_WEATHERBIT;
app.post("/serverWeatherbit", async(req,res) =>{
    const response_weatherbit =await fetch(`${weatherbit_url_api}lat=${req.body.lat}&lon=${req.body.lon}&key=${weatherbit_key_api}`)
    try{
        const json_weatherbit = await response_weatherbit.json();
        res.send(json_weatherbit);
    }catch(err){
        console.error("error");
    }
})

//get data from pixabay API
const pixabay_url_api = "https://pixabay.com/api/?"
const pixabay_key_api = process.env.KEY_API_PIXABAY;
app.post("/serverPixabay", async(req,res) =>{
    const response_pixabay =await fetch(`${pixabay_url_api}&key=${pixabay_key_api}&q=${req.body.city}&image_type=photo`);
    try{
        const json_pixabay = await response_pixabay.json();
        res.send(json_pixabay,);
    }catch(err){
        console.error("error");
    }
})