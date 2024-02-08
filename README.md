# Rendu web_services DE3 Fabien Fleisch

# Live version
Une version en ligne est disponible à ce lien : https://angular-library-seven.vercel.app/

# Installation du projet
- git clone https://github.com/LileFab/angular_library.git
- cd rendu_fabien_fleisch
- npm i
- ng serve
- Accéder à l'url : http://localhost:4200/

## Framework JS
- Angular : https://angular.io/

## Framework UI
- Tailwind : https://tailwindcss.com/

## PaaS
- Vercel : https://vercel.com/

# Architecture du projet

- Le projet est composé d'une page d'accueil avec un header permettant d'accéder au différentes pages.
- Il y a une vue pour les membres, une pour les livres, une pour les emprunts et une dernière avevc un formulaire de contact
- Chaque vue contient la liste des données enregistré dans les fichiers JSON simulant une base de données.
- Il est possible pour chaque ligne d'obtenir les détails grâce à l'appuie sur le bouton "Show details", pour les emprunts on obtient les détails sur le membre et le livre liés à l'emprunt.
- Pout finir la page de contact permet d'afficher une alerte contenant le mail et message renseigné.

# Sujet

The project is to develop a front-end app for a public library that displays :
- a navigation bar with 
  - a link to books list
  - a link to members list
  - a link to loans list
  - a contact form

List are loaded from static json files stored in the backend.
Each list enables a click to a detail screen, showing the details of :
- a book
- a member
- an loan

Contact form enables to enter an email and a message, with a button to send the message (an alert or a modal will be displayed with the content entered).

### Modalities

Project has to be done individually or by pair.  

### Technical stack

Front-end will be built using Angular.

An additional CSS lib can be used for a better design, but it is not mandatory.

### Deliverables

The expected deliverable will be a Git repo or a zip of your source code, with all your source files.
