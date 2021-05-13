import { useState, KeyboardEvent, ChangeEvent } from 'react';

const ConditionalText = () => {
  const [text, setText] = useState<string>('');
  const updateText = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.currentTarget.value);
  };

  return (
    <section>
      <input onChange={updateText} />
      <h1>{text.length > 5 && text} </h1>
    </section>
  );
};

export default ConditionalText;
