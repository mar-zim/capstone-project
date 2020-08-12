<div align="center">
  <img src="./public/logo.svg"
     height="40px"/>
</div>

---

## Hamburg citizens love to share!

shhare gives all Hamburg citizens the possibility to share their sports-equipments, tools and kitchen appliances - and everything else that is not used for the majority of its lifetime - with their neighbors and fellow citizens.
It was made with Create React App and a Firebase backend.

This app was developed as my capstone project during the final four weeks of the neuefische Web Development Bootcamp in July, 2020 in Hamburg, Germany.

This app is optimized for mobile usage, so please switch your browser to responsive mode (iPhone 6/7/8)

Take a look at the app here [here](https://shhare.web.app/) or watch the preview below.

---

## App impressions

<div align="center">
  <img src="./public/img/mariuccia_zimmermann_shhare.gif"
     height="410px"/>
</div>

---

## Tech stack

- React
- React Hooks
- React Router
- React Spring
- styled-components
- Firebase
  - Authentication
  - Cloud Firestore
  - Storage
  - Hosting
- prop-types
- uuid
- Storybook
- Jest
- React Testing Library
- Cypress

---

## How to set it up

- clone this repository
- install all npm dependencies  
   `npm install`
- to run the app in development mode `npm start`, then open [http://localhost:3000](http://localhost:3000) to view it in the browser
- to run Storybook  
  `npm run storybook`
- to run React Testing Library & Jest  
  `npm test`
- to run Cypress  
  `npm run cypress`
- to create a build ready for deploying:
  `npm run build`
- this app uses firebase authentication, storage and firestore, therefore you need to install firebase  
  `npm install -g firebase-tools`  
  and intialize it to use and deploy the firebase project.
- for more information check out the [firebase documentation](https://firebase.google.com/docs)
