import Header from '../../../components/header';
import Sidebar from '../../../components/sidebar';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <Outlet />
    </>
  );
};

export default AdminLayout;
