import firebase from 'firebase';
require ("firebase/firestore");

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAKRua5ayxlusXZ87zmMCgAPxM2LXqwygE",
  authDomain: "vue-bestdeals.firebaseapp.com",
  databaseURL: "https://vue-bestdeals.firebaseio.com",
  projectId: "vue-bestdeals",
  storageBucket: "vue-bestdeals.appspot.com",
  messagingSenderId: "630718185273"
};

const fb = firebase.initializeApp(config);
const db = firebase.firestore();

export {fb,db}