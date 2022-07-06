import React, {useEffect, useState} from 'react';
import {authService, db} from "../myBase";
import { doc, addDoc, serverTimestamp, Timestamp, collection } from "firebase/firestore";

const Home = () => {
	const [tweet,setTweet] = useState();
	let val;

	const onSubmitHandler = async (e) => {
		e.preventDefault();
		setTweet(val);

		await addDoc(collection(db,"tweets"), {
			tweet: val || null,
			date: serverTimestamp() || null,
			hearts: 0,
			retweet: 0,
			comments: null
		});
	}
	const onChangeHandler = (e) =>{
		val = e.target.value;
	}

	useEffect(() => {
		console.log(tweet);

	},[tweet])
	return (
		<div>
			<form action="">
				<textarea value={tweet} onChange={onChangeHandler} placeholder={"what's your mind?"} maxLength={120}/>
				<input onClick={onSubmitHandler } type="submit" value={"Tweet"}/>
			</form>
		</div>
	);
}

export default Home;