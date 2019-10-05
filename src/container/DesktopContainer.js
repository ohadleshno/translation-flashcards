import React from 'react';
import PropTypes from 'prop-types';
import {Icon, Menu, Responsive, Visibility} from 'semantic-ui-react'
import NavBarMenuItems from './NavBarMenuItems';
import styled from 'styled-components';

const DesktopContainer = ({children}) => {
  return (
    <StyledResponsive minWidth={Responsive.onlyTablet.minWidth}>
      <Visibility once={false}>
        <Menu inverted color={'teal'}
        >
          <Menu.Item>
            <Icon name={'translate'}/>
            <span>Flash Cards</span>
          </Menu.Item>
          <NavBarMenuItems/>
        </Menu>
      </Visibility>
      {children}
    </StyledResponsive>
  )
};

DesktopContainer.propTypes = {
  children: PropTypes.node
};

const StyledResponsive = styled(Responsive)`
 &&& {
   display: flex;
   flex: 1;
   flex-direction: column;
 }
`;


export default DesktopContainer;
