import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push } from 'firebase/database';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyA1IgwVEZU2p_HZ7tNfleCuicwygyG28UQ",
  authDomain: "xonik-5e3eb.firebaseapp.com",
  databaseURL: "https://xonik-5e3eb.firebaseio.com",
  projectId: "xonik-5e3eb",
  storageBucket: "xonik-5e3eb.appspot.com",
  messagingSenderId: "602600387700",
  appId: "1:602600387700:web:fb9f80d0c0e45c9e288d21",
  measurementId: "G-B3S9W195RH"
};

const firebaseApp = initializeApp(firebaseConfig);
getAnalytics(firebaseApp);
const db = getDatabase(firebaseApp);

const submitOrder = (order: any) => {
  push(ref(db, 'orders'), order);
};

const submitContactForm = (data: any) => {
  push(ref(db, 'contactForm'), data);
};

export default {
  submitOrder,
  submitContactForm,
};
