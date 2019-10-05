import React from 'react';
import {Icon, Menu} from 'semantic-ui-react';
import {NavLink} from 'react-router-dom';


const NavBarMenuItems = ({onClickItem}) => {
  return (
    <React.Fragment>
      <Menu.Item as={NavLink} onClick={onClickItem}  to='/'>
        <Icon name='home'/>
        Home
      </Menu.Item>
    </React.Fragment>
  );
};

export default NavBarMenuItems;