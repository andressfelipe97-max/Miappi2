import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
apiKey: "aAIzaSyDhBrMb2UY4BySoqP94Df36a7U-aPfGyxs",
authDomain: "miappi2.firebaseapp.com",
projectId: "miappi2",
storageBucket: "miappi2.firebasestorage.app",
messagingSenderId: "63107633654",
appId: "1:63107633654:web:334f105ae2101facfab7d7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };