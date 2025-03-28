import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize auth - must be done on client side
let auth;
if (typeof window !== "undefined") {
  // We're on the client side
  auth = getAuth(app);
  
  // Initialize analytics only on client side
  import("firebase/analytics").then(({ getAnalytics }) => {
    getAnalytics(app);
  }).catch(err => {
    console.error("Analytics failed to load:", err);
  });
} else {
  // We're on the server side
  auth = getAuth(app);
}

export { auth };
export default app;