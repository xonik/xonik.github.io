import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/analytics';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyA1IgwVEZU2p_HZ7tNfleCuicwygyG28UQ",
  authDomain: "xonik-5e3eb.firebaseapp.com",
  databaseURL: "https://xonik-5e3eb.firebaseio.com",
  projectId: "xonik-5e3eb",
  storageBucket: "xonik-5e3eb.appspot.com",
  messagingSenderId: "602600387700",
  appId: "1:602600387700:web:fb9f80d0c0e45c9e288d21",
  measurementId: "G-B3S9W195RH"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebase.analytics();
const db = firebaseApp.database();

const submitOrder = (order: any) => {
  db.ref('orders').push(order);
};

const submitContactForm = (order: any) => {
  db.ref('contactForm').push(order);
};

export default {
  submitOrder,
  submitContactForm,
}