import React, { useEffect, useState } from "react";
import "./UserContainer.css";
import User from "../../asset/image/Group 4.png";
import Clock from "../../asset/image/Group 7.png";
import Add from "../../asset/image/plus-circle.png";
import { Button, Checkbox } from "antd";
import { getData } from "../../service/HandleData";
import { formatTime } from "../../common/FormatDate";
import { Link } from "react-router-dom";

export default function UserContainer() {
  const [listWork, setListWork] = useState([]);
  useEffect(() => {
    const path = "/tasks";
    const getApi = async () => {
      const todoList = await getData(path);
      setListWork(todoList);
    };
    getApi();
  }, []);
  return (
    <div className="user-container">
      <div className="user-banner">
        <img alt="img banner" src={User} className="user-img-banner" />
        <p className="user-name">Monica Gamage</p>
        <p className="user-tagname">@monicagamage</p>
        <Link to="/login" className="user-btn-logout">
          Log out
        </Link>
      </div>
      <div className="user-clock">
        <img alt="img clock" src={Clock} className="user-img-clock" />
        <p className="user-title">Good Afternoon</p>
      </div>
      <div className="user-todo">
        <h1 className="todo-title">Tasks List</h1>

        <div className="user-todoList">
          <div className="todoList-header">
            <p className="todoList-title">Tasks List</p>
            <img alt="img add" src={Add} className="user-img-add" />
          </div>
          <ul className="list-nav">
            {listWork &&
              listWork.map((todo, id) => {
                return (
                  <div className="nav-item" key={id}>
                    <Checkbox
                      className="btn-check"
                      defaultChecked={todo.completed}
                    />
                    <li className="todo-name">{todo.name} at</li>
                    <li>{formatTime(todo.createdAt)}</li>
                  </div>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
}
