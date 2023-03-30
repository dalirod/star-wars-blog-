import React from "react";
import { Link } from "react-router-dom";
import pngwing from "../../img/pngwing.com.png";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1"><img src={pngwing}/></span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary me-5">Favorites</button>
				</Link>
			</div>
		</nav>
	);
};
