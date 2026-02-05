 // Firebase service - Real implementation
 import { initializeApp } from 'firebase/app';
 import { getAuth, signInAnonymously, onAuthStateChanged } from 'firebase/auth';
 import { getFirestore, doc, onSnapshot } from 'firebase/firestore';
 import { PollData, UserPreferences } from '../types';
 
 const firebaseConfig = {
   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
   authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
   projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
   storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
   messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
   appId: import.meta.env.VITE_FIREBASE_APP_ID,
   measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
 };
 
 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
 const db = getFirestore(app);
 
 export const authenticateUser = async (): Promise<{ uid: string } | null> => {
   try {
     const result = await signInAnonymously(auth);
     console.log('✅ Firebase auth successful:', result.user.uid);
     return { uid: result.user.uid };
   } catch (error) {
     console.error('❌ Firebase auth error:', error);
     return null;
   }
 };
 
 export const subscribeToPoll = (callback: (data: PollData | null) => void): (() => void) => {
   const appId = 'morning-pulse-app';
   const pollRef = doc(db, `artifacts/${appId}/public/data/polls/current`);
   
   return onSnapshot(pollRef, (snapshot) => {
     if (snapshot.exists()) {
       callback(snapshot.data() as PollData);
     } else {
       callback(null);
     }
   }, (error) => {
     console.error('Poll subscription error:', error);
     callback(null);
   });
 };
 
 export const subscribeToUserPreferences = (
   userId: string,
   callback: (prefs: UserPreferences) => void
 ): (() => void) => {
   const appId = 'morning-pulse-app';
   const prefsRef = doc(db, `artifacts/${appId}/users/${userId}/preferences/settings`);
   
   return onSnapshot(prefsRef, (snapshot) => {
     if (snapshot.exists()) {
       callback(snapshot.data() as UserPreferences);
     } else {
       callback({ isPremium: false, alertKeywords: [] });
     }
   }, (error) => {
     console.error('User preferences subscription error:', error);
     callback({ isPremium: false, alertKeywords: [] });
   });
 };
 
 export { app, auth, db };