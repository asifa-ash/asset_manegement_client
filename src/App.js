import { useEffect, useState } from "react";
import "./App.css";
import AssEdit from "./components/AeetEdit/AssEdit";
import Asset from "./components/Asset/Asset";
import Edit from "./components/Edit/Edit";
import UserData from "./components/UserData/UserData.jsx";
import ViewAsset from "./components/ViewAsset/ViewAsset";

import Admin from "./components/admin/Admin.jsx";
import Login from "./components/login/Login.jsx";
import SignUp from "./components/signup/SignUp.jsx";

import { Navigate, Route, Routes } from "react-router-dom";

function App() {
  const [User, setUser] = useState([])
  const fetch=async()=>{
    const user = await JSON.parse(localStorage.getItem("user"));
    console.log(user,"usi");
        setUser(user);
  }
  useEffect(() => {
   fetch()
  }, [])
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={User ? <UserData />:<Navigate to="login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/userdata" element={<UserData />} />

        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/asset" element={<Asset />} />
        <Route path="/viewasset" element={<ViewAsset />} />
        <Route path="/assetedit/:id" element={<AssEdit />} />
      </Routes>
    </div>
  );
}

export default App;
