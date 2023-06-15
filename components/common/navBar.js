import NavLink from "./navLink";

const NavBar = (props) => {
	return (
		<>
			<div className="nav-container">
				<nav className="navbar">
					<div className="nav-background">
						<ul className="nav-list">
							<li
								className={
									"nav-item"
								}
							>
								<NavLink exact href="/">Home</NavLink>
							</li>
							<li
								className={
									"nav-item"
								}
							>
								<NavLink href="/about">About</NavLink>
							</li>
							<li
								className={
									"nav-item"
								}
							>
								<NavLink href="/projects">Projects</NavLink>
							</li>
							<li
								className={
									"nav-item"
								}
							>
								<NavLink href="/articles">Articles</NavLink>
							</li>
							<li
								className={
									"nav-item"
								}
								
							>
								<NavLink href="/contact">Contact</NavLink>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</>
	);
};

export default NavBar;
