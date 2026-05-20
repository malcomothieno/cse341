const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Contacts API',
    description: 'API for managing contact information including friends and work colleagues.',
    version: '1.0.0',
  },
  host: 'cse341-vwck.onrender.com',
  schemes: ['https'],
  tags: [
    {
      name: 'Contacts',
      description: 'Endpoints for managing contacts',
    },
  ],
  definitions: {
    Contact: {
      type: 'object',
      properties: {
        firstName: { type: 'string', example: 'James' },
        lastName: { type: 'string', example: 'Carter' },
        email: { type: 'string', example: 'james.carter@example.com' },
        favoriteColor: { type: 'string', example: 'Navy Blue' },
        birthday: { type: 'string', example: '1990-06-15' },
      },
    },
  },
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/contacts.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);
