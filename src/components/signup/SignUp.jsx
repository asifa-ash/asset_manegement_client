import React, { useState } from "react";
import { API } from "../../API/API";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const [data, setData] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");
  const [result, setResult] = useState(false);
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {

    e.preventDefault();

    const { data: response } = await API.post("/auth/register", data);

    console.log(response.message,"hhjhgh");
    setMessage(response.message);
    if (response.message === "user registered successfully") {
      setResult(true);
      navigate("/login");
    } else {
      setResult(false);
      navigate("/signup");
    }
  };

  return (
    <div>
      <div className="form">A
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
          <button type="Submit">register</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
