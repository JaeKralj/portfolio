// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCpkKkT_irLc8DQRUuGxAHG3VOztSWKuhs',
  authDomain: 'portfolio-a5746.firebaseapp.com',
  projectId: 'portfolio-a5746',
  storageBucket: 'portfolio-a5746.appspot.com',
  messagingSenderId: '205621793863',
  appId: '1:205621793863:web:498dd86b35a67c0b424d62',
  measurementId: 'G-KPYRRRDTG7',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const storage = getStorage(app)
