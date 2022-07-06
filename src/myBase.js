import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
//import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
	apiKey: process.env.REACT_APP_API_KEY,
	authDomain: process.env.REACT_APP_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_PROJECT_ID,
	storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_MESSAGING_ID,
	appId: process.env.REACT_APP_ID,
	measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

// Get a list of cities from your database
// async function getCities(db) {
// 	const citiesCol = collection(db, 'cities');
// 	const citySnapshot = await getDocs(citiesCol);
// 	const cityList = citySnapshot.docs.map(doc => doc.data());
// 	return cityList;
// }
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
export const authService = getAuth();
// const analytics = getAnalytics(app);