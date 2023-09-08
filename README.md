# Youtube Downloader Server

This is a simple Express.js server for downloading videos from YouTube. It provides a RESTful API to fetch video information and initiate downloads.

## Table of Contents

- [Getting Started](#getting-started)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Error Handling](#error-handling)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

To run this server locally or in your own environment, follow these steps:

1. Clone this repository to your local machine:

   ```shell
   git clone https://github.com/AndrePonce3322/YT-API.git
   ```

2. Install the required dependencies:

   ```shell
   npm install
   ```

3. Configure CORS options in `index.js` to specify the allowed origins.

4. Start the server:

   ```shell
   npm start
   ```

The server will run on the specified port or default to port 3000.

## Usage

Once the server is running, you can use it to fetch video information and initiate downloads from your frontend application. The server provides a simple API for this purpose.

## API Endpoints

- `GET /`: A simple route to check if the server is running.

- `POST /info`: Endpoint to fetch video information by providing a YouTube URL in the request body.

- `POST /download`: Endpoint to initiate video download by providing the video URL in the request body.

## Error Handling

The server includes a custom error handling middleware (`handleErrors`) to catch and handle errors. It responds with appropriate error messages and status codes for different types of errors.

To customize error handling, you can modify the `handleErrors` middleware in `middleware/handleErrors.js`.
