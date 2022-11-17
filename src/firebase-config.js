/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  apiKey: "AIzaSyB38CMq6-3Xx69ka7Wg5kX6ZbCHQuek8dM",
  authDomain: "friendlychat-34a38.firebaseapp.com",
  projectId: "friendlychat-34a38",
  storageBucket: "friendlychat-34a38.appspot.com",
  messagingSenderId: "174288917353",
  appId: "1:174288917353:web:13cb7f8e5363b8a3de23f8"
};


export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}