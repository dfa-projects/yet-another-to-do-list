import './App.css';
import ToDoList from './components/ToDoList/ToDoList.js';
import InputField from './components/ToDoList/InputField.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ToDoList />
        <InputField />
      </header>
    </div>
  );
}

export default App;
