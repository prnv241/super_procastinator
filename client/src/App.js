import React from 'react';
import './App.css';
import AppNavbar from './components/appNavbar';
import Todolist from './components/todos';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/storeConfig';

const store = ConfigureStore();
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavbar />
        <Todolist />
      </div>
    </Provider>
  );
}

export default App;
