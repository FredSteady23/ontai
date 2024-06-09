import React, { useState } from "react";
import "./CSS/LoginSignup.css";

const LoginSignup = () => {

  const [state,setState] = useState("Кіру");
  const [formData,setFormData] = useState({username:"",email:"",password:""});

  const changeHandler = (e) => {
    setFormData({...formData,[e.target.name]:e.target.value});
    }

  const login = async () => {
    let dataObj;
    await fetch('http://localhost:4000/login', {
      method: 'POST',
      headers: {
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((resp) => resp.json())
      .then((data) => {dataObj=data});
      console.log(dataObj);
      if (dataObj.success) {
        localStorage.setItem('auth-token',dataObj.token);
        window.location.replace("/");
      }
      else
      {
        alert(dataObj.errors)
      }
  }

  const signup = async () => {
    let dataObj;
    await fetch('http://localhost:4000/signup', {
      method: 'POST',
      headers: {
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((resp) => resp.json())
      .then((data) => {dataObj=data});

      if (dataObj.success) {
        localStorage.setItem('auth-token',dataObj.token);
        window.location.replace("/");
      }
      else
      {
        alert(dataObj.errors)
      }
  }

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state==="Тіркелу"?<input type="text" placeholder="Сіздің атыңыз" name="username" value={formData.username} onChange={changeHandler}/>:<></>}
          <input type="email" placeholder="Почта адресі" name="email" value={formData.email} onChange={changeHandler}/>
          <input type="password" placeholder="Құпия сөз" name="password" value={formData.password} onChange={changeHandler}/>
        </div>

        <button onClick={()=>{state==="Login"?login():signup()}}>Жалғастыру</button>

        {state==="Кіру"?
        <p className="loginsignup-login">Аккаунты тіркеу? <span onClick={()=>{setState("Тіркелу")}}>Мында басыңыз</span></p>
        :<p className="loginsignup-login">Аккаунтыңыз әлдеқашан бар ма? <span onClick={()=>{setState("Кіру")}}>Кіру</span></p>}

        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>Жалғастыру арқылы мен пайдалану шарттарымен және құпиялылық саясатымен келісемін.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
