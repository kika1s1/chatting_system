# Chatting System

A simple chatting system built with Node.js, Express, MongoDB, and Socket.IO.

## Features

- Real-time messaging between users
- User authentication and authorization
- Profile management (name, email, profile picture)
- Message history and status (seen, delivered)
- Responsive design for mobile and desktop

## Technologies Used

- Node.js
- Express
- MongoDB (Mongoose)
- Socket.IO
- HTML/CSS (Tailwind CSS)
- JavaScript (ES6+)

## Getting Started

### Prerequisites

- Node.js installed
- MongoDB installed and running locally or a remote MongoDB URI

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/kika1s1/chatting_system.git
   cd chatting_system
   ```
2. Install dependencies:
   ```bash 
   npm install
    ```
3. Set environment variables:
   Create a .env file in the root directory with the following:
   ```bash
   PORT=3000 
   MONGODB_URI=mongodb://localhost:27017/chatting-system 
   ```
4 Replace mongodb://localhost:27017/chatting-system with your MongoDB URI.

5. Start the server:
   ```bash
   npm start
   ```
6. Open your browser and go to http://localhost:3000 to see the application.

Usage
- Register a new account or login withexisting credentials.
Start a new chat or join an existing chat room.

- Send messages in real-time and see message status (delivered, seen).
Update your profile details and profile picture.
## API Endpoints
```
/api/users/register - Register a new user
/api/users/login - Login a user
/api/users/logout - Logout a user
/api/users/profile - Get logged-in user profile
/api/messages - Get all messages or send a new message
/api/chats - Get all chats or create a new chat room
```
#### Contributing
Contributions are welcome! Please fork the repository and submit a pull request with your changes.

