import { FC } from 'react';
import Background from './components/Background';
import Center from './components/Center';
import TodoList from './components/TodoList';
import Weather from './components/Weather';

const App: FC = () => {
  return (
    <Background>
      <Weather />
      <Center />
      <TodoList />
    </Background>
  );
};

export default App;
