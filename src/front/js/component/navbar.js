import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/Login">
					<span className="navbar-brand mb-0 h1">LOGIN</span>
				</Link>
				<div className="ml-auto">
					<Link to="/SignUp">
						<button className="btn btn-primary">SIGNUP</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
