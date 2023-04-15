
import {Routes,Route} from 'react-router-dom';
import './App.css';
import {Home} from './routes/home.jsx'
import {About} from './routes/about.jsx'
import {Contact} from './routes/contact.jsx'
import {Service} from './routes/service.jsx'

function App() {

  
  return (
    <div className='App'>
    <Routes>
<Route path='/' element={<Home />} />
<Route path='/about' element={<Home />} />
<Route path='/service' element={<Home />} />
<Route path='/contact' element={<Home />} />
    



 </Routes>
 
 </div> 
 
 
 );
}

export default App;
