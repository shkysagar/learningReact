import React, { useEffect, useState } from 'react';
import Header from '../../../components/header';
import InputComponent from '../../../components/common/input.component';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { login } from '../../../services/auth';

const Login = (props) => {
  //state hook
  let [username, setUsername] = useState();
  let [password, setPassword] = useState();

  let navigate = useNavigate();

  const submitForm = async (e) => {
    e.preventDefault();

    try {
      let response = await login(username, password);
      //dashboard
      navigate('/admin');
      toast.success(response.data.msg);

      console.log('response: ', response);
    } catch (error) {
      //to do error handle
      toast.error(error.msg);
    }
  };

  useEffect(() => {
    let token = localStorage.getItem('stack_8_token');
    if (token) {
      navigate('/admin');
    }
  }, []);

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
