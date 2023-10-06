import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./Login.module.css";
import logo from "../../assets/qua.png";

const Login = () => {
  const Navigate = useNavigate();

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = () => {
    const { email, password } = inputs;

    if (email === "admin" && password === "admin123") {
      // Acceso autorizado
      localStorage.setItem("token", "adminToken"); // Puedes usar un token real aquí
      Navigate("/home");
    } else {
      // Acceso denegado
      alert("Acceso denegado. Usuario y contraseña incorrectos.");
    }
  };

  const changeInputs = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={style.container}>
      <div className={style.background}>
        <div className={style.modal}>
          <div className={style.logo}>
            <img src={logo} alt="" />
          </div>
          <div className={style.formulario}>
            <h2>Time to Wake Up</h2>
            <label htmlFor="">Usuario</label>
            <input
              type="text"
              name="email"
              placeholder="User@email.com"
              onChange={(e) => {
                changeInputs(e);
              }}
              value={inputs.email}
            />
            <label htmlFor="">Contraseña</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              onChange={(e) => {
                changeInputs(e);
              }}
              value={inputs.password}
            />
            <div className={style.containerButton}>
              <button onClick={() => handleSubmit()}>Login</button>
              <button onClick={() => alert("Forgot the password?")}>
                Forgot the password?
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
