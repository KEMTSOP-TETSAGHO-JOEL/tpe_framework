const express = require('express');
const router = express.Router();
const Question = require('../models/question');
const { io } = require('../server');


// Créer une question
router.post('/', async (req, res) => {
    const question = new Question(req.body);
    try {
        const savedQuestion = await question.save();
        io.emit('newQuestion', savedQuestion); // Émission d'un événement
        return res.status(201).json(savedQuestion); // Envoyer la réponse et sortir
    } catch (err) {
        return res.status(400).json({ message: err.message }); // Assurez-vous de retourner aussi ici
    }
});

// Soumettre un vote
router.post('/:id/vote', async (req, res) => {
    const { optionId } = req.body;
    try {
        // Récupérer la question par son ID
        const question = await Question.findById(req.params.id);
        if (!question) {
            return res.status(404).json({ message: 'Question non trouvée' });
        }

        // Vérifier si l'option existe
        const option = question.options.id(optionId);
        if (!option) {
            return res.status(404).json({ message: 'Option non trouvée' });
        }

        // Incrémenter le nombre de votes
        option.votes += 1;
        await question.save(); // Enregistrer les modifications

        // Notifier les clients via Socket.IO
        io.emit('voteUpdated', question);
        return res.status(200).json(question); // Retourner la question mise à jour
    } catch (err) {
        console.error('Erreur lors du vote:', err);
        return res.status(400).json({ message: err.message });
    }
});

// Afficher les questions
router.get('/', async (req, res) => {
    try {
        const questions = await Question.find();
        res.json(questions);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;