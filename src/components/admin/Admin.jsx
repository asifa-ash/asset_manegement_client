import React, { useState } from "react";
import "./Admin.css";

import { API } from "../../API/API";

const Admin = () => {
  const [imageFile, setImageFile] = useState(null);
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [title, setTitle] = useState("");
  const [department, setDepartment] = useState("");
  const [reporting_manager, setReporting_manager] = useState("");
  const [date_join, setDate_join] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [location, setLocation] = useState("");
  const [type_of_user, setType_of_user] = useState("");
  const [contract_type, setContract_type] = useState("");

  const [productData, setProductData] = useState([]);
  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    console.log(name, imageFile, "kkkkkkkkk");
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", imageFile);
    formData.append("name", name);
    formData.append("dob", dob);
    formData.append("location", location);

    formData.append("title", title);
    formData.append("department", department);
    formData.append("reporting_manager", reporting_manager);
    formData.append("date_join", date_join);
    formData.append("email", email);
    formData.append("status", status);
    formData.append("type_of_user", type_of_user);
    formData.append("contract_type", contract_type);
    console.log(formData, "hjhjhj");
    const { data } = await API.post("/upload/", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    setProductData(data);
    console.log(data, "nbnv");
  };

  return (
    <div className="admin">
    <h1>User form</h1>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="User Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="LOB"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />
        <input
          type="text"
          placeholder="ReportingManager"
          value={reporting_manager}
          onChange={(e) => setReporting_manager(e.target.value)}
        />
        <input
          type="number"
          placeholder="Date_Of_Join"
          value={date_join}
          onChange={(e) => setDate_join(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="text"
          placeholder="Type of User"
          value={type_of_user}
          onChange={(e) => setType_of_user(e.target.value)}
        />
        <input
          type="text"
          placeholder="Contact Type"
          value={contract_type}
          onChange={(e) => setContract_type(e.target.value)}
        />

        <input type="file" accept="image/*" onChange={handleFileChange} />
        <button type="submit">Save</button>
        {/* {productData.map((item, index) => {
          return (
            <div>
              {item.name}
              <img
                src={`data:${item.image.mimetype};base64,${item.image.buffer}`}
                alt="asifa"
              />
            </div>
          );
        })} */}
      </form>
    </div>
  );
};

export default Admin;
