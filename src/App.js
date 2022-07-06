// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";
// import "firebase/compat/storage";
import myBase, {authService} from "./myBase";
import AppRouter from "./Router";
import {useEffect, useState} from "react";

function App() {
	const [init,setInit] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	useEffect(()=>{
		authService.onAuthStateChanged((user)=>{
			user ? setIsLoggedIn(true) : setIsLoggedIn(false);
			setInit(true);
		});
	},[init]);
	return (
		<div>
			{ init ? <AppRouter isLoggedIn={isLoggedIn}/> : "initializing" }
			<footer>&copy; Twitter Clone {new Date().getFullYear()}</footer>
		</div>
	);
}

export default App;
