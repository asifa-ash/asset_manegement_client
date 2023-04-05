import React, { useEffect, useState } from "react";
import "./Asset.css";
import { API } from "../../API/API";

const Asset = () => {
  const [allUser, setAllUser] = useState([]);

  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [model, setModel] = useState("");
  const [serial_no, setSerial_no] = useState("");
  const [status, setStatus] = useState("");
  const [damaged, setDamaged] = useState("");
  const [manufacturer, setManufacturer] = useState("");

  const [warrantyType, setWarrantyType] = useState("");
  const [warrantyExpiry, setWarrantyExpiry] = useState("");
  const [sla, setSla] = useState("");
  const [office, setOffice] = useState("");
  const [location, setLocation] = useState("");
 
  const [UserId, setUserId] = useState({});
  const [imageFile, setImageFile] = useState(null);
  const fetchData = async () => {
    const { data } = await API.get("/upload/allUser/");
    setAllUser(data);
    console.log(allUser, "getuser");
  };
  

  useEffect(() => {
    fetchData();
  }, []);

  const handleFile = (e) => {
    setImageFile(e.target.files[0]);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", imageFile);
    formData.append("name", name);
    formData.append("type", type);
    formData.append("manufacturer", manufacturer);
    formData.append("model", model);

    formData.append("serial_no;", serial_no);
    formData.append("status", status);
    formData.append("warrantyType", warrantyType);
    formData.append("warrantyExpiry", warrantyExpiry);
    formData.append("damaged", damaged);
    formData.append("sla", sla);
    formData.append("office", office);
    
    formData.append("userId", UserId);

    formData.append("location", location);
    console.log(formData, "formdata kiti");

    const { data } = await API.post("/asset/", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  };

  return (
    <div className="asset">
    <h1>Asset</h1>
      <div className="form-str">
        
        <form action="" className="asset-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input
            type="text"
            placeholder="Type"
            onChange={(e) => setType(e.target.value)}
            value={type}
          />
          <input
            type="text"
            placeholder="manufacturer"
            onChange={(e) => setManufacturer(e.target.value)}
            value={manufacturer}
          />
          <input
            type="text"
            placeholder="model"
            onChange={(e) => setModel(e.target.value)}
            value={model}
          />
          <input
            type="number"
            placeholder="serial no"
            onChange={(e) => setSerial_no(e.target.value)}
            value={serial_no}
          />
          <input
            type="text"
            placeholder="status"
            onChange={(e) => setStatus(e.target.value)}
            value={status}
          />
          <input
            type="text"
            placeholder="damaged"
            onChange={(e) => setDamaged(e.target.value)}
            value={damaged}
          />
          <input
            type="text"
            placeholder="warranty type"
            onChange={(e) => setWarrantyType(e.target.value)}
            value={warrantyType}
          />
          <input
            type="text"
            placeholder="warranty expiry"
            onChange={(e) => setWarrantyExpiry(e.target.value)}
            value={warrantyExpiry}
          />
          <input
            type="text"
            placeholder="SLA"
            onChange={(e) => setSla(e.target.value)}
            value={sla}
          />
          <input
            type="text"
            placeholder="office"
            onChange={(e) => setOffice(e.target.value)}
            value={office}
          />
          <input
            type="text"
            placeholder="location"
            onChange={(e) => setLocation(e.target.value)}
            value={location}
          />
          <select id="country"  onChange={(e) => setUserId(e.target.value)} >
            {allUser.map((item) => {
              return (
                <option value={item._id}>
                  {item.name}
                </option>
              );
            })}
          </select>
          
          <input type="file" accept="image/*" onChange={handleFile} />
          <button className="bt" type="submit">
            Add Asset
          </button>
        </form>
      </div>
    </div>
  );
};

export default Asset;
