# My Awesome Backend Project

Welcome to my GitHub repository for my backend project! This project is focused on building a backend server for a web application using Express.js and MongoDB. As a frontend web developer with experience in React and Angular, I'm excited to dive into backend development and expand my skillset.

## Project Overview

In this project, I've set up a backend server using Express.js, a popular Node.js framework for building web applications and APIs. The server interacts with a MongoDB database to store and manage data. I've organized the codebase into different modules and routes to ensure maintainability and modularity.

## Features

- *Environment Variables:* The project uses `dotenv` to manage environment variables, ensuring that sensitive information is kept secure.

- *CORS Configuration:* I've configured Cross-Origin Resource Sharing (CORS) using the `cors` middleware to allow requests from a specific origin (`https://ng-notenexus.netlify.app`).

- *Express Middleware:* The project uses Express middleware to handle JSON parsing, which is essential for processing incoming requests and responses.

- *Routes and Controllers:* I've implemented various routes and controllers to handle different functionalities, such as user management, note storage, user authentication, and verification.

- *Error Handling:* To enhance the user experience, I've included custom error handling middleware (`handleError`) to handle errors gracefully.

## Getting Started

1. Make sure you have Node.js and npm installed on your system.
2. Clone this repository to your local machine.
3. Run `npm install` to install the required dependencies.
4. Set up your environment variables by creating a `.env` file and filling in the necessary values.
5. Run the server using `npm start` or `node index.js`.
6. Access the server by navigating to `http://localhost:3000` in your browser.

## Endpoints

- `GET /`: Home route that provides a link to access the Mongo Database.

- `GET /db/notes`: Retrieve notes from the MongoDB database.

- `POST /db/notes`: Create a new note and store it in the database.

- `GET /db/users`: Get information about users from the database.

- `POST /db/login`: User login route for authentication.

- `POST /db/verify`: Verification route for user verification.

## Contact

If you have any questions, suggestions, or feedback about this project, feel free to contact me. You can find me on GitHub ([@AndrePonce3322](https://github.com/AndrePonce3322)).

Thank you for checking out my backend project! I'm excited to continue learning and expanding my skills as a full-stack developer.

---
André
Full-Stack Developer
Email: andreponce417@gmail.com
LinkedIn: [linkedin.com/in/AndrePonce](https://www.linkedin.com/in/andre-ponce-242498181)
GitHub: [@andrePonce](https://github.com/AndrePonce3322)