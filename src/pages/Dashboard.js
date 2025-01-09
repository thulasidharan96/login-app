import { useEffect, useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import { UserDetailsApi } from "../services/Api";
import { logout, isAuthenticated } from "../services/Auth";
import Footer from "../components/Footer";

export default function DashboardPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: "", email: "", localId: "" });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (isAuthenticated()) {
      UserDetailsApi()
        .then(({ data }) => {
          const { displayName, email, localId } = data.users[0];
          setUser({ name: displayName, email, localId });
          setLoading(false);
        })
        .catch((err) => {
          setError("Failed to load user data.");
          setLoading(false);
        });
    }
  }, [navigate]);

  if (!isAuthenticated()) return <Navigate to="/login" />;

  return (
    <div>
      <NavBar
        logoutUser={() => {
          logout();
          navigate('/login');
        }}
      />
      <main style={{ textAlign: "center", minHeight: "71vh" }}>
        <h3 className="text-center mt-5">Dashboard</h3>
        {loading ? (
          <p>Loading... Please wait.</p>
        ) : error ? (
          <p className="text-danger">{error}</p>
        ) : (
          <div>
            <p>Hi {user.name}</p>
            <p>Your email is {user.email}</p>
            <button onClick={() => alert(`Firebase ID = ${user.localId}`)}>
              Show ID
            </button>
          </div>
        )}
      </main>
      <Footer/>
    </div>
  );
}
