import { Navigate } from 'react-router-dom';

const PrivateLayoutas = ({ component }) => {
  let token = localStorage.getItem('stack_8_token');
  let is_logged_in = token ? true : false;
  return is_logged_in ? component : <Navigate to="/login"></Navigate>;
};

export default PrivateLayout;
