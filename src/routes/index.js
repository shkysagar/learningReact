import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from 'react-router-dom';
import Homepage from '../pages/home';
import Login from '../pages/auth/login';
import AdminLayout from '../layouts/privateLayout/adminLayout';
import AdminProfile from '../layouts/privateLayout/adminProfile';
import PublicLayout from '../layouts/publicLayout';
import { useEffect } from 'react';

const PrivateLayout = ({ component }) => {
  let token = localStorage.getItem('stack_8_token');
  let is_logged_in = token ? true : false;
  return is_logged_in ? component : <Navigate to="/login"></Navigate>;
};

const Logout = () => {
  let navigate = useNavigate();
  localStorage.removeItem('stack_8_token');
  localStorage.removeItem('stack_8_user');
  //redirect
  useEffect(() => {
    navigate('/login');
  }, []);
  return <></>;
};

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route index element={<Homepage />}></Route>
        </Route>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/logout" element={<Logout />}></Route>

        <Route
          path="/admin"
          element={<PrivateLayout component={<AdminLayout />} />}>
          <Route path="profile" element={<AdminProfile />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
