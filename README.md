﻿# tpe_framework
# Mini Sondage

## Description
Mini Sondage est une application web qui permet aux utilisateurs de créer des sondages, de voter sur des options et de consulter les résultats en temps réel. L'application utilise une architecture client-serveur, avec une API pour gérer les interactions entre le frontend et le backend.

## Table des matières
- [Caractéristiques](#caractéristiques)
- [Technologies](#technologies)
- [Installation](#installation)
- [Utilisation](#utilisation)
- [Fonctionnalités](#fonctionnalités)
- [Contributions](#contributions)
- [Auteurs](#auteurs)
- [Licence](#licence)

## Caractéristiques
- Interface utilisateur intuitive et réactive.
- Création et gestion de sondages par les administrateurs et les utilisateurs.
- Vote en temps réel par les utilisateurs.
- Consultation des résultats des sondages.
- Sécurité des données avec validation et authentification.

## Technologies
- **Frontend**: React.js, React Router, Axios, Socket.IO
- **Backend**: Express.js, Node.js
- **Base de Données**: MongoDB, Mongoose
- **Outils de Développement**: Postman pour tester l'API, Swagger pour la documentation

## Installation
1. **Cloner le dépôt**
   ```bash
   git clone https://github.com/KEMTSOP-TETSAGHO-JOEL/tpe_framework
   cd mini-sondage
2.Installer les dépendances
	.Pour le frontend :
		cd frontend
		npm install
	.Pour le backend :
		cd backend
		npm install
3.Configurer la base de données
	.Assurez-vous d'avoir MongoDB installé et en cours d'exécution.
	.Créez une base de données pour l'application.
4.Démarrer l'application
	.Pour le frontend :
		cd backend
		node server.js
	.Pour le backend :
		cd frontend
		npm start
Utilisation
Accédez à l'application via votre navigateur à l'adresse http://localhost:3000. Les administrateurs et les utilisateurs peuvent créer des sondages. Les utilisateurs peuvent voter et consulter les résultats en temps réel.

Fonctionnalités
Pour les Administrateurs et Utilisateurs
Créer des sondages avec plusieurs options.
Modifier ou supprimer des sondages existants.
Voter sur les sondages disponibles.
Voir les résultats des sondages.

Contributions
Les contributions sont les bienvenues ! Pour contribuer :

Fork le projet.
Créez une nouvelle branche (git checkout -b feature/NouvelleFonctionnalité).
Commitez vos modifications (git commit -m 'Ajout d\'une nouvelle fonctionnalité').
Poussez vers la branche (git push origin feature/NouvelleFonctionnalité).
Ouvrez une Pull Request.

Auteurs
KEMTSOP TETSAGHO JOEL - Securite et cryptographie
TAMBEKOU KAPNANG CYRIL - Securite et cryptographie
NGOUNOU SIMO KAMILA SINTIA - Securite et cryptographie
