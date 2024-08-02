# Flight Status Board with Email Notifications

This project is a flight status board built with ReactJS that displays the status of various flights. It also includes a feature to send email notifications to users.

## Features

- Displays flight status in a table.
- Fetches flight data from an external API.
- Sends email notifications for delayed flights.

## Prerequisites

- Node.js
- npm (Node Package Manager)
- ReactJS

## Installation

### Backend

1. Clone the repository:

    ```bash
    git clone https://github.com/Harshitjoc/Flight_Status_And_Notification.git
    cd Flight_Status_And_Notification/server
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```
    OR
    ```bash
    npm i
    ```

3. Create a `.env` file in the `backend` directory and add your email credentials:

- Check `.env.sample` file

4. Start the backend server:

    ```bash
    node index.js
    ```

### Frontend

1. Navigate to the `client` directory:

    ```bash
    cd ../client
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

4. Start the ReactJS development server:

    ```bash
    npm start
    ```

## Project Structure

The project is divided into two main parts:

1. **Backend**: A Node.js and Express.js server that handles sending email notifications.
2. **Frontend**: A ReactJS application that displays flight statuses and sends requests to the backend for email notifications.

### Backend

- `index.js`: The main file that sets up the Express server and handles email sending using Nodemailer.

### Frontend

- `src/components/FlightTable.js`: The main React component that fetches flight data from an API and displays it in a table.
- `src/index.js`: The entry point for the React application.

### Environment Variables
The backend server uses the following environment variables:

- SENDER_EMAIL: The email address from which notifications will be sent.
- SENDER_EMAIL_PASS: The password for the email account.
- RECEIVER_EMAIL: The email address in which notifications will be received.

## Usage

1. Ensure both the backend and frontend servers are running.
2. Open the frontend application in your browser (typically at `http://localhost:3000`).
3. The flight statuses will be displayed in a table.
4. If there are any delayed flights, an email will be sent to the specified email address with a list of all delayed flights.
