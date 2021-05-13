import { useState, KeyboardEvent, ChangeEvent } from 'react';

const WelcomeName = () => {
  const [name, setName] = useState<string>();
  const updateName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
  };
  return (
    <section>
      <input type="text" onChange={updateName} />
      <h1>반갑습니다 {name}님</h1>
    </section>
  );
};

export default WelcomeName;
