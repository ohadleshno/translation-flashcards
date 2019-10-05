import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Container, Icon, Menu, Responsive, Segment, Sidebar} from 'semantic-ui-react';
import MobileSidebar from "./MobileSidebar";

function closeSideBar(setIsSidebarOpen) {
  return () => setIsSidebarOpen(false);
}

const MobileContainer = ({children}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Responsive style={{flex:1,display:'flex'}} as={Sidebar.Pushable} maxWidth={Responsive.onlyMobile.maxWidth}>
      <MobileSidebar isSidebarOpen={isSidebarOpen} closeSideBar={closeSideBar(setIsSidebarOpen)}/>
      <Sidebar.Pusher style={{flex:1,display:'flex',flexDirection:'column'}} dimmed={isSidebarOpen}>
        <Segment inverted color={'teal'} textAlign='center' vertical>
          <Container>
            <Menu inverted secondary size='large'>
              <Menu.Item onClick={() => setIsSidebarOpen(true)}>
                <Icon name='sidebar'/>
              </Menu.Item>
            </Menu>
          </Container>
        </Segment>
        {children}
      </Sidebar.Pusher>
    </Responsive>
  );
};

MobileContainer.propTypes = {
  children: PropTypes.node
};

export default MobileContainer;