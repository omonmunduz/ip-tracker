import './App.css';
import InputAndCoordinates from './components/InputAndCoordinates';
import IPProvider from './context/IPProvider';
import Mapp from './components/Mapp';

function App() {
  return (
    <div className="app">
      <div className="search-box">
        <IPProvider>
          <InputAndCoordinates/>
          <Mapp />
        </IPProvider>
      </div>
    </div>
  );
}

export default App;
