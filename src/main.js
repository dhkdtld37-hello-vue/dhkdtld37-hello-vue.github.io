import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhL8KOS55qrS_PcbzFXnCRkz53PUvN3lo",
  authDomain: "dhkdtld37-hello-vue.firebaseapp.com",
  projectId: "dhkdtld37-hello-vue",
  storageBucket: "dhkdtld37-hello-vue.appspot.com",
  messagingSenderId: "943951848063",
  appId: "1:943951848063:web:c05d1b6de5a6718ff9d54a",
  measurementId: "G-FQLDQSTKTX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

createApp(App).mount('#app')


