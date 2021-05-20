import React, { ChangeEvent, ChangeEventHandler, KeyboardEvent, useState } from 'react';
import Test from './pages/Test';
import Trade from './pages/Trade';
import Calculator from './pages/Test/components/Calculator';
import logo from './logo.svg';
import './App.css';
import Button from './Button';
import Title from './Title';
import Text from './Text';
import Adult from './Adult';
import Photo from './Photo';
import Counter from './Counter';
import Adder from './Adder';
import WelcomeName from './WelcomeName';
import ConditionalText from './ConditionalText';
import HiddenName from './HiddenName';

const App = () => {
  const [latestName, setLatestName] = useState('');
  const updateLastestName = (name: string) => {
    setLatestName(name);
    console.log(name);
  };

  const preventKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    console.log(event.key);
    if (event.key === 'h') {
      event.preventDefault();
      event.stopPropagation();
    }
  };
  return (
    <>
      <Trade />
    </>
  );
};
/*
<HiddenName />
      <ConditionalText />
      <WelcomeName />
      <Adder />
      <Counter defaultCount={1} />
      <Button name="hello" callback={updateLastestName} />
      <Button name="world" callback={updateLastestName} />
      <Button name="NEXTOP" callback={updateLastestName} />
      <input type="text" onKeyDown={preventKeyDown} />
*/
export default App;
