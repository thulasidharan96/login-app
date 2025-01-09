import { Link } from "react-router-dom"
import { isAuthenticated } from "../services/Auth"

export default function NavBar(props){


    return ( 
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Company XYZ</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                    {!isAuthenticated() && <li className="nav-item"><Link className="nav-link" to="/register">Register</Link></li>}
                    {!isAuthenticated() && <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>}
                    {isAuthenticated() && <li className="nav-item"><Link className="nav-link" to="/dashboard">Dashboard</Link></li>}
                    {isAuthenticated() && <li className="nav-item"><a className="nav-link" onClick={props.logoutUser} style={{cursor:"pointer"}}>Logout</a></li>}
                </ul>
            </div>
        </nav>
    )
}