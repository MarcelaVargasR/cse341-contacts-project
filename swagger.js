const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Contacts Api',
        description: ' Contacts Api'
    },
    host: 'localhost:3001',
    schemes: ['https', 'http']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc)