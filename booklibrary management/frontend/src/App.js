import { Routes, Route } from 'react-router-dom';
import { NavigationBar } from './Component/NavigationBar.js';
import { Student } from './Component/Student.js';
import { Main } from './Component/Main.js';
import { Login } from './Component/Login.js';
import Register from './Component/Register.js';
import AdminLogin from './Component/AdminLogin.js';
import RegLibrary from './Component/RegLibrary.js';
import { LoginBar } from './Component/LoginBar.js';
import LibrarianLogin from './Component/LibrarianLogin.js';
import './App.css'

function App() {
  return (
    <>
      <NavigationBar></NavigationBar>
      <div>
        <Routes>
          <Route path={"/"} element={<Main></Main>}></Route>
          <Route path='/adminlogin' element={<AdminLogin></AdminLogin>}></Route>
          <Route path={"/student-page"} element={<Student></Student>}></Route>
          <Route path="/main" element={<Main></Main>} />
          <Route path="/login" element={<Login></Login>} />
          <Route path="/registration" element={<Register></Register>} />
          <Route path='/reglibrary' element={<RegLibrary></RegLibrary>}></Route>
          <Route path='/loginbar' element={<LoginBar></LoginBar>} />
          <Route path='/librarianlogin' element={<LibrarianLogin></LibrarianLogin>} />
        </Routes>
      </div>

    </>
  );
}
export default App;