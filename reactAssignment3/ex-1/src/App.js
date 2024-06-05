
import './App.css';
import FetchDataComponent from './components/FetchData';
import MouseMovementComponent from './components/MouseMovement';
import UpdateTitle from './components/UpdateTitle';
function App() {
  return (
    <div className="App">
    <FetchDataComponent/>
    <MouseMovementComponent/>
    <UpdateTitle/>
    </div>
  );
}

export default App;
