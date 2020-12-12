
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
  
   To run this application locally, we also need a `MongoDB` database called `workout` with a collection called `workouts`. The `seed.js` file in the `seeds` folder generates the database and the collection with a few documents. Go to the `seeds` folder in your terminal and type `node seed.js` to create the database. 

   Next, go back to the project root directory and type `node server.js` to run the server and the app. 

  This application is deployed with [Heroku](https://www.heroku.com/home), and [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/signup). You can access it [here](https://fierce-brushlands-17958.herokuapp.com/)

  ## Usage 
  
  Once the application runs locally or on Heroku, the last workout information is displayed on the main page. Here users can create a new exercise by selecting the `Add Exercise` button, or complete an exercise as a part of the last workout by selecting the `Continue Workout` button. In the `Add Exercise` section, there are two default options, `Resistance` and `Cardio` for the `Exercise Type` to select from. Once one of the options is selected, users can enter the required information and add the new exercise to the database. Then users can enter the new created exercise information, and complete their new workout in the current date. By completing the workout, the application returns to the main page and all the information for the new workout is populated. Users can also select the `Continue Workout` button to use an existing exercise type and complete it as a part of the last workout. This updates the information of the last workout in the main page accordingly. By selecting `Dashboard` link in the application, graphic presentations of combined durations and lifted weights for all weekdays are displayed (see the screenshots below).
  
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