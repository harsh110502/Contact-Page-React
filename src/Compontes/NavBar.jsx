import "./NavBar.css";

const NavBar = () => {
	return (
		<>
			<nav className="container">
				<div className="logo">
					<img src="logo.png" />
				</div>
				<ul>
					<li>HOME</li>
					<li>ABOUT</li>
					<li>CONTACT</li>
				</ul>
			</nav>
		</>
	);
};

export default NavBar;
