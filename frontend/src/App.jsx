import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import AddMortgage from './components/AddMortgage';
import DeleteMortgage from './components/DeleteMortgage';
import EditMortgage from './components/EditMortgage';
import ShowMortgage from './components/ShowMortgage';
import Home from './pages/Home'

import {Routes,Route, BrowserRouter} from 'react-router-dom';

function App() {
 

  return (
    <>
   
   <BrowserRouter>
   <Home/>
        <Routes>
              <Route path='/add' element={<AddMortgage/>}></Route>
              <Route path='/show' element={<ShowMortgage/>}></Route>
              <Route path='/update/:Id' element={<EditMortgage/>}></Route>
              <Route path='/delete/:Id' element={<DeleteMortgage/>}></Route>
        </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
