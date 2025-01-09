import { useEffect, useState } from "react"
import { useNavigate, Navigate } from "react-router-dom"
import NavBar from "../components/NavBar"
import { UserDetailsApi } from "../services/Api"
import { logout,isAuthenticated } from "../services/Auth"
import Footer from "../components/Footer"
import "../pages/dashboard.css"

export default function DashboardPage(){
    const navigate = useNavigate();

    const [user,setUser] = useState({name:"",email:"",localId:""})

    useEffect(()=>{
        if(isAuthenticated()){
            UserDetailsApi().then((response)=>{
               
                setUser({
                    name:response.data.users[0].displayName,
                    email:response.data.users[0].email,
                    localId:response.data.users[0].localId,
                })
            })
        }
    },[])

    const logoutUser = ()=>{
        logout();
        navigate('/login')
    }

    if (!isAuthenticated()) {
        //redirect user to dashboard
        return <Navigate to="/login" />
    }

    return (
        <div>
            <NavBar logoutUser={logoutUser} />
            <main role="main" className="container mt-5">
                <div className="container">
                    <div className="text-center mt-5">
                        <h3>Dashboard</h3>
                        { user.name && user.email && user.localId ?
                            (<div>
                                <p className="text-bold " >Hi {user.name}</p>
                                <p>Your email is {user.email}</p>
                            </div>)
                            : <p>Loading...Please Wait</p>
                        }
                    </div>
                </div>
                <div className="dash-content">
                        <button onClick={() => alert( `Firebase ID = ${user.localId}`)}>Show ID</button>
                </div>
            </main>
            <Footer />
        </div>
    )
}