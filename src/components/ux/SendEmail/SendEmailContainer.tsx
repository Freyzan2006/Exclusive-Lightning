import { useState } from 'react';
import SendEmail from './SendEmail';

const SendEmailContainer: React.FC = () => {
  const [value, setValue] = useState<string>('');

  const onSubmit = (value: string) => {
    console.log(value);
  };

  return <SendEmail value={value} setValue={setValue} onSubmit={onSubmit} />;
};

export default SendEmailContainer;
