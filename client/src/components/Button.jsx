function Button({children, onClick, disabled, loading}){
    return(
        <button
            onClick={onClick}
            disabled={disabled}
        style={{
            width:"100%",
            padding:"12px",
            borderRadius:"6px",
            border:"none",
            backgroundColor: disabled ? "#999":"#4f46e5",
            color:"white",
            fontSize:"15px",
            cursor: disabled ? "not-allowed":"pointer",
        }}>
            {loading ? "Logging in...": children}
        </button>
    );
}

export default Button;