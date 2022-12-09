import React from "react";
import ImgDone from "../../asset/image/Done.png";
import "./LoginContainer.css";
import { Input, Form, Button } from "antd";
import { Controller, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { ValidationLogin } from "../../common/YupSchema";
import { useNavigate } from "react-router-dom";

let yup = require("yup");

export default function LoginContainer() {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    resolver: yupResolver(ValidationLogin),
  });
  const navigate = useNavigate();
  const onSubmit = (data) => {
    navigate("/user");
  };
  return (
    <div className="login-container">
      <div className="login-banner">
        <img alt="img banner" src={ImgDone} className="login-img-banner" />
      </div>
      <div className="content">
        <p className="login-title">Welcome back </p>
        <p className="login-title"> to </p>
        <p className="login-description">OUR REMINDER</p>
      </div>
      <Form onFinish={handleSubmit(onSubmit)}>
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
              status={errors.email && "error"}
            />
          )}
        />

        <Button htmlType="submit" className="btn-login">
          Sign In
        </Button>
      </Form>
      <div className="footer">
        <span>Already have an account ? </span>
        <Link to="/register">Sign up</Link>
      </div>
    </div>
  );
}
