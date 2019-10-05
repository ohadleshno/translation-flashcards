import React from 'react';
import PropTypes from 'prop-types';
import DesktopContainer from './DesktopContainer';
import MobileContainer from './moblie/MobileContainer';
import styled from 'styled-components';

const ResponsiveContainer = ({children}) => (
    <AppRoot>
      <DesktopContainer>{children}</DesktopContainer>
      <MobileContainer>{children}</MobileContainer>
    </AppRoot>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node
};

const AppRoot = styled.div`
    background-color:#f7f7f7;
    height: 100vh;
    width: 100vw;
    display: flex;
`;

export default ResponsiveContainer;