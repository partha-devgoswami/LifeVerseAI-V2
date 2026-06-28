// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import {
  getAuth
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

// Firebase Config
const firebaseConfig = {
  apiKey:"AIzaSyAvNYx6MkYGEy1A65IEWIO8tM61wK2J1aA",
  authDomain: "lifeverse-ai.firebaseapp.com",
  projectId: "lifeverse-ai",
  storageBucket: "lifeverse-ai.firebasestorage.app",
  messagingSenderId: "879253860990",
  appId: "1:879253860990:web:bd7bca6ac7427ae3efde2f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Authentication
export const auth = getAuth(app);