import React, {useEffect, useState} from 'react';
import {authService} from "../myBase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const Auth = ()=> {
	const [email,setEmail] = useState("");
	const [password,setPassword] = useState("");
	const [submit,setSubmit] = useState(false);
	const [newAccount,setNewAccount] = useState(true);

	const onChangeHandle = (e) =>{
		const {target : { name , value}} = e;
		if(name === "email"){
			setEmail(value);
		}else if(name === "password"){
			setPassword(value);
		}
	}

	const onSubmit = async (e) =>{
		e.preventDefault();
		try{
			let data;
			if(newAccount){
				//새로운계정 생성
				data = await createUserWithEmailAndPassword(authService, email , password )
				setSubmit(true);
			}else{
				data = await signInWithEmailAndPassword(authService, email , password );

			}
			console.log(data);
		}catch (e){
			console.log(e);
		}
	}

	const onClickHandle = () =>{
		setSubmit(true);
	}
	// useEffect(()=>{
	//
	// },[submit]);

	return (
		<div>
			<form onSubmit={onSubmit}>
				<input name={"email"} type="email" placeholder={'email'} value={email} required onChange={onChangeHandle}/>
				<input name={"password"} type="password" placeholder={'password'} value={password} required onChange={onChangeHandle}/>
				<input type="submit" value={newAccount ? "Create Account" : "Login"}/>
			</form>
			<div>
				<button>Continue width Google</button>
				<button>Continue width Email</button>
			</div>
		</div>

	);
};

export default Auth;