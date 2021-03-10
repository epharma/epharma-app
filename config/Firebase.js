//Importing firebase and other services that will be used
import * as firebase from 'firebase';
import "firebase/firestore";
import{
    API_KEY,
    AUTH_DOMAIN,
    DATABASE_URL,
    PROJECT_ID,
    STORAGE_BUCKET,
    MESSAGING_SENDER_ID,
    APP_ID,
    MEASUREMENT_ID
} from 'react-native-dotenv';

  //app's Firebase configuration
  const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    databaseURL: DATABASE_URL,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSAGING_SENDER_ID,
    appId: APP_ID,
    measurementId:  MEASUREMENT_ID
  };
  // Initializing Firebase
 const app = firebase.initializeApp(firebaseConfig);

 //Initialize database
export const db = app.firestore();
