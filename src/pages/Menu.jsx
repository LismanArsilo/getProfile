import React, { useEffect, useState } from "react";
import axios from "axios";
import config from "../config/config";
import "./menu.css";

export default function Menu() {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    axios.get(`${config.domain}/users?page=1`).then((respons) => {
      setDatas(respons.data.data);
    });
  }, []);
  const dataId = datas.filter((e) => e.id === 5);

  console.info(dataId);
  return (
    <div>
      <div>
        <table border={1} className="list">
          <thead className="listHead">
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>email</th>
              <th>Profile</th>
            </tr>
          </thead>
          <tbody>
            {datas.map((list) => {
              return (
                <tr key={list.id} className="listBody">
                  <td>{list.first_name}</td>
                  <td>{list.last_name}</td>
                  <td>{list.first_name}</td>
                  <td>
                    <img src={list.avatar} alt="" />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div style={{ textAlign: "center", boder: "1px" }}>
        {dataId.map((card) => {
          return (
            <div key={card.id}>
              <p>{card.first_name}</p>
              <p>{card.last_name}</p>
              <p>{card.email}</p>
              <img src={card.avatar} alt={card.first_name} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
