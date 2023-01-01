import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';

const NavLayout = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
};

export default NavLayout;
