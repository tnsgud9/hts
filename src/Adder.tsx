import { useState, KeyboardEvent, ChangeEvent } from 'react';

const Adder = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const calculated = number1 + number2;
  const keyDown = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.id === 'number1') setNumber1(Number.parseInt(event.currentTarget.value, 10));
    if (event.target.id === 'number2') setNumber2(Number.parseInt(event.currentTarget.value, 10));
  };

  return (
    <>
      <input type="text" id="number1" onChange={keyDown} />
      <input type="text" id="number2" onChange={keyDown} />

      <section>{calculated}</section>
    </>
  );
};

export default Adder;
