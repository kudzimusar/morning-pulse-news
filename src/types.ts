 export interface PollData {
   question: string;
   options: string[];
   votes: Record<string, number>;
 }
 
 export interface UserPreferences {
   isPremium: boolean;
   alertKeywords: string[];
 }