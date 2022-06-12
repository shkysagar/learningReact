import React, { useState } from 'react';
import Header from '../../../components/header';
import InputComponent from '../../../components/common/input.component';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
  //state hook
  let [username, setUsername] = useState();
  let [password, setPassword] = useState();

  let navigate = useNavigate();
  const submitForm = (e) => {
    e.preventDefault();

    axios
      .post(
        'https://openapi-ecom.herokuapp.com/api/v1/login',
        {
          email: username,
          password: password,
        },
        {
          headers: {
            'content-type': 'application/json',
          },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          if (response.data.status) {
            //success
            let token = response.data.result.token;
            localStorage.setItem('stack_8_token', token);
            toast.success(response.data.msg);
            navigate('/admin');
          } else {
            toast.error(response.data.msg);
          }
        }
        // console.log('Success: ', response);
      })
      .catch((error) => {
        // console.log('Error: ', error);
        toast.error(error.message);
      });
  };
  return (
    <>
      <Header />
      <h1>login</h1>
      <ToastContainer />
      <form onSubmit={submitForm}>
        <InputComponent
          type="email"
          name="email"
          required={true}
          placeholder="Enter you email"
          handleChange={setUsername}
        />
        <br />

        <InputComponent
          type="password"
          name="password"
          required={true}
          placeholder="Enter you password"
          handleChange={setPassword}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Login;
