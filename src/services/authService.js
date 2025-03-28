import { 
  signInWithEmailAndPassword, 
  signOut as firebaseSignOut,
  onAuthStateChanged
} from 'firebase/auth';
import { auth } from '@/lib/firebase';
import Cookies from 'js-cookie';

export const signIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    
    // Get the ID token
    const token = await userCredential.user.getIdToken();
    
    // Set a session cookie (7 days expiry) - ONLY used for admin routes
    Cookies.set('session', token, { expires: 7, secure: process.env.NODE_ENV === 'production' });
    
    return { user: userCredential.user, error: null };
  } catch (error) {
    return { user: null, error: error.message };
  }
};

export const signOut = async () => {
  try {
    await firebaseSignOut(auth);
    // Remove the session cookie on logout
    Cookies.remove('session');
    return { error: null };
  } catch (error) {
    return { error: error.message };
  }
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {
        unsubscribe();
        resolve(user);
      },
      reject
    );
  });
};