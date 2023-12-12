import Signup from './Signup'
import Dashboard from './Dashboard'
import Driver from './Driver'
import Login from './Login'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
   <BrowserRouter>
      <Routes>
        <Route path='/register' element = {<Signup />}></Route>
        <Route path='/login' element = {<Login />}></Route>
        <Route path='/dashboard' element = {<Dashboard />}></Route>
        <Route path='/driver' element = {<Driver/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
