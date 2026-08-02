// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.17.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.17.0/firebase-firestore.js";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA7gok15Se_rq7qG5ICL8uZFht0fzGv1TQ",
  authDomain: "muralla-gaming.firebaseapp.com",
  projectId: "muralla-gaming",
  storageBucket: "muralla-gaming.firebasestorage.app",
  messagingSenderId: "490172113341",
  appId: "1:490172113341:web:e96247c38f8d81dfc172d4",
  measurementId: "G-DYPG9XVB5K"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Firestore
const db = getFirestore(app);

// Exportar la base de datos
export { db };
