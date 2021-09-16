import Footer from '../Footer';
import NavBar from '../NavBar';
import PropTypes from 'prop-types';
import React from 'react';
//import { Test } from './Layout.styles';

const Layout = ({children}) => (
  <>
    <NavBar/>

    <main>{children}</main>
    
    <Footer/>
  </>
);

Layout.propTypes = {
  // bla: PropTypes.string,
};

Layout.defaultProps = {
  // bla: 'test',
};

export default Layout;
