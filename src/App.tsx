import { FC } from 'react';
import Background from './components/Background';
import Center from './components/Center';
import Links from './components/Links';
import Quote from './components/Quote';
import TodoList from './components/TodoList';
import Weather from './components/Weather';

const App: FC = () => {
  return (
    <Background>
      <Links />
      <Weather />
      <Center />
      <Quote />
      <TodoList />
    </Background>
  );
};

export default App;
