# TRAVEL APP

## CONTEXT 

This application is the last project of the Frontend developer udacity nano degree program.

## HOW WAS IT BUILD ?

each input ask a specific data, the progression is a slide like form. Each submit button as its own js file to deal with the user interaction.
All the data is displayed in the handleSubmit_fifth js.file. Some of the variables from the others js files has been set globally to make them available for displaying. 

The checkLocalisation.js file has not been used. It will be used for the a futur version of the app. 

regarding the scss files header.scss footer.scss and form.scss have not been used. They will be used for a futur version of the app.

Please note that the actual design of the app is about to be completely reshaped as well as a part of the javascript code. The purpose is to do a more classic one page web app and to have a better scalable code. 

## DEPENDENCIES INSTALLED

### DEPENDENCIES

* "body-parser": "^1.19.0",
* "cors": "^2.8.5",
* "dotenv": "^8.2.0",
* "express": "^4.17.1",
* "node-fetch": "^2.6.1",
* "webpack": "^5.25.0",
* "webpack-cli": "^4.5.0"

### DEVDEPENDENCIES

* "@babel/core": "^7.13.10",
* "@babel/preset-env": "^7.13.10",
* "babel-loader": "^8.2.2",
* "copy-webpack-plugin": "^8.1.0",
* "css-loader": "^5.1.2",
* "file-loader": "^6.2.0",
* "html-webpack-plugin": "^5.3.1",
* "jest": "^26.6.3",
* "node-sass": "^5.0.0",
* "sass-loader": "^11.0.1",
* "style-loader": "^2.0.0",
* "url-loader": "^4.1.1",
* "webpack-dev-server": "^3.11.2"
* "workbox-webpack-plugin": "^6.1.2"

## MAKE THE APP WORKS

As a first step use this command line on your you own IDE : npm run build prod

Then start the server through this command line : npm start

## OPTION FOR PROJECT STAND OUT

We have implemented those option to make the project standout : 
* Add end date and display length of trip.
* Incorporate icons into forecast.

The developer team is willing to complete all the option in a another version. To do so the develooper team will either change the design or miniaturize the data displayed for a city once the user want to try another destination. 

The data miniaturize will be displayed in another page where all the new submitted destination will come along.

