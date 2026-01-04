import {useState} from "react";
import Input from "../components/Input.jsx";
import Button from "../components/Button.jsx";
function Login(){
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword,setShowPassword] = useState(false);

    const [error,setError] = useState("");
    const [loading,setLoading] = useState(false);

    function handleLogin(){
        setError("");

        if(!email || !password) {
            setError("Email and password are required");
            return;
        }

        if(!email.includes("@")){
            setError("Please enter a valid email");
            return;
        }

        setLoading(true)


        setTimeout(() => {
            setLoading(false);

            if(email==="test@example.com" && password==="password"){
                alert("login successful");
            }else{
                setError("Invalid credentials");
            }
        },1500);
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

            <p style={{marginTop:"16px",textAlign:"center"}}>Don't have an account?
                <span style={{color:"#4f46e5"}}>Register</span></p>
        </div>
    );
}

export default Login;