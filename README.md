# Venturus - 1.0.0, Squad Management Tool

This project was proposed by Venturus company as a React challenge to test my coding skills. Below you will find descriptions of my methods whilst creating this repository as well as a how-to in order to run the project yourself.

## Summary

* [Project description](#project-description)
* [The coding method](#the-coding-method)
* [How-to](#how-to)
* [Final considerations](#final-considerations)

## Project description
The squad management tool is an online platform to create and manage your own soccer teams. This project was built on react and using the [API-Football](https://www.api-football.com/) to provide data of players from all around the globe.

## The coding method
My coding method can be broken down in simple steps from planning to deploying. In this project those steps can be broken down to:
* **Research**: this is a key-point with any project that uses APIs or technologies one has never worked with, which was my case with API-Footaball. Before I'd do anything, I read documentation to understand the usage and be sure it was all just standard stuff and no work-around or additional technology would be needed.

* **Design study**: a must-do for every front-end developer is to first study the design. This allows you to clearly understand the message the page is trying to share, the palette, give thought to how you'll implement each component and map down what should be easy and what should be difficult. This way, when you start developing the front-end you'll know exactly what you're doing.

* **Design implementation & responsiveness**: I tend to break down the work between visual and logical as much as possible, so when i'm developing one I'm focused on the best practices of each part. For this project I first implemented pure html and css using mobile-first approach before any React project was set up. By using SASS, i first downloaded typography, mapped colors, images, etc, and then began writing code. 

* **Project setup**: Once the project was visually exact to what was expected, I set up the React environment, routes, folder structure and, with the visual material I had created, built the pages and components visual bits.

* **Coding**: After everything was pretty and set up, I began writing the actual code and connecting to the API. This project is basically two pages: the creation page and a dashboard. Since the last would not work properly without the first, I began building the creation page functionalities. Once a functionality was written, I'd go back to the dashboard, display the information given by this functionality, test communication between the pages and review my code before I'd set to the next.

* **Review**: Once everything was working I began a bulk-testing process by using the page heavily, creating several teams, removing and editing team, writing down all bugs I encountered and, after fixing it, doing it all over again. Also, to get those bugs that the developer might sometimes not see, I let a few 'users' that live with me use the page to get those extra tweaks.

## How-To
This project was wrapped with wrapper with ```create-react-app```. In order to start the project you must have [node.js](https://nodejs.org/en/) installed.
To run the application follow the steps listed below:

```
cd 'yourpath/venturus-1.0.0/'

#install dependencies
npm install

#start the server
npm start
```

In order to run properly, the application required a valid KEY for authentication with API-Footaball. I would make my key public since this is a challenge repo and I encourage others to built it as well, but this is agains GitHub's privacy and security policies. To run it yourself, create a .env file on the root folder and type the following:

```
REACT_APP_API_FOOTBALL_KEY=yourkey
```


## Final considerations
The project was really fun to build! As a software engineer and team leader to a few projects it's not often that I get to just build, and when I do I always recall why I develop for a living. It's amazing. I got to put to practice a few UX concepts I'm always learning about, such as empty states in the dashboard for each of the information panels. Overall, a great experience. Finally, I did left some requirements not attended, such as:
* **Unit testing** - Not implemented
* **Table sort** - Sorting alphabetically only
* **Soccer field formation change** - Not implemented

This was due to my availability during the given timestamp, but surely something that could be implemented in a few more hours have I had the time.