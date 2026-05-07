# Contacts API

A RESTful API for storing and retrieving contact information, built with Node.js, Express, and MongoDB.

## Tech Stack
- Node.js + Express
- MongoDB (Atlas)
- dotenv

## Project Structure (MVC)
```
contacts-api/
├── server.js               # Entry point — connects DB, mounts routes
├── routes/
│   └── contacts.js         # Route definitions for /contacts
├── controllers/
│   └── contactsController.js  # Request/response logic
├── models/
│   ├── db.js               # MongoDB connection
│   └── contactsModel.js    # DB query functions
├── data/
│   └── seed.js             # Seed script for sample data
├── contacts.rest           # REST client test file
├── .env.example            # Template for environment variables
└── .gitignore              # Excludes .env and node_modules
```

## Setup

1. Clone the repo
2. Run `npm install`
3. Copy `.env.example` to `.env` and fill in your MongoDB URI
4. Run `node data/seed.js` to insert sample contacts (optional)
5. Run `npm start`

## API Endpoints

| Method | Endpoint          | Description              |
|--------|-------------------|--------------------------|
| GET    | /contacts         | Get all contacts          |
| GET    | /contacts/:id     | Get a single contact      |
| POST   | /contacts         | Create a new contact      |
| PUT    | /contacts/:id     | Update a contact          |
| DELETE | /contacts/:id     | Delete a contact          |

## Contact Schema
```json
{
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "favoriteColor": "string",
  "birthday": "string (YYYY-MM-DD)"
}
```

## Deployment
Deployed on Render. Set the following environment variables in Render's dashboard:
- `MONGODB_URI`
- `DB_NAME`
- `PORT` (Render sets this automatically)
