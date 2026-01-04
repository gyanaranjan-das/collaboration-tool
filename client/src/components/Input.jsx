function Input ({label, type = "text", value, onChange, placeholder}){
    return(
        <div style={{marginBottom:"16px"}}>
            <label style={{display:"block",marginBottom:"6px"}}>
                {label}
            </label>
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                style={{
                    width:"100%",
                    padding:"10px",
                    borderRadius:"6px",
                    border:"1px solid #ccc",
                    fontSize:"14px",
                }}
            />
        </div>
    )
}

export default Input;