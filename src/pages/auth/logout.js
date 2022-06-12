import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Logout = () => {
  let navigate = useNavigate();
  localStorage.removeItem('stack_8_token');
  //redirect
  useEffect(() => {
    navigate('/login');
  }, []);
  return <></>;
};

export default Logout;
