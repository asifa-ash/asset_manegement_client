import React, { useEffect, useState } from "react";
import "./ViewAsset.css";
import { Link } from "react-router-dom";
import { API } from "../../API/API";

const ViewAsset = () => {
  const [assetData, setAssetData] = useState([]);
  const fetchData = async () => {
    
    const { data } = await API.get("/asset/allAsset/");

    console.log(data, "ggggggggg");
    setAssetData(data);
    
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="view">
      <div className="container">
        <div className="box">
          <h2
            style={{
              color: "#02b6ff",
              fontSize: "2vw",
              fontFamily: "monospace",
            }}
          >
            Company Asset list{" "}
          </h2>
          <div className="table-responsive ">
        <Link to={"/asset"}> <button className="btn_asset">Add Asset</button></Link>
         
            <table className="table table-dark table-striped">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">AssetName</th>
                  <th scope="col">Type</th>
                  <th scope="col">Manufacturer</th>
                  <th scope="col">Model</th>
                  <th scope="col">Serial_no</th>
                  <th scope="col">Damaged/Service</th>
                  <th scope="col">WarrantyType</th>
                  <th scope="col">WarrantyExpiry</th>
                  <th scope="col">SLA</th>
                  <th scope="col">Office</th>
                  <th scope="col">Location</th>
                  <th scope="col">Photo</th>
                </tr>
              </thead>
              <tbody>
                {assetData.map((el) => {
                  return (
                    <tr>
                      <td>{el._id}</td>
                      <td>{el.name}</td>
                      <td>{el.type}</td>
                      <td>{el.date_join}</td>

                      <td>
                        {/* <img
                          src={`data:${el.image.mimetype};base64,${el.image.buffer}`}
                          alt=""
                          className="img"
                        /> */}
                      </td>
                      <td>
                        <Link to={`/assetedit/${el._id}/`}>
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
    </div>
  );
};

export default ViewAsset;
