import * as React from 'react';
import 'react-native-gesture-handler';
import AppEntry from './src/stacks/AppEntry';
import AuthStack from './src/stacks/AuthStack';
import { Provider } from 'react-redux/es/exports';
import store from './src/redux/store'


const App = () => {
  return (
    <Provider store={store}>
      <AuthStack />
    </Provider>
      
  );
}

export default App