import Login from "./pages/Login.jsx";
import {Routes, Route, Navigate} from "react-router-dom"
function App(){
    return(
        <Routes>
            <Route path = "/" element={<Navigate to = '/login' />}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
    );
}

export default App;