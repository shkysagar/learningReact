import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from '../pages/home';
import { About } from '../pages/about';
import Login from '../pages/auth/login';
import { CategoryDetail } from '../pages/catagories-details';
import PrivateLayout from '../layouts/privateLayout';
import AdminLayout from '../layouts/privateLayout/adminLayout';
import AdminProfile from '../layouts/privateLayout/adminProfile';

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/category/:slug" element={<CategoryDetail />}></Route>

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
