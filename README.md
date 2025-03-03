# TECHUTSAV AUTH BACKEND

This code does the Authentication purpose for the TechUtsav24 website The .env.example file will contain the .env requirements that must be submitted before Deploying

This repository contains the authentication backend for the TechUtsav25 website.

## Setup Instructions

### Prerequisites
Make sure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (v18 or later recommended)
- [MongoDB](https://www.mongodb.com/) (running locally or a connection string to a remote database)

### Clone the Repository
```sh
git clone https://github.com/TechutsavTeam/backend25.git
cd backend25
```

### Configure Environment Variables
1. Copy the example environment file:
   ```sh
   copy .env.example .env   # Windows
   cp .env.example .env      # Mac/Linux
   ```
2. Open `.env` and update the required values:
   ```env
   DB_URL=mongodb://localhost:27017/techutsav_db
   PORT=3000
   SECRET_TOKEN=secret_token_123
   ALLOWED_ORIGIN=http://localhost:5173
   ```

### Install Dependencies
```sh
npm install
```

### Start the Server
```sh
npm start
```

The backend will now be running on `http://localhost:3000/`.

## Additional Notes
- Ensure MongoDB is running before starting the backend.
- Update `ALLOWED_ORIGIN` in `.env` if the frontend runs on a different port.
- Use `nodemon server.js` for automatic restarts during development.

---

Happy coding! 🚀