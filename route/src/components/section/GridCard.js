import React, { useEffect, useState } from "react";
import "./GridCard.css";

const GridCard = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const response = await fetch("htts://jsonplaceholder.typecode.com/users");
    setUsers(await response.json());
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <h2>List of Users</h2>
      <div className="container-fluid mt-5">
        <div className="row text-center">
          {users.map((curElem) => {
            return (
              <div className="col-10 col-md mt-5">
                <div className="card p-2">
                  <div className="d-flex align-items-center">
                    <div className="image">
                      <img
                        alt="User Img"
                        src={curElem.thumbnailUrl}
                        className="rounded"
                        width="155"
                      ></img>
                    </div>
                    <div className="ml-3 w-100">
                      <h4 className="mb-0 mt-0 textleft">
                        {curElem.login}
                        <span className="textleft">{curElem.title}</span>
                      </h4>
                      <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                        <div className="d-flex flex-collumn">
                          <span className="articles">Articles</span>
                          <span className="number1">38</span>
                        </div>
                        <div className="d-flex flex-collumn">
                          <span className="articles">Followers</span>
                          <span className="number1">980</span>
                        </div>
                        <div className="d-flex flex-collumn">
                          <span className="articles">Rating</span>
                          <span className="number1">8.9</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default GridCard;
