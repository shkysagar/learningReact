import Header from '../../../components/header';
import Sidebar from '../../../components/sidebar';
import { Outlet } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminLayout = () => {
  return (
    <>
      <ToastContainer />
      <Header />

      <Sidebar />
      <Outlet />
    </>
  );
};

export default AdminLayout;
