import React, {useState} from 'react';
import {Card, Input, Button, Segment} from 'semantic-ui-react'
import {translateText} from "./utils/translator";
import styled from "styled-components";


const translate = (text, setTranslated) => async () => {
  let translations = await translateText(text);
  setTranslated(translations);
};

const TranslateComponent = () => {
  const [text, setText] = useState('');
  const [translated, setTranslated] = useState(undefined);
  return (
    <Center>
      <Card>
        <Card.Content header='Translations'/>
        <Card.Content>
          <Card.Header>Insert word</Card.Header>
          <Input focus value={text} onChange={(e) => setText(e.target.value)}/>
        </Card.Content>
        <Card.Content extra>
          <Button color='green' onClick={translate(text, setTranslated)}>Translate</Button>
        </Card.Content>
      </Card>
      {translated && translated.map(i => <Segment style={{direction:'rtl'}} key={i.translatedText}>{i.translatedText}</Segment>)}
    </Center>

  );
};

export default TranslateComponent;

const Center = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > * {
   min-width: 20em;
  }
`;
