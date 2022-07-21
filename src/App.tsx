import Background from './components/Background';
import Center from './components/Center';
import Weather from './components/Weather';

const App = () => {
  return (
    <Background>
      <Weather />
      <Center />
    </Background>
  );
};

export default App;
