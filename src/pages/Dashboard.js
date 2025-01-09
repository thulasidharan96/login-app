import { useEffect, useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import { UserDetailsApi } from "../services/Api";
import { logout, isAuthenticated } from "../services/Auth";
import Footer from "../components/Footer";
import "../pages/dashboard.css";

export default function DashboardPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: "", email: "", localId: "" });

  useEffect(() => {
    if (isAuthenticated()) {
      UserDetailsApi().then(({ data }) => {
        const { displayName, email, localId } = data.users[0];
        setUser({ name: displayName, email, localId });
      });
    }
  }, []);

  if (!isAuthenticated()) return <Navigate to="/login" />;

  return (
    <div>
      <NavBar logoutUser={() => { logout(); navigate('/login'); }} />
      <main className="container mt-5">
        <h3 className="text-center mt-5">Dashboard</h3>
        {user.name ? (
          <div>
            <p>Hi {user.name}</p>
            <p>Your email is {user.email}</p>
          </div>
        ) : (
          <p>Loading...Please Wait</p>
        )}
        <button onClick={() => alert(`Firebase ID = ${user.localId}`)}>Show ID</button>
      </main>
      <Footer />
    </div>
  );
}
