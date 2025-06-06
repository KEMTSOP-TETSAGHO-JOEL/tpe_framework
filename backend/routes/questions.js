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
        return res.status(201).json(savedQuestion);
    } catch (err) {
        return res.status(400).json({ message: err.message });
    }
});

// Lire toutes les questions
router.get('/', async (req, res) => {
    try {
        const questions = await Question.find();
        res.json(questions);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Mettre à jour une question
router.put('/:id', async (req, res) => {
    try {
        const updatedQuestion = await Question.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedQuestion) {
            return res.status(404).json({ message: 'Question non trouvée' });
        }
        res.json(updatedQuestion);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Supprimer une question
router.delete('/:id', async (req, res) => {
    try {
        const deletedQuestion = await Question.findByIdAndDelete(req.params.id);
        if (!deletedQuestion) {
            return res.status(404).json({ message: 'Question non trouvée' });
        }
        res.status(204).send(); // Pas de contenu à renvoyer
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;