import React from 'react';
import {authService} from "../myBase";

const Profile = () => {
	const onLogoutClick = () =>{
		authService.signOut();
	}
	return (
		<>
			<span>Profile</span>
			<input type="submit" value={"LogOut"} onClick={onLogoutClick}/>
		</>
	);
}

export default Profile;