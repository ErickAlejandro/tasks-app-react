import './App.css';
import Logo from './components/container-logo';
import ListTasks from './components/tasks-list';

function App() {
  return (
    <div className="app-tasks">
      <Logo></Logo>
      <div className='task-list-main'>
        <h1>My tasks</h1>
        <ListTasks />
      </div>
    </div>
  );
}

export default App;
