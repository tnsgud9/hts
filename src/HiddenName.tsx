import { useState, KeyboardEvent, ChangeEvent } from 'react';

const HiddenName = () => {
  const [name, setName] = useState<string>('');
  const updateName = (event: ChangeEvent<HTMLInputElement>) => {
    const e = event.currentTarget.value;
    setName(e.length > 3 ? e.charAt(0) + '*'.repeat(e.length - 2) + e.charAt(e.length - 1) : e);
  };
  return (
    <section>
      <h1>{name}</h1>
      <br />
      <input type="text" onChange={updateName} />
    </section>
  );
};
export default HiddenName;
