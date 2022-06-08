import React, { useState } from 'react';
import Header from '../../../components/header';
import InputComponent from '../../../components/common/input.component';

const Login = (props) => {
  //state hook
  let [username, setUsername] = useState();
  let [password, setPassword] = useState();

  return (
    <>
      <Header />
      <h1>login</h1>

      <form action="">
        <InputComponent
          type="email"
          name="email"
          required={true}
          defaultValue=""
          placeholder="Enter you email"
          handleChange={setUsername}
        />

        <InputComponent
          type="password"
          name="password"
          required={true}
          defaultValue=""
          placeholder="Enter you password"
          handleChange={setPassword}
        />

        <button>Submit</button>
      </form>
    </>
  );
};

export default Login;
