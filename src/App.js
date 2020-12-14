import './App.css';
import MyComponent from './components/MyComponent';
import NavBar from './components/NavBar';
import Slides from './components/Slides';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Slides />
      <MyComponent />
    </div>
  );
}

export default App;
