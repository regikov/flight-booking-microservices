## Flight Booking System

This Travel Booking System is a backend application built with Node.js and TypeScript for managing user and flight information. 

The application is structured into microservices, separating the logic of user and flight services.

## Tech Stacks

- **Node.js** - JavaScript runtime environment.
- **TypeScript** - Typed superset of JavaScript.
- **Express.js** - Web application framework for Node.js.
- **MongoDB** - NoSQL database for storing user and flight information.
- **Mongoose** - MongoDB ORM for data modeling.
- **Joi** - Schema validation for input data.
- **Express Validator** - Middleware for data validation.
- **Axios** - HTTP client for making requests between microservices.


### Features

- User registration and management.

- Flight creation and management.

- Data validation using Joi and express-validator.

- Database management with MongoDB via Mongoose.

- Axios for making HTTP requests between services.

- Modular architecture separating user and flight services.


## Project Structure
```bash
TRAVEL-BOOKING-SYSTEM
├── build/                    
├── flight-service/           
├── user-service/            
├── node_modules/            
├── src/                      
│   ├── flight-service/       
│   │   ├── flightController.ts
│   │   ├── flightModel.ts
│   │   ├── flightRoutes.ts
│   │   └── middlewares.ts
│   ├── user-service/         
│   │   ├── userController.ts
│   │   ├── userModel.ts
│   │   ├── userRoutes.ts
│   │   └── middlewares.ts
│   ├── server.ts            
├── .env.example             
├── .gitignore
├── package.json
├── tsconfig.json            
└── README.md
```

### Folder Explanation
- flight-service: Contains flight-related controllers, models, routes, and middleware.

- user-service: Contains user-related controllers, models, routes, and middleware.

- src: Source files for the application.

- build: Compiled JavaScript code after TypeScript transpilation.

### Installation and configurations

1. Clone the repository:

```bash
git clone https://github.com/your-username/flight-booking-system.git

cd flight-booking-system
```
2. Install dependencies:

```bash
npm install
```

3. Compile TypeScript:

```bash
npm run build
```

5. Create a .env file in the root directory based on .env.example.

6. Add your MongoDB URI and other environment variables.

Example .env:

```plaintext
MONGO_URI=mongodb://localhost:27017/travel-booking
PORT=5000
```

## Usage

1. Start the development server:

```bash
npm run dev
```

2. Start the production server:

```bash
npm start
```
The server will run on http://localhost:<PORT>.

## Endpoints

### User Service
- GET /users: Fetch all users.
- POST /users: Register a new user.
- PUT /users/: Update user information.
- DELETE /users/: Delete a user.

### Flight Service
- GET /flights: Fetch all flights.
- POST /flights: Add a new flight.
- PUT /flights/: Update flight information.
- DELETE /flights/: Delete a flight.

## Example Requests

GET /users request:

```http
GET http://localhost:<USER_SERVICE_PORT>/users
```

Expected response:

```json
[
  {
    "id": "614b1c3e1c4a9a001e3b8f9b",
    "name": "John Doe",
    "email": "johndoe@example.com",
    "createdAt": "2023-10-25T12:00:00Z"
  },
]
```
