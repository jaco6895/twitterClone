import React from 'react';

const Home = () => {
	return (
		<div>
			<form action="">
				<textarea placeholder={"what's your mind?"} maxLength={120}/>
				<input type="submit" value={"Tweet"}/>
			</form>
		</div>
	);
}

export default Home;