# 2048 Game

## Overview
This project is a digital implementation of the popular puzzle game 2048, built using ReactJS with NextJS, Redux, and Tailwind CSS. The game follows the classic rules where the player combines numbered tiles on a grid to create a tile with the number 2048.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Installation
To run this project locally, follow these steps:

- Clone the repository: ``` git clone <repository-url> ```
- Navigate to the project directory: ``` cd 2048-game ```
- Install dependencies: ```npm install ```
- Start the development server: ``` npm run dev ```
- Open your browser and navigate to http://localhost:3000/2048-game to play the game.

## How to Play
Use the arrow keys (or swipe on touch devices) to move the tiles in the desired direction.
When two tiles with the same number touch, they merge into one tile with the sum of their values.
The game ends when there are no more valid moves possible, or when a tile with the number 2048 is created.

## Improvements

1. #### Add Move Animation
Currently, the game lacks visual feedback for tile movements. Implementing move animations can enhance the user experience and make the gameplay more engaging.

2. #### Calculate Score Based on Time
Introducing a scoring mechanism based on the time taken to reach the 2048 tile or the highest tile achieved can add a competitive aspect to the game. This could encourage players to strategize and optimize their moves efficiently.

3. #### Implement Responsive Design
Ensure the game interface adapts seamlessly to different screen sizes and orientations. This will make the game accessible and enjoyable across various devices, including desktops, tablets, and smartphones.

4. #### Enhance Accessibility
Consider adding accessibility features such as screen touch support to make the game accessible to users using the mobile.

## License
This project is licensed under the MIT License.
