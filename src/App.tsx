import { FC } from 'react';
import Background from './components/Background';
import Center from './components/Center';
import Weather from './components/Weather';

const App: FC = () => {
  return (
    <Background>
      <Weather />
      <Center />
    </Background>
  );
};

export default App;
