import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
	const [openOrClosed, setOpenOrClosed] = useState(false)

	const handleToggle = () => {
		setOpenOrClosed(!openOrClosed)
	}

	return (
		<nav>
			<i 
			  onClick={handleToggle}
			  class="fas fa-bars">
		    </i>
			{openOrClosed &&
				<div>
				{user ? (
					<ul>
						<li>Welcome, {user.name}</li>
						<li>
							<NavLink to='' onClick={handleLogout}>Log out</NavLink>
						</li>
						<li>
							<NavLink to="/users">Users</NavLink>
						</li>
						<li>
							<NavLink to="/home">Home</NavLink>
						</li>
						<li>
							<NavLink to="/trips">Trips</NavLink>
						</li>
						<li>
							<NavLink to="/inspiration">Inspiration</NavLink>
						</li>
					</ul>
				) : (
					<ul>
						<li>
							<NavLink to="/login">Log In</NavLink>
						</li>
						<li>
							<NavLink to="/users">Users</NavLink>
						</li>
						<li>
							<NavLink to="/signup">Sign Up</NavLink>
						</li>
					</ul>
				)}
				</div>
            }
		</nav>
	)
}

export default NavBar
