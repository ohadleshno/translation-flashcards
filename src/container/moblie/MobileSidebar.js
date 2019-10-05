import React from 'react';
import PropTypes from 'prop-types';
import {Menu, Sidebar} from "semantic-ui-react";
import NavBarMenuItems from "../NavBarMenuItems";

export default function MobileSidebar({isSidebarOpen, closeSideBar}) {
  return <Sidebar
    as={Menu}
    animation='push'
    inverted
    color={"teal"}
    onHide={closeSideBar}
    vertical
    visible={isSidebarOpen}
  >
    <NavBarMenuItems onClickItem={closeSideBar}/>
  </Sidebar>;
}


MobileSidebar.propTypes = {
  closeSideBar: PropTypes.func,
  isSidebarOpen: PropTypes.bool
};