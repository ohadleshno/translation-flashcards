import React, {useState} from 'react';
import {translateText} from "./utils/translator";


const translate = (text, setTranslated) => async () => {
  let translations = await translateText(text);
  debugger;
  setTranslated(translations);
};

const TranslateComponent = () => {
  const [text, setText] = useState('');
  const [translated, setTranslated] = useState(undefined);
  return (
    <div>
      <input type='text' value={text} onChange={(e) => setText(e.target.value)}/>
      <button onClick={translate(text, setTranslated)}/>
      {translated && translated.map(i => <span key={i.translatedText}>{i.translatedText}</span>)}
    </div>
  );
};

export default TranslateComponent;