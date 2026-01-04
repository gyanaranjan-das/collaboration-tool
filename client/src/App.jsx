import Login from "./pages/Login.jsx";
import {Routes, Route, Navigate} from "react-router-dom"
import Register from "./pages/Register.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import ProtectedRoute from "./context/ProtectedRoute.jsx";
function App(){
    return(
        <Routes>
            <Route
                path="/"
                element={<Navigate to={user ? "/dashboard" : "/login"} />}
            />

            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>

            <Route
                path="/dashboard"
                element={
                    <ProtectedRoute>
                        <Dashboard/>
                    </ProtectedRoute>
                }/>
        </Routes>
    );
}

export default App;