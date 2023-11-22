import './App.css';

import { Login } from './components/Login';
import { TodoApp } from './components/TodoApp';
import { Welcome } from './components/Welcome';

function App() {
  return (
    <div className="App">
      <TodoApp />
      <Login />
      {/* <Welcome /> */}
    </div>
  );
}

export default App;
