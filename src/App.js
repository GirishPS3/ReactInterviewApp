import logo from './logo.svg';
import './App.css';
import FormComponent from './FormComponent';
import Counter from './Counter';
import { BrowserRouter, Route, Routes,} from 'react-router-dom';

function App() {
  return (
    <div className='App'>

    
    <BrowserRouter>
    <Routes>
  
        <Route exact path='/' element={<FormComponent/>}/>
        <Route path='/counter' element={<Counter/>}/>
    </Routes>
    </BrowserRouter>
    </div>
    
  );
}

export default App;
