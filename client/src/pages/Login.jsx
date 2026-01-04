import {useState} from "react";
import Input from "../components/Input.jsx";
import Button from "../components/Button.jsx";
import {Link} from "react-router-dom";
import {useAuth} from "../context/AuthContext.jsx";
import {useNavigate} from "react-router-dom";
import {loginApi} from "../services/authService";
function Login(){
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword,setShowPassword] = useState(false);

    const [error,setError] = useState("");
    const [loading,setLoading] = useState(false);
    const {login} = useAuth();
    const {navigate} = useNavigate();
    async function handleLogin () {
        setError("");

        if(!email || !password){
            setError("Email and password are required");
            return;
        }

        try{
            setLoading(true);
            const data = await loginApi(email,password);

            login(data.user);
            navigate("/dashboard");
        }catch (err){
            setError(err.message);
        }finally {
            setLoading(false);
        }
    }
    return(
        <div
            style={{
                maxWidth:"400px",
                margin:"80px auto",
                padding:"24px",
                border:"1px solid #ddd",
                borderRadius:"10px",
             }}
            >
            <h2 style={{textAlign:"center",marginBottom:"24px"}}>Sign in to your account</h2>

            {error && (
                <p style={{color:"red",marginBottom:"16px"}}>{error}</p>
            )}
            <Input
            label="Email"
            placeholder="you@example.com"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}></Input>

            <Input
            label="Password"
            type={showPassword ? "text":"password"}
            placeholder="********"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}/>

            <div style={{marginBottom:"16px"}}>
                <input
                    type="checkbox"
                    id="showPassword"
                    checked={showPassword}
                onChange={()=>setShowPassword(!showPassword)}/>
                <label htmlFor="showPassword" style={{marginLeft:"8px"}}>
                    Show password
                </label>
            </div>
            <Button onClick={handleLogin} loading={loading} disabled={loading}>Login</Button>

            <p style={{marginTop:"16px",textAlign:"center"}}>Don't have an account?{" "}
                <Link to="/register" style={{color:"#4f46e5"}}>Register</Link>
            </p>
        </div>
    );
}

export default Login;