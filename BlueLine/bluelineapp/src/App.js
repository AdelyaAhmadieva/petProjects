import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './global components/Header/Header';
import RouterController from './controllers/RouterController';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <div className='main'>
        <RouterController/>
      </div>
    </BrowserRouter>
  );
}

export default App;
