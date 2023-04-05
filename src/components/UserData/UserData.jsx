import React, { useEffect, useState, useNavigate } from "react";
import { API } from "../../API/API";
import "./UserData.css";
import { Link } from "react-router-dom";

const UserData = () => {
  const [allUser, setAllUser] = useState([]);
  const fetchData = async () => {
    const user = JSON.parse(localStorage.getItem("user") || null);
    const { data } = await API.get("/upload/allUser/");
    // , {
    //   headers: { Authorization: "Bearer" + " " + user?.token },
    // }

    console.log(data, "ggggggggg");
    setAllUser(data);
    console.log(allUser, "hhghghgdd");
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
   
      <div className="box">
        <h2
          style={{
            color: "#02b6ff",
            fontSize: "2vw",
            fontFamily: "monospace",
          }}
        >
          New application list{" "}
        </h2>
        
        <div className="table-responsive ">
        <Link to={"/"}><button className="btn_add">Add User</button></Link>
        
          <table className="table table-dark table-striped">
            <thead>
              <tr>
                <th scope="col">user_id</th>
                <th scope="col">Name</th>
                <th scope="col">Department</th>
                <th scope="col">Date of Join</th>
                <th scope="col">Email</th>
                <th scope="col">Status</th>
                <th scope="col">Salary</th>
                <th scope="col">Salary</th>
                <th scope="col">Photo</th>
              </tr>
            </thead>
            <tbody>
              {allUser.map((el) => {
                return (
                  <tr>
                    <td>{el._id}</td>
                    <td>{el.name}</td>
                    <td>{el.department}</td>
                    <td>{el.date_join}</td>

                    <td>
                      <img
                        src={`data:${el.image.mimetype};base64,${el.image.buffer}`}
                        alt=""
                        className="img"
                      />
                    </td>
                    <td>
                      <Link to={`/edit/${el._id}/`}>
                        <button className="btn btn-primary btndelete">
                          Edit
                        </button>
                      </Link>
                    </td>
                    <td>
                      <Link to={`upload/delete/${el._id}/`}>
                        <button className="btn btn-success btndelete">
                          Delete
                        </button>
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserData;
