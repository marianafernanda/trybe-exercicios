import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tarefinhas = ['Acordar', 'Escovar os dentes', 'Estudar']

function App() {
  return (
    <ul>{ tarefinhas.map(tarefa => Task(tarefa)) }</ul>
  );
}

export default App;
