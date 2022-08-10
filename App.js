import * as React from 'react';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import AppEntry from './src/stacks/AppEntry';



const App = () => {
  return (
    <Provider store={store}>
      <AppEntry />
    </Provider>
      
  );
}

export default App