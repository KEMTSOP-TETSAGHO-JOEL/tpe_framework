const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(cors());
app.use(bodyParser.json());

// Connexion à MongoDB
mongoose.connect('mongodb://localhost:27017/sondage')
    .then(() => {
        console.log('Connecté à MongoDB avec succès');
    })
    .catch(err => {
        console.error('Erreur de connexion à MongoDB:', err);
    });

// Importer les routes
const questionRoutes = require('./routes/questions');
app.use('/api/questions', questionRoutes);

// Configuration de Socket.IO
io.on('connection', (socket) => {
    console.log('Nouveau client connecté');
    socket.on('disconnect', () => {
        console.log('Client déconnecté');
    });
});

// Démarrer le serveur
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});