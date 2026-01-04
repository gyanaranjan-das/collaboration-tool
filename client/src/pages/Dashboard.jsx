import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Dashboard() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    function handleLogout() {
        logout();
        navigate("/login");
    }

    return (
        <div style={{ padding: "24px" }}>
            <h1>Dashboard</h1>
            <p>Welcome, {user.email}</p>

            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Dashboard;
