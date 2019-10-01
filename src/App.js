import React from 'react';
import TranslateComponent from "./TranslateComponent";
import styled from 'styled-components';
import img from './photos/background.jpg';

function App() {
  return (
    <AppRoot>
      <TranslateComponent/>
    </AppRoot>
  );
}

export default App;

const AppRoot = styled.div`
    background-image: url(${img});
    height: 100vh;
    width: 100vw;
    display: flex;
`;
