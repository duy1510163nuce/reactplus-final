import React, { useState, useEffect } from "react";
import "./RegisterContainer.css";
import ImgDone from "../../asset/image/Done.png";
import { Input, Form, Button } from "antd";
import { Controller, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { ValidationRegister } from "../../common/YupSchema";
import { pushData } from "../../service/HandleData";
import { useNavigate } from "react-router-dom";

let yup = require("yup");
export default function RegisterContainer() {
  const [infoUser, setInfoUser] = useState();
  const [checkPassword, setCheckPassword] = useState(false);
  const {
    handleSubmit,
    control,

    formState: { errors, isValid },
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    resolver: yupResolver(ValidationRegister),
  });

  const navigate = useNavigate();
  const onSubmit = (data) => {
    if (data.password === data.confirmPassword) {
      setInfoUser({
        createdAt: new Date(),
        name: data.name,
        avatar:
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/433.jpg",
        password: data.password,
        email: data.email,
      });
      setCheckPassword(false);
    } else {
      setCheckPassword(true);
    }
  };
  useEffect(() => {
    const postData = async () => {
      if (infoUser) {
        const path = "/users";
        await pushData(path, infoUser);
        navigate("/login");
        setInfoUser();
      }
    };
    postData();
  }, [infoUser]);

  return (
    <div className="Register-container">
      <div className="regis-banner">
        <img alt="img banner" src={ImgDone} className="regis-img-banner" />
      </div>
      <div className="content">
        <p className="regis-title">Get’s things done </p>
        <p className="regis-title">with TODO </p>
        <p className="regis-description">Let’s help you meet up your tasks</p>
      </div>
      <Form onFinish={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="name"
          render={({ field }) => (
            <Input
              {...field}
              placeholder="Enter your full name"
              className="input"
              status={errors.name && "error"}
            />
          )}
        />

        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <Input
              {...field}
              placeholder="Enter your email"
              className="input"
              status={errors.email && "error"}
            />
          )}
        />

        <Controller
          control={control}
          name="password"
          render={({ field }) => (
            <Input.Password
              {...field}
              placeholder="Enter your password"
              className="input"
              status={errors.password && "error"}
            />
          )}
        />

        <Controller
          control={control}
          name="confirmPassword"
          render={({ field }) => (
            <Input.Password
              {...field}
              placeholder="confirm password"
              className="input"
              status={checkPassword && "error"}
            />
          )}
        />
        {checkPassword && (
          <span style={{ color: "red", marginLeft: "35%" }}>
            password does not match
          </span>
        )}

        <Button htmlType="submit" className="btn-regis">
          Register
        </Button>
      </Form>
      <div className="footer">
        <span>Already have an account ? </span>
        <Link to="/login">Sign In</Link>
      </div>
    </div>
  );
}
