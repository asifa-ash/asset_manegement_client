import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "../../API/API";
import './Edit.css'

const Edit = () => {
  let param = useParams();
  let id = param.id;
  const [userData, setUserData] = useState([]);
  const fetchData = async () => {
    const { data } = await API.get(`/upload/${id}`);

    setUserData(data);
    console.log(userData, "hhghghghghhg");
  };
  useEffect(() => {
    fetchData();
  }, []);

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

  return <div>
  <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="User Name"
          value={userData.name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="LOB"
          value={userData.dob}
          onChange={(e) => setDob(e.target.value)}
        />
        <input
          type="text"
          placeholder="Title"
          value={userData.title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Department"
          value={userData.department}
          onChange={(e) => setDepartment(e.target.value)}
        />
        <input
          type="text"
          placeholder="ReportingManager"
          value={userData.reporting_manager}
          onChange={(e) => setReporting_manager(e.target.value)}
        />
        <input
          type="number"
          placeholder="Date_Of_Join"
          value={userData.date_join}
          onChange={(e) => setDate_join(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          value={userData.email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Status"
          value={userData.status}
          onChange={(e) => setStatus(e.target.value)}
        />
        <input
          type="text"
          placeholder="Location"
          value={userData.location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="text"
          placeholder="Type of User"
          value={userData.type_of_user}
          onChange={(e) => setType_of_user(e.target.value)}
        />
        <input
          type="text"
          placeholder="Contact Type"
          value={userData.contract_type}
          onChange={(e) => setContract_type(e.target.value)}
        />
        {/* <img
                src={`data:${userData.image.mimetype};base64,${userData.image.buffer}`}
                alt="asifa"
              />
            */}

        <input type="file" accept="image/*" onChange={handleFileChange} />
        <button type="submit" className="btn_update">Update</button>
       
              
       
      </form>
  
  </div>;
};

export default Edit;
