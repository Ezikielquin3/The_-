# The_-
Developers: 
* Bu Meh
* Ezikiel Quinones
* Thomas Avinger
* Kyle Longaker 
## Overview of Project
This web application has been initiated in order to educate our target market in fitness science via videos on our website. This will allow the customer to obtain a better understanding of excercises in order to compose their workouts to fit their needs and desired physique. The information must portrayed in an enticing enough manner to get anyone motivated to improve their overall health. 

## Software used
* Google Firebase
    * Firebase Hosting
    * Firebase Authetication
    * Firebase Realtime database
* Visual Studio Code

## Folders
* Documentation
    * documentation of the project setup and functionality
* Dump
    * public folder that firebase reads in and deploys live to https://achesonathletics.com/
    * Has assets, CSS, and Views folder 
        * Assets - contains pictures, png/jpg
        * CSS - contains all of our cascade style sheets for every page on the website
        * Views - Contains all front-end HTML web pages 
    * Also contains JavaScript files
        * Articledata.js - database for the article pages in Views 
        * Videodata.js - video databse for the video pages in views 
        * Login.js - the file that calls the user auth info from login page in views, to firebase authetication system 
    * Index.html - the landing page for the website and firebase will deploy and intitilaze to the host url 

## How to run the app locally
Our website is fully deployed and can be reached from any web browser at "achesonathletics.com". However, if you wish to run our web app locally, please follow the steps below:
1) On the explorer side bar in Visual Studio Code, click on index.html in the "Dump" folder.
2) Click the "Run" button on the ribbon at the top of Visual Studio Code.
3) Click the "Run Without Debugging" option from the drop-down menu.
4) A few web browser options will be available. Select your favorite web browser.
5) The local page should open from your chosen web browser.


