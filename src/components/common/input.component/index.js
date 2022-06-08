import { useState } from 'react';

const InputComponent = (props) => {
  let [err, setErr] = useState();

  const handleChange = (e) => {
    let { name, value, required, type } = e.target;
    console.log(required);
    if (required && !value) {
      setErr(name + 'This is error');
    } else {
      if (type === 'email') {
        let msg = value.includes('@') ? '' : 'Invalid Email';
        setErr(msg);
      } else {
        setErr('');
      }
    }
  };
  return (
    <>
      <input
        name={props.name}
        type={props.type ?? 'text'}
        required={props.required ?? false}
        placeholder={props.placeholder ?? ''}
        defaultValue={props.defaultValue ?? ''}
        className={props.className ?? ''}
        onChange={handleChange}
      />
      <small>{err}</small>
    </>
  );
};

export default InputComponent;
