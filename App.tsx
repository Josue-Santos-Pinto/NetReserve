import { StatusBar } from 'react-native';
import Home from './src/screens/Home';
import { ThemeProvider } from '@shopify/restyle/dist/context';
import { theme } from './src/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <Home />
    </ThemeProvider>
  );
};

export default App;
