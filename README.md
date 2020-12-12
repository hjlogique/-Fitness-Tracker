
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) ![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/hjlogique/Fitness-Tracker?style=flat&logo=appveyor) ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/hjlogique/Fitness-Tracker?style=flat&logo=appveyor)
  
# Fitness-Tracker

  ## Description 
  
  This application allows users to view, create and track their daily workouts. Users can log multiple exercises in a workout on a given day, and track the name, type, weight, sets, reps, and duration of their exercise. If the exercise is a cardio type, they can also track their distance traveled.
 
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Questions](#questions)
  * [License](#license)
  
  ## Installation

   To run the application locally go to the project root directory in your terminal and type the `npm i` command to install the NPM package dependencies specified in the `package.json` file. The required modules for this application are [express](https://www.npmjs.com/package/express), [mongoose](https://www.npmjs.com/package/mongoose), [morgan](https://www.npmjs.com/package/morgan).
  
   To run this application locally, we also need a `MongoDB` database called `workout` with a collection called `workouts`. The `seed.js` file in the `seeds` folder generates the database and the collection with a few documents. Go to the `seeds` folder in your terminal and type `node seed.js` to run the create the database. 

   Next, go back to the project root directory and type `node server.js` to run the server and the app. 

  This application is deployed to [Heroku](https://www.heroku.com/home), and connected to the [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/signup). You can access it [here](https://fierce-brushlands-17958.herokuapp.com/)

  ## Usage 
  
  Once the application runs locally or on Heroku, the last workout information is displayed on the main page. Here users can create new workout by selecting the `Add Exercise` button, or continue with the last workout by selecting the `Continue Workout` button. The app creates a new workout for the current date. There are two default options, `Resistance` and `Cardio` for `Exercise Type` to select from. Once one of the options is selected, users can enter the required information and add the new exercise to the database. Then users can enter the new exercise information and complete the workout. The application goes back to the main page and all the information for the new workout are populated. By selecting the `Continue Workout` button, users can use an existing exercise type and complete a workout, information of which will be automatically updated in the last workout information. By selecting `Dashboard` link in the application, graphic presentations of the workout durations and lifted weights for all weekdays are displayed (see the screenshots below).
  
  ![image 1](/screenshots/img1.png)

  ![image 2](/screenshots/img2.png)

   ![image 3](/screenshots/img3.png)

   ![image 4](/screenshots/img4.png)

  ## Contributing
  
  Please let me know if there are any ways to improve the logic, the code or the features of this application. Please also let me know about any found bugs or issues. I would really appreciate your contributions.
  
  ## Questions
  
  [Link to my GitHub profile](https://github.com/hjlogique)

  If you have any questions, please contact me via email:
  
  Email: hjlogique@yahoo.com
  
  ## License
  
  MIT License