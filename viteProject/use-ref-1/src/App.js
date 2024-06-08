
import './App.css';
import UncontrolledInput from './components/UncontrolledInput';
import FocusInput from './components/focusInput';
import InteractiveElement from './components/InteractiveElement'

function App() {
  return (
    <div className="App">
      <FocusInput/>
      <UncontrolledInput/>
      <InteractiveElement/>
    </div>
  );
}

export default App;
