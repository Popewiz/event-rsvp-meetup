# Event RSVP Application 🗓️📅

A web application designed to manage event RSVPs, allowing users to sign up as attendees and view attendee information. This project leverages HTML, CSS, JavaScript, Express.js, and MongoDB for handling attendee data and rendering the user interface.

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **User-friendly RSVP form**: Allows attendees to easily register for the event with their details.
- **Dynamic attendee display**: Displays attendee information on the homepage, including name, pronouns, and email.
- **Avatar customization**: Attendees' avatars are selected based on preferred pronouns.
- **Delete functionality**: Provides an option to remove attendees from the list.
- **Express.js API**: A RESTful API for managing attendee data in a MongoDB database.

---

## Project Structure

```plaintext
event-rsvp-app/
├── public/
│   ├── css/
│   │   └── styles.css           # Main stylesheet
│   ├── img/
│   │   └── avatar images (e.g., male-avatar.png, female-avatar.png)
│   ├── index.html               # Home page
│   └── rsvp.html                # RSVP form page
├── models/
│   └── attendee.js              # Mongoose model for Attendee
├── routes/
│   └── api.js                   # API routes for RSVP actions
├── app.js                       # Express.js server setup
└── README.md                    # Project documentation
```

---

## Installation

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### Setup

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/event-rsvp-app.git
    cd event-rsvp-app
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file to define environment variables, including your MongoDB URI:

    ```plaintext
    MONGO_URI=mongodb://localhost:27017/rsvpDB
    PORT=5000
    ```

4. Start MongoDB and the Express server:

    ```bash
    # Start MongoDB (if not running)
    mongod

    # Run the server
    node app.js
    ```

5. Open your browser and go to `http://localhost:5000` to view the app.

---

## Usage

1. Visit `index.html` to view the list of attendees.
2. Click on the "RSVP" button to go to `rsvp.html` and submit your details.
3. After submitting, return to `index.html` to view your entry.
4. Attendee data can also be managed using the REST API (detailed below).

---

## API Documentation

### Base URL

All API requests are made to `http://localhost:5000/api`.

### Endpoints

#### 1. RSVP to the Event

- **Endpoint**: `/api/rsvp`
- **Method**: `POST`
- **Description**: Registers a new attendee to the event.
- **Request Body**:

    ```json
    {
      "firstName": "John",
      "lastName": "Doe",
      "email": "johndoe@example.com",
      "country": "Country Name",
      "city": "City Name",
      "pronoun": "He/Him"
    }
    ```

- **Response**:

    - **Status**: `201 Created`
    - **Body**:

        ```json
        {
          "_id": "unique_attendee_id",
          "firstName": "John",
          "lastName": "Doe",
          "email": "johndoe@example.com",
          "country": "Country Name",
          "city": "City Name",
          "pronoun": "He/Him",
          "createdAt": "2024-11-09T12:34:56Z"
        }
        ```

#### 2. Get All Attendees

- **Endpoint**: `/api/attendees`
- **Method**: `GET`
- **Description**: Retrieves a list of all attendees.
- **Response**:

    - **Status**: `200 OK`
    - **Body**:

        ```json
        [
          {
            "_id": "unique_attendee_id",
            "firstName": "John",
            "lastName": "Doe",
            "email": "johndoe@example.com",
            "country": "Country Name",
            "city": "City Name",
            "pronoun": "He/Him",
            "createdAt": "2024-11-09T12:34:56Z"
          },
          {
            "_id": "unique_attendee_id",
            "firstName": "Jane",
            "lastName": "Smith",
            "email": "janesmith@example.com",
            "country": "Country Name",
            "city": "City Name",
            "pronoun": "She/Her",
            "createdAt": "2024-11-09T12:34:56Z"
          }
        ]
        ```

#### 3. Delete an Attendee

- **Endpoint**: `/api/attendees/:id`
- **Method**: `DELETE`
- **Description**: Removes an attendee from the event list.
- **Response**:

    - **Status**: `200 OK`
    - **Body**:

        ```json
        { "message": "Attendee deleted successfully." }
        ```

---

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch with your feature or bug fix: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a pull request.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

---

Enjoy building and managing your event’s attendee list!