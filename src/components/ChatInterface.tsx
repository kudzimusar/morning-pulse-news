 import React from 'react';
 import { PollData, UserPreferences } from '../types';
 
 interface ChatInterfaceProps {
   userId: string | null;
   pollData: PollData | null;
   userPrefs: UserPreferences;
 }
 
 const ChatInterface: React.FC<ChatInterfaceProps> = ({ userId, pollData, userPrefs }) => {
   return (
     <div className="flex-1 overflow-y-auto p-4 bg-[#ECE5DD]">
       <div className="flex flex-col gap-2">
         <div className="bg-white rounded-lg p-3 max-w-[80%] shadow-sm">
           <p className="text-sm text-gray-800">
             👋 Welcome to Morning Pulse! Your AI-powered news companion.
           </p>
           <p className="text-xs text-gray-500 mt-1">
             {userPrefs.isPremium ? '✨ Premium features active' : 'Free tier'}
           </p>
         </div>
         {pollData && (
           <div className="bg-white rounded-lg p-3 max-w-[80%] shadow-sm">
             <p className="text-sm font-medium">{pollData.question}</p>
           </div>
         )}
       </div>
     </div>
   );
 };
 
 export default ChatInterface;