const express = require('express');
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const taskRoutes = require('../routes/tasksRoutes');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/todoapp')
.then(() => console.log('MongoDB conectado'))
.catch(err => console.error('Error conectando a MongoDB:', err));


const swaggerOptions = {
  definition: {
    info: {
      title: 'Task API',
      version: '1.0.0',
      description: 'API para gestionar tareas con MongoDB y Mongoose',
    },
  },
  apis: ['./routes/*.js'],
};

const specs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));


app.use('/api/tasks', taskRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
