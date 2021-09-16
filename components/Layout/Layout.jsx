import { Footer, NavBar } from '../../components';

import PropTypes from 'prop-types';
import React from 'react';
import { StyledMain } from './Layout.styles';

const Layout = ({children}) => (
  <>
    <NavBar/>

    <StyledMain>{children}</StyledMain>
    
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
