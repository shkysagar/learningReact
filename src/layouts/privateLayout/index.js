import { Navigate } from 'react-router-dom';

const PrivateLayout = ({ component }) => {
  let is_logged_in = true;
  return is_logged_in ? component : <Navigate to="/login"></Navigate>;
};

export default PrivateLayout;
