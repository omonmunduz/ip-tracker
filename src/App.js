import './App.css';
import InputAndCoordinates from './components/InputAndCoordinates';
import IPProvider from './context/IPProvider';

function App() {
  return (
    <div className="app">
      <div className="search-box">
        <IPProvider>
          <InputAndCoordinates/>
        </IPProvider>
      </div>
    </div>
  );
}

export default App;
