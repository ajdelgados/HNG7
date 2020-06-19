const express = require('express');
const dotenv=require('dotenv');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const app = express();
const swaggerDocument = YAML.load('./swagger.yaml');
dotenv.config();
 
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

var port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));