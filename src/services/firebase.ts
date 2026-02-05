 // Firebase service stubs - replace with actual Firebase implementation
 import { PollData, UserPreferences } from '../types';
 
 export const authenticateUser = async (): Promise<{ uid: string } | null> => {
   // Mock auth - replace with actual Firebase auth
   console.log('Mock auth: returning guest user');
   return null;
 };
 
 export const subscribeToPoll = (callback: (data: PollData | null) => void): (() => void) => {
   // Mock poll subscription
   callback(null);
   return () => {};
 };
 
 export const subscribeToUserPreferences = (
   userId: string,
   callback: (prefs: UserPreferences) => void
 ): (() => void) => {
   // Mock user preferences
   callback({ isPremium: false, alertKeywords: [] });
   return () => {};
 };