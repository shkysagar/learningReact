import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from '../pages/home';
import Login from '../pages/auth/login';
import AdminLayout from '../layouts/privateLayout/adminLayout';
import AdminProfile from '../layouts/privateLayout/adminProfile';
import PublicLayout from '../layouts/publicLayout';
import PrivateLayout from '../layouts/privateLayout';
import Logout from '../pages/auth/logout';

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route index element={<Homepage />}></Route>
        </Route>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/login" element={<Login />}></Route>

        <Route
          path="/admin"
          element={<PrivateLayout component={<AdminLayout />} />}>
          <Route path="profile" element={<AdminProfile />}></Route>
          <Route path="logout" element={<Logout />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
