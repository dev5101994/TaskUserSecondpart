
import './App.css';
import Login from './Login';
import Signup from './Signup'
import Home from "./Home"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Edit from './Edit';
function App() {
    return (
        <div className="App">
            {/* <Home /> */}
            {/* <Edit /> */}
            {/* <Login /> */}
            {/* <Signup /> */}
            <BrowserRouter>
                <Routes>
                    {/* <Route path='/' element={<Home />}></Route> */}
                    {/* <Route path='/' element={<Login />}></Route> */}
                    <Route path='/home' element={<Home />}></Route>
                    <Route path='/' element={<Signup />}></Route>
                    <Route path='/login' element={<Login />}></Route>
                    <Route path='/signup' element={<Signup />}></Route>
                    <Route path='/edit' element={<Edit />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
