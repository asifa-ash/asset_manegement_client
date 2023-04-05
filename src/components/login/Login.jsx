import React, { useState } from "react";
import "./Login.css";
import { API } from "../../API/API";

function Login() {
  const [data, setData] = useState({ username: "", password: "" });
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    
  };


  const handleSubmit = async(e) => {
    e.preventDefault();
    const {data:response}= await API.post("/auth/login", data);
    console.log(response,"logdata");
    localStorage.setItem("user", JSON.stringify(response));
    if(response.message==="successfully login"){
      alert("successfully login")
    }
  };
  
  return (
    <div className="login">
      <div className="form">
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            onChange={handleChange}
            value={data.username}
            
          />
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={data.password}
          />
          <button type="Submit">login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
